/**
 * Types for Walmart Gift Card Reward landing page and interactive funnel.
 */

export interface FAQRecord {
  id: string;
  question: string;
  answer: string;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  category: string;
  completionTime: string;
  rewardValue: string;
  logoType: 'survey' | 'streaming' | 'app' | 'shopping' | 'newsletter';
  status: 'idle' | 'completing' | 'completed';
}

export interface RegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  zipCode: string;
}
