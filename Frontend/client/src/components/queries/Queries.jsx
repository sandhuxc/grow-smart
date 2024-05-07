import { useState, useEffect } from "react";
import Query from "../query/Query";
import "./queries.scss";
import { v4 } from "uuid";

const Queries = () => {
  //TEMPORARY

  const [Queries, setQueires] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    getQueries();
  }, []);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const getQueries = async () => {
    let result = await fetch("http://localhost:8000/getQueries", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    // console.log("hloo" , result)
    console.log(result.result);
    setQueires(result);
  };
  return (
    <div className="queries">
      <select
        id="category"
        className="field_class"
        value={category}
        onChange={handleCategoryChange}
        required
      >
        <option value="ALL">ALL</option>
        <option value="Parenting Style">Parenting Style</option>
        <option value="Sleep Schedule">Sleep Schedule</option>
        <option value="Diet Related">Diet Realted</option>
        <option value="Activities">Activities</option>
        <option value="Toddler Development">Toddler Development</option>
        <option value="Child Emotional Development">
          Child Emotional Development
        </option>
        <option value="Others">Others</option>
      </select>

      {Queries.map((query) => {
        if (category == "ALL") {
          return <Query query={query} key={v4()} />;
        }
        if (query.category === category) {
          return <Query query={query} key={v4()} />;
        }
      })}
    </div>
  );
};

export default Queries;
