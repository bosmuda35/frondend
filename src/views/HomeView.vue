<!-- membuat halaman home -->
<template>
  <div class="bg-white text-gray-800 font-sans">
    <!-- menambahkan Navbar -->
    <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div class="text-xl font-bold text-green-700">Indorapet</div>
        <div class="space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-green-600 transition">
            Beranda
          </router-link>
          <router-link to="/daftarproduk" class="text-gray-700 hover:text-green-600 transition">
            Daftar Produk
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-green-100 to-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
          Selamat Datang di Indorapet
        </h1>
        <p class="text-lg text-gray-600 mb-8 animate-fade-in-delayed">
          Belanja sembako murah, lengkap, dan terpercaya!
        </p>
        <router-link to="/daftarproduk">
          <button
            class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition shadow-lg animate-bounce"
          >
            Lihat Produk
          </button>
        </router-link>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Galeri Toko Kami</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <img
            src="@/assets/gambar1.jpg"
            alt="Etalase Toko"
            class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="@/assets/gambar2.jpg"
            alt="Produk Sembako"
            class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Testimoni Pelanggan -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Testimoni Pelanggan</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">
              "Belanja di Indorapet sangat praktis dan harganya bersaing. Pelayanan juga ramah."
            </p>
            <div class="font-semibold text-gray-800">- Ibu Ani</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">
              "Produk selalu lengkap dan cepat dikirim. Recommended!"
            </p>
            <div class="font-semibold text-gray-800">- Pak Dedi</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">"Tempat belanja sembako favorit keluarga kami!"</p>
            <div class="font-semibold text-gray-800">- Siska</div>
          </div>
        </div>
      </div>
    </section>

    <!--menambahkan Footer -->
    <footer class="bg-white border-t py-6 text-center text-gray-600">
      <p>&copy; 2025 Indorapet.Bosmuda.</p>
    </footer>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
.animate-fade-in-delayed {
  animation: fade-in 0.8s ease-out forwards;
}
</style>
