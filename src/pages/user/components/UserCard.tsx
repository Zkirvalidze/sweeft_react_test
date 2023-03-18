import { IUser } from '../../../types/types';

interface IProps {
  user: IUser;
}

const UserCard: React.FC<IProps> = ({ user }) => {
  return (
    <div className="  h-[300px]  cursor-pointer shadow-lg ">
      <img src={`${user.imageUrl}?${user.id}`} alt="user image" className='rounded-md ' />
      <div className='p-2'>
        <p className="font-bold 2">
          {user.prefix}
          {user.name}
          {user.lastName}
        </p>
        <p>{user.title}</p>
      </div>
    </div>
  );
};

export default UserCard;
