
'use client';
import { getProfile } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Profile } from '@/types';

function SocialBarContent({ profile }: { profile: Profile }) {
    if (!profile) return null;
    return (
        <>
            <Link href={`https://${profile.contact.github}`} target="_blank" aria-label="GitHub" className="p-2 text-slate-400 transition-all hover:text-primary hover:-translate-y-1">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={`https://${profile.contact.linkedin}`} target="_blank" aria-label="LinkedIn" className="p-2 text-slate-400 transition-all hover:text-primary hover:-translate-y-1">
              <Linkedin className="h-5 w-5" />
            </Link>
        </>
    )
}

export function LeftSocialBar() {
  const [profile, setProfile] = useState<Profile | null>(null);
  
  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  return (
    <div className="fixed bottom-0 left-10 z-10 hidden w-10 flex-col items-center gap-4 md:flex">
      <SocialBarContent profile={profile!} />
      <div className="h-24 w-px bg-slate-400"></div>
    </div>
  );
}

export function RightEmailBar() {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        getProfile().then(setProfile);
    }, []);

    if (!profile) return null;

  return (
    <div className="fixed bottom-0 right-10 z-10 hidden w-10 flex-col items-center gap-6 md:flex">
        <a href={`mailto:${profile.contact.email}`} className="font-mono text-sm tracking-widest text-slate-400 [writing-mode:vertical-rl] transition-all hover:text-primary hover:-translate-y-1">
            {profile.contact.email}
        </a>
      <div className="h-24 w-px bg-slate-400"></div>
    </div>
  );
}

    