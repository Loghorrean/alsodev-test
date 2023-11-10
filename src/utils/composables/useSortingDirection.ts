import {Ref, ref, UnwrapRef} from "vue";
import {SORTING_DIRECTION, SortingDirection} from "@/utils/types/SortingDirection";

export const useSortingDirection = (initial?: SortingDirection): [Ref<UnwrapRef<SortingDirection | null>>, () => void] => {
    const direction = ref<SortingDirection | null>(initial ?? null);
    const toggleDirection = () => {
        if (direction.value === null) {
            direction.value = SORTING_DIRECTION.ASC;
            return;
        }
        if (direction.value === SORTING_DIRECTION.ASC) {
            direction.value = SORTING_DIRECTION.DESC;
            return;
        }
        direction.value = null;
    }
    return [
        direction,
        toggleDirection
    ];
}