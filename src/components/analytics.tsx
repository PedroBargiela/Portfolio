// src/components/analytics.tsx
'use client'

import Script from 'next/script'

export function Analytics({ measurementId }: { measurementId: string }) {
  // No renderizamos nada si no hay un ID
    if (!measurementId) {
        return null;
    }

    return (
        <>
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
        <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}');
            `,
            }}
        />
        </>
    )
}