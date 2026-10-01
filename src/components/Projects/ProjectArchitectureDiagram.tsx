import React from 'react'
import type { ProjectDoc } from './ProjectsPortfolioClient'

export interface ProjectArchitectureDiagramProps {
  project: ProjectDoc
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({
  project,
}) => {
  return (
    <section
      id="project-architecture-section"
      style={{
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-surface-container-high)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: 'var(--space-2xl)' }}>
          <span
            className="label-sm"
            style={{
              color: 'var(--color-primary)',
              display: 'inline-block',
              marginBottom: '6px',
            }}
          >
            SİSTEM MİMARİSİ & DONANIM BLOKLARI
          </span>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--color-on-surface)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Uçtan Uca Mühendislik Şeması ve Veri Akışı
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            AhsaTech laboratuvarlarında tasarlanan çok katmanlı PCB mimarisi; elektriksel gürültüye,
            yüksek gerilim darbelerine ve sıcaklık dalgalanmalarına karşı izole modüler bloklar
            halinde inşa edilir.
          </p>
        </div>

        {/* Interactive Architecture SVG Visual Card */}
        <div
          id="project-block-diagram-container"
          style={{
            backgroundColor: 'var(--color-surface-container-lowest)',
            border: '1px solid var(--color-surface-container-high)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-xl)',
            marginBottom: 'var(--space-2xl)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Bar with Status & Legend */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: 'var(--space-md)',
              marginBottom: 'var(--space-lg)',
              borderBottom: '1px solid var(--color-surface-container)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '20px', color: 'var(--color-primary)' }}
              >
                account_tree
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-on-surface)' }}
              >
                DONANIM & SİNYAL İŞLEME BLOK DİYAGRAMI
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    backgroundColor: '#007866',
                  }}
                />
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', color: 'var(--color-outline)' }}
                >
                  Analog / Sensör
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    backgroundColor: '#52656a',
                  }}
                />
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', color: 'var(--color-outline)' }}
                >
                  Galvanik İzolasyon (3.75kV)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    backgroundColor: '#397044',
                  }}
                />
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', color: 'var(--color-outline)' }}
                >
                  Dijital SCADA / Ağ
                </span>
              </div>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <div className="semantic-diagram">
              <div>
                <h3>SENSÖR & GİRİŞ KATI</h3>
                <p>• 3-Faz Akım / Gerilim</p>
                <p>• 16-Bit Sigma-Delta ADC</p>
                <p>• PT100 Sıcaklık Girişi</p>
                <p>• Düşük Gürültülü OP-AMP</p>
                <p>12.8 kHz Örnekleme</p>
              </div>
              <div>
                <h3>İZOLASYON</h3>
                <p>3.75 kVrms</p>
                <p>Manyetik & Optik</p>
                <p>TVS Diyot & Gaz</p>
                <p>Deşarj Tüpü</p>
                <p>Surge Koruma</p>
              </div>
              <div>
                <h3>{project.mcuCore ? project.mcuCore : 'İŞLEMCİ ÇEKİRDEĞİ'}</h3>
                <p>GERÇEK ZAMANLI FIRMWARE</p>
                <p>• FreeRTOS Çok Görevli Çekirdek</p>
                <p>• Donanımsal DSP / FFT Analizi</p>
                <p>• 32 MB Güvenli NOR Flash Karakutu</p>
                <p>• SHA-256 / AES-256 Şifreleme</p>
                <p>Döngü Süresi: &lt; 1 ms</p>
              </div>
              <div>
                <h3>HABERLEŞME & SCADA</h3>
                <p>• IEC 60870-5-104 / DNP3</p>
                <p>• Çift İzole RS-485 Modbus RTU</p>
                <p>• 10/100 Ethernet RJ45</p>
                <p>• AhsaCloud IoT Telemetri Linki</p>
                <p>TLS 1.3 Şifreli İletim</p>
              </div>
            </div>
          </div>

          {/* Block Diagram Description Text */}
          {project.blockDiagramDesc && (
            <div
              style={{
                marginTop: 'var(--space-lg)',
                padding: 'var(--space-md) var(--space-lg)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-surface-container-high)',
              }}
            >
              <span
                className="font-tech"
                style={{
                  fontSize: '11px',
                  color: 'var(--color-primary)',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                MİMARİ BLOK ÖZETİ
              </span>
              <p
                className="body-sm"
                style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}
              >
                {project.blockDiagramDesc}
              </p>
            </div>
          )}
        </div>

        {/* Detailed Engineering Case Study Narrative */}
        {project.description && (
          <div
            id="project-case-study"
            style={{
              maxWidth: '900px',
              backgroundColor: 'var(--color-surface-container-lowest)',
              border: '1px solid var(--color-surface-container-high)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl)',
            }}
          >
            <h3
              className="headline-sm"
              style={{ color: 'var(--color-on-surface)', marginBottom: 'var(--space-md)' }}
            >
              Mühendislik Arka Planı ve Zorlu Saha Koşulları
            </h3>
            <p
              className="body-md"
              style={{
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.8,
                fontSize: '16px',
                whiteSpace: 'pre-line',
              }}
            >
              {project.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
