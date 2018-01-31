<template>
    <footer class="class-footer">

        <div class="center-block">
            <div class="copyrighted">
                <p>© 2017{{y}} ООО “МегаДев”</p>
            </div>
            <div class="footer_right">
                <transition name="fade">
                    <router-link to="/contacts" class="communication" v-if="$route.name !== 'Contacts'">
                        Связаться с нами
                    </router-link>
                </transition>
            </div>
        </div>
    </footer>
</template>

<script>
    import {TweenMax} from 'gsap'

    export default {
        name: 'Footer',
        data() {
            return {
                y: (+(new Date().getFullYear()) <= 2017) ? '' : '—' + new Date().getFullYear(),
                ok: 'asfas'
            }
        }
    }
</script>
