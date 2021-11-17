<template  >
   <div class="app">
     ad
    <pdf url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10019/pdf.pdf"></pdf>
 
   </div>

 
  
</template>


 
<script>

import pdf from 'vue-pdf'
import MdfDataService from "../services/blogService";
import TutorialDetails from "./TutorialMdf";
import VuePdfApp from "vue-pdf-app";
// import this to use default icons for buttons
import "vue-pdf-app/dist/icons/main.css";

export default {
  name: "tutorials-list",
  components: { TutorialDetails , pdf ,VuePdfApp },


  data() {
    return { 

      page: 1,
      pdf: null,
      numPages: 'unknown',
      selection: '',
      rects: [],


      dfList: [ 
				'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf',
				'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf',
				'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf',
				'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf',
				'https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf',
				'data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK',
			],

       // - - - - - - - - -

      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      
      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      url2:"https://www.philadelphiaaces.org/sites/default/files/fake_pdf.pdf",
      // - - - - - - - - - 
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加載進度
      loadedRatio: 0,
      curPageNum: 0,
      // - - - - - - - - -  

      temp_img: [],
      temp_pdf: [],

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

      //  ::  藉由使用  ::
    var temp_ary = _tutorials.map(function(item, index, array){ 
        if (item.pdfUrl !== '') {
              return item.pdfUrl;
            }  
      }) ; 
    this.temp_pdf = temp_ary ;

      //  ::  藉由使用  ::
    var temp_ary2 = _tutorials.map(function(item, index, array){ 
        if (item.imgUrl !== '') {
              return item.imgUrl;
            }  
      }) ; 
    this.temp_img = temp_ary2 ;

    console.log('- - - < temp_ary > - - -');  
    console.log(temp_ary); 
    console.log(temp_ary2); 
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
/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.textLayer {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.2;
  line-height: 1.0;
}

.textLayer > div {
  color: transparent;
  position: absolute;
  white-space: pre;
  cursor: text;
  -webkit-transform-origin: 0% 0%;
  -moz-transform-origin: 0% 0%;
  -o-transform-origin: 0% 0%;
  -ms-transform-origin: 0% 0%;
  transform-origin: 0% 0%;
}

.textLayer .highlight {
  margin: -1px;
  padding: 1px;

  background-color: rgb(180, 0, 170);
  border-radius: 4px;
}

.textLayer .highlight.begin {
  border-radius: 4px 0px 0px 4px;
}

.textLayer .highlight.end {
  border-radius: 0px 4px 4px 0px;
}

.textLayer .highlight.middle {
  border-radius: 0px;
}

.textLayer .highlight.selected {
  background-color: rgb(0, 100, 0);
}

.textLayer ::selection { background: rgb(0,0,255); }
.textLayer ::-moz-selection { background: rgb(0,0,255); }

.textLayer .endOfContent {
  display: block;
  position: absolute;
  left: 0px;
  top: 100%;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
}

.textLayer .endOfContent.active {
  top: 0px;
}
</style>
