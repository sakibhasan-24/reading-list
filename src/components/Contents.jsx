import { useEffect } from "react";
import { useState } from "react";
import Content from "./Content";
import Bookmarks from "./Bookmarks";

export default function Contents() {
  const [contents, setContents] = useState([]);
  const [bookMarksContent, setBookMarksContents] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleBookMarks = (topic) => {
    console.log(topic);
    setBookMarksContents([...bookMarksContent, topic]);
  };

  const handleMarkAsRead = (newReadTime) => {
    if (bookMarksContent.length === 0) {
      alert("no topic added");
      setReadTime(0);
      return;
    }
    // console.log(readTime.readingTime);
    setReadTime(readTime + newReadTime.readingTime);
    const newBookMarked = bookMarksContent.filter(
      (read) => read.id !== newReadTime.id
    );
    setBookMarksContents(newBookMarked);
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
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </section>
      <Bookmarks bookMarksContent={bookMarksContent} readTime={readTime} />
    </main>
  );
}
