<template>
    <div>
        {{ booklist.au }}
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
            booklist: state => state.booklist,
        })
    },
}
</script>
<style></style>