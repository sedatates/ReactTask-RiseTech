import type { NextPage } from "next";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  RiseTechDashboard,
  RiseTechDialog,
  RiseTechDropdown,
  RiseTechHeader,
  RiseTechInput,
  RiseTechText,
} from "../components";
import RiseTechButton from "../components/RiseTechButton";

import { addTodo, deleteTodo, editTodo } from "../redux/features/todosSlice";

const Home: NextPage = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTodoUrgent, setNewTodoUrgent] = useState<string>("Choose");
  const [isEditingDialogVisible, setIsEditingDialogVisible] =
    useState<boolean>(false);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] =
    useState<boolean>(false);
  const [editingTodo, setEditingTodo] = useState<any>({});
  const [deletingTodo, setDeletingTodo] = useState<any>({});

  const dispatch = useAppDispatch();

  const { todosState, wholeState } = useAppSelector((reducer: any) => ({
    todosState: reducer.todos.items,
    wholeState: reducer,
  }));

  useEffect(() => {}, [wholeState]);

  const sortingTodos = (todos: any) => {
    return todos.sort((a: any, b: any) => {
      if (a.jobUrgency === "Urgent") {
        return -1;
      } else if (b.jobUrgency === "Urgent") {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const handleCreateTodo = () => {
    if (newTodo.length > 0 && newTodoUrgent !== "Choose") {
      const param = { jobName: newTodo, jobUrgency: newTodoUrgent };
      dispatch(addTodo(param));
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (item: any) => {
    dispatch(deleteTodo(item));
    setIsDeleteDialogVisible(false);
  };

  const handleEditTodo = (item: any) => {
    dispatch(editTodo(item));
    setIsEditingDialogVisible(false);
  };

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
          <RiseTechDropdown
            label="Job Priority"
            onChange={setNewTodoUrgent}
            value={newTodoUrgent}
          />
          <RiseTechButton
            buttonText="Create"
            onClick={handleCreateTodo}
            type="contained"
          />
        </div>
      </div>

      <div className={styles.todoListContainer}>
        <RiseTechText text="Job List" style={styles.title} />
        <RiseTechDashboard
          data={todosState}
          deleteTodo={(item) => {
            setIsDeleteDialogVisible(true);
            setDeletingTodo(item);
          }}
          editTodo={(item) => {
            setIsEditingDialogVisible(true);
            setEditingTodo(item);
          }}
        />
      </div>

      <RiseTechDialog
        isVisible={isDeleteDialogVisible}
        type="delete"
        handleClose={() => setIsDeleteDialogVisible(false)}
        handleSubmit={() => handleDeleteTodo(deletingTodo)}
      />

      <RiseTechDialog
        isVisible={isEditingDialogVisible}
        type="edit"
        handleClose={() => setIsEditingDialogVisible(false)}
        handleSubmit={() => handleEditTodo(editingTodo)}
        onChange={(e) =>
          setEditingTodo({ ...editingTodo, [jobName]: e.target.value })
        }
      />
    </div>
  );
};

export default Home;
