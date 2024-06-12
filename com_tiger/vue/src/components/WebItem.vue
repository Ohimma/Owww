<template>
  <div>
    <h4 class="text-gray" v-if="title">
      <i class="linecons-tag" :id="transName(item)"></i>
      {{title}} - {{transName(item)}}
    </h4>
    <h4 class="text-gray" v-else>
      <i class="linecons-tag" :id="transName(item)"></i>
      {{transName(item)}} 
    </h4>

    <div class="row">
      <div class="col-sm-3" v-for="(web, idx) in item.web" :key="idx">
        <div class="xe-widget xe-conversations box2 label-info" title=""
          @click="openweb(web.url)"
          data-toggle="tooltip" 
          data-placement="bottom" 
          :data-original-title="web.url">

          <!-- 最小单元格 -->
          <div class="xe-comment-entry">
              <div class="xe-comment-left" >
                <a class="xe-user-img">
                <img :src="web.logo" class="lozad img-circle" width="50">
              </a>
              </div>
            
              <div class="xe-comment">
                <a href="#" class="xe-user-name overflowClip_1">
                  <strong>{{web.title}}</strong>
                </a>
                <p class="overflowClip_2" v-if="web.owner">
                  {{web.desc}}  ({{web.owner}})
                </p> 
                 <p class="overflowClip_2" v-else>
                  {{web.desc}}  
                </p> 
              </div>
          </div>
        </div>
        <!-- 附加文档标签 -->
        <div class="xe-widget xe-doc box22" v-if="web.doc"
          @click="openweb(web.doc)"
          data-toggle="tooltip" 
          data-placement="bottom" 
          data-original-title="说明文档">
          <img  class=" " src="../../public/assets/images/logoss/logo_doc.png" alt="" width="14px">
        </div>
        
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'WebItem',
  props: {
    title: String,
    item: Object,
    transName: Function
  },
  methods: {
    openweb(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
i {
  margin-right: 7px;
}
</style>
