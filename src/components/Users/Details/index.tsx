/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Shell from "../../customs/Shell";
import back from "../../../assets/icons/back.svg";
import Header from "./Header";
import InfoCard from "./InfoCard";
import SectionComp from "./SectionComp";
import useDetails from "../../../hooks/users/useDetails";
import "./details.scss";

const Details = () => {
  const { setLoading, user, loading, sections, navigate } = useDetails();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Shell>
      <div className="back" role="button" onClick={() => navigate(-1)}>
        <img src={back} alt="Back icon" />
        <span>Back to Users</span>
      </div>
      <Header user={user} loading={loading} />
      <InfoCard user={user} loading={loading} />
      <div className="details-wrapper">
        {sections.map((section) => (
          <SectionComp
            key={section.title}
            cols={section.cols}
            section={section.title}
            body={section.body}
            loading={loading}
          />
        ))}
      </div>
    </Shell>
  );
};

export default Details;
