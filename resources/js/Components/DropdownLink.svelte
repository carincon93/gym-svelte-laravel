<script>
    import { inertia } from '@inertiajs/inertia-svelte'

    export let href

    $: props = {
        ...$$restProps,
        method: 'get',
        class: `block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${$$restProps.class || ''}`,
    }
</script>

<a use:inertia={{ method: $$restProps.method }} {...props} {href}>
    <slot />
</a>
