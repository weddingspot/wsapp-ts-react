import * as React from 'react';

const awardsLabel = require('../assets/img/homepage/awards-label.png');

export function Awards() {
    return (
        <div className="Awards">
            <div className="Awards--container">
                <img src={awardsLabel} className="Awards--label-img fl-l" style={{width: '130px'}} />
                <div className="Awards--text fl-l">
                    <h4>2016 WEDDING SPOT AWARDS WINNERS</h4>
                    <h5>From the classic to the eclectic, check out our couples' favorite venues!</h5>
                </div>

                <p className="Awards--button-wrapper fl-l">
                    <a href="#" className="Button Button--blue mt-5">See Winners</a>
                </p>
            </div>
        </div>
    );
}

export default Awards;