<!--
 * @Description: 这是***页面（组件）
 * @Date: 2020-12-09 17:43:27
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-12-09 22:11:39
-->

# pikaz-vue-auto-router

## 插件说明

本插件用于 vue-cli 脚手架中的路由自动生成，免除手写路由导致的漏写或没有及时同步修改问题。

## 插件安装

```bash
yarn add pikaz-vue-auto-router

npm i -S pikaz-vue-auto-router
```

<div id="example"></div>

## 示例

项目结构

```js
├─public
└─src
    └─views
        ├─home
            └─index.vue
        └─second
            ├─first
            |   └─index.vue
            └─second
                └─index.vue
```

生成的路由列表

```js
;[
    {
        component: () => import('@/views/home'),
        meta: { name: 123 },
        path: '/home',
    },
    {
        component: () => import('@/views/second/first'),
        meta: { name: 123 },
        path: '/second/first',
    },
    {
        component: () => import('@/views/second/second'),
        meta: { name: 123 },
        path: '/second/second',
    },
]
```

## 路由文件配置

在 router 路由文件中

vue-router3 写法

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routesList from 'pikaz-vue-auto-router'

Vue.use(VueRouter)

const routes = [...routesList]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
```

vue-router4 写法

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import routesList from 'pikaz-vue-auto-router'
const routes = [...routesList]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
```

## 插件使用

在 src 文件夹下的 views 文件夹中，添加页面文件夹，页面文件夹中的 index.vue 文件即为路由文件，路由路径为相对于 views 文件夹路径。

js 中添加 meta 信息 为路由 meta 信息

```js
<template>
  <div>
  </div>
</template>

<script>
export default {
  meta: {
    name: 123,
  },
};
</script>
```

最终效果如[示例](#example)所示
