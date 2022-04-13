<template>

  <v-row justify="center" align="center">
    <v-col >
      
      <div>
        <div v-for="(api, index) in allList" :key="index">
        <v-card
            class="mx-auto mb-5 mt-4"
            max-width="1000"
        >
            <v-img
            class="white--text align-end"
            height="300px"
            :src="api.urlToImage"
            >
            </v-img>
            <v-card-title>{{api.title}}</v-card-title>


            <v-card-text class="text--primary">
            
            <div>{{api.content}}</div>
            </v-card-text>

        </v-card>
        </div>
      </div>  
    
      
      <PageView/>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    allList(){
      return this.$store.state.list
    },
  },
  mounted(){
    this.$store.dispatch("fetchList")
  }
  
}
  
  
</script>
