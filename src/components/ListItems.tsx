import { useState } from 'react';
import { fetchUser, fetchUsers } from '../api/client';
import { IFullUser, IUser } from '../types/types';
import UserInfo from './FullUser';
import FullUser from './FullUser';
import { InfiniteScroll } from './InfiniteScroll';
import ListItem from './ListItem';

const NUMBERS_PER_PAGE = 20;

const ListItems = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [fullUser, setFullUser] = useState<IFullUser | null>(null);

  const handleFetchUser = (id: number) => {
    fetchUser(id).then((data) => setFullUser(data));
  };
  const hasMoreData = users.length < 1274;

  const loadMoreNumbers = () => {
    setPage((page) => page + 1);
    setLoading(true);
    setTimeout(() => {
      fetchUsers(page, NUMBERS_PER_PAGE).then((data) => {
        setUsers((prev) => [...prev, ...data.list]);
      });
      setLoading(false);
    }, 500);
  };
  console.log(loading);
  return (
    <InfiniteScroll
      hasMoreData={hasMoreData}
      isLoading={loading}
      onBottomHit={loadMoreNumbers}
      loadOnMount={true}
    >
      <main>
        {fullUser && <UserInfo user={fullUser}/>}
        <div className="container grid grid-cols-4 mx-auto max-w-7xl">
          {users.length > 0 &&
            users.map((user) => (
              <ListItem user={user} handleFetchUser={handleFetchUser} />
            ))}
        </div>
      </main>
    </InfiniteScroll>
  );
};

export default ListItems;
