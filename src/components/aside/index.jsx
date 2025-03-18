import React, { useEffect, useState } from 'react';
import { Nav, NavItem, NavLink, Button, AccordionHeader, Accordion, AccordionBody, AccordionItem, Offcanvas } from 'reactstrap';
import {
    FaShopify,
    FaBook,
    FaTruck,
    FaUsers,
    FaListAlt,
    FaEye,
    FaInfoCircle,
    FaShieldAlt,
    FaNewspaper,
    FaBell,
    FaComments,
    FaEnvelope,
    FaRegCommentDots,
    FaCalendarAlt,
    FaTasks,
    FaReceipt,
    FaUserShield,
    FaCog,
    FaLock,
} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'; // استفاده از نسخه RTL بوت‌استرپ
import { useTheme } from '../../context/themecontext';


const Sidebar = () => {

    const { isDark, isOpen, toggleOffcanvas } = useTheme();

    const [textcolor, settextcolor] = useState(isDark ? 'text-white' : 'text-dark')

    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {

        settextcolor(isDark ? 'text-white' : 'text-dark')

    }, [isDark]);




    return (
        <>
            <div
                className={`ms-3 d-none d-sm-block shadow ${isDark ? 'bg-dark' : 'bg-white'}`}
                style={{
                    width: '250px',
                }}
                dir="rtl" >

                <div className="m-3 d-flex justify-content-between align-items-center">
                    <h4 className={` mb-0 ${textcolor}`}>دایاتدبیر</h4>
                    <Button color="secondary" size="sm">
                        <FaCog />
                    </Button>
                </div>

                <div>
                    <Nav vertical className="p-2">
                        <NavItem>
                            <NavLink href="#" className={textcolor} >
                                <FaShopify style={{ marginLeft: '8px' }} />
                                فروشگاه
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaBook style={{ marginLeft: '8px' }} />
                                آموزش
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaTruck style={{ marginLeft: '8px' }} />
                                حمل و نقل
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaUsers style={{ marginLeft: '8px' }} />
                                کاربران
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Accordion style={{ backgroundColor: 'inherit' }} open={open} toggle={toggle}>
                                <AccordionItem className='border-0 outline-0 m-0 p-0'>
                                    <AccordionHeader targetId="1" >
                                        <FaListAlt style={{ marginLeft: '8px' }} />
                                        لیست
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">

                                        <FaEye style={{ marginLeft: '8px' }} />
                                        مشاهده

                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaInfoCircle style={{ marginLeft: '8px' }} />
                                جزئیات
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaShieldAlt style={{ marginLeft: '8px' }} />
                                امنیت
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaNewspaper style={{ marginLeft: '8px' }} />
                                اخبار
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaBell style={{ marginLeft: '8px' }} />
                                اعلانات
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaComments style={{ marginLeft: '8px' }} />
                                ارتباطات
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaEnvelope style={{ marginLeft: '8px' }} />
                                ایمیل
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaRegCommentDots style={{ marginLeft: '8px' }} />
                                پیام
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaCalendarAlt style={{ marginLeft: '8px' }} />
                                تقویم
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaTasks style={{ marginLeft: '8px' }} />
                                تسک‌ها
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaReceipt style={{ marginLeft: '8px' }} />
                                سفارش‌ها
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaUserShield style={{ marginLeft: '8px' }} />
                                سطح دسترسی
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <div className='pt-3 border-top'>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaCog />
                                مدیریت
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaLock />
                                امنیت
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>

            <Offcanvas
                className={` d-block d-sm-none ${isDark ? 'bg-dark' : 'bg-white'}`}
                style={{
                    width: '250px',
                    marginLeft: 'auto',
                    maxHeight: '100vh',
                    overflow: 'scroll'
                }}
                dir="rtl"
                isOpen={isOpen}
                toggle={toggleOffcanvas}>

                <div className="m-3 d-flex justify-content-between align-items-center">
                    <h4 className={` mb-0 ${textcolor}`}>دایاتدبیر</h4>
                    <Button color="secondary" size="sm">
                        <FaCog />
                    </Button>
                </div>

                <div>
                    <Nav vertical className="p-2">
                        <NavItem>
                            <NavLink href="#" className={textcolor} >
                                <FaShopify style={{ marginLeft: '8px' }} />
                                فروشگاه
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaBook style={{ marginLeft: '8px' }} />
                                آموزش
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaTruck style={{ marginLeft: '8px' }} />
                                حمل و نقل
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaUsers style={{ marginLeft: '8px' }} />
                                کاربران
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Accordion style={{ backgroundColor: 'inherit' }} open={open} toggle={toggle}>
                                <AccordionItem className='border-0 outline-0 m-0 p-0'>
                                    <AccordionHeader targetId="1" >
                                        <FaListAlt style={{ marginLeft: '8px' }} />
                                        لیست
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">

                                        <FaEye style={{ marginLeft: '8px' }} />
                                        مشاهده

                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaInfoCircle style={{ marginLeft: '8px' }} />
                                جزئیات
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaShieldAlt style={{ marginLeft: '8px' }} />
                                امنیت
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaNewspaper style={{ marginLeft: '8px' }} />
                                اخبار
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaBell style={{ marginLeft: '8px' }} />
                                اعلانات
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaComments style={{ marginLeft: '8px' }} />
                                ارتباطات
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaEnvelope style={{ marginLeft: '8px' }} />
                                ایمیل
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaRegCommentDots style={{ marginLeft: '8px' }} />
                                پیام
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaCalendarAlt style={{ marginLeft: '8px' }} />
                                تقویم
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaTasks style={{ marginLeft: '8px' }} />
                                تسک‌ها
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaReceipt style={{ marginLeft: '8px' }} />
                                سفارش‌ها
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaUserShield style={{ marginLeft: '8px' }} />
                                سطح دسترسی
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                {/* بخش پایین، منوهای مدیریتی */}
                <div className={` pt-3 border-top ${isDark && 'bg-dark'}`}>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaCog />
                                مدیریت
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className={textcolor}>
                                <FaLock />
                                امنیت
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

            </Offcanvas>

        </>
    );
};

export default Sidebar;


