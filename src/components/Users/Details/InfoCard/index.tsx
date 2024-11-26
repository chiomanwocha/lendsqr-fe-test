import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as FilledStar } from "../../../../assets/icons/filled-star.svg";
import { DetailsProps } from "../../../../types";
import RenderIf from "../../../customs/RenderIf";
import useDetails from "../../../../hooks/users/useDetails";
import "./infocard.scss";

const Stars = ({ user }: { user: any }) => {
  const userTier = user?.profile?.user_tier ?? 0;

  return (
    <>
      {Array.from({ length: userTier }).map((_, i) => (
        <FilledStar key={`filled-${i}`} />
      ))}
      {Array.from({ length: 3 - userTier }).map((_, i) => (
        <Star key={`empty-${i}`} />
      ))}
    </>
  );
};

const InfoCard = ({ user, loading }: DetailsProps) => {
  const { navigations } = useDetails();

  return (
    <RenderIf
      condition={!loading}
      elseNode={
        <div className="info-wrapper">
          <div className="info-container">
            <div className="details">
              <div className="img-box loading-skeleton"></div>
              <div>
                <p className="loading-text full-name-skeleton"></p>
                <p className="loading-text account-number-skeleton"></p>
              </div>
            </div>
            <div className="tier">
              <p className="loading-text tier-skeleton"></p>
              <div className="stars-skeleton">
                {Array(3)
                  .fill(null)
                  .map((_, idx) => (
                    <span key={idx} className="loading-circle"></span>
                  ))}
              </div>
            </div>
            <div className="financials">
              <p className="loading-text amount-skeleton"></p>
              <p className="loading-text bank-details-skeleton"></p>
            </div>
          </div>
          <div className="nav" />
        </div>
      }
    >
      <div className="info-wrapper">
        <div className="info-container">
          <div className="details">
            <div className="img-box">
              <img
                src={user?.profile?.profile_image}
                alt={`${user?.profile?.full_name} profile img`}
              />
            </div>
            <div>
              <p className="full-name">{user?.profile?.full_name}</p>
              <p className="account-number">{user?.profile?.account_number}</p>
              <div className="stars">
                <Stars user={user} />
              </div>
            </div>
          </div>
          <div className="tier">
            <p>User’s Tier</p>
            <Stars user={user} />
          </div>
          <div className="financials">
            <p className="amount">
              ₦{user?.profile?.loan_amount.toLocaleString()}
            </p>
            <p>
              {user?.profile?.account_number} / {user?.profile?.bank_name}
            </p>
          </div>
        </div>
        <ul className="nav">
          {navigations.map((nav, idx) => (
            <li key={nav} className={idx === 0 ? "active" : ""}>
              {nav}
            </li>
          ))}
        </ul>
      </div>
    </RenderIf>
  );
};

export default InfoCard;
