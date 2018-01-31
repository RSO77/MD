<template>
    <div class="contact-page">
        <div class="contact-title">
            <h2>Связаться с нами</h2>
        </div>
        <form action="">
            <input class="name-input" type="text" placeholder="ИМЯ">
            <input class="mail-input" type="text" placeholder="EMAIL">
            <textarea class="message-input" name="message" placeholder="СООБЩЕНИЕ"></textarea>
            <a class="form-btn" href="/"><span>Отправить</span></a>
        </form>

        <router-link :to="$root.prevRoute" class="close" >
            <img src="static/images/close.png" alt="close" >
        </router-link>

    </div>
</template>

<script>
    import {TweenMax} from 'gsap'

    export default {
        name: 'Brand',

    }
</script>
