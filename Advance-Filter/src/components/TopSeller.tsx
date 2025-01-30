import { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSeller = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));

        setAuthors(authorData);
      } catch (error) {
        console.error("Error fetching authors", error);
      }
    };

    fetchData();
  }, []);

  const handleFollow = (index: number) => {
    setAuthors((prevAuthor) =>
      prevAuthor.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <>
      <div className="bg-white p-5 mx-5 mt-[5rem] border w-[22rem] rounded">
        <h2 className="text-xl font-bold mb-5">Top Sellers</h2>

        <ul>
          {authors.map((author, index) => (
            <li key={index} className="flex items-center justify-between mb-4">
              <section className="flex justify-center items-center">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-[20%] h-[20%] justify-center rounded-full"
                />
                <span className="ml-4">{author.name}</span>
              </section>

              <button
                onClick={() => handleFollow(index)}
                className={`py-1 px-3 rounded cursor-pointer ${
                  author.isFollowing
                    ? "bg-red-600 text-white"
                    : "bg-black text-white"
                }`}
              >
                {author.isFollowing ? "Unfollow" : "Follow"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopSeller;
