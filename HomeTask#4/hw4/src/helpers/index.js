import queryString from 'query-string';

const getItemById = (items, id) => items.find(item => item.id === id);

const getCategoryFromProps = props => {
  const { location } = props;
  return queryString.parse(location.search.slice(1)).category;
};

export { getItemById, getCategoryFromProps };
