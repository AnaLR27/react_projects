import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";
import users from "./users.json"; // Importa el archivo JSON

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing, avatar }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          avatar={avatar}
          initialIsFollowing={isFollowing}
        />
      ))}
    </section>
  );
}
