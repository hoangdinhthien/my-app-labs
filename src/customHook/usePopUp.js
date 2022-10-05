import { useState } from "react";
const usePopUp = () => {
    const [film, setFilm] = useState( {} );
    const togglePopUp = ( movie ) => {
        setFilm( movie );
    };
    return {
        film,
        togglePopUp,
    };
};

export { usePopUp };