import { useEffect, useState } from 'react';
import { IParamsWithId, IUser } from '../../../../types/types';
import { Link } from 'react-router-dom';
import UserCard from '../../components/UserCard';
import { InfiniteScroll } from '../../../../components/InfiniteScroll';
import { fetchFriends } from '../../../../api/client';
import { useParams } from 'react-router-dom';

const UserFriendList: React.FC = () => {
  const [isLoadingFriends, setIsLoadingFriends] = useState(false);
  const [friends, setFriends] = useState<IUser[]>([]);
  const [page, setPage] = useState(0);

  const hasMoreData = friends.length < 1274;

  const handleFetchFriends = (id: number) => {
    setIsLoadingFriends(true);
    fetchFriends(page, 20, id)
      .then((paginatedFriends) => {
        setFriends((prevFriendsList) => [
          ...prevFriendsList,
          ...paginatedFriends.list,
        ]);
        setPage((page) => page + 1);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoadingFriends(false));
  };

  const { id } = useParams<IParamsWithId>();

  useEffect(() => {
    if (id) {
      handleFetchFriends(+id);
    }
  }, [id]);

  return (
    <div>
      <InfiniteScroll
        hasMoreData={hasMoreData}
        isLoading={isLoadingFriends}
        onBottomHit={() => handleFetchFriends(+id!)}
        loadOnMount={false}
      >
        <div className="user-list container grid grid-cols-4  max-w-7xl">
          {friends.length > 0 &&
            friends.map((friend, index) => (
              <Link key={index} to={'/users/' + friend.id}>
                <UserCard user={friend} />
              </Link>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UserFriendList;
