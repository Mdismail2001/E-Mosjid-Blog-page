export const metadata = {
  title:
    "Carian Masjid Terdekat di Malaysia | Lokasi, Waktu Solat & Panduan - Portal eMasjid",
  description:
    "Cari masjid terdekat dengan mudah melalui Portal eMasjid. Dapatkan lokasi, alamat, waktu solat, kemudahan solat, dan panduan lengkap untuk setiap masjid di kawasan anda.",
  keywords:
    "carian masjid, masjid terdekat, masjid Malaysia, lokasi masjid, waktu solat, panduan masjid, aktiviti komuniti, eMasjid",
};

export default function CarianMasjidPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Carian Masjid Terdekat
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Cari masjid dengan cepat di seluruh Malaysia. Portal eMasjid menyediakan
          maklumat lengkap termasuk alamat, peta, waktu solat, kemudahan, dan
          panduan aktiviti komuniti.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Fungsi Carian Masjid
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Portal eMasjid membolehkan anda mencari masjid berdasarkan lokasi
            dengan alamat lengkap, peta interaktif, dan panduan arah bagi
            memudahkan perjalanan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-3">
              Lokasi & Alamat
            </h3>
            <p className="text-gray-700">
              Dapatkan alamat lengkap, peta, dan arahan ke masjid terdekat.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-3">
              Waktu Solat
            </h3>
            <p className="text-gray-700">
              Semak waktu solat harian mengikut zon waktu untuk ibadah yang tepat.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-3">
              Kemudahan & Aktiviti
            </h3>
            <p className="text-gray-700">
              Maklumat tentang kemudahan solat, parkir, ruang wuduk, dan aktiviti komuniti.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Mulakan carian masjid anda hari ini dengan Portal eMasjid dan temui masjid
            terdekat, waktu solat tepat, serta panduan lengkap untuk pengalaman ibadah
            yang lebih mudah dan bermakna.
          </p>
        </div>
      </section>
    </main>
  );
}
