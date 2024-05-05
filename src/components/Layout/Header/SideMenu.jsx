import React, { useState } from 'react'
import styles from './header.module.css';
import Chevron from '../../../assets/icons/Chevron.svg';
import navItems from '../../../util/navItems';
import { Link } from 'react-router-dom';

function SideMenu({ isOpen }) {

    
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSubMenu = (title) => {
        setOpenSubMenus(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

  return (
    <div className={isOpen ? `${styles.sideMenu} ${styles.open}` : styles.sideMenu}>
        {navItems.map((item, index) => (
            <div className={`${styles.sideMenuItem} ${item.subItems ? '' : styles.noSubItems}`} key={item.title}>
                <div className={`${styles.menuItemHeader} ${openSubMenus[item.title] ? styles.active : ''}`} onClick={() => toggleSubMenu(item.title)}>
                    <Link to={item.path}>{item.title}</Link>
                    {item.subItems && 
                    <div className={`${styles.chevronContainer} ${openSubMenus[item.title] ? styles.active : ''}`}>
                        <img src={Chevron} alt="Chevron Down" />
                    </div>
                    }
  
                </div>
                {openSubMenus[item.title] && item.subItems && (
                    <div className={styles.subMenu}>
                        {item.subItems.map(subItem => (
                            <Link className={styles.subItem} key={subItem.name} to={subItem.path}>{subItem.name}</Link>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default SideMenu;