export const metadata = {
  title: "Hubungi Kami - Portal eMasjid | Sokongan & Pertanyaan",
  description:
    "Hubungi Portal eMasjid untuk pertanyaan, sokongan teknikal, atau maklum balas berkaitan perkhidmatan masjid dan sistem eMasjid di Malaysia.",
  keywords:
    "hubungi eMasjid, contact eMasjid, sokongan eMasjid, bantuan eMasjid, pertanyaan portal eMasjid",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-gray-700 text-lg">
          Ada pertanyaan, maklum balas, atau memerlukan bantuan berkaitan Portal
          eMasjid? Sila hubungi kami melalui borang di bawah. Pasukan kami akan
          menghubungi anda secepat mungkin.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-green-600 mb-2">Emel</h3>
          <p className="text-gray-700">support@emasjid.my</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-green-600 mb-2">Telefon</h3>
          <p className="text-gray-700">+60 1X-XXXX XXX</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-semibold text-green-600 mb-2">Waktu Operasi</h3>
          <p className="text-gray-700">Isnin – Jumaat, 9.00 pagi – 5.00 petang</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Hantar Pertanyaan Anda
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Nama Penuh</label>
            <input
              type="text"
              placeholder="Masukkan nama anda"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Emel</label>
            <input
              type="email"
              placeholder="contoh@email.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Subjek</label>
            <input
              type="text"
              placeholder="Subjek pertanyaan"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Mesej</label>
            <textarea
              rows="5"
              placeholder="Tulis mesej anda di sini..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Hantar Mesej
          </button>
        </form>
      </div>
    </main>
  );
}
