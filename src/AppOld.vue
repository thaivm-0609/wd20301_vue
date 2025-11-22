<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import axios from 'axios';

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
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

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
        <tr v-for="s in students">
          <td>{{ s.id }}</td>
          <td>{{ s.name }}</td>
          <td><img :src="s.avatar" alt=""></td>
          <td>{{ s.gender }}</td>
          <td>
            <button 
              @click="deleteStudent(s.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="wrapper">
      <!-- <HelloWorld msg="WD20301" /> -->
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
