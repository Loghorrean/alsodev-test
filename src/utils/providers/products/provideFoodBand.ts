import {Product} from "@/utils/types";
import margarita from "@/assets/products/food-band/margarita.jpg";
import meat from "@/assets/products/food-band/meet.jpg";
import norwegian from "@/assets/products/food-band/norwegian.jpg";
import pepperoni from "@/assets/products/food-band/pepperoni.jpg";
import sevenCheeses from "@/assets/products/food-band/seven-cheeses.jpg";
import tomYam from "@/assets/products/food-band/tom-yam.jpg";

export const provideFoodBand = (): Array<Product> => {
    return [
        {
            id: "fb01",
            name: "Мясная",
            description: "Пицца соус, сыр Моцарелла, томат, куриное филе, пепперони, свинина, бекон",
            price: 685,
            image: meat
        },
        {
            id: "fb02",
            name: "Маргарита",
            description: "Пицца соус, сыр Моцарелла, томат",
            price: 693,
            image: margarita
        },
        {
            id: "fb03",
            name: "Пепперони",
            description: "Пицца соус, пепперони, сыр Моцарелла",
            price: 595,
            image: pepperoni
        },
        {
            id: "fb04",
            name: "Семь сыров",
            description: "Сыр моцарелла, сыр эмменталь, соус сырный, сыр горгондзола, сыр чеддер, сыр креметте, сыр фетакса, сыр пармезан",
            price: 785,
            image: sevenCheeses
        },
        {
            id: "fb05",
            name: "Том Ям",
            description: "Креветки, куриное филе, соус Том Ям, сыр Моцарелла, шампиньоны, капуста брокколи, томат.",
            price: 695,
            image: tomYam
        },
        {
            id: "fb06",
            name: "Норвежская",
            description: "Сливочный соус, соус манго-чили, сыр моцарелла, лук красный, перец болгарский, ломтики лосося, салат Айсберг",
            price: 875,
            image: norwegian
        }
    ];
}