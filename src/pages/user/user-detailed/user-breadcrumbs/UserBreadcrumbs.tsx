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
    <ul className="flex gap-3">
      {urlTree.length > 0 &&
        urlTree.map((item, i) => (
          <li key={i}>
            <Link className="text-blue-500" to={'/users/' + item.id}>
              {item.fullName}
              {urlTree.length !== i + 1 && <span className="ml-2">&#62;</span>}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default UserBreadcrumbs;
