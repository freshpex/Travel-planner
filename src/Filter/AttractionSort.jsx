import 'react';

const sortItems = (items, sortBy, sortOrder) => {
  return items.slice().sort((a, b) => {
    const itemA = a[sortBy].toUpperCase();
    const itemB = b[sortBy].toUpperCase();

    return sortOrder === 'asc' ? itemA.localeCompare(itemB) : itemB.localeCompare(itemA);
  });
};

const AttractionSort = ({ items, sortBy, sortOrder, onToggleSortOrder, onMarkerClick }) => {
  const sortedItems = sortItems(items, sortBy, sortOrder);

  return (
    <div>
    <button onClick={onToggleSortOrder}>
      Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
    </button>
    {sortedItems.map((item) => (
      <div className="flexbox-container" key={item.id} onClick={() => onMarkerClick(item)}>
        <div className="flexbox-item">
          <h3>{item.name}</h3>
          <p>{item.location.formatted_address}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default AttractionSort;
