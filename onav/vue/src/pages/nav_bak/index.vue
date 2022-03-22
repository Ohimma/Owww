<template>
    <div class="navall">
        <div class="header"> 
            <login02></login02>
        </div>
        <div class="content">
            <div class="nav01"> <nav01></nav01> </div>
            <div class="nav02">  <nav02></nav02> </div>
        </div>
    </div>
</template>

<script>
import nav01 from './nav01.vue'
import nav02 from './nav02.vue'
export default {
    components: {
        nav01,nav02
    }
}
</script>

<style >
.navall {
    height: 100%;
}
.navall .header {
    height: 100%;
    width: 100%;
}

.navall .content {
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-content: flex-start;
    position: relative;
}

.navall .content>div {
    width: 45%;
    height: 45%;
    margin: 25px 35px;
    box-shadow: 0 0 20px 5px #cccccc;;
}

.nav02 {
    background-color: lightblue;
}
/* .navall .content>div:hover {
    width: 95%;
    height: 95%;
    position: absolute;
} */


</style>