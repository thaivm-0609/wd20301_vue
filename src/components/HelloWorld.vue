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
const sv = reactive({
  name: 'thaivm2',
  age: 100,
  isActive: false,
});

//array: []
const users = reactive([
  {
    name: 'thaivm2',
    avatar: 'https://picsum.photos/200',
    gender: 'Male',
  },
  {
    name: 'thaivm3',
    avatar: 'https://picsum.photos/200',
    gender: 'Female',
  }
])

</script>

<template>
  <div class="greetings">
    <!-- <h1>{{ name }}</h1>
    <h1>{{ status }}</h1>
    <h1>{{ count }}</h1>
    <button @click="countClick">Click</button> -->

    <h1>{{ sv.name }}</h1>
    <h1>{{ sv.age }}</h1>
    <h1>{{ sv.isActive }}</h1>
    <h1 class="green">{{ msg }}</h1>
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{{ users[0].name }}</td>
          <td></td>
          <td>{{ users[0].gender }}</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>{{ users[1].name }}</td>
          <td></td>
          <td>{{ users[1].gender }}</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
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
