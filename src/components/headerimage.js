import Image from "next/image"
import bannerImage from "../assets/philip-oroni-YHF1agMTOSs-unsplash.jpg"


function HeaderImage() {
  return (
    <div className='pl-80 bg-header_black'>
    <Image
      src={bannerImage}
      width={2000}
      height={50}
      alt="Banner picture of soft green geometry"
      />
    </div>

  );
};

export default HeaderImage;