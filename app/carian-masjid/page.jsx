export const metadata = {
  title: "Carian Masjid - Portal eMasjid MAIS",
  description: "Cari masjid dengan mudah melalui halaman Carian Masjid Emosjid Blog. Dapatkan lokasi, maklumat, dan panduan untuk setiap masjid.",
};

export default function CarianMasjidPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Carian Masjid</h1>
      <p className="max-w-xl text-center text-gray-700">
        Halaman ini membolehkan anda mencari masjid dengan cepat dan mudah. Ketahui lokasi masjid, maklumat penting, dan panduan untuk kemudahan solat dan aktiviti komuniti.
      </p>
    </main>
  );
}
