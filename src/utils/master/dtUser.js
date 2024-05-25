/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import moment from 'moment'
import 'moment-timezone'

const options = ref({
  columns: [
    { data: 'id', title: 'ID' },
    { data: 'name', title: 'Name' },
    { data: 'email', title: 'Email' },
    { data: 'gender', title: 'Gender' },
    { data: 'address', title: 'Address' },
    { data: 'course', title: 'Course' },
  ],
  responsive: true,
  select: true,
  pagingType: window.innerWidth < 768 ? 'simple' : 'simple_numbers'
})
export { options }
