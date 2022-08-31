import React, { useState }  from 'react'
import { AppBar, styled, Toolbar, Box, Typography, InputBase, Menu, MenuItem } from "@mui/material";
import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material/';



export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  
  })
  const SocialBox = styled(Box)({
    display: 'felx',
    gap: 10
  });
  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
  })
  const SearchBox = styled(Box)({
    display: 'flex',
    // gap:
  })
  
  const MenuItems = [
    { Name: 'Home', Link: '#' },
    { Name: 'Search', Link: '#' },
    { Name: 'Contact us', Link: '#' },
    { Name: 'About us', Link: '#' },
  ]
  
  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ background: 'black',position:'static' }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder='Search...' sx={{ color: 'white' }} />
          <MenuIcon sx={{ cursor: 'pointer', display: { xs: 'block', sm: 'block', md: 'none' } }} onClick={()=>{setOpen(!open)}}/>
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{setOpen(!open)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:350,height:'90vh'}}>
        {MenuItems.map((item) => (
            <MenuItem sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</MenuItem>
          ))}
        </Box>

      </Menu>
    </AppBar>
  )
}
