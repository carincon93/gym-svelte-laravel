<script>
    import { Inertia } from '@inertiajs/inertia'
    import { route } from '@/Utils'

    import BreezeAuthenticatedLayout, { title } from '@/Layouts/Authenticated.svelte'
    import BreezeButton from '@/Components/Button.svelte'

    export let ejercicios

    $: $title = 'Dashboard'
</script>

<BreezeAuthenticatedLayout>
    <div class="py-12 px-2">
        <div class="gap-4 grid grid-cols-3 lg:px-8 max-w-7xl mx-auto sm:px-6">
            {#each ejercicios as ejercicio}
                <BreezeButton on:click={() => Inertia.visit(route('ejercicios.index', [ejercicio.categoria]))} class="p-10 text-xs" type="button">
                    {ejercicio.categoria}
                </BreezeButton>
            {/each}
        </div>
    </div>
</BreezeAuthenticatedLayout>
