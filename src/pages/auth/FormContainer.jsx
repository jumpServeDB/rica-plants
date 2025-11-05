const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center mx-2 my-8">
        <img
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          alt=""
          className="w-16 mb-2"
        />
        <div className="font-playfair text-emerald-700 text-3xl">
          Rica's Plants
        </div>
      </div>
      {children}
    </div>
  );
};

export default FormContainer;
