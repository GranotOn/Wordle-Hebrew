export default function Text({ children, className }) {
  className += " dark:text-white";
  return <p className={className}>{children}</p>;
}
