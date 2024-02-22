import {Component} from "react";

import logoInstagram from  '../../icons/instargram.svg'
import qr from '../../img/QRpng.png'

import './reviews.scss'
import './reviews-media.scss'

export default class Reviews extends Component {
    render() {
        return(
            <div className="reviews">
                <div className="container">
                    <div className="reviews__title">Reviews</div>
                    <div className="reviews__wrapper">
                        <div className="col-1">
                            <div className="reviews__item">recieved them.. They are perfect..  thank you for your serious 👍</div>
                            <div className="reviews__item reviews__item_359-deg">If someone ask me for a voice tag, i will  recommand your work</div>
                            <div className="reviews__item reviews__item_0-deg">Man you da shit bruh these go I’ll be at  you for more business 4sure 💯 and do  you mix and master? I do too but i be  getting bogged down i could use the help</div>
                            <div className="reviews__item">i’ve download it and they are dope  thanks man</div>
                        </div>
                        <div className="col-2">
                            <div className="instagram">
                                <div className="instagram__wrapper">
                                    <img src={logoInstagram} alt="instagram-icon" className="instagram__icon"/>
                                    <div className="instagram__text">more reviews  on our instagram</div>
                                </div>
                                <img src={qr} alt="" className="instagram__qrcode"/>
                                <div className="instagram__surname">@voicetaglab</div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="reviews__item reviews__item_359-deg">Thanks ! I just got it appreciate it  I’ll difinitely be buying another one  in the future 👍🏾👍🏾🤘🏾🤘🏾🔥</div>
                            <div className="reviews__item">Yo bro that’s sweet man thank you 🙏 love it</div>
                            <div className="reviews__item reviews__item_359-deg">Thank you very much!! It was fiery!!!  The wait was
                                worth it 🔥🔥🔥🔥🖤🔥🖤🔥🖤🔥🖤🖤🔥🖤🔥🖤🔥
                            </div>
                            <div className="reviews__item">amazing that’s exactly it 😍 you are  incredible i don’t
                                have the words ❤️
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}