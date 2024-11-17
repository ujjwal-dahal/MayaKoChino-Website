export default function EachCategory({ title, desc }) {
  return (
    <>
      <div className="category-card">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
}
