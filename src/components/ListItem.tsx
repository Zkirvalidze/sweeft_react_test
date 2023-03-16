import { IUser } from '../types/types';

interface IListItemsProps {
  user: IUser;
}

const ListItem = ({ user }: IListItemsProps) => {
  return (
    <div className=" border-black h-[300px]  p-4 border-solid border-2 cursor-pointer ">
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
