"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import TaskStats from "@/components/TaskStats";
import TaskForm from "@/components/TaskForm";
import TaskFilterBar from "@/components/TaskFilterBar";
import TaskList from "@/components/TaskList";
import DocumentationModal from "@/components/DocumentationModal";

export default function Home() {
  // Start with empty tasks (No example tasks)
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Prevents hydration mismatch with localStorage

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); 
  const [priorityFilter, setPriorityFilter] = useState("all"); 

  // Documentation Modal State
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  // -------------------------------------------------------------
  // LOCAL STORAGE PERSISTENCE (Core Client Requirement)
  // -------------------------------------------------------------
  
  // 1. Load data from browser when app starts
  useEffect(() => {
    const savedTasks = localStorage.getItem("brightedge_tasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Failed to load tasks");
      }
    }
    setIsLoaded(true);
  }, []);

  // 2. Automatically save data whenever tasks change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("brightedge_tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  // -------------------------------------------------------------
  // LOGIC HANDLERS
  // -------------------------------------------------------------
  const handleAddTask = (newTaskData) => {
    const newTask = {
      id: Date.now().toString(),
      title: newTaskData.title,
      description: newTaskData.description || "",
      priority: newTaskData.priority || "medium",
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  // -------------------------------------------------------------
  // COMPUTED / FILTERED TASKS
  // -------------------------------------------------------------
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && !task.completed) ||
      (statusFilter === "completed" && task.completed);

    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const hasCompletedTasks = completedTasks > 0;

  // Wait for local storage to load before rendering to prevent UI flash
  if (!isLoaded) return null;

  return (
    // Spiced up background: subtle radial gradient instead of flat color
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      <Header onOpenDocs={() => setIsDocsOpen(true)} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 relative">
        {/* Subtle background glow effect behind the main content */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          
          {/* Headline to make client requirements highly visible */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
              Operations Task Management
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Create tasks, track completion, and manage team workflow. 
              <strong className="text-indigo-400 font-medium"> </strong>
            </p>
          </div>

          <TaskStats totalTasks={totalTasks} completedTasks={completedTasks} />
          
          <TaskForm onAddTask={handleAddTask} />
          
          <TaskFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            priorityFilter={priorityFilter}
            onPriorityFilterChange={setPriorityFilter}
            onClearCompleted={handleClearCompleted}
            hasCompletedTasks={hasCompletedTasks}
          />
          
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </main>

      <DocumentationModal
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />
    </div>
  );
}
