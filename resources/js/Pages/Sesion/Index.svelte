<script>
    import { Inertia } from '@inertiajs/inertia'
    import { page, useForm } from '@inertiajs/inertia-svelte'
    import { route } from '@/Utils'

    import BreezeAuthenticatedLayout, { title } from '@/Layouts/Authenticated.svelte'
    import BreezeButton from '@/Components/Button.svelte'
    import Textfield from '@smui/textfield'

    export let ejercicios

    $: $title = 'Sesión del día'

    let form = useForm({
        ejercicio_id: null,
    })

    function submit(ejercicioID) {
        $form.post(route('user-ejercicio.store', ejercicioID), { preserveScroll: true })
    }

    let formSesion = useForm({
        numero_sesion: $page.props.auth.user.sesion?.numero_sesion,
    })
</script>

<BreezeAuthenticatedLayout>
    <div class="py-12">
        <div class="lg:px-8 max-w-7xl mx-auto sm:px-6">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 border-b border-gray-200 text-center sm:text-left">Sesión del día</div>

                <div class="px-4 flex items-center justify-between">
                    <small class="text-gray-500">Configure el número de la sesión de entrenamiento</small>
                    <Textfield id="numero_sesion" variant="outlined" type="number" class="mt-1 w-1/4" input$min="0" bind:value={$formSesion.numero_sesion} on:input={$formSesion.numero_sesion > 0 ? $formSesion.post(route('sesiones.store'), { preserveScroll: true }) : null} />
                </div>
            </div>

            {#each ejercicios as ejercicio}
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg flex justify-between mb-1 shadow-md">
                    <div class="flex items-center" on:click={() => Inertia.visit(route('ejercicios.show', [ejercicio.categoria, ejercicio.slug]))}>
                        <div class="p-6 titulo-ejercicio text-sm">{ejercicio.nombre}</div>
                        <img src="/storage/{ejercicio.categoria.toLowerCase()}/{ejercicio.imagen}" class="h-24" alt="" />
                    </div>
                    <BreezeButton on:click={() => submit(ejercicio.id)} class="h-auto" type="button" variant={null}>
                        {#if ejercicio.users.filter((user) => user.pivot.ejercicio_id == ejercicio.id).length > 0}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        {:else}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        {/if}
                    </BreezeButton>
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
