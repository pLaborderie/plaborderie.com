import React from 'react';

function ExpandingCard(props) {
  return (
    <>
      <a className="card" href={props.href}>
        <h3 className="title">
          {props.title}
        </h3>
        <div className="content">
          {props.children}
        </div>
        <p></p>
      </a>
      <style jsx>{`
    .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card > .title {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card > .content {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </>
  )
}

export default ExpandingCard;