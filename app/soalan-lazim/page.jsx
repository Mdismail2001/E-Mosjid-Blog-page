export const metadata = {
  title: "Soalan Lazim - Portal eMasjid MAIS",
  description: "Lihat jawapan untuk soalan lazim mengenai Emosjid Blog, panduan, dan info berguna.",
};

export default function SoalanLazimPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Soalan Lazim</h1>
      <p className="max-w-xl text-center text-gray-700">
        Di sini anda boleh menemui jawapan kepada soalan lazim tentang Emosjid Blog,
        panduan penggunaan, dan tips berguna untuk pengalaman terbaik.
      </p>
    </main>
  );
}
