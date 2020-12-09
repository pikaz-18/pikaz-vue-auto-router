/*
 * @Description: 这是***页面（组件）
 * @Date: 2020-12-09 15:41:54
 * @Author: zouzheng
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-12-09 17:48:14
 */
const list = require.context('@/views', true, /index.vue/)
const routesList = list.keys().map(item => {
    const file = require('@/views' + item.substr(1))
    return {
        path: item.substr(1).replace('/index.vue', ''),
        meta: file.default.meta || {},
        component: () => import('@/views' + item.substr(1))
    }
})

export default routesList