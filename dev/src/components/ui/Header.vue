<template>
    <header class="class-header">
        <div class="header_logo" v-if="$root.isMobile">
            <logo></logo>
        </div>
        <div class="header_text">
            <p>
                Динамично развивающаяся команда профессионалов, готовая к решению поставленных задач и созданию
                качественной веб- и мобильной инфраструктуры для локальных и международных брендов.
            </p>
        </div>
        <div class="header_logo" v-if="!$root.isMobile">
            <logo></logo>
        </div>
    </header>
</template>

<script>
    import {TweenMax} from 'gsap'
    import logo from '@/assets/svg/megadev_logo.svg';


    export default {
        name: 'Header',
    components: {
        logo,
    },

    }
</script>
