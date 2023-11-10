import {Product} from "@/utils/types";
import caesar from "@/assets/products/pizza-burger/pizza-caesar.jpg";
import chef from "@/assets/products/pizza-burger/pizza-chef.jpg";
import dacha from "@/assets/products/pizza-burger/pizza-dacha.jpg";
import meat from "@/assets/products/pizza-burger/pizza-meat.jpg";
import pepperoni from "@/assets/products/pizza-burger/pizza-pepperoni.jpg";
import village from "@/assets/products/pizza-burger/pizza-village.jpg";

export const providePizzaBurger = (): Array<Product> => {
    return [
        {
            id: "pb01",
            name: "Пицца от Шеф-повара",
            description: "Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина",
            price: 638,
            image: dacha
        },
        {
            id: "pb02",
            name: "Пицца Мясное ассорти",
            description: "Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень",
            price: 693,
            image: meat
        },
        {
            id: "pb03",
            name: "Пицца Деревенская",
            description: "Сыр моцарелла, пицца соус, чеснок, сыр пармезан, шампиньоны, помидоры, зелень, лук, курица, бекон, ветчина, пепперони",
            price: 705,
            image: village
        },
        {
            id: "pb04",
            name: "Пицца Цезарь",
            description: "Соус Цезарь, куриная грудка, сыр пармезан, моцарелла, гренки, помидоры, салат айсберг",
            price: 759,
            image: caesar
        },
        {
            id: "pb05",
            name: "Пицца Пепперони",
            description: "Сыр моцарелла, пицца соус, шампиньоны, пепперони",
            price: 475,
            image: pepperoni
        },
        {
            id: "pb06",
            name: "Пицца Дачная",
            description: "Сыр моцарелла, пицца соус, бекон, картофель фри, куриная грудка, помидоры, пепперони, ветчина, зелень",
            price: 649,
            image: dacha
        }
    ];
}