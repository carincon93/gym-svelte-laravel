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

    export let email
    export let token

    let form = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    })

    function submit() {
        $form.post(route('password.update'), {
            onFinish: () => $form.reset('password', 'password_confirmation'),
        })
    }
</script>

<svelte:head>
    <title>Reset Password</title>
</svelte:head>

<BreezeValidationErrors class="mb-4" />

<form on:submit|preventDefault={submit}>
    <div>
        <BreezeLabel for="email" value="Email" />
        <BreezeInput id="email" type="email" class="mt-1 block w-full" bind:value={$form.email} required autofocus autocomplete="username" />
    </div>

    <div class="mt-4">
        <BreezeLabel for="password" value="Password" />
        <BreezeInput id="password" type="password" class="mt-1 block w-full" bind:value={$form.password} required autocomplete="new-password" />
    </div>

    <div class="mt-4">
        <BreezeLabel for="password_confirmation" value="Confirm Password" />
        <BreezeInput id="password_confirmation" type="password" class="mt-1 block w-full" bind:value={$form.password_confirmation} required autocomplete="new-password" />
    </div>

    <div class="flex items-center justify-end mt-4">
        <BreezeButton class={$form.processing ? 'opacity-25' : ''} bind:disabled={$form.processing}>Reset Password</BreezeButton>
    </div>
</form>
