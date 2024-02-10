import {Component} from "react";

import closeBtn from '../../icons/trailing-icon.svg'

import './question.scss'

export default class Question extends Component {
    render() {
        return(
            <div className="question">
                <div className="container">
                    <div className="question__title">Have any question?</div>
                    <div className="question__form">
                        <div className="question__heading">Email</div>
                        <div className="question__wrapper">
                            <input className='question__input' type="text" placeholder='Enter your email'/>
                            <img src={closeBtn} alt="closeBtn" className="question__closeBtn"/>
                            <div className="line"></div>
                        </div>
                        <div className="question__heading">Questions</div>
                        <div className="question__wrapper">
                            <input className='question__input' type="text" placeholder='Enter your questions'/>
                            <img src={closeBtn} alt="closeBtn" className="question__closeBtn"/>
                            <div className="line"></div>
                        </div>
                        <button className="question__btn">Send question</button>
                    </div>
                </div>
            </div>
        )
    }
}