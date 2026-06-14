import Globe from './icons/Globe.svelte';
import Instagram from './icons/Instagram.svelte';
import LinkedIn from './icons/LinkedIn.svelte';
import Github from './icons/Github.svelte';
import TikTok from './icons/TikTok.svelte';

export const links = [
  {
    label: 'Portfolio',
    meta: 'calebearaujo.com.br',
    href: 'https://calebearaujo.com.br',
    icon: Globe,
    accent: 'from-prism-gold to-prism-mint',
  },
  {
    label: 'Instagram',
    meta: '@calebe_original',
    href: 'https://www.instagram.com/calebe_original/',
    icon: Instagram,
    accent: 'from-prism-pink to-prism-gold',
  },
  {
    label: 'LinkedIn',
    meta: 'calebe-dev',
    href: 'https://www.linkedin.com/in/calebe-dev',
    icon: LinkedIn,
    accent: 'from-prism-cyan to-prism-violet',
  },
  {
    label: 'GitHub',
    meta: 'Calebe-Dev',
    href: 'https://github.com/Calebe-Dev',
    icon: Github,
    accent: 'from-prism-mint to-prism-cyan',
  },
  {
    label: 'TikTok',
    meta: '@caleb_eoriginal',
    href: 'https://www.tiktok.com/@caleb_eoriginal',
    icon: TikTok,
    accent: 'from-prism-pink to-prism-violet',
  },
];
