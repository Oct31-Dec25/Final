<template>
    <div>
        {{ user.booklistDownload.id}}
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
            booklistDownload: state => state,
        })
    },
}
</script>
<style></style>