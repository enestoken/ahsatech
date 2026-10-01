import React from 'react'

export interface CorporateValue {
  title: string
  description: string
}

interface FounderAndValuesProps {
  values?: CorporateValue[]
}

export const FounderAndValues: React.FC<FounderAndValuesProps> = ({
  values = [
    {
      title: 'İtkan (Kusursuz İşçilik)',
      description:
        'Kodun her satırında ve devrenin her milimetresinde sıfır hata prensibi. Mühendisliği bir yükümlülük değil, mükemmeliyet arayışı olarak görüyoruz.',
    },
    {
      title: 'Nizam & Geometri',
      description:
        'Karmaşık sistemleri berrak ve modüler mimarilere dönüştürme disiplini. Karmaşıklığı yönetilebilir alt bileşenlerle basitleştiriyoruz.',
    },
    {
      title: 'Şeffaflık & Güven',
      description:
        'Müşterilerimize tam kaynak kod, şeffaf donanım belgelendirmesi ve açık test logları sunarak bağımlılık değil, güven inşa ederiz.',
    },
    {
      title: 'Küresel Etki',
      description:
        'Yalnızca bölgesel değil; CE, FCC, RoHS ve ISO gibi uluslararası normlarda doğrudan küresel pazarda rekabetçi yüksek teknoloji ürünleri.',
    },
  ],
}) => {
  const codes = ['01 // ZANAAT', '02 // MİMARİ', '03 // DÜRÜSTLÜK', '04 // VİZYON']
  const icons = ['precision_manufacturing', 'architecture', 'verified_user', 'public']

  return (
    <section
      className="founder-values"
      style={{
        width: '100%',
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface-container-low)',
      }}
    >
      <div className="container">
        {/* Founder Context Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'center',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {/* Left: Founder Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="tech-card"
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface-container-high)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALbPFPN6Vo2uyBqUPMi9vzWLm1sMQE6THLcU9qTwf94y4MNoQngNZK0o2_G1IyvvKFxKhzERuxNpLbxkAogLoFJ2bZcRNx6bVRbAZsVuYkA71a0wPp6pgjAzK92zTTf6RScvYj4sYUCwe6N1swTkBkEgTbyq7IgcKSqGr39HA03sV4IASxzQvaf03GrDeUqdBmPAKOLWiXytGhSRPDMCsRLfCSudYrrmtYbAP8WRE00sg7AqsgLQVTXA"
                alt="Ahmet Salih Arslan - Kurucu & Baş Sistem Mimarı"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0, 51, 34, 0.88) 0%, rgba(0, 51, 34, 0.25) 50%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  color: '#ffffff',
                }}
              >
                <div
                  className="headline-sm"
                  style={{ fontWeight: 800, color: '#ffffff', marginBottom: '2px' }}
                >
                  Ahmet Salih Arslan
                </div>
                <div
                  className="font-tech"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-primary-fixed)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Kurucu &amp; Baş Sistem Mimarı
                </div>
              </div>
            </div>

            {/* Geometric Accent Icon Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-16px',
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-secondary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)',
                border: '2px solid var(--color-surface-container-lowest)',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5 12 2" />
              </svg>
            </div>
          </div>

          {/* Right: Manifesto & Quote */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: 'var(--space-sm)',
                color: 'var(--color-secondary)',
                fontFamily: 'var(--font-tech)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                format_quote
              </span>
              <span>Mühendislik Manifestosu</span>
            </div>

            <h2
              className="headline-lg"
              style={{
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)',
                lineHeight: 1.25,
              }}
            >
              “Hatasız Bir Devre, Temiz Bir Matematiksel Şiirdir.”
            </h2>

            <p
              className="body-md"
              style={{
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-xl)',
              }}
            >
              Antik Mezopotamya’dan Endülüs’e uzanan nizam ve geometri geleneği, sadece sanatsal
              değil; tabiatın matematiksel kurallarına duyulan sonsuz saygının ifadesiydi. Bugün biz
              bu mirası mikron ölçeğindeki silisyum yollarında, mikrodenetleyici mimarilerinde ve
              hatasız yazılım omurgalarında yaşatıyoruz.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 'var(--space-lg)',
                paddingTop: 'var(--space-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-surface-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-tech)',
                    fontSize: '13px',
                    border: '1px solid var(--color-surface-container-high)',
                  }}
                >
                  AS
                </div>
                <div>
                  <div
                    className="font-tech"
                    style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-on-surface)' }}
                  >
                    Ahmet S. Arslan
                  </div>
                  <div
                    className="body-sm"
                    style={{ fontSize: '11px', color: 'var(--color-outline)' }}
                  >
                    M.Sc. Elektrik-Elektronik &amp; Yazılım
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '1px',
                  height: '32px',
                  backgroundColor: 'var(--color-outline-variant)',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  className="material-symbols-outlined"
                  style={{ color: 'var(--color-secondary)', fontSize: '20px' }}
                >
                  memory
                </span>
                <span
                  className="body-sm"
                  style={{ color: 'var(--color-on-surface-variant)', fontWeight: 600 }}
                >
                  20+ Yıllık Donanım Deneyimi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span
            className="font-tech"
            style={{
              fontSize: '11px',
              color: 'var(--color-secondary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            Karakterimiz
          </span>
          <h3 className="headline-md" style={{ color: 'var(--color-primary)' }}>
            Dört Temel İlke
          </h3>
        </div>

        {/* 4 Core Values Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {values.slice(0, 4).map((val, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: 'var(--space-xl)',
                backgroundColor: 'var(--color-surface-container-lowest)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-surface-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-md)',
                    border: '1px solid var(--color-surface-container-high)',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                    {icons[idx] || 'stars'}
                  </span>
                </div>

                <span
                  className="font-tech"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-outline)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {codes[idx] || `0${idx + 1} // İLKE`}
                </span>

                <h4
                  className="headline-sm"
                  style={{ fontSize: '18px', color: 'var(--color-primary)', marginBottom: '8px' }}
                >
                  {val.title}
                </h4>

                <p
                  className="body-sm"
                  style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
                >
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
