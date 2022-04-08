import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1>This Link is broken</h1>
      <h2>
        <Link to='/'>Homepage</Link>
      </h2>
    </div>
  );
}
