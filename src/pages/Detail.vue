<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//lấy id từ trên URL
const route = useRoute();
const id = route.params.id;

const student = ref({}); //khởi tạo biến student để lưu thông tin chi tiết
const getDetail = async (id) => {
    const response = await axios.get(`http://localhost:3000/students/${id}`);
    student.value = response.data; //gán dữ liệu json-server trả về cho biến product
}

onMounted(() => {
    getDetail(id); //gọi hàm getDetail ngay khi load trang
});
</script>

<template>
    <h1>Đây là trang thông tin chi tiết</h1>
    <h3>ID: {{ student.id }}</h3>
    <h3>Name: {{ student.name }}</h3>
    <h3>Gender: {{ student.gender }}</h3>
    <h3>Avatar: </h3>
    <img :src="student.avatar" alt="">
</template>