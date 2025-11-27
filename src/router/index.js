//khai báo router
import Create from "@/pages/Create.vue";
import Detail from "@/pages/Detail.vue";
import Home from "@/pages/Home.vue";
import List from "@/pages/List.vue";
import Update from "@/pages/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({ //khai báo routes và history
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home-page',
        },
        {
            //url bắt buộc phải bắt đầu bằng dấu /
            path: '/list', //url: đường dẫn ở trên trình duyệt
            component: List, //file .vue muốn hiển thị 
            name: 'student-list', //đặt tên cho route
        },
        {
            path: '/detail/:id',
            component: Detail,
            name: 'student-detail',
        },
        {
            path: '/create',
            component: Create,
            name: 'student-create',
        },
        {
            path: '/update/:id',
            component: Update,
            name: 'student-update',
        }
    ],
    history: createWebHistory(),
})
export default router;
