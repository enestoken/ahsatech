import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { translations } from '@payloadcms/translations/all'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Products } from './collections/Products'
import { RFQSubmissions } from './collections/RFQSubmissions'
import { Pages } from './collections/Pages'

import { Corporate } from './globals/Corporate'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    fallbackLanguage: 'tr',
    supportedLanguages: {
      tr: translations.tr,
    },
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— AhsaTech Mühendislik Portalı',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: ['/components/Admin/AdminBrand#AdminWelcome'],
      graphics: {
        Icon: '/components/Admin/AdminBrand#AdminIcon',
        Logo: '/components/Admin/AdminBrand#AdminLogo',
      },
    },
  },
  collections: [Pages, Projects, Products, RFQSubmissions, Media, Users],
  globals: [Corporate, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./ahsatech.db',
    },
  }),
  sharp,
  plugins: [],
})
