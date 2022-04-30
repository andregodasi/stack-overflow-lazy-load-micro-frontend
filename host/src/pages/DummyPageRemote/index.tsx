import React from 'react';
import { useHistory } from 'react-router-dom';
import { DummyErrorFallback } from '../../components/DummyErrorFallback';
import { DummyFallback } from '../../components/DummyFallback';
import ModuleLoader from '../../components/ModuleLoader';

const PageRemote = React.lazy(() => import('app2/DummyPage'));

const DummyPageRemote = () => {
  const history = useHistory();

  return (
    <>
      <h1>Dummy Page Remote</h1>
      <div>
        <button type="button" onClick={() => history.push('/')}>
          Host
        </button>
      </div>
      <ModuleLoader
        errorFallback={<DummyErrorFallback />}
        fallback={<DummyFallback />}
      >
        <PageRemote />
      </ModuleLoader>
    </>
  );
};

export default DummyPageRemote;
