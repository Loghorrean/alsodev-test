import {Product} from "@/utils/types";
import calfSauce from "@/assets/products/gusi-lebedi/calf-sauce.jpg";
import chick from "@/assets/products/gusi-lebedi/chick.jpg";
import chickenSoup from "@/assets/products/gusi-lebedi/chicken-soup.jpg";
import dumplings from "@/assets/products/gusi-lebedi/dumplings.jpg";
import ear from "@/assets/products/gusi-lebedi/ear.jpg";
import pigChop from "@/assets/products/gusi-lebedi/pig-chop.jpg";
import plov from "@/assets/products/gusi-lebedi/plov.jpg";
import squid from "@/assets/products/gusi-lebedi/squid.jpg";
import zander from "@/assets/products/gusi-lebedi/zander.jpg";

export const provideGusiLebedi = (): Array<Product> => {
    return [
        {
            id: "gl01",
            name: "Пельмени теленок с поросем",
            description: "Настоящие самолепные пельмени из пушистого теста на деревенских желтках и сметане",
            price: 390,
            image: dumplings
        },
        {
            id: "gl02",
            name: "Плов",
            description: "Плов на углях из правильного риса с бараниной, пряностями и овощами на курдючном жире",
            price: 520,
            image: plov
        },
        {
            id: "gl03",
            name: "Цыпленок на вертеле",
            description: "Подается на лаваше со свежим томатом и огурцом, с маринованным луком и с шашлычным соусом",
            price: 490,
            image: chick
        },
        {
            id: "gl04",
            name: "Суп Курочка ряба",
            description: "Кура тушка, морковь, макароны, зелень, яйцо, соль, специи.",
            price: 140,
            image: chickenSoup
        },
        {
            id: "gl05",
            name: "Отбивная из поросенка",
            description: "Толстый кусок парной свинины с томатами и грибами под сырной корочкой",
            price: 490,
            image: pigChop
        },
        {
            id: "gl06",
            name: "Теленок в сливочном соусе",
            description: "Теленок с шампиньонами и луком обжаривается в сливочно-сметанном соусе с картофельным пюре и солеными огурчиками.",
            price: 530,
            image: calfSauce
        },
        {
            id: "gl07",
            name: "Судак запеченный",
            description: "Филе судака с картошкой, деревенской сметаной, травами и луком",
            price: 490,
            image: zander
        },
        {
            id: "gl08",
            name: "Мурманские кальмары",
            description: "Мурманские кальмары с чесночным маслом",
            price: 420,
            image: squid
        },
        {
            id: "gl09",
            name: "Щучья уха на карасях",
            description: "Наваристая походная уха на четырех рыбах, лаврухе, перце и луке с водкой.",
            price: 380,
            image: ear
        }
    ];
}