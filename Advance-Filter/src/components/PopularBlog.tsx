import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlog = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title-1",
      author: "Jordan",
      likes: 125,
      comments: 44,
    },
    {
      title: "My Amazing Blog Title-2",
      author: "Alice",
      likes: 256,
      comments: 85,
    },
    {
      title: "My Amazing Blog Title-3",
      author: "John Doe",
      likes: 65,
      comments: 16,
    },
    {
      title: "My Amazing Blog Title-4",
      author: "Sam",
      likes: 587,
      comments: 245,
    },
  ];

  return (
    <>
      <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded ">
        <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold mb-2">{blog.title}</span>
              </div>

              <span className="text-gray-600">Publish By {blog.author} </span>

              <div className="flex items-center mt-3">
                <MessageCircle size={16} />
                <span className="text-gray-500 mr-5 ml-1">
                  {blog.comments}{" "}
                </span>

                <ThumbsUp size={16} />
                <span className="text-gray-500 mr-5 ml-1">
                  {blog.likes}{" "}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PopularBlog;
