import { useState } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  initialLikes?: number;
}

const LikeButton = ({ initialLikes = 0 }: LikeButtonProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
    >
      <Heart
        className={`w-6 h-6 ${
          liked ? "fill-red-500 text-red-500 animate-heart-bounce" : ""
        }`}
      />
      <span className="text-sm font-medium">{likes}</span>
    </button>
  );
};

export default LikeButton;