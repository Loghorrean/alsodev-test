import {createApp, ref, Ref} from 'vue'
import App from './App.vue'
import DetailedRestaurant from "@/routes/DetailedRestaurant.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import RestaurantsList from "@/routes/RestaurantsList.vue";
import {CartEntry} from "@/components/entities/cart/model";
import {Product} from "@/utils/types";

export type CartState = {
    state: Ref<Array<CartEntry>>;
    addNewEntry: (product: Product) => void;
    removeEntry: (id: string) => void;
    incrementEntry: (id: string) => void;
    decrementEntry: (id: string) => void;
    clear: () => void;
}

const cartState = ref<Array<CartEntry>>([]);

const addNewEntry = (product: Product) => {
    cartState.value.push({ id: product.id, name: product.name, amount: 1, price: product.price });
}

const removeEntry = (id: string) => {
    cartState.value = cartState.value.filter(item => item.id !== id);
}

const incrementEntry = (id: string) => {
    const entry = cartState.value.filter(item => item.id === id)[0];
    if (typeof entry !== "undefined") {
        entry.amount = entry.amount + 1;
    }
}

const decrementEntry = (id: string) => {
    const entry = cartState.value.filter(item => item.id === id)[0];
    if (typeof entry !== "undefined") {
        const amount = entry.amount - 1;
        if (amount > 0) {
            entry.amount = amount;
            return;
        }
        removeEntry(id);
    }
}

const clearCart = () => {
    cartState.value = [];
}

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: RestaurantsList, name: "list" },
    { path: "/restaurant/:slug", component: DetailedRestaurant, name: "detailed" }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);

app.provide<CartState>("cart", {
    state: cartState,
    addNewEntry,
    removeEntry,
    incrementEntry,
    decrementEntry,
    clear: clearCart
});

app.use(router);

app.mount('#app')
