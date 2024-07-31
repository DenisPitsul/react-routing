import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import userImage from "./userImage.jpg";
import styles from "./UserCard.module.css";

function UserCard() {
  const user = {
    fullName: "John Dou",
    userName: "@johndou",
    tweets: 1337,
    following: 561,
    followers: 718,
    gender: "male",
  };

  const [followersCount, setFollowersCount] = useState(user.followers);
  const [isStarClicked, setIsStarClicked] = useState(false);

  const userCardSwadowStyle = {
    boxShadow: `0 0 20px 5px ${user.gender === "male" ? "blue" : "violet"}`,
  };

  const starStyle = {
    color: isStarClicked ? "yellow" : "#333333",
  };

  function onAddClick() {
    setFollowersCount((prevValue) => prevValue + 1);
  }

  function onStarClick() {
    setIsStarClicked((prevValue) => !prevValue);
  }

  return (
    <article className={styles.userCard} style={userCardSwadowStyle}>
      <div className={styles.userImageWrapper}>
        <div className={styles.backgroundColor}></div>
        <img className={styles.userImage} src={userImage} alt={user.fullName} />
        <IoIosStar
          onClick={onStarClick}
          className={styles.starIcon}
          style={starStyle}
        ></IoIosStar>
        <div className={styles.userContent}>
          <h2 className={styles.fullName}>{user.fullName}</h2>
          <p className={styles.userName}>{user.userName}</p>
          <button onClick={onAddClick} className={styles.addButton}>
            +
          </button>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Tweets</h3>
          <p className={styles.statisticValue}>{user.tweets}</p>
        </div>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Following</h3>
          <p className={styles.statisticValue}>{user.following}</p>
        </div>
        <div className={styles.userInfoItem}>
          <h3 className={styles.statisticTitle}>Followers</h3>
          <p className={styles.statisticValue}>{followersCount}</p>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
