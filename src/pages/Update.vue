<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//B1: khởi tạo biến student
const student = ref({
    name: '',
    avatar: '',
    gender: 'Male',
})
//B2: lấy thông tin cũ của bản ghi dựa vào id
//B2.1: lấy id từ url
const route = useRoute();
const id = route.params.id;
//B2.2: khởi tạo hàm để call api lấy thông tin chi tiết
const getDetail = async (id) => {
    const response = await axios.get(`http://localhost:3000/students/${id}`);
    student.value = response.data;
}
//B2.3: sử dụng onMounted để gọi hàm getDetail ngay khi load trang
onMounted(() => {
    getDetail(id);
})

//B3: lấy dữ liệu từ form, cập nhật vào db
const handleSubmit = async () => {
    try {
        await axios.put(
            `http://localhost:3000/students/${id}`, //api url
            student.value //data
        );
        router.push('/');
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <h1>Đây là trang chỉnh sửa</h1>
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