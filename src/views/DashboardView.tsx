import React from 'react';
import { Server, Sun, Moon, Users2, Brain, Hotel, Microscope, MoreVertical, Calendar, Search, Plus, Zap, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import { SESSIONS, IND_SESSIONS } from '../constants';
import { motion } from 'motion/react';

export function DashboardView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      {/* Vitals Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">System Status</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">Operational</span>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg text-green-600 dark:text-green-400">
            <Server className="size-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Day Census</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">42 Active</span>
              <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">+12%</span>
            </div>
          </div>
          <Sun className="absolute right-0 bottom-0 size-24 -mb-4 -mr-4 opacity-5 text-slate-900 dark:text-white pointer-events-none" />
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Night Census</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">28 Active</span>
              <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">+5%</span>
            </div>
          </div>
          <Moon className="absolute right-0 bottom-0 size-24 -mb-4 -mr-4 opacity-5 text-slate-900 dark:text-white pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-9 flex flex-col gap-6">
          {/* Program Attendance */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Program Attendance</h3>
              <button className="text-sm text-primary font-medium hover:underline">View Full Report</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'DIOP', count: 12, icon: Users2, color: 'text-primary', bg: 'bg-primary/10', hover: 'hover:border-primary/50' },
                { label: 'DOP', count: 8, icon: Brain, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/20', hover: 'hover:border-purple-400' },
                { label: 'EIOP', count: 15, icon: Hotel, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/20', hover: 'hover:border-amber-400' },
                { label: 'EOP', count: 20, icon: Microscope, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/20', hover: 'hover:border-emerald-400' },
              ].map((prog) => (
                <div key={prog.label} className={`group bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 ${prog.hover} transition-colors shadow-sm`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{prog.label}</p>
                    <prog.icon className={`${prog.color} ${prog.bg} p-1.5 rounded-lg size-8`} />
                  </div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{prog.count}</p>
                  <p className="text-xs text-slate-500 mt-1">Checked in today</p>
                </div>
              ))}
            </div>
          </div>

          {/* Group Schedule */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col flex-1 min-h-[400px]">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="text-primary size-5" />
                Group Schedule
              </h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2 text-slate-400 size-4" />
                  <input 
                    className="pl-9 pr-4 py-1.5 text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary w-48 md:w-64" 
                    placeholder="Search sessions..." 
                    type="text" 
                  />
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
                  <Plus className="size-4" />
                  New Session
                </button>
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Group Name</th>
                    <th className="px-6 py-4">Therapist</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4 text-right">Count</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-800">
                  {SESSIONS.map((session) => (
                    <tr key={session.id} className="hover:bg-primary/5 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="px-6 py-4 font-mono font-medium text-slate-900 dark:text-slate-200">{session.time}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`size-2 rounded-full ${
                            session.program === 'DIOP' ? 'bg-blue-500' : 
                            session.program === 'DOP' ? 'bg-purple-500' : 
                            session.program === 'EIOP' ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}></span>
                          <span className="font-semibold text-slate-900 dark:text-white">{session.name}</span>
                          <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-1.5 rounded border border-slate-200 dark:border-slate-800">{session.program}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div 
                            className="size-6 rounded-full bg-slate-200 bg-center bg-cover" 
                            style={{ backgroundImage: `url(${session.therapistAvatar})` }}
                          />
                          <span className="text-slate-600 dark:text-slate-300">{session.therapist}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          session.status === 'In Progress' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          session.status === 'Scheduled' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-slate-900 dark:text-white">{session.count}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <MoreVertical className="size-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-center">
              <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">View All Sessions</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mr-2">
              <Zap className="size-4" />
              <span className="font-semibold uppercase text-xs tracking-wider">Quick Actions</span>
            </div>
            <div className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors whitespace-nowrap">
                <AlertCircle className="size-3" />
                3 Missing Progress Notes
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors whitespace-nowrap">
                <AlertCircle className="size-3" />
                Discharge Summary Due (J. Smith)
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors whitespace-nowrap">
                <Clock className="size-3" />
                Team Huddle in 30m
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Side Panels */}
        <div className="xl:col-span-3 flex flex-col gap-6">
          {/* IND Sessions */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users2 className="text-primary size-5" />
                IND Sessions
              </h3>
              <button className="size-6 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400">
                <Plus className="size-4" />
              </button>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {IND_SESSIONS.map((session) => (
                <div key={session.id} className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${session.status === 'Now' ? 'bg-primary/5 dark:bg-primary/10 border-l-4 border-primary' : ''}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">{session.time}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      session.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                      session.status === 'Now' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{session.name}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
                    <Hotel className="size-3" />
                    {session.count}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl text-center">
              <button className="text-xs font-semibold text-primary uppercase tracking-wide">View Calendar</button>
            </div>
          </div>

          {/* UA List Widget */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Microscope className="text-primary size-5" />
                UA List
              </h3>
              <span className="text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">12/15 Done</span>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {[
                { name: 'Michael Scott', done: true },
                { name: 'Jim Halpert', done: true },
                { name: 'Pam Beesly', done: false, priority: 'High' },
                { name: 'Dwight Schrute', done: false },
                { name: 'Andy Bernard', done: false },
              ].map((item, i) => (
                <label key={i} className={`flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors ${item.priority === 'High' ? 'bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={item.done} 
                    onChange={() => {}}
                    className="size-4 rounded border-slate-300 text-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-600" 
                  />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${item.done ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'} ${item.priority === 'High' ? 'font-bold' : ''}`}>
                      {item.name}
                    </p>
                    {item.priority && <p className="text-xs text-red-500 font-semibold">Priority: {item.priority}</p>}
                  </div>
                  {item.done && <CheckCircle2 className="text-green-500 size-4" />}
                </label>
              ))}
            </div>
            <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-center">
              <button className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
