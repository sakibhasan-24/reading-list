export default function Header() {
  return (
    <div className="mt-5 mx-2 bg-green-300 p-5 rounded-2xl">
      <div className=" flex items-center content-center gap-7">
        <img
          className="rounded-full w-[100px]"
          src="https://static.vecteezy.com/system/resources/previews/020/784/801/original/general-knowledge-icon-vector.jpg"
          alt="logo"
        />
        <p className="text-4xl  font-extrabold tracking-wide text-blue-900">
          add your topic
        </p>
      </div>
    </div>
  );
}
