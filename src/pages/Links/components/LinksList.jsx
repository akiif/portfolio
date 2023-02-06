import React from 'react';
import LinksListFile from "../links-list";
import "../../../assets/css/links.css";

// import components
import LinksItem from './LinksItem';

function LinksList() {
  return (
    <section className='links-list'>
      {LinksListFile.map((link) => 
        <LinksItem 
          key={link.id}
          id={link.id}
          title={link.title}
          links={link.links}
        />
      )}
    </section>
  )
}

export default LinksList;