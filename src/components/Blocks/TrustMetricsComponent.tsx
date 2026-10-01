import React from 'react'

export interface TrustMetricsBlockProps {
  stats?: Array<{ number?: string; title?: string; subtitle?: string }>
  standardsTitle?: string
  standardsSubtitle?: string
  standards?: Array<{ code?: string; icon?: string }>
}

export const TrustMetricsComponent: React.FC<TrustMetricsBlockProps> = ({
  stats = [
    {
      number: '45+',
      title: 'Özel Donanım Projesi',
      subtitle: 'Saha koşullarında çalışan tescilli tasarımlar',
    },
    {
      number: '70+',
      title: 'Yazılım Dağıtımı',
      subtitle: 'Yüksek erişilebilirlikli kurumsal sistemler',
    },
    {
      number: '%100',
      title: 'Yerli & Global Standart',
      subtitle: 'Uluslararası regülasyonlara tam uyumlu',
    },
  ],
  standardsTitle = 'Sertifikalı Kalite Yönetimi',
  standardsSubtitle = 'Ürünlerimiz ve süreçlerimiz global endüstri normlarına göre denetlenmektedir.',
  standards = [
    { code: 'CE UYUMLU', icon: 'gavel' },
    { code: 'RoHS 2011/65/EU', icon: 'eco' },
    { code: 'ISO 9001:2015', icon: 'verified_user' },
    { code: 'ISO 27001 (BGBYS)', icon: 'lock' },
  ],
}) => {
  return (
    <section className="trust-section section-space">
      <div className="container">
        <dl className="trust-metrics">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <dt>{stat.title}</dt>
              <dd>
                {stat.number}
                <small>{stat.subtitle}</small>
              </dd>
            </div>
          ))}
        </dl>
        <div className="standards-row">
          <div>
            <h2 className="headline-sm">{standardsTitle}</h2>
            <p>{standardsSubtitle}</p>
          </div>
          <ul className="standards-list">
            {standards.map((std, idx) => (
              <li key={idx}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {std.icon || 'verified_user'}
                </span>
                {std.code}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
