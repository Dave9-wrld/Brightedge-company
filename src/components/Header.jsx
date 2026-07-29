"use client";

import React from "react";
import { CheckSquare, HelpCircle, ShieldCheck } from "lucide-react";

export default function Header({ onOpenDocs }) {
  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white py-4 px-6 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Side: Logo & Client Branding */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400">
            <CheckSquare className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">
                BrightEdge
              </h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> BrightEdge
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Operations Task & Activity Tracker
            </p>
          </div>
        </div>

        {/* Right Side: Quick Action & Docs Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDocs}
            className="flex items-center gap-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span>User & Maintenance Guide</span>
          </button>
        </div>
      </div>
    </header>
  );
}
