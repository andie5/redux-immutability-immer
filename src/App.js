import { connect } from "react-redux";

const App = (props = []) => {
  return (
    <div>
      <h2>Items in array:</h2>
      <p>
        {props.items.map((item) => {
          return (
            <ul key={item.id}>
              <li>id: {item.id}</li>
              <li>Type: {item.type}</li>
              <li>Sale: {item.value}</li>
            </ul>
          );
        })}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state,
  };
};

export default connect(mapStateToProps)(App);
