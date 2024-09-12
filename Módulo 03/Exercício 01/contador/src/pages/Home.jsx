import Timer from '../components/Timer';

function Home() {
  return (
    <div>
      <h2>Bem-vindo à Home Page</h2>
      <Timer initialMinutes={1} />
    </div>
  );
}

export default Home;
