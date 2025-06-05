export default function FilterTabs({ categories, active, onSelect }) {
  return (
    <div className="flex space-x-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 rounded ${active === cat ? 'bg-cardinal text-cream' : 'bg-cream text-espresso'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
