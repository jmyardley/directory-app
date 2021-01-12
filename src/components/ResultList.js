import React from "react";

function ResultList(props) {
  return (
    <table className="table table-bordered">
      <tbody>
        {props.results.map(result => (
          <tr key={result.id}>
            <td><img src={result.picture.thumbnail} alt={result.name.first}></img></td><td>{result.name.first}</td><td>{result.name.last}</td><td>{result.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
