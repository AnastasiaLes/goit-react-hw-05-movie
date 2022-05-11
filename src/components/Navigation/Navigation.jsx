import { useLocation } from "react-router-dom";
import { Nav, NavElement } from "./Navigation.styled";

export const Navigation = () => {
  const location = useLocation();

    return (
      <Nav>
        <NavElement to={{
          pathname: '/goit-react-hw-05-movie/',
          state: {from: location}
        }}
          >Home</NavElement>
        <NavElement to={{
          pathname: '/goit-react-hw-05-movie/movies',
          state: location
        }}>Movies</NavElement>
    </Nav>  
    )
}