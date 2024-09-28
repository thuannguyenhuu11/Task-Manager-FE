import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';
import { useUserContext } from './userContext';
import toast from 'react-hot-toast';

const TasksContext = React.createContext();

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const TasksProvider = ({ children }) => {
  const userId = useUserContext().user._id;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});

  const [isEditing, setIsEditing] = useState(false);
  const [priority, setPriority] = useState('all');
  const [activeTask, setActiveTask] = useState(null);
  const [modalMode, setModalMode] = useState('');
  const [profileModal, setProfileModal] = useState(false);

  const openModalForAdd = () => {
    setModalMode('add');
    setIsEditing(true);
    setTask({});
  };

  const openModalForEdit = task => {
    setModalMode('edit');
    setIsEditing(true);
    setActiveTask(task);
  };

  const openProfileModal = () => {
    setProfileModal(true);
  };

  const closeModal = () => {
    setIsEditing(false);
    setProfileModal(false);
    setModalMode('');
    setActiveTask(null);
    setTask({});
  };

  // Get tasks
  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/tasks`);

      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error getting tasks', error);
    }
    setLoading(false);
  };

  // Get task
  const getTask = async taskId => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/task/${taskId}`);

      setTask(response.data);
    } catch (error) {
      console.error('Error getting task', error);
    }
    setLoading(false);
  };

  // Create task
  const createTask = async task => {
    setLoading(true);
    try {
      const res = await axios.post(`${serverUrl}/task/create`, task);

      setTasks([...tasks, res.data]);
      toast.success('Task created successfully');
    } catch (error) {
      console.error('Error creating task', error);
    }
    setLoading(false);
  };

  //Update task
  const updateTask = async task => {
    setLoading(true);
    try {
      const res = await axios.patch(`${serverUrl}/task/${task._id}`, task);

      // Update the task in the tasks array
      const newTasks = tasks.map(tsk => {
        return tsk._id === res.data._id ? res.data : tsk;
      });

      toast.success('Task updated successfully');

      setTasks(newTasks);
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  //Delete task
  const deleteTask = async taskId => {
    setLoading(true);

    try {
      await axios.delete(`${serverUrl}/task/${taskId}`);

      //Remove the tasks from the tasks array
      const newTasks = tasks.filter(tsk => tsk._id !== taskId);

      setTasks(newTasks);
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  const handleInput = name => e => {
    if (name === 'setTask') {
      setTask(e);
    } else {
      setTask({ ...task, [name]: e.target.value });
    }
  };

  // Get completed tasks
  const completedTasks = tasks.filter(task => task.completed);

  // Get pending tasks
  const activeTasks = tasks.filter(task => !task.completed);

  useEffect(() => {
    getTasks();
  }, [userId]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        task,
        tasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        priority,
        setPriority,
        handleInput,
        isEditing,
        setIsEditing,
        openModalForAdd,
        openModalForEdit,
        activeTask,
        closeModal,
        modalMode,
        openProfileModal,
        activeTasks,
        completedTasks,
        profileModal,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return React.useContext(TasksContext);
};
