<template>
    <div>
        {{ booklist }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    created: {

    },
    computed: {
        ...mapState({
            booklist: state => state.booklist,
        })
    },
}
</script>
<style></style>