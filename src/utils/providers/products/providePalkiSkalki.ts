import {Product} from "@/utils/types";
import combo from "@/assets/products/palki-skalki/combo.jpg";
import burrito from "@/assets/products/palki-skalki/burrito.jpg";
import cheeseburger from "@/assets/products/palki-skalki/cheeseburger.jpg";
import fusion from "@/assets/products/palki-skalki/fusion.jpg";
import rome from "@/assets/products/palki-skalki/rome.jpg";
import udon from "@/assets/products/palki-skalki/udon.jpg";

export const providePalkiSkalki = (): Array<Product> => {
    return [
        {
            id: "ps01",
            name: "Комбо 3 пиццы",
            description: "Пепперони, Чикен Барбекю, Капричеза",
            price: 899,
            image: combo
        },
        {
            id: "ps02",
            name: "Пицца Римская",
            description: "30 см. Корнишоны, томатный соус, колбаса, красный лучок, сыр моцарелла, помидоры Черри, зелень.",
            price: 408,
            image: rome
        },
        {
            id: "ps03",
            name: "Пицца Фьюжн",
            description: "Сыр моцарелла, соус томатный, курица, пепперони, перец болгарский, томаты, лук красный, соус бургер, лук зеленый",
            price: 499,
            image: fusion
        },
        {
            id: "ps04",
            name: "Эби удон",
            description: "Японский супчик на мисо бульоне с добавлением яйца, тигровой креветки, лапши, шампиньонов и зеленого лучка.",
            price: 319,
            image: udon
        },
        {
            id: "ps05",
            name: "Чизбургер",
            description: "Мясная котлета, салат Айсберг, Шеф-соус, помидоры, корнишоны, сыр Чеддер, соус Барбекю",
            price: 358,
            image: cheeseburger
        },
        {
            id: "ps06",
            name: "Буррито с курицей",
            description: "Сыр, помидор, цыпленок, перец сладкий, лук, салат, яичный блинчик, соус сырный, тортилья, кетчуп",
            price: 356,
            image: burrito
        }
    ];
}