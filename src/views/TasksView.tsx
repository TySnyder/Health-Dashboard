import React, { useState } from 'react';
import { CheckCircle2, Trash2, Plus, Download, Circle, Check } from 'lucide-react';
import { TASKS } from '../constants';
import { motion } from 'motion/react';

export function TasksView() {
  const [tasks, setTasks] = useState(TASKS);
  const [newTask, setNewTask] = useState('');

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTask,
      completed: false,
      priority: 'Routine' as const
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed, completedAt: !t.completed ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : undefined } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full overflow-hidden"
    >
      {/* Dashboard Header */}
      <div className="py-6 shrink-0">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">EOS & Daily Tasks</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Manage session workflows and end-of-shift reporting.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-white dark:bg-[#15232d] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              <Download className="size-4" />
              <span className="hidden sm:inline">Export Report</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
              <Plus className="size-4" />
              <span className="hidden sm:inline">New Session</span>
            </button>
          </div>
        </div>
      </div>

      {/* Split View Container */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 pb-6 overflow-hidden">
        {/* Left Column: To Be Done */}
        <section className="flex-1 flex flex-col bg-white dark:bg-[#15232d] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-[#15232d] z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Circle className="text-primary size-5" />
                  To Be Done
                </h3>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">{activeTasks.length}</span>
              </div>
            </div>
            {/* Quick Add Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Plus className="size-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                className="block w-full pl-10 pr-24 py-3 bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-primary transition-all" 
                placeholder="Add new task (e.g., Check Vitals - Room 104)..." 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
              />
              <button 
                onClick={handleAddTask}
                className="absolute inset-y-1 right-1 px-3 bg-white dark:bg-[#15232d] text-xs font-bold text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700 shadow-sm hover:text-primary hover:border-primary transition-colors"
              >
                Enter ↵
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <div className="flex flex-col gap-1">
              {activeTasks.map((task) => (
                <div key={task.id} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="size-5 border-2 border-slate-300 dark:border-slate-600 rounded bg-transparent flex items-center justify-center transition-all"
                  >
                    <Check className="size-3 text-white opacity-0" />
                  </button>
                  <div className="flex-1 min-w-0" onClick={() => toggleTask(task.id)}>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">{task.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {task.location && <span className="text-xs text-slate-500 dark:text-slate-400">{task.location}</span>}
                      {task.location && task.priority && <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>}
                      {task.priority && (
                        <span className={`text-xs font-medium ${
                          task.priority === 'High' ? 'text-orange-500' : 
                          task.priority === 'EOS' ? 'text-blue-500' : 'text-slate-400'
                        }`}>
                          {task.priority} Priority
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Completed Today */}
        <section className="flex-1 flex flex-col bg-slate-50/50 dark:bg-[#0c161b] rounded-xl shadow-inner border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-[#0c161b] backdrop-blur-sm z-10">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="text-green-500 size-5" />
                Completed Today
              </h3>
              <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold px-2 py-1 rounded-full">{completedTasks.length}</span>
            </div>
            <button 
              onClick={() => setTasks(tasks.filter(t => !t.completed))}
              className="text-xs font-semibold text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <Trash2 className="size-3" />
              Clear Completed
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <div className="flex flex-col gap-1">
              {completedTasks.map((task) => (
                <div key={task.id} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors cursor-pointer opacity-75 hover:opacity-100">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="size-5 border-2 border-green-500 rounded bg-green-500 flex items-center justify-center transition-all"
                  >
                    <Check className="size-3 text-white" />
                  </button>
                  <div className="flex-1 min-w-0" onClick={() => toggleTask(task.id)}>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 line-through truncate">{task.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-slate-400 dark:text-slate-500">Completed at {task.completedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer Summary */}
      <footer className="bg-white dark:bg-[#15232d] border-t border-slate-200 dark:border-slate-800 px-6 py-2 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center shrink-0">
        <div className="flex gap-4">
          <span><strong>{activeTasks.length}</strong> Pending</span>
          <span><strong>{completedTasks.length}</strong> Completed</span>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="text-green-600 dark:text-green-400">
            {Math.round((completedTasks.length / (tasks.length || 1)) * 100)}% Efficiency Rate
          </span>
        </div>
        <div className="hidden sm:block">
          System Status: <span className="text-green-600 dark:text-green-400 font-bold">Online</span>
        </div>
      </footer>
    </motion.div>
  );
}
