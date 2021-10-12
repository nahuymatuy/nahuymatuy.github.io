<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">羅馬拼音</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">描述</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">儲存</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
//import WordDataService from "../services/WordDataService";
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      word: {  
        spell_tayal: "",
        spell_zh_tw: "", 
        season:"",
        topic:"",
        description: "", 
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        published: false
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
/*
    saveWord() {
      var data = {
        word_tayal: this.word.spell_tayal,
        word_zh_tw: this.word.spell_zh_tw,
        topic: this.word.topic,
        season: this.word.season,
        description: this.word.description,
      };

      WordDataService.create(data)
        .then(() => {
          console.log("新增成功!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
   */ 
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
