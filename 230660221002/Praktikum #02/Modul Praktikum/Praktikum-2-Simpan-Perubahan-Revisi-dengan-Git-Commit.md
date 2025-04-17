## #2: Simpan Perubahan Revisi dengan Git Commit

Menambahkan 1 file panduan praktikum baru dan 2 file-lainnya adalah file gambar.

## Membuat Revisi Pertama

Baiklah, sekarang kita sudah tahu kondisi-kondisi file dalam Git. Selanjutnya, silahkan  coba ubah kondisi file yang kalian tambahkan menjadi `staged` dengan perintah `git add.`

```
git add readme.md
git add ss.png
git add nama_file2.php
```

Setelah itu, coba ketik perintah `git status` lagi. Kondisi filenya sekarang akan menjadi `staged.`

Setelah itu, ubah kondisi file tersebut ke *commited* agar semua perubahan disimpan oleh Git.

```
git commit -m "menambahkan modul praktikum ke-2"
```

Setelah itu, coba cek dengan perintah `git status `lagi.


```zsh


## Membuat Revisi Kedua
---

Ceritannya ada perubahan yang akan kita lakukan pada file `panduan praktikum-2.md`. **Saya menambahkan referensi Git Cheat Sheet **.


Setelah itu ketik lagi perintah `git status.`


```bash
➜  PABWEB-B (main) ✔ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   Modul Praktikum/0-Modul Git/Praktikum-2-Simpan-Perubahan-Revisi-dengan-Git-Commit.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Modul Praktikum/0-Modul Git/Snapshoot/Screen Shot 2021-02-27 at 4.46.37 PM.png

no changes added to commit (use "git add" and/or "git commit -a")
➜  PABWEB-B (main) ✗ 

```
Terlihat disana, file modul praktikum/0-modul Git/**Praktikum-2** sudah dimodifikasi. Kondisinya sekarang berada dalam ***modified***. Lakukan ***commit*** lagi seperti revisi pertama.

```
git add nama_file
git commit -m "tambahkan pesan commit"
```
Dengan demikian, revisi kedua sudah disipan oleh Git. Mungkin anda belum tahu maksud dari argumen `-m,` argumen tersebut untuk menambahkan pesan setiap menyimpan revisi.

![revisi-ke-2](https://1.bp.blogspot.com/-_wKH9usn7FI/WLFdN6wLvcI/AAAAAAAAEKc/XQzBtD98naUfImdeuxZf8NDQ1gXKDqrZQCPcB/s1600/timeline-dua-revisi.png)

`Sekarang Git sudah mencatat dua revisi yang sudah kita lakukan.` Kita bisa ibaratkan revisi-revisi ini sebagai ***checkpoint*** pada Game. Apabila nanti ada kesalahan, kita bisa kembali ke ***checkpoint*** ini.


## Referensi

1. [GIT Cheat Sheet](https://www.javatpoint.com/git-cheat-sheet)
