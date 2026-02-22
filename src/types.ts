export type Program = 'DIOP' | 'EIOP' | 'PHP' | 'IOP' | 'DOP' | 'EOP' | 'Group Therapy' | 'Individual';
export type Status = 'Active' | 'On Hold' | 'Discharged' | 'In Progress' | 'Scheduled' | 'Completed' | 'Cancelled' | 'Waitlisted' | 'Full' | 'Confirmed' | 'Now' | 'Pending' | 'Left Voicemail' | 'No Answer';

export interface Patient {
  id: string;
  name: string;
  initials: string;
  location: string;
  program: Program;
  phone: string;
  email: string;
  status: Status;
  avatarColor: string;
}

export interface Session {
  id: string;
  time: string;
  name: string;
  program: Program;
  therapist: string;
  therapistAvatar: string;
  status: Status;
  count: string;
  type: 'group' | 'individual';
}

export interface Task {
  id: string;
  title: string;
  location?: string;
  priority?: 'High' | 'Routine' | 'EOS';
  completed: boolean;
  completedAt?: string;
}

export interface CallRecord {
  id: string;
  time: string;
  patientName: string;
  patientInitials: string;
  phone: string;
  therapist: string;
  program: string;
  location: string;
  status: Status;
  called: boolean;
}
