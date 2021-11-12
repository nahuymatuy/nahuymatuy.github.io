<template>
  <div class="list row">
    
    
    <div class="col-12">
      

<v-container fluid>
      <v-row dense > 
            <div class="grid grid-cols-13 gap-1 justify-items-center">  
                <div> 知識領域 / 單元目標  </div>
                <div class="col-span-2"> ㄧ年級 </div>
                <div class="col-span-2"> 二年級 </div>
                <div class="col-span-2"> 三年級 </div>
                <div class="col-span-2"> 四年級 </div>
                <div class="col-span-2"> 五年級 </div>
                <div class="col-span-2"> 六年級 </div>  
            </div>

        <v-card
         :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
            
             <div class="grid grid-cols-13 "> 
               <div  class="col-span-1 "> 
<!-- 
<v-card-title align="right"  > 
   </v-card-title>  -->
   <span class="bg-red-400 rounded-xl px-3 text-gray-50 text-xl justify-items-start "> 
     {{ tutorial.temp_sort}} </span>
<v-card-subtitle  align="left" >  
  
  {{ tutorial.cfield }} 
  <hr class="bg-gary-100">
   {{ tutorial.cfieldgoal }}   
</v-card-subtitle></div>  

   
            <div  class="col-span-2"> {{ tutorial.gd_1_ctent }} </div>
            <div class="bg-red-100 px-5 col-span-2">{{ tutorial.gd_2_ctent }}  </div>
            <div  class="col-span-2"> {{ tutorial.gd_3_ctent }} </div> 
            <div  class="col-span-2"> {{ tutorial.gd_4_ctent }} </div>
            <div class="bg-red-100 px-5 col-span-2">{{ tutorial.gd_5_ctent }}  </div>
            <div  class="col-span-2"> {{ tutorial.gd_6_ctent }} </div> 

            </div>

             
          </v-card> 
          <hr>
      </v-row>
    </v-container>
 
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
