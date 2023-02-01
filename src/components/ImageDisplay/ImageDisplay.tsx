interface ImageDisplayProps {
  text: string;
}

const ImageDisplay = ({ text }: ImageDisplayProps): JSX.Element => {
  return <img src="" alt={text} className="gif" />;
};

export default ImageDisplay;
