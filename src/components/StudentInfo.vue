<script setup>
import Info from './Info.vue';

//khai báo những properties (thuộc tính) được truyền từ component cha sang
const props = defineProps({
    //key: kiểu dữ liệu => props không bắt buộc truyền vào
    // name: String,
    // avatar: String,
    // gender: String,
    
    //bắt buộc component cha phải truyền props sang
    //key: {
    //  type: Kiểu dữ liệu,
    //  required: true,
    //}
    student: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="card mx-3" style="width: 18rem;">
        <img :src="student.avatar" class="card-img-top" alt="...">
        <div class="card-body">
            <Info 
                :name="student.name"
                :gender="student.gender"
                :description="student.description"
            />
            <!-- <h5 class="card-title">{{ student.name }}</h5>
            <p class="card-text">Giới tính: {{ student.gender }}</p>
            <p class="card-text">Mô tả: {{ student.description }}</p> -->
            <a href="#" class="btn btn-primary">Detail</a>
        </div>
    </div>
</template>
