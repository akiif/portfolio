import React from 'react'

function LinksItem({ id, title, links }) {
  return (
    <div className='link-item'>
      <div className="link-title">
        <h3>{id}. {title}</h3>
      </div>
      <div className="link-links">
        {
          links.map(link => (
            <div className='links-div'>
              <p className='links-p'>
                <a className='links-a' href={link} target="_blank" rel="noopener noreferrer" aria-label="Link">{link}</a>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LinksItem;