<template>
    <Resize id="app" class="app-layout">

        <header-mega></header-mega>


        <div class="center" v-if="!$root.isMobile">
            <menu-app></menu-app>
            <div class="center-container">
                <div class="bg">
                    <img src="static/images/bg.png" :class="{active: $route.name==='Index'}" alt="Index">
                    <!--<img src="static/images/bg.png" :class="{active: $route.name==='Brand'}" alt="Brand">-->
                    <!--<img src="static/images/bg.png" :class="{active: $route.name==='Tech'}" alt="Tech">-->
                    <!--<img src="static/images/bg.png" :class="{active: $route.name==='Contacts'}" alt="Contacts">-->
                </div>
                <div class="content-wrapper" :id="$route.name">
                    <brace></brace>
                    <transition name="fade">
                        <router-view class="page"></router-view>
                    </transition>
                </div>
            </div>
        </div>

        <div class="center" v-else>
            <div class="about-img center-img"></div>
            <about-page></about-page>
            <div class="tech-img center-img"></div>
            <tech-page></tech-page>
            <div class="brand-img center-img"></div>
            <brand-page></brand-page>
            <div class="contact-img center-img"></div>
            <contact-page></contact-page>
        </div>

        <footer-mega></footer-mega>

    </Resize>
</template>

<script>

    import Resize from '@/components/common/Resize';
    import Menu from '@/components/common/Menu';
    import Header from '@/components/ui/Header';
    import Footer from '@/components/ui/Footer';

    import Contacts from '@/components/pages/Contacts';
    import Brand from '@/components/pages/Brand';
    import About from '@/components/pages/About';
    import Tech from '@/components/pages/Tech';

    import brace from '@/assets/svg/brace.svg';

    export default {
        name: 'app',
        watch: {
            '$route'(next, prev) {
                this.$root.prevRoute = prev.path;
                console.log(next.meta);
                console.log(prev.meta);
            }
        },
        components: {
            'menu-app': Menu,
            Resize,
            'header-mega': Header,
            'footer-mega': Footer,
            'contact-page': Contacts,
            'brand-page': Brand,
            'about-page': About,
            'tech-page': Tech,
            brace
        }
    };
</script>

<style>
    #app {
        font-family: Trebuchet-r, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 500px;
        max-width: 1600px;
        margin: 0 auto;
    }

    .fade-enter-active {
        transition: all .5s .5s ease;
    }

    .fade-leave-active {
        transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }
</style>
