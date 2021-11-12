<template>
  <v-app>
    <v-card flat>
      <v-toolbar
        color="primary"
        dark
        extended
        flat
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-toolbar>

      <v-card
        class="mx-auto"
        max-width="950"
        style="margin-top: -64px;"
      >
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">
            泰雅課程 實驗教育 內容編輯器
          </v-toolbar-title>

          <v-spacer></v-spacer>


          <v-btn flat class="mx-2">
          <router-link to="/Add">新增旅途 </router-link>
          </v-btn> 
          
          <v-btn flat class="mx-2">
            <router-link to="/tutorials">  旅途列表</router-link>
          </v-btn> 

          <v-btn flat class="mx-2">
          <router-link to="/WordAdd">新增詞語 </router-link>
          </v-btn> 
          
          <v-btn flat class="mx-2">
            <router-link to="/WordList">  詞語列表</router-link>
          </v-btn> 

          <v-btn flat class="mx-3" >
            <v-icon>mdi-magnify</v-icon> 
            <a>文化素養</a>
          </v-btn>

          <v-btn flat class="mx-3"> 
            <v-icon>mdi-apps</v-icon> 
            <a>近期課表</a>
          </v-btn>

          <v-btn icon class="mx-3">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider>

          
        </v-divider>
        <br>
          <a class = "mx-9">
            操作提示：
             這邊有一些訊息 
          </a>
        <v-card-text style="height: 50px;"></v-card-text>
      </v-card>
    </v-card> 

      <v-content class="mt-6"> 
         <router-view/> 
      </v-content>
  </v-app>

  
</template>