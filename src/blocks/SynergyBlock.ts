import type { Block } from 'payload'

export const SynergyBlock: Block = {
  slug: 'synergyBlock',
  labels: {
    singular: 'Donanım & Yazılım Sinerji Bloğu',
    plural: 'Sinerji Blokları',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Üst Başlık',
      defaultValue: 'Tek Çatı Altında Bütünleşik Çözüm',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Ana Başlık',
      defaultValue: 'Donanım ile Yazılımın Kusursuz Uyumu',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Açıklama Metni',
      defaultValue:
        'Genellikle yazılım firmaları donanımı, donanım tasarımcıları ise bulut altyapısını üçüncü taraflara devreder. AhsaTech’te PCB şemasından mikrodenetleyici bellenimine (firmware) ve oradan küresel web gösterge paneline kadar tüm katmanlar aynı mühendislik disipliniyle üretilir.',
    },
    {
      name: 'guaranteeBadge',
      type: 'text',
      label: 'Alt Güvence Metni',
      defaultValue: '✦ Uçtan Uca Sorumluluk & Garanti',
    },
  ],
}
