import Image from "next/image"
import bannerImage from "src/assets/philip-oroni-YHF1agMTOSs-unsplash.jpg"


function HeaderImage() {
  return (
    <div className='pl-44 object-fill'>
    <Image
      src={bannerImage}
      width={1200}
      height={45}
      alt="Banner picture of soft green geometry"
      />
    </div>
  );
};

export default HeaderImage;