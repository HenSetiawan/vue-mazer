/* import library component */ 
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-bs5'
import DataTablesResponsive from 'datatables.net-responsive-bs5'
import Select from 'datatables.net-select'

import 'flatpickr/dist/flatpickr.css'
import Swal from 'sweetalert2'
import flatPickr from 'vue-flatpickr-component'

/* include filepond */
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'


/* using library component */
DataTable.use(DataTablesCore)
DataTable.use(DataTablesResponsive)
DataTable.use(Select)

export { DataTable, Swal, flatPickr, vueFilePond, FilePondPluginFileValidateType, FilePondPluginImagePreview}