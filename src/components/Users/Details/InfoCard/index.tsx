import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as FilledStar } from "../../../../assets/icons/filled-star.svg";
import RenderIf from "../../../customs/RenderIf";
import "./infocard.scss";

const InfoCard = ({ user, loading }: { user: any; loading: boolean }) => {
  const navigations = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

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
                <span className="loading-circle"></span>
                <span className="loading-circle"></span>
                <span className="loading-circle"></span>
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
                src={user?.profile.profile_image}
                alt={`${user?.profile.full_name} profile img`}
              />
            </div>
            <div>
              <p className="full-name">{user?.profile.full_name}</p>
              <p className="account-number">{user?.profile.account_number}</p>
            </div>
          </div>
          <div className="tier">
            <p>User’s Tier</p>
            {Array.from({ length: user?.profile?.user_tier ?? 0 })?.map(
              (_, i) => (
                <FilledStar key={i} />
              )
            )}
            {Array.from({ length: 3 - (user?.profile?.user_tier ?? 0) })?.map(
              (_, i) => (
                <Star key={i} />
              )
            )}
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
            <li key={nav} className={`${idx === 0 ? "active" : ""}`}>
              {nav}
            </li>
          ))}
        </ul>
      </div>
    </RenderIf>
  );
};

export default InfoCard;
