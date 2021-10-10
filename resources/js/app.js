require('./bootstrap')

import { createInertiaApp } from '@inertiajs/inertia-svelte'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}.svelte`),
    setup({ el, App, props }) {
        new App({ target: el, props })
    },
})

InertiaProgress.init({ color: '#4B5563' })
