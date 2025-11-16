<script setup>
import { ref, reactive } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

//khởi tạo biến trong vue
//ref(value): dùng với kiểu dữ liệu nguyên thủy (string, number, boolean);
const name = ref('Vương Minh Thái');
const count = ref(0);
const status = ref(true);

const countClick = () => { //arrow function
  count.value++;
}

//reactive(): dùng với array, object
//object: { key: value };
const sinhVien = reactive({
  // key: value
  name: 'thaivm2',
  age: 100,
  isActive: false,
});

//array: []
const state = reactive({
  users: [
    {
      name: 'thaivm2',
      avatar: 'https://picsum.photos/200',
      gender: 'Male',
      age: 67,
      status: true,
    },
    {
      name: 'thaivm3',
      avatar: 'https://picsum.photos/200',
      gender: 'Female',
      age: 14,
      status: false,
    }
  ]
})
const deleteUser = (i) => {
  if (confirm('Are you sure?')) {
    state.users = state.users.filter((item, index) => index != i);
  }
} 

const isLoggedIn = ref(false);
const checkInOut = () => {
  isLoggedIn.value = !isLoggedIn.value;
}

const changeStatus = (index) => {
  //cập nhật giá trị của status bằng phủ định (!) của giá trị status hiện tại
  users[index].status = !users[index].status; 
}

const point = ref(0);
</script>

<template>
  <div class="greetings">
    <!-- <input type="number" v-model="point">
    <h1>Xếp hạng tốt nghiệp:</h1>
    <p v-if="point >= 9">Xuất sắc</p>
    <p v-else-if="point >= 8">Giỏi</p>
    <p v-else-if="point >= 6">Khá</p>
    <p v-else-if="point >= 5">Trung Bình</p>
    <p v-else>Không được tốt nghiệp</p> -->
    
    <!-- nếu point < 5 điểm => không được tốt nghiệp
      5 -> 6: xếp loại Trung bình
      6 -> 8: xếp loại Khá
      8 -> 9: xếp loại Giỏi
      9 -> 10: xếp loại Xuất Sắc
    -->

    
    <!-- <h1>{{ name }}</h1>
    <h1>{{ status }}</h1>
    <h1>{{ count }}</h1>
    <button @click="countClick">Click</button> -->

    <!-- condition rendering: 
      <element v-show="điều kiện"></element>: Render element trước => nếu điều kiện sai thì display: none cho element
      <element v-if="điều kiện"></element>: Kiểm tra điều kiện => nếu điều kiện đúng thì mới render element
      <element v-else-if="điều kiện 2"></element>
      <element v-else></element>
    -->
    
    <h1 v-if="isLoggedIn">Đăng nhập thành công</h1>
    <button v-if="isLoggedIn" @click="checkInOut">Đăng xuất</button>
    <button v-else @click="checkInOut">Đăng nhập</button>
   
    <!-- sử dụng v-for để duyệt qua từng thuộc tính ở trong object
      dưới dạng key: value 
    -->
    <h1 v-for="(value,key) in sinhVien"> {{ key }}: {{ value }}</h1>

    <!-- <h1>{{ sv.name }}</h1>
    <h1>{{ sv.age }}</h1>
    <h1>{{ sv.isActive }}</h1> -->
    <!-- <h1 class="green">{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <input type="text" v-model="name"> -->
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Avatar</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-bind: cú pháp:
          - đầy đủ: <element v-bind:attribute="value"></element>
          - rút gọn: <element :attribute="value"></element>

          - class binding: :class="tenClass"
        -->


        <!-- vòng lặp v-for dùng với mảng (array)
        <element v-for="(soIt, index) in soNhieu" ></element>
        <element v-for="soIt in soNhieu" ></element>
        -->

        <tr v-for="(user,index) in state.users">
          <td>{{ index+1 }}</td>
          <td>{{ user.name }}</td>
          <td><img :src="user.avatar" alt=""></td>
          <td :class="{ isMale: user.gender == 'Male'}">{{ user.gender }}</td>
          <td :style="{ fontSize: user.age>65 ? '50px' : '20px' }">
            {{ user.age }}
          </td>
          <td :class="{ isActive: user.status == true }">{{ user.status }}</td>
          <td style="background-color: red;">
            <button @click="changeStatus(index)" class="btn btn-info">Change status</button>
            <button class="btn btn-warning">Edit</button>
            <button @click="deleteUser(index)" class="btn btn-danger">Delete</button>
          </td>
        </tr>

        <!--
        <tr>
          <td>1</td>
          <td>{{ users[0].name }}</td>
          <td><img v-bind:src="users[0].avatar" alt=""></td>
          cú pháp cho class binding có điều kiện
            :class="{ tenClass: điều kiện }" 
          
          <td :class="{ isMale: users[0].gender == 'Male'}">{{ users[0].gender }}</td>
          style binding: :style="{
            tenThuocTinh: 'value' (ko có điều kiện)
            tenThuocTinh1: điều kiện ? 'giá trị nếu đk đúng' : 'giá trị nếu điều kiện sai'
          }"  
          <td :style="{ fontSize: users[0].age>65 ? '50px' : '20px' }">
            {{ users[0].age }}
          </td>
          <td :class="{ isActive: users[0].status == true }">{{ users[0].status }}</td>
          <td style="background-color: red;">
            <button @click="changeStatus(0)" class="btn btn-info">Change status</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>{{ users[1].name }}</td>
          <td><img :src="users[1].avatar" alt=""></td>
          <td :class="{ isMale: users[1].gender == 'Male'}">{{ users[1].gender }}</td>
          <td>{{ users[1].age }}</td>
          <td :class="{ isActive: users[1].status == true }">{{ users[1].status }}</td>
          <td>
            <button 
              @click="changeStatus(1)"
              class="btn btn-info"
            >
              Change status
            </button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      -->
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}


.isMale {
  background-color: green;
}

.isActive {
  background-color: purple;
  font-size: 40px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
