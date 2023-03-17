import { FC, useEffect, useState } from 'react';
import { IFullUser, IUser } from '../types/types';
import ListItem from './ListItem';

interface FullUserProps {
  user: IFullUser;
  handleFetchUser(id: number): void;
  handleFetchFriends(id: number): void;
  friends: IUser[];
}
interface ListType {
  id: number;
  NM: string;
}

const FullUser: FC<FullUserProps> = ({
  user,
  handleFetchUser,
  handleFetchFriends,
  friends,
}) => {
  const [list, setList] = useState<ListType[]>([]);
  const {
    imageUrl,
    name,
    id,
    prefix,
    lastName,
    title,
    email,
    ip,
    jobArea,
    jobType,
    address,
    company,
  } = user;
  const NM = `${prefix}${name}${lastName}`;

  const info = [{ id, NM }];
  useEffect(() => {
    const isExistingPet = list.find((pet: any) => pet.id === id);
    if (!isExistingPet) {
      setList((prev: any) => [...prev, ...info]);
    }
  }, [id]);

  useEffect(() => {
    handleFetchFriends(user.id);
  }, [id]);

  console.log(friends);
  return (
    <>
      <div className="  flex md:flex-row flex-col justify-between   py-5 items-center">
        <img
          className="  w-full md:w-auto  h-[200px]"
          src={`${imageUrl}?${id}`}
          alt={name}
        />
        <div className=" relative ml-5 w-full border border-black mt-4 p-2 ">
          <legend className="absolute top-[-15px] left-[10px] px-2 bg-white">
            Info
          </legend>
          <div className="font-bold">
            <span>{prefix} </span>
            <span>{name} </span>
            <span>{lastName} </span>
          </div>
          <div>{title}</div>
          <br />
          <div>
            <div>
              <span className="underline">email</span> : {email}
            </div>
            <div>
              <span className="underline">ip adress</span> : {ip}
            </div>
            <div>
              <span className="underline">job arrea</span> :{jobArea}
            </div>
            <div>
              <span className="underline">job type</span> : {jobType}
            </div>
          </div>
        </div>
        <div className=" relative ml-5 border border-black p-2 w-full md:w-[250px] mt-4  ">
          <legend className="absolute top-[-15px] left-[10px] px-2 bg-white">
            Adress
          </legend>
          <div className="font-bold">
            {company.name}
            {company.suffix}
          </div>
          <div>
            <span className="underline">city</span> : {address.city}
          </div>
          <div>
            <span className="underline">country</span> :{address.country}
          </div>
          <div>
            <span className="underline">state</span> :{address.state}
          </div>
          <div>
            <span className="underline">zip code</span> :{address.zipCode}
          </div>
        </div>
      </div>
      <div>
        {list.map((pet: any, index: any) => (
          <button key={index} onClick={() => handleFetchUser(pet.id)}>
            {pet.NM} ///
          </button>
        ))}
      </div>

      <div>
        <h1 className="font-bold text-3xl mb-2">Friends:</h1>
        <div className="container grid grid-cols-4  max-w-7xl">
          {friends.length > 0 &&
            friends.map((data, index) => (
              <ListItem
                user={data}
                key={index}
                handleFetchUser={handleFetchUser}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FullUser;
