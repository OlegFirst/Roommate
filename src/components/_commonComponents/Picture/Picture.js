const Picture = ({ url }) => {	
  return (
    <div className="picture">
      <img className="picture__image" src={url} alt="Picture" />
    </div>
  );
}

export default Picture;