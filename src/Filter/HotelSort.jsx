import 'react';

const sortItems = (items, sortBy, sortOrder) => {
  return items.slice().sort((a, b) => {
    const itemA = a[sortBy].toUpperCase();
    const itemB = b[sortBy].toUpperCase();

    if (sortOrder === 'asc') {
      return itemA.localeCompare(itemB);
    } else {
      return itemB.localeCompare(itemA);
    }
  });
};

const HotelSort = ({ items, sortBy, sortOrder, onToggleSortOrder }) => {
  const sortedItems = sortItems(items, sortBy, sortOrder);

  return (
    <div>
      <button onClick={onToggleSortOrder}>
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>
      {sortedItems.map((item) => (
        <div className="key" key={item.id} style={{ width: "18rem" }}>
        <div className="top" src={item.image} />
        <div className="body">
          <div className="title">{item.name}</div>
          <div className="text">{item.address}</div>
          <div className="text">
            Price: {item.price.options[0].formattedDisplayPrice}
          </div>
          <div className="text">
            Review Score: {item.reviews.score}
          </div>
          <div className="text">
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default HotelSort;
