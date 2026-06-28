/**
 * TitleBlock — reads like the corner stamp on an engineering drawing:
 * document name, org, revision, scale. Used at the top of every page
 * so each page presents like a labeled sheet in the same drawing set.
 */
export default function TitleBlock({ doc, fields }) {
  return (
    <div className="title-block">
      <div className="title-block-main">
        <div className="title-block-doc">Document — {doc}</div>
      </div>
      <div className="title-block-fields">
        {fields.map((f) => (
          <div className="title-block-field" key={f.label}>
            <span>{f.label}</span>
            {f.value}
          </div>
        ))}
      </div>
    </div>
  )
}
