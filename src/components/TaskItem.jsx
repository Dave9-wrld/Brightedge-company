"use client";

import React, { useState } from "react";
import { Check, Trash2, ChevronDown, ChevronUp, Calendar, AlertCircle } from "lucide-react";

export default function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!task) return null;

  const { id, title, description, priority = "medium", completed = false, createdAt } = task;

  // Priority Badge Styling
  const priorityConfig = {
    high: {
      label: "High Priority",
      badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    medium: {
      label: "Medium",
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    low: {
      label: "Low",
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
  };

  const currentPriority = priorityConfig[priority] || priorityConfig.medium;

  return (
    <div
      className={`group w-full bg-slate-900/80 border transition-all duration-200 rounded-2xl p-4 shadow-sm hover:shadow-md backdrop-blur-sm ${
        completed
          ? "border-slate-800/60 bg-slate-950/40 opacity-75"
          : "border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Left Side: Checkbox & Content */}
        <div className="flex items-start gap-3.5 flex-1 min-w-0">
          {/* Custom Checkbox Toggle */}
          <button
            type="button"
            onClick={() => onToggleComplete && onToggleComplete(id)}
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
              completed
                ? "bg-emerald-500 border-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/30"
                : "border-slate-700 bg-slate-800/80 hover:border-indigo-500"
            }`}
            aria-label={completed ? "Mark incomplete" : "Mark complete"}
          >
            {completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </button>

          {/* Title & Badge */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className={`text-sm font-medium leading-snug break-words transition-all ${
                  completed ? "line-through text-slate-500" : "text-slate-100"
                }`}
              >
                {title}
              </h3>

              {/* Priority Tag */}
              <span
                className={`text-[10px] font-semibold border px-2 py-0.5 rounded-full uppercase tracking-wider ${currentPriority.badge}`}
              >
                {currentPriority.label}
              </span>
            </div>

            {/* Created Timestamp */}
            {createdAt && (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Expand & Delete Buttons */}
        <div className="flex items-center gap-1">
          {description && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              title={isExpanded ? "Collapse details" : "View description"}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={() => onDeleteTask && onDeleteTask(id)}
            className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expanded Description View */}
      {isExpanded && description && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed pl-8">
          <p className="whitespace-pre-line">{description}</p>
        </div>
      )}
    </div>
  );
}
