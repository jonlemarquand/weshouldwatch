import React, { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';
import SelectButtons from '../../components/SelectButtons/SelectButtons';

interface HostGenreProps {
  setHostStage: Function;
  hostValue: number;
}
const HostGenre = ({ setHostStage, hostValue }: HostGenreProps) => {
  const [selectValueArray, setSelectValueArray] = useState<any[]>([]);
  const [arrayOptions, setArrayOptions] = useState([
    {
      text: 'Horror',
      value: 'horror',
      active: false,
    },
    {
      text: 'Fantasy',
      value: 'fantasy',
      active: false,
    },
    {
      text: 'Romance',
      value: 'romance',
      active: false,
    },
    {
      text: 'Sci-Fi',
      value: 'sci-fi',
      active: false,
    },
    {
      text: 'Action',
      value: 'action',
      active: false,
    },
    {
      text: 'Crime',
      value: 'crime',
      active: false,
    },
    {
      text: 'Drama',
      value: 'drama',
      active: false,
    },
  ]);

  useEffect(() => {
    console.log('Effect Clicked');
    const newArray = arrayOptions.map((item) => {
      const newItem = item;
      newItem.active = selectValueArray.includes(item.value);
      return newItem;
    });
    setArrayOptions(newArray);
  }, [selectValueArray]);

  const selectValues = (value: string) => {
    if (selectValueArray.includes(value)) {
      const newArray = selectValueArray;
      const indexValue = newArray.indexOf(value);
      newArray.splice(indexValue, 1);
      setSelectValueArray(newArray);
    } else {
      const newArray = selectValueArray;
      newArray.push(value);
      console.log('test');
      setSelectValueArray(newArray);
    }
  };

  return (
    <>
      <p className="title-text">Genre</p>
      <SelectButtons
        selectArray={arrayOptions}
        selectValueSetter={selectValues}
      />
      <Button
        buttonText="Next"
        useLink={false}
        buttonAction={setHostStage}
        buttonValue={hostValue}
      />
    </>
  );
};

export default HostGenre;
