import '../styles/Form.css';

export default function Form() {
    return (
        <div className='PopForm'>
            <div className='Form'>
            <div className='FormHeading'>Enter your details</div>
            <div className='FormInputs'>
            <input type="text" autofocus="autofocus" style={{display:"none"}} />
            <div className='Field'>
                <div className='InputLabel'>Name *</div>
                <div className='TextField'><input placeholder='Full Name *' className='InputText'></input></div>
            </div>
            <div className='Field' style={{paddingBottom:"66px"}}>
                <div className='InputLabel'>Email address *</div>
                <div className='TextField'><input placeholder='example@gmail.com' className='InputText'></input></div>
            </div>
            <div><button className='Submit'>Send Brochure to my mail</button></div>
            </div>
        </div>
        </div>
    );
}