import Swal from 'sweetalert2'

export default class AlertHelper {
  static displaySimpleWarningAlert (message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${message}`
    })
  }
}
