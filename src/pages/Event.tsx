import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export default function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [sidebarWidth, setSidebarWidth] = useState(true)


  return (
    <div className="flex flex-col min-h-screen">
      <Header sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar sidebarWidth={sidebarWidth} />
      </main>
    </div>
  );
}
