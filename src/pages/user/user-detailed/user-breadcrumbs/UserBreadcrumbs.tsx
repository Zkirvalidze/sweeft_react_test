import { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../../../types/types';

type IUserUrlTree = IUserUrl[];

interface IUserUrl {
  fullName: string;
  id: string;
}

interface IProps {
  user: IUser;
}

const UserBreadcrumbs: FC<IProps> = ({ user }) => {
  const [urlTree, setUrlTree] = useState<IUserUrlTree>([]);

  useEffect(() => {
    const isExstingUser = urlTree.find((u) => u.id === user.id.toString());
    if (!isExstingUser && user) {
      setUrlTree((urlTree) => [
        ...urlTree,
        {
          fullName: user.name + ' ' + user.lastName,
          id: user.id.toString(),
        },
      ]);
    }
  }, [user]);

  return (
    <div>
      {urlTree.length > 0 &&
        urlTree.map((item, i) => (
          <Link key={i} to={'/users/' + item.id}>{item.fullName}</Link>
        ))}
    </div>
  );
};

export default UserBreadcrumbs;
