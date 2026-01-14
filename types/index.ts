import { LucideIcon } from 'lucide-react';

export interface Album {
  title: string;
  trackId: string;
  spotifyUrl: string;
  image: string;
}

export interface Track {
  title: string;
  trackId: string;
  spotifyUrl: string;
}

export interface SocialStat {
  platform: string;
  count: string;
  icon: LucideIcon;
  url: string;
  color: string;
  label?: string;
}

export interface PlaylistGoal {
  name: string;
  platform: string;
}

export interface BookingContact {
  title: string;
  name: string;
  phone: string;
  email: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Video {
  title: string;
  videoId: string;
}
