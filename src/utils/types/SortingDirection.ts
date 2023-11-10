export const SORTING_DIRECTION = {
    ASC: "ASC",
    DESC: "DESC"
} as const;

export type SortingDirection = typeof SORTING_DIRECTION[keyof typeof SORTING_DIRECTION];