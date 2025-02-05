import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface Comment {
  id: number;
  username: string;
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setNewComment("");
  };

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm font-medium">{comments.length} comments</span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-2">
              <span className="font-medium">{comment.username}</span>
              <p className="text-gray-600">{comment.content}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommentSection;