import React from 'react';
import Feed from '../Feed/Feed';
import { useParams } from 'react-router-dom';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container main-container">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
