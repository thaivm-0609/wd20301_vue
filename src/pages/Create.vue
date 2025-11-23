<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

//khởi tạo biến để lưu dữ liệu người dùng nhập vào form
const student = ref({
    name: '',
    avatar: '',
    gender: 'Male',
});

const handleSubmit = async () => {
    try {
        //call api để lưu dữ liệu lên json-server
        //await axios.method('url', data);
        await axios.post('http://localhost:3000/students',student.value);
        //điều hướng ng dùng về trang danh sách
        router.push('/');
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <h1>Đây là trang thêm mới</h1>
    <form @submit.prevent="handleSubmit()" class="form-group">
        <div>
            <label class="form-label" for="">Name</label>
            <input class="form-control" type="text" v-model="student.name">
        </div>
        <div>
            <label class="form-label" for="">Avatar</label>
            <input class="form-control" type="text" v-model="student.avatar">
        </div>
        <div>
            <label class="form-label" for="">Gender</label>
            <select class="form-control" v-model="student.gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
        <button type="submit" class="btn btn-success mt-2">Submit</button>
    </form>
</template>