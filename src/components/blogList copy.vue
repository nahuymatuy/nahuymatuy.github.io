<template>
  <div class="ml-5 mr-3">  

    
    <div class="col-12">  
         <!-- <ul class="list-group"> -->


        <div 
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >  
  <!-- <img v-bind:src="tutorial.imgUrl" />  -->
  
    <!-- {{ tutorial.Content }} ,<br>
    {{ tutorial.Author }} ,<br>
    {{ tutorial.HashTags }} ,<br>
    {{ tutorial.imgUrl }} ,<br>
    {{ tutorial.pdfUrl }} ,<br>
    {{ tutorial.Type }}  ,<br> -->
  <!-- <v-row > -->
      <v-dialog
        v-model="dialog" 
        class="col-9 "
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">  
            <div class="col-12 grid grid-cols-4 gap-1">
              <div class="row-span-1 col-span-3 text-lg font-bold ">{{ tutorial.Title }}</div>
              <v-btn class="row-span-2 red darken-1 text-white h-100"   v-bind="attrs" v-on="on" >  閱讀教案 </v-btn>  
              <div class=" row-span-1 text-xs text-gary-500">  {{ tutorial.Type }}dd </div> 
              <div class=" row-span-1 text-xs text-gary-500"> {{ tutorial.Author }}</div>
              <div class=" row-span-2 text-xs text-gary-500">  {{ tutorial.HashTags }} </div>
              
            </div>
 
        </template>
        <v-card class="col-12 flex flex-col " >  
            <!-- <pdf ref="pdf"  
                class="col-12 "
                :src="tutorial.pdfUrl" 
                :page="pageNum"
                :rotate="pageRotate"  
                @progress="loadedRatio = $event"
                @page-loaded="pageLoaded($event)" 
                @num-pages="pageTotalNum=$event" 
                @error="pdfError($event)" 
                @link-clicked="page = $event">
            </pdf>  -->

            <pdf ref="pdf" 
            :src="url" 
            :page="pageNum"
            :rotate="pageRotate"  
            @progress="loadedRatio = $event"
            @page-loaded="pageLoaded($event)" 
            @num-pages="pageTotalNum=$event" 
            @error="pdfError($event)" 
            @link-clicked="page = $event">
        </pdf>
              <!-- </v-card-text>  -->
            <div class="w-full grid grid-cols-6 gap-2"> 
              <v-btn small class="col-span-1 red darken-5 text-white " @click="dialog = false"  >  關閉 </v-btn>
              
              <v-btn small class="col-span-1 red darken-1 text-white " @click="dialog = false" > 77 讚 </v-btn>

              <v-btn small class="col-span-2 grey lighten-2 " >  {{pageNum}}/{{pageTotalNum}} </v-btn>
              <v-btn small class="col-span-1 red darken-1 text-white " @click="prePage"  > 上一頁 </v-btn>
              <v-btn small class="col-span-1 red darken-1 text-white " @click="nextPage" > 下一頁 </v-btn>
              <!-- <button class="text-xs col-span-2 text-white bg-red-400 border-b-4 border-gray-600" > 返回 </button> -->
              <!-- <button  class="text-xs span-col-1" @click="dialog = false" > 返回 </button>
              <button  class="text-xs span-col-1" @click="prePage"  > 上一頁 </button> 
              <button  class="text-xs span-col-1" @click="nextPage" > 下一頁 </button> 
              <button  class="        span-col-2 border-2 my-4 mx-2 font-bold text-base text-gray-500 ">{{pageNum}}/{{pageTotalNum}} </v-btn>  
              <button  class="text-xs span-col-1" @click="dialog = false" > 77 讚 </button> -->
            </div> 
        </v-card>
      </v-dialog>
    <!-- </v-row>   -->
  <!-- <v-card-text>
    {{ tutorial.Author }} ,<br>
    {{ tutorial.HashTags }} ,<br>
    {{ tutorial.imgUrl }} ,<br>
    {{ tutorial.pdfUrl }} ,<br>
    {{ tutorial.Type }}  ,<br> 
  </v-card-text>  -->

 
        <!-- </li>


      </ul> -->
      </div>
    </div>
    <div class="col-4">
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

import pdf from 'vue-pdf'
import MdfDataService from "../services/blogService";
import TutorialDetails from "./TutorialMdf";

export default {
  name: "tutorials-list",
  components: { TutorialDetails , pdf },


  data() {
    return { 

       // - - - - - - - - -

      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      
      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      // - - - - - - - - - 
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加載進度
      loadedRatio: 0,
      curPageNum: 0,
      // - - - - - - - - - 


      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 

  methods: {
    // 上一頁函數，
    prePage() {
        var page = this.pageNum
        page = page > 1 ? page - 1 : this.pageTotalNum
        this.pageNum = page
      },
        // 下一頁函數
    nextPage() {
        var page = this.pageNum
            page = page < this.pageTotalNum ? page + 1 : 1
        this.pageNum = page
      },
        // 頁面順時針翻轉90度。
    clock() {
            this.pageRotate += 90
          },
        // 頁面逆時針翻轉90度。
    counterClock() {
            this.pageRotate -= 90
          },
        // 頁面加載回調函數，其中e為當前頁數
    pageLoaded(e) {
            this.curPageNum = e
          },
        // 其他的一些回調函數。
    pdfError(error) {
            console.error(error)
          },

    onDataChange(items) {
      let _tutorials = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key, 
            Author:   data.Author,
            HashTags: data.HashTags,  
            Title:    data.Title, 
            Content:  data.Content, 
            imgUrl:   data.imgUrl, 
            pdfUrl:   data.pdfUrl,

            Type: data.Type,  
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
      MdfDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    MdfDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    MdfDataService.getAll().off("value", this.onDataChange);
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
