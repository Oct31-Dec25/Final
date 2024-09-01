<template>
    <div>
        {{ booklistDownload[0] }}
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
            booklistDownload: state => state.booklistDownload,
        })
    },
}
</script>
<style></style>