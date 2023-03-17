import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../../api/client';
import { IParamsWithId, IUserDetails } from '../../../types/types';
import UserBreadcrumbs from './user-breadcrumbs/UserBreadcrumbs';
import UserFriendList from './user-friend-list/UserFriendList';
import UserInfo from './user-info/UserInfo';

const UserDetailedPage: FC = () => {
  const { id } = useParams<IParamsWithId>();
  const [activeUserInfo, setActiveUserInfo] = useState<IUserDetails>();
  const [isLoadingUserDetails, setIsLoadingUserDetails] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoadingUserDetails(true);
      fetchUser(+id)
        .then((usetDetails) => setActiveUserInfo(usetDetails))
        .catch((err) => console.log(err))
        .finally(() => setIsLoadingUserDetails(false));
    }
  }, [id]);

  return (
    <div>
      <h1>User Details page</h1>
      {activeUserInfo && (
        <div>
          <UserInfo user={activeUserInfo} />
          <UserBreadcrumbs user={activeUserInfo} />
        </div>
      )}
      <UserFriendList />
    </div>
  );
};

export default UserDetailedPage;
