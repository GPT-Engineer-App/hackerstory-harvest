import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {story.points} upvotes
            </span>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Read More <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;
