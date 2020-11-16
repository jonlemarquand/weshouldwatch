<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

button {
    width: 200px;
    padding: 20px;
    color: $green;
    background: $black;
    border: 3px solid $green;
    border-radius: 10px;
    margin: 20px 0;
    font-family: $primaryFont;
    font-size: 2em;
    text-transform: uppercase;

&:hover {
    background: $green;
    color: $black;
    cursor: pointer;
}

}

</style>