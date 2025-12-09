const categories = [
  { key:'all', label:'Todos' },
  { key:'clothes', label:'Ropa' },
  { key:'electronics', label:'Electronicos' },
  { key:'Furniture', label:'Muebles' },
  {key:'shoes', label :'Zapatos'}
]


export default function Filters({ current, onChange }){
  return (
    <div className="filters">
      {categories.map(c => (
        <button
          key={c.key}
          className={`filter-btn ${current === c.key ? 'filter-btn--active':''}`}
          onClick={() => onChange(c.key)}
          data-cat={c.key}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
