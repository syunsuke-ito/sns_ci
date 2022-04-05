<template>
  <v-app>
    <Sidebar />

      <Navbar />
      <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
      <v-main>

        <!-- アプリケーションに適切なgutterを提供 -->
        <v-container fluid>

        <!-- vue-routerを使用する場合 -->
        <router-view></router-view>
        </v-container>
      </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
      Navbar,
      Footer,
      Sidebar
  }
}
</script>
