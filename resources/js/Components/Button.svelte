<script>
    import Button, { Label } from '@smui/button'

    $: props = {
        type: 'submit',
        variant: 'raised',
        height: '100px',
        ...$$restProps,
        class: `${$$restProps.class || ''}`,
    }
</script>

<Button {...props} action={null} on:click>
    <Label>
        <slot />
    </Label>
</Button>
