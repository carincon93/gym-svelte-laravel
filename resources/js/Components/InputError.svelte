<script>
    export let message

    $: props = {
        ...$$restProps,
        class: `text-red-400 bg-red-100 py-1 px-2 ${$$restProps.class || ''}`,
    }
</script>

{#if message}
    <div {...props}>
        <p>
            {message}
        </p>
    </div>
{/if}
