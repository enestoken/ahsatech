import Link from 'next/link'

const responseNotes = [
  ['Teknik yanıt', '24 saat', 'Baş mühendisler tarafından ön fizibilite'],
  ['Gizlilik', '%100 NDA', 'Karşılıklı gizlilik protokolü'],
  ['AR-GE altyapısı', '2 lokasyon', 'Marmara Teknokent ve Al-Ahsa Hub'],
  ['Numune ve SDK', '48 saat', 'Değerlendirme kiti teslimi'],
]

export function QuoteHero() {
  return (
    <section className="quote-hero">
      <div className="container">
        <nav aria-label="Breadcrumb" className="contact-hero__breadcrumb">
          <Link href="/">Ana Sayfa</Link>
          <span aria-hidden="true">/</span>
          <span>Teklif Al</span>
        </nav>

        <div className="quote-hero__intro">
          <div>
            <span className="label-md contact-hero__eyebrow">Teklif ve proje değerlendirme</span>
            <h1 className="display-lg">Projenizi mühendislik ekibimizle paylaşın</h1>
          </div>
          <p className="body-lg">
            Donanım, gömülü yazılım, mekanik tasarım veya bulut altyapısı ihtiyacınızı aktarın; teknik kapsamı birlikte değerlendirelim.
          </p>
        </div>

        <div className="quote-hero__facts" aria-label="Teklif süreci bilgileri">
          {responseNotes.map(([label, value, detail]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{detail}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
