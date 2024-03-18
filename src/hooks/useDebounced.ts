import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../Contexts/Context";

const useDebounced = () => {
  const timeOutRef = useRef<number | null>(null);
  const { setSearchValue, setCurrentPage } = useContext(AppContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      setSearchValue(value);
    }, 300);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return handleInputChange;
};

export default useDebounced;
