import { useState } from 'react';
import { fetchFriends, fetchUser, fetchUsers } from '../api/client';
import { IFullUser, IGetUsersResponse, IUser } from '../types/types';
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
  const [activeUserId, setActiveUserId] = useState<number>();
  const [friends, setFriends] = useState<IUser[]>([]);

  const handleFetchUser = (id: number) => {
    if (activeUserId === id) {
      return;
    }
    setActiveUserId(id);
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
  const handleFetchFriends = (id: number) => {
    console.log(id, 'im woeking');
    fetchFriends(page, NUMBERS_PER_PAGE, id).then((data) => {
      setFriends(data.list);
    });
  };

  return (
    <InfiniteScroll
      hasMoreData={hasMoreData}
      isLoading={loading}
      onBottomHit={loadMoreNumbers}
      loadOnMount={true}
    >
      <main className="container max-w-7xl mx-auto ">
        {fullUser && (
          <UserInfo
            user={fullUser}
            handleFetchUser={handleFetchUser}
            handleFetchFriends={handleFetchFriends}
            friends={friends}
          />
        )}
        <div className="container grid grid-cols-4  max-w-7xl">
          {users.length > 0 &&
            users.map((user, index) => (
              <ListItem
                user={user}
                key={index}
                handleFetchUser={handleFetchUser}
              />
            ))}
        </div>
      </main>
    </InfiniteScroll>
  );
};

export default ListItems;
