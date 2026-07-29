"use client";

import React from "react";
import { ListTodo, Clock, CheckCircle2, TrendingUp } from "lucide-react";

export default function TaskStats({ totalTasks = 0, completedTasks = 0 }) {
  const pendingTasks = Math.max(0, totalTasks - completedTasks);
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm shadow-lg mb-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Total Card */}
        <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Tasks</p>
            <h3 className="text-2xl font-bold text-white mt-1">{totalTasks}</h3>
          </div>
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
            <ListTodo className="w-5 h-5" />
          </div>
        </div>

        {/* Pending Card */}
        <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-amber-400 uppercase tracking-wider">In Progress</p>
            <h3 className="text-2xl font-bold text-amber-400 mt-1">{pendingTasks}</h3>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* Completed Card */}
        <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Completed</p>
            <h3 className="text-2xl font-bold text-emerald-400 mt-1">{completedTasks}</h3>
          </div>
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="mt-2 pt-3 border-t border-slate-800">
        <div className="flex justify-between items-center text-xs mb-1.5">
          <span className="text-slate-400 font-medium flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" /> Team Workflow Completion Rate
          </span>
          <span className="font-semibold text-indigo-400">{percentage}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
