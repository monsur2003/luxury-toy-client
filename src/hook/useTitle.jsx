import { useEffect } from "react";

const useTitle = (title) => {
   useEffect(() => {
      document.title = `${title}-PlayDrive`;
   }, [title]);
};

export default useTitle;
