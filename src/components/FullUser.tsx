import React, { FC, useState } from 'react';
import { IFullUser } from '../types/types';
interface FullUserProps {
  user: IFullUser;
}

const UserInfo: FC<IFullUser> = (user) => {
    console.log(user)
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
  } = user
  return (
    <div className=" container max-w-7xl flex md:flex-row flex-col justify-between  mx-auto py-[20px] items-center">
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
  );
};

export default UserInfo;
