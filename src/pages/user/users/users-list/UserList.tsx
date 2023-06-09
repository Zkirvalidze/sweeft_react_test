import React from 'react';
import { IUser } from '../../../../types/types';
import { Link } from 'react-router-dom';
import UserCard from '../../components/UserCard';
import Loader from '../../../../components/loader/Loader';

interface IProps {
  users: IUser[];
}

const UserList: React.FC<IProps> = ({ users }) => {
  return (
    <div className="user-list container grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
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
