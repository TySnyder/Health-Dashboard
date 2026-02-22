import { Patient, Session, Task, CallRecord } from './types';

export const PATIENTS: Patient[] = [
  { id: '#839210', name: 'Jane Doe', initials: 'JD', location: 'North Wing', program: 'DIOP', phone: '(555) 123-4567', email: 'jane.doe@email.com', status: 'Active', avatarColor: 'bg-blue-100 text-blue-600' },
  { id: '#839211', name: 'John Smith', initials: 'JS', location: 'West Annex', program: 'EIOP', phone: '(555) 987-6543', email: 'john.smith@email.com', status: 'Active', avatarColor: 'bg-amber-100 text-amber-600' },
  { id: '#839212', name: 'Emily White', initials: 'EW', location: 'Main Campus', program: 'PHP', phone: '(555) 321-7654', email: 'emily.white@email.com', status: 'On Hold', avatarColor: 'bg-teal-100 text-teal-600' },
  { id: '#839213', name: 'Michael Brown', initials: 'MB', location: 'North Wing', program: 'DIOP', phone: '(555) 234-5678', email: 'm.brown@email.com', status: 'Active', avatarColor: 'bg-indigo-100 text-indigo-600' },
  { id: '#839214', name: 'Sarah Davis', initials: 'SD', location: 'South Building', program: 'IOP', phone: '(555) 876-5432', email: 'sarah.d@email.com', status: 'Discharged', avatarColor: 'bg-pink-100 text-pink-600' },
];

export const SESSIONS: Session[] = [
  { id: '1', time: '09:00 AM', name: 'Process Group A', program: 'DIOP', therapist: 'Dr. Smith', therapistAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4r2uI1BwrpSIqXwaQchieAFb4u4g6JGLzFMjsRW3O8hofkkp9Hh6BZzc-y6lkyj3AIeA7bZVmqN6G3Jf5POdVaeN7ZdhrVkbEe5Nty85hX4mUqmYKSIpVg4kJ6KVVZnLUBzxXwu1K-xheQ1yiSh7P3xo1VxQA3TR-lXEUNmEoN9caAW5_Tb9_hsEuxjHx3yYDyT_tDtH196e3sgqjOMlyZ0hXGbQueK6VOTQZd8XKvF8_h4WgtF_dwejBbiXs84C0K_2jQqJw0Rv', status: 'In Progress', count: '8/10', type: 'group' },
  { id: '2', time: '10:30 AM', name: 'CBT Skills', program: 'DOP', therapist: 'Jane Doe', therapistAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuhkGWA5MVMfu_qSFqLkP9GDdqSB-jreqKIS1m0MjI8MwEb9CXD8PEVX2ViV0u_oPVxxTh4ihh5TTGdi56HZp8L-QdbvE-6vL4dXlFvxNrf_BRFhXkZNjZkqSAIOGFE7P14KIQWvJHutASvNpRE7ZdtJ2Vg4wvpyS0RTQ9FO86VTyGudqJfDw__gKndzUvF4DeG3KtWDSsM-QGNba2LJkElP7NsQuEEQNFUJVNzrnAUHOGf37c7E_U6LhEdF7Cu39DkSdzKTMW8pAb', status: 'Scheduled', count: '12/12', type: 'group' },
  { id: '3', time: '01:00 PM', name: 'Mindfulness B', program: 'EIOP', therapist: 'Michael R.', therapistAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWAX7zVvI8cIxz6HqUp4VrOGb-GJjL40wrW4-M3dPGwcYMKUZpzHcM0uAEovnEBNfq2dAkM61hm2hbuyHCYdxHVoaoCZy6cwcWRxAp9ipwcQPYFU7vMLce7uaZMiy3h9hfp7_Pz8iTyfHPK3ZcPsqqPKRbouOKUXGjW-BNiCgLsOQF7j67RdqAxWL2wYYIP3HLd7zhVXT7rNSxU2TyRgKTRy8UHt-nkuaoR6421LJ-CdI_mfzsM-073O0kxU1DjVYiUOlGBJU0iSgG', status: 'Scheduled', count: '5/8', type: 'group' },
  { id: '4', time: '02:30 PM', name: 'Relapse Prevention', program: 'EOP', therapist: 'Dr. Sarah M.', therapistAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCOy1XgULxmNOKpbyDJi0NhndQqSrH5ilpORicjfeiG0BpzzOWT1S9qfXpVI_vTS0g3vLfAySxHsIjUcnxvT8QfaRTergIbLyEa9xU4KXGLNQUDHFUZI5vI0uQZvtJjxGpZKAWltlOgZz4IDwcAcLsTMtf-YqOoi_eoR6T4m30vG_RTHlVfXuIq1sNrEy9e8JeQAWlWJW_9SzIbM7SMHezUO2ZPCePSKIsPbL1JerZUPj2knIsYoxOowyvjcUL3Hc_rqhIrFLqQOUt', status: 'Waitlisted', count: '15/15', type: 'group' },
];

export const IND_SESSIONS: Session[] = [
  { id: 'ind1', time: '11:00 AM', name: 'Patient J.D.', program: 'Individual', therapist: 'Dr. Smith', therapistAvatar: '', status: 'Confirmed', count: 'Room 3', type: 'individual' },
  { id: 'ind2', time: '01:30 PM', name: 'Patient M.K.', program: 'Individual', therapist: 'Dr. Smith', therapistAvatar: '', status: 'Now', count: 'Office 102', type: 'individual' },
  { id: 'ind3', time: '03:00 PM', name: 'Patient R.L.', program: 'Individual', therapist: 'Dr. Smith', therapistAvatar: '', status: 'Pending', count: 'Telehealth', type: 'individual' },
];

export const TASKS: Task[] = [
  { id: 't1', title: 'Group Therapy Session - Anxiety Support', location: 'Room 302', priority: 'High', completed: false },
  { id: 't2', title: 'Individual Session - Patient J. Doe', location: 'Office 1B', completed: false },
  { id: 't3', title: 'Update Medication Logs', location: 'Pharmacy System', completed: false },
  { id: 't4', title: 'Shift Handoff Email Draft', location: 'Admin', priority: 'EOS', completed: false },
  { id: 't5', title: 'Check Vitals - Room 104', priority: 'Routine', completed: false },
  { id: 't6', title: 'Morning Vitals Check', completed: true, completedAt: '8:15 AM' },
  { id: 't7', title: 'Inventory Count - Station 2', completed: true, completedAt: '7:55 AM' },
  { id: 't8', title: 'Patient B. Intake Forms', completed: true, completedAt: '7:30 AM' },
];

export const CALLS: CallRecord[] = [
  { id: 'c1', time: '09:00 AM', patientName: 'John Doe', patientInitials: 'JD', phone: '(555) 123-4567', therapist: 'Dr. Smith', program: 'PHP', location: 'Room A', status: 'Pending', called: false },
  { id: 'c2', time: '09:15 AM', patientName: 'Jane Ro', patientInitials: 'JR', phone: '(555) 987-6543', therapist: 'Lcsw. Jones', program: 'IOP', location: 'Room B', status: 'Left Voicemail', called: false },
  { id: 'c3', time: '10:00 AM', patientName: 'Michael B', patientInitials: 'MB', phone: '(555) 222-3333', therapist: 'Dr. Ray', program: 'PHP', location: 'Room A', status: 'No Answer', called: false },
  { id: 'c4', time: '10:30 AM', patientName: 'Sarah C', patientInitials: 'SC', phone: '(555) 444-5555', therapist: 'Lcsw. Jones', program: 'IOP', location: 'Room C', status: 'Scheduled', called: true },
  { id: 'c5', time: '11:00 AM', patientName: 'David D', patientInitials: 'DD', phone: '(555) 666-7777', therapist: 'Dr. Smith', program: 'Group Therapy', location: '', status: 'Pending', called: false },
  { id: 'c6', time: '11:15 AM', patientName: 'Emily E', patientInitials: 'EE', phone: '(555) 888-9999', therapist: 'Dr. Ray', program: 'Individual', location: '', status: 'Pending', called: false },
];
