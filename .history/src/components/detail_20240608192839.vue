<template>
    
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            booklistDownload: state => state.booklistDownload,
        })
    },
}
</script>
<style></style>