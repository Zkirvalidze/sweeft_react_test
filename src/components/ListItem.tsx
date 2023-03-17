import { FC, useState } from 'react';
import { fetchUser } from '../api/client';
import { IFullUser, IUser } from '../types/types';

interface IListItemsProps {
  user: IUser;
  handleFetchUser(id: number): void;
}

const ListItem: FC<IListItemsProps> = ({ user, handleFetchUser }) => {
  return (
    <div
      onClick={() => handleFetchUser(user.id)}
      className=" border-black h-[300px]  p-4 border-solid border-2 cursor-pointer"
    >
      <img src={`${user.imageUrl}?${user.id}`} alt="user image" />
      <div>
        <p>
          {user.prefix}
          {user.name}
          {user.lastName}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
