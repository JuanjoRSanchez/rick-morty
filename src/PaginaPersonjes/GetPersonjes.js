import axios from 'axios';
import React from "react";
import GaleriaPersonajes from "./GaleriaPersonajes";


function getPersonajes() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
        <GaleriaPersonajes source={post.results} />
    );
}
export default getPersonajes;
