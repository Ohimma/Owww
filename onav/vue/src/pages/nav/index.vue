<template>
    <div class="navall">
        <div class="header">
             <el-carousel ref="carousel" :initial-index="0" :interval="4000" type="card" height="300px" @click="handleClick">
                <el-carousel-item> <nav01 /> </el-carousel-item>
                <el-carousel-item> <nav02 /> </el-carousel-item>
            </el-carousel>
        </div>
        
        <div class="content">
            <router-view />
        </div>
    </div>
    
</template>

<script>
import nav01 from './nav01.vue'
import nav02 from './nav02.vue'


export default {
    components: {
        nav01,nav02
    },
   
    methods: {
        handleClick(){
            const index = this.$refs.carousel.data.activeIndex + 1
            const url = "/nav/nav0" + index
            this.$router.push(url)
        },
    },
}
</script>

<style >
.navall {
    height: 100%;
}

.navall .content {
    height: 100%;
}


</style>