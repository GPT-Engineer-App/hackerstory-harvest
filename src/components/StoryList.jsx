import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Code, ThumbsUp } from 'lucide-react';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="bg-card shadow rounded-lg p-4 border border-primary">
          <h2 className="text-xl font-semibold mb-2 text-card-foreground">{story.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center">
              <ThumbsUp className="mr-1 h-4 w-4" /> {story.points} upvotes
            </span>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="text-primary-foreground border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Code className="mr-2 h-4 w-4" /> View Source
              </a>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;
