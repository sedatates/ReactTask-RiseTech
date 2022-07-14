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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_SERVICES" });
    dispatch({ type: "FETCH_CATEGORIES" });
  }, []);

  const { services, categoriesState } = useAppSelector((reducer: any) => ({
    services: reducer.service.items,
    categoriesState: reducer.category.items,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RiseTechHeader title="RiseTech" subtitle="React Task" />
      </div>

      <div className={styles.newTaskContainer}>
        <RiseTechText text="Create New Job" />
        <RiseTechInput
          title="Job Name"
          placeholder="Please Enter Job Name"
          value={newTodo}
          onChange={setNewTodo}
          width="w80"
        />
        <RiseTechDropdown
          label="Job Priority"
          name="sedat"
          onChange={setNewTodoUrgent}
          width="w20"
          value="sedat"
        />
      </div>
    </div>
  );
};

export default Home;
