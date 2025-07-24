const toggle = document.getElementById('modeToggle'); // Mengambil elemen toggle
const body = document.body; // Mengambil elemen body

// Menambahkan event listener untuk perubahan mode gelap
toggle.addEventListener('change', () => {
    // Menambahkan atau menghapus kelas 'dark' pada body
    body.classList.toggle('dark');
});
