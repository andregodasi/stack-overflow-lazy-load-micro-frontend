import React from 'react';
import { useHistory } from 'react-router-dom';

export const DummyPage = () => {
  const history = useHistory();

  return (
    <>
      <h1>Dummy Page</h1>
      <div>
        <button type="button" onClick={() => history.push('/remote')}>
          Remote
        </button>
      </div>
    </>
  );
};
