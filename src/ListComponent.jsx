import { MdEmail, MdCall, MdAdd } from 'react-icons/md';

function ListComponent({ items }) {
  const getIcon = (iconType) => {
    const iconMap = {
      'email-icon': <MdEmail />,
      'call-icon': <MdCall />,
      'create-icon': <MdAdd />
    };
    return iconMap[iconType] || '•';
  };
  
  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2 className="tasks-title">TASKS</h2>
        <button className="new-task-btn">+ New Task</button>
      </div>

      <div className="tasks-list">
        {items.map((item, index) => (
          <div key={index} className="task-card">
            <div className="task-icon">{getIcon(item.icon)}</div>
            
            <div className="task-content">
              <div className="task-main">
                <span className="task-type">{item.title}</span>
                <span className="task-description">
                  {item.signature}
                  <span className="task-name"> {item.name}</span>
                </span>
              </div>
              <div className="task-details">
                {item.text && <span className="task-text">{item.text}</span>}
                <span className="task-date">{item.date}</span>
              </div>
            </div>

            <button 
              className="task-action-btn" 
              style={{ backgroundColor: item.bgcolor }}
            >
              {item.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListComponent;
