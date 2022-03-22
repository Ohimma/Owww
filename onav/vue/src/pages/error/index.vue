<template>
    <div class="errorall">
        <div class="header">
             <el-carousel ref="carousel" :initial-index="0" :interval="4000" type="card" height="300px" @click="handleClick">
                <el-carousel-item> <e403 /> </el-carousel-item>
                <el-carousel-item> <e404 /> </el-carousel-item>
            </el-carousel>
        </div>
        
        <div class="content">
            <router-view />
        </div>
    </div>
    
</template>

<script>
import e403 from './error403.vue'
import e404 from './error404.vue'


export default {
    components: {
        e403,e404
    },
   
    methods: {
        handleClick(){
            const index = this.$refs.carousel.data.activeIndex + 1
            const url = "/error/error0" + index
            this.$router.push(url)
        },
    },
}
</script>

<style >
.errorall {
    height: 100%;
}

.errorall .content {
    height: 100%;
}


</style>