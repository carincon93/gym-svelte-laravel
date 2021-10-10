<script context="module">
    import GuestLayout from '@/Layouts/Guest'
    export const layout = GuestLayout
</script>

<script>
    import { route } from '@/Utils'
    import { useForm } from '@inertiajs/inertia-svelte'

    import BreezeButton from '@/Components/Button.svelte'
    import Link from '@/Components/Link.svelte'

    export let status

    let form = useForm()

    function submit() {
        $form.post(route('verification.send'))
    }

    function verificationLinkSent() {
        return status === 'verification-link-sent'
    }
</script>

<svelte:head>
    <title>Email Verification</title>
</svelte:head>

<div class="mb-4 text-sm text-gray-600">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</div>

{#if verificationLinkSent}
    <div class="mb-4 font-medium text-sm text-green-600">A new verification link has been sent to the email address you provided during registration.</div>
{/if}

<form on:submit|preventDefault={submit}>
    <div class="mt-4 flex items-center justify-between">
        <BreezeButton class={$form.processing ? 'opacity-25' : ''} bind:disabled={$form.processing}>Resend Verification Email</BreezeButton>

        <Link href={route('logout')} method="post" as="button" class="underline text-sm text-gray-600 hover:text-gray-900">Log Out</Link>
    </div>
</form>
