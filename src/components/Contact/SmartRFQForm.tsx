'use client'

import React, { useState } from 'react'

function handleOptionKey(event: React.KeyboardEvent<HTMLDivElement>) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    event.currentTarget.click()
  } else if (['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) {
    event.preventDefault()
    const options = Array.from(
      event.currentTarget.parentElement?.querySelectorAll<HTMLElement>('[role="radio"]') || [],
    )
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1
    const next =
      options[(options.indexOf(event.currentTarget) + direction + options.length) % options.length]
    next?.focus()
    next?.click()
  }
}

export const SmartRFQForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [trackingCode, setTrackingCode] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // Form State
  const [domain, setDomain] = useState<string>('embedded-hardware')
  const [projectPhase, setProjectPhase] = useState<string>('prototype')
  const [contactName, setContactName] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [requirements, setRequirements] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [ndaAgreed, setNdaAgreed] = useState<boolean>(true)
  const [kvkkAgreed, setKvkkAgreed] = useState<boolean>(true)

  // Step 1 Options
  const domainOptions = [
    {
      id: 'domain-hardware',
      value: 'embedded-hardware',
      title: 'Gömülü Donanım & PCB',
      desc: 'Şematik, çok katmanlı PCB dizgisi, EMC uyumlu tasarım ve SMT prototipleme.',
      icon: 'memory',
    },
    {
      id: 'domain-iot',
      value: 'iot-scada',
      title: 'Endüstriyel IoT & SCADA',
      desc: 'Telemetri gateway, LoRa sensör ağları, Modbus/CAN/Ethernet entegrasyonu.',
      icon: 'sensors',
    },
    {
      id: 'domain-software',
      value: 'enterprise-software',
      title: 'Kurumsal Bulut & Yapay Zeka',
      desc: 'AhsaCloud telemetri ambarı, uç AI görü modelleri, web gösterge panoları.',
      icon: 'cloud_sync',
    },
    {
      id: 'domain-turnkey',
      value: 'turnkey-system',
      title: 'Uçtan Uca Anahtar Teslim',
      desc: 'Donanım, gömülü firmware, mekanik kasa ve bulut altyapısının bütünleşik üretimi.',
      icon: 'precision_manufacturing',
    },
  ]

  // Step 2 Options
  const phaseOptions = [
    {
      id: 'phase-concept',
      value: 'concept',
      title: 'Fikir / Ar-Ge Aşaması',
      desc: 'Henüz şematik yok; mimari fizibilite ve bileşen seçimi gerekiyor.',
      icon: 'lightbulb',
    },
    {
      id: 'phase-prototype',
      value: 'prototype',
      title: 'Prototipleme Aşaması',
      desc: 'Şematik veya blok şema hazır; ilk parti prototip ve firmware gerekiyor.',
      icon: 'build',
    },
    {
      id: 'phase-mass',
      value: 'mass-production',
      title: 'Seri Üretim / Büyütme',
      desc: 'Prototip doğrulandı; seri üretim hattı, test fikstürü (ATE) ve CE sertifikasyonu.',
      icon: 'inventory_2',
    },
    {
      id: 'phase-upgrade',
      value: 'upgrade',
      title: 'Mevcut Sistem İyileştirme',
      desc: 'Eski sistemin işlemci, haberleşme veya güvenliğini modernize etme.',
      icon: 'upgrade',
    },
  ]

  // Quick Chips for Step 4
  const quickChips = [
    'STM32F4/H7 Core',
    'ESP32-S3',
    'FreeRTOS RTOS',
    'Modbus RTU / TCP',
    'LoRaWAN 868MHz',
    'CAN-FD / CAN 2.0B',
    '-40°C ~ +85°C Dayanım',
    '3.75 kV Galvanik İzolasyon',
    'CE & EMC Sertifikasyonu',
    'LTE Cat-M1 / 4G Modem',
  ]

  const handleAddChip = (chip: string) => {
    if (!requirements.includes(chip)) {
      setRequirements((prev) => (prev ? `${prev}, ${chip}` : chip))
    }
  }

  // Handle Step Validation
  const handleNextStep = () => {
    setErrorMessage('')
    if (currentStep === 3) {
      if (!contactName.trim()) {
        setErrorMessage('Lütfen yetkili adını giriniz.')
        return
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMessage('Lütfen geçerli bir kurumsal e-posta adresi giriniz.')
        return
      }
    }
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePrevStep = () => {
    setErrorMessage('')
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 5) {
      handleNextStep()
      return
    }
    setLoading(true)
    setErrorMessage('')

    try {
      const formData = new FormData()
      formData.append('contactName', contactName)
      formData.append('companyName', companyName || 'Belirtilmedi')
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('domain', domain)
      formData.append('projectPhase', projectPhase)
      formData.append('requirements', requirements)
      formData.append('ndaAgreed', String(ndaAgreed))

      if (file) {
        formData.append('file', file)
      }

      const res = await fetch('/api/rfq-submit', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || 'Teklif talebi gönderilemedi. Lütfen alanları kontrol ediniz.',
        )
      }

      setTrackingCode(data.trackingCode || `AHSA-RFQ-2026-${Date.now()}`)
      setSubmitted(true)
    } catch (err: any) {
      console.error('[SmartRFQForm] Hata:', err)
      setErrorMessage(err.message || 'Sunucu hatası oluştu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      id="smart-rfq-portal"
      className="tech-card"
      style={{
        backgroundColor: 'var(--color-surface-container-lowest)',
        border: '1px solid var(--color-surface-container-high)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-2xl)',
        position: 'relative',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Laser Top Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background:
            'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
        }}
      />

      {submitted ? (
        /* Success Screen */
        <div
          id="rfq-success-screen"
          role="status"
          style={{
            textAlign: 'center',
            padding: 'var(--space-3xl) var(--space-xl)',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 230, 118, 0.12)',
              border: '2px solid var(--color-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--space-lg)',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '36px', color: 'var(--color-secondary)' }}
            >
              check_circle
            </span>
          </div>

          <h2
            className="headline-md"
            style={{ color: 'var(--color-on-surface)', marginBottom: '8px' }}
          >
            Teknik Teklif Talebiniz Başarıyla Alındı!
          </h2>

          <p
            className="body-md"
            style={{
              color: 'var(--color-on-surface-variant)',
              maxWidth: '580px',
              margin: '0 auto var(--space-xl) auto',
              lineHeight: 1.65,
            }}
          >
            Baş mühendislerimiz projenizi incelemeye aldı. Karşılıklı NDA gizlilik şartları altında
            24 saat içinde ön teknik fizibilite ve yol haritası e-posta adresinize iletilecektir.
          </p>

          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '6px',
              padding: '16px 32px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-surface-container-high)',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            <span className="font-tech" style={{ fontSize: '11px', color: 'var(--color-outline)' }}>
              TAKİP NUMARANIZ
            </span>
            <span
              id="rfq-tracking-code"
              className="font-tech"
              style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-primary)' }}
            >
              {trackingCode}
            </span>
          </div>

          <div>
            <button
              onClick={() => {
                setSubmitted(false)
                setCurrentStep(1)
              }}
              className="btn-secondary"
              style={{ padding: '10px 24px', cursor: 'pointer' }}
            >
              Yeni Bir Teklif Talebi Oluştur
            </button>
          </div>
        </div>
      ) : (
        /* 5-Step Interactive Form */
        <div>
          {/* Stepper Progress Bar */}
          <div
            id="rfq-stepper-header"
            aria-live="polite"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-2xl)',
              paddingBottom: 'var(--space-lg)',
              borderBottom: '1px solid var(--color-surface-container-high)',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <span
                className="font-tech"
                style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)' }}
              >
                ADIM {currentStep} / 5
              </span>
              <h3
                className="headline-sm"
                style={{ fontSize: '20px', color: 'var(--color-on-surface)', marginTop: '2px' }}
              >
                {currentStep === 1 && 'Projenizin Temel Çözüm Alanı'}
                {currentStep === 2 && 'Mevcut Proje Geliştirme Aşaması'}
                {currentStep === 3 && 'Yetkili & Kurumsal İletişim Bilgileri'}
                {currentStep === 4 && 'Teknik İsterler & Şartname Detayları'}
                {currentStep === 5 && 'Teknik Doküman / CAD / Gerber Yükleme'}
              </h3>
            </div>

            {/* Step Bubbles */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {[1, 2, 3, 4, 5].map((stepNum) => {
                const isPassed = stepNum < currentStep
                const isCurrent = stepNum === currentStep
                return (
                  <div
                    key={stepNum}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '13px',
                      fontWeight: 700,
                      backgroundColor: isCurrent
                        ? 'var(--color-primary)'
                        : isPassed
                          ? 'var(--color-secondary)'
                          : 'var(--color-surface-container)',
                      color: isCurrent || isPassed ? '#ffffff' : 'var(--color-outline)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isPassed ? '✓' : stepNum}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div
              role="alert"
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(186, 26, 26, 0.1)',
                border: '1px solid var(--color-error)',
                color: 'var(--color-error)',
                fontSize: '13px',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* STEP 1: Çözüm Alanı Seçimi */}
            {currentStep === 1 && (
              <div
                id="rfq-step-1"
                role="radiogroup"
                aria-label="Çözüm alanı"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-2xl)',
                }}
              >
                {domainOptions.map((opt) => {
                  const isSelected = domain === opt.value
                  return (
                    <div
                      key={opt.value}
                      id={opt.id}
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      onKeyDown={handleOptionKey}
                      onClick={() => setDomain(opt.value)}
                      style={{
                        padding: 'var(--space-lg)',
                        borderRadius: 'var(--radius-lg)',
                        border: isSelected
                          ? '2px solid var(--color-primary)'
                          : '1px solid var(--color-surface-container-high)',
                        backgroundColor: isSelected
                          ? 'rgba(0, 51, 34, 0.04)'
                          : 'var(--color-surface)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: '28px',
                            color: isSelected ? 'var(--color-primary)' : 'var(--color-outline)',
                            marginBottom: 'var(--space-sm)',
                            display: 'block',
                          }}
                        >
                          {opt.icon}
                        </span>
                        <h4
                          className="headline-sm"
                          style={{
                            fontSize: '17px',
                            color: 'var(--color-on-surface)',
                            marginBottom: '4px',
                          }}
                        >
                          {opt.title}
                        </h4>
                        <p
                          className="body-sm"
                          style={{
                            color: 'var(--color-on-surface-variant)',
                            fontSize: '13px',
                            lineHeight: 1.5,
                          }}
                        >
                          {opt.desc}
                        </p>
                      </div>

                      <div
                        style={{
                          marginTop: 'var(--space-md)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            border: isSelected
                              ? '4px solid var(--color-primary)'
                              : '1px solid var(--color-outline)',
                            backgroundColor: '#ffffff',
                          }}
                        />
                        <span
                          className="font-tech"
                          style={{
                            fontSize: '11px',
                            color: isSelected ? 'var(--color-primary)' : 'var(--color-outline)',
                            fontWeight: 600,
                          }}
                        >
                          {isSelected ? 'SEÇİLDİ' : 'SEÇ'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* STEP 2: Proje Aşaması Seçimi */}
            {currentStep === 2 && (
              <div
                id="rfq-step-2"
                role="radiogroup"
                aria-label="Proje aşaması"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-2xl)',
                }}
              >
                {phaseOptions.map((opt) => {
                  const isSelected = projectPhase === opt.value
                  return (
                    <div
                      key={opt.value}
                      id={opt.id}
                      onClick={() => setProjectPhase(opt.value)}
                      style={{
                        padding: 'var(--space-lg)',
                        borderRadius: 'var(--radius-lg)',
                        border: isSelected
                          ? '2px solid var(--color-secondary)'
                          : '1px solid var(--color-surface-container-high)',
                        backgroundColor: isSelected
                          ? 'rgba(0, 105, 115, 0.05)'
                          : 'var(--color-surface)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: '28px',
                          color: isSelected ? 'var(--color-secondary)' : 'var(--color-outline)',
                          marginBottom: 'var(--space-sm)',
                          display: 'block',
                        }}
                      >
                        {opt.icon}
                      </span>
                      <h4
                        className="headline-sm"
                        style={{
                          fontSize: '17px',
                          color: 'var(--color-on-surface)',
                          marginBottom: '4px',
                        }}
                      >
                        {opt.title}
                      </h4>
                      <p
                        className="body-sm"
                        style={{
                          color: 'var(--color-on-surface-variant)',
                          fontSize: '13px',
                          lineHeight: 1.5,
                          marginBottom: 'var(--space-md)',
                        }}
                      >
                        {opt.desc}
                      </p>
                      <span
                        className="font-tech"
                        style={{
                          fontSize: '11px',
                          color: isSelected ? 'var(--color-secondary)' : 'var(--color-outline)',
                          fontWeight: 600,
                        }}
                      >
                        {isSelected ? '● SEÇİLDİ' : '○ SEÇ'}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* STEP 3: İletişim Bilgileri */}
            {currentStep === 3 && (
              <div
                id="rfq-step-3"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-2xl)',
                }}
              >
                <div>
                  <label
                    htmlFor="rfq-contact-name"
                    className="label-sm"
                    style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: 'var(--color-on-surface)',
                    }}
                  >
                    Yetkili Ad Soyad *
                  </label>
                  <input
                    id="rfq-contact-name"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Örn: Dr. Selim Aksoy"
                    className="input-tech"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-surface-container-high)',
                      backgroundColor: 'var(--color-surface)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="rfq-company-name"
                    className="label-sm"
                    style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: 'var(--color-on-surface)',
                    }}
                  >
                    Kurum / Şirket Unvanı
                  </label>
                  <input
                    id="rfq-company-name"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Örn: Anadolu Savunma & Enerji A.Ş."
                    className="input-tech"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-surface-container-high)',
                      backgroundColor: 'var(--color-surface)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="rfq-email"
                    className="label-sm"
                    style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: 'var(--color-on-surface)',
                    }}
                  >
                    Kurumsal E-posta *
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="selim.aksoy@sirketiniz.com"
                    className="input-tech"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-surface-container-high)',
                      backgroundColor: 'var(--color-surface)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="rfq-phone"
                    className="label-sm"
                    style={{
                      display: 'block',
                      marginBottom: '6px',
                      color: 'var(--color-on-surface)',
                    }}
                  >
                    Telefon Numarası
                  </label>
                  <input
                    id="rfq-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+90 (532) 000 00 00"
                    className="input-tech"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-surface-container-high)',
                      backgroundColor: 'var(--color-surface)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                    }}
                  />
                </div>
              </div>
            )}

            {/* STEP 4: Teknik İsterler & Şartname */}
            {currentStep === 4 && (
              <div id="rfq-step-4" style={{ marginBottom: 'var(--space-2xl)' }}>
                <label
                  htmlFor="rfq-requirements"
                  className="label-sm"
                  style={{
                    display: 'block',
                    marginBottom: '6px',
                    color: 'var(--color-on-surface)',
                  }}
                >
                  Teknik İsterler, Mikrokontrolör, Protokol ve Çevre Koşulları
                </label>
                <textarea
                  id="rfq-requirements"
                  rows={5}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Hedef işlemci ailesi (STM32, ESP32, FPGA vb.), haberleşme protokolleri (Modbus, CAN-FD, LoRaWAN), çalışma sıcaklığı (-40°C/+85°C), besleme voltajı ve öngörülen prototip adedi..."
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-surface-container-high)',
                    backgroundColor: 'var(--color-surface)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: 'var(--space-md)',
                  }}
                />

                {/* Quick Suggestion Chips */}
                <div>
                  <span
                    className="font-tech"
                    style={{
                      fontSize: '11px',
                      color: 'var(--color-outline)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    HIZLI TEKNİK İSTER ETİKETLERİ (TIKLAYARAK EKLEYİN):
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {quickChips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => handleAddChip(chip)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '4px',
                          border: '1px solid var(--color-surface-container-high)',
                          backgroundColor: 'var(--color-surface)',
                          fontFamily: 'var(--font-tech)',
                          fontSize: '11px',
                          color: 'var(--color-on-surface)',
                          cursor: 'pointer',
                        }}
                      >
                        + {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Dosya Yükleme & Gizlilik Onayları */}
            {currentStep === 5 && (
              <div id="rfq-step-5" style={{ marginBottom: 'var(--space-2xl)' }}>
                {/* Drag & Drop File Upload Zone */}
                <div
                  id="rfq-file-dropzone"
                  style={{
                    border: '2px dashed var(--color-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-2xl)',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-surface)',
                    marginBottom: 'var(--space-xl)',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  <input
                    id="rfq-file-input"
                    aria-label="Teknik doküman, CAD veya Gerber dosyası"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0])
                      }
                    }}
                    accept=".pdf,.zip,.rar,.tar,.step,.stp,.dxf,.cad,.sch,.brd,.pcb"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />

                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '42px',
                      color: 'var(--color-primary)',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  >
                    cloud_upload
                  </span>

                  <h4
                    className="headline-sm"
                    style={{
                      fontSize: '18px',
                      color: 'var(--color-on-surface)',
                      marginBottom: '4px',
                    }}
                  >
                    Teknik Doküman, CAD veya Gerber Dosyası Yükleyin
                  </h4>

                  <p
                    className="body-sm"
                    style={{ color: 'var(--color-outline)', fontSize: '12px', margin: 0 }}
                  >
                    PDF şartname, Altium/KiCad projesi, Gerber (.zip) veya 3D CAD (.step) formatları
                    desteklenir (Maks: 50MB)
                  </p>

                  {file && (
                    <div
                      id="rfq-selected-file-badge"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: 'var(--space-md)',
                        padding: '6px 16px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(0, 230, 118, 0.12)',
                        border: '1px solid var(--color-secondary)',
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                      >
                        attach_file
                      </span>
                      <span
                        className="font-tech"
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--color-on-surface)',
                        }}
                      >
                        {file.name} ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                  )}
                </div>

                {/* Legal & NDA Checkboxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      id="rfq-nda-checkbox"
                      type="checkbox"
                      checked={ndaAgreed}
                      onChange={(e) => setNdaAgreed(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        marginTop: '2px',
                        accentColor: 'var(--color-primary)',
                      }}
                    />
                    <span
                      className="body-sm"
                      style={{ fontSize: '13px', color: 'var(--color-on-surface)' }}
                    >
                      <strong>Karşılıklı Gizlilik Sözleşmesi (NDA):</strong> Yüklenen tüm teknik
                      dokümanlar, şematikler ve şartnameler AhsaTech mühendislik masası tarafından
                      gizli tutulacak ve üçüncü taraflarla paylaşılmayacaktır.
                    </span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      id="rfq-kvkk-checkbox"
                      type="checkbox"
                      checked={kvkkAgreed}
                      onChange={(e) => setKvkkAgreed(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        marginTop: '2px',
                        accentColor: 'var(--color-primary)',
                      }}
                    />
                    <span
                      className="body-sm"
                      style={{ fontSize: '13px', color: 'var(--color-on-surface)' }}
                    >
                      KVKK ve veri işleme koşullarını okudum, iletişim kurulmasını onaylıyorum.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 'var(--space-lg)',
                borderTop: '1px solid var(--color-surface-container-high)',
              }}
            >
              {currentStep > 1 ? (
                <button
                  id="rfq-prev-btn"
                  type="button"
                  onClick={handlePrevStep}
                  className="btn-secondary"
                  style={{
                    padding: '10px 20px',
                    fontSize: '13px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    arrow_back
                  </span>
                  <span>Önceki Adım</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  key="rfq-next-step-btn"
                  id="rfq-next-btn"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNextStep()
                  }}
                  className="btn-primary"
                  style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <span>Sonraki Adım</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    arrow_forward
                  </span>
                </button>
              ) : (
                <button
                  key="rfq-submit-final-btn"
                  id="rfq-submit-btn"
                  type="submit"
                  disabled={loading || !ndaAgreed || !kvkkAgreed}
                  className="btn-primary"
                  style={{
                    padding: '14px 28px',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading || !ndaAgreed || !kvkkAgreed ? 0.6 : 1,
                  }}
                >
                  <span>{loading ? 'Teklif İletiliyor...' : 'Teknik Teklifi İlet (RFQ) 🚀'}</span>
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
