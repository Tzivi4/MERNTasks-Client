import React, { useEffect } from 'react'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import useTasks from '../../../hooks/useTasks'
import TaskChip from '../TaskChip'
import TaskChipSkeleton from '../TaskChipSkeleton'
import { Add } from '../../Icons'
import DynamicButton from '../../UI/Buttons/DynamicButton'

const TasksList = () => {
  const { actualProject } = useProjects()
  const { tasks, loading, getTasks } = useTasks()

  const { accentColor, secondaryColor } = actualProject && actualProject.colors

  const backgrounGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`,
  }

  const { _id } = actualProject

  useEffect(() => {
    getTasks(_id)
  }, [])

  return (
    <div className={styles.listContainer}>
      <div className={styles.heading}>
        <span>
          {tasks && tasks.length} {tasks && tasks.length === 1 ? 'task' : 'tasks'}
        </span>
        <DynamicButton style={backgrounGradient}>
          Add <Add width={18} height={18} className={styles.addIcon} />
        </DynamicButton>
      </div>
      {loading ? (
        <ul className={styles.tasksList}>
          <TaskChipSkeleton />
          <TaskChipSkeleton />
          <TaskChipSkeleton />
        </ul>
      ) : (
        <ul className={styles.tasksList}>
          {tasks.map(task => (
            <TaskChip key={task._id} task={task} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TasksList