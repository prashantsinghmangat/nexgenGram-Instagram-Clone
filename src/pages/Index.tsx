import PostGrid from "../components/PostGrid";
import StatusBar from "../components/StatusBar";
import Auth from "../components/Auth";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">NexGenGram</h1>
          <Auth />
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4">
        <StatusBar />
        <PostGrid />
      </main>
    </div>
  );
};

export default Index;