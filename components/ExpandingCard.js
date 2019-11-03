import React from 'react';
import Link from 'next/link'

function ExpandingCard(props) {
  return (
    <>
      <Link href={props.href}>
        <div className="card" >
          <h3 className="title">
            {props.title}
          </h3>
          <div className="content">
            {props.children}
          </div>
          <p></p>
        </div>
      </Link>
      <style jsx>{`
    .card {
        padding: 18px 18px 24px;
        margin: 10px 0;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        cursor: pointer;
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