import {Component} from "react";

import './FAQ.scss'

export default class FAQ extends Component {
    render() {
        return(
            <div className="faq">
                <div className="container">
                <div className="faq__title">FAQ</div>
                    <p className="faq__heading">When will I receive my tags?</p>
                    <div className="faq__descr">Please allow up to 4 days for your custom tag.</div>
                    <p className="faq__heading">How do you know how to pronounce my name correctly?</p>
                    <div className="faq__descr">We will contact you after you place your order. Or you can enter the
                        pronunciation in the <span>«Your requests»</span> field in the order form.
                    </div>
                    <p className="faq__heading">Can I use my voice tag for commercial projects?</p>
                    <div className="faq__descr">Yes, you have the full right to use it. Brand yourself! Become
                        known!
                    </div>
                    <p className="faq__heading">In what format will I receive my tag?</p>
                    <div className="faq__descr">All tags are sent in HIGH QUALITY WAV format. We make at least 3
                        recordings, each with sound FX, basic mix and the dry recording.
                    </div>
                    <p className="faq__heading">What are voice actor options?</p>
                    <div className="faq__descr">Choose from 4 different voice options: female, male, kids and anime
                        voice. If you require more than one brand tags, we got some package deals for you. Check the
                        «Prices» section for more info!
                    </div>
                    <p className="faq__heading">Can you make a vocal script?</p>
                    <div className="faq__descr">Of course! Need a voiceover for your instructional video or a
                        narrator for your commercial, film, or book reading? Email <a
                            href="#" className='Email'>mail@voicetaglab.com</a> to get your price quote!
                    </div>
                    <p className="faq__heading">What should I include in the «Your requests» section?</p>
                    <div className="faq__descr">This is where you share a bit about how you want your voice tag to
                        sound. This might include the style that best reflects your brand, or your desired special
                        effects.
                    </div>
                    <p className="faq__heading">Can I hear a tag before I pay?</p>
                    <div className="faq__descr">No, we don't get started until your order is processed, but each tag
                        is recorded several times and you get every recording - 3 to 5 in total! And we offer 2 free
                        revisions if you aren’t satisfied. We deliver results!
                    </div>
                    <p className="faq__heading">What is a revision?</p>
                    <div className="faq__descr">A revision is a change to your tag. If you aren’t satisfied with the
                        first version of your tag, we can revise it 2 times.
                        <div className="faq__wrapper">
                            The revisions include changes to: <br/>
                            <span className="blue">Effects</span>
                            <span className="blue">Tone</span>
                            <span className="blue">Speed</span>
                            <span> Revisions don’t include:</span>
                            <span className="red">Changes to the phrase wording. The phrase cannot be changed once the first version of the drop has been sent.</span>
                            <span className="red">Changes to the voice actor. We can't change the person who works with your tag.</span>
                        </div>
                    </div>
                    <p className="faq__heading">How long can a tag be?</p>
                    <div className="faq__descr">A tag can only be one phrase of 7 words or less. Multiple phrases won't
                        be accepted, but we offer some special pricing packages for multiple voice tags. If your tag is
                        longer than 7 words, it is considered as 2 tags.
                    </div>
                    <p className="faq__heading">Can I edit the phrase after purchase?</p>
                    <div className="faq__descr">Yes, but you got only 8 hours after your order is confirmed.</div>
                    <p className="faq__heading">I don't have a tag phrase yet. Can I still order?</p>
                    <div className="faq__descr">Yes, just include your producer name and we will contact you help to
                        figure out what you need.
                    </div>
                    <p className="faq__heading">Can you just add some effects for my own recording?</p>
                    <div className="faq__descr">Yes, email us at <a href="#" className='Email'>mail@voicetaglab.com</a> and we will discuss it.
                    </div>
            </div>
            </div>
        )
    }
}