import Home from "@/src/components/dashboard/home";
import Navigation from "@/src/components/dashboard/navigation";


export default function Dashboard() {
  return (
    <body className="dashboard-template">
      <Navigation />
      <Home />
    </body>
  );
}
