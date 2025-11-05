export default function Card({ title, body }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8 }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}