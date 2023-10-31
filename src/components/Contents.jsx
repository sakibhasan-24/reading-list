import { useEffect } from "react";
import { useState } from "react";
import Content from "./Content";
import Bookmarks from "./Bookmarks";

export default function Contents() {
  const [contents, setContents] = useState([]);
  const [bookMarksContent, setBookMarksContents] = useState([]);
  const handleBookMarks = (topic) => {
    console.log(topic);
    setBookMarksContents([...bookMarksContent, topic]);
  };

  useEffect(() => {
    fetch("contents.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);
  return (
    <main className=" mx-4 my-12  flex gap-6">
      <section className="w-3/4">
        {contents.map((content) => (
          <Content
            key={content.id}
            content={content}
            handleBookMarks={handleBookMarks}
          />
        ))}
      </section>
      <Bookmarks bookMarksContent={bookMarksContent} />
    </main>
  );
}
