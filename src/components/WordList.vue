<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>W List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.description }} ,

          {{ tutorial.word_tayal }} ,
          {{ tutorial.word_zh_tw }} ,
          <!-- {{ tutorial.description }} -->
          {{ tutorial.season }} ,
          {{ tutorial.topic }} 
        </li>
      </ul>

      

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
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
    </div>
  </div>
</template>

<script>
import WordDataService from "../services/WordDataService";
import TutorialDetails from "./Tutorial";

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
            description : data.description, 
            word_tayal  : data.word_tayal,
            word_zh_tw  : data.word_zh_tw, 
            season      : data.season,
            topic       : data.topic,

          // {{ tutorial.spell_tayal }}
          // {{ tutorial.spell_zh_tw }}  
          // <!-- {{ tutorial.description }} -->
          // {{ tutorial.season }}
          // {{ tutorial.topic }}


            // title: data.title,
            // published: data.published,
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
  max-width: 750px;
  margin: auto;
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
