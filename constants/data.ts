import {
  Instagram,
  Facebook,
  Youtube,
  Music2,
  Disc3
} from 'lucide-react';
import type { Album, Track, SocialStat, PlaylistGoal, BookingContact, NavItem, Video } from '../types';

// Spotify Artist Info
export const SPOTIFY_ARTIST_ID = '0FvJm0y2eHw0aPkLLU3sIG';
export const SPOTIFY_ARTIST_URL = `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`;

// Album data - Latest Releases with correct Spotify track links
export const latestReleases: Album[] = [
  {
    title: 'Love Lovin You',
    trackId: '4BYeOgiYGilvy67AAOGJ4g',
    spotifyUrl: 'https://open.spotify.com/track/4BYeOgiYGilvy67AAOGJ4g?si=3aa970a4cf0941b8',
    image: '/images/cover-love-lovin-you.png'
  },
  {
    title: 'Hola',
    trackId: '0huIntjZ6mdOjk6Dts3j5P',
    spotifyUrl: 'https://open.spotify.com/track/0huIntjZ6mdOjk6Dts3j5P?si=2ed87a6e37324ea2',
    image: '/images/cover-hola.png'
  },
  {
    title: 'Betcha Gonna',
    trackId: '1RJbb6BXJW53LlbcOXahv1',
    spotifyUrl: 'https://open.spotify.com/track/1RJbb6BXJW53LlbcOXahv1?si=c42b909f5fc647a7',
    image: '/images/cover-betcha-gonna.png'
  },
  {
    title: 'South On Me',
    trackId: '4DNhJNM7vu2fYWKJllUBeu',
    spotifyUrl: 'https://open.spotify.com/track/4DNhJNM7vu2fYWKJllUBeu?si=7db53fbedc804e16',
    image: '/images/cover-south-on-me.png'
  },
  {
    title: 'If I Was You',
    trackId: '37I2TpB0m4MFflQJ7fd3S6',
    spotifyUrl: 'https://open.spotify.com/track/37I2TpB0m4MFflQJ7fd3S6?si=963564ef632841f7',
    image: '/images/cover-if-i-was-you.png'
  },
];

// Top Tracks with correct Spotify track links
export const fanFavorites: Track[] = [
  { title: 'Good Riddance', trackId: '3WwZbPizrnJqJFx86kNPs1', spotifyUrl: 'https://open.spotify.com/track/3WwZbPizrnJqJFx86kNPs1?si=eff83d5fb4df433b' },
  { title: 'Love That About You', trackId: '4nWHhF8R5RkTtFotcsOYnz', spotifyUrl: 'https://open.spotify.com/track/4nWHhF8R5RkTtFotcsOYnz?si=161eb1e59f5a42ec' },
  { title: 'Slower', trackId: '3kb9vlB7NCKHNHvYyp8EaL', spotifyUrl: 'https://open.spotify.com/track/3kb9vlB7NCKHNHvYyp8EaL?si=517822ffab61446a' },
  { title: 'Somewhere With Beer', trackId: '2qa1gBkgc1OaZAWiF9DCzz', spotifyUrl: 'https://open.spotify.com/track/2qa1gBkgc1OaZAWiF9DCzz?si=95aecfdd964c482a' },
  { title: "Nothing's Better", trackId: '1LtiNpTzzSX8qcvlPFLmeR', spotifyUrl: 'https://open.spotify.com/track/1LtiNpTzzSX8qcvlPFLmeR?si=a4d1cb159a7a4c1e' },
];

// Social Stats (updated January 2025)
export const socialStats: SocialStat[] = [
  { platform: 'Instagram', count: '85.3K', icon: Instagram, url: 'https://www.instagram.com/filmoremusic/', color: '#E4405F' },
  { platform: 'Facebook', count: '42.5K', icon: Facebook, url: 'https://www.facebook.com/filmoremusic', color: '#1877F2' },
  { platform: 'TikTok', count: '60.7K', icon: Music2, url: 'https://www.tiktok.com/@filmoremusic', color: '#000000' },
  { platform: 'YouTube', count: '13.8K', icon: Youtube, url: 'https://www.youtube.com/@filmoremusic', color: '#FF0000' },
  { platform: 'Spotify', count: '602.6K', icon: Disc3, url: SPOTIFY_ARTIST_URL, color: '#1DB954', label: 'Monthly Listeners' },
];

// Playlist Goals
export const playlistGoals: PlaylistGoal[] = [
  { name: 'Country On The Rise', platform: 'Spotify' },
  { name: 'Hot Country', platform: 'Spotify' },
  { name: "Today's Country", platform: 'Apple Music' },
  { name: 'Country Heat', platform: 'Amazon Music' },
];

// Contact Information
export const bookingContact: BookingContact = {
  title: 'Day-to-Day Manager',
  name: 'Matthew Forster',
  phone: '+1 (615) 587-8067',
  email: 'MForster@cmsnashville.com',
};

// Navigation Items
export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stats', label: 'Stats' },
  { id: 'music', label: 'Music' },
  { id: 'videos', label: 'Videos' },
  { id: 'atypical', label: 'ATYPICAL' },
  { id: 'contact', label: 'Contact' },
];

// Featured Videos
export const featuredVideos: Video[] = [
  { title: 'IF I WAS YOU', videoId: 'Oh8IhZxdiT8' },
  { title: 'ABC NYE BTS', videoId: 'UuM2RiD1sfI' },
  { title: 'YEEHAW (Visual)', videoId: 'wYyOClehLVE' },
  { title: 'NBC 4th OF JULY', videoId: 'WNwIhm-b-4U' },
];

// Key Stats
export const CAREER_STREAMS = '481M+';
export const CAREER_STREAMS_FULL = '481 million';
