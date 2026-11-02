// Navigasi responsif.
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup navigasi" : "Buka navigasi",
    );
  });
}

// Validasi formulir Kontak P7.
const contactForms = document.querySelectorAll(
  'form[data-validation="contact"]',
);

contactForms.forEach((contactForm) => {
  const formFeedback = contactForm.querySelector("[data-form-feedback]");

  const ambilInput = (nama) => contactForm.elements.namedItem(nama);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const namaInput = ambilInput("nama");
    const emailInput = ambilInput("email");
    const semesterInput = ambilInput("semester");
    const tanggalInput = ambilInput("tanggal");
    const prodiInput = ambilInput("prodi");
    const pesanInput = ambilInput("pesan");

    const jenisPesan = contactForm.querySelector(
      'input[name="jenis_pesan"]:checked',
    );

    const topikDipilih = contactForm.querySelectorAll(
      'input[name="minat[]"]:checked',
    );

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const semester = Number(semesterInput.value);
    const tanggal = tanggalInput.value;
    const prodi = prodiInput.value;
    const pesan = pesanInput.value.trim();

    const tampilkanKesalahan = (pesanKesalahan) => {
      if (formFeedback) {
        formFeedback.textContent = pesanKesalahan;
        formFeedback.className = "form-feedback-error";
      }
    };

    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }

    if (nama.length < 3 || nama.length > 50) {
      tampilkanKesalahan("Nama lengkap harus diisi 3 sampai 50 karakter.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      tampilkanKesalahan("Masukkan alamat email yang valid.");
      return;
    }

    if (
      semesterInput.value.trim() === "" ||
      !Number.isInteger(semester) ||
      semester < 1 ||
      semester > 14
    ) {
      tampilkanKesalahan("Semester harus diisi dengan angka 1 sampai 14.");
      return;
    }

    if (tanggal === "") {
      tampilkanKesalahan("Tanggal kunjungan harus diisi.");
      return;
    }

    if (!jenisPesan) {
      tampilkanKesalahan("Pilih jenis pesan.");
      return;
    }

    if (topikDipilih.length === 0) {
      tampilkanKesalahan("Pilih minimal satu topik yang diminati.");
      return;
    }

    if (prodi === "") {
      tampilkanKesalahan("Pilih program studi.");
      return;
    }

    if (pesan.length === 0 || pesan.length > 300) {
      tampilkanKesalahan("Pesan harus diisi dan maksimal 300 karakter.");
      return;
    }

    // Mengirim formulir setelah validasi berhasil.
    contactForm.submit();
  });

  contactForm.addEventListener("reset", () => {
    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }
  });

  contactForm.addEventListener("input", () => {
    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }
  });
});

// Validasi formulir Rencana Kegiatan P8.
const planForm = document.querySelector(".js-plan-form");

if (planForm) {
  const formFeedback = planForm.querySelector("[data-form-feedback]");

  planForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const namaKegiatan = planForm.elements["nama_kegiatan"].value.trim();
    const kategori = planForm.querySelector(
      'input[name="kategori"]:checked',
    );
    const tanggalKegiatan = planForm.elements["tanggal_kegiatan"].value;
    const lokasi = planForm.elements["lokasi"].value.trim();
    const deskripsi = planForm.elements["deskripsi"].value.trim();

    const tampilkanKesalahan = (pesanKesalahan) => {
      if (formFeedback) {
        formFeedback.textContent = pesanKesalahan;
        formFeedback.className = "form-feedback-error";
      }
    };

    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }

    if (namaKegiatan.length < 3 || namaKegiatan.length > 100) {
      tampilkanKesalahan("Nama kegiatan harus 3 sampai 100 karakter.");
      return;
    }

    if (!kategori) {
      tampilkanKesalahan("Pilih kategori kegiatan.");
      return;
    }

    if (tanggalKegiatan === "") {
      tampilkanKesalahan("Tanggal kegiatan harus diisi.");
      return;
    }

    if (lokasi.length < 3 || lokasi.length > 100) {
      tampilkanKesalahan("Lokasi harus 3 sampai 100 karakter.");
      return;
    }

    if (deskripsi.length === 0 || deskripsi.length > 300) {
      tampilkanKesalahan("Deskripsi harus diisi dan maksimal 300 karakter.");
      return;
    }

    // Mengirim formulir setelah validasi berhasil.
    planForm.submit();
  });

  planForm.addEventListener("reset", () => {
    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }
  });

  planForm.addEventListener("input", () => {
    if (formFeedback) {
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";
    }
  });
}