export default function Hashtag({ hashtag }) {
  // console.log(hashtag);

  return (
    <div className="mx-5 flex gap-4 my-2 text-gray-700 text-2xl font-bold">
      <p>#{hashtag[0]}</p>
      <p>#{hashtag[1]}</p>
    </div>
  );
}
