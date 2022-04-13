<template>
  <v-app dark>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- judul halaman -->
      <v-toolbar-title>News App</v-toolbar-title>
        <v-spacer></v-spacer>

      <!-- icon search -->
      <v-text-field v-model="searchText" @keyup.enter="searchQuery(searchText)"  ></v-text-field>
      <v-btn icon class="mr-6">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer 
      v-model="drawer" color="#c5e5e8" light absolute>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
        
          <v-list-item-subtitle>
            sub
          </v-list-item-subtitle>

        </v-list-item-content>
      </v-list-item>


        <v-list
            dense
            nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link @click="changeCategory(item.title)"
            >
            <v-list-item-icon>

                <!-- icon lingkaran -->
                <v-avatar
                  color="secondary"
                  size="30">
                  A
                </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer 
      dark
      padless
      fixed>
      <v-col
        class="text-left"
        cols="12">
      Made by <v-icon class="red--text">mdi-heart</v-icon> with <a class="white--text"  target="_blank" href="https://vuetifyjs.com">Vuetify</a> and Rahmatia Sumanjayanti
      </v-col>
    </v-footer>
   
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { title: 'Business'},
        { title: 'Entertainment'},
        { title: 'Science' },
        { title: 'Sports' },
        { title: 'Technology' },
        { title: 'Healthy' },
        { title: 'General' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      searchText : ''
    }
  },
      computed: {
        allList(){
            return this.$store.state.api.list;
        },
        index(){
            return this.$route.params.id.slice(2)

        }
    },
    mounted(){
        this.fetchApi();
    },
    methods:{
      fetchApi(){
        this.$store.dispatch("fetchList");
      },
      changeCategory(param){
        this.$store.dispatch('changeCategory', param)
        this.$store.dispatch('fetchList')

      },
      searchQuery(param){
        this.$store.dispatch('searchQuery', param)
        this.$store.dispatch('fetchList')
      }
    },
    
}
  

</script>
