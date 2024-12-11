import React from 'react';
import Image from 'next/image';
import Check from '../../public/assets/check.svg';

type Props = {
  text: string;
};

const FeatureListItem = (props: Props) => {
  return (
    <li className="flex items-center gap-x-2 text-muted-foreground ">
      <span>
        <Image src={Check} alt="Checkmark" />
      </span>
      {props.text}
    </li>
  );
};

export default FeatureListItem;
