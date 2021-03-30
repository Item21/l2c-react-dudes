import React, { useState, useEffect } from 'react';

import DudeForm from './components/DudeForm';
import DudeList from './components/DudeList';
import DudePreview from './components/DudePreview';

interface Dude {
  id: number;
  who: string;
  wat: string;
  cool: number;
}

interface Props {}

const Dude = (props: Props) => {
  const [newWho, setNewWho] = useState('');
  const [newWhat, setNewWhat] = useState('');
  const [dudes, setDudes] = useState<Dude | any>([]);

  const fillForm = (who: string, what: string) => {
    setNewWho(who);
    setNewWhat(what);

    let newDude: Dude = {
      id: dudes.length !== 0 ? Math.max(...dudes.map((d: Dude) => d.id)) + 1 : 0,
      who: who,
      wat: what,
      cool: 15,
    };

    setDudes([...dudes, newDude]);
  };

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/yablko/035b44dd8d63d586e6763872beb3547e/raw/0f3d18326492a6670bc259a78a98e4c702059d81/dudes.json',
    )
      .then((res) => res.json())
      .then((json) => setDudes(json));
  }, []);

  const deleteDude = (dude: Dude) => {
    setDudes(dudes.filter((item: Dude) => item !== dude));
  };

  const setCoolnes = (dude: Dude, cool: number) => {
    setDudes(dudes.map((dud: Dude) => (dud === dude ? { ...dud, cool } : dud)));
  };

  return (
    <div>
      <DudeList dud={dudes} delete={deleteDude} coolnes={setCoolnes} />
      <DudeForm fill={fillForm} first={setNewWho} second={setNewWhat} />
      <DudePreview who={newWho} what={newWhat} />
    </div>
  );
};

export default Dude;
