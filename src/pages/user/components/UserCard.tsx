import { IUser } from '../../../types/types';

interface IProps {
  user: IUser;
}

const UserCard: React.FC<IProps> = ({ user }) => {
  return (
    <div className=" border-black h-[300px]  p-4 border-solid border-2 cursor-pointer">
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

export default UserCard;
