<template>
    <tr>
        <td>{{ s.id }}</td>
        <td>{{ s.name }}</td>
        <td><img :src="s.avatar" alt=""></td>
        <td>{{ s.gender }}</td>
        <td>
            <router-link
                :to="`/admin/detail/${s.id}`"
                class="btn btn-info"
            >
                Detail
            </router-link>
            <router-link
                :to="`/admin/update/${s.id}`"
                class="btn btn-warning"
            >
                Update
            </router-link>
            <!-- viết tường minh:  -->
            <!-- <button 
                @click="delStudent(s.id)"
                class="btn btn-danger"
            >
                Delete
            </button> -->

            <!-- viết rút gọn: trực tiếp emit vào @click -->
            <button
                @click="emit('handleDelete', s.id)"
                class="btn btn-danger"
            >
                Delete
            </button>
        </td>
    </tr>
</template>
<script setup>
defineProps({
    s: {
        type: Object,
        required: true,
    }
})
const emit = defineEmits(['handleDelete']);
// function delStudent(id) {
//     emit('handleDelete', id);
// }
</script>