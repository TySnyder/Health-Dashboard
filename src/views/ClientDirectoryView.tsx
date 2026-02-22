import React from 'react';
import { Search, Download, Printer, MoreVertical, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PATIENTS } from '../constants';
import { motion } from 'motion/react';

export function ClientDirectoryView() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-6"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Client Reference Directory</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">Manage patient records, view program assignments, and access quick contact details for daily operations.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
          <CheckCircle2 className="size-4 text-green-500" />
          <span>Last synced: Today at 9:41 AM</span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col min-w-40 flex-1 w-full lg:w-auto">
          <div className="flex w-full flex-1 items-stretch rounded-lg relative">
            <input 
              className="flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 placeholder:text-slate-400 pl-11 pr-4 text-sm font-normal leading-normal transition-all" 
              placeholder="Search by client name, ID, or phone number"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 flex items-center justify-center pointer-events-none">
              <Search className="size-5" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar items-center">
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mr-2 whitespace-nowrap hidden sm:block">Filter by:</span>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
            <p className="text-sm font-medium leading-normal whitespace-nowrap">All Programs</p>
          </button>
          {['DIOP', 'EIOP', 'PHP'].map((prog) => (
            <button key={prog} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600">
              <p className="text-sm font-medium leading-normal whitespace-nowrap">{prog}</p>
            </button>
          ))}
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg text-slate-500 dark:text-slate-400 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Export Data">
            <Download className="size-5" />
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg text-slate-500 dark:text-slate-400 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Print View">
            <Printer className="size-5" />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                <th className="p-4 pl-6 w-[25%]">Client Name</th>
                <th className="p-4 w-[20%]">Location</th>
                <th className="p-4 w-[15%]">Program</th>
                <th className="p-4 w-[15%]">Phone</th>
                <th className="p-4 w-[15%]">Email</th>
                <th className="p-4 w-[10%] text-center">Status</th>
                <th className="p-4 w-[5%]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {PATIENTS.map((patient) => (
                <tr key={patient.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${patient.avatarColor}`}>
                        {patient.initials}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">{patient.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">ID: {patient.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{patient.location}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                      patient.program === 'DIOP' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800' :
                      patient.program === 'EIOP' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800' :
                      patient.program === 'PHP' ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' :
                      'bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}>
                      {patient.program}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href={`tel:${patient.phone.replace(/\D/g, '')}`}>
                      {patient.phone}
                    </a>
                  </td>
                  <td className="p-4 text-sm">
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors truncate max-w-[150px] inline-block" href={`mailto:${patient.email}`}>
                      {patient.email}
                    </a>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      patient.status === 'Active' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800' :
                      patient.status === 'On Hold' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800' :
                      'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                    }`}>
                      <span className={`size-1.5 rounded-full ${
                        patient.status === 'Active' ? 'bg-green-500' :
                        patient.status === 'On Hold' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></span>
                      {patient.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <MoreVertical className="size-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 dark:border-slate-800 px-6 py-4 gap-4 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">1-5</span> of <span className="font-semibold text-slate-900 dark:text-white">50</span> clients
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50">
              <ChevronLeft className="size-5" />
            </button>
            <button className="flex items-center justify-center size-9 rounded-lg bg-primary text-white font-medium shadow-sm shadow-primary/20">1</button>
            <button className="flex items-center justify-center size-9 rounded-lg border border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
            <button className="flex items-center justify-center size-9 rounded-lg border border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
            <span className="text-slate-400 px-1">...</span>
            <button className="flex items-center justify-center size-9 rounded-lg border border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">10</button>
            <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
