import React from 'react';

interface Props {
  who: string;
  what: string;
}

const DudePreview = (props: Props) => {
  const { who, what } = props;
  return (
    <p className="preview">
      {who}
      <br />
      <small>{what}</small>
    </p>
  );
};

export default DudePreview;
