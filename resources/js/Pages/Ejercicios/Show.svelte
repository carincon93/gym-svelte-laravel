<script>
    import { Inertia } from '@inertiajs/inertia'
    import { page, useForm } from '@inertiajs/inertia-svelte'
    import { route } from '@/Utils'
    import { timer, time, isRunning, isComplete } from '@/Stores/countdown-timer'

    import BreezeAuthenticatedLayout, { title } from '@/Layouts/Authenticated.svelte'
    import BreezeButton from '@/Components/Button.svelte'
    import BreezeInput from '@/Components/Input.svelte'
    import Dialog from '@/Components/Dialog.svelte'
    import Card, { Content } from '@smui/card'
    import ColumnChart from '@/Components/ColumnChart.svelte'

    $: $title = 'Aductores'

    export let slug
    export let categoria
    export let ejercicioInfo
    export let ejercicios
    export let pesoHistory

    let dialog = false
    let done = false

    let form = useForm({
        numero_sesion: $page.props.auth.user.sesion.numero_sesion,
        nombre_ejercicio: slug,
        numero_repeticion: null,
        cantidad_repeticiones: null,
        peso: null,
        tiempo_descanso: null,
    })

    $: if ($isComplete) {
        submit()
        timer.finish()
    }
    function submit() {
        $form.post(route('repeticiones.store'), { preserveScroll: true })
    }
</script>

<BreezeAuthenticatedLayout>
    <div class="py-12">
        <div class="lg:px-8 max-w-7xl mx-auto sm:px-6">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-center font-black">{categoria}</div>
                <div class="text-center">{ejercicioInfo.nombre}</div>
                <img src="/storage/{ejercicioInfo.categoria}/{ejercicioInfo.imagen}" class="h-24 mx-auto mt-4 mb-4" alt={ejercicioInfo.nombre} />
            </div>
        </div>
        <BreezeButton type="button" class="w-full rounded-b-full" on:click={() => (dialog = true)}>
            <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Añadir repetición
            </div>
        </BreezeButton>

        <div class="mt-2">
            {#each ejercicios.data as ejercicio}
                <div class="card-container">
                    <Card variant="outlined" padded>
                        <div class="flex items-center justify-around">
                            <span>{ejercicio.peso} kg</span>
                            <span>{ejercicio.cantidad_repeticiones} repeticiones</span>
                        </div>
                    </Card>
                </div>
            {/each}
        </div>

        <ColumnChart bind:values={pesoHistory} />

        <Dialog bind:open={dialog}>
            <div slot="title" class="text-center">Guardar repetición</div>
            <div slot="content">
                <form on:submit|preventDefault={submit} id="form">
                    <div>
                        <BreezeInput id="numero_repeticion" type="number" class="mt-1 block w-full" input$min="0" bind:value={$form.numero_repeticion} label="¿En cuál repetición va?" required autofocus />
                    </div>

                    <div class="mt-4">
                        <BreezeInput id="cantidad_repeticiones" type="number" class="mt-1 block w-full" input$min="0" bind:value={$form.cantidad_repeticiones} label="¿Cuántas repeticiones hizo?" required />
                    </div>

                    <div class="mt-4">
                        <BreezeInput id="peso" type="number" class="mt-1 block w-full" input$min="0" input$step="0.1" bind:value={$form.peso} label="¿Cúanto peso utilizó?" required />
                    </div>

                    <div class="mt-4">
                        <BreezeInput id="tiempo_descanso" type="number" class="mt-1 block w-full" input$min="0" bind:value={$form.tiempo_descanso} label="¿Cuánto tiempo va a descansar?" required />
                    </div>
                </form>
            </div>
            <div slot="actions">
                <div class="p-4">
                    <BreezeButton on:click={() => (dialog = false)} variant={null}>Cancelar</BreezeButton>
                    <BreezeButton variant="raised" class={$isRunning ? 'ml-4' : 'ml-4'} bind:disabled={$isRunning} on:click={() => timer.start($form.tiempo_descanso * 1000)}>
                        <div class={$isRunning ? 'flex flex-col items-center justify-center' : ''}>
                            {#if !$isRunning}
                                {#if $form.processing}
                                    Guardando
                                {:else}
                                    Guardar
                                {/if}
                            {/if}

                            {#if $isRunning}
                                <small class="countdown">{$time}</small>
                            {/if}
                        </div>
                    </BreezeButton>
                </div>
            </div>
        </Dialog>
    </div>
</BreezeAuthenticatedLayout>