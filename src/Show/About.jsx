import React from 'react';
import { useState } from 'react';
import img from '../FotoProfil.jpg';
import './about.css';

function About(){
    const [nim, setNim] = useState("320200401022")
    const [nama, setNama] = useState("Rayhadi Fajri")
    const [desc, setDesc] = useState("Lulusan S1 dengan spesialisasi di pemasaran digital. Memiliki pengalaman dalam mengembangkan dan mengimplementasikan kampanye pemasaran digital melalui kesempatan magang di dua perusahaan multinasional. Mencari peluang kerja yang memberi kesempatan untuk semakin berkembang")
    return(
        <>  
            <div className='containers'>
                <div className='boxes'>
                    <img className='descs1' src={img}/>
                    <div className='box'>
                        <h4 className='descs'>My name is {nama}</h4>
                        <p className='descs'>Nim {nim}</p>
                        <p className='descs'>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;