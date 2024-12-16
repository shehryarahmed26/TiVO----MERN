import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => {
    setDrawerOpen(open)
  }

  return (
    <nav className="flex px-10 justify-between items-center py-4 border-gray-300 border-b">
      {/* Left Section: Logo & Links */}
      <div className="left flex items-center gap-10">
        <Link to="/" className="font-bold text-3xl">Logo.</Link>

        {/* Links: Hidden on mobile, visible on medium and up */}
        <div className="links gap-10 justify-center hidden md:flex">
          <Link className="text-lg" to="/Features">Features</Link>
          <Link className="text-lg" to="/Blogs">Blogs</Link>
          <Link className="text-lg" to="/Aboutus">About Us</Link>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Auth Section (visible on medium and up screen sizes) */}
      <div className="auth flex gap-5 hidden md:flex">
        <Link to="/auth/signup">
          <p className="bg-blue-500 text-white px-4 py-1 rounded">Signup</p>
        </Link>
        <Link to="/auth/login">
          <p className="bg-black text-white px-4 py-1 rounded">Login</p>
        </Link>
      </div>

      {/* Drawer (for mobile view) */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List className="w-64" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
          <ListItem>
            <ListItemText>
              <Link to="/Features" className="block py-2 text-lg">Features</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/Blogs" className="block py-2 text-lg">Blogs</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/Aboutus" className="block py-2 text-lg">About Us</Link>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Link to="/auth/signup" className="block py-2 text-lg">
                <p className="bg-blue-500 text-white px-4 py-1 rounded">Signup</p>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/auth/login" className="block py-2 text-lg">
                <p className="bg-black text-white px-4 py-1 rounded">Login</p>
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
}

export default Navbar;