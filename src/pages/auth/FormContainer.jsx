const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="relative hidden md:flex">
        <img
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
          className=" h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-green-200 flex-1">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
            alt=""
            className="w-16 mb-2 "
          />
          <div className="font-playfair text-emerald-700 text-3xl">
            Rica's Plants
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
