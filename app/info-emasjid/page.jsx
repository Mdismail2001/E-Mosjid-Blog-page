export const metadata = {
  title:
    "Info eMasjid Malaysia | Panduan Penggunaan, Tips & Maklumat Masjid - Portal eMasjid",
  description:
    "Info eMasjid Malaysia menyediakan panduan penggunaan, tips berguna, dan maklumat lengkap tentang carian masjid, waktu solat, kemudahan, serta aktiviti komuniti melalui Portal eMasjid.",
  keywords:
    "info eMasjid, panduan eMasjid, portal eMasjid, maklumat masjid Malaysia, waktu solat, carian masjid, aktiviti komuniti Islam",
};

export default function InfoEmasjidPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Info & Panduan Portal eMasjid
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-95">
          Ketahui cara menggunakan Portal eMasjid dengan mudah. Dapatkan
          panduan lengkap, tips berguna, dan maklumat penting untuk
          memudahkan ibadah serta aktiviti komuniti masjid.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* INTRO */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Apa Itu Portal eMasjid?
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Portal eMasjid ialah sebuah platform digital yang dibangunkan
            untuk membantu umat Islam di Malaysia mengakses maklumat masjid
            dengan cepat dan tepat. Ia menggabungkan carian masjid, waktu
            solat, kemudahan masjid, dan aktiviti komuniti dalam satu
            sistem yang mudah digunakan.
          </p>
        </div>

        {/* FEATURES */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 text-center mb-10">
            Fungsi Utama Portal eMasjid
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Carian Masjid
              </h3>
              <p className="text-gray-700">
                Cari masjid terdekat berdasarkan lokasi anda lengkap dengan
                alamat, peta, dan panduan arah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Waktu Solat
              </h3>
              <p className="text-gray-700">
                Semak waktu solat terkini mengikut zon dan lokasi bagi
                memudahkan perancangan ibadah harian.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Aktiviti Komuniti
              </h3>
              <p className="text-gray-700">
                Ketahui maklumat program, ceramah, kelas agama, dan aktiviti
                komuniti yang dianjurkan oleh masjid.
              </p>
            </div>
          </div>
        </div>

        {/* GUIDE */}
        <div className="bg-white p-10 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-600 mb-4 text-center">
            Panduan Menggunakan Portal eMasjid
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto">
            Untuk mendapatkan manfaat maksimum daripada Portal eMasjid,
            pengguna disarankan menggunakan fungsi carian dengan maklumat
            yang tepat, menyemak waktu solat secara berkala, dan mengikuti
            kemas kini aktiviti komuniti masjid di kawasan masing-masing.
          </p>
        </div>

        {/* TIPS */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Tips Untuk Pengguna Baru
            </h3>
            <p className="text-gray-700 text-lg">
              Pengguna baru boleh bermula dengan meneroka carian masjid,
              menyimpan masjid kegemaran, dan memahami kemudahan yang
              disediakan sebelum menghadiri aktiviti atau solat berjemaah.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Kepentingan Maklumat Terkini
            </h3>
            <p className="text-gray-700 text-lg">
              Semua maklumat di Portal eMasjid dikemas kini secara berkala
              bagi memastikan ketepatan. Ini membantu pengguna merancang
              ibadah dan penyertaan aktiviti dengan lebih teratur.
            </p>
          </div>
        </div>

        {/* CLOSING */}
        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Terokai halaman Info eMasjid untuk memahami sepenuhnya fungsi
            dan kemudahan Portal eMasjid. Dengan panduan yang jelas dan
            maklumat yang lengkap, pengalaman ibadah dan aktiviti komuniti
            anda akan menjadi lebih mudah, tersusun, dan bermakna.
          </p>
        </div>
      </section>
    </main>
  );
}
