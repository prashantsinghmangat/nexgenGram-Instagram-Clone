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
    ],
    timestamp: "2 hours ago",
    type: "image" as const
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
    ],
    timestamp: "4 hours ago",
    type: "image" as const
  },
  {
    id: 3,
    username: "travel_adventures",
    userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
    image: "https://player.vimeo.com/external/394678700.sd.mp4?s=30b62832f5efd3e1c54a8678a4ceb5d3c3f75eef&profile_id=165&oauth2_token_id=57447761",
    caption: "Exploring new horizons 🌎 #travel #adventure",
    likes: 245,
    comments: [
      { id: 1, username: "wanderlust", content: "This place looks amazing!" },
      { id: 2, username: "globetrotter", content: "Adding this to my bucket list" }
    ],
    timestamp: "1 day ago",
    type: "video" as const
  },
  {
    id: 4,
    username: "fitness_guru",
    userImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
    image: "https://player.vimeo.com/external/477721089.sd.mp4?s=ded4b3a54f42b0a5dbe0c4f96f1c5396b77c4dc9&profile_id=165&oauth2_token_id=57447761",
    caption: "Morning workout routine 💪 #fitness #health",
    likes: 167,
    comments: [
      { id: 1, username: "gym_lover", content: "Great form!" },
      { id: 2, username: "health_coach", content: "Keep it up! 💪" }
    ],
    timestamp: "3 days ago",
    type: "video" as const
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
          timestamp={post.timestamp}
          type={post.type}
        />
      ))}
    </div>
  );
};

export default PostGrid;