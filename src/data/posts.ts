export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'renungan' | 'motivasi' | 'tokoh';
  author: string;
  date: string;
  readTime: number;
  image?: string;
}

export const posts: Post[] = [
  // Renungan
  {
    id: '1',
    title: 'Ketika Tuhan Memberikan Waktu untuk Menunggu',
    slug: 'ketika-tuhan-memberikan-waktu-menunggu',
    excerpt: 'Masa tunggu bukanlah pengabaian dari Tuhan. Sebaliknya, itu adalah waktu di mana Dia sedang bekerja di balik layar, mempersiapkan Anda untuk sesuatu yang lebih besar.',
    content: `
      <p><em>"Tetapi orang yang menanti-nantikan TUHAN akan mendapat kekuatan baru..." - Yesaya 40:31</em></p>

      <p>Pernahkah Anda merasa doa-doa Anda tidak dijawab? Bahwa Tuhan terlalu lambat dalam merespons kebutuhan Anda? Jika ya, Anda tidak sendiri. Banyak orang saleh dalam Alkitab juga mengalami masa-masa menunggu yang panjang.</p>

      <h2>Makna di Balik Masa Tunggu</h2>
      <p>Masa tunggu bukanlah pengabaian dari Tuhan. Sebaliknya, itu adalah waktu di mana Dia sedang bekerja di balik layar, mempersiapkan Anda untuk sesuatu yang lebih besar daripada yang Anda minta.</p>

      <p>Abraham menunggu 25 tahun untuk janji anaknya terwujud. Yusuf menunggu 13 tahun dari penjara hingga menjadi perdana menteri. Daud menunggu 15 tahun dari pengurapan hingga naik takhta. Masa tunggu mereka bukan sia-sia - itu adalah waktu pembentukan.</p>

      <h2>Apa yang Terjadi Saat Kita Menunggu</h2>
      <p>Saat kita menunggu dengan benar, beberapa hal penting terjadi:</p>

      <ul>
        <li><strong>Karakter dibentuk:</strong> Kesabaran, ketekunan, dan iman kita diuji dan diperkuat.</li>
        <li><strong>Perspektif berubah:</strong> Kita belajar melihat situasi dari sudut pandang Tuhan, bukan hanya keinginan kita.</li>
        <li><strong>Ketergantungan bertambah:</strong> Kita belajar untuk benar-benar mengandalkan Tuhan, bukan kemampuan sendiri.</li>
      </ul>

      <h2>Cara Menunggu dengan Benar</h2>
      <p>Menunggu bukan berarti pasif. Berikut adalah cara menunggu yang produktif:</p>

      <p><strong>1. Tetap Berdoa</strong><br>
      Jangan berhenti berkomunikasi dengan Tuhan. Bawa kerinduan Anda, kekecewaan Anda, dan harapan Anda kepada-Nya.</p>

      <p><strong>2. Terus Berkarya</strong><br>
      Lakukan yang terbaik dengan apa yang Anda miliki sekarang. Jangan mengabaikan tanggung jawab saat ini karena fokus pada masa depan.</p>

      <p><strong>3. Belajar dan Tumbuh</strong><br>
      Gunakan waktu tunggu untuk memperdalam hubungan dengan Tuhan, mempelajari Firman-Nya, dan mengembangkan diri.</p>

      <p><strong>4. Bersyukur</strong><br>
      Cari hal-hal baik yang sudah Tuhan lakukan dan bersyukurlah. Syukur mengubah fokus kita dari yang kurang ke yang cukup.</p>

      <h2>Janji Tuhan</h2>
      <p>Tuhan tidak pernah terlambat. Dia datang pada waktu yang tepat - bukan waktu kita, tapi waktu-Nya yang sempurna. Percayalah bahwa Dia sedang bekerja untuk kebaikanmu, bahkan ketika kamu tidak melihatnya.</p>

      <p><em>"Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan." - Yeremia 29:11</em></p>

      <p>Tetaplah menanti dengan penuh harap. Jawaban Tuhan akan datang - mungkin tidak seperti yang Anda bayangkan, tapi pasti lebih baik daripada yang Anda harapkan.</p>
    `,
    category: 'renungan',
    author: 'Pastor David Lim',
    date: '2024-03-01',
    readTime: 6
  },
  {
    id: '2',
    title: 'Memaafkan: Hadiah untuk Diri Sendiri',
    slug: 'memaafkan-hadiah-untuk-diri-sendiri',
    excerpt: 'Memaafkan bukan berarti menyalahkan apa yang terjadi, melainkan melepaskan diri dari beban amarah dan memberikan ruang untuk kesembuhan.',
    content: `
      <p><em>"Karena jika kamu mengampuni orang salahnya, Bapamu yang di sorga akan mengampuni kamu juga." - Matius 6:14</em></p>

      <p>Memaafkan adalah salah satu hal tersulit yang perlu kita lakukan, namun juga salah satu yang paling membebaskan. Banyak orang salah mengira bahwa memaafkan adalah hadiah untuk pelaku kesalahan. Padahal, memaafkan sebenarnya adalah hadiah untuk diri sendiri.</p>

      <h2>Beban dari Ketidakmaafan</h2>
      <p>Ketika kita menolak untuk memaafkan, kita sebenarnya membawa beban yang membebani kita sendiri. Amarah, kepahitan, dan kebencian adalah racun yang kita minum sendiri, berharap orang lain akan terluka.</p>

      <p>Penelitian medis menunjukkan bahwa ketidakmaafan terkait dengan tekanan darah tinggi, masalah jantung, gangguan tidur, depresi, dan sistem kekebalan tubuh yang lemah.</p>

      <h2>Apa itu Memaafkan?</h2>
      <p>Memaafkan bukan berarti menyalahkan apa yang terjadi, membiarkan orang lain menyakiti Anda lagi, melupakan kesalahan, atau membuat alasan untuk perilaku salah.</p>

      <p>Memaafkan berarti melepaskan hak Anda untuk membalas dendam, membebaskan diri dari beban amarah, memilih kedamaian daripada konflik batin, dan memberikan ruang untuk kesembuhan.</p>

      <h2>Proses Memaafkan</h2>

      <p><strong>1. Akui Rasa Sakit</strong><br>
      Jangan menekan perasaan Anda. Akui bahwa Anda terluka dan bahwa rasa sakit itu valid.</p>

      <p><strong>2. Pahami Perspektif</strong><br>
      Cobalah memahami situasi dari sudut pandang pelaku. Ini bukan untuk membenarkan, tapi untuk memahami.</p>

      <p><strong>3. Ambil Keputusan</strong><br>
      Memaafkan adalah keputusan, bukan perasaan. Putuskan untuk melepaskan, meskipun perasaan belum sepenuhnya ikut.</p>

      <p><strong>4. Doakan yang Menyakiti</strong><br>
      Ini mungkin tersulit, tapi doakan orang yang menyakiti Anda. Doa mengubah hati.</p>

      <h2>Kesimpulan</h2>
      <p>Ketika Anda memaafkan, Anda tidak mengubah masa lalu, tapi Anda mengubah masa depan. Anda membebaskan diri dari penjara amarah dan membuka ruang untuk sukacita, kedamaian, dan pertumbuhan.</p>
    `,
    category: 'renungan',
    author: 'Sarah Tanjung',
    date: '2024-03-05',
    readTime: 5
  },
  {
    id: '3',
    title: 'Kasih dalam Tindakan Kecil',
    slug: 'kasih-dalam-tindakan-kecil',
    excerpt: 'Kasih sejati sering kali diungkapkan dalam tindakan-tindakan kecil yang sederhana namun tulus, bukan dalam bentuk yang besar dan spektakuler.',
    content: `
      <p><em>"Demikian juga kamu, terangmu harus bercahaya di depan orang-orang, supaya mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga." - Matius 5:16</em></p>

      <p>Kita sering berpikir bahwa kasih harus dalam bentuk yang besar dan spektakuler - donasi besar, pengorbanan heroik, atau pelayanan luar biasa. Padahal, kasih sejati sering kali diungkapkan dalam tindakan-tindakan kecil yang sederhana namun tulus.</p>

      <h2>Kisah tentang Sepatu</h2>
      <p>Ada seorang wanita yang setiap pagi meletakkan sepasang sepatu bekas yang masih bagus di depan rumahnya dengan tulisan "Gratis - Silakan Ambil". Suatu hari, dia melihat seorang anak laki-laki mengambil sepatu itu dengan wajah berseri-seri. Tindakan kecil itu mengubah hari anak itu - dan mungkin hidupnya.</p>

      <h2>Kasih adalah Bahasa yang Universal</h2>
      <p>Sebuah senyum kepada orang asing. Membuka pintu untuk seseorang. Mengucapkan terima kasih yang tulus. Mendengarkan dengan penuh perhatian. Tindakan-tindakan ini melampaui bahasa, budaya, dan agama.</p>

      <h2>Tantangan Hari Ini</h2>
      <p>Saya ingin menantang Anda untuk melakukan satu tindakan kasih kecil hari ini:</p>
      <ul>
        <li>Kirim pesan ucapan selamat atau semangat pada seseorang</li>
        <li>Belikan kopi untuk rekan kerja</li>
        <li>Bantu orang tua membeli belanjaan</li>
        <li>Luangkan waktu benar-benar mendengarkan seseorang</li>
      </ul>

      <p><em>"Hai anakku, marilah kita mengasihi bukan dengan perkataan atau dengan lidah, tetapi dengan perbuatan dan dalam kebenaran." - 1 Yohanes 3:18</em></p>
    `,
    category: 'renungan',
    author: 'Pastor David Lim',
    date: '2024-03-08',
    readTime: 4
  },

  // Motivasi
  {
    id: '4',
    title: '10 Cara Membangun Kebiasaan Baik yang Bertahan',
    slug: 'cara-membangun-kebiasaan-baik',
    excerpt: 'Kebiasaan adalah fondasi kesuksesan. Pelajari cara membangun kebiasaan positif yang akan mengubah hidupmu secara bertahap.',
    content: `
      <p>Kebiasaan adalah fondasi dari setiap pencapaian besar dalam hidup. Tanpa kebiasaan yang baik, bahkan tujuan yang paling mulia pun akan sulit tercapai. Dalam artikel ini, kita akan membahas 10 cara praktis untuk membangun kebiasaan baik yang bertahan.</p>

      <h2>1. Mulai dengan Kenapa</h2>
      <p>Sebelum memulai kebiasaan baru, tanyakan pada diri sendiri: "Mengapa ini penting bagi saya?" Ketika Anda memiliki alasan yang kuat, Anda akan lebih termotivasi untuk bertahan.</p>

      <h2>2. Mulai Kecil</h2>
      <p>James Clear, penulis buku "Atomic Habits", menyarankan untuk membuat kebiasaan begitu mudah sehingga Anda tidak bisa menolaknya. Mulailah dengan versi terkecil dari kebiasaan yang Anda inginkan.</p>

      <h2>3. Gunakan Habit Stacking</h2>
      <p>Tumpuk kebiasaan baru di atas kebiasaan yang sudah ada. Misalnya: "Setelah saya minum kopi pagi, saya akan meditasi selama 5 menit."</p>

      <h2>4. Buat Lingkungan yang Mendukung</h2>
      <p>Lingkungan Anda memiliki pengaruh besar pada perilaku Anda. Atur ruang Anda untuk memudahkan kebiasaan baik dan menyulitkan kebiasaan buruk.</p>

      <h2>5. Tracking Progress</h2>
      <p>Catat kemajuan Anda setiap hari. Melihat rangkaian keberhasilan akan memotivasi Anda untuk terus melanjutkan.</p>

      <h2>6. Jangan Lewatkan Dua Kali</h2>
      <p>Jika Anda melewatkan satu hari, jadikan itu sebagai pembelajaran dan pastikan Anda tidak melewatkan dua hari berturut-turut.</p>

      <h2>7. Temukan Accountability Partner</h2>
      <p>Berbagi tujuan Anda dengan seseorang yang dapat memantau kemajuan Anda dan memberikan dukungan.</p>

      <h2>8. Fokus pada Identitas, Bukan Hasil</h2>
      <p>Jangan hanya berusaha berlari maraton - jadilah seseorang yang adalah runner. Identitas akan mendorong perilaku jangka panjang.</p>

      <h2>9. Rayakan Kemenangan Kecil</h2>
      <p>Akui dan rayakan setiap kemajuan, sekecil apa pun. Ini akan memperkuat sirkuit reward di otak Anda.</p>

      <h2>10. Bersabar dan Konsisten</h2>
      <p>Perubahan tidak terjadi dalam semalam. Penelitian menunjukkan dibutuhkan rata-rata 66 hari untuk membentuk kebiasaan baru. Bersabarlah dan tetap konsisten.</p>

      <p><strong>Kesimpulan:</strong> Membangun kebiasaan baik adalah investasi jangka panjang dalam diri Anda. Dengan pendekatan yang tepat dan kesabaran, Anda dapat mengubah perilaku kecil menjadi perubahan hidup yang besar.</p>
    `,
    category: 'motivasi',
    author: 'Dr. Andi Wijaya',
    date: '2024-03-02',
    readTime: 8
  },
  {
    id: '5',
    title: 'The Power of Morning Routine',
    slug: 'power-of-morning-routine',
    excerpt: 'Bagaimana rutinitas pagi yang efektif dapat meningkatkan produktivitas, kesehatan mental, dan kualitas hidup Anda.',
    content: `
      <p>Pagi hari adalah fondasi dari keseluruhan hari Anda. Cara Anda memulai pagi menentukan energi, fokus, dan produktivitas Anda sepanjang hari.</p>

      <h2>Mengapa Morning Routine Penting?</h2>
      <p>Penelitian menunjukkan bahwa orang dengan morning routine yang konsisten memiliki:</p>
      <ul>
        <li>Tingkat stres yang lebih rendah</li>
        <li>Produktivitas yang lebih tinggi</li>
        <li>Kesehatan mental yang lebih baik</li>
        <li>Kualitas tidur yang lebih baik</li>
      </ul>

      <h2>Elemen Morning Routine yang Efektif</h2>

      <h3>1. Bangun di Waktu yang Sama</h3>
      <p>Konsistensi adalah kunci. Bangun pada waktu yang sama setiap hari membantu mengatur sirkadian rhythm tubuh Anda.</p>

      <h3>2. Hindari Handphone Pertama</h3>
      <p>Jangan cek handphone dalam 30-60 menit pertama setelah bangun. Beri otak Anda waktu untuk "boot up" tanpa banjir informasi.</p>

      <h3>3. Hidrasi</h3>
      <p>Minum setidaknya 1-2 gelas air setelah bangun tidur. Tubuh Anda kehilangan cairan selama tidur dan perlu rehidrasi.</p>

      <h3>4. Gerakan atau Olahraga</h3>
      <p>Olahraga ringan, yoga, atau stretching selama 10-20 menit dapat meningkatkan energi dan fokus.</p>

      <h3>5. Mindfulness</h3>
      <p>Luangkan 5-10 menit untuk meditasi, journaling, atau renungan. Ini membantu menenangkan pikiran.</p>

      <h2>Contoh Morning Routine 60 Menit</h2>
      <p><strong>0-10 menit:</strong> Bangun, minum air, stretching<br>
      <strong>10-25 menit:</strong> Meditasi atau renungan pagi<br>
      <strong>25-40 menit:</strong> Olahraga atau yoga<br>
      <strong>40-55 menit:</strong> Mandi dan bersiap<br>
      <strong>55-60 menit:</strong> Sarapan sehat</p>

      <p><strong>Kesimpulan:</strong> Morning routine yang baik adalah investasi dalam diri Anda. Mulailah dengan satu atau dua kebiasaan dan tambahkan secara bertahap.</p>
    `,
    category: 'motivasi',
    author: 'Sarah Tanjung',
    date: '2024-03-06',
    readTime: 7
  },
  {
    id: '6',
    title: 'Menemukan Tujuan Hidup yang Bermakna',
    slug: 'menemukan-tujuan-hidup',
    excerpt: 'Panduan untuk menemukan dan mengejar tujuan hidup yang selaras dengan nilai-nilai dan passion Anda.',
    content: `
      <p>Viktor Frankl, psikiater dan Holocaust survivor, pernah berkata: "Hidup tidak pernah tidak bermakna. Yang ada hanyalah orang yang kehilangan rasa makna dalam hidupnya."</p>

      <h2>Mengapa Tujuan Hidup Penting?</h2>
      <p>Penelitian menunjukkan bahwa orang dengan tujuan hidup yang jelas memiliki kesehatan mental yang lebih baik, resiliensi lebih tinggi, kepuasan hidup yang lebih besar, dan umur yang lebih panjang.</p>

      <h2>Proses Menemukan Tujuan</h2>

      <h3>1. Eksplorasi Diri</h3>
      <p>Tanyakan pada diri sendiri: Apa yang membuat saya bersemangat? Kapan saya merasa paling hidup? Apa yang saya lakukan meski tidak dibayar?</p>

      <h3>2. Identifikasi Nilai Inti</h3>
      <p>Nilai adalah kompas yang menuntun keputusan hidup. Beberapa contoh: kejujuran, kreativitas, keluarga, kontribusi, pertumbuhan.</p>

      <h3>3. Kenali Kekuatan dan Bakat</h3>
      <p>Apa yang secara alami Anda kuasai? Apa yang orang sering puji dari Anda? Bakat sering menjadi petunjuk arah tujuan.</p>

      <h2>Ikigai: Konsep Jepang</h2>
      <p>Ikigai adalah konsep Jepang yang berarti "alasan untuk bangun di pagi hari". Ikigai ditemukan di persimpangan apa yang Anda cintai, kuasai, dunia butuhkan, dan bisa Anda dibayar.</p>

      <p><strong>Kesimpulan:</strong> Menemukan tujuan hidup adalah perjalanan seumur hidup. Nikmati prosesnya, tetap terbuka, dan percayalah bahwa makna akan terungkap seiring dengan langkah-langkah yang Anda ambil.</p>
    `,
    category: 'motivasi',
    author: 'Maya Sari',
    date: '2024-03-10',
    readTime: 6
  },

  // Tokoh Inspiratif
  {
    id: '7',
    title: 'Nick Vujicic: Hidup Tanpa Batas',
    slug: 'nick-vujicic-hidup-tanpa-batas',
    excerpt: 'Kisah inspiratif Nick Vujicic yang lahir tanpa tangan dan kaki, namun berhasil menjadi motivator dunia dan menyentuh jutaan hidup.',
    content: `
      <p>Nick Vujicic lahir pada tahun 1982 di Melbourne, Australia, dengan kondisi langka yang disebut tetra-amelia syndrome - tanpa tangan dan kaki. Bayangkan bagaimana perasaan Anda jika terlahir dalam kondisi seperti itu.</p>

      <h2>Masa Kecil yang Penuh Tantangan</h2>
      <p>Saat kecil, Nick sering merasa depresi dan pernah mencoba bunuh diri pada usia 10 tahun. Dia bertanya-tanya mengapa Tuhan menciptakannya seperti ini. Dia merasa tidak berharga dan tidak punya masa depan.</p>

      <p>Namun, dengan dukungan keluarganya, terutama ibunya, Nick perlahan belajar menerima dirinya apa adanya. Ibunya selalu mengatakan kepadanya bahwa dia istimewa dan punya tujuan dalam hidup.</p>

      <h2>Titik Balik</h2>
      <p>Pada usia 15 tahun, Nick membaca sebuah artikel tentang seorang pria lumpuh yang berhasil mencapai hal-hal luar biasa. Artikel itu membuka matanya bahwa keterbatasan fisik bukan penghalang untuk sukses.</p>

      <p>Dia mulai berbicara di depan umum di sekolahnya, berbagi kisahnya dan menginspirasi teman-temannya. Respons yang positif membuatnya menyadari bahwa penderitaannya bisa menjadi berkat bagi orang lain.</p>

      <h2>Prestasi Luar Biasa</h2>
      <p>Hari ini, Nick Vujicic adalah:</p>
      <ul>
        <li>Motivator dan pembicara internasional</li>
        <li>Penulis bestseller dengan buku "Life Without Limits"</li>
        <li>Founder organisasi non-profit "Life Without Limbs"</li>
        <li>Sudah berbicara di depan jutaan orang di lebih dari 60 negara</li>
        <li>Suami dan ayah dari empat anak</li>
      </ul>

      <h2>Pelajaran dari Nick</h2>

      <p><strong>1. Fokus pada Apa yang Anda Miliki, Bukan yang Tidak</strong><br>
      Nick selalu mengatakan: "Saya tidak fokus pada apa yang saya tidak punya. Saya fokus pada apa yang saya punya."</p>

      <p><strong>2. Tujuan Lebih Besar dari Penderitaan</strong><br>
      Nick percaya bahwa setiap penderitaan punya tujuan. Penderitaannya membuatnya bisa menyentuh hati orang-orang yang juga merasa tidak berharga.</p>

      <p><strong>3. Jangan Pernah Menyerah</strong><br>
      "Jika Anda gagal, coba lagi. Jika Anda gagal lagi, coba lagi. Kegagalan bukan akhir - itu adalah bagian dari perjalanan."</p>

      <h2>Kutipan Inspiratif</h2>
      <blockquote>
        "Jika Anda tidak mendapatkan mujizat, Anda bisa menjadi mujizat bagi orang lain."
      </blockquote>

      <p>Kisah Nick Vujicic mengingatkan kita bahwa keterbatasan sejati bukanlah pada tubuh atau keadaan, melainkan pada pikiran dan sikap kita. Dengan tekad, iman, dan kerja keras, tidak ada yang mustahil.</p>
    `,
    category: 'tokoh',
    author: 'Maya Sari',
    date: '2024-03-03',
    readTime: 8
  },
  {
    id: '8',
    title: 'Oprah Winfrey: Dari Kemiskinan ke Kejayaan',
    slug: 'oprah-winfrey-dari-kemiskinan',
    excerpt: 'Perjalanan hidup Oprah Winfrey dari masa kecil yang penuh kesulitan menjadi salah satu wanita paling berpengaruh di dunia.',
    content: `
      <p>Oprah Winfrey adalah contoh klasik bahwa latar belakang tidak menentukan masa depan Anda. Lahir dari keluarga miskin di Mississippi, menghadapi berbagai kesulitan masa kecil, namun berhasil menjadi salah satu wanita paling berpengaruh dan terkaya di dunia.</p>

      <h2>Masa Kecil yang Sulit</h2>
      <p>Oprah dilahirkan pada tahun 1954 kepada seorang ibu tunggal remaja. Masa kecilnya penuh dengan kesulitan - hidup dalam kemiskinan, mengalami kekerasan, dan dipindah-pindahkan antara keluarganya.</p>

      <p>Namun, Oprah selalu menemukan pelarian dalam membaca. Dia belajar membaca sebelum usia tiga tahun dan selalu membawa buku ke mana pun dia pergi. Buku-buku membukanya ke dunia yang lebih besar.</p>

      <h2>Talenta dan Kesempatan</h2>
      <p>Ketika bersekolah, Oprah menunjukkan bakat alami dalam berbicara dan drama. Dia memenangkan beasiswa ke Tennessee State University dan mulai bekerja di media lokal.</p>

      <p>Pada usia 19 tahun, dia sudah menjadi pembawa berita termuda dan wanita kulit hitam pertama di stasiun TV Nashville. Karirnya terus menanjak dari situ.</p>

      <h2>The Oprah Winfrey Show</h2>
      <p>Pada tahun 1986, Oprah meluncurkan "The Oprah Winfrey Show" yang berlangsung selama 25 tahun dan menjadi talk show paling populer dalam sejarah televisi Amerika.</p>

      <p>Tidak hanya sebagai pembawa acara, Oprah juga membangun kerajaan bisnisnya sendiri termasuk:</p>
      <ul>
        <li>Harpo Productions (perusahaan produksi)</li>
        <li>O Magazine</li>
        <li>OWN (Oprah Winfrey Network)</li>
        <li>Berbagai investasi di media dan teknologi</li>
      </ul>

      <h2>Filantropi dan Pengaruh</h2>
      <p>Oprah dikenal sebagai salah satu filantropis paling dermawan. Dia telah menyumbangkan ratusan juta dolar untuk pendidikan, kesehatan, dan berbagai program sosial.</p>

      <p>"Oprah's Angel Network" telah mengumpulkan lebih dari $80 juta untuk berbagai program amal. Dia juga mendirikan "Oprah Winfrey Leadership Academy for Girls" di Afrika Selatan.</p>

      <h2>Pelajaran dari Oprah</h2>

      <p><strong>1. Pendidikan adalah Kunci</strong><br>
      "Pendidikan adalah jalan keluar dari kemiskinan dan jalan menuju kesempatan."</p>

      <p><strong>2. Jadilah Autentik</strong><br>
      Oprah selalu menjadi dirinya sendiri di depan kamera. Kejujurannya dan kerentanannya adalah yang membuat penonton menyukainya.</p>

      <p><strong>3. Gunakan Pengaruh untuk Kebaikan</strong><br>
      "Dengan kekuatan besar datang tanggung jawab besar. Gunakan platform Anda untuk membuat perubahan positif."</p>

      <h2>Kutipan Inspiratif</h2>
      <blockquote>
        "Turn your wounds into wisdom."
      </blockquote>

      <blockquote>
        "The biggest adventure you can take is to live the life of your dreams."
      </blockquote>

      <p>Kisah Oprah Winfrey membuktikan bahwa tidak peduli seberapa sulit masa lalu Anda, Anda selalu punya kekuatan untuk menulis ulang masa depan Anda. Keberhasilan sejati bukan hanya tentang materi, tapi tentang bagaimana Anda menggunakan pengaruh Anda untuk membantu orang lain.</p>
    `,
    category: 'tokoh',
    author: 'Dr. Andi Wijaya',
    date: '2024-03-07',
    readTime: 9
  },
  {
    id: '9',
    title: 'Nelson Mandela: Pemimpin Pengampun',
    slug: 'nelson-mandela-pemimpin-pengampun',
    excerpt: 'Kisah Nelson Mandela yang menghabiskan 27 tahun di penjara namun memilih jalan pengampunan dan rekonsiliasi untuk mempersatukan Afrika Selatan.',
    content: `
      <p>Nelson Mandela adalah salah satu pemimpin paling menginspirasi dalam sejarah modern. Setelah menghabiskan 27 tahun di penjara karena memperjuangkan kesetaraan ras, dia memilih jalan pengampunan daripada balas dendam.</p>

      <h2>Perjuangan Melawan Apartheid</h2>
      <p>Mandela bergabung dengan African National Congress (ANC) pada tahun 1944 dan memimpin gerakan melawan apartheid - sistem segregasi rasial di Afrika Selatan. Dia menggunakan berbagai metode, termasuk protes damai dan, ketika itu gagal, aksi militer bersenjata.</p>

      <p>Pada tahun 1962, Mandela ditangkap dan dijatuhi hukuman penjara seumur hidup. Dia menghabiskan 27 tahun di penjara, sebagian besar di Pulau Robben yang terpencil.</p>

      <h2>27 Tahun di Penjara</h2>
      <p>Kondisi di penjara sangat keras. Mandela bekerja di tambang kapur yang menghancurkan kesehatannya. Dia hanya diizinkan satu kunjungan setiap enam bulan dan bisa menulis dan menerima satu surat setiap enam bulan.</p>

      <p>Namun, Mandela tidak pernah menyerah. Dia menggunakan waktu di penjara untuk belajar, berdiskusi dengan tahanan lain, dan mempersiapkan diri untuk kehidupan setelah pembebasan.</p>

      <h2>Pembebasan dan Presiden</h2>
      <p>Pada tahun 1990, setelah tekanan internasional yang besar, Mandela akhirnya dibebaskan. Empat tahun kemudian, pada tahun 1994, dia menjadi presiden kulit hitam pertama Afrika Selatan melalui pemilihan umum pertama yang bebas.</p>

      <h2>Keajaiban Pengampunan</h2>
      <p>Yang paling mengagumkan dari Mandela bukan hanya kebebasannya atau kepresidenannya, tapi sikapnya terhadap mantan penindasnya.</p>

      <p>Dia memilih jalan rekonsiliasi daripada balas dendam. Dia mendirikan "Truth and Reconciliation Commission" di mana korban dan pelaku kejahatan masa lalu bisa berbicara jujur dan mencari pengampunan.</p>

      <p>Mandela bahkan mengundang penjaga penjaranya ke upacara pelantikannya sebagai presiden. Dia percaya bahwa pengampunan adalah satu-satunya cara untuk mempersatukan bangsa yang terpecah.</p>

      <h2>Pelajaran dari Mandela</h2>

      <p><strong>1. Pengampunan adalah Kekuatan, Bukan Kelemahan</strong><br>
      "Pengampunan membebaskan jiwa. Itu menghilangkan ketakutan. Itu adalah alat yang ampuh."</p>

      <p><strong>2. Kesabaran dan Ketekunan</strong><br>
      "Saya belajar bahkan keberhasilan terbesar pun membutuhkan waktu dan pengorbanan."</p>

      <p><strong>3. Kepemimpinan dengan Teladan</strong><br>
      "Pemimpin terbaik adalah yang kepeduliannya untuk orang lain melebihi kepeduliannya untuk dirinya sendiri."</p>

      <h2>Kutipan Inspiratif</h2>
      <blockquote>
        "Tidak ada yang mustahil sampai kita berkata demikian."
      </blockquote>

      <blockquote>
        "Pendidikan adalah senjata paling ampuh yang bisa Anda gunakan untuk mengubah dunia."
      </blockquote>

      <p>Nelson Mandela meninggal pada tahun 2013 pada usia 95 tahun, meninggalkan warisan pengampunan, rekonsiliasi, dan kepemimpinan yang terus menginspirasi dunia. Kisahnya mengajarkan kita bahwa bahkan dalam kegelapan terdalam, cahaya pengampunan dan harapan selalu bisa bersinar.</p>
    `,
    category: 'tokoh',
    author: 'Pastor David Lim',
    date: '2024-03-12',
    readTime: 10
  }
];

export const getPostsByCategory = (category: Post['category']) => {
  return posts.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string) => {
  return posts.find(post => post.slug === slug);
};

export const getLatestPosts = (limit: number = 6) => {
  return posts.slice(0, limit);
};
