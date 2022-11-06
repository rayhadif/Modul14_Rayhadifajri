import React from 'react';
import './contact.css';

function Contact(){
    return(
        <>
            <div className='body'>
                <form action="" id='regist'>
                    <div>
                        <div className="foto">
                            <img alt="profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                            <br/>
                        </div>
                        <div>
                            <label for="FirstN=name"><input placeholder="Firstname" type='text' id='Firstname' name='name'/></label><br/><br/>
                            <label for="Lastname"><input placeholder="Lastname" type='text' id='Lastname' name='name'/></label><br/><br/>
                            <label for="email"><input placeholder="gmail" type='text' id='gmail' name='gmail'/></label><br/><br/>
                            <textarea rows="1.5" cols="20" placeholder='describe...'></textarea>
                        </div>
                    </div>
                    <label for="submit"> <input type="submit" id='submit' name="submit"/></label>
                </form>
            </div>
        </>
    )
}

export default Contact;