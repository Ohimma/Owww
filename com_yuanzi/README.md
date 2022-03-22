### 一：项目介绍


```
此项目将会作为后期创建 纯前端静态的模板

不关联后端服务

模仿：http://www.liangzigo.com/
```


#### 一：创建项目
```
方式一：
$ npm init vite <project-name> -- --template vue
$ cd <project-name>
$ npm install
$ npm run dev

方式二：
$ yarn create vite vue --template vue
$ cd <project-name>
$ yarn 
$ yarn dev
$ yarn add xxxx   #缺少插件就安装，比如vite

-------------------
tips：用npm安装了elemntui一直报错，改为yarn安装
Uncaught SyntaxError: The requested module '/node_modules/.vite/vue.js?v=a53c6d6c' does not provide an export named 'createElementBlock'
```
    

#### 二：迁移启动
```
$ git clone https://github.com/xxxxx
$ git remote add github git@github.com:xxxxx
$ git remote add gitlab git@gitlab.com:xxxxx
$ git remote add gitee git@gitee.com:xxxxx

$ npm install -g yarn
$ cd vue
$ yarn
$ npm run dev
$ open http://127.0.0.1:8082

```


#### 三：界面展示
![](./img/home01.png)