<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import StudentItem from '@/components/StudentItem.vue';

//B1: khởi tạo biến để lưu dữ liệu lấy từ json-server
const students = ref([]);
//B2: khởi tạo hàm lấy danh sách sinh viên
const getStudents = async () => {
  //call api bằng axios: axios.method('url', data);
  //list, detail, delete thì chỉ cần truyền url
  //với create/update thì mới cần truyền thêm data
  const response = await axios.get('http://localhost:3000/students');
  students.value = response.data; //gán response.data cho biến students
}

const deleteStudent = async (id) => {
  if (confirm('Bạn có chắc không?')) {
    //call api xóa SV
    await axios.delete(`http://localhost:3000/students/${id}`);
    getStudents(); //cập nhật danh sách sinh viên mới
  }
}

//onMounted: tự động thực thi hàm ngay khi load trang
onMounted(() => { //khai báo các hàm cần thực thi 
  getStudents();
});
</script>

<template>
    <h1>Đây là trang danh sách</h1>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Avatar</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <StudentItem 
          v-for="student in students"
          :s="student"
          @handleDelete="deleteStudent"
        />
        <!-- <tr v-for="s in students">
          <td>{{ s.id }}</td>
          <td>{{ s.name }}</td>
          <td><img :src="s.avatar" alt=""></td>
          <td>{{ s.gender }}</td>
          <td>
            <router-link
              :to="`/detail/${s.id}`"
              class="btn btn-info"
            >
                Detail
            </router-link>
            <router-link
              :to="`/update/${s.id}`"
              class="btn btn-warning"
            >
              Update
            </router-link>
            <button 
              @click="deleteStudent(s.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
</template>