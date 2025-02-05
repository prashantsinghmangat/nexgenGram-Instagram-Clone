import PostCard from "./PostCard";

const SAMPLE_POSTS = [
  {
    id: 1,
    username: "tech_enthusiast",
    userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    caption: "Coding day! 💻 #programming #tech",
    likes: 120,
    comments: [
      { id: 1, username: "dev_jane", content: "Great setup!" },
      { id: 2, username: "coder_sam", content: "What IDE is that?" }
    ]
  },
  {
    id: 2,
    username: "creative_soul",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    caption: "Finding inspiration in everyday moments ✨",
    likes: 89,
    comments: [
      { id: 1, username: "artlover", content: "Beautiful composition!" },
      { id: 2, username: "photo_pro", content: "What camera did you use?" }
    ]
  }
];

const PostGrid = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8">
      {SAMPLE_POSTS.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          userImage={post.userImage}
          image={post.image}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostGrid;