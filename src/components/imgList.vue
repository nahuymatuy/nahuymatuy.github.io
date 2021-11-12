<template>
 <div>   
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        > 
          {{ tutorial.Title }} ,   
          {{ tutorial.img }},    
        </li>
      </ul>
      
  <v-card>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card> 
</div>
 
</template>

<script>
import WordDataService from "../services/imgDataService";
import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

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
  
            Title  : data.Title,
            img  : data.img,   
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
        WordDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
  },
  mounted() {
    WordDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    WordDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  /* max-width: 750px; */
  margin: 10px;
}
</style>
  