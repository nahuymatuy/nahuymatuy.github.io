<template>
  <div class="list row">
    
    
    <div class="col-md-8">
      <h4>旅途 列表</h4>

<v-container fluid>
      <v-row dense>
        <v-card
         :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
           
              
            {{ tutorial.temp_sort }}  
            {{ tutorial.cfield }} ,
            {{ tutorial.cfieldgoal }} , 

            <div class="grid grid-cols-6 gap-2">

            <div>{{ tutorial.gd_1_ctent }} </div>
            <div>{{ tutorial.gd_2_ctent }} </div>
            <div>{{ tutorial.gd_3_ctent }} </div>
            <div>{{ tutorial.gd_4_ctent }} </div>
            <div>{{ tutorial.gd_5_ctent }} </div>
            <div>{{ tutorial.gd_6_ctent }} </div>



            </div>

            

            
            <!-- {{ tutorial.gd_2_ctent }} ,
            {{ tutorial.gd_3_ctent }} ,
            {{ tutorial.gd_4_ctent }} ,
            {{ tutorial.gd_5_ctent }} ,
            {{ tutorial.gd_6_ctent }} , -->
            {{ tutorial.memo }} ,

            <!-- <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions> -->
          </v-card> 
          <hr>
      </v-row>
    </v-container>


<!-- 
      <ul class="list-group"> 
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
            {{ tutorial.temp_sort }}  
            {{ tutorial.cfield }} ,
            {{ tutorial.cfieldgoal }} , 
            
            {{ tutorial.gd_1_ctent }} ,
            {{ tutorial.gd_2_ctent }} ,
            {{ tutorial.gd_3_ctent }} ,
            {{ tutorial.gd_4_ctent }} ,
            {{ tutorial.gd_5_ctent }} ,
            {{ tutorial.gd_6_ctent }} ,
            {{ tutorial.memo }} ,
             
          
        </li>


      </ul> -->





      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        移除所有資料
      </button> -->
    </div>
    <div class="col-md-2">
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
    </div>
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
