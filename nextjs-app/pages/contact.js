import Link from "next/link";
import Image from "next/image";
import img from "../public/videoPlayer.jpg";
const contact = () => {
  return (
    <div>
      <h1>contact js </h1>
      <Image src={img} width={500} height={500} layout="intrinsic" />
      <Link href="/">Home</Link>
    </div>
  );
};

export default contact;
