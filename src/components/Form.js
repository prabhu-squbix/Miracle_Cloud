import '../styles/Form.css';
import React from 'react';
export default function Form() {
    const windowWidth = (((window.innerWidth - 657) / 2) / window.innerWidth) * 100;
    return (
        <div className='PopForm' style={{ paddingLeft: `${windowWidth}vw` }}>
            <div className='Form'>
                <div className='FormHeading'>Enter your details</div>
                <div className='FormInputs'>
                    <input type="text" autofocus="autofocus" style={{ display: "none" }} />
                    <div className='ColOne'>
                        <div className='EachField'>
                            <div className='TextField'><input placeholder='Full Name *' className='InputText'></input></div>
                        </div>
                        <div className='EachField'>
                            <div className='TextField'>
                                <select placeholder='Select' className='InputText OptionSelector' id="products" name="prodList" form="prodform">
                                    <option value="" disabled selected hidden>Select Product</option>
                                    <option value="Cloud HIS">Cloud HIS</option>
                                    <option value="Advanced HIS">Advanced HIS</option>
                                    <option value="LIS">LIS</option>
                                    <option value="RIS">RIS</option>
                                    <option value="Clinic">Clinic</option>
                                    <option value="Pharmacy">Pharmacy</option>
                                    <option value="EMR">EMR</option>
                                </select></div>
                        </div>
                        <div className='EachField'>
                            <div className='TextField'><input placeholder='Hospital/Clinic/OrgName' className='InputText'></input></div>
                        </div>
                    </div>
                    <div className='ColTwo'>
                        <div className='EachField'>
                            <div className='TextField'><input placeholder='Email' className='InputText'></input></div>
                        </div>
                        <div className='EachField'>
                            <div className='TextField'><input placeholder='Mobile No.' className='InputText'></input></div>
                        </div>
                        <div className='EachField'>
                            <div className='TextField'><input placeholder='Location' className='InputText'></input></div>
                        </div>
                    </div>
                </div>
                <div className='MsgBox'>
                    <textarea placeholder='Message' className='Msg'></textarea>
                </div>
                <div className='Submit'><button className='SubmitBtn'>Send Brochure to my mail</button></div>
            </div>
        </div>
    );
}