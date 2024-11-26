import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

const useLogin = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isDisabled = useMemo(() => {
    return (
      details.password.length < 5 ||
      Object.keys(details).some((item) => item === "")
    );
  }, [details]);

  const navigate = useNavigate();
  return { navigate, details, handleInputChange, isDisabled };
};

export default useLogin;
