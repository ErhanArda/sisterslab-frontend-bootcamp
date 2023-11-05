import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'; // Next.js router'ı içe aktar
const drawerWidth = 240;
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));
const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    marginTop: open ? theme.mixins.toolbar.minHeight : 0,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight,
    },
  },
}));

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // Menü öğesine tıklandığında rotaya yönlendirme yapacak fonksiyon
  const handleListItemClick = (path) => {
    router.push(path); // Rota yönlendirmesi
    if (isMobile) {
      setMobileOpen(false); // Eğer mobil ise, drawer'ı kapat
    }
  };
  // Menü öğeleri ve rotaları eşleştirme
  const menuItems = [
    { name: 'Characters', path: '/characters' },
    { name: 'Favorites', path: '/favorites' },
  ];

  const handleTitleClick = () => {
    router.push('/'); // Ana sayfaya yönlendirme
  };

  const drawerContent = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.name}
          onClick={() => handleListItemClick(item.path)}
        >
          <ListItemIcon>
            {item.name === 'Characters' ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleTitleClick} // Tıklama olayını işle
            sx={{ cursor: 'pointer' }}
          >
            Rick and Morty
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerContent}
      </StyledDrawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: `${theme.mixins.toolbar.minHeight}px` }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default DashboardLayout;
