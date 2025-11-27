<script setup>
import StudentInfo from '@/components/StudentInfo.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const students = ref([]); //B1: khởi tạo biến để lưu dữ liệu lấy từ db
const getStudents = async () => {//B2: khởi tạo hàm call api lấy danh sách dữ liệu
    const response = await axios.get('http://localhost:3000/students');
    students.value = response.data; //B3: gán dữ liệu sv trả về cho biến students
    console.log(students);
}

onMounted(() => {
    getStudents(); //gọi hàm getStudents ngay khi load trang
})
</script>

<template>
    <h1>Đây là trang chủ</h1>
    <!-- <StudentInfo
        v-for="s in students"
        <-- truyền riêng lẻ từng thuộc tính của object ->
        :name="s.name"
        :avatar="s.avatar"
        :gender="s.gender"    
    /> -->
    <h1>Top SV điểm cao</h1>
    <div class="d-flex">
        <StudentInfo 
            v-for="s in students"
            :student="s"   
        />
    </div>

    <h1>Top sinh viên mới</h1>
    <div class="d-flex">
        <StudentInfo 
            v-for="s in students"
            :student="s"   
        />
    </div>
</template>