<template>
  <div class="submit-form">
    <div v-if="!submitted">  
      <div class="grid grid-cols-3 gap-4">
        
          <div class="form-group my-2">
              <label for="spell_tayal">泰雅語_拼音</label>
              <input
                class="form-control"
                id="spell_tayal"
                required
                v-model="word.spell_tayal"
                name="spell_tayal"
              />
          </div>
          <div class="form-group my-2">
            <label for="spell_zh_tw">漢語_拼音</label>
            <input
              class="form-control"
              id="spell_zh_tw"
              required
              v-model="word.spell_zh_tw"
              name="spell_zh_tw"
            />
          </div>
        <div>
          <button 
                @click="saveWord" 
                class="btn btn-success my-2" > 儲存</button> 
        </div> 


      <div class="col-span-1">
              <label for="description">描述</label>
              <textarea
                class="form-control"
                id="description"
                rows="4" cols="50"
                required
                v-model="word.description"
                name="description"
              />
            </div>  
            <div class="col-span-2">
              <label for="description">細節描述</label>
              <textarea
                class="form-control"
                id="description"
                rows="4" cols="50"
                required
                v-model="word.description"
                name="description"
              />
            </div>  
        <div class="form-group my-2">
              <label for="season">泰雅時序</label>
                <v-container fluid> 
                      <v-select
                        v-model="word.season"
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
                        v-model="word.topic"
                        :items="topic_states"
                        label="請選擇"
                        multiple
                        chips
                        hint="這是一個測試選項"
                        persistent-hint
                      ></v-select> 
                </v-container> 
            </div> 
            <div class="form-group my-2">
            <label for="topic"> 5 大面向</label>
              <v-radio-group
                v-model="word.field"
                mandatory 
              >
                <v-radio
                  label="小米文化"
                  value="小米文化"
                ></v-radio>
                <v-radio
                  label="山林河流文化"
                  value="山林河流文化"
                ></v-radio>
                <v-radio
                  label="編織工藝文化"
                  value="編織工藝文化"
                ></v-radio>
                <v-radio
                  label="樂舞文化"
                  value="樂舞文化"
                ></v-radio> 
               <v-radio
                  label="遷徙組訓部落社會"
                  value="遷徙組訓部落社會"
                ></v-radio>
              </v-radio-group>  
            </div>  
      </div> 
    </div> 
    <div v-else>
      <h4>資料已新增成功!</h4>
          <button class="btn btn-success" @click="newTutorial">再新增一筆</button>
          <v-btn flat class="mx-2">
            <router-link to="/WordList">詞語列表</router-link>
          </v-btn> 
    </div>
  </div>
</template> 

<script>
import TutorialDataService from "../services/TutorialDataService"; 
import WordDataService from "../services/WordDataService";

export default {
  name: "add-tutorial",
  data() {
    return { 
          
        season_states:['s1', 's2', 's3', 's4',],
        field_states:['小米文化',
                      '山林河流文化',
                      '編織工藝文化',
                      '樂舞文化',
                      '遷徙組訓部落社會',],
        topic_states:['祖靈祭',
                      '播種祭',
                      '收割祭',
                      '入倉祭',
                      '河流生態',
                      '漁獵',
                      '山林生態',
                      '狩獵',
                      '燒墾',
                      '照顧小米',
                      '樂舞',
                      '竹籐籐編',
                      '建築',
                      '編織',
                      '遷徒史',
                      '部落社會',],

       word: {  
        spell_tayal: "",
        spell_zh_tw: "",  
        season:"",
        topic:"",
        description: "", 
        field: "",
        published: false,
      },

 
      submitted: false
    };
  },
  methods: {
    
    
    saveWord() {
        var data = {
          spell_tayal: this.word.spell_tayal,
          spell_zh_tw: this.word.spell_zh_tw,
          topic: this.word.topic,
          season: this.word.season,
          description: this.word.description,
          field: this.word.field,
          published: true
          
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
   
  margin: 50px;
}
</style>
