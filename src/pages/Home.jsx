import Header from "../components/Header";
import InvoicesCard from "../components/InvoicesCard";

function Home() {
  
  
  return (
    <div>
      <Header />
      <div className="container-m">
        <InvoicesCard/>
      </div>
    </div>
  );
}

export default Home;
