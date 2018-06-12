import acura from '../assets/acura_homepage.png';
import acuraBap from '../assets/acura_bap.png';
import hondaBap from '../assets/honda_bap.png';
import dealerLocator from '../assets/dealer_locator.png';

export const menuItems = [
  {
    isProjects: true,
    title: 'Projects',
    href: '/',
    label: 'link to projects page',
  },
  {
    title: 'GitHub',
    href: 'https://www.github.com/colindamelio',
    label: 'link to github profile',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/colindamelio/',
    label: 'link to linkedin profile',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/clndml',
    label: 'link to twitter account',
  },
];

export const projectItems = [
  {
    title: 'Acura Homepage',
    href: 'https://www.acura.ca',
    src: acura,
    alt: 'Screen capture of the Acura Canada homepage',
    company: 'Climax Media',
    desc:
      'A responsive digital transformation and redesign of the premium Acura Canada brand. Built with React/Redux, PostCSS, and AODA compliant.',
  },
  {
    title: 'Honda Build & Price',
    href: 'https://www.honda.ca/buildyourhonda',
    src: hondaBap,
    alt: 'Screen capture of the Honda Build and Price app',
    company: 'Climax Media',
    desc:
      'React/Redux application for building & pricing Honda Canada and Acura Canada vehicles. Tooling included React-Router, styled-components, storybook, and a11y. Themed across two product lines.',
  },
  {
    title: 'Acura Build & Price',
    href: 'https://www.acura.ca/buildyouracura',
    src: acuraBap,
    alt: 'Screen capture of the Acura Build and Price app',
    company: 'Climax Media',
    desc:
      'React/Redux application for building & pricing Honda Canada and Acura Canada vehicles. Tooling included React-Router, styled-components, storybook, and a11y. Themed across two product lines.',
  },
  {
    title: 'Honda Dealer Locator',
    href: 'https://www.honda.ca/dealerlocator',
    src: dealerLocator,
    alt: 'Screen capture of the Honda Canada dealer locator application',
    company: 'Climax Media',
    desc:
      'React/Redux application that integrates geo-location and Google Maps Platform to search for Honda/Acura dealerships.',
  },
];
