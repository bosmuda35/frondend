<template>
  <div class="bg-white min-h-screen text-gray-800 font-inter px-4 py-32">
    <!-- navbar -->
    <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div class="text-xl font-bold text-gray-900">Indorapet</div>
        <div class="space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-green-600 transition"
            >Beranda</router-link
          >
          <router-link to="/daftarproduk" class="text-gray-700 hover:text-green-600 transition"
            >Daftar Produk</router-link
          >
        </div>
      </div>
    </nav>
    <!-- end navbar -->
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center animate-fade-in">Daftar Produk Sembako</h1>

      <div v-if="loading" class="text-center text-gray-500">Memuat data produk...</div>
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-delayed"
      >
        <div
          v-for="produk in produkList"
          :key="produk.id"
          class="border rounded-xl shadow hover:shadow-lg transition p-4"
        >
          <h2 class="text-xl font-semibold mb-2">{{ produk.nama }}</h2>
          <p class="text-gray-600 mb-2">Stok: {{ produk.stok }}</p>
          <div class="font-bold text-green-700">Rp {{ Number(produk.harga).toLocaleString() }}</div>
        </div>
      </div>

      <div v-if="!loading && produkList.length === 0" class="text-center text-gray-500 mt-10">
        Tidak ada produk tersedia.
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const produkList = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const res = await fetch("https://backend-indorapet.backenindorapet.workers.dev/produk");
    if (!res.ok) throw new Error("Gagal mengambil data produk");
    produkList.value = await res.json();
  } catch (err) {
    console.error("Error saat fetch produk:", err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
.animate-fade-in-delayed {
  animation: fadeIn 1.2s ease-out forwards;
}
</style>
