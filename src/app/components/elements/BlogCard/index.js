function BlogCard({
  image,
  onClick,
}) {
  return (
    <div className="relative cursor-pointer w-full sm:w-[48%] md:w-[31%] h-60 md:h-64 mb-8 rounded-md overflow-hidden hover:before:opacity-100 hover:opacity-80 hover: transition duration-300 Portfolio__card_overlay" onClick={onClick}>
      <div className="relative w-full">
        <img
          className="object-cover h-full w-full"
          src={image}
          alt={image}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default BlogCard;
