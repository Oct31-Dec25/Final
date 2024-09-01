<template>
    <div>
        {{ $store.state.name }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            classi: state => state.user,
        })
    },
}
</script>
<style></style>