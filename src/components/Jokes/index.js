import "./index.css";
const Jokes = (props) => {
  const jokes = props;
  console.log(jokes.jokes);

  return (
    <tr>
      <td>{jokes.jokes.category}</td>
      <td>{jokes.jokes.type}</td>
      <td>{jokes.jokes.lang}</td>
      <td>{jokes.jokes.type}</td>
      <td>{jokes.jokes.joke}</td>
    </tr>
  );
};
export default Jokes;
