import type { NextPage } from "next";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  RiseTechDropdown,
  RiseTechHeader,
  RiseTechInput,
  RiseTechText,
} from "../components";
import RiseTechButton from "../components/RiseTechButton";

/* const dispatch = useAppDispatch();
  useEffect(() => {}, []);

  const { services, categoriesState } = useAppSelector((reducer: any) => ({
    services: reducer.service.items,
    categoriesState: reducer.category.items,
  }));
   */

const Home: NextPage = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTodoUrgent, setNewTodoUrgent] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  console.log("todo", newTodo, "urgen", newTodoUrgent);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RiseTechHeader title="RiseTech" subtitle="React Task" />
      </div>

      <div className={styles.newTaskContainer}>
        <RiseTechText text="Create New Job" style={styles.title} />
        <div className={styles.newTaskInner}>
          <RiseTechInput
            title="Job Name"
            value={newTodo}
            onChange={setNewTodo}
          />
          <RiseTechDropdown label="Job Priority" onChange={setNewTodoUrgent} />
          <RiseTechButton buttonText="Create" />
        </div>
      </div>

      <div className={styles.todoListContainer}>
        <RiseTechText text="Todo List" style={styles.title} />
        <div className={styles.todoListInner}>
          <div className={styles.todoList}>
            {todos.map((todo, index) => (
              <div key={index} className={styles.todo}>
                {todo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
