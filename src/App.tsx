/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar, Header } from './components/Layout';
import { DashboardView } from './views/DashboardView';
import { ClientDirectoryView } from './views/ClientDirectoryView';
import { TasksView } from './views/TasksView';
import { CallListView } from './views/CallListView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'call-list':
        return <CallListView />;
      case 'patients':
        return <ClientDirectoryView />;
      case 'tasks':
        return <TasksView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-widest">{activeView}</h2>
            <p>This view is currently under development.</p>
          </div>
        );
    }
  };

  const getHeaderInfo = () => {
    switch (activeView) {
      case 'dashboard':
        return { title: 'STC Planner', subtitle: 'Behavioral Health Ops' };
      case 'call-list':
        return { title: 'Daily Call List', subtitle: 'Patient Outreach' };
      case 'patients':
        return { title: 'Client Directory', subtitle: 'Patient Records' };
      case 'tasks':
        return { title: 'EOS & Daily Tasks', subtitle: 'Shift Management' };
      default:
        return { title: 'Behavioral Health', subtitle: 'Staff Portal' };
    }
  };

  const headerInfo = getHeaderInfo();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      <div className="ml-64 flex flex-col min-h-screen">
        <Header title={headerInfo.title} subtitle={headerInfo.subtitle} />
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
