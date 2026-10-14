P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien

Deskripsi
Dokumentasi pengembangan halaman web pada P5, meliputi JavaScript, DOM, event listener, interaksi
navigasi, dan validasi formulir sisi klien.

Fitur dan Pengembangan

- Persiapan Baseline P5: Menyalin artefak P4 ke direktori pertemuan-05/ yang terdiri atas index.html, style.css, dan img/foto-profil.jpg sebagai dasar pengembangan.

- Implementasi JavaScript Eksternal: Membuat berkas script.js dan menghubungkannya dengan index.html menggunakan elemen <script src="script.js"></script> agar kode JavaScript terpisah dari struktur HTML.

- Manipulasi DOM: Menggunakan getElementById(), querySelector(), dan querySelectorAll() untuk memilih elemen halaman. Properti value digunakan untuk membaca masukan formulir, textContent untuk mengubah teks umpan balik, serta classList untuk mengelola class CSS.

- Penanganan Event Listener: Menerapkan addEventListener() untuk menangani event click, submit, input, dan reset sesuai kebutuhan interaksi navigasi dan formulir.

- Interaksi Navigasi Responsif: Menambahkan perilaku tombol hamburger menu menggunakan JavaScript dan DOM. Metode classList.toggle() digunakan untuk membuka atau menutup menu navigasi. Status tombol diperbarui menggunakan atribut aria-expanded dan aria-label.

- Pengujian dan Debugging: Menggunakan Browser DevTools, khususnya Console dan Elements, untuk memeriksa jalannya JavaScript, perilaku navigasi, hasil validasi, serta mengidentifikasi dan memperbaiki galat.

- Dokumentasi dan Pengelolaan Git: Memperbarui pertemuan-05/README.md berdasarkan perubahan dan hasil pengujian aktual. Perubahan penting disimpan melalui commit Git dan dikirim ke GitHub setelah pengujian yang relevan berhasil

Tambahkan entri setiap kali ada perkembangan penting pada proyek.
Pengujian

- Oengujian Baseline: Membuka pertemuan-05/index.html melalui peramban dan memeriksa struktur halaman, navigasi, formulir, footer, tampilan CSS, serta gambar profil.

- Pengujian JavaScript Eksternal: Memeriksa melalui Console Browser DevTools apakah script.js berhasil dimuat dan dijalankan. 

- Pengujian Manipulasi DOM: Memeriksa pemilihan elemen, pembacaan nilai input, perubahan teks menggunakan textContent, dan pengelolaan class CSS.

- Pengujian Navigasi Responsif: Mengeklik tombol hamburger menu untuk memastikan menu dapat dibuka dan ditutup. Memeriksa kesesuaian perubahan tampilan dengan atribut aria-expanded dan aria-label.

- Pengujian Debugging dan Regresi: Memeriksa galat melalui Browser DevTools, memperbaiki masalah jika ditemukan, kemudian mengulangi pengujian untuk memastikan perbaikan tidak mengganggu fitur lainnya

Perbarui bagian ini setelah melakukan pengujian atau debugging yang relevan.
Riwayat Pengembangan
Catat perkembangan melalui commit Git yang bermakna.

- Siapkan baseline P5 dari artefak P4: Menyiapkan salinan proyek P4 sebagai dasar pengembangan P5.

- Hubungkan JavaScript eksternal ke HTML: Membuat dan menghubungkan script.js dengan index.html.

- Tambah tombol navigasi responsif: Menambahkan tombol hamburger menu pada struktur HTML

- Tambahkan interaksi navigasi responsif: Menerapkan event click untuk membuka dan menutup menu serta memperbarui status tombol

- Terapkan validasi formulir sisi klien: Menambahkan pemeriksaan data formulir dan pengendalian event submit

- Tambahkan umpan balik validasi formulir: Menambahkan pesan kesalahan dan keberhasilan serta penghapusan pesan ketika input diubah

- Dokumentasikan pengujian dan perbaikan P5: Memperbarui README berdasarkan hasil pengujian, debugging, dan perbaikan yang benar-benar dilakuka