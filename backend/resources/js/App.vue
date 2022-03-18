<template>
<v-app>
    <v-navigation-drawer app>
        <!-- -->
    </v-navigation-drawer>


    <Navbar />
    <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
    <v-main>

        <!-- アプリケーションに適切なgutterを提供 -->
        <v-container fluid>

        <!-- vue-routerを使用する場合 -->
        <router-view></router-view>
        </v-container>
    </v-main>

    <v-footer app>
        <!-- -->
    </v-footer>
</v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    components: {
        Navbar,
    }
}
</script>
