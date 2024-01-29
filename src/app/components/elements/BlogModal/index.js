import { AiOutlineCloseCircle } from "react-icons/ai";

function BlogModal({
  title,
  image,
  onClose,
}) {
  return (
    <div className="w-full h-full bg-black rounded-md px-3 py-8 shadow-sm shadow-[#3f3e3eaa]">
      {/* ==== Close Modal ==== */}
      <button className="absolute right-5 top-5 text-red-500 text-3xl z-10 outline-none" onClick={onClose}>
        <AiOutlineCloseCircle />
      </button>
      <div className="w-full  h-full overflow-y-scroll no-scrollbar text-white px-4">

        <div className=" w-full h-full  ">
          <img
            src={image}
            loading="lazy"
            className="mt-2  rounded-md object-cover"
            alt={title}
          />
        </div>

      </div>
    </div>
  );
}

export default BlogModal;
