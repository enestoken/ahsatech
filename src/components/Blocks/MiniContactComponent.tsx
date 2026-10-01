'use client'

import React, { useId, useState } from 'react'
import Link from 'next/link'

export interface MiniContactBlockProps {
  eyebrow?: string
  title?: string
  description?: string
  directEmail?: string
  formTitle?: string
  formSubtitle?: string
}

export const MiniContactComponent: React.FC<MiniContactBlockProps> = ({
  eyebrow = 'Projenizi Hayata Geçirelim',
  title = 'Fikrinizi Seri Üretime ve Global Pazara Taşımaya Hazır mısınız?',
  description = 'Mühendislik ekibimiz gereksinimlerinizi analiz etsin; donanım, gömülü yazılım ve bulut mimarisi için kapsamlı bir yol haritası ve teknik fizibilite sunalım.',
  directEmail = 'info@ahsatech.com',
  formTitle = 'Hızlı İhtiyaç Bildirimi',
  formSubtitle = 'Uzman mühendislerimiz 24 saat içinde dönüş yapacaktır.',
}) => {
  const formId = useId()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [submissionCode, setSubmissionCode] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Gömülü Sistem & PCB Tasarımı',
  })

  const domainMapping: Record<string, string> = {
    'Gömülü Sistem & PCB Tasarımı': 'embedded-hardware',
    'Endüstriyel IoT & Telemetri Gateway': 'iot-scada',
    'Kurumsal Web / SaaS Mimarisi': 'enterprise-software',
    'Uçtan Uca Ar-Ge ve Seri Üretim': 'turnkey-system',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const parts = formData.name.split('/')
      const contactName = parts[0]?.trim() || formData.name
      const companyName = parts[1]?.trim() || 'Doğrudan Başvuru'

      const res = await fetch('/api/rfq-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactName,
          companyName,
          email: formData.email,
          phone: '-',
          domain: domainMapping[formData.domain] || 'embedded-hardware',
          projectPhase: 'concept',
          status: 'new',
          requirements: `Web Ana Sayfa Hızlı İhtiyaç Bildirimi:\nYetkili & Kurum: ${formData.name}\nE-posta: ${formData.email}\nSeçilen Alan: ${formData.domain}`,
          ndaAgreed: true,
        }),
      })

      if (!res.ok) {
        throw new Error('Talep iletilirken bir hata oluştu. Lütfen tekrar deneyiniz.')
      }

      const data = await res.json()
      const docId = data.doc?.id ? `#RFQ-${data.doc.id}` : '#RFQ-2026'
      setSubmissionCode(docId)
      setSubmitted(true)
    } catch (err: any) {
      console.error('RFQ error:', err)
      setErrorMessage(err.message || 'Bir hata oluştu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="mini-contact"
      style={{ padding: 'var(--space-3xl) 0', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container">
        <div
          className="tech-card"
          style={{
            padding: 'var(--space-3xl) var(--space-2xl)',
            backgroundColor: 'var(--color-surface-container-lowest)',
            borderRadius: 'var(--radius-2xl)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Corner Glow */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '320px',
              height: '320px',
              background:
                'radial-gradient(circle at top right, rgba(52, 233, 253, 0.15), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'var(--space-2xl)',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Left Column: Copy & Actions */}
            <div>
              {eyebrow && (
                <span
                  className="label-sm"
                  style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '8px' }}
                >
                  {eyebrow}
                </span>
              )}
              <h2
                className="headline-lg"
                style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}
              >
                {title}
              </h2>
              <p
                className="body-md"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                <Link
                  href="/iletisim"
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.75rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    calendar_month
                  </span>
                  <span>Teknik Görüşme Planlayın</span>
                </Link>
                <a
                  href={`mailto:${directEmail}`}
                  className="btn-secondary"
                  style={{ padding: '0.85rem 1.75rem' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                  >
                    mail
                  </span>
                  <span>{directEmail}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Mini Form */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                padding: 'var(--space-xl)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-surface-container-high)',
              }}
            >
              <h3
                className="headline-sm"
                style={{ color: 'var(--color-primary)', marginBottom: '4px' }}
              >
                {formTitle}
              </h3>
              <p
                className="body-sm"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                {formSubtitle}
              </p>

              {submitted ? (
                <div
                  role="status"
                  style={{
                    padding: 'var(--space-lg)',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(52, 233, 253, 0.12)',
                    border: '1px solid var(--color-secondary-container)',
                    color: 'var(--color-primary)',
                    textAlign: 'center',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '36px',
                      color: 'var(--color-secondary)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    check_circle
                  </span>
                  <div
                    className="font-tech"
                    style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}
                  >
                    Talebiniz Başarıyla Alındı!
                  </div>
                  {submissionCode && (
                    <div
                      className="font-tech"
                      style={{
                        fontSize: '13px',
                        color: 'var(--color-secondary)',
                        marginBottom: '8px',
                        fontWeight: 600,
                      }}
                    >
                      Kayıt No: {submissionCode}
                    </div>
                  )}
                  <div className="body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                    Mühendislik masamız şartnamenizi inceleyerek 24 saat içinde tarafınıza teknik
                    fizibilite ve dönüş sağlayacaktır.
                  </div>
                </div>
              ) : (
                <form
                  aria-busy={loading}
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
                >
                  {errorMessage && (
                    <div
                      role="alert"
                      style={{
                        padding: '10px 14px',
                        backgroundColor: '#ffdad6',
                        color: '#93000a',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '13px',
                      }}
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor={formId + '-name'}
                      className="label-sm"
                      style={{
                        display: 'block',
                        marginBottom: '6px',
                        color: 'var(--color-on-surface-variant)',
                      }}
                    >
                      AD SOYAD &amp; KURUM *
                    </label>
                    <input
                      id={formId + '-name'}
                      type="text"
                      required
                      placeholder="Örn: Dr. Ahmet Yılmaz / Savunma Sanayii"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface-container-lowest)',
                        border: '1px solid var(--color-surface-container-high)',
                        color: 'var(--color-on-surface)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={formId + '-email'}
                      className="label-sm"
                      style={{
                        display: 'block',
                        marginBottom: '6px',
                        color: 'var(--color-on-surface-variant)',
                      }}
                    >
                      KURUMSAL E-POSTA *
                    </label>
                    <input
                      id={formId + '-email'}
                      type="email"
                      required
                      placeholder="ahmet@firma.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface-container-lowest)',
                        border: '1px solid var(--color-surface-container-high)',
                        color: 'var(--color-on-surface)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={formId + '-domain'}
                      className="label-sm"
                      style={{
                        display: 'block',
                        marginBottom: '6px',
                        color: 'var(--color-on-surface-variant)',
                      }}
                    >
                      PROJE ALANI
                    </label>
                    <select
                      id={formId + '-domain'}
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface-container-lowest)',
                        border: '1px solid var(--color-surface-container-high)',
                        color: 'var(--color-on-surface)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    >
                      <option>Gömülü Sistem &amp; PCB Tasarımı</option>
                      <option>Endüstriyel IoT &amp; Telemetri Gateway</option>
                      <option>Kurumsal Web / SaaS Mimarisi</option>
                      <option>Uçtan Uca Ar-Ge ve Seri Üretim</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      marginTop: '6px',
                      padding: '12px',
                      backgroundColor: 'var(--color-secondary)',
                      color: '#ffffff',
                      borderColor: 'var(--color-secondary)',
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span>{loading ? 'İletiliyor...' : 'Analiz Talebini İlet'}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      {loading ? 'hourglass_top' : 'send'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
