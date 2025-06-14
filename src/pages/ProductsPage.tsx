
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/products/all", { replace: true });
  }, [navigate]);

  return null;
}
