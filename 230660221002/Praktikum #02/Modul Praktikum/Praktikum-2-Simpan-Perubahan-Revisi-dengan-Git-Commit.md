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

Ceritannya ada perubahan yang akan kita lakukan pada file `panduan praktikum-2.md`. **Saya menambahkan referensi Git Cheat Sheet**


Setelah itu ketik lagi perintah `git status.`


```bash
PS C:\Desktop\SI-IVA> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   230660221002/Praktikum #02/Modul Praktikum/Praktikum-2-Simpan-Perubahan-Revisi-dengan-Git-Commit.md


no changes added to commit (use "git add" and/or "git commit -a") 

```
Terlihat disana, file modul praktikum/0-modul Git/**Praktikum-2** sudah dimodifikasi. Kondisinya sekarang berada dalam ***modified***. Lakukan ***commit*** lagi seperti revisi pertama.

Dengan demikian, revisi kedua sudah disimpan oleh Git. 

## Referensi

1. [GIT Cheat Sheet](https://www.javatpoint.com/git-cheat-sheet)
