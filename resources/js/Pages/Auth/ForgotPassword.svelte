<script context="module">
    import GuestLayout from '@/Layouts/Guest'
    export const layout = GuestLayout
</script>

<script>
    import { useForm } from '@inertiajs/inertia-svelte'
    import BreezeButton from '@/Components/Button.svelte'
    import BreezeInput from '@/Components/Input.svelte'
    import BreezeValidationErrors from '@/Components/ValidationErrors.svelte'

    export let status
    export let errors

    let form = useForm({
        email: '',
    })

    function submit() {
        $form.post(route('password.email'))
    }
</script>

<svelte:head>
    <title>Forgot Password</title>
</svelte:head>

<div class="mb-4 text-sm text-gray-600">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</div>

{#if status}
    <div class="mb-4 font-medium text-sm text-green-600">
        {status}
    </div>
{/if}

<BreezeValidationErrors class="mb-4" />

<form on:submit|preventDefault={submit}>
    <div>
        <BreezeInput id="email" type="email" class="mt-1 block w-full" bind:value={$form.email} label="Correo electrónico" error={errors.email} required autofocus autocomplete="username" />
    </div>

    <div class="flex items-center justify-end mt-4">
        <BreezeButton class={$form.processing ? 'opacity-25' : ''} bind:disabled={$form.processing}>Email Password Reset Link</BreezeButton>
    </div>
</form>
