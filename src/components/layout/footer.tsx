import { getProfile } from '@/lib/data';

export default async function Footer() {
  const profile = await getProfile();

  return (
    <footer className="py-6 text-center">
        <p className="font-mono text-sm text-slate-400">
            Diseñado y construido por {profile.name}
        </p>
    </footer>
  );
}
