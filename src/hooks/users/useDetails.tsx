import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import users from "../../mocks/mock_users_500.json";

const useDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  const [loading, setLoading] = useState(true);

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

  const navigations = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return { setLoading, user, loading, sections, navigate, navigations };
};

export default useDetails;
