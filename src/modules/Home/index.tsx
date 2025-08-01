import React, { memo } from 'react';
import { useUIStore } from '../../store/uiStore';
import { Gallery } from './gallery/Gallery';

export const Home: React.FC = memo(() => {
  const { activeTab } = useUIStore();

  return (
    <>
      {activeTab === 0 ? <Gallery /> : <></>}
    </>
  );
});

Home.displayName = 'Home';