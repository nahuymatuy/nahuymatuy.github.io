<template>
  <div v-if="currentTutorial" class="">
    <a class="text-3xl py-2 "> 詞彙說明 </a>
    <form>

            <div class="grid grid-cols-3 gap-2"> 
              <div>
                <label for="title">泰雅文</label>
                <v-text-field 
                  solo
                  clearable
                  v-model="currentTutorial.spell_tayal"
                >
                </v-text-field>
              </div>
              <div>
                <label for="description">中文</label>
                <v-text-field 
                  solo
                  clearable
                  v-model="currentTutorial.spell_zh_tw"
                ></v-text-field>
              </div> 
              <div>
                <button
                  class="badge badge-primary mr-2"
                  v-if="currentTutorial.published"
                  @click="updatePublished(false)"
                >
                  UnPublish
                </button>
                <button
                  v-else
                  class="badge badge-primary mr-2"
                  @click="updatePublished(true)"
                >
                  儲存
                </button>

                <button 
                  @click="deleteTutorial"
                  class="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2
                  py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  刪除
                </button>

                <button 
                  @click="updateTutorial"
                  class="bg-blue-500 hover:bg-blue-400 text-white font-bold mx-2
                  py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  更新
                </button>
                <!-- <button type="submit" class=" btn btn-sm " >
                  
                </button> 

                <button type="submit" class=" btn btn-sm " @click="updateTutorial">
                  更新
                </button>-->
                  
                
                <p>{{ message }}</p>
              </div> 


              <div class="col-span-2">
                <label for="description">描述</label>
                  <v-text-field 
                    solo
                    clearable
                    v-model="currentTutorial.description"
                  ></v-text-field>
              </div> 
              <div class="col-span-1">
                <label for="description">編號次序</label>
                  <v-text-field 
                    solo
                    clearable
                    v-model="currentTutorial.temp_sort"
                  ></v-text-field>
              </div>
              <div class="form-group my-2">
              <label for="topic">season</label>
              <v-container fluid> 
                      <v-select
                        v-model="currentTutorial.season"
                        :items="season_states"
                        label="請選擇"
                        multiple
                        chips
                        hint="這是一個測試選項"
                        persistent-hint
                      ></v-select> 
                </v-container> 
            </div> 
            <div class="form-group my-2">
              <label for="topic">課程主題</label>
              <v-container fluid> 
                      <v-select
                        v-model="currentTutorial.topic"
                        :items="topic_states"
                        label="請選擇"
                        multiple
                        chips
                        hint="這是一個測試選項"
                        persistent-hint
                      ></v-select> 
                </v-container> 
            </div>   
              <!-- <div class>
                <v-combobox
                      v-model="currentTutorial.season"
                      multiple
                      chips
                      small-chips
                      label="泰雅時序"
                      
                      readonly
                      v-bind="attrs"
                      v-on="on"
                ></v-combobox>
              </div>
              <div class="form-group"> 
                <v-combobox
                            v-model="currentTutorial.topic"
                            multiple
                            chips
                            small-chips
                            label="課程主題" 
                            readonly
                            v-bind="attrs"
                            v-on="on"
                      ></v-combobox>
              </div> -->
            </div>  
    </form>

    
  </div>

  <div v-else>
    <br />
    <p>Please 確認 on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/WordDataService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return {
      currentTutorial: null,
      message: "",
      field_states:['gaga na trakis','gaga na pklahang qyunam','gaga na tmniun','mqwas tlubu ru‘ myugi','lmuhu msgamil'],
      season_states:['s1', 's2', 's3', 's4',],
      topic_states:['t00', 't01', 't02', 't03', 't04','t05', 't06', 't07', 't08', 't09', 't10', 't11', 't13', 't14', 't15', 't16',],
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          // this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {  
        spell_tayal: this.currentTutorial.spell_tayal,
        spell_zh_tw: this.currentTutorial.spell_zh_tw,
        description: this.currentTutorial.description,
        topic: this.currentTutorial.topic,
        season: this.currentTutorial.season, 
        temp_sort: this.currentTutorial.temp_sort,
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
