import { useState } from 'react';
import { getUsers } from '../api/client';
import { IUser } from '../types/types';
import { InfiniteScroll } from './InfiniteScroll';
import ListItem from './ListItem';

const NUMBERS_PER_PAGE = 20;

const ListItems = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const hasMoreData = users.length < 1274;

  const loadMoreNumbers = () => {
    setPage((page) => page + 1);
    setLoading(true);

    getUsers(page, NUMBERS_PER_PAGE).then((data) =>
      setUsers((prev) => [...prev, ...data.list])
    );

    setLoading(false);
  };
  return (
    <InfiniteScroll
      hasMoreData={hasMoreData}
      isLoading={loading}
      onBottomHit={loadMoreNumbers}
      loadOnMount={true}
    >
      <main className="container grid grid-cols-4 max-w-7xl">
        {users.length > 0 && users.map((user) => <ListItem user={user}/>)}
      </main>
    </InfiniteScroll>
  );
};

export default ListItems;
