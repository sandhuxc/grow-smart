import React from 'react';
import { Link } from 'react-router-dom';

export function MeetingLinksList({ links }) {
  return (
    <div>
      <h2>List of Shared Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
