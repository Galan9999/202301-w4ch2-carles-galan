import Form from "./components/Form/Form";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";

const App = (): JSX.Element => {
  const text = "hola";

  return (
    <div className="container">
      <Form />

      <div className="row">
        <div className="container-gif offset-1 col-6">
          <ImageDisplay text={text} />
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
