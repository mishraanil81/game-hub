import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";
interface props {
  rating: number;
}
const Emoji = ({ rating }: props) => {
  if (rating < 3) return null;

  const emojMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojMap[rating]} marginTop={2}></Image>;
};

export default Emoji;
