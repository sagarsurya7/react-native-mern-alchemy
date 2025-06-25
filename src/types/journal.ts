
export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  image?: string;
  createdAt: string;
}
