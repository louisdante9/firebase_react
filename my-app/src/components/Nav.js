import React from 'react';

const Nav = ({onClick}) => {
  console.log(onClick)
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href='/'>Grillz</a>
      <form className="form-inline">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=> {onClick()}}>Logout</button>
      </form>
    </nav>
  )
}

export default Nav;