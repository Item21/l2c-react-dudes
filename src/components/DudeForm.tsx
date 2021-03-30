import React, { useRef, KeyboardEvent, ChangeEvent } from 'react';

interface Props {
  fill: (who: string, what: string) => void;
  first: (who: string) => void;
  second: (who: string) => void;
}

const DudeForm = (props: Props) => {
  const newWhoInput = useRef<HTMLInputElement>(null);
  const newWhatInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let wat = newWhoInput.current?.value;
      let who = newWhatInput.current?.value;
      if (wat && who) {
        props.fill(wat, who);
        reset();
        newWhoInput.current?.focus();
      }
    }
  };

  const reset = () => {
    if (newWhoInput.current != null && newWhatInput.current != null) {
      newWhoInput.current.value = '';
      newWhatInput.current.value = '';
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'first') {
      props.first(e.target.value);
      return;
    }
    props.second(e.target.value);
  };

  return (
    <form onKeyPress={handleSubmit} className="add-new">
      <input
        autoFocus
        type="text"
        name="first"
        ref={newWhoInput}
        onChange={handleChange}
      />
      <input type="text" name="second" ref={newWhatInput} onChange={handleChange} />
    </form>
  );
};

export default DudeForm;
