import Image from "next/image"
import bannerImage from "../assets/philip-oroni-YHF1agMTOSs-unsplash.jpg"


function HeaderImage() {
  return (
    <div className='bg-header_black flex items-center justify-center'>
    <Image
      src={bannerImage}
      width={1500}
      height={50}
      alt="Banner picture of soft green geometry"
      />
    </div>

  );
};

export default HeaderImage;