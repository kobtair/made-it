import technologies from "../../data/technologies.json";
import { useState } from "react";

import {
  TechnologiesContainer,
  TechnologiesText,
  TechStackContainer,
  TechStackItem,
} from "./technologies.styles";

export default function Technologies() {
  const [currentTechnology, setCurrentTechnology] = useState(1);
  const handleClick = (data) => {
    setCurrentTechnology(data);
  };
  return (
    <TechnologiesContainer id="Technologies">
      <h1 className="heading">Technologies</h1>
      <div className="tech-categories">
        <TechnologiesText>
          {technologies.map((tech) => (
            <li
              key={tech.id}
              onClick={() => {
                handleClick(tech.id);
              }}
              className={`${tech.id === currentTechnology && "selected"}`}
              data-value={tech.name}
            >
              {tech.name}
            </li>
          ))}
        </TechnologiesText>
        <TechStackContainer>
          {technologies
            .find((tech) => tech.id === currentTechnology)
            .stack.map((stackItem) => (
              <TechStackItem key={stackItem.id}>
                <div className="image-container">
                  <img src={stackItem.imageUrl} alt={stackItem.name} />
                </div>
              </TechStackItem>
            ))}
        </TechStackContainer>
      </div>
    </TechnologiesContainer>
  );
}
