import Shell from "../../customs/Shell";
import back from "../../../assets/icons/back.svg";
import { useNavigate, useParams } from "react-router";
import Header from "./Header";
import InfoCard from "./InfoCard";
import users from "../../../mocks/mock_users_500.json";
import { useEffect, useState } from "react";
import RenderIf from "../../customs/RenderIf";

import "./details.scss";

const SectionComp = ({
  section,
  cols,
  body,
  loading,
}: {
  section: string;
  cols: number;
  loading: boolean;
  body: { title: string; content: string | undefined }[];
}) => {
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

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling animation
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  const sections = [
    {
      title: "Personal Information",
      cols: 5,
      body: [
        { title: "Full Name", content: user?.profile.full_name },
        { title: "Phone Number", content: user?.phone },
        { title: "Email Address", content: user?.email },
        { title: "BVN", content: user?.profile.personal_info.bvn },
        { title: "Gender", content: user?.profile.personal_info.gender },
        {
          title: "Marital Status",
          content: user?.profile.personal_info.marital_status,
        },
        { title: "Children", content: user?.profile.personal_info.children },
        {
          title: "Type of Residence",
          content: user?.profile.personal_info.type_of_residence,
        },
      ],
    },
    {
      title: "Education and Employment",
      cols: 4,
      body: [
        {
          title: "Level of Education",
          content: user?.profile.education_and_employment.level_of_education,
        },
        {
          title: "Employment Status",
          content: user?.profile.education_and_employment.employment_status,
        },
        {
          title: "Sector of Employment",
          content: user?.profile.education_and_employment.sector_of_employment,
        },
        {
          title: "Duration of Employment",
          content:
            user?.profile.education_and_employment.duration_of_employment,
        },
        {
          title: "Office Email",
          content: user?.profile.education_and_employment.office_email,
        },
        {
          title: "Monthly Income",
          content: user?.profile.education_and_employment.monthly_income,
        },
        {
          title: "Loan Repayment",
          content:
            user?.profile.education_and_employment.loan_repayment.toLocaleString(),
        },
      ],
    },
    {
      title: "Socials",
      cols: 4,
      body: [
        {
          title: "Twitter",
          content: user?.profile.socials.twitter,
        },
        {
          title: "Facebook",
          content: user?.profile.socials.facebook,
        },
        {
          title: "Instagram",
          content: user?.profile.socials.instagram,
        },
      ],
    },
    {
      title: "Guarantors",
      cols: 4,
      body:
        user?.profile.guarantors.flatMap((guarantor) => [
          { title: "Full Name", content: guarantor.full_name },
          { title: "Phone Number", content: guarantor.phone_number },
          { title: "Email Address", content: guarantor.email_address },
          { title: "Relationship", content: guarantor.relationship },
        ]) ?? [],
    },
  ];

  return (
    <Shell>
      <div className="back" role="button" onClick={() => navigate(-1)}>
        <img src={back} alt="Back icon" />
        <span>Back to Users</span>
      </div>
      <Header loading={loading} />
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
