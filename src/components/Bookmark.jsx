export default function Bookmark({ bookMarksContent }) {
  return (
    <div className="bg-green-700 text-white my-4 text-xs p-2 text-center rounded-2xl font-bold">
      <h1>{bookMarksContent.title}</h1>
    </div>
  );
}
