import React from 'react'

export interface TelemetryBlockProps {
  badge?: string
  feedStatus?: string
  chipModel?: string
  chipClock?: string
  metrics?: Array<{ label?: string; value?: string; subtext?: string }>
  offsetTagTitle?: string
  offsetTagDesc?: string
}

export const TelemetryComponent: React.FC<TelemetryBlockProps> = ({
  badge = 'Sistem Telemetrisi',
  feedStatus = 'LIVE FEED : CLOUD_01',
  chipModel = 'AHSA-STM32-H7',
  chipClock = '480 MHz',
  metrics = [
    { label: 'Uptime Oranı', value: '%99.98', subtext: 'Endüstriyel Seviye' },
    { label: 'Tamamlanan', value: '40+', subtext: 'Donanım & Yazılım' },
    { label: 'Aktif Cihaz', value: '12 Ülke', subtext: 'Saha Telemetrisi' },
  ],
  offsetTagTitle = 'Modüler Hibrit Mimari',
  offsetTagDesc = 'Silikon seviyesinden buluta entegre',
}) => {
  return (
    <section className="telemetry-section">
      <div className="container">
        <div className="telemetry-heading">
          <h2 className="eyebrow">{badge}</h2>
          <span className="signal-label">
            <i aria-hidden="true" />
            {feedStatus}
          </span>
        </div>
        <div className="telemetry-layout">
          <div className="telemetry-device">
            <span className="material-symbols-outlined" aria-hidden="true">
              memory
            </span>
            <strong>{chipModel}</strong>
            <span>{chipClock}</span>
          </div>
          <dl className="telemetry-metrics">
            {metrics?.map((item, idx) => (
              <div key={idx}>
                <dt>{item.label}</dt>
                <dd>
                  {item.value}
                  <small>{item.subtext}</small>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {offsetTagTitle && (
          <div className="telemetry-note">
            <strong>{offsetTagTitle}</strong>
            <span>{offsetTagDesc}</span>
          </div>
        )}
      </div>
    </section>
  )
}
