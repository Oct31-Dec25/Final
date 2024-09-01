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
    methods: {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => createToast(btn.id))
        })

    }

}
</script>
<style>
/* @import '../google-font.css'; */
/* @import '../css/style.css'; */

/* devanagari */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(../fonts/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

/* latin-ext */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(../fonts/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(../fonts/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* devanagari */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(../fonts/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

/* latin-ext */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(../fonts/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(../fonts/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* devanagari */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(../fonts/pxiByp8kv8JHgFVrLEj6Z11lFc-K.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}

/* latin-ext */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(../fonts/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(../fonts/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

:root {
    --dark: #34495e;
    --light: #fff;
    --success: #0abf30;
    --error: #e24d4c;
    --warning: #e9bd0c;
    --info: #3498db;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--dark);
}

.notifications :where(.toast, .column) {
    display: flex;
    align-items: center;
}

.notifications {
    position: fixed;
    top: 30px;
    right: 20px;
}

.notifications .toast {
    width: 400px;
    list-style: none;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    padding: 16px 17px;
    margin-bottom: 10px;
    background-color: var(--light);
    justify-content: space-between;
    animation: show_toast 0.3s forwards;
}

@keyframes show_toast {
    0% {
        transform: translateX(100%);
    }

    40% {
        transform: translateX(-5%);
    }

    80% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-10px);
    }
}

.toast .column i {
    font-size: 1.75rem;
}

.toast.hide {
    animation: hide_toast 0.3s forwards;
}

@keyframes hide_toast {
    0% {
        transform: translateX(-10%);
    }

    40% {
        transform: translateX(0%);
    }

    80% {
        transform: translateX(-5%);
    }

    100% {
        transform: translateX(calc(100% + 20px));
    }
}

.toast .column span {
    font-size: 1.07rem;
    margin-left: 12px;
}

.toast i:last-child {
    color: #aeb0d7;
    cursor: pointer;
}

.toast i:last-child:hover {
    color: var(--dark);
}

.toast::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    animation: progress 5s linear forwards;
}

@keyframes progress {
    100% {
        width: 0;
    }
}

.toast.success::before,
.btn#success {
    background-color: var(--success);
}

.toast.error::before,
.btn#error {
    background-color: var(--error);
}

.toast.warning::before,
.btn#warning {
    background-color: var(--warning);
}

.toast.info::before,
.btn#info {
    background-color: var(--info);
}

.toast.success .column i {
    color: var(--success);
}

.toast.error .column i {
    color: var(--error);
}

.toast.warning .column i {
    color: var(--warning);
}

.toast.info .column i {
    color: var(--info);
}

.buttons .btn {
    border: none;
    outline: none;
    color: var(--light);
    cursor: pointer;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 4px;
}

@media screen and (max-width: 530px) {
    .notifications {
        width: 95%;
    }

    .notifications .toast {
        width: 100%;
        font-size: 1rem;
        margin-left: 20px;
    }

    .buttons .btn {
        margin: 0 1px;
        font-size: 1.1rem;
        padding: 8px 15px;
    }

}
</style>