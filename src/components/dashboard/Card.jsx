import React, { useEffect, useState } from 'react';
import { classNames, formatCurrency } from '../../utils';

const Card = ({ className, title, icon, value }) => {

  return (
    <div className="grid py-6   bg-white border border-gray-200 shadow-lg rounded-lg ">
      <div className="grid grid-cols-6">
        <div className="my-auto ml-auto mt-1">
          <div className={classNames('h-6 w-6  rounded-lg', className)}>
            <div className={'h-2 w-2'}>
              {icon}
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-1 ">
          <h5 className="text-slate-800 text-base px-2">{title}</h5>
          <span className="font-semibold text-lg"><span className="px-2">Rs</span>{formatCurrency(value)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
