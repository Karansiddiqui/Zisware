import { Play } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "Up unpacked friendly",
    description:
      "The him father parish looked has sooner. Attachment frequently terminated son hello...",
    duration: "12:25",
    thumbnail: "/assets/images/flat/1.png",
    type: "Video tutorials",
  },
  {
    id: "2",
    title: "Case read they must",
    description:
      "On it differed repeated wandered required in. Then girl neat why yet knew rose spot...",
    duration: "48:40",
    thumbnail: "/assets/images/flat/2.png",
    type: "Video tutorials",
  },
  {
    id: "3",
    title: "It allowance prevailed",
    description:
      "Alteration literature to or an sympathize mr imprudence. Of is ferrars subject enjoyed...",
    duration: "47:25",
    thumbnail: "/assets/images/flat/3.png",
    type: "Video tutorials",
  },
  {
    id: "4",
    title: "Consider now provided",
    description:
      "Marianne or husbands if at stronger ye. Considered is as middletons uncommonly...",
    duration: "22:14",
    thumbnail: "/assets/images/flat/4.png",
    type: "Video tutorials",
  },
];

export default function LatestPosts() {
  return (
    <div className=" bg-white border border-borderColor">
      <h2 className="text-xl p-4 font-medium text-gray-800 border-b border-borderColor">Latest posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <div className="relative min-w-[94px] h-[94px] hover:cursor-pointer">
              <img
                src={post.thumbnail}
                alt=""
                className="w-full h-full object-cover rounded-lg bg-gray-100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/5 0 text-white text-[10px] px-1.5 py-0.5 rounded">
                {post.duration}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-blue-500 text-base hover:text-blue-600 hover:cursor-pointer transition-all duration-200 font-semibold mb-1">
                {post.title}
              </h3>
              <div className="text-sm text-gray-500 mb-1">{post.type}</div>
              <p className="text-sm text-textColor line-clamp-2">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
