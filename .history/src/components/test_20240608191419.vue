<template>
    <div>
        {{ $store.state.class }}
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
            user: state => state.user,
        })
    },
}
</script>
<style></style>