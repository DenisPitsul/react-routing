import React from "react";
import classNames from "classnames";
import { MdDelete } from "react-icons/md";
import styles from "./UserListItem.module.css";

function UserListItem({
  user: { id, firstName, lastName, age, imgSrc, isMale, isSelected },
  onDelete,
  onSelect,
}) {
  const itemClassNames = classNames(styles.item, {
    [styles.maleItem]: isMale,
    [styles.femaleItem]: !isMale,
    [styles.selectedItem]: isSelected,
  });

  return (
    <li className={itemClassNames} onClick={() => onSelect(id)}>
      <img
        className={styles.img}
        src={imgSrc}
        alt={`${firstName} ${lastName}`}
      />
      <div className={styles.infoWrapper}>
        <h2 className={styles.name}>
          {firstName} {lastName}
        </h2>
        <p className={styles.age}>Age: {age}</p>
      </div>
      <MdDelete className={styles.deleteBtn} onClick={(e) => onDelete(e, id)} />
    </li>
  );
}

export default UserListItem;
