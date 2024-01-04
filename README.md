
<img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Lambang_Kota_Madiun.png" width="80">

# Bypass wifi kota madiun
kota madiun menyediakan wifi gratis yang tersebar di dalam kota, setiap gang/gardu terpasang wifi "kota pendekar" dan sejenisnya. mungkin anda membutuhkan bypass ini berfungsi untuk memberhentikan waktu limit internetnya agar tetap terkoneksi tanpa harus login mikrotik juga yang mengharuskan menonton video atau menekan tombol untuk mengakses jaringan. hanya pengguna laptop/pc cocok untuk anak kampus/sekolah yang ingin belajar atau ingin mendownload apapun bebas tanpa limit

[DOWNLOAD DISINI](https://github.com/vikodk67/bypass-wifimadiun/archive/refs/heads/main.zip)

jika tidak berfungsi/masalah lain, silahkan untuk menghubungi gmail `brizyy36@gmail.com`
#### Warning
Jangan digunakan untuk keuntungan pribadi. ini milik bersama, salam kota pendekarr. jossss

### Preview bypass
<img src="./carbon.png" width="500">

# Installation & play

- install *node-v20.10.0-x86.msi* sampai selesai
- lalu ekstrak rar  *node_modules.rar* menggunakan software winrar atau bawaan dari windows
- buka installNpm.bat jika folder *node_modules* tidak tersedia atau rusak
- jika sudah, klik start.bat dan selesai

#### Link terkait
[NODE JS](https://nodejs.org/en)
## Config.json
Anda dapat merubah "config.json" hanya memiliki 2 opsi

`intervalWaktu` berfungsi sebagai kecepatan saat membypass, menyarankan *3000* = 3 detik

`url` ada 2 link yaitu kota-madiun.myoltic.com public yang satunya localhost yang dapat diakses satu jaringan
Sebenernya dua duanya sama sama localhost cuman satunya menggunakan domain untuk menyembunyikan ip

- `kota-madiun.myoltic.com`
- `localhost`
 Jika tidak dapat membypass silahkan buka *bypass.js* `const c = require('./config.json').url[0];` ubah `url[0]` menjadi `url[1]` mengikuti array yang berada di file config.json 


## Support
### Windows 8, 8.1, 10, 11


