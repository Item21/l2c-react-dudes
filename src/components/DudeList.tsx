import React, { ChangeEvent } from 'react';

interface Dude {
  id: number;
  who: string;
  wat: string;
  cool: number;
}

interface Props {
  dud: Dude[];
  delete: (dude: Dude) => void;
  coolnes: (dude: Dude, cool: number) => void;
}

const DudeList = (props: Props) => {
  const { dud } = props;

  const handleCool = (dude: Dude) => (event: ChangeEvent<HTMLInputElement>) => {
    let cool: number = +event.target.value;

    props.coolnes(dude, cool);
  };

  const listItems = dud.map((dude: Dude) => (
    <li key={dude.id} className="dude">
      <a className="ctrl" onClick={() => props.delete(dude)}>
        x
      </a>

      <article className={dude.cool < 10 ? 'faded' : dude.cool > 50 ? 'gold' : ''}>
        {dude.who}
        <span>{dude.wat}</span>
      </article>

      <input
        type="number"
        className="ctrl"
        value={dude.cool}
        onChange={handleCool(dude)}
      />
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default DudeList;
