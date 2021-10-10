<script>
    import Label from '@/Components/Label'
    import InputError from './InputError'
    import Textfield from '@smui/textfield'

    export let id
    export let value
    export let label
    export let error
    export let type
    export let disabled

    let input

    export const focus = () => input.focus()
    export const select = () => input.select()

    $: props = {
        variant: 'outlined',
        ...$$restProps,
        class: `w-full block bg-white ${$$restProps.class || ''}`,
    }

    function update(event) {
        value = event.target.value
    }
</script>

<div class={$$restProps.class}>
    <Label {label} {id} />

    <Textfield {disabled} {...props} bind:this={input} {id} {type} {value} on:input={update} {label} />
    {#if error}
        <InputError message={error} />
    {/if}
</div>
