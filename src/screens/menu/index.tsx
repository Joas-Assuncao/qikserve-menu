'use client';

import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { Accordion } from '@/components/Accordion';
import { Input } from '@/components/Input';
import { NavItems } from '@/components/NavItems';
import { IRestaurant, IMenu } from '@/services/interfaces';
import { RestaurantContext } from '@/contexts/RestaurantContext';

interface IMenuPageProps {
  dataMenu: IMenu;
  dataRestaurant: IRestaurant;
}

export function Menu({ dataMenu, dataRestaurant }: IMenuPageProps) {
  // const ref = useRef<HTMLDivElement | null>(null);
  const { setMenu, setRestaurant } = useContext(RestaurantContext);
  const [accordionId, setAccordionId] = useState(0);

  useEffect(() => {
    setMenu(dataMenu);
    setRestaurant(dataRestaurant);
  }, []);

  return (
    <>
      <div className='flex flex-col gap-4 pb-8'>
        <Image className="min-w-full object-cover md:h-44 lg:h-48 min-h-36" src='https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png' alt='Banner img' width={2000} height={100} />
        <div className='px-4'>
          <Input placeholder='Search menu items' />
        </div>

        <NavItems
          sections={dataMenu.sections}
          bg={dataRestaurant.webSettings.navBackgroundColour}
          id={accordionId}
        />

        {dataMenu.sections.map((section) => (
          <Accordion setAccordionId={setAccordionId} /* ref={ref} */ key={section.id} id={section.id} title={section.name} data={section.items} />
        ))}
      </div>
    </>
  );
}

// https://cdn-dev.preoday.com/challenge/venue/9
// https://cdn-dev.preoday.com/challenge/menu
