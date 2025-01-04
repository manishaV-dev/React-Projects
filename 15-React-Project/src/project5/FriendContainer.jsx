import { useState } from "react";
import "./friend.css";
import FriendItem from "./FriendItem";
import { data } from "./data";

function FriendContainer() {
  const [friend, setFriend] = useState(data);

  function handleList() {
    setFriend([]);
  }

  return (
    <>
      <div className="friends-container">
        <h2>
          I have {friend.length} {friend.length > 1 ? "friends" : "friend"}{" "}
        </h2>
        <FriendItem friend={friend} />
        {friend.length > 0 && (
          <button className="clear-button" onClick={handleList}>
            Clear All
          </button>
        )}
      </div>
    </>
  );
}

export default FriendContainer;
