import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, scl, age, img } = person;
        return (
          <article key={id} className='person'>
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <p>{scl}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
