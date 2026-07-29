"use client";

import React from "react";
import { Search, Filter, Trash2 } from "lucide-react";

export default function TaskFilterBar({
  searchQuery = "",
  onSearchChange,
  statusFilter = "all",
  onStatusFilterChange,
  priorityFilter = "all",
  onPriorityFilterChange,
  onClearCompleted,
  hasCompletedTasks = false,
}) {
  return (
    <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6 backdrop-blur-sm shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Search Input */}
      <div className="relative w-full md:w-64">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          className="w-full pl-9 pr-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      {/* Filter Tabs & Controls */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end">
        {/* Status Filter Tabs */}
        <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700/80">
          {["all", "active", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => onStatusFilterChange && onStatusFilterChange(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer ${
                statusFilter === tab
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1 rounded-xl text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={priorityFilter}
            onChange={(e) => onPriorityFilterChange && onPriorityFilterChange(e.target.value)}
            className="bg-transparent text-slate-300 focus:outline-none cursor-pointer text-xs"
          >
            <option value="all" className="bg-slate-800">All Priorities</option>
            <option value="high" className="bg-slate-800">High</option>
            <option value="medium" className="bg-slate-800">Medium</option>
            <option value="low" className="bg-slate-800">Low</option>
          </select>
        </div>

        {/* Clear Completed Action */}
        {hasCompletedTasks && (
          <button
            onClick={onClearCompleted}
            className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 px-2.5 py-1.5 rounded-xl transition-all cursor-pointer"
            title="Delete all completed tasks"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear Done</span>
          </button>
        )}
      </div>
    </div>
  );
}
