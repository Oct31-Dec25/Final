<template>
    <div>
        {{ $store }}
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
            user: state => state,
        })
    },
}
</script>
<style></style>