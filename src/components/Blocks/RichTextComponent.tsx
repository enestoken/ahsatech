import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export interface RichTextBlockProps {
  heading?: string
  body?: string | React.ComponentProps<typeof RichText>['data']
  containerWidth?: 'narrow' | 'standard' | 'wide'
}

export const RichTextComponent: React.FC<RichTextBlockProps> = ({
  heading,
  body,
  containerWidth = 'standard',
}) => {
  const maxWidth =
    containerWidth === 'narrow' ? '768px' : containerWidth === 'wide' ? '1280px' : '1024px'

  return (
    <section style={{ padding: 'var(--space-2xl) 0', backgroundColor: 'var(--color-surface)' }}>
      <div className="container" style={{ maxWidth }}>
        {heading && (
          <h2
            className="headline-lg"
            style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}
          >
            {heading}
          </h2>
        )}
        {body && (
          <div className="prose">
            {typeof body === 'string' ? (
              body.split(/\n\s*\n/).map((paragraph, index) => (
                <p key={index} style={{ whiteSpace: 'pre-line' }}>
                  {paragraph}
                </p>
              ))
            ) : (
              <RichText data={body} />
            )}
          </div>
        )}
      </div>
    </section>
  )
}
