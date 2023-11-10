import {Product} from "@/utils/types/Product";

export type Restaurant = {
    name: string;
    slug: string;
    time_of_delivery: number;
    stars: number;
    price: number;
    kitchen: string;
    image: string;
    products: Array<Product>;
}