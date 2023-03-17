import React from 'react';
import { IUser } from '../../../../types/types';
import { Link } from 'react-router-dom';
import UserCard from '../../components/UserCard';

interface IProps {
  users: IUser[];
}

const UserList: React.FC<IProps> = ({ users }) => {
  return (
    <div className="user-list container grid grid-cols-4  max-w-7xl">
      {users.length > 0 &&
        users.map((user, index) => (
          <Link key={index} to={'/users/' + user.id}>
            <UserCard user={user} />
          </Link>
        ))}
    </div>
  );
};

export default UserList;
