// Mendapatkan referer dari halaman saat ini
const currentURL = window.location.href;

// Fungsi untuk menambahkan URL referer pada tombol 'Dapatkan Lokasi'
function setReferrer() {
    const mapButton = document.querySelector(".map_list:first-child");
    mapButton.href = "https://goo.gl/maps/9giyeuaPN5t4sWtG9"; // Ganti URL referer sesuai kebutuhan
    mapButton.target = "_blank"; // Agar tautan terbuka di tab baru
}

// Memanggil fungsi untuk menambahkan URL referer saat halaman dimuat
document.addEventListener("DOMContentLoaded", setReferrer);
