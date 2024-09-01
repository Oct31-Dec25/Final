<template>
    <div>
        {{ $store.state. }}
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
            user: state => state.classify,
        })
    },
}
</script>
<style></style>