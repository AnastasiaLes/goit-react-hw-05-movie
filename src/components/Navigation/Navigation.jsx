
import { Nav, NavElement } from "./Navigation.styled";

export const Navigation = () => {
    return (
      <Nav>
        <NavElement to={{
          pathname: '/goit-react-hw-05-movie/'
        }}
          >Home</NavElement>
        <NavElement to={{
          pathname: '/goit-react-hw-05-movie/movies'
        }}>Movies</NavElement>
    </Nav>  
    )
}