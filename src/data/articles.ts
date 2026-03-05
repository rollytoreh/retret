import type { Article, Category, Author } from '@/types/blog';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Dr. Andi Wijaya',
    avatar: '/avatar-author1.jpg',
    bio: 'Psikolog dan penulis dengan pengalaman 15 tahun dalam pengembangan diri dan kesehatan mental.'
  },
  {
    id: '2',
    name: 'Sarah Tanjung',
    avatar: '/avatar-author2.jpg',
    bio: 'Life coach dan motivator yang fokus pada transformasi pribadi dan spiritual growth.'
  },
  {
    id: '3',
    name: 'Pastor David Lim',
    avatar: '/avatar-author3.jpg',
    bio: 'Pendeta dan penulis renungan harian dengan hati untuk membantu orang menemukan kedamaian.'
  },
  {
    id: '4',
    name: 'Maya Sari',
    avatar: '/avatar-author4.jpg',
    bio: 'Penulis dan content creator yang passionate tentang self-improvement dan mindfulness.'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Motivasi',
    slug: 'motivasi',
    description: 'Artikel inspiratif untuk membangkitkan semangat dan motivasi hidup',
    color: 'bg-primary'
  },
  {
    id: '2',
    name: 'Renungan',
    slug: 'renungan',
    description: 'Renungan rohani harian untuk memperkuat iman dan kedamaian batin',
    color: 'bg-secondary'
  },
  {
    id: '3',
    name: 'Self Improvement',
    slug: 'self-improvement',
    description: 'Tips dan strategi praktis untuk pengembangan diri',
    color: 'bg-blue-500'
  },
  {
    id: '4',
    name: 'Mindfulness',
    slug: 'mindfulness',
    description: 'Praktik kesadaran dan kedamaian pikiran',
    color: 'bg-purple-500'
  },
  {
    id: '5',
    name: 'Relasi',
    slug: 'relasi',
    description: 'Membangun hubungan yang sehat dan bermakna',
    color: 'bg-pink-500'
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: '10 Cara Membangun Kebiasaan Baik yang Bertahan',
    slug: 'cara-membangun-kebiasaan-baik',
    excerpt: 'Kebiasaan adalah fondasi kesuksesan. Pelajari cara membangun kebiasaan positif yang akan mengubah hidupmu secara bertahap.',
    content: `
      <p>Kebiasaan adalah fondasi dari setiap pencapaian besar dalam hidup. Tanpa kebiasaan yang baik, bahkan tujuan yang paling mulia pun akan sulit tercapai. Dalam artikel ini, kita akan membahas 10 cara praktis untuk membangun kebiasaan baik yang bertahan.</p>

      <h2>1. Mulai dengan Kenapa</h2>
      <p>Sebelum memulai kebiasaan baru, tanyakan pada diri sendiri: "Mengapa ini penting bagi saya?" Ketika Anda memiliki alasan yang kuat, Anda akan lebih termotivasi untuk bertahan ketika menghadapi tantangan.</p>

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
    coverImage: '/article1.jpg',
    author: authors[0],
    category: categories[2],
    tags: ['kebiasaan', 'self-improvement', 'productivity', 'atomic-habits'],
    publishedAt: '2024-03-01',
    readTime: 8,
    type: 'motivasi',
    featured: true
  },
  {
    id: '2',
    title: 'Ketika Tuhan Memberikan Waktu untuk Menunggu',
    slug: 'ketika-tuhan-memberikan-waktu-menunggu',
    excerpt: 'Renungan tentang makna kesabaran dalam menunggu jawaban doa dan bagaimana masa tunggu justru membentuk karakter kita.',
    content: `
      <p><em>"Tetapi orang yang menanti-nantikan TUHAN akan mendapat kekuatan baru..." - Yesaya 40:31</em></p>

      <p>Pernahkah Anda merasa doa-doa Anda tidak dijawab? Bahwa Tuhan terlalu lambat dalam merespons kebutuhan Anda? Jika ya, Anda tidak sendiri. Banyak orang saleh dalam Alkitab juga mengalami masa-masa menunggu yang panjang.</p>

      <h2>Makna di Balik Masa Tunggu</h2>
      <p>Masa tunggu bukanlah pengabaian dari Tuhan. Sebaliknya, itu adalah waktu di mana Dia sedang bekerja di balik layar, mempersiapkan Anda untuk sesuatu yang lebih besar daripada yang Anda minta.</p>

      <p>Abraham menunggu 25 tahun untuk janji anaknya terwujud. Yusuf menunggu 13 tahun dari penjara hingga menjadi perdana menteri. Daud menunggu 15 tahun dari pengurapan hingga naik takhta. Masa tunggu mereka bukan sia-sia - itu adalah waktu pembertukan.</p>

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
    coverImage: '/article2.jpg',
    author: authors[2],
    category: categories[1],
    tags: ['renungan', 'kesabaran', 'iman', 'doa'],
    publishedAt: '2024-03-02',
    readTime: 6,
    type: 'renungan',
    featured: true
  },
  {
    id: '3',
    title: 'The Power of Morning Routine: Mulai Hari dengan Benar',
    slug: 'power-of-morning-routine',
    excerpt: 'Bagaimana rutinitas pagi yang efektif dapat meningkatkan produktivitas, kesehatan mental, dan kualitas hidup Anda.',
    content: `
      <p>Pagi hari adalah fondasi dari keseluruhan hari Anda. Cara Anda memulai pagi menentukan energi, fokus, dan produktivitas Anda sepanjang hari. Dalam artikel ini, kita akan mengeksplorasi science-backed morning routine yang dapat mengubah hidup Anda.</p>

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

      <h3>5. Mindfulness atau Meditasi</h3>
      <p>Luangkan 5-10 menit untuk meditasi, journaling, atau renungan. Ini membantu menenangkan pikiran dan mengatur niat untuk hari ini.</p>

      <h3>6. Sarapan Bergizi</h3>
      <p>Sarapan yang seimbang dengan protein, karbohidrat kompleks, dan lemak sehat memberikan energi berkelanjutan.</p>

      <h2>Contoh Morning Routine 60 Menit</h2>
      <p><strong>0-10 menit:</strong> Bangun, minum air, stretching ringan<br>
      <strong>10-25 menit:</strong> Meditasi atau renungan pagi<br>
      <strong>25-40 menit:</strong> Olahraga atau yoga<br>
      <strong>40-55 menit:</strong> Mandi dan bersiap<br>
      <strong>55-60 menit:</strong> Sarapan sehat</p>

      <h2>Tips Membangun Rutinitas</h2>
      <p>Mulailah dengan satu atau dua kebiasaan dan tambahkan secara bertahap. Jangan mencoba mengubah segalanya sekaligus. Ingat: konsistensi lebih penting daripada intensitas.</p>

      <p><strong>Kesimpulan:</strong> Morning routine yang baik adalah investasi dalam diri Anda. Luangkan waktu untuk merancang rutinitas yang sesuai dengan gaya hidup dan tujuan Anda, dan lihat bagaimana kualitas hidup Anda meningkat.</p>
    `,
    coverImage: '/article3.jpg',
    author: authors[1],
    category: categories[3],
    tags: ['morning-routine', 'productivity', 'mindfulness', 'self-care'],
    publishedAt: '2024-03-03',
    readTime: 7,
    type: 'artikel'
  },
  {
    id: '4',
    title: 'Memaafkan: Hadiah untuk Diri Sendiri',
    slug: 'memaafkan-hadiah-untuk-diri-sendiri',
    excerpt: 'Mengapa memaafkan bukan tentang orang lain, melainkan tentang membebaskan diri Anda dari beban masa lalu.',
    content: `
      <p><em>"Karena jika kamu mengampuni orang salahnya, Bapamu yang di sorga akan mengampuni kamu juga." - Matius 6:14</em></p>

      <p>Memaafkan adalah salah satu hal tersulit yang perlu kita lakukan, namun juga salah satu yang paling membebaskan. Banyak orang salah mengira bahwa memaafkan adalah hadiah untuk pelaku kesalahan. Padahal, memaafkan sebenarnya adalah hadiah untuk diri sendiri.</p>

      <h2>Beban dari Ketidakmaafan</h2>
      <p>Ketika kita menolak untuk memaafkan, kita sebenarnya membawa beban yang membebani kita sendiri. Amarah, kepahitan, dan kebencian adalah racun yang kita minum sendiri, berharap orang lain akan terluka.</p>

      <p>Penelitian medis menunjukkan bahwa ketidakmaafan terkait dengan:</p>
      <ul>
        <li>Tekanan darah tinggi</li>
        <li>Masalah jantung</li>
        <li>Gangguan tidur</li>
        <li>Depresi dan kecemasan</li>
        <li>Sistem kekebalan tubuh yang lemah</li>
      </ul>

      <h2>Apa itu Memaafkan?</h2>
      <p>Memaafkan bukan berarti:</p>
      <ul>
        <li>Menyalahkan apa yang terjadi</li>
        <li>Membiarkan orang lain menyakiti Anda lagi</li>
        <li>Melupakan atau mengabaikan kesalahan</li>
        <li>Membuat alasan untuk perilaku salah</li>
      </ul>

      <p>Memaafkan berarti:</p>
      <ul>
        <li>Melepaskan hak Anda untuk membalas dendam</li>
        <li>Membebaskan diri dari beban amarah</li>
        <li>Memilih kedamaian daripada konflik batin</li>
        <li>Memberikan ruang untuk kesembuhan</li>
      </ul>

      <h2>Proses Memaafkan</h2>

      <p><strong>1. Akui Rasa Sakit</strong><br>
      Jangan menekan perasaan Anda. Akui bahwa Anda terluka dan bahwa rasa sakit itu valid.</p>

      <p><strong>2. Pahami Perspektif</strong><br>
      Cobalah memahami situasi dari sudut pandang pelaku. Ini bukan untuk membenarkan, tapi untuk memahami.</p>

      <p><strong>3. Ambil Keputusan</strong><br>
      Memaafkan adalah keputusan, bukan perasaan. Putuskan untuk melepaskan, meskipun perasaan belum sepenuhnya ikut.</p>

      <p><strong>4. Doakan yang Menyakiti</strong><br>
      Ini mungkin tersulit, tapi doakan orang yang menyakiti Anda. Doa mengubah hati.</p>

      <p><strong>5. Berikan Waktu</strong><br>
      Memaafkan adalah proses, bukan peristiwa tunggal. Beri diri Anda waktu untuk benar-benar melepaskan.</p>

      <h2>Memaafkan Diri Sendiri</h2>
      <p>Terkadang, orang yang paling sulit kita maafkan adalah diri sendiri. Jika Anda menyimpan rasa bersalah atas kesalahan masa lalu, ingatlah:</p>

      <p><em>"Jika kita mengaku dosa kita, maka Ia adalah setia dan adil, sehingga Ia akan mengampuni segala dosa kita dan menyucikan kita dari segala kejahatan." - 1 Yohanes 1:9</em></p>

      <p>Tuhan sudah mengampuni Anda. Sekarang saatnya Anda mengampuni diri sendiri.</p>

      <h2>Kebebasan dalam Memaafkan</h2>
      <p>Ketika Anda memaafkan, Anda tidak mengubah masa lalu, tapi Anda mengubah masa depan. Anda membebaskan diri dari penjara amarah dan membuka ruang untuk sukacita, kedamaian, dan pertumbuhan.</p>

      <p>Mulailah hari ini. Pilih untuk memaafkan - bukan karena mereka pantas, tapi karena Anda pantas untuk bebas.</p>
    `,
    coverImage: '/article4.jpg',
    author: authors[2],
    category: categories[1],
    tags: ['memaafkan', 'pengampunan', 'kedamaian', 'penyembuhan'],
    publishedAt: '2024-03-04',
    readTime: 8,
    type: 'renungan',
    featured: true
  },
  {
    id: '5',
    title: 'Cara Mengatasi Overthinking dan Anxiety',
    slug: 'cara-mengatasi-overthinking-anxiety',
    excerpt: 'Strategi praktis untuk mengelola pikiran berlebihan dan kecemasan agar hidup lebih tenang dan produktif.',
    content: `
      <p>Overthinking adalah kebiasaan memikirkan sesuatu berulang-ulang tanpa mencapai kesimpulan atau solusi. Ini seperti roda yang berputar tapi tidak kemana-mana - menghabiskan energi tanpa hasil.</p>

      <h2>Tanda-tanda Overthinking</h2>
      <ul>
        <li>Tidur sulit karena pikiran terus berputar</li>
        <li>Kesulitan membuat keputusan</li>
        <li>Selalu memikirkan skenario terburuk</li>
        <li>Menyesali keputusan masa lalu berulang kali</li>
        <li>Mencari makna tersembunyi di setiap hal</li>
      </ul>

      <h2>Dampak Overthinking</h2>
      <p>Overthinking tidak hanya melelahkan mental, tapi juga berdampak pada:</p>
      <ul>
        <li>Kualitas tidur</li>
        <li>Hubungan interpersonal</li>
        <li>Produktivitas kerja</li>
        <li>Kesehatan fisik</li>
        <li>Kesejahteraan emosional</li>
      </ul>

      <h2>Strategi Mengatasi Overthinking</h2>

      <h3>1. Worry Time</h3>
      <p>Tetapkan waktu khusus 15-20 menit setiap hari untuk "khawatir". Jika pikiran mengganggu di luar waktu itu, catat dan tunda sampai worry time. Ini membantu mengontrol daripada dikuasai kekhawatiran.</p>

      <h3>2. The 5-4-3-2-1 Grounding Technique</h3>
      <p>Saat pikiran berputar kencang, grounding dapat membawa Anda kembali ke saat ini:</p>
      <ul>
        <li>Lihat 5 hal yang bisa Anda lihat</li>
        <li>Sentuh 4 hal yang bisa Anda rasakan</li>
        <li>Dengar 3 hal yang bisa Anda dengar</li>
        <li>Cium 2 hal yang bisa Anda cium</li>
        <li>Rasakan 1 hal yang bisa Anda kecap</li>
      </ul>

      <h3>3. Journaling</h3>
      <p>Tuliskan pikiran Anda di atas kertas. Ini membantu:</p>
      <ul>
        <li>Mengeluarkan pikiran dari kepala</li>
        <li>Melihat pola berpikir</li>
        <li>Mencari solusi dengan lebih jelas</li>
      </ul>

      <h3>4. Challenge Your Thoughts</h3>
      <p>Tanyakan pada diri sendiri:</p>
      <ul>
        <li>Apakah pikiran ini berdasarkan fakta atau asumsi?</li>
        <li>Apa bukti yang mendukung dan menyangkal?</li>
        <li>Apa yang akan saya katakan pada teman dengan pikiran serupa?</li>
        <li>Apakah ini akan penting dalam 5 tahun?</li>
      </ul>

      <h3>5. Mindfulness dan Meditasi</h3>
      <p>Praktik mindfulness membantu Anda menjadi pengamat pikiran, bukan terjebak di dalamnya. Aplikasi seperti Headspace atau Calm dapat membantu memulai.</p>

      <h3>6. Physical Activity</h3>
      <p>Olahraga melepaskan endorfin dan membantu "mengosongkan" pikiran. Bahkan jalan kaki 20 menit dapat membuat perbedaan.</p>

      <h3>7. Talk to Someone</h3>
      <p>Berbagi dengan teman, keluarga, atau profesional dapat memberikan perspektif baru dan meringankan beban.</p>

      <h2>Kapan Mencari Bantuan Profesional</h2>
      <p>Jika overthinking:</p>
      <ul>
        <li>Mengganggu fungsi sehari-hari</li>
        <li>Menyebabkan gejala fisik</li>
        <li>Memicu isolasi sosial</li>
        <li>Tidak membaik dengan strategi self-help</li>
      </ul>
      <p>Pertimbangkan untuk berkonsultasi dengan psikolog atau konselor.</p>

      <p><strong>Kesimpulan:</strong> Overthinking adalah kebiasaan yang bisa diubah. Dengan kesadaran dan praktik yang konsisten, Anda dapat belajar untuk mengelola pikiran dan hidup dengan lebih tenang.</p>
    `,
    coverImage: '/article5.jpg',
    author: authors[0],
    category: categories[3],
    tags: ['overthinking', 'anxiety', 'mental-health', 'mindfulness'],
    publishedAt: '2024-03-05',
    readTime: 9,
    type: 'artikel'
  },
  {
    id: '6',
    title: 'Menemukan Tujuan Hidup yang Bermakna',
    slug: 'menemukan-tujuan-hidup-yang-bermakna',
    excerpt: 'Panduan untuk menemukan dan mengejar tujuan hidup yang selaras dengan nilai-nilai dan passion Anda.',
    content: `
      <p>Viktor Frankl, psikiater dan Holocaust survivor, pernah berkata: "Hidup tidak pernah tidak bermakna. Yang ada hanyalah orang yang kehilangan rasa makna dalam hidupnya." Menemukan tujuan hidup adalah perjalanan yang mendalam dan transformatif.</p>

      <h2>Mengapa Tujuan Hidup Penting?</h2>
      <p>Penelitian menunjukkan bahwa orang dengan tujuan hidup yang jelas memiliki:</p>
      <ul>
        <li>Kesehatan mental yang lebih baik</li>
        <li>Resiliensi lebih tinggi saat menghadapi tantangan</li>
        <li>Kepuasan hidup yang lebih besar</li>
        <li>Umur yang lebih panjang</li>
        <li>Hubungan yang lebih bermakna</li>
      </ul>

      <h2>Proses Menemukan Tujuan</h2>

      <h3>1. Eksplorasi Diri</h3>
      <p>Tanyakan pada diri sendiri:</p>
      <ul>
        <li>Apa yang membuat saya bersemangat?</li>
        <li>Kapan saya merasa paling hidup dan berenergi?</li>
        <li>Apa yang saya lakukan meski tidak dibayar?</li>
        <li>Apa masalah di dunia yang ingin saya selesaikan?</li>
      </ul>

      <h3>2. Identifikasi Nilai Inti</h3>
      <p>Nilai adalah kompas yang menuntun keputusan hidup. Beberapa contoh nilai: kejujuran, kreativitas, keluarga, kontribusi, pertumbuhan, kebebasan.</p>

      <h3>3. Kenali Kekuatan dan Bakat</h3>
      <p>Apa yang secara alami Anda kuasai? Apa yang orang sering puji dari Anda? Bakat sering menjadi petunjuk arah tujuan.</p>

      <h3>4. Lihat Pola Hidup</h3>
      <p>Review momen-momen paling bermakna dalam hidup Anda. Apa tema umumnya? Pola ini sering mengungkapkan tujuan yang mendalam.</p>

      <h2>Ikigai: Konsep Jepang</h2>
      <p>Ikigai adalah konsep Jepang yang berarti "alasan untuk bangun di pagi hari". Ikigai ditemukan di persimpangan:</p>
      <ul>
        <li>Apa yang Anda cintai (passion)</li>
        <li>Apa yang Anda kuasai (profesi)</li>
        <li>Apa yang dunia butuhkan (mission)</li>
        <li>Apa yang bisa Anda dibayar (vocation)</li>
      </ul>

      <h2>Tujuan Bersifat Evolusioner</h2>
      <p>Tujuan hidup bukan sesuatu yang "ditemukan sekali dan selesai". Ia berkembang seiring waktu seiring dengan pertumbuhan dan perubahan Anda. Yang penting adalah tetap terbuka dan penasaran.</p>

      <h2>Langkah Praktis</h2>

      <p><strong>1. Mulai dengan Kecil</strong><br>
      Tujuan besar terwujud dari tindakan kecil yang konsisten. Jangan tunggu menemukan "tujuan akhir" sebelum bertindak.</p>

      <p><strong>2. Eksperimen</strong><br>
      Cobalah berbagai hal. Ikuti rasa ingin tahu. Setiap pengalaman memberikan petunjuk.</p>

      <p><strong>3. Refleksi Rutin</strong><br>
      Luangkan waktu setiap bulan untuk merefleksikan: Apa yang berjalan baik? Apa yang ingin saya ubah? Apa yang saya pelajari?</p>

      <p><strong>4. Cari Mentor</strong><br>
      Belajar dari orang yang sudah menjalani jalan serupa dapat memberikan wawasan berharga.</p>

      <h2>Tujuan vs Karir</h2>
      <p>Tujuan hidup tidak selalu sama dengan karir. Seseorang bisa menemukan tujuan melalui:</p>
      <ul>
        <li>Menjadi orang tua yang baik</li>
        <li>Melayani komunitas</li>
        <li>Menciptakan karya seni</li>
        <li>Membantu orang lain tumbuh</li>
        <li>Menjaga alam</li>
      </ul>

      <p><strong>Kesimpulan:</strong> Menemukan tujuan hidup adalah perjalanan seumur hidup. Nikmati prosesnya, tetap terbuka, dan percayalah bahwa makna akan terungkap seiring dengan langkah-langkah yang Anda ambil.</p>
    `,
    coverImage: '/article6.jpg',
    author: authors[1],
    category: categories[0],
    tags: ['purpose', 'meaning', 'self-discovery', 'ikigai'],
    publishedAt: '2024-03-06',
    readTime: 10,
    type: 'motivasi'
  },
  {
    id: '7',
    title: 'Kasih dalam Tindakan Kecil',
    slug: 'kasih-dalam-tindakan-kecil',
    excerpt: 'Renungan tentang bagaimana kasih sejati diungkapkan melalui tindakan-tindakan kecil sehari-hari.',
    content: `
      <p><em>"Demikian juga kamu, terangmu harus bercahaya di depan orang-orang, supaya mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga." - Matius 5:16</em></p>

      <p>Kita sering berpikir bahwa kasih harus dalam bentuk yang besar dan spektakuler - donasi besar, pengorbanan heroik, atau pelayanan luar biasa. Padahal, kasih sejati sering kali diungkapkan dalam tindakan-tindakan kecil yang sederhana namun tulus.</p>

      <h2>Kisah tentang Sepatu</h2>
      <p>Ada seorang wanita yang setiap pagi meletakkan sepasang sepatu bekas yang masih bagus di depan rumahnya dengan tulisan "Gratis - Silakan Ambil". Suatu hari, dia melihat seorang anak laki-laki mengambil sepatu itu dengan wajah berseri-seri. Anak itu memakainya langsung dan berjalan dengan bangga. Tindakan kecil itu mengubah hari anak itu - dan mungkin hidupnya.</p>

      <p>Kita tidak pernah tahu dampak dari tindakan kebaikan kecil kita.</p>

      <h2>Kasih adalah Bahasa yang Universal</h2>
      <p>Sebuah senyum kepada orang asing. Membuka pintu untuk seseorang. Mengucapkan terima kasih yang tulus. Mendengarkan dengan penuh perhatian. Tindakan-tindakan ini melampaui bahasa, budaya, dan agama.</p>

      <p><em>"Dan sekarang tinggal ketiga hal ini: iman, pengharapan dan kasih. Dan yang paling besar di antaranya ialah kasih." - 1 Korintus 13:13</em></p>

      <h2>Kasih Dimulai dari Dekat</h2>
      <p>Kadang kita ingin menyelamatkan dunia tapi lupa menyapa tetangga. Kita ingin membangun sekolah di negara miskin tapi tidak punya waktu untuk keluarga sendiri.</p>

      <p>Kasih sejati dimulai dari orang-orang terdekat kita:</p>
      <ul>
        <li>Orang tua yang perlu dihubungi</li>
        <li>Saudara yang perlu didengarkan</li>
        <li>Teman yang sedang kesulitan</li>
        <li>Tetangga yang kesepian</li>
      </ul>

      <h2>Tantangan Hari Ini</h2>
      <p>Saya ingin menantang Anda untuk melakukan satu tindakan kasih kecil hari ini. Bisa apa saja:</p>
      <ul>
        <li>Kirim pesan ucapan selamat atau semangat pada seseorang</li>
        <li>Belikan kopi untuk rekan kerja</li>
        <li>Bantu orang tua membeli belanjaan</li>
        <li>Luangkan waktu benar-benar mendengarkan seseorang</li>
        <li>Donasikan pakaian atau makanan yang tidak terpakai</li>
      </ul>

      <h2>Kasih Mengalir</h2>
      <p>Kasih itu seperti cahaya lilin - menyalakan lilin lain tidak mengurangi cahayanya sendiri. Sebaliknya, dunia menjadi lebih terang.</p>

      <p>Setiap tindakan kasih Anda menciptakan riak yang tersebar. Orang yang Anda tolong mungkin akan menolong orang lain. Dunia menjadi lebih baik, satu tindakan kecil pada satu waktu.</p>

      <h2>Kasih sebagai Gaya Hidup</h2>
      <p>Kasih bukan hanya tentang tindakan sporadis, tapi tentang menjadi seseorang yang penuh kasih. Ini adalah karakter yang terbentuk melalui ribuan keputusan kecil setiap hari - memilih untuk peduli, memilih untuk memberi, memilih untuk mengasihi.</p>

      <p><em>"Hai anakku, marilah kita mengasihi bukan dengan perkataan atau dengan lidah, tetapi dengan perbuatan dan dalam kebenaran." - 1 Yohanes 3:18</em></p>

      <p>Biarlah kasih kita bukan hanya kata-kata indah, tapi tindakan nyata yang menyentuh hati dan mengubah hidup.</p>
    `,
    coverImage: '/article7.jpg',
    author: authors[2],
    category: categories[1],
    tags: ['kasih', 'kindness', 'pelayanan', 'perbuatan-baik'],
    publishedAt: '2024-03-07',
    readTime: 5,
    type: 'renungan'
  },
  {
    id: '8',
    title: 'Membangun Hubungan yang Sehat dan Bermakna',
    slug: 'membangun-hubungan-sehat-bermakna',
    excerpt: 'Kunci-kunci untuk membangun dan memelihara hubungan yang saling menguatkan dan bertahan lama.',
    content: `
      <p>Manusia adalah makhluk sosial. Kualitas hubungan kita secara langsung memengaruhi kualitas hidup kita. Studi Harvard yang berlangsung 80 tahun menemukan bahwa hubungan yang baik adalah prediktor terkuat kebahagiaan dan kesehatan.</p>

      <h2>Karakteristik Hubungan yang Sehat</h2>

      <h3>1. Komunikasi Terbuka dan Jujur</h3>
      <p>Hubungan yang sehat dibangun di atas fondasi kejujuran. Ini berarti:</p>
      <ul>
        <li>Mengungkapkan perasaan dengan cara yang konstruktif</li>
        <li>Mendengarkan aktif tanpa menghakimi</li>
        <li>Berani vulnerable dan jujur tentang kebutuhan</li>
        <li>Menyelesaikan konflik dengan cara yang sehat</li>
      </ul>

      <h3>2. Rasa Saling Menghormati</h3>
      <p>Menghormati berarti:</p>
      <ul>
        <li>Menghargai perbedaan dan batasan</li>
        <li>Tidak mencoba mengubah orang lain</li>
        <li>Mendukung pilihan dan keputusan</li>
        <li>Berbicara dengan sopan, bahkan saat tidak setuju</li>
      </ul>

      <h3>3. Kepercayaan</h3>
      <p>Kepercayaan dibangun seiring waktu melalui konsistensi dan integritas. Sekali rusak, butuh waktu lama untuk dibangun kembali.</p>

      <h3>4. Dukungan Saling Mengisi</h3>
      <p>Hubungan yang sehat adalah tempat kedua belah pihak:</p>
      <ul>
        <li>Saling mendukung dalam suka dan duka</li>
        <li>Merayakan kesuksesan satu sama lain</li>
        <li>Memberi ruang untuk tumbuh</li>
        <li>Menjadi tempat aman untuk jadi diri sendiri</li>
      </ul>

      <h3>5. Keseimbangan Memberi dan Menerima</h3>
      <p>Hubungan yang sehat bukan hanya tentang mengambil atau hanya memberi. Ada keseimbangan dinamis di mana kedua belah pihak merasa dihargai.</p>

      <h2>Red Flags dalam Hubungan</h2>
      <p>Waspadai tanda-tanda hubungan yang tidak sehat:</p>
      <ul>
        <li>Kontrol atau manipulasi</li>
        <li>Kritik yang konstan dan merendahkan</li>
        <li>Isolasi dari orang lain</li>
        <li>Ketidaksetujuan yang tidak pernah diselesaikan</li>
        <li>Kurangnya rasa aman untuk jadi diri sendiri</li>
      </ul>

      <h2>Investasi dalam Hubungan</h2>
      <p>Hubungan yang baik membutuhkan investasi:</p>

      <p><strong>Waktu Berkualitas:</strong> Luangkan waktu tanpa gangguan teknologi. Kualitas lebih penting daripada kuantitas.</p>

      <p><strong>Perhatian Penuh:</strong> Saat bersama orang yang Anda sayangi, benar-benar "ada" di sana. Dengarkan. Perhatikan.</p>

      <p><strong>Apresiasi:</strong> Ungkapkan terima kasih secara rutin. Jangan anggap remeh hal-hal kecil.</p>

      <p><strong>Maaf dan Ampun:</strong> Tidak ada hubungan sempurna. Belajarlah memaafkan dan meminta maaf dengan tulus.</p>

      <h2>Memperbaiki Hubungan yang Rusak</h2>
      <p>Jika hubungan Anda sedang sulit:</p>
      <ol>
        <li>Akui masalahnya tanpa menyalahkan</li>
        <li>Komunikasikan dengan cara yang konstruktif</li>
        <li>Dengarkan perspektif orang lain</li>
        <li>Cari solusi bersama</li>
        <li>Pertimbangkan konseling jika diperlukan</li>
      </ol>

      <p><strong>Kesimpulan:</strong> Hubungan yang baik adalah salah satu investasi terbaik dalam hidup. Mereka membutuhkan usaha, waktu, dan komitmen, tapi hasilnya - kebahagiaan, kesehatan, dan kepuasan hidup - sepadan dengan setiap usaha.</p>
    `,
    coverImage: '/article8.jpg',
    author: authors[3],
    category: categories[4],
    tags: ['relationship', 'communication', 'trust', 'love'],
    publishedAt: '2024-03-08',
    readTime: 8,
    type: 'artikel'
  }
];

export const getFeaturedArticles = () => articles.filter(article => article.featured);

export const getArticlesByType = (type: Article['type']) => 
  articles.filter(article => article.type === type);

export const getArticlesByCategory = (categorySlug: string) =>
  articles.filter(article => article.category.slug === categorySlug);

export const getArticleBySlug = (slug: string) =>
  articles.find(article => article.slug === slug);

export const getRelatedArticles = (currentArticle: Article, limit: number = 3) => {
  return articles
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category.id === currentArticle.category.id || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};
