import { useState } from "react";
import { User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Story {
  id: number;
  username: string;
  userImage: string;
  content: string;
  type: "image" | "video";
  timestamp: string;
}

const SAMPLE_STORIES: Story[] = [
  {
    id: 1,
    username: "John",
    userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
    content: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    type: "image",
    timestamp: "2h"
  },
  {
    id: 2,
    username: "Sarah",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    content: "https://player.vimeo.com/external/394678700.sd.mp4?s=30b62832f5efd3e1c54a8678a4ceb5d3c3f75eef&profile_id=165&oauth2_token_id=57447761",
    type: "video",
    timestamp: "1h"
  },
  {
    id: 3,
    username: "Mike",
    userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
    content: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    type: "image",
    timestamp: "3h"
  },
  {
    id: 4,
    username: "Emma",
    userImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
    content: "https://player.vimeo.com/external/477721089.sd.mp4?s=ded4b3a54f42b0a5dbe0c4f96f1c5396b77c4dc9&profile_id=165&oauth2_token_id=57447761",
    type: "video",
    timestamp: "5h"
  },
  {
    id: 5,
    username: "Alex",
    userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
    content: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    type: "image",
    timestamp: "6h"
  }
];

const StatusBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

  const handleStoryClick = (index: number) => {
    setSelectedStoryIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    if (selectedStoryIndex < SAMPLE_STORIES.length - 1) {
      setSelectedStoryIndex(selectedStoryIndex + 1);
    } else {
      setIsOpen(false);
    }
  };

  const handlePrevious = () => {
    if (selectedStoryIndex > 0) {
      setSelectedStoryIndex(selectedStoryIndex - 1);
    }
  };

  return (
    <>
      <div className="w-full overflow-x-auto bg-white shadow-sm mb-6 p-4">
        <div className="flex gap-4 min-w-max">
          {SAMPLE_STORIES.map((story, index) => (
            <button
              key={story.id}
              onClick={() => handleStoryClick(index)}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                  {story.userImage ? (
                    <img
                      src={story.userImage}
                      alt={story.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-full h-full p-2 text-white" />
                  )}
                </div>
              </div>
              <span className="text-sm font-medium">{story.username}</span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[90vw] h-[90vh] p-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              <CarouselItem className="w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <img
                      src={SAMPLE_STORIES[selectedStoryIndex].userImage}
                      alt={SAMPLE_STORIES[selectedStoryIndex].username}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-white font-medium">
                      {SAMPLE_STORIES[selectedStoryIndex].username}
                    </span>
                    <span className="text-white/70 text-sm">
                      {SAMPLE_STORIES[selectedStoryIndex].timestamp}
                    </span>
                  </div>
                  {SAMPLE_STORIES[selectedStoryIndex].type === "video" ? (
                    <video
                      src={SAMPLE_STORIES[selectedStoryIndex].content}
                      autoPlay
                      controls
                      className="w-full h-full object-contain"
                      onEnded={handleNext}
                    />
                  ) : (
                    <img
                      src={SAMPLE_STORIES[selectedStoryIndex].content}
                      alt="Story content"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious
              onClick={handlePrevious}
              className="left-2"
              disabled={selectedStoryIndex === 0}
            />
            <CarouselNext
              onClick={handleNext}
              className="right-2"
              disabled={selectedStoryIndex === SAMPLE_STORIES.length - 1}
            />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StatusBar;