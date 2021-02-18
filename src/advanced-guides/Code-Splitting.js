import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function ErrorBoundarie() {
  return (
    <div>
      <p>The page you requested did not load correctly</p>
      <button>Go back to main page</button>
    </div>
  );
}

function MyComponent() {
  return (
    <div>
      <ErrorBoundarie>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </ErrorBoundarie>
    </div>
  );
}


export default MyComponent