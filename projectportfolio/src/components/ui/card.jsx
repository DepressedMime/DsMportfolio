export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg shadow-md p-4 bg-white text-black ${className}`}>
      {children}
    </div>
  );
}
