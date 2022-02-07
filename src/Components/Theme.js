export default function Theme({ children, darkMode }) {
  if (darkMode) return <div className="dark">{children}</div>;

  return children;
}
