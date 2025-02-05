import { useState } from "react";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";
import { Share2, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface PostCardProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  comments: Array<{ id: number; username: string; content: string }>;
  timestamp: string;
  type: "image" | "video";
}

const PostCard = ({
  username,
  userImage,
  image,
  caption,
  likes,
  comments,
  timestamp,
  type,
}: PostCardProps) => {
  const { toast } = useToast();
  
  const handleShare = () => {
    toast({
      title: "Shared!",
      description: "Post has been shared successfully",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={userImage}
            alt={username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">{username}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{timestamp}</span>
        </div>
      </div>

      {type === "video" ? (
        <video
          src={image}
          controls
          className="w-full aspect-video object-cover"
        />
      ) : (
        <img
          src={image}
          alt="Post content"
          className="w-full aspect-square object-cover"
        />
      )}

      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <LikeButton initialLikes={likes} />
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
            Share
          </Button>
        </div>

        <p className="mb-4">
          <span className="font-medium">{username}</span> {caption}
        </p>

        <CommentSection comments={comments} />
      </div>
    </div>
  );
};

export default PostCard;