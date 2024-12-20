import './index.css'

const HistoryElement = ({item, onDelete}) => (
  <li className="history-element">
    <p className="time">{item.timeAccessed}</p>
    <div className="item">
      <img className="logo" src={item.logoUrl} alt="domain logo" />
      <div className="domain">
        <p className="domain-title">{item.title}</p>
        <p className="domain-url">{item.domainUrl}</p>
      </div>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(item.id)}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </div>
  </li>
)

export default HistoryElement
