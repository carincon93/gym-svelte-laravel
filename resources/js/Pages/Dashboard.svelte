<script>
    import { Inertia } from '@inertiajs/inertia'
    import { route } from '@/Utils'

    import BreezeAuthenticatedLayout, { title } from '@/Layouts/Authenticated.svelte'

    export let ejercicios

    $: $title = 'Dashboard'
</script>

<BreezeAuthenticatedLayout>
    <div class="py-12">
        <div class="gap-4 grid grid-cols-3 lg:px-8 max-w-7xl mx-auto sm:px-6">
            {#each ejercicios as ejercicio}
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg" on:click={() => Inertia.visit(route('ejercicios.index', [ejercicio.categoria]))}>
                    <div class="text-center py-6 bg-white border-b border-gray-200 capitalize">{ejercicio.categoria}</div>
                </div>
            {/each}
        </div>
    </div>
</BreezeAuthenticatedLayout>
