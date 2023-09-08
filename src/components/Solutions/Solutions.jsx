import solutions from "../../data/solutions.json";
import { useEffect, useState } from "react";
import {
  SolutionsContainer,
  SolutionItem,
  SolutionImage,
  SolutionText,
} from "./solutions.styles";

const INITIAL_ITEMS_TO_LOAD = 2;
const MAX_ITEMS_TO_LOAD = 4;

export default function Solutions() {
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [itemsToLoad, setItemsToLoad] = useState(INITIAL_ITEMS_TO_LOAD);

  useEffect(() => {
    setItemsToLoad(isSeeAll ? MAX_ITEMS_TO_LOAD : INITIAL_ITEMS_TO_LOAD);
  }, [isSeeAll]);

  const toggleSeeAll = () => {
    setIsSeeAll(!isSeeAll);
  };

  return (
    <SolutionsContainer id="Solutions">
      <h1 className="heading">Solutions</h1>
      {solutions.slice(0, itemsToLoad).map((solution) => (
        <SolutionItem
          key={solution.id}
          className={solution.id % 2 === 0 ? "odd" : ""}
        >
          <SolutionImage>
            <img src={solution.imageUrl} alt={solution.name} />
          </SolutionImage>
          <SolutionText>
            <h2>{solution.name}</h2>
            <p>{solution.desc}</p>
            
          </SolutionText>
        </SolutionItem>
      ))}
      <button onClick={toggleSeeAll} className="btn">
        {isSeeAll ? "SHOW LESS" : "SEE ALL SOLUTIONS"}{" "}
        {isSeeAll ? "↑" : "↓"}
      </button>
    </SolutionsContainer>
  );
}
