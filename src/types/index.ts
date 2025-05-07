import type { LucideIcon } from 'lucide-react';

export interface GalleryMediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption: string;
  category: string; // e.g., Wedding, Corporate
}

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  photoUrl: string;
  name: string;
  quote: string;
  designation?: string;
}

export interface EventTileItem {
  id: string;
  imageUrl: string;
  title: string;
  date?: string;
  details?: string;
}
