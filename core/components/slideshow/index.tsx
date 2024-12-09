import { Slideshow as ComponentsSlideshow } from '~/components/ui/slideshow';

import SlideshowBG1 from './1.png';
import SlideshowBG2 from './2.png';
import SlideshowBG3 from './3.png';

const slides = [
  {
    cta: { label: 'Learn More', href: '/#' },
    description:
      'SE Office Hours is a demo store for BigCommerce Solution Engineers to highlight use-cases, quick fixes, and deep thoughts.',
    image: {
      src: SlideshowBG1,
      altText: 'An assortment of brandless products against a blank background',
    },
    key: 1,
    title: 'Inside the Mind of a Solution Engineer',
  },

  {
    cta: { label: 'Shop Now', href: '/#' },
    description:
      "Discover a curated collection of wardrobe essentials designed for comfort, quality, and versatility. From classic tees to tailored trousers, our pieces are crafted to effortlessly complement your lifestyle—whether you're dressing up, staying casual, or anything in between. Elevate your closet with staples that never go out of style. Because great fashion starts with the basics.",
    image: {
      src: SlideshowBG2,
      altText: 'An assortment of brandless products against a blank background',
    },
    key: 2,
    title: 'Timeless Staples, Everyday Style',
  },

  {
    cta: { label: 'Shop Coffee', href: '/#' },
    description:
      "Power your grind with coffee crafted for those who get it done. Whether you're sealing the deal, hitting deadlines, or crushing goals, every sip is a step closer to victory. Bold, energizing, and relentless—just like you. Because greatness doesn’t brew itself.",
    image: {
      src: SlideshowBG3,
      altText: 'An assortment of brandless products against a blank background',
    },
    key: 3,
    title: 'Coffee is for Closers',
  },
];

export const Slideshow = () => <ComponentsSlideshow slides={slides} />;
