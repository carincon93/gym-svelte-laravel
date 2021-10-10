<script context="module">
    import GuestLayout from '@/Layouts/Guest'
    export const layout = GuestLayout
</script>

<script>
    import { useForm } from '@inertiajs/inertia-svelte'
    import { route } from '@/Utils'

    import BreezeButton from '@/Components/Button.svelte'
    import BreezeInput from '@/Components/Input.svelte'
    import Checkbox from '@smui/checkbox'
    import BreezeValidationErrors from '@/Components/ValidationErrors.svelte'
    import Link from '@/Components/Link.svelte'
    import FormField from '@smui/form-field'

    export let canResetPassword
    export let status

    let form = useForm({
        email: '',
        password: '',
        remember: false,
    })

    function submit() {
        $form.post(route('login'), {
            onFinish: () => $form.reset('password'),
        })
    }
</script>

<svelte:head>
    <title>Log in</title>
</svelte:head>

<BreezeValidationErrors class="mb-4" />

{#if status}
    <div class="mb-4 font-medium text-sm text-green-600">
        {status}
    </div>
{/if}

<form on:submit|preventDefault={submit}>
    <div>
        <BreezeInput id="email" type="email" class="mt-1 block w-full" bind:value={$form.email} label="Correo electrónico" required autofocus autocomplete="username" />
    </div>

    <div class="mt-4">
        <BreezeInput id="password" type="password" class="mt-1 block w-full" bind:value={$form.password} label="Contraseña" required autocomplete="current-password" />
    </div>

    <div class="block mt-4">
        <FormField>
            <Checkbox bind:checked={$form.remember} />
            <span slot="label">Remember me.</span>
        </FormField>
    </div>

    <div class="flex items-center justify-end mt-4">
        {#if canResetPassword}
            <Link href={route('password.request')} class="underline text-sm text-gray-600 hover:text-gray-900">Forgot your password?</Link>
        {/if}

        <BreezeButton class={$form.processing ? 'opacity-25 ml-4' : 'ml-4'} bind:disabled={$form.processing}>Log in</BreezeButton>
    </div>
</form>
