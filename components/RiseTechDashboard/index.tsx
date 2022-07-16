import React from "react";
import RiseTechButton from "../RiseTechButton";
import styles from "./styles.module.scss";

type Props = {
  data: any;
  deleteTodo: (item: any) => void;
  editTodo: (item: any) => void;
};

const RiseTechDashboard: React.FC<Props> = ({ data, deleteTodo, editTodo }) => {
  return (
    <div className={styles.container}>
      <table className={styles.dashboard}>
        <thead className={styles.header}>
          <tr className={styles.cell}>
            <th className={styles.item1}>Job Name</th>
            <th className={styles.item2}>Priority</th>
            <th className={styles.item3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => (
            <tr key={row.name} className={styles.cell}>
              <td className={styles.item1}>{row.jobName}</td>
              <td className={styles.item2}>{row.jobUrgency}</td>
              <td className={styles.item3}>
                <RiseTechButton
                  type="edit"
                  onClick={() => editTodo(row)}
                />
                <RiseTechButton type="delete" onClick={() => deleteTodo(row)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiseTechDashboard;
