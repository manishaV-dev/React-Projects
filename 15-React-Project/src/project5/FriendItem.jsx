import React from "react";

function FriendItem({ friend }) {
//   console.log(friend);

  return (
    <>
      <div className="friend-list">
        {friend.map((item,index) => (
          <div className="friend-card" key={index}>
            <img src={item.image} alt="" />
            <div>
              <h4>{item.name}</h4>
              <p>Age: {item.age} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FriendItem;
