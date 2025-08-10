import noTodoSvg from '../../assets/svg/noTodo.svg';

function NoTodo() {
  return (
    <div className="flex justify-center items-center my-10 sm:mx-auto mx-10">
      <div className="text-center p-5 sm:p-15 bg-[#f9fbf8] border rounded-3xl relative">
        {/* Image */}
        <img
          src={noTodoSvg}
          alt="No Todos"
          className="sm:w-[80%] w-full mx-auto sm:top-[0px] top-[31px] sm:my-[-41px] z-50 relative rotate-[-5deg]"
        />

        {/* Text */}
        <h1 className="sm:text-5xl text-3xl font-bold mb-4 z-10 relative">
          NO MORE TASK LEFT
        </h1>
      </div>
    </div>
  );
}

export default NoTodo;
