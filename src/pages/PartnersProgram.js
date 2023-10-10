import '../styles/PartnersProgram.css';
import MailLogo from '../assets/MailIcon.svg';
import PhoneLogo from '../assets/PhoneIcon.svg';
import ProfilePhoto from '../assets/profilePicture.png';

export default function PartnersProgram() {
    return (
        <>
            <div className='PartnerHeading'><span style={{ color: "#5E1A88" }}>Grow</span> with Us</div>
            <div className='PartnerDesc'>
                <div className='Line1'>Akhil Systems Pvt Ltd (ASPL) is looking for Partners/Associates to work with ASPL in India & abroad to scale its business globally.</div>
                <div className='Line2'>Interested partners who are from Healthcare domain like Hospital consultants, Technology consultants, System integrators, Biomedical companies, Medical devices, Surgical items, Quality (NABH/JCI) & independent consultants etc. who have strong network in their respective healthcare field can reach the undersigned.</div>
            </div>
            <div className='Managers'>
                <div className='EachManager'>
                    <div className='ManagerPic'><img src={ProfilePhoto} alt='ProfilePic'></img></div>
                    <div className='ManagerDesc'>
                        <div className='ManagerName'>Mr. Debangshu Sengupta</div>
                        <div className='ManagerPos'>Asst. General Manager - Sales & Marketing</div>
                        <div className='ManagerMail'>
                            <div><img src={MailLogo} alt='MailLogo'></img></div>
                            <div>debangshu.sengupta@akhilsystems.com</div>
                        </div>
                        <div className='ManagerContact'>
                            <div><img src={PhoneLogo} alt='PhoneLogo'></img></div>
                            <div>+91 844 879 9453 (Whatsapp/Viber)</div>
                        </div>
                    </div>
                </div>
                <div className='EachManager'>
                    <div className='ManagerPic'><img src={ProfilePhoto} alt='ProfilePic'></img></div>
                    <div className='ManagerDesc'>
                        <div className='ManagerName'>Mr. Karan Kumar</div>
                        <div className='ManagerPos'>Head- Strategic Alliance</div>
                        <div className='ManagerMail'>
                            <div><img src={MailLogo} alt='MailLogo'></img></div>
                            <div>karan.kumar@akhilsystems.com</div>
                        </div>
                        <div className='ManagerContact'>
                            <div><img src={PhoneLogo} alt='PhoneLogo'></img></div>
                            <div>+91 995 318 8908 (Whatsapp/Viber)</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}