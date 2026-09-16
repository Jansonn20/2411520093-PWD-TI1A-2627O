# pertemuan-01
1. Konsep Dasar Pemrograman Web
Pemrograman web itu intinya proses bikin aplikasi atau website supaya bisa diakses orang lewat browser. Di sini, kita bakal sering denger istilah frontend dan backend. Frontend itu urusan tampilan depan yang langsung dilihat dan dipakai pengguna, sedangkan backend itu dapur belakangnya—tempat logika sistem, pengolahan data, dan keamanan berjalan.

2. Arsitektur Klien-Peladen (Client-Server)
Ini pola komunikasi mendasar di internet yang ngelibatin dua pihak. Client itu perangkat atau browser di laptop/HP kita yang tugasnya minta data, sedangkan Server itu komputer canggih penampung data yang tugasnya melayani permintaan dan ngirim balasan data ke client.

3. HTTP Request dan Response
Biar client dan server bisa nyambung, mereka butuh aturan komunikasi yang dinamain protokol HTTP. Waktu kita klik link atau buka web, client ngirim pesan permintaan bernama HTTP Request ke server. Setelah diproses, server bakal ngirim balasan balik bernama HTTP Response yang isinya data halaman web plus kode statusnya (misalnya status 200 kalau sukses, atau 404 kalau halamannya nggak ketemu).

4. HTML, CSS, JavaScript, PHP, dan MySQL
Buat ngebangun web dinamis yang lengkap, lima teknologi ini punya peran dan pembagian tugasnya masing-masing:

- HTML: Rangkanya website. Tugasnya buat bikin struktur dasar kaya judul, paragraf, atau tombol.

- CSS: Baju atau riasannya. Tugasnya ngatur tampilan, warna, layout, dan font biar web kelihatannya estetik.

- JavaScript: Ototnya di sisi depan. Tugasnya bikin halaman web jadi hidup dan interaktif, contohnya buat animasi atau fitur klik tanpa reload.

- PHP: Otak di sisi server. Tugasnya memproses logika aplikasi, ngolah data dari pengguna, dan ngobrol sama database.

- MySQL: Lemari penyimpanannya. Tugasnya menyimpan dan mengorganisasi semua data (kaya username, kata sandi, atau postingan) secara rapi dalam tabel.

5. Hubungan Antarteknologi
Semua teknologi tadi saling bekerjasama dalam satu alur pas kita buka website:

- Kita (client) ngetik alamat web di browser, lalu browser ngirim HTTP Request ke server.

- Di server, skrip PHP bakal jalan buat memproses permintaan kita.

- Kalau butuh data (misal data profil), PHP bakal ngambil data itu dari MySQL.

- Setelah dapet datanya, PHP meracik data tersebut bareng kode HTML, CSS, dan JavaScript, lalu dikirim balik ke browser lewat HTTP Response.

- Browser kita tinggal menerjemahkan racikan HTML (struktur), CSS (tampilan), dan JavaScript (interaksi) jadi bentuk website utuh yang siap kita pakai.
