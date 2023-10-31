import Bookmark from "./Bookmark";

export default function Bookmarks({ bookMarksContent, readTime }) {
  //   console.log(bookMarksContent);
  return (
    <div className=" bg-green-300 p-5 w-[400px]">
      <h1 className="text-center text-2xl font-bold">
        total reading Time : {readTime} Min
      </h1>
      <h1 className="bg-gray-500 text-yellow-50 m-1 p-2 rounded-2xl text-center">
        total add: {bookMarksContent.length}
      </h1>
      {bookMarksContent?.map((addItem, i) => (
        <Bookmark key={i} bookMarksContent={addItem} />
      ))}
    </div>
  );
}
