import React from 'react';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <div className='title'>{title.toUpperCase()}</div>
    <div className='preview'>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
