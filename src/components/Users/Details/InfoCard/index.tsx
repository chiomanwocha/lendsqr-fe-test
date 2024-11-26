import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as FilledStar } from "../../../../assets/icons/filled-star.svg";
import { DetailsProps } from "../../../../types";
import avatar from "../../../../assets/icons/empty-avatar.svg";
import RenderIf from "../../../customs/RenderIf";
import useDetails from "../../../../hooks/users/useDetails";
import "./infocard.scss";

const Stars = ({ userTier }: { userTier: number }) => {
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
  const { navigations, userTier } = useDetails();

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
                {Array.from({ length: 3 }).map((_, idx) => (
                  <span key={`circle-${idx}`} className="loading-circle"></span>
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
                src={avatar}
                alt={`${user?.profile?.firstName || ""} ${
                  user?.profile?.lastName || ""
                }`}
              />
            </div>
            <div>
              <p className="full-name">
                {user?.profile?.firstName || ""} {user?.profile?.lastName || ""}
              </p>
              <p className="account-number">{user?.accountNumber || ""}</p>
              <div className="stars">
                <Stars userTier={userTier} />
              </div>
            </div>
          </div>
          <div className="tier">
            <p>User’s Tier</p>
            <Stars userTier={userTier} />
          </div>
          <div className="financials">
            <p className="amount">
              ₦{Number(user?.accountBalance || 0).toLocaleString()}
            </p>
            <p>
              {user?.accountNumber || ""} / {user?.profile?.address || ""}
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
