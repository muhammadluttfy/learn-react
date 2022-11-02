import clsx from "clsx";

function Button({ className = "bg-blue-600", children, text }) {
  // const { className = "bg-blue-600", children, text } = props;
  return (
    <button
      // {...props}
      className={clsx(
        className,
        "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 text-white px-4 py-2 rounded flex items-center gap-x-2"
      )}
    >
      {text || children}
    </button>
  );
}

export default Button;
