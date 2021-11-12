<template>
  <div class="submit-form">
    <div v-if="!submitted">  
      <div class="grid grid-cols-4 gap-2">
        
          <div class=""> 
            <v-text-field
              type="number"
              solo
              v-model="COUT.temp_sort" 
              label="排序"  
              hint="請輸入排序設定"
            ></v-text-field> 
          </div>
          
          <div class=""> 
            <v-text-field
            solo
              v-model="COUT.cfield" 
              label="領域名稱"  
              hint="請輸入領域名稱"
            ></v-text-field> 
          </div>

          <div class=""> 
            <v-text-field
            solo
              v-model="COUT.cfieldgoal" 
              label="領域目標"  
              hint="請輸入領域名稱"
            ></v-text-field> 
          </div>

          <div class="">
            <button 
                  @click="saveTutorial" 
                  class="btn btn-success my-2" > 儲存</button> 
          </div> 
 

          <div class="col-span-4 grid grid-cols-3 gap-2">
            <div class=""> 
              <v-textarea
                v-model="COUT.gd_1_ctent" 
                solo
                name="input-7-4"
                label="1年級"  
                hint="請輸入 1年級相關設定"
              ></v-textarea> 
            </div>
            <div class=""> 
              <v-textarea
                v-model="COUT.gd_2_ctent" 
                solo
                name="input-7-4"
                label="2年級"  
                hint="請輸入 2年級相關設定"
              ></v-textarea> 
            </div>
            <div class=""> 
              <v-textarea
                v-model="COUT.gd_3_ctent" 
                solo
                name="input-7-4"
                label="3年級"  
                hint="請輸入 3年級相關設定"
              ></v-textarea> 
            </div>

            <div class=""> 
              <v-textarea
                v-model="COUT.gd_4_ctent" 
                solo
                name="input-7-4"
                label="4年級"  
                hint="請輸入 4年級相關設定"
              ></v-textarea> 
            </div>
            <div class=""> 
              <v-textarea
                v-model="COUT.gd_5_ctent" 
                solo
                name="input-7-4"
                label="5年級"  
                hint="請輸入 5年級相關設定"
              ></v-textarea> 
            </div>
            <div class=""> 
              <v-textarea
                v-model="COUT.gd_6_ctent" 
                solo
                name="input-7-4"
                label="6年級"  
                hint="請輸入 6年級相關設定"
              ></v-textarea> 
            </div>
          </div> 
          
          <div class="col-span-4">
            <v-textarea
                v-model="COUT.memo" 
                solo
                name="input-7-4"
                label="備註"  
                hint="請輸入 備註"
              ></v-textarea>  
           
          </div>   
      </div> 
    </div> 


    <div v-else>
      <h4>資料已新增成功!</h4>
          <button class="btn btn-success" @click="newCOUT">再新增一筆</button>
          <!-- <v-btn flat class="mx-2">
            <router-link to="/WordList">詞語列表</router-link>
          </v-btn>  -->
    </div>
  </div>

</template> 

<script>
import COUTService from "../services/couresOutlineService";

export default {
  name: "add-tutorial",
  data() {
    return {  

      COUT: {
        temp_sort:0,
        cfield: "",
        cfieldgoal:"", 

        gd_1_ctent: "", 
        gd_2_ctent: "", 
        gd_3_ctent: "", 
        gd_4_ctent: "", 
        gd_5_ctent: "", 
        gd_6_ctent: "", 
        memo:"",   
      },
      submitted: false
    };
  },
  methods: { 
    
    newCOUT() {
      this.submitted = false;
      this.COUT = {
        temp_sort:0,
        cfield: "",
        cfieldgoal:"", 

        gd_1_ctent: "", 
        gd_2_ctent: "", 
        gd_3_ctent: "", 
        gd_4_ctent: "", 
        gd_5_ctent: "", 
        gd_6_ctent: "", 
        memo:"",
      };
    },
    saveTutorial() {
      var data = {
        temp_sort: this.COUT.temp_sort,   
        cfield: this.COUT.cfield,
        cfieldgoal: this.COUT.cfieldgoal, 
        
        gd_1_ctent: this.COUT.gd_1_ctent, 
        gd_2_ctent: this.COUT.gd_2_ctent, 
        gd_3_ctent: this.COUT.gd_3_ctent, 
        gd_4_ctent: this.COUT.gd_4_ctent, 
        gd_5_ctent: this.COUT.gd_5_ctent, 
        gd_6_ctent: this.COUT.gd_6_ctent,
        memo: this.COUT.memo,   
      };

      COUTService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },  
  }
};

</script>

<style>
.submit-form {
   
  margin: 50px;
}
</style>
 
