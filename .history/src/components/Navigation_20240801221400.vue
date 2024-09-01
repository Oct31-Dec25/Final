<template>
    <!-- <div style="display: flex;flex-direction: column;align-items: center;">
        <input type="text">
        <input type="password">
        <input type="number">
        <input type="checkbox">
        <input type="color">
        <input type="date">
        <input type="time">
        <input type="search">
        <input type="file">
        <input type="range">
        <input type="radio">
        <input type="submit">
        <input type="week">
    </div> -->
    <div>
        <ul class="notifications">
        </ul>
        <div class="buttons">
            <button class="btn" id="success">Success</button>
            <button class="btn" id="error">Error</button>
            <button class="btn" id="warning">Warning</button>
            <button class="btn" id="info">Info</button>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
@import '../google-font.css';
@import'../css/style.css';

input {
    width: 200px;
    margin-bottom: 10px;
}
</style>