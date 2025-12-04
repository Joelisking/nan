export interface NavItem {
  text: string;
  url?: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { text: 'Home', url: '/' },
  {
    text: 'About Us',
    url: '/about-us',
  },
  {
    text: 'Divisions',
    url: '/divisions',
  },
  {
    text: 'Careers',
    url: '/careers',
  },
];
