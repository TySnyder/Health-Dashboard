import React from 'react';
import { LayoutDashboard, Phone, Users, Calendar, FileText, Settings, Bell, ShieldCheck, RefreshCw, Server } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'call-list', label: 'Daily Call List', icon: Phone },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'tasks', label: 'Tasks', icon: FileText },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <nav className="w-64 bg-white dark:bg-[#1a2c35] border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen fixed left-0 top-0 z-50 transition-colors duration-200">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck className="size-6" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Behavioral Health</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Staff Portal</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
              activeView === item.id
                ? 'bg-primary/10 text-primary'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <item.icon className={`size-5 ${activeView === item.id ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div 
            className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border border-slate-200 dark:border-slate-600"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9WSEN4h0mylUpynrof23_gJ4fbHWPN3gOfLKeJAc1wYChZPxkJMGS84_wDIwd6Is3WhDiKVQNCyQo1A-3VFKNIEAklQQpzB2KKb-4_pS4c_fpjRqIZxNFzrCjyXxkW3gI94kiW_TN0mhaya4ApYWAx8N7vkMJ2nxiQSF-0JegwZgW1JxwYVKGV6iADs534xgZ890xcP71YH57NQLlGGuTl4ziC5ewOi0T7T7tLiUndz3hnqiJBwlgO3uDSzPwXnC3UGfsTzRxosGl")' }}
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-slate-900 dark:text-white">Sarah Wilson</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Head Nurse</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
          <ShieldCheck className="size-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">{title}</h2>
          {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{subtitle}</p>}
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <div className="hidden lg:flex flex-col items-end mr-4">
          <p className="text-sm font-bold text-slate-900 dark:text-slate-200">October 24, 2023</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">08:42 AM PST</p>
        </div>
        <div className="flex gap-2">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors relative">
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
          </button>
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
            <Settings className="size-5" />
          </button>
        </div>
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-slate-700 shadow-sm"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDg2gDuC59tztYK8LziPC9eYfzD0ansQUBk0njt1KGpNaI7A6RIwsDR0MCLo8_fewXkAefl2ruDmWwVSqTU8YFPDwjIxiZU1uwFPdC-cP6FvSAJQUiG3fJc1idmPhdBkVGj03HZ9w0XwAqh7xgaaHK7shmJXi4zkgKUMOzIY-PBiEglOQUqLGaY1BCLFSFCNLuttk3-kL9bFUk-ELzzZYcSVStih8_xRwa1eu9xnGMbs_KIFYWZKzETGvRJK05X_SUySsdUYAT1AXx-")' }}
        />
      </div>
    </header>
  );
}
