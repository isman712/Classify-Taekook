import Swal from "sweetalert2";

function Noti(icon, title, text, success = true) {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#ffff",
      toast: true,
      background: success ? "#3ab65c" : "#AE2D2C",
      color: "#ffff",
      width: "auto",
    });
}


export default Noti;