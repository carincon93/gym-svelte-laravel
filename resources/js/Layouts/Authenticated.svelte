<script context="module">
    import { writable } from 'svelte/store'
    export const title = writable(null)
</script>

<script>
    import { route } from '@/Utils'
    import { page, useForm } from '@inertiajs/inertia-svelte'

    import BreezeApplicationLogo from '@/Components/ApplicationLogo.svelte'
    import BreezeDropdown from '@/Components/Dropdown.svelte'
    import BreezeDropdownLink from '@/Components/DropdownLink.svelte'
    import BreezeNavLink from '@/Components/NavLink.svelte'
    import BreezeResponsiveNavLink from '@/Components/ResponsiveNavLink.svelte'
    import Link from '@/Components/Link.svelte'
    import Dialog from '@/Components/Dialog.svelte'
    import BreezeInput from '@/Components/Input.svelte'
    import BreezeButton from '@/Components/Button.svelte'
    import BreezeFile from '@/Components/File.svelte'

    let showingNavigationDropdown = false
    let dialog = false

    let form = useForm({
        nombre: '',
        imagen: null,
        categoria: '',
        link_video: '',
    })
    function submit() {
        $form.post(route('ejercicios.store'), { onFinish: () => (dialog = false), preserveScroll: true })
    }
</script>

<svelte:head>
    <title>{$title ? `${$title}` : ''}</title>
</svelte:head>

<div>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white border-b border-gray-100">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center">
                            <Link href={route('dashboard')}>
                                <BreezeApplicationLogo class="block h-9 w-auto" />
                            </Link>
                        </div>

                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <BreezeNavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</BreezeNavLink>
                        </div>
                    </div>

                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <!-- Settings Dropdown -->
                        <div class="ml-3 relative">
                            <BreezeDropdown align="right" width="48">
                                <div>
                                    <span class="inline-flex rounded-md">
                                        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                            {$page.props.auth.user.name}

                                            <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>

                                <div slot="dropdown" class="mt-2 py-2 shadow-xl bg-white rounded text-sm">
                                    <BreezeDropdownLink href={route('logout')} method="post" as="button" class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                                        </svg>
                                        Salir
                                    </BreezeDropdownLink>
                                </div>
                            </BreezeDropdown>
                        </div>
                    </div>

                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button on:click={() => (showingNavigationDropdown = !showingNavigationDropdown)} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path class={showingNavigationDropdown ? 'hidden' : 'inline-flex'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path class={!showingNavigationDropdown ? 'hidden' : 'inline-flex'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Responsive Navigation Menu -->
            <div class={showingNavigationDropdown ? 'block sm:hidden' : 'hidden sm:hidden'}>
                <div class="pt-2 pb-3 space-y-1">
                    <BreezeResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</BreezeResponsiveNavLink>
                    <BreezeResponsiveNavLink href={route('sesion.index')} active={route().current('sesion.index')}>Sesión del día</BreezeResponsiveNavLink>
                    <div class="block border-l-4 text-gray-600 duration-150 ease-in-out focus:bg-indigo-100 focus:border-indigo-700 focus:outline-none focus:text-indigo-800 font-medium pl-3 pr-4 py-2 text-base transition" on:click={() => (dialog = true)} variant={null}>Crear ejercicio</div>
                </div>

                <!-- Responsive Settings Options -->
                <div class="pt-4 pb-1 border-t border-gray-200">
                    <div class="px-4">
                        <div class="font-medium text-base text-gray-800">{$page.props.auth.user.name}</div>
                        <div class="font-medium text-sm text-gray-500">{$page.props.auth.user.email}</div>
                    </div>

                    <div class="mt-3 space-y-1">
                        <BreezeResponsiveNavLink href={route('logout')} method="post" as="button">Salir</BreezeResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Page Heading -->
        {#if $$slots.header}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>
        {/if}

        <!-- Page Content -->
        <main>
            <slot />
        </main>
    </div>
</div>

<Dialog bind:open={dialog}>
    <div slot="title" class="text-center">Añadir ejercicio</div>
    <div slot="content">
        <form on:submit|preventDefault={submit} id="form">
            <div class="mt-4">
                <BreezeInput id="nombre" type="text" class="mt-1 block w-full" bind:value={$form.nombre} label="Nombre" required />
            </div>

            <div class="mt-4">
                <BreezeInput id="categoria" type="text" class="mt-1 block w-full" bind:value={$form.categoria} label="Categoría" required />
            </div>

            <div class="mt-4">
                <BreezeFile id="imagen" type="file" maxSize="10000" accept=".png,.jpeg,.jpg" class="mt-1 block w-full" bind:value={$form.imagen} label="Imagen" required />
            </div>

            <div class="mt-4">
                <BreezeInput id="link_video" type="url" class="mt-1 block w-full" bind:value={$form.link_video} label="Link del video" />
            </div>
        </form>
    </div>
    <div slot="actions">
        <div class="p-4">
            <BreezeButton on:click={() => (dialog = false)} variant={null}>Cancelar</BreezeButton>
            <BreezeButton variant="raised" bind:disabled={$form.processing} form="form">
                <div>
                    {#if $form.processing}
                        Añadiendo
                    {:else}
                        Añadir
                    {/if}
                </div>
            </BreezeButton>
        </div>
    </div>
</Dialog>
