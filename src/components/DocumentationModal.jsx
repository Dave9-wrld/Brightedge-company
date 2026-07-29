"use client";

import React from "react";
import { X, BookOpen, Database, CheckCircle, ShieldCheck, Mail } from "lucide-react";

export default function DocumentationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                BrightTask Operations Guide
              </h2>
              <p className="text-xs text-slate-400">
                Prepared exclusively for BrightEdge Technologies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto text-xs text-slate-300 leading-relaxed">
          
          {/* Section 1: User Guide */}
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Managing Team Workflow
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 text-slate-300">
              <li>
                <strong className="text-white">Creating Tasks:</strong> Type the task title into the top creation box. Click on the input to expand it, allowing you to add optional action notes and set a priority level (High, Medium, Low).
              </li>
              <li>
                <strong className="text-white">Tracking Completion:</strong> Click the checkbox next to any active task to mark it as done. The system will immediately update your completion statistics and progress bar.
              </li>
              <li>
                <strong className="text-white">Search & Filter:</strong> Use the live search bar or status tabs (All, Active, Completed) to quickly find specific tasks or organize your workspace view.
              </li>
              <li>
                <strong className="text-white">Removing Tasks:</strong> Click the trash icon to remove an individual task. If you want to clean up your dashboard, use the "Clear Done" button to instantly remove all completed tasks.
              </li>
            </ul>
          </div>

          {/* Section 2: Data Persistence */}
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-indigo-400" /> Automatic Saving (Zero Data Loss)
            </h3>
            <p className="text-slate-300">
              You do not need to manually save your work. The system uses <strong className="text-white">Local Storage technology</strong> to automatically save your task data directly to your browser in real-time. If you refresh the page, close your browser, or lose internet connection, your tasks will remain exactly as you left them upon your return.
            </p>
          </div>

          {/* Section 3: Contact & Support */}
          <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-between text-indigo-300 mt-4">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="font-semibold text-white">Custom Developed Solution</p>
                <p className="text-[11px] text-indigo-300">Delivered for BrightEdge Technologies</p>
              </div>
            </div>
            <a
              href="mailto:contact@brightedge.tech"
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-xl text-[11px] font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contact Support
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-lg shadow-indigo-600/20 cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
