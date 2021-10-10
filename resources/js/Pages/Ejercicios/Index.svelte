<script>
    import { Inertia } from '@inertiajs/inertia'
    import { route } from '@/Utils'

    import BreezeAuthenticatedLayout, { title } from '@/Layouts/Authenticated.svelte'

    export let ejercicios
    export let categoria

    $: $title = categoria
</script>

<BreezeAuthenticatedLayout>
    <div class="py-12">
        <div class="lg:px-8 max-w-7xl mx-auto sm:px-6">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 border-b border-gray-200">{categoria}</div>
            </div>

            {#each ejercicios as ejercicio}
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex items-center" on:click={() => Inertia.visit(route('ejercicios.show', [ejercicio.categoria, ejercicio.slug]))}>
                    <div class="p-6 titulo-ejercicio">{ejercicio.nombre}</div>
                    <img src="/storage/{categoria}/{ejercicio.imagen}" class="h-24" alt="" />
                </div>
            {/each}
        </div>
    </div>
</BreezeAuthenticatedLayout>

<style>
    .titulo-ejercicio {
        flex-basis: 100%;
    }
</style>
