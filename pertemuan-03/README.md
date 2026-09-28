# Pertemuan 3 - Formulir HTML dan CSS Dasar

## Baseline
- Menggunakan hasil P2 sebagai dasar pengembangan P3.
- Menyalin `index.html` dan `img/foto-profil.jpg` ke `pertemuan-03/`.

## Implementasi Formulir
- Elemen form yang digunakan:  <form>, <label>, <input>, <select>, <option>, <textarea>, dan <button>
- Tipe input yang digunakan: text, email, number, date, radio, dan checkbox
- Atribut validasi yang digunakan: required, minlength, maxlength, min, max, dan typr=email

## Pengujian GET dan POST
- Hasil pengujian GET: Data formulir akan ditambahkan ke query string URL halaman setelah proses submit
- Contoh URL encoding yang ditemukan: 
https://jansonn20.github.io/2411520093-PWD-TI1A-2627O/pertemuan-03/index.html
?nama=Janson
&email=Latihan%40gmail.com
&semester=5
&tanggal=2026-09-27
&jenis_pesan=pertanyaan
&minat=HTML
&prodi=TI
&pesan=hai
- Hasil pengujian POST: Github Pages menolak permintaan POST dan menampilkan "405 NOT ALLOWED"

## CSS Dasar
- Selector elemen: #about h2, #about h3, #about p, #about ol, #contact h2, #contact label, dan #contact button
- Selector class: .form-group dan .input-form
- Selector ID: #about dan #contact
- Properti CSS dasar yang digunakan: background-color, border, padding, margin, font-family, color, font-size, font-weight, dan border-bottom

## Pengujian dan Perbaikan
- Galat yang ditemukan: Github Pages Menolak permintaan POST
- Penyebab galat: Karena github pages merupakan hosting statis dan data formulir yang dikirim tidak diproses oleh server
- Perbaikan yang dilakukan: mengubah post menjadi get kembali karena membutuhkan server untuk memproses post dan agar url encoding dapat diamati
- Hasil pengujian ulang: Data GET dapat terlihat pada URL setelah form dikirim

## GitHub Pages
URL: https://jansonn20.github.io/2411520093-PWD-TI1A-2627O/pertemuan-03/index.html