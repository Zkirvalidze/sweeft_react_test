import { FC, useState } from 'react';
import { fetchUsers } from '../../../api/client';
import { InfiniteScroll } from '../../../components/InfiniteScroll';
import { IUser } from '../../../types/types';
import UserList from './users-list/UserList';

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [page, setPage] = useState(0);
  const nbOfUsersPerPage = 20;
  const hasMoreData = users.length < 1274;

  const loadMoreNumbers = (): void => {
    setIsLoadingUsers(true);
    fetchUsers(page, nbOfUsersPerPage)
      .then((paginatedUsers) => {
        setUsers((prevUserList) => [...prevUserList, ...paginatedUsers.list]);
        setPage((page) => page + 1);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoadingUsers(false));
  };


  return (
    <>
      <section className="user-page mt-5">
        <InfiniteScroll
          hasMoreData={hasMoreData}
          isLoading={isLoadingUsers}
          onBottomHit={loadMoreNumbers}
          loadOnMount={true}
        >
          <UserList users={users} />
        </InfiniteScroll>
      </section>
    </>
  );
};

export default UserPage;
