<template>
  <div class="list row">
    <div class="col-md-6">
      <!-- <h4> 列表 </h4> -->
      <a class="text-3xl py-2 "> 詞彙 列表 </a>  

            <v-sheet
              elevation="10"
              rounded
            >
              <v-sheet
                class="pa-3 primary text-right"
                dark
                rounded
              >
                All
              </v-sheet>

              <div class="pa-4">
                <v-chip-group
                  active-class="primary--text"
                  column 
                >
                  <v-chip
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)"
                  >
                    
                    {{ tutorial.spell_tayal }}  ,
                    {{ tutorial.spell_zh_tw }} 
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet> 

            <v-sheet
              elevation="10"
              rounded
            >
              <v-sheet
                class="pa-3 deep-orange darken-2 text-right"
                dark
                rounded
              >
                5大文化面向
              </v-sheet>

              <div class="pa-4">
                <v-chip-group
                  active-class="danger--text"
                  column 
                >
                  <v-chip
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)"
                      v-if='tutorial.description === "5大文化面向"'
                  > 
                     
                    {{ tutorial.spell_tayal }}  ,
                    {{ tutorial.spell_zh_tw }}  
                  </v-chip>
                </v-chip-group>

                <!-- <div
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)" 
                      v-if='tutorial.description === "5大文化面向"'
                  >  
                   '{{ tutorial.spell_zh_tw }}',
                </div> -->
              </div>
            </v-sheet> 

            <v-sheet
              elevation="10"
              rounded
            >
              <v-sheet
                class="pa-3 teal darken-1 text-right"
                dark
                rounded
              >
                16課程主題
              </v-sheet>

              <div class="pa-4">
                <v-chip-group
                  active-class="primary--text"
                  column 
                >
                  <v-chip
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)" 
                      v-if='tutorial.description === "16課程主題"'
                  >  
                    {{ tutorial.spell_tayal }}  ,
                    {{ tutorial.spell_zh_tw }}  
                  </v-chip>
                </v-chip-group> 
                
              </div>
            </v-sheet> 


            <v-sheet
              elevation="10"
              rounded
            >
              <v-sheet
                class="pa-3 light-blue darken-4  text-right"
                dark
                rounded
              >
                山林狩獵文化
              </v-sheet>

              <div class="pa-4">
                <v-chip-group
                  active-class="primary--text"
                  column 
                >
                  <v-chip
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)" 
                      v-if='tutorial.topic == "山林生態" | tutorial.topic == "狩獵" '
                  >  
                    {{ tutorial.spell_tayal }}  ,
                    {{ tutorial.spell_zh_tw }}  
                  </v-chip>
                </v-chip-group> 
                
              </div>
            </v-sheet> 

            <v-sheet
                class="pa-3 light-blue darken-4  text-right"
                dark
                rounded
              >
                河流漁獵文化
              </v-sheet>

              <div class="pa-4">
                <v-chip-group
                  active-class="primary--text"
                  column 
                >
                  <v-chip
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)" 
                      v-if='tutorial.topic == "河流生態" | tutorial.topic == "漁獵" '
                  >  
                    {{ tutorial.spell_tayal }}  ,
                    {{ tutorial.spell_zh_tw }}  
                  </v-chip>
                </v-chip-group> 
                
              </div>
            </v-sheet> 


            <v-sheet
              elevation="10"
              rounded
            >
              <v-sheet
                class="pa-3 lime darken-4 text-right"
                dark
                rounded
              >
                小米文化
              </v-sheet>

              <div class="pa-4">
                <v-chip-group
                  active-class="primary--text"
                  column 
                >
                  <v-chip
                    :class="{ active: index == currentIndex }"
                      v-for="(tutorial, index) in tutorials"
                      :key="index"
                      @click="setActiveTutorial(tutorial, index)" 
                      v-if='tutorial.field == "小米文化"'
                  >  
                    {{ tutorial.spell_tayal }}  , 
                    {{ tutorial.spell_zh_tw }}  
                  </v-chip>
                </v-chip-group> 
                
              </div>
            </v-sheet> 


<!-- <br>
<br>
<br>
            <br>

      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >


          {{ tutorial.temp_sort }} 
          {{ tutorial.spell_zh_tw }} , 
          {{ tutorial.spell_tayal }} ,
          {{ tutorial.description }} ,
          {{ tutorial.description2 }} ,  
          
         『 {{ tutorial.field }} 』 
         
          {{ tutorial.semester }}, 
          {{ tutorial.season }},
          {{ tutorial.topic }} 


          
        </li>
      </ul> -->

      
 

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button> -->
    </div>

    <!-- <div class="col-md-6">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div> -->

  </div>


</template>

<script>
import WordDataService from "../services/WordDataService";
import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  data() {
    return {
      tutorials: [],
      t: [],
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
            spell_tayal  : data.spell_tayal,
            spell_zh_tw  : data.spell_zh_tw, 
            description  : data.description,
            description2 : data.description2,

            season       : data.season,
            topic        : data.topic,
            temp_sort    : data.temp_sort,
            field        : data.field,  

          // {{ tutorial.spell_tayal }}
          // {{ tutorial.spell_zh_tw }}  
          // <!-- {{ tutorial.description }} -->
          // {{ tutorial.season }}
          // {{ tutorial.topic }}


            // title: data.title,
            // published: data.published,
          });
        });
        this.t = _tutorials.field 
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
 
 
 <!--
 <template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Word List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(word, index) in words"
          :key="index"
          @click="setActiveWord(word, index)"
        >
          {{ word.spell_tayal }}
          {{ word.spell_zh_tw }}  
          {{ word.description }}
          {{ word.season }}
          {{ word.topic }}
          
        </li>
      </ul>

      

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllWords">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentWord">
        <word-details
          :word="currentWord"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Word...</p>
      </div>
    </div>
  </div>
</template>

<script>
import WordDataService from "../services/WordDataService";
import WordDetails from "./Word";

export default {
  name: "tutorials-list",
  components: { WordDetails },
  data() {
    return {
      words: [],
      currentWord: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _words = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _words.push({
          key: key,
          spell_tayal: data.spell_tayal,
          spell_zh_tw: data.spell_zh_tw,
          description: data.description,
          season     : data.season,
          topic      : data.topic,
        });
      });

      this.words = _words;
    },

    refreshList() {
      this.currentWord = null;
      this.currentIndex = -1;
    },

    setActiveWord(word, index) {
      this.currentWord = word;
      this.currentIndex = index;
    },

    removeAllWords() {
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
  max-width: 750px;
  margin: auto;
}
</style> -->
