import axios from 'axios';
import React from "react";
import List from "../PaginaUsuario/GaleriaPrueba";


function get() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
        <List source={post.results} />
    );
}
export default get;
/*
<div>
        <h1>{post.name}</h1>
      </div>
*/