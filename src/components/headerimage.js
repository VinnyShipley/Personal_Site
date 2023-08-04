import Image from "next/image"
import bannerImage from "src/assets/philip-oroni-YHF1agMTOSs-unsplash.jpg"


function HeaderImage() {
  return (
    <Image
      src={bannerImage}
      width={1200}
      height={45}
      alt="Banner picture of soft green geometry"
      />
  );
};

export default HeaderImage;