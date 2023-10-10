import '../styles/Contact.css';
import SalesLogo from '../assets/SalesIcon.png';
import ContactLogo from '../assets/ContactLogo.png';
import MailIcon from '../assets/MailIcon.svg';
import PhoneIcon from '../assets/PhoneIcon.svg';


export default function Contact() {
    return (
        <div className='ContactPage'>
            <div className='ContactHeading'>Feel free to <span style={{ color: "#5E1A88" }}>Contact Us</span></div>
            <div className='ContactDetails'>
                <div className='SalesDept'>
                    <div className='ContactLogo'><img src={SalesLogo} alt='SalesLogo'></img></div>
                    <div className='MailInfo'><div><img src={MailIcon} alt='MailIcon'></img></div><div>sales@akhilsystems.com</div>
                    </div>
                    <div className='ContSep'></div>
                    <div className='MobInfo'>
                        <div className='ContactLogo'></div>
                        <div className='ContactList'>
                            <div className='EachMobile'>
                                <div><img src={PhoneIcon} alt='PhoneIcon'></img></div>
                                <div>+91 996 846 4439</div>
                            </div>
                            <div className='EachMobile'>
                                <div><img src={PhoneIcon} alt='PhoneIcon'></img></div>
                                <div>+91 879 179 8751</div>
                            </div>
                            <div className='EachMobile'>
                                <div><img src={PhoneIcon} alt='PhoneIcon'></img></div>
                                <div>+91 844 853 5001</div>
                            </div>
                            <div className='EachMobile'>
                                <div><img src={PhoneIcon} alt='PhoneIcon'></img></div>
                                <div>+91 995 318 8908</div>
                            </div>
                            <div className='EachMobile'>
                                <div><img src={PhoneIcon} alt='PhoneIcon'></img></div>
                                <div>+91 844 879 9453 <span color='#5E1A89'>(South India)</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SupportDept'>
                    <div className='ContactLogo'><img src={ContactLogo} alt='ContactLogo'></img></div>
                    <div className='MailInfo'><div><img src={MailIcon} alt='MailIcon'></img></div><div>support@akhilsystems.com</div>
                    </div>
                    <div className='ContSep'></div>
                    <div className='MobInfo'>
                        <div className='ContactLogo'></div>
                        <div className='ContactList'>
                            <div className='EachMobile'>
                                <div><img src={PhoneIcon} alt='PhoneIcon'></img></div>
                                <div>+91 8447846239</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AddressDetails'>
                <div className='ContactHeading' style={{ paddingTop: "96px" }}>Our <span style={{ color: "#5E1A88" }}>Addresses</span></div>
                <div className='Offices'>
                    <div className='EachOffice'>
                        <div className='OfficeName'>Registered Office</div>
                        <div className='OfficeLocation'>New Delhi address</div>
                        <div className='ContSep'></div>
                        <div className='OfficeAddress'>
                            205-206, Vardhman Times Plaza,
                            Plot No. 13, Rd No. 44,
                            Pitampura Commercial Complex,
                            Pitampura,
                            New Delhi - 110034
                        </div>
                    </div>
                    <div className='EachOffice'>
                        <div className='OfficeName'>Development Office</div>
                        <div className='OfficeLocation'>Gurugram</div>
                        <div className='ContSep'></div>
                        <div className='OfficeAddress'>
                            Incuspaze Building, 5th Floor,
                            Plot No. 17, Sector 18, Udyog Vihar Phase 4,
                            Gurugram,
                            Haryana - 122015
                        </div>
                    </div>
                    <div className='EachOffice'>
                        <div className='OfficeName'>South India Office</div>
                        <div className='OfficeLocation'>Hyderabad & Chennai</div>
                        <div className='ContSep'></div>

                        <div className='OfficeAddress'>
                            <span>Contact Person 1 </span>: Mr. Ram Kumar<br></br>
                            <span>Phone :</span> +91 988 451 9358
                            <br></br><br></br>
                            <span>Contact Person 2 :</span> Mr. Debangshu Sengupta<br></br>
                            <span>Phone :</span> +91 844 879 9453
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}