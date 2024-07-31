import React, { useState } from "react";
import UserListItem from "./UserListItem";
import styles from "./UserList.module.css";

const USERS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    imgSrc: "/user1.jpg",
    isMale: true,
    isSelected: false,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    imgSrc: "/user2.png",
    isMale: true,
    isSelected: false,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    age: 35,
    imgSrc: "/user3.jpg",
    isMale: false,
    isSelected: false,
  },
];

function UserList() {
  const [users, setUsers] = useState(USERS);

  const onSelect = (id) => {
    const copyUsers = [...users];
    const selectedUserIndex = users.findIndex((user) => user.id === id);
    copyUsers[selectedUserIndex].isSelected =
      !copyUsers[selectedUserIndex].isSelected;
    setUsers(copyUsers);
  };

  const onDelete = (event, id) => {
    event.stopPropagation();
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default UserList;
