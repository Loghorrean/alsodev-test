import {Product} from "@/utils/types";
import pizzaVesuvius from "@/assets/products/pizza-plus/pizza-vesuvius.jpg";
import pizzaClassic from "@/assets/products/pizza-plus/pizza-classic.jpg";
import pizzaGirls from "@/assets/products/pizza-plus/pizza-girls.jpg";
import pizzaHawaiian from "@/assets/products/pizza-plus/pizza-hawaiian.jpg";
import pizzaOleole from "@/assets/products/pizza-plus/pizza-oleole.jpg";
import pizzaPlus from "@/assets/products/pizza-plus/pizza-plus.jpg";

export const providePizzaPlus = (): Array<Product> => {
    return [
        {
            id: "pp01",
            name: "Пицца Везувий",
            description: "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.",
            price: 545,
            image: pizzaVesuvius
        },
        {
            id: "pp02",
            name: "Пицца Девичник",
            description: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.",
            price: 450,
            image: pizzaGirls
        },
        {
            id: "pp03",
            name: "Пицца Оле-Оле",
            description: "Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез",
            price: 440,
            image: pizzaOleole
        },
        {
            id: "pp04",
            name: "Пицца Плюс",
            description: "Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони, телятина, грибы, бекон, болгарский перец.",
            price: 805,
            image: pizzaPlus
        },
        {
            id: "pp05",
            name: "Пицца Гавайская",
            description: "Соус томатный, сыр «Моцарелла», ветчина, ананасы",
            price: 440,
            image: pizzaHawaiian
        },
        {
            id: "pp06",
            name: "Пицца Классика",
            description: "Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.",
            price: 510,
            image: pizzaClassic
        }
    ]
}