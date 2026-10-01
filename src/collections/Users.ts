import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Kullanıcı',
    plural: 'Kullanıcılar',
  },
  admin: {
    group: 'Sistem',
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Ad Soyad',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Kullanıcı Rolü',
      defaultValue: 'admin',
      options: [
        { label: 'Süper Yönetici', value: 'admin' },
        { label: 'İçerik Editörü', value: 'editor' },
      ],
      required: true,
    },
  ],
}
