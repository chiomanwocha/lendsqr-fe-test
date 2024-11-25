import RenderIf from "../../customs/RenderIf";
import "./card.scss";

interface CardProps {
  icon: string;
  title: string;
  value: string;
  loading: boolean;
}

const Card = ({ icon, title, value, loading }: CardProps) => {
  return (
    <div className={`card ${loading ? "loading" : ""}`}>
      <RenderIf
        condition={!loading}
        elseNode={
          <>
            <div className="skeleton icon-skeleton"></div>
            <div className="skeleton title-skeleton"></div>
            <div className="skeleton value-skeleton"></div>
          </>
        }
      >
        <div>
          <img src={icon} alt={`${title} icon`} />
        </div>
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </RenderIf>
    </div>
  );
};

export default Card;
