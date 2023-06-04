import Comments from "@/components/Comments";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          className="logo"
          width={100}
          height={24}
          priority
        />
        <div>Mini Comments</div>
      </div>
      <Comments />
    </main>
  );
}
