<script>
    import { page, useForm } from '@inertiajs/inertia-svelte'
    import { route } from '@/Utils'
    import { timer, time, isRunning, isComplete } from '@/Stores/countdown-timer'

    import BreezeAuthenticatedLayout, { title } from '@/Layouts/Authenticated.svelte'
    import BreezeButton from '@/Components/Button.svelte'
    import BreezeInput from '@/Components/Input.svelte'
    import Dialog from '@/Components/Dialog.svelte'
    import Card from '@smui/card'
    import ColumnChart from '@/Components/ColumnChart.svelte'
    import YouTubeLogo from '@/Components/YouTubeLogo.svelte'

    $: $title = ejercicioInfo.nombre

    export let slug
    export let categoria
    export let ejercicioInfo
    export let ejercicios
    export let pesoHistory
    export let repeticionesHistory
    export let promedioDescanso

    let dialog = false

    let form = useForm({
        nombre_ejercicio: slug,
        cantidad_repeticiones: null,
        peso: null,
        tiempo_descanso: null,
    })

    $: if ($isComplete) {
        $form.post(route('series.store'), { preserveScroll: true })
        timer.finish()
    }
    function submit() {
        timer.start($form.tiempo_descanso * 1000)
    }

    function back() {
        window.history.back()
    }
</script>

<BreezeAuthenticatedLayout>
    <div class="py-12 px-2">
        <div class="lg:px-8 max-w-7xl mx-auto sm:px-6 sm:max-w-xl">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-center font-black">{categoria}</div>
                <div class="text-center">{ejercicioInfo.nombre}</div>
                <img src="/storage/{ejercicioInfo.categoria}/{ejercicioInfo.imagen}" class="h-24 mx-auto mt-4 mb-4" alt={ejercicioInfo.nombre} />
                {#if ejercicioInfo.link_video}
                    <a href={ejercicioInfo.link_video} class="flex inline-block justify-center mb-2 opacity-90" target="_blank">
                        <YouTubeLogo />
                    </a>
                {/if}
            </div>
            <BreezeButton type="button" class="w-full rounded-b-full" on:click={() => (dialog = true)}>
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Añadir serie
                </div>
            </BreezeButton>
        </div>

        <div class="mt-2 flex items-center justify-center max-w-4xl mt-2 mx-auto flex-col">
            {#each ejercicios.data as ejercicio}
                <div class="card-container w-full">
                    <Card variant="outlined" padded>
                        <div class="flex items-center justify-around">
                            <small>Sesión: {ejercicio.numero_sesion} / Serie {ejercicio.numero_serie}</small>
                            <small>{ejercicio.peso} kg</small>
                            <small>{ejercicio.cantidad_repeticiones} repeticiones</small>
                        </div>
                    </Card>
                </div>
            {/each}
        </div>
    </div>
    <div class="{promedioDescanso < 60 ? 'text-red-400 bg-red-100' : 'bg-white'} p-4 mb-10">
        <p class="text-center text-sm"><strong>Tiempo de descanso promedio:</strong> {promedioDescanso} segundos</p>
        <small class="block mt-2 text-center">Hipertrofia entre 60 y 120 segundos</small>
    </div>
    <hr />
    <ColumnChart bind:values={pesoHistory} chartType="peso" />
    <hr />
    <ColumnChart bind:values={repeticionesHistory} chartType="repeticiones" />

    <Dialog bind:open={dialog}>
        <div slot="title" class="text-center">Añadir serie</div>
        <div slot="content">
            <form on:submit|preventDefault={submit} id="form">
                <!-- <div>
                    <BreezeInput id="numero_serie" type="number" class="mt-1 block w-full" input$min="0" bind:value={$form.numero_serie} label="¿En cuál serie va?" required autofocus />
                </div> -->

                <div class="mt-4">
                    <BreezeInput id="cantidad_repeticiones" type="number" class="mt-1 block w-full" input$min="0" bind:value={$form.cantidad_repeticiones} label="¿Cuántas repeticiones hizo?" required />
                </div>

                <div class="mt-4">
                    <BreezeInput id="peso" type="number" class="mt-1 block w-full" input$min="0" input$step="0.1" bind:value={$form.peso} label="¿Cuánto peso utilizó?" required />
                </div>

                <div class="mt-4">
                    <BreezeInput id="tiempo_descanso" type="number" class="mt-1 block w-full" input$min="0" bind:value={$form.tiempo_descanso} label="¿Cuánto tiempo va a descansar?" required />
                </div>
            </form>
        </div>
        <div slot="actions">
            <div class="p-4">
                <BreezeButton on:click={() => (dialog = false)} variant={null}>Cancelar</BreezeButton>
                <BreezeButton variant="raised" class={$isRunning ? 'ml-4' : 'ml-4'} bind:disabled={$isRunning} form="form">
                    <div class={$isRunning ? 'flex flex-col items-center justify-center' : ''}>
                        {#if !$isRunning}
                            {#if $form.processing}
                                Añadiendo
                            {:else}
                                Añadir
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

    <BreezeButton on:click={() => back()} class="fixed bottom-0 z-50" style="background: var(--mdc-theme-primary, #6200ee);border-radius: 0 28px 0 0;" variant="raised">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
    </BreezeButton>
</BreezeAuthenticatedLayout>
