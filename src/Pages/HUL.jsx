import React, { useEffect } from 'react';

export default function HUL({ from, till }) {
  let list = Array.from({ length: till }, (_, i) => i + Number(from));
  console.log(list);
  let count = 0;

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.reload(false);
  //   }, 10000);
  // }, []);

  return (
    <div className='HUL'>
      {list.map((item) => (
        <div>
          <a
            target='_blank'
            href={`https://leveredge${item}.hulcd.com/rsunify/`}
          >
            <p>{`leveredge${item}.hulcd.com/rsunify/`}</p>
          </a>

          <iframe
            key={item}
            src={`https://leveredge${item}.hulcd.com/rsunify/`}
            frameBorder='no'
            loading='eager'
            title={`app server ${item}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
}
