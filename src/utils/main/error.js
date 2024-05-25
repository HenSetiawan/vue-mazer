import { revokeToken } from '@/helper/crypto'
import Swal from 'sweetalert2'

const statusError = (err) => {
  if (err === 401) {
    revokeToken()
    window.location.reload()
  } else {
    Swal.fire({
      title: 'Data Sync Error',
      text: 'The synchronization of your data could not be completed at this time due to connection or system error.',
      icon: 'error',
      confirmButtonColor: '#364b98',
      confirmButtonText: 'Yes, Understand'
    })
  }
}

export { statusError }
