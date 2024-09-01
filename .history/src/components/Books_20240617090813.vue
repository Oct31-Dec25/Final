<template>
    <div>
        {{ booklist }}
    </div>
</template>

<script>
import { mapContext.getCenterLocation({
    success: (result) => {
        G
    },
    fail: () => {},
    complete: () => {}
});
   } from 'vuex';
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        })
    },
}
</script>
<style></style>