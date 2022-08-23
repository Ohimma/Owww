<template>
  
  <div id="bg">
    <header id="header">
      <div class="logo">
        <img src="./assets/img/logo_black.png" alt="">
        <!-- <img src="./assets/img/logo_white.png" alt=""> -->
      </div>

      <div class="nav">
          <ul>
            <li> <a href="#/home">首页  </a></li>
            <li> <a href="#/about">关于 </a></li>
            <li> <a href="#/about">其他 </a></li>
          </ul>
      </div>
    </header>


    <main id="main">
      <router-view class="router-view" v-slot="{ Component }">
        <transition >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>


    <footer id="footer">
        <p>
          © 2022-03-30 
          <a href="http://www.baidu.com" target="_blank"> 粤ICP备1809xxxx号 </a>
        </p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
  width: 100vw;
}
#bg {
  background-color: #ffeb3b;
  
  box-sizing: border-box;
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;

}
#header {
    /* background-color: red; */
    display: flex;
    align-items: center; 
    justify-content: space-between;

    height: 80px;
}

#header > .logo {
    background-color: yellowgreen;

    height: 60%;
    width: 250px;
}
#header > .logo img{
    width: 100%;
}

#header > .nav {
    /* background-color: lightblue; */

    height: 80%;
    width: 200px;
}
#header > .nav  ul {
    height: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: center;  
}


#header > .nav  ul>li a {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
}


header > .nav  ul>li a:hover, a>*:hover, a:focus {
    color: red;
}
/* 
#header > .nav ul>li a:before {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    left: 50%;
    margin-left: -5px;
}
#header > .nav ul>li a:after {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    width: 40px;
    height: 1px;
    right: 50%;
    margin-right: -5px;
} */

#main {
    flex: 1;
    margin: 10px 0;
}



#footer {
  /* background-color: lightcyan; */
    height: 50px;
    display: flex;
    align-items: center; 
}

#footer >  p {
    font-size: 16px;
    font-weight: 700;
    color: #252525;

}
/* #footer > p > a {
    text-decoration: none;
} */

</style>
