
import React, { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthProvider";
import { GetlocalStorage } from '../../Utils/LocalStorage';

const TaskList = (props) => {
  const [details, setDetails] = useState(props.Details || []);
  const { employees } = GetlocalStorage()

const recalcCounters = (tasks) => {
  return {
    new: tasks.filter(t => t.NewTask).length,
    active: tasks.filter(t => t.active).length,
    completed: tasks.filter(t => t.CompletedTask).length,
    failed: tasks.filter(t => t.FailedTask).length,
  };
};

const updateTaskHandler = (title, action) => {
  const index = details.task.findIndex(n => n.TaskTitle === title);
  if (index === -1) return;

  let ChangedTask = { ...details.task[index] };

  switch (action) {
    case "accept":
      ChangedTask = { ...ChangedTask, NewTask: false, active: true };
      break;
    case "reject":
      ChangedTask = { ...ChangedTask, NewTask: false, active: false, FailedTask: true };
      break;
    case "complete":
      ChangedTask = { ...ChangedTask, active: false, CompletedTask: true };
      break;
    case "fail":
      ChangedTask = { ...ChangedTask, active: false, FailedTask: true };
      break;
    default:
      return;
  }

  const updatedTasks = [...details.task];
  updatedTasks.splice(index, 1, ChangedTask);

  // ✅ recalc counters from updated tasks
  const updatedCounters = recalcCounters(updatedTasks);

  const tempdetails = { ...details, task: updatedTasks, taskCounter: updatedCounters };

  setDetails(tempdetails);
  props.updateDets(tempdetails);
};

const Handlers = {
  AcceptHandler: (title, dets) => updateTaskHandler(title, "accept"),
  RejectHandler: (title, dets) => updateTaskHandler(title, "reject"),
  completedHandler: (title, dets) => updateTaskHandler(title, "complete"),
  Failedhandler: (title, dets) => updateTaskHandler(title, "fail"),
};



  return (
    <>
      <div className="mt-6">
        <h2 className="font-bold mb-3 text-center text-3xl text-white bg-yellow-200">Tasks</h2>
        <div className="flex flex-nowrap gap-5 w-full px-4 py-3 overflow-x-auto ">
          {details.task.map((n, idx) => (
            <div key={`new-task-${idx}`} className="w-[300px] rounded-2xl h-[300px] bg-gray-500 text-white flex-shrink-0">
              <div className="flex justify-between items-center py-2 px-3">
                <h1 className="bg-red-600 rounded-xl px-3 py-2 font-bold text-white">{Object.keys(n).find(key => n[key] === true)}</h1>
                <h3 className="text-xl font-medium text-gray-400">{n.TaskDate}</h3>
              </div>
              <h1 className="mt-5 font-semibold text-3xl">{n.TaskTitle}</h1>
              <p className="mt-5 text-sm">{n.TaskDescription}</p>

              {(n.NewTask) ?

                <div className="flex justify-between items-center px-5 py-3">
                  <button onClick={(e) => Handlers.AcceptHandler(n.TaskTitle, e)} className="bg-yellow-400 text-black font-medium rounded-full px-2 py-1">Accept</button>
                  <button onClick={(e) => Handlers.RejectHandler(n.TaskTitle, e)} className="bg-red-500 text-white font-medium rounded-full px-2 py-1">Reject</button>
                </div>
                : (n.active) ?

                  <div className="flex justify-between items-center px-5 py-3">
                    <button onClick={(e) => Handlers.completedHandler(n.TaskTitle, e)} className="bg-yellow-400 text-black font-medium rounded-full px-2 py-1">Mark As Completed</button>
                    <button onClick={(e) => Handlers.Failedhandler(n.TaskTitle, e)} className="bg-red-500 text-white font-medium rounded-full px-2 py-1">Mark as failed</button>
                  </div>
                  : ``}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
