import { useEffect } from "react";
import { useState } from "react";
import Content from "./Content";
import Bookmarks from "./Bookmarks";

export default function Contents() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("contents.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);
  return (
    <main className="w-3/4 mx-4 my-12 flex ">
      <section className="w-3/4">
        {contents.map((content) => (
          <Content content={content} />
        ))}
      </section>
      <Bookmarks />
    </main>
  );
}
