<template>
  <HeaderComponent />
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-lg-6">
          <button>Delete</button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <!-- start of showing datatable -->
      <DataTable
        ref="table"
        :data="data"
        :options="options"
        class="display table table-hover table-bordered"
      >
        <thead class="table-primary">
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Name</th>
            <th class="text-center">Email</th>
            <th class="text-center">Address</th>
            <th class="text-center">Gender</th>
            <th class="text-center">Course</th>
          </tr>
        </thead>
      </DataTable>
      <!-- end of showing datatable -->
    </div>
  </div>
</template>

<script setup>
/* import component */
import HeaderComponent from '@/components/Dashboard/Main/HeaderComponent.vue'
import { DataTable } from '@/utils/main/component.js'
import { options } from '@/utils/master/dtUser.js'
import { ref, onMounted } from 'vue'

let dt
const table = ref()
onMounted(function () {
  dt = table.value.dt
  dt.on('select deselect', () => {
    dt.rows({ selected: true }).every(function () {
      let idx = data.value.indexOf(this.data());
      console.log(data.value[idx]);
    })
  })
})

const data = ref([
  {
    id: 1,
    name: 'Hendy S',
    email: 'Hendy@gmail.com',
    gender: "Male",
    address: "Ngawi",
    course:"Dicoding"
  },
    {
    id: 2,
    name: 'Budi S',
    email: 'Hendy@gmail.com',
    gender: "Male",
    address: "Ngawi",
    course:"Dicoding"
  }
])
</script>
