import type { NextPage } from "next";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import {
  RiseTechDashboard,
  RiseTechDialog,
  RiseTechDropdown,
  RiseTechHeader,
  RiseTechInput,
  RiseTechText,
} from "../components";
import RiseTechButton from "../components/RiseTechButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addTodo,
  deleteTodo,
  editTodo,
  persistLocal,
} from "../redux/features/todosSlice";
import { setTimeout } from "timers";

const { v4: uuidv4 } = require("uuid");

const Home: NextPage = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTodoUrgent, setNewTodoUrgent] = useState<string>("Choose");

  const [filter, setFilter] = useState<string>("All");
  const [searchText, setSearchText] = useState<string>("");

  const [isEditingDialogVisible, setIsEditingDialogVisible] =
    useState<boolean>(false);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] =
    useState<boolean>(false);

  const [editingTodo, setEditingTodo] = useState<any>({});
  const [deletingTodo, setDeletingTodo] = useState<any>({});

  const [alertvisible, setAlertvisible] = useState<boolean>(false);
  const [successvisible, setSuccessvisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { todosState, wholeState } = useAppSelector((reducer: any) => ({
    todosState: reducer.todos.items,
    wholeState: reducer,
  }));

  const [todos, setTodos] = useState<any>();
  useEffect(() => {
    sortingTodos(todosState, filter, searchText);
  }, [todosState, filter, searchText]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  const getLocalStorage = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      dispatch(persistLocal(JSON.parse(todos)));
    }
  };

  const sortingTodos = (
    todos: Array<any>,
    filter: string,
    searchText: string
  ) => {
    const sortedTodos = [];

    if (filter === "All" || filter === "Urgent") {
      sortedTodos.push(
        ...todos.filter((todo: any) => todo.jobUrgency === "Urgent")
      );
    }
    if (filter === "All" || filter === "Important") {
      sortedTodos.push(
        ...todos.filter((todo: any) => todo.jobUrgency === "Important")
      );
    }
    if (filter === "All" || filter === "Regular") {
      sortedTodos.push(
        ...todos.filter((todo: any) => todo.jobUrgency === "Regular")
      );
    }

    if (searchText.length > 0) {
      const findedTodos = sortedTodos.filter((todo) => {
        return todo.jobName.toLowerCase().includes(searchText.toLowerCase());
      });
      setTodos(findedTodos);
    } else setTodos(sortedTodos);
  };

  const handleCreateTodo = () => {
    if (newTodo.length > 0 && newTodoUrgent !== "Choose") {
      const param = {
        jobId: uuidv4(),
        jobName: newTodo,
        jobUrgency: newTodoUrgent,
      };
      dispatch(addTodo(param));
      setNewTodo("");
      setSuccessvisible(true);
      setTimeout(() => {
        setSuccessvisible(false);
      }, 2000);
    } else {
      setAlertvisible(true);
      setTimeout(() => {
        setAlertvisible(false);
      }, 2000);
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
            subtext="empty job name or priority!!"
            alertvisible={alertvisible}
            successvisible={successvisible}
            successtext="Job Created Successfully"
          />
          <RiseTechDropdown
            label="Job Priority"
            onChange={setNewTodoUrgent}
            value={newTodoUrgent}
            type="box"
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
        <div className={styles.filterContainer}>
          <RiseTechInput onChange={setSearchText} placeholder="Job Name" />
          <RiseTechDropdown onChange={setFilter}></RiseTechDropdown>
        </div>
        <RiseTechDashboard
          data={todos}
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
        onChange={(e: any) =>
          setEditingTodo({ ...editingTodo, ["jobUrgency"]: e })
        }
        disabled={editingTodo.jobUrgency === "Choose"}
      />
    </div>
  );
};

export default Home;
