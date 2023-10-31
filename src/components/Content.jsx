import Author from "./Author";
import Hashtag from "./Hashtag";

export default function Content({
  content,
  handleBookMarks,
  handleMarkAsRead,
}) {
  return (
    <div className="my-3 border-2">
      <div className=" w-full">
        <img
          className="w-full rounded-md p-2 h-[350px]"
          src={content.image}
          alt="image"
        />
      </div>
      <Author handleBookMarks={handleBookMarks} content={content} />
      <div>
        <h1 className="text-4xl text-center font-extrabold text-gray-600">
          {content.contentsName}
        </h1>
        <p className="my-4  text-2xl text-green-900 font-mono text-center">
          {content.title}
        </p>
        <Hashtag hashtag={content.hashtag} />
        <p
          onClick={() => handleMarkAsRead(content)}
          className="text-center font-xl font-extrabold text-green-800 cursor-pointer"
        >
          Mark As Read
        </p>
      </div>
    </div>
  );
}

// authorImg
// :
// "https://cdn-icons-png.flaticon.com/512/3231/3231499.png"
// authorName
// :
// "Mark Wilson"
// contentsName
// :
// "Product Review"
// hashtag
// :
// (2) ['technology', 'reviews']
// id
// :
// 4
// image
// :
// "https://specials-images.forbesimg.com/imageserve/6321aca5df0a9fa9eee9950b/IMG-2758/960x0.jpg?cropX1=63&cropX2=1519&cropY1=104&cropY2=1074"
// readingTime
// :
// 7
// title
// :
// "Why should you buy 14 pro"
