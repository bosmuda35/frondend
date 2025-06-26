<!-- membuat halaman admin -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 class="text-2xl font-bold text-green-700">Indorapet-Mart Admin</h1>
      <RouterLink to="/" class="text-green-700 hover:underline">Kembali</RouterLink>
    </nav>

    <!-- Form Tambah / Edit -->
    <section class="max-w-xl mx-auto py-10">
      <h2 class="text-xl font-bold mb-4 text-gray-800">
        {{ isEdit ? "Edit Produk" : "Tambah Produk" }}
      </h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="form.nama"
          type="text"
          placeholder="Nama produk"
          class="w-full px-4 py-2 border rounded"
          required
        />
        <input
          v-model.number="form.harga"
          type="number"
          placeholder="Harga (contoh: 15000)"
          class="w-full px-4 py-2 border rounded"
          required
        />
        <input
          v-model.number="form.stok"
          type="number"
          placeholder="Stok produk"
          class="w-full px-4 py-2 border rounded"
          required
          min="0"
        />
        <div class="flex justify-between">
          <button
            type="submit"
            class="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            {{ isEdit ? "Update" : "Tambah" }}
          </button>
          <button
            v-if="isEdit"
            @click="resetForm"
            type="button"
            class="text-red-600 hover:underline"
          >
            Batal
          </button>
        </div>
      </form>
    </section>

    <!-- Daftar Produk -->
    <section class="max-w-5xl mx-auto px-4 py-6">
      <h3 class="text-lg font-bold mb-4">Daftar Produk</h3>
      <div v-if="loading" class="text-gray-500">Memuat data...</div>
      <div v-else-if="produk.length === 0" class="text-gray-500">Belum ada produk.</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="item in produk" :key="item.id" class="bg-white p-4 rounded shadow">
          <h4 class="text-lg font-semibold text-green-700">{{ item.nama }}</h4>
          <p class="text-gray-600">Stok: {{ item.stok }}</p>
          <p class="text-green-800 font-bold">Rp {{ formatRupiah(item.harga) }}</p>
          <div class="mt-2 space-x-2">
            <button @click="editProduk(item)" class="text-blue-600 hover:underline">Edit</button>
            <button @click="hapusProduk(item.id)" class="text-red-600 hover:underline">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import ref dan onMounted dari Vue Composition API
import { onMounted, ref } from "vue";

// State untuk menyimpan daftar produk
const produk = ref([]);

// State untuk menandai apakah sedang loading data
const loading = ref(true);

// State untuk menandai apakah form dalam mode edit
const isEdit = ref(false);

// State untuk menyimpan data form produk
const form = ref({ id: null, nama: "", harga: 0, stok: 0 });

// URL endpoint API yang digunakan untuk mengambil data produk
const API_URL = "https://backend-indorapet.backenindorapet.workers.dev/produk";

// Fungsi untuk mengambil data produk dari API
const fetchProduk = async () => {
  loading.value = true; // Tampilkan loading
  const res = await fetch(API_URL); // Ambil data dari server
  produk.value = await res.json(); // Simpan data hasil fetch ke state produk
  loading.value = false; // Sembunyikan loading setelah data diterima
};

// Jalankan fetchProduk saat komponen pertama kali dimuat
onMounted(fetchProduk);

// Fungsi untuk menangani pengiriman form (tambah atau edit)
const handleSubmit = async () => {
  // Gunakan PUT jika sedang edit, POST jika menambahkan
  const method = isEdit.value ? "PUT" : "POST";

  // Kirim data ke server sesuai method (PUT/POST)
  await fetch(API_URL, {
    method,
    headers: { "Content-Type": "application/json" }, // Tentukan tipe data JSON
    body: JSON.stringify(form.value), // Ubah form menjadi JSON
  });

  resetForm(); // Reset form setelah submit
  fetchProduk(); // Ambil data terbaru dari server
};

// Fungsi untuk mengisi form saat ingin mengedit data
const editProduk = (item) => {
  isEdit.value = true; // Aktifkan mode edit
  form.value = { ...item }; // Salin data produk ke form
};

// Fungsi untuk menghapus produk berdasarkan id
const hapusProduk = async (id) => {
  await fetch(API_URL, {
    method: "DELETE", // Method DELETE untuk hapus data
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }), // Kirim id produk yang akan dihapus
  });
  fetchProduk(); // Perbarui daftar produk setelah dihapus
};

// Fungsi untuk mengatur ulang form ke keadaan awal
const resetForm = () => {
  isEdit.value = false; // Kembalikan ke mode tambah
  form.value = { id: null, nama: "", harga: 0, stok: 0 }; // Kosongkan form
};

// Fungsi bantu untuk memformat angka ke dalam format mata uang Rupiah
function formatRupiah(value) {
  return Number(value).toLocaleString("id-ID"); // Contoh: 1000000 => "1.000.000"
}

</script>
