import React from 'react';

const Index = (props) => {
  return (
    <>
      <section id={props._id}>
        <div className={props._class}>
          {props.children}
        </div>
      </section>
    </>
  );
};

export default Index;

