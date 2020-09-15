import React, { useContext, useEffect } from "react";
import TasksList from "../tasks/TasksList";
import FormTask from "../tasks/FormTask";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import AuthContext from '../../context/auth/authContext';

const Projects = () => {

  //Extraccion del estado
  const authContext = useContext(AuthContext)
  const { authUser } = authContext

  useEffect(() => {
    authUser()
    //eslint-disable-next-line
  }, [])

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
