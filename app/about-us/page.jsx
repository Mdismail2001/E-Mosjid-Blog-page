export const metadata = {
  title:
    "Tentang Portal eMasjid | Platform Digital Masjid Malaysia - Portal eMasjid",
  description:
    "Ketahui lebih lanjut tentang Portal eMasjid, platform digital yang memudahkan carian masjid, akses maklumat masjid, dan aktiviti komuniti Islam di seluruh Malaysia.",
  keywords:
    "tentang eMasjid, portal eMasjid, platform masjid digital, masjid Malaysia, info masjid, carian masjid, aktiviti komuniti Islam",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tentang Portal eMasjid
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Platform digital yang menghubungkan masjid dan komuniti Islam di
          seluruh Malaysia melalui teknologi moden dan maklumat yang
          dipercayai.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Who We Are */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Siapakah Kami
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Portal eMasjid dibangunkan sebagai sebuah inisiatif digital untuk
            memudahkan umat Islam mendapatkan maklumat masjid, aktiviti
            komuniti, dan perkhidmatan berkaitan masjid secara atas talian.
            Kami percaya teknologi boleh membantu memperkukuh hubungan antara
            masjid dan masyarakat.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 text-center mb-10">
            Apa yang Portal eMasjid Sediakan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Carian Masjid
              </h3>
              <p className="text-gray-700">
                Cari masjid dengan mudah berdasarkan lokasi dan dapatkan
                maklumat asas dengan cepat dan tepat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Maklumat & Aktiviti
              </h3>
              <p className="text-gray-700">
                Akses maklumat program, aktiviti komuniti, dan pengumuman
                masjid dalam satu platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Perkhidmatan Digital
              </h3>
              <p className="text-gray-700">
                Menyokong pengurusan dan penyampaian maklumat masjid secara
                lebih tersusun dan efisien.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Visi Kami
            </h3>
            <p className="text-gray-700 text-lg">
              Menjadi platform digital rujukan utama bagi masjid di Malaysia
              dalam menyampaikan maklumat dan perkhidmatan kepada komuniti
              Islam.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Misi Kami
            </h3>
            <p className="text-gray-700 text-lg">
              Menyediakan sistem yang mudah digunakan, maklumat yang tepat,
              dan pengalaman digital yang membantu masyarakat mengakses
              perkhidmatan masjid dengan lebih baik.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            Portal eMasjid bukan sekadar sebuah laman web, tetapi sebuah usaha
            untuk memperkukuh ekosistem masjid melalui teknologi digital.
            Kami komited untuk terus menambah baik platform ini demi manfaat
            komuniti Islam di Malaysia.
          </p>
        </div>
      </section>
    </main>
  );
}
