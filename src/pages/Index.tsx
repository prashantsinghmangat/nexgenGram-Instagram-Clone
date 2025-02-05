import PostGrid from "../components/PostGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">NexGenGram</h1>
        </div>
      </header>
      <main>
        <PostGrid />
      </main>
    </div>
  );
};

export default Index;