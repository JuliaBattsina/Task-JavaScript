import React, { useState, useEffect } from 'react';
import UserComponents from './UserComponents';
import RepoComponents from './RepoComponents';

function Inform({ wordSubmitted }) {
  const [information, setInformation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!wordSubmitted) return;

      try {
        const { inputValue, selectValue } = wordSubmitted;
        const url = selectValue === 'user'
          ? `https://api.github.com/users/${inputValue}`
          : `https://api.github.com/repos/${inputValue}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setInformation(data);
        setError('');
      } catch (error) {
        handleError();
      }
    };

    fetchData();
  }, [wordSubmitted]);

  const handleError = () => {
    setError('Failed to fetch data. Please check your input.');
    setInformation(null);
  };

  return (
    <div className="App">
      {error && <p>{error}</p>}
      {information && (
        <>
          {wordSubmitted.selectValue === 'user' ? (
            <UserComponents
              userName={information.name}
              repos={information.public_repos}
            />
          ) : (
            <RepoComponents
              repoName={information.name}
              stars={information.stargazers_count}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Inform;