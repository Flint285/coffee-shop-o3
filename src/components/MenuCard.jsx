export default function MenuCard({ name, desc, price }) {
  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm">{desc}</p>
      <p className="font-bold">${price}</p>
    </div>
  )
}
