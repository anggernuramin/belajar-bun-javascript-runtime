// 1. Untuk meruning project bun
// bun run index.ts (sesuai dengan nama file)

// 2. Untuk menyalakan mode watch agar bun jalan secara otomatis
// bun run --watch index.ts

// 3. Installing semua dependency di bun
// bun install

// 4. installing package untuk lingkungan production
// bun install --production

// 5. Bun tidak menyimpan pacakeg di json melainkan di bun.lockb, kalau di node js disimpan di file package.lockjson

//. installing dependency di bun
// bun add namaPackage
// bun remove namaPackage
// bun update

// Bun akan menyimpan pacakge yang sudah di dwonlad di local komputer, sehingga ketika dowload pacakge baru akan cepat

// 6. Test Runner
// bun test namaFile
// secara default bun menggunakan jest untuk mengecek unit test

// 7. Package runner(atau biasa perintah yang ada di pcakage.json)
// bunx
// perintah yang bisa dijalankan yang ada di fole node_modules/bin
// bunx tsc --version

// 8. Workspace
// Menambahkan beberapa project/multiple project ke dalam satu repositori
// caranya adalah membuat folder packages laliu mendaftarkan pacakges di pacakge.json

//  Bug fix
// Terdapat pada file bunfig.toml
// Akan memberikan coverage/rangkuman hasi test berupa tabel

// Bun berjalan disisi server, tetapi tetap bisa menggunakan web API seperti fetch,console.log() dll

// Bun bisa membuat server menggunakan Bun.server()

// Hashing
// Bun menyediakan untuk hashing mengggunakan algoritma bcrypt

// Bun bisa mengecek dan membedakan versioning dalam aplikasi menggunakan
Bun.semver.satisfies("1.0.0", "1.0.0-pre");

// Mwngambil value dari env
Bun.env.DATABASE_NAME;

// Membuat express js menggunakan Bun
// untuk menginstall
// bun add express
// bun add @types/express-dev

// Zod adalah library ts yang populer yang digunakan untuk validation
// bun add zod

// Menggunakan prisma di bun
// 1. instal prisma
// bun add prisma --dev
// inisialisasi konfigurasi ORM dan menset database menggunakan mysql
// 2. bunx prisma init --datasource-provider mysql
// jika berhasil maka akan membuat folder prisma/schema.prisma dan membuat env DATABASE_URL
// 3. ubah name database yang ada di env
// DATABASE_URL="mysql://root:@localhost:3306/belajar_bun_dasar"
// 4. Buayt database baru via cmd/phpmyadmin
// 5. Membuat schema(isi database) di prisma/schema.prisma
// model Contact {
//   id Int @id @default(autoincrement())
//   name String @db.VarChar(100)
//   phone String? @db.VarChar(20)
//   email String? @db.VarChar(50)
//   @@map("contacts")
// }
// 6.menjalankan database migration menggunakan
// bunx prisma migrate dev
// Jika berhasil , Masukkan nama migrationnya: misal "create_contacts_table" (tiak boleh ada spasi)
// Akan membuat folder migrations didalam folder prisma
// 7. Mmebuat kode prisma client secara otomatis
// bunx prisma generate
// jika berhasil maka akan muncul config prisma client
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
// 8. Buat file untuk memasukkan data ke database dengan prisma client diatas
