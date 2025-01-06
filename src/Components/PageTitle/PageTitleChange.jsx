import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitleChange({ title }) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
}

export default PageTitleChange;
