import {Product} from "@/utils/types";
import azhi from "@/assets/products/tanuki/azhi.jpg";
import black from "@/assets/products/tanuki/black.jpg";
import fresh from "@/assets/products/tanuki/fresh.jpg";
import nisuaz from "@/assets/products/tanuki/nisuaz.jpg";
import smoke from "@/assets/products/tanuki/smoke.jpg";
import tanuki from "@/assets/products/tanuki/tanuki.jpg";

export const provideTanuki = (): Array<Product> => {
    return [
        {
            id: "tn01",
            name: "ФИЛАДЕЛЬФИЯ НИСУАЗ",
            description: "Угорь, авокадо, сыр, тобико, соус «Нисуаз», кунжут, 6 шт.",
            price: 455,
            image: nisuaz
        },
        {
            id: "tn02",
            name: "ФИЛАДЕЛЬФИЯ СМОУК",
            description: "Лосось копченый, курица копченая, омлет, огурец, авокадо, сыр, микс соусов, 6 шт.",
            price: 455,
            image: smoke
        },
        {
            id: "tn03",
            name: "ФИЛАДЕЛЬФИЯ ФРЕШ",
            description: "Лосось, авокадо, огурец, сыр, омлет, тобико, микс соусов",
            price: 455,
            image: fresh
        },
        {
            id: "tn04",
            name: "КАЛИФОРНИЯ АЖИ",
            description: "Лосось, авокадо, краб-микс, сыр, соус «Ажи-маракуйя», тобико, кунжут, 6 шт.",
            price: 455,
            image: azhi
        },
        {
            id: "tn05",
            name: "КАЛИФОРНИЯ БЛЭК",
            description: "Креветка, краб-микс, сыр, тобико, микс соусов, кунжут, 6 шт.",
            price: 455,
            image: black
        },
        {
            id: "tn06",
            name: "ТАНУКИ",
            description: "Креветка, снежный краб, гуакамоле, сыр, огурец, микс соусов, тобико, кунжут, 6 шт.",
            price: 649,
            image: tanuki
        }
    ]
}