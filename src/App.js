import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";

function App() {
  return (
    <div>
        <TopNavigation></TopNavigation>
       <TopBanner></TopBanner>
       <Services></Services>
       <Analysis></Analysis>
    </div>
  );
}

export default App;
