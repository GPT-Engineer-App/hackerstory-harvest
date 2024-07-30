import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StoryList from '../components/StoryList';
import StoryListSkeleton from '../components/StoryListSkeleton';
import { Terminal, Search } from 'lucide-react';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center">
        <Terminal className="mr-2" />
        Top 100 Hacker News Stories
      </h1>
      <div className="mb-6 relative">
        <Input
          type="text"
          placeholder="Hack the search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md pl-10 bg-card text-card-foreground border-primary"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      </div>
      {isLoading ? (
        <StoryListSkeleton />
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <StoryList stories={filteredStories} />
      )}
    </div>
  );
};

export default Index;
