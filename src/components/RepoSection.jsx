import React, { useState, useEffect, useMemo } from 'react';
import RepoCard from './RepoCard';
import { HashLoader } from 'react-spinners';
import { fetchRepos } from '../data/fetchRepos';
import Title from './Title';

function RepoSection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = 'Brime-lee';

  useEffect(() => {
    setLoading(true);
    fetchRepos(username)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const RepoItem = useMemo(
    () =>
      data.map(({ name, description, id, html_url, visibility }) => (
        <div key={id}>
          <RepoCard
            name={name}
            description={description}
            url={html_url}
            visibility={visibility}
          />
        </div>
      )),
    [data]
  );

  return (
    <div className='my-30'>
      <Title> Repositories</Title>

      <div className='flex flex-col md:flex-row items-center justify-center '>
        {error ? (
          <div className='error-overlay p-4 bg-red-500 rounded-lg animate-bounce text-center text-xl font-bold'>
            <p>Failed to load repositories. Please try again later.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {loading ? (
              <div className='loading-overlay'>
                <HashLoader color={'#fa72b6'} loading={loading} />
              </div>
            ) : RepoItem.length > 0 ? (
              RepoItem
            ) : (
              <p>No repositories found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RepoSection;
