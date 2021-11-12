<template>
  <div class="list row">  

    
    <div class="col-12">  
      
        <!-- <div class="col-span-1 ">  
          <v-card
              :class="{ active: index == currentIndex }"
                v-for="(tutorial, index) in tutorials"
                :key="index"
                @click="setActiveTutorial(tutorial, index)"
              > 
            <div  class="col-span-1 justify-items-end">  
                <v-card-subtitle  align="right" >  
                  <span class="bg-red-400 rounded-xl px-3 text-gray-50 text-xl "> 
                        {{ tutorial.temp_sort}} </span>
                  <br>
                        {{ tutorial.cfield }} 
                  <br> 
                        {{ tutorial.cfieldgoal }}   
                </v-card-subtitle>
              </div>   
          </v-card>
        </div> -->
        
 
          <v-tabs
            color="deep-purple accent-4"
            right
          >
              <v-tab> 一年級</v-tab>
              <v-tab> 二年級</v-tab>
              <v-tab> 三年級</v-tab>
              <v-tab> 四年級</v-tab>
              <v-tab> 五年級</v-tab>
              <v-tab> 六年級</v-tab>

            <v-tab-item
              v-for="n in 6"
              :key="n"
            >
              <v-container fluid>
                <v-card
                      :class="{ active: index == currentIndex }"
                        v-for="(tutorial, index) in tutorials"
                        :key="index"
                        
                      > <!-- @click="setActiveTutorial(tutorial, index)" -->
                  <div class="grid grid-cols-5 gap-1 ">        
                    <div class="col-span-1 ">  
                      <v-card-subtitle  align="right" >  
                        <span class="bg-red-400 rounded-xl px-3 text-gray-50 text-xl "> 
                              {{ tutorial.temp_sort}} </span>
                        <br>
                              {{ tutorial.cfield }} 
                        <br> 
                              {{ tutorial.cfieldgoal }}   
                      </v-card-subtitle>

                    </div>
                    <div  class="col-span-4 justify-items-end">  
                      <div v-if='n==1'> <v-card-text>{{ tutorial.gd_1_ctent }}</v-card-text></div>
                      <div v-if='n==2'> <v-card-text>{{ tutorial.gd_2_ctent }}</v-card-text></div>
                      <div v-if='n==3'> <v-card-text>{{ tutorial.gd_3_ctent }}</v-card-text></div>
                      <div v-if='n==4'> <v-card-text>{{ tutorial.gd_4_ctent }}</v-card-text></div>
                      <div v-if='n==5'> <v-card-text>{{ tutorial.gd_5_ctent }}</v-card-text></div>
                      <div v-if='n==6'> <v-card-text>{{ tutorial.gd_6_ctent }}</v-card-text></div>
                    </div> 
                    
                 </div>  
                </v-card> 
              </v-container>
            </v-tab-item>
          </v-tabs>


 
 
    </div>
    <!-- <div class="col-2">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please 確認 on a Tutorial...</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import TutorialDataService from "../services/couresOutlineService";
import TutorialDetails from "./TutorialMdf";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },


  data() {
    return {


      show_1: false,
      show_2: false,
      show_3: false,
      show_4: false,
      show_5: false,
      show_6: false,
      show_7: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  },



  methods: {
    onDataChange(items) {
      let _tutorials = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          temp_sort: data.temp_sort, 
            cfield: data.cfield,
            cfieldgoal: data.cfieldgoal, 
            
            gd_1_ctent: data.gd_1_ctent, 
            gd_2_ctent: data.gd_2_ctent, 
            gd_3_ctent: data.gd_3_ctent, 
            gd_4_ctent: data.gd_4_ctent, 
            gd_5_ctent: data.gd_5_ctent, 
            gd_6_ctent: data.gd_6_ctent,
            memo: data.memo,   
          // description: data.description,
          // published: data.published,
          // date_s:data.date_s,
          // date_mor:data.date_mor,
        });
      });

      this.tutorials = _tutorials;
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    TutorialDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  /* max-width: 750px; */
  margin: 50px ;
}
</style>
