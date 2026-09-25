export default function About() {
  return (
    <section id="about" className="w-full">
      {/* Container Hitam: flex-col untuk HP, md:flex-row untuk membagi 2 kolom di PC */}
      <div className="bg-black text-white py-24 px-8 md:px-20 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* BAGIAN KIRI: Container Teks (50% layar) */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          
          <p className="text-sm md:text-base tracking-widest mb-16 text-gray-300 font-serif">
            LKI — Legacy Keeps Inspiring
          </p>

          <div className="flex flex-col gap-6 text-sm md:text-base text-gray-200 font-serif leading-relaxed md:leading-loose tracking-wide">
            <p>~Shine with Pride~</p>

            <p>
              LKI Merch bukan sekadar brand clothing. LKI adalah sebuah mahakarya yang kami ciptakan dengan hati, semangat, dan tujuan yang besar.
            </p>

            <p>
              Kami pernah terjatuh. Kami pernah gagal. Kami pernah berada dalam masa yang membuat kami mempertanyakan banyak hal. Namun, dari setiap kesulitan tersebut, kami belajar untuk percaya bahwa Tuhan selalu memiliki rencana yang lebih baik bagi mereka yang tidak berhenti berusaha.
              <br /><br />
              Terkadang, kehidupan tidak berubah secara instan. Perubahan akan datang pada waktu yang tepat, melalui orang yang tepat, doa yang tepat, dan kesempatan yang tepat.
            </p>

            <p>
              LKI Merch adalah perjalanan hidup kami yang kami wujudkan menjadi sebuah brand clothing. Setiap produknya membawa kisah tentang kegagalan, keberanian, keyakinan, dan kekuatan untuk bangkit kembali.
              <br /><br />
              Kami mengerjakan setiap karya dengan sepenuh hati. Bukan hanya untuk menciptakan produk yang terlihat menarik, tetapi juga untuk menyampaikan pesan yang memiliki arti.
            </p>

            <p>
              Jangan mudah menyerah.<br />
              Jangan kehilangan harapan.<br />
              Masa lalu tidak menentukan masa depanmu.
            </p>

            <p>
              Nilai hidupmu tidak ditentukan oleh kegagalan, keadaan, ataupun penilaian orang lain. Kamu sendirilah yang menentukan seberapa jauh kamu ingin bangkit, berkembang, dan melangkah.
              <br /><br />
              Berdiri sejak tahun 2017, LKI akan terus membawa cahaya, inspirasi, dan manfaat bagi banyak orang. Melalui kreativitas, clothing, dan karya yang bermakna, kami akan terus bersinar sekaligus membantu orang lain menemukan cahaya dalam dirinya.
            </p>

            <p>
              Ini bukan hanya merchandise.<br />
              Ini adalah kisah perjalanan kami.<br />
              Ini adalah kebangkitan kami.<br />
              Ini adalah warisan yang terus kami bangun.
            </p>
          </div>
        </div>

        {/* BAGIAN KANAN: Container Foto (50% layar) */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* Efek drop-shadow ringan agar gambar lebih menyatu dengan background */}
          <img 
            src="/assets/about.png" 
            alt="Perjalanan LKI Merch" 
            className="w-full h-auto max-h-[800px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </div>

      </div>
    </section>
  );
}