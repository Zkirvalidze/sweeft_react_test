import { FC } from 'react';
import { IUserDetails } from '../../../../types/types';

interface IProps {
  user: IUserDetails;
}

const UserInfo: FC<IProps> = ({ user }) => {
  return (
    <>
      <div className="  flex md:flex-row flex-col justify-between   py-5 items-center">
        <img
          className="  w-full md:w-auto  h-[200px]"
          src={`${user.imageUrl}?${user.id}`}
          alt={user.name}
        />
        <div className=" relative ml-5 w-full border border-black mt-4 p-2 ">
          <legend className="absolute top-[-15px] left-[10px] px-2 bg-white">
            Info
          </legend>
          <div className="font-bold">
            <span>{user.prefix} </span>
            <span>{user.name} </span>
            <span>{user.lastName} </span>
          </div>
          <div>{user.title}</div>
          <br />
          <div>
            <div>
              <span className="underline">email</span> : {user.email}
            </div>
            <div>
              <span className="underline">ip adress</span> : {user.ip}
            </div>
            <div>
              <span className="underline">job arrea</span> :{user.jobArea}
            </div>
            <div>
              <span className="underline">job type</span> : {user.jobType}
            </div>
          </div>
        </div>
        <div className=" relative ml-5 border border-black p-2 w-full md:w-[250px] mt-4  ">
          <legend className="absolute top-[-15px] left-[10px] px-2 bg-white">
            Adress
          </legend>
          <div className="font-bold">
            {user.company.name}
            {user.company.suffix}
          </div>
          <div>
            <span className="underline">city</span> : {user.address.city}
          </div>
          <div>
            <span className="underline">country</span> :{user.address.country}
          </div>
          <div>
            <span className="underline">state</span> :{user.address.state}
          </div>
          <div>
            <span className="underline">zip code</span> :{user.address.zipCode}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
