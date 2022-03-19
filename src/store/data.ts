import {defineStore} from 'pinia';

export const useDataStore = defineStore({
        id: 'data',

        state: () => ({
            appVersion: import.meta.env.VITE_APP_VERSION as string | undefined,
            customers: [],
            products: [],
        }),
        actions: {
            async initData() {
                if (this.customers.length == 0) {
                    console.debug('fetching data ...');

                    await fetch('/data/customers-medium.json').then(res => res.json()).then(d => {
                        this.customers = d.data;
                    })
                        .catch((error) => console.log(error));


                    await fetch('/data/products.json').then(res => res.json()).then(d => {
                        this.products = d.data;
                    })
                        .catch((error) => console.log(error));
                    ;

                }
            },
        },

    }
);
