import React, { useState } from 'react';
import Link from 'next/link'
import TweenOne from 'rc-tween-one';

function ExpandingCard(props) {
  const [animate, setAnimate] = useState(false);
  function handleMouseOver() {
    setAnimate(true);
  }
  function handleMouseOut() {
    setAnimate(false);
  }
  return (
    <>
      <TweenOne
        reverse={!animate}
        animation={{
          duration: 500,
          scale: 1.5,
        }}
      >
        <Link href={props.href}>
          <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h3 className="title">
              {props.title}
            </h3>

            <div className="content">
              {props.children}
            </div>
          </div>
        </Link>
      </TweenOne>
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
        background: white;
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