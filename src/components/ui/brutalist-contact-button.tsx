// src/components/ui/brutalist-contact-button.tsx
'use client';

export function BrutalistContactButton({ email }: { email: string }) {
    return (
        <a
        href={`mailto:${email}`}
        className="brutalist-button"
        aria-label="Enviar un correo electrónico"
        >
            <div className="button-icon-wrapper">
                <span>👋</span>
            </div>
            <div className="button-text">
                <span>Salúdame</span>
            </div>
        </a>
    );
}