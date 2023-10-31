export default function Author({ content }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center  gap-10 ml-2 my-3">
        <img
          className="w-[80px] h-[80px] rounded-full border-2 border-sky-700"
          src={content.authorImg}
          alt=""
        />
        <h1 className="text-xl text-gray-500 ">{content.authorName}</h1>
      </div>
      <div className="flex justify-center ">
        <p className="text-2xl">
          <span className="text-3xl font-bold  text-blue-950">
            {content.readingTime}
          </span>
          min to read
        </p>
        <img
          className="w-[30px] mr-4 cursor-pointer"
          src="https://static.thenounproject.com/png/3460469-200.png"
          alt="bookmarks"
        />
      </div>
    </div>
  );
}

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
