<template>
    <div>
        <nav>
            <ahref="#">Home</a>
                <ahref="#">About</a>
                    <ahref="#">Blog</a>
                        <ahref="#">News</a>
                            <ahref="#">Contact</a>
                                <divclass="animation">
    </div>
    </nav>
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
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        })
    },
}
</script>
<style></style>