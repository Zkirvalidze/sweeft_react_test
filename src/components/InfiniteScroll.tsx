import { useEffect, useRef, useState } from 'react';
import Loader from './loader/Loader';

type Props = {
  onBottomHit: Function;
  isLoading: boolean;
  hasMoreData: boolean;
  loadOnMount: boolean;
  children: any;
};

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

export const InfiniteScroll: React.FC<Props> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  children,
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      if (hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [onBottomHit, hasMoreData]);

  return (
    <>
      {isLoading && (
        <div className='fixed top-[80%] left-[50%]'>
          <Loader />
        </div>
      )}
      <div ref={contentRef}>{children}</div>
    </>
  );
};
