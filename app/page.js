import Image from 'next/image';

export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-5xl w-full text-center transition-transform transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            src="dzaky.JPG"
            alt="Foto Profil"
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-purple-400 shadow-md"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Dzaky Anand Rashif</h1>
        <p className="text-purple-600 font-medium mb-1">NIM: 232505018</p>
        <p className="text-gray-700 mb-1">Prodi: Sistem Informasi</p>
        <p className="text-gray-700 mb-4">Fakultas: Fakultas Komputer</p>

        <div className="text-left bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Pengalaman Kerja</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Internship di PT Teknologi Cerdas (2023)</li>
            <li>Asisten Lab Sistem Informasi (2022-2023)</li>
          </ul>
        </div>

        <div className="text-left bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Pendidikan</h2>
          <p className="text-gray-600">S1 Sistem Informasi, Fakultas Komputer (2021 - Sekarang)</p>
        </div>

        <div className="text-left bg-gray-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">Keterampilan</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Pemrograman (JavaScript, Python)</li>
            <li>Pengembangan Web (Next.js, Tailwind CSS)</li>
            <li>Manajemen Proyek</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
