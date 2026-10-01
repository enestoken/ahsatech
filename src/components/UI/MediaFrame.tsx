import Image from 'next/image'
import type { Media } from '@/payload-types'

export function MediaFrame({
  media,
  alt,
  priority = false,
}: {
  media?: number | Media | null
  alt: string
  priority?: boolean
}) {
  if (!media || typeof media !== 'object' || !media.url || !media.mimeType?.startsWith('image/'))
    return null
  return (
    <figure className="media-frame">
      <Image
        src={media.url}
        alt={media.alt || alt}
        fill
        sizes="(max-width: 767px) 100vw, 65vw"
        loading={priority ? 'eager' : 'lazy'}
        unoptimized={!media.url.startsWith('/api/media/file/')}
      />
    </figure>
  )
}
