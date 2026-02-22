import React from 'react';
import { Phone, PhoneCall, CheckCircle2, AlertCircle, Clock, TrendingUp, TrendingDown, Filter, Download, Plus, ChevronDown, MoreVertical } from 'lucide-react';
import { CALLS } from '../constants';
import { motion } from 'motion/react';

export function CallListView() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col gap-8"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Daily Reminders & Call List</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Manage patient outreach for today's sessions.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white dark:bg-[#1a2c35] border border-slate-200 dark:border-slate-700 rounded-lg p-1">
            <button className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">Today</button>
            <button className="px-3 py-1.5 rounded-md text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Tomorrow</button>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-primary/30">
            <Plus className="size-5" />
            <span>Add Manual Call</span>
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Calls', value: 45, trend: '+2%', trendUp: true, icon: Phone, color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/30' },
          { label: 'Remaining', value: 12, sub: 'To do', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/30', ring: 'ring-1 ring-primary/20' },
          { label: 'Completed', value: 33, trend: '-5%', trendUp: false, icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
          { label: 'High Priority', value: 5, sub: 'Needs action', icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/30' },
        ].map((kpi) => (
          <div key={kpi.label} className={`bg-white dark:bg-[#1a2c35] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm ${kpi.ring || ''}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{kpi.label}</span>
              <span className={`p-1.5 ${kpi.bg} ${kpi.color} rounded-lg`}>
                <kpi.icon className="size-5" />
              </span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">{kpi.value}</span>
              {kpi.trend && (
                <span className={`text-sm font-medium mb-1 flex items-center ${kpi.trendUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}`}>
                  {kpi.trendUp ? <TrendingUp className="size-4 mr-1" /> : <TrendingDown className="size-4 mr-1" />}
                  {kpi.trend}
                </span>
              )}
              {kpi.sub && <span className="text-slate-400 text-sm font-medium mb-1">{kpi.sub}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Filters & Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a2c35] border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors">
            <Filter className="size-4" />
            Filter List
          </button>
          <div className="h-9 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-[#1a2c35] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
              <option>All Therapists</option>
              <option>Dr. Smith</option>
              <option>Lcsw. Jones</option>
              <option>Dr. Ray</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 size-4 text-slate-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-[#1a2c35] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
              <option>All Programs</option>
              <option>IOP</option>
              <option>PHP</option>
              <option>Group Therapy</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 size-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a2c35] border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <Download className="size-4" />
          Export
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-[#1a2c35] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#15232b] border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-24">Time</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider min-w-[160px]">Client Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider min-w-[140px]">Phone Number</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Therapist</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Program / Location</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider min-w-[180px]">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center w-20">Called</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {CALLS.map((call) => (
                <tr key={call.id} className={`group hover:bg-primary/5 transition-colors ${
                  call.status === 'Left Voicemail' ? 'bg-orange-50/30 dark:bg-orange-900/10' :
                  call.status === 'No Answer' ? 'bg-red-50/30 dark:bg-red-900/10' :
                  call.status === 'Scheduled' ? 'bg-emerald-50/20 dark:bg-emerald-900/10 opacity-75' : ''
                }`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400 font-mono">{call.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 mr-3 text-xs font-bold">
                        {call.patientInitials}
                      </div>
                      <div className={`text-sm font-semibold text-slate-900 dark:text-white ${call.status === 'Scheduled' ? 'line-through decoration-slate-400' : ''}`}>
                        {call.patientName}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors" href={`tel:${call.phone}`}>
                      <PhoneCall className="size-4 text-slate-400" />
                      {call.phone}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{call.therapist}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      call.program.includes('PHP') ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-100 dark:border-blue-800' :
                      call.program.includes('IOP') ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-100 dark:border-purple-800' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}>
                      {call.program} {call.location && `- ${call.location}`}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative w-full">
                      <select 
                        defaultValue={call.status}
                        className={`appearance-none w-full border py-1.5 pl-3 pr-8 rounded-md text-sm font-medium focus:outline-none focus:ring-1 cursor-pointer transition-colors ${
                          call.status === 'Left Voicemail' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300' :
                          call.status === 'No Answer' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300' :
                          call.status === 'Scheduled' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300' :
                          'bg-white dark:bg-[#1a2c35] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <option value="Pending">Select Status</option>
                        <option value="No Answer">No Answer</option>
                        <option value="Left Voicemail">Left Voicemail</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                      </select>
                      <ChevronDown className={`absolute right-2 top-2.5 size-4 pointer-events-none ${
                        call.status === 'Left Voicemail' ? 'text-orange-500' :
                        call.status === 'No Answer' ? 'text-red-500' :
                        call.status === 'Scheduled' ? 'text-emerald-500' : 'text-slate-400'
                      }`} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input 
                      type="checkbox" 
                      checked={call.called} 
                      onChange={() => {}}
                      className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer transition-all hover:scale-110" 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
