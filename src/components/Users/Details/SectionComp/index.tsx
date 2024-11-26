import { SectionCompProps } from "../../../../types";
import RenderIf from "../../../customs/RenderIf";
import "../details.scss";

const SectionComp = ({ section, cols, body, loading }: SectionCompProps) => {
  const loadingGrid = Array.from({ length: body.length });

  return (
    <div className="section">
      <h3 className="section-title">{section}</h3>
      <RenderIf
        condition={!loading}
        elseNode={
          <div className="skeleton-body">
            {loadingGrid.map((_, index) => (
              <div
                className="loading-skeleton-box title-skeleton"
                key={index}
              ></div>
            ))}
          </div>
        }
      >
        <div
          className="section-body"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {body.map((item, index) => (
            <div key={index} className="section-item">
              <p className="title">{item.title}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </RenderIf>
    </div>
  );
};

export default SectionComp;
