
<img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Lambang_Kota_Madiun.png" width="70">

# Bypass expired & without login mikrotik wifi kota madiun
kota madiun menyediakan wifi gratis yang tersebar di dalam kota, setiap gang/gardu terpasang wifi "kota pendekar" dan sejenisnya. mungkin anda membutuhkan bypass ini berfungsi untuk memberhentikan waktu limit internetnya agar tetap terkoneksi tanpa harus login mikrotik juga yang mengharuskan menonton video atau menekan tombol untuk mengakses jaringan. Hanya tersedia di windows atau android/ios, cocok untuk anak kampus atau anak sekolah yang membutuhkan jaringan tanpa adanya limit.

this makes things easier for you.

#### Catatan
Gunakan dengan bijak, bukan untuk menguntungkan diri sendiri

- Create by: viko dwi kurniawan
- Language: Javascript

## Installation & Run
<div>
 <img src="https://cdn.icon-icons.com/icons2/2235/PNG/512/windows_os_logo_icon_134674.png" width="30">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Termux_2.png" width="30">
</div>

*Note: jika bertuliskan error failed to fetch kalian tinggal run/jalankan skripnya kembali "node ." / "node bypass"*

#### Windows
- install *node-v20.10.0-x86.msi* sampai selesai
- lalu ekstrak rar  *node_modules.rar* menggunakan software winrar atau bawaan dari windows
- buka installNpm.bat jika folder *node_modules* tidak tersedia atau rusak

#### Android/IOS (TERMUX)
- install di playstore/appstore termux
- lalu buka termuxnya ketik
``` bash
apt upgrade && apt update
```
Kalau ada tulisan seperti permintaan confirm intinya ada tulisan *[default][N]* kalian ikuti saja ketik "n" kalo gagal berarti ketik "y"

*Note: pake jaringan internet sendiri yah untuk mendownload + mengupgrade si termuxnya untuk melengkapi data yang kurang lengkap*

Atau manual jika tidak bisa
``` bash
apt upgrade
```
``` bash
apt update
```
- kalian buka folder *bypass-wifimadiun-main* yang kalian sudah download lalu ketik *cd* kalian cari sendiri karena isi hp berbeda beda intinya kalian ketik *dir* untuk melihat lokasi direktorinya
``` bash
dir
```
Kalo saya begini lokasinya di downloads nya langsung karena hp saya tidak megizinkan meletakkan lebih dalam harus make root saranin letakkan foldernya di downloads aja biar gampang

VIKO
``` bash
cd storage
cd downloads
cd bypass-wifimadiun-main
```
sampai menemukan folder bernama *bypass-wifimadiun-main*
- jika sudah berada dilokasi tempat kamu mendownload, contoh punya saya dibawah ini
``` bash
~/.../downloads/bypass-wifimadiun-main $
```
Dan jangan lupa ekstrak terlebih dahulu yah "node_modules.rar" nya di hp kalian

Lanjut kalian install bahasa programnya yaitu nodejs, ketik dibawah ini:
``` bash
apt install nodejs
```
Jika ada tulisan seperti mengajukan menginstall ketik aja huruf "y" yes atau "n" no
- langkah terakhir adalah menyalakannya ketik saja
``` bash
node .
```
Atau
``` bash
node bypass
```
Pastikan anda sudah berada di dalam folder bypass-wifimadiun-main akan tertulis loksi direktorinya di termuxnya

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
- Windows 8, 8.1, 10, 11
- Android/IOS

