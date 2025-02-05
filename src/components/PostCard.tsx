import { useState } from "react";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

interface PostCardProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  comments: Array<{ id: number; username: string; content: string }>;
}

const PostCard = ({
  username,
  userImage,
  image,
  caption,
  likes,
  comments,
}: PostCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="p-4 flex items-center gap-3">
        <img
          src={userImage}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">{username}</span>
      </div>

      <img
        src={image}
        alt="Post content"
        className="w-full aspect-square object-cover"
      />

      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <LikeButton initialLikes={likes} />
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