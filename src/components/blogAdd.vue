<template>
  <div class="submit-form">
    <div v-if="!submitted">  
      <div class="grid grid-cols-4 gap-2">  
          <div class=""> 
            <v-text-field 
              solo
              v-model="blog.Author" 
              label="Author"  
              hint="請輸入Author"
            ></v-text-field> 
          </div>
          
          <div class=""> 
            <v-text-field
            solo
              v-model="blog.HashTags" 
              label="HashTags"  
              hint="請輸入HashTags"
            ></v-text-field> 
          </div> 

          <div class=""> 
            <v-text-field
            solo
              v-model="blog.Title" 
              label="Title"  
              hint="請輸入 Title"
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
                v-model="blog.Content" 
                solo
                name="input-7-4"
                label="Content"  
                hint="請輸入 Content"
              ></v-textarea> 
            </div>
            <div class=""> 
              <v-textarea
                v-model="blog.imgUrl" 
                solo
                name="input-7-4"
                label="imgUrl"  
                hint="請輸入 imgUrl"
              ></v-textarea> 
            </div>
            <div class=""> 
              <v-textarea
                v-model="blog.pdfUrl" 
                solo
                name="input-7-4"
                label="pdfUrl"  
                hint="請輸入 pdfUrl"
              ></v-textarea> 
            </div>

            <div class=""> 
              <v-textarea
                v-model="blog.Type" 
                solo
                name="input-7-4"
                label="Type"  
                hint="請輸入 Type"
              ></v-textarea> 
            </div>
             
             
          </div>  
             
      </div> 
    </div> 


    <div v-else>
      <h4>資料已新增成功!</h4>
          <button class="btn btn-success" @click="newblog">再新增一筆</button>
          <!-- <v-btn flat class="mx-2">
            <router-link to="/WordList">詞語列表</router-link>
          </v-btn>  -->
    </div>
  </div>

</template> 

<script>
import blogService from "../services/blogService";

export default {
  name: "add-tutorial",
  data() {
    return {  
      blog: { 
        Author: "",
        HashTags:"", 

        Title: "", 
        Content: "", 
        imgUrl: "", 
        pdfUrl: "",  
        
        Type: "",  
      },
      submitted: false
    };
  },
  methods: { 
    
    newblog() {
      this.submitted = false;
      this.blog = {
        Author: "",
        HashTags:"", 

        Title: "", 
        Content: "", 
        imgUrl: "", 
        pdfUrl: "",

        Type:"",
      };
    },
    saveTutorial() {
      var data = {
        Author:  this.blog.Author,
        HashTags: this.blog.HashTags, 

        Title:  this.blog.Title, 
        Content:  this.blog.Content, 
        imgUrl:  this.blog.imgUrl, 
        pdfUrl:  this.blog.pdfUrl,

        Type: this.blog.Type,    
           
      };

      blogService.create(data)
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
 
