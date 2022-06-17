export const SortBy = ({ setSortByFilter }) => {
  return (
    <>
      <select
        defaultValue={"default"}
        onChange={(e) => {
          setSortByFilter(e.target.value);
        }}
        className="dropDown"
      >
        <option disabled value="default">
          Sort By
        </option>
        <option value="">None</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </>
  );
};
