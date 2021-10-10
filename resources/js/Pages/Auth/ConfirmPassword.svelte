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

    let form = useForm({
        password: '',
    })

    function submit() {
        $form.post(route('password.confirm'), {
            onFinish: () => $form.reset(),
        })
    }
</script>

<svelte:head>
    <title>Confirm Password</title>
</svelte:head>

<div class="mb-4 text-sm text-gray-600">This is a secure area of the application. Please confirm your password before continuing.</div>

<BreezeValidationErrors class="mb-4" />

<form on:submit|preventDefault={submit}>
    <div>
        <BreezeLabel for="password" value="Password" />
        <BreezeInput id="password" type="password" class="mt-1 block w-full" value={$form.password} required autocomplete="current-password" autofocus />
    </div>

    <div class="flex justify-end mt-4">
        <BreezeButton class={$form.processing ? 'opacity-25 ml-4' : 'ml-4'} :disabled="form.processing">Confirm</BreezeButton>
    </div>
</form>
