import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const Navbar = () => {
      return (
        <div>
           <AppBar title="My App">
            <Tabs >
              <Link href="/" >
                <Tab label="Main">
                  <a></a>
                </Tab>
              </Link>
              <Link href="/about">
                <Tab label="About">
                  <a></a>
                </Tab>
              </Link>
              <Link href="/work">
                <Tab label="Work">
                  <a></a>
                </Tab>
              </Link>
              <Link href="/contacts">
                <Tab label="Contacts">
                  <a></a>
                </Tab>
              </Link>
            </Tabs>
          </AppBar>
        </div>
      );
        

}

export default Navbar;