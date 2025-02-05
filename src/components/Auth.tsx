import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { LogIn, UserPlus } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface User {
  username: string;
  password: string;
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = { username, password };
    
    if (isLogin) {
      const savedUser = localStorage.getItem("user");
      if (savedUser && JSON.parse(savedUser).username === username && JSON.parse(savedUser).password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast({
          title: "Success",
          description: "Logged in successfully!",
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials",
          variant: "destructive",
        });
      }
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
      setIsLogin(true);
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-32"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-32"
        />
        <Button type="submit" variant="default">
          {isLogin ? <LogIn className="mr-2" /> : <UserPlus className="mr-2" />}
          {isLogin ? "Login" : "Sign Up"}
        </Button>
        <Button type="button" variant="outline" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account?" : "Have an account?"}
        </Button>
      </form>
    </div>
  );
};

export default Auth;