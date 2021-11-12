<template>
  <div class="list row">
    
    
    <div class="col-md-2">
      <h4>旅途 列表</h4>
      <ul class="list-group">


        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
 
        <!-- <v-date-picker
              v-model="tutorial.date_mor"
              multiple
              no-title
              scrollable
            >
               
        </v-date-picker> -->
             
          
        </li>


      </ul>





      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        移除所有資料
      </button>
    </div>
    <div class="col-md-8">
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
import TutorialDataService from "../services/TutorialDataService";
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
          title: data.title,
          description: data.description,
          published: data.published,
          date_s:data.date_s,
          date_mor:data.date_mor,
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
  max-width: 750px;
  margin: auto;
}
</style>
