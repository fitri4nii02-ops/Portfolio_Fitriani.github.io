document.addEventListener("DOMContentLoaded", function () {
    highlightActiveNav();
    setupMobileMenu();
    setupScrollReveal();
    setupContactForm();
});


/* =========================
   NAVBAR
========================= */

function highlightActiveNav() {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll("nav a, .nav-links a");

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href")?.split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}


function setupMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            hamburger.classList.remove("open");
        });
    });
}


/* =========================
   SCROLL REVEAL
========================= */

function setupScrollReveal() {
    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((el) => {
        observer.observe(el);
    });
}


/* =========================
   FORM KONTAK
========================= */

function setupContactForm() {
    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");

        let isValid = true;

        clearErrors(form);


        if (!name.value.trim()) {
            showError(
                name,
                "Nama tidak boleh kosong"
            );

            isValid = false;
        }


        if (
            !email.value.trim() ||
            !isValidEmail(email.value)
        ) {
            showError(
                email,
                "Masukkan alamat email yang valid"
            );

            isValid = false;
        }


        if (!message.value.trim()) {
            showError(
                message,
                "Pesan tidak boleh kosong"
            );

            isValid = false;
        }


        if (isValid) {

            alert(
                "Terima kasih! Pesan kamu berhasil dikirim."
            );

            form.reset();
        }

    });
}


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function showError(inputEl, message) {

    const error =
        document.createElement("small");

    error.className = "error-message";

    error.style.color = "red";

    error.textContent = message;

    inputEl.insertAdjacentElement(
        "afterend",
        error
    );

    inputEl.style.borderColor = "red";
}


function clearErrors(form) {

    form
        .querySelectorAll(".error-message")
        .forEach((el) => el.remove());

    form
        .querySelectorAll("input, textarea")
        .forEach((el) => {
            el.style.borderColor = "";
        });
}


/* =========================
   POPUP PENDIDIKAN
========================= */

function tampilPendidikan(judul, foto) {

    document.getElementById(
        "modal-judul"
    ).textContent = judul;

    document.getElementById(
        "modal-foto"
    ).src = foto;

    document.getElementById(
        "modalPendidikan"
    ).classList.add("show");
}


function tutupPendidikan() {

    document.getElementById(
        "modalPendidikan"
    ).classList.remove("show");
}


/* =========================
   POPUP CODING
========================= */

function tampilCoding() {

    document.getElementById(
        "codingModal"
    ).classList.add("show");
}


function tutupCoding() {

    document.getElementById(
        "codingModal"
    ).classList.remove("show");
}


/* =========================
   POPUP TUJUAN PORTFOLIO
========================= */

function tampilTujuan() {

    document.getElementById(
        "tujuanModal"
    ).classList.add("show");
}


function tutupTujuan() {

    document.getElementById(
        "tujuanModal"
    ).classList.remove("show");
}


/* =========================
   POPUP NAMA
========================= */

function tampilNama() {

    document.getElementById(
        "namaModal"
    ).classList.add("show");
}


function tutupNama() {

    document.getElementById(
        "namaModal"
    ).classList.remove("show");
}


/* =========================
   POPUP PENGALAMAN
========================= */

function tampilPengalaman() {

    document.getElementById(
        "pengalamanModal"
    ).classList.add("show");
}


function tutupPengalaman() {

    document.getElementById(
        "pengalamanModal"
    ).classList.remove("show");
}


/* =========================
   POPUP NIM
========================= */

function tampilNim() {

    document.getElementById(
        "nimModal"
    ).classList.add("show");
}


function tutupNim() {

    document.getElementById(
        "nimModal"
    ).classList.remove("show");
}


/* =========================
   POPUP KELAS
========================= */

function tampilKelas() {

    document.getElementById(
        "kelasModal"
    ).classList.add("show");
}


function tutupKelas() {

    document.getElementById(
        "kelasModal"
    ).classList.remove("show");
}


/* =========================
   KEAHLIAN
========================= */

function toggleSkill(icon) {

    const card =
        icon.closest(".skill-card");

    card.classList.toggle("active");


    if (card.classList.contains("active")) {

        const progress =
            card.querySelector(".skill-progress");

        progress.style.width = "0%";

        setTimeout(function () {

            progress.style.width = "20%";

        }, 100);
    }
}


/* =========================
   CONTOH PROYEK
========================= */

function tampilContoh(jenis) {

    const modal =
        document.getElementById("contohModal");

    const judul =
        document.getElementById("contohJudul");

    const deskripsi =
        document.getElementById("contohDeskripsi");

    const kode =
        document.getElementById("contohKode");


    if (jenis === "html") {

        judul.textContent = "Contoh HTML";

        deskripsi.textContent =
            "HTML digunakan untuk membuat struktur halaman website.";

        kode.textContent =
`<!DOCTYPE html>
<html>

<head>
    <title>Website Saya</title>
</head>

<body>

    <h1>Halo, saya Fitriani</h1>

    <p>Ini adalah contoh HTML.</p>

</body>

</html>`;

    }


    else if (jenis === "css") {

        judul.textContent = "Contoh CSS";

        deskripsi.textContent =
            "CSS digunakan untuk mengatur tampilan website.";

        kode.textContent =
`.judul {
    color: #e91e63;
    font-size: 30px;
    text-align: center;
}`;

    }


    else if (jenis === "cpp") {

        judul.textContent =
            "Contoh Program C++";

        deskripsi.textContent =
            "Contoh program C++ sederhana untuk menampilkan tulisan.";

        kode.textContent =
`#include <iostream>
using namespace std;

int main() {

    cout << "Halo, saya Fitriani!" << endl;
    cout << "Belajar C++" << endl;

    return 0;
}`;

    }


    else if (jenis === "programming") {

        judul.textContent =
            "Contoh Programming";

        deskripsi.textContent =
            "Contoh logika sederhana menggunakan percabangan.";

        kode.textContent =
`int angka;

cout << "Masukkan angka: ";
cin >> angka;

if (angka > 0) {
    cout << "Angka positif";
}
else if (angka < 0) {
    cout << "Angka negatif";
}
else {
    cout << "Angka nol";
}`;

    }


    else if (jenis === "networking") {

        judul.textContent =
            "Contoh Networking";

        deskripsi.textContent =
            "Contoh perintah dasar untuk melihat konfigurasi jaringan.";

        kode.textContent =
`ipconfig

// Melihat konfigurasi IP
// pada komputer Windows`;

    }


    else if (jenis === "ip") {

        judul.textContent =
            "Contoh IP Address";

        deskripsi.textContent =
            "Contoh alamat IP yang digunakan pada jaringan.";

        kode.textContent =
`IP Address : 192.168.1.10
Subnet Mask : 255.255.255.0
Gateway : 192.168.1.1`;

    }


    else if (jenis === "mysql") {

        judul.textContent =
            "Contoh MySQL";

        deskripsi.textContent =
            "Contoh query MySQL untuk menampilkan data.";

        kode.textContent =
`SELECT *
FROM produk;`;

    }


    else if (jenis === "database") {

        judul.textContent =
            "Contoh Database";

        deskripsi.textContent =
            "Contoh membuat tabel sederhana menggunakan MySQL.";

        kode.textContent =
`CREATE TABLE mahasiswa (
    nim VARCHAR(20),
    nama VARCHAR(100),
    kelas VARCHAR(20)
);`;

    }


    modal.classList.add("show");
}


/* =========================
   TUTUP POPUP CONTOH
========================= */

function tutupContoh() {

    const modal =
        document.getElementById("contohModal");

    modal.classList.remove("show");
}


/* =========================
   KLIK DI LUAR POPUP
========================= */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("contohModal");

        if (event.target === modal) {
            tutupContoh();
        }

    }
);


/* =========================
   ANIMASI PINDAH HALAMAN
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const links =
            document.querySelectorAll(
                ".nav-menu a"
            );


        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const tujuan =
                        this.href;


                    if (
                        this.classList.contains(
                            "active"
                        )
                    ) {
                        return;
                    }


                    event.preventDefault();


                    document.body.classList.add(
                        "page-exit"
                    );


                    setTimeout(
                        function () {

                            window.location.href =
                                tujuan;

                        },
                        400
                    );

                }
            );

        });

    }
);
// ANIMASI MENGETIK "SAYA FITRIANI"

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const text = "Saya Fitriani";
        let index = 0;

        function typeText() {

            if (index < text.length) {

                typingText.textContent += text.charAt(index);

                index++;

                setTimeout(typeText, 150);

            }

        }

        typeText();

    }

});