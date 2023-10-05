const root = document.getElementById("root");

const ImageComponent = (props) => {
  const { imageDetails } = props;
  const { imageSrc } = imageDetails;
  return (
    <div>
      <img alt="one" className="image-styles" src={imageSrc} />
    </div>
  );
};

const imagesList = [
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/PIA22835-VoyagerProgram%26Heliosphere-Chart-20181210.png/1024px-PIA22835-VoyagerProgram%26Heliosphere-Chart-20181210.png",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Voyager_probes_with_the_outer_worlds.jpg/800px-Voyager_probes_with_the_outer_worlds.jpg",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Voyager_-_Filters_-_Clear.png",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Transitional_regions.jpg/800px-Transitional_regions.jpg",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/PIA23645-Earth-PaleBlueDot-6Bkm-Voyager1-orig19900214-upd20200212.jpg",
  },
];

const Container = () => {
  return (
    <div className="main-div">
      {imagesList.map((eachImage) => (
        <ImageComponent imageDetails={eachImage} />
      ))}
    </div>
  );
};

ReactDOM.render(<Container />, root);
