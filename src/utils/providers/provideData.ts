import {Restaurant} from "@/utils/types";
import pizzaPlusImage from "@/assets/restaurants/pizza-plus.jpg";
import tanukiImage from "@/assets/restaurants/tanuki.jpg";
import foodBandImage from "@/assets/restaurants/food-band.jpg";
import palkiSkalkiImage from "@/assets/restaurants/palki-skalki.jpg";
import gusiLebediImage from "@/assets/restaurants/gusi-lebedi.jpg";
import pizzaBurgerImage from "@/assets/restaurants/pizza-burger.jpg";
import {providePizzaPlus} from "@/utils/providers/products/providePizzaPlus";
import {provideTanuki} from "@/utils/providers/products/provideTanuki";
import {provideFoodBand} from "@/utils/providers/products/provideFoodBand";
import {providePalkiSkalki} from "@/utils/providers/products/providePalkiSkalki";
import {provideGusiLebedi} from "@/utils/providers/products/provideGusiLebedi";
import {providePizzaBurger} from "@/utils/providers/products/providePizzaBurger";

export const provideData = (): Array<Restaurant> => {
    return [
        {
            name: "Пицца Плюс",
            slug: "pizza-plus",
            time_of_delivery: 50,
            stars: 4.5,
            price: 440,
            kitchen: "Пицца",
            image: pizzaPlusImage,
            products: providePizzaPlus()
        },
        {
            name: "Тануки",
            slug: "tanuki",
            time_of_delivery: 60,
            stars: 4.3,
            price: 455,
            kitchen: "Суши, роллы",
            image: tanukiImage,
            products: provideTanuki()
        },
        {
            name: "FoodBand",
            slug: "food-band",
            time_of_delivery: 40,
            stars: 4.4,
            price: 595,
            kitchen: "Пицца",
            image: foodBandImage,
            products: provideFoodBand()
        },
        {
            name: "Палки скалки",
            slug: "palki-skalki",
            time_of_delivery: 55,
            stars: 4.1,
            price: 319,
            kitchen: "Пицца",
            image: palkiSkalkiImage,
            products: providePalkiSkalki()
        },
        {
            name: "Гуси Лебеди",
            slug: "gusi-lebedi",
            time_of_delivery: 75,
            stars: 4.7,
            price: 140,
            kitchen: "Русская кухня",
            image: gusiLebediImage,
            products: provideGusiLebedi()
        },
        {
            name: "PizzaBurger",
            slug: "pizza-burger",
            time_of_delivery: 45,
            stars: 4.6,
            price: 638,
            kitchen: "Пицца",
            image: pizzaBurgerImage,
            products: providePizzaBurger()
        }
    ];
}