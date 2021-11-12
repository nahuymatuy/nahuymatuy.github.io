<template>
  <div class="list row">
    
    
    <div class="col-10">
      

<v-container fluid>
      <v-row dense>
          <div class="grid grid-cols-6 gap-3"> 
              
              </div>
            <div class="grid grid-cols-7 item-center gap-1">  
                <div> 知識領域  週次/單元  </div>
                <div> ㄧ年級 </div>
                <div> 二年級 </div>
                <div> 三年級 </div>
                <div> 四年級 </div>
                <div> 五年級 </div>
                <div> 六年級 </div>
            </div>

        <v-card
         :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
           
              

            

             <div class="grid grid-cols-7 "> 
               <div class="col-span-1"> 

<v-card-title class="bg-bule-200"  > {{ tutorial.temp_sort }} {{ tutorial.cfield }}  </v-card-title> 
<v-card-subtitle > {{ tutorial.cfieldgoal }} </v-card-subtitle></div> 
           
            
            <div class="bg-red-100 px-5"> {{ tutorial.gd_1_ctent }} </div>
            <div>{{ tutorial.gd_2_ctent }}  </div>
            <div class="bg-red-100 px-5">{{ tutorial.gd_3_ctent }} </div>
            <div>{{ tutorial.gd_4_ctent }} </div>
            <div class="bg-red-100 px-5" >{{ tutorial.gd_5_ctent }} </div>
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
    <div class="col-2">
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
