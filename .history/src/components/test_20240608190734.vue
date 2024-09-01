<template>
    <div>
        {{ $store.state }}
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
      books: state => state.books
    })
  },
}
</script>
<style></style>