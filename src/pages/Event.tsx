import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import { SidebarContext } from "../Context/SidebarContext";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [sidebarWidth, setSidebarWidth] = useState(true)

  return (
    <SidebarContext.Provider value={{ sidebarWidth, setSidebarWidth }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
          <Sidebar />
        </main>
      </div>
    </SidebarContext.Provider>
  );
}
