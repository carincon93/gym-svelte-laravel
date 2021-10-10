<script context="module">
    import GuestLayout from '@/Layouts/Guest'
    export const layout = GuestLayout
</script>

<script>
    import { useForm } from '@inertiajs/inertia-svelte'
    import { route } from '@/Utils'

    import BreezeButton from '@/Components/Button.svelte'
    import BreezeInput from '@/Components/Input.svelte'
    import BreezeLabel from '@/Components/Label.svelte'
    import BreezeValidationErrors from '@/Components/ValidationErrors.svelte'
    import Link from '@/Components/Link.svelte'

    let form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    })

    function submit() {
        $form.post(route('register'), {
            onFinish: () => $form.reset('password', 'password_confirmation'),
        })
    }
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<BreezeValidationErrors class="mb-4" />

<form on:submit|preventDefault={submit}>
    <div>
        <BreezeInput id="name" type="text" class="mt-1 block w-full" bind:value={$form.name} label="Nombre" required autofocus autocomplete="name" />
    </div>

    <div class="mt-4">
        <BreezeInput id="email" type="email" class="mt-1 block w-full" bind:value={$form.email} label="Correo electrónico" required autocomplete="username" />
    </div>

    <div class="mt-4">
        <BreezeInput id="password" type="password" class="mt-1 block w-full" bind:value={$form.password} label="Contraseña" required autocomplete="new-password" />
    </div>

    <div class="mt-4">
        <BreezeInput id="password_confirmation" type="password" class="mt-1 block w-full" bind:value={$form.password_confirmation} label="Repetir la contraseña" required autocomplete="new-password" />
    </div>

    <div class="flex items-center justify-end mt-4">
        <Link href={route('login')} class="underline text-sm text-gray-600 hover:text-gray-900">Already registered?</Link>

        <BreezeButton class={$form.processing ? 'opacity-25 ml-4' : 'ml-4'} bind:disabled={$form.processing}>Register</BreezeButton>
    </div>
</form>
