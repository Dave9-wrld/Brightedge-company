"use client";

import React, { useState } from "react";
import { PlusCircle, Tag, AlignLeft, Type } from "lucide-react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (onAddTask) {
      onAddTask({
        title: title.trim(),
        description: description.trim(),
        priority,
      });
    }

    // Reset inputs after adding
    setTitle("");
    setDescription("");
    setPriority("medium");
    setIsExpanded(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl mb-6 backdrop-blur-sm transition-all"
    >
      <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
        <PlusCircle className="w-4 h-4 text-indigo-400" /> Create New Task
      </h2>

      <div className="space-y-3">
        {/* Title Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Type className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Task title (e.g., Update Q3 Operations Spreadsheets)..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            required
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all"
          />
        </div>

        {/* Collapsible Optional Fields */}
        {isExpanded && (
          <>
            {/* Description Textarea */}
            <div className="relative">
              <div className="absolute top-3 left-3.5 text-slate-500">
                <AlignLeft className="w-4 h-4" />
              </div>
              <textarea
                rows={3}
                placeholder="Optional description or action notes..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all resize-none"
              />
            </div>

            {/* Priority & Submit Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-1">
              {/* Priority Select */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-medium text-slate-400">Priority:</span>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" /> Add Task
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
}
