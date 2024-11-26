/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchUserById } from "../../api/services";
import { SingleUser } from "../../types";

const useDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<SingleUser>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const data = await fetchUserById(id);
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const userTier = useMemo(() => Math.floor(Math.random() * 3) + 1, []);

  const sections = [
    {
      title: "Personal Information",
      cols: 4,
      body: [
        {
          title: "Full Name",
          content: `${user?.profile?.firstName || ""} ${
            user?.profile?.lastName || ""
          }`,
        },
        { title: "Phone Number", content: user?.profile?.phoneNumber || "" },
        { title: "Email Address", content: user?.email || "" },
        { title: "BVN", content: user?.profile?.bvn || "" },
        { title: "Gender", content: user?.profile?.gender || "" },
        { title: "Address", content: user?.profile?.address || "" },
        { title: "Currency", content: user?.profile?.currency || "" },
      ],
    },
    {
      title: "Education and Employment",
      cols: 4,
      body: [
        { title: "Level of Education", content: user?.education?.level || "" },
        {
          title: "Employment Status",
          content: user?.education?.employmentStatus || "",
        },
        {
          title: "Sector of Employment",
          content: user?.education?.sector || "",
        },
        {
          title: "Duration of Employment",
          content: user?.education?.duration || "",
        },
        { title: "Office Email", content: user?.education?.officeEmail || "" },
        {
          title: "Monthly Income",
          content: user?.education?.monthlyIncome
            ? user?.education?.monthlyIncome.join(" - ")
            : "",
        },
        {
          title: "Loan Repayment",
          content: user?.education?.loanRepayment || "",
        },
      ],
    },
    {
      title: "Socials",
      cols: 3,
      body: [
        { title: "Twitter", content: user?.socials?.twitter || "" },
        { title: "Facebook", content: user?.socials?.facebook || "" },
        { title: "Instagram", content: user?.socials?.instagram || "" },
      ],
    },
    {
      title: "Guarantors",
      cols: 4,
      body: [
        {
          title: "Full Name",
          content: `${user?.guarantor?.firstName || ""} ${
            user?.guarantor?.lastName || ""
          }`,
        },
        { title: "Phone Number", content: user?.guarantor?.phoneNumber || "" },
        { title: "Gender", content: user?.guarantor?.gender || "" },
        { title: "Address", content: user?.guarantor?.address || "" },
      ],
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

  return { user, loading, sections, navigate, navigations, userTier };
};

export default useDetails;
