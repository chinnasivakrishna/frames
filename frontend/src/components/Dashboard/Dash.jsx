import React from 'react';
import { AppBar, Toolbar, Typography, Container, Tabs, Tab } from '@mui/material';
import './styles.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import {useNavigate} from 'react-router-dom'
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
function Dash() {
  const navigate = useNavigate();
  const cards = () => {
    navigate("/cards")
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" style={{ marginLeft: 16}}>
            Logo
            <nav className= 'tab' >
              <ul>
                <li><div onClick={cards}>All Cards</div></li>
                <li>Figma</li>
              </ul>
              </nav>
          </Typography>
       
          </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: 20, padding:20 }}>
      <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
                /> 
     
      </Container>
    </div>
  );
}

export default Dash;