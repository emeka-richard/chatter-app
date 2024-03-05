import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  // Fetch the error details from useRouteError hook
  const error = useRouteError() as { status?: number, statusText?: string, message?: string };
  
  // Log the error details to the console
  console.error(error);

  return (
    <section id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* Display error status and message */}
      <p>{error.status}:  
        <i>{" " + (error.statusText || error.message)}</i>
      </p>

      {/* Add button for going back */}
      <button className='btn' onClick={() => window.history.back()}>
        Go back
      </button>
    </section>
  );
};

export default ErrorPage;
