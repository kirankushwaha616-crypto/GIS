export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Living Room' | 'Kitchen' | 'Bedroom' | 'Commercial' | 'Hospitality' | 'Interior Project';
  image: string;
  span?: string; // for asymmetric masonry/grid
  description?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  previewImage?: string;
}

export interface ReviewItem {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  projectType: string;
  message: string;
}
