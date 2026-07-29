"use client";

import React from "react";
import TaskItem from "./TaskItem";
import { Inbox } from "lucide-react";

export default function TaskList({ tasks = [], onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-10 text-center flex flex-col items-center justify-center my-4">
        <div className="p-4 bg-slate-800/60 rounded-2xl text-slate-500 mb-3 border border-slate-700/50">
          <Inbox className="w-8 h-8 text-indigo-400/80" />
        </div>
        <h4 className="text-base font-semibold text-slate-200">No tasks found</h4>
        <p className="text-xs text-slate-400 max-w-sm mt-1">
          Your task list is clear! Add a new task above or adjust your search filter to display tasks.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
