import * as React from 'react';

export interface State {
    isDragging: boolean;
    mouseX: null | number;
    mouseY: null | number;
    sX: number;
    sY: number;
}

class Cropper extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
            isDragging: false,
            mouseX: null,
            mouseY: null,
            sX: 0,
            sY: 0
        };
    }
    componentDidMount() {

    }
    handleMouseDown(e: any) {
        const { pageX, pageY } = e;
        this.setState({
            isDragging: true,
            mouseX: pageX,
            mouseY: pageY
        });
    }
    handleMouseUp(e: any) {
        const { pageX, pageY } = e;
        const _pageX = this.state.mouseY;
        const _pageY = this.state.mouseX;
        if (!!_pageX && !!_pageY) {
            const dX = _pageX - pageX;
            const dY = _pageY - pageY;
            this.setState({
                sX: this.state.sX + dX,
                sY: this.state.sY + dY
            });
        }

        this.setState({
            isDragging: false
        });
        console.log("MOUSE_UP")
    }
    handleMouseMove(e: any) {
        const { isDragging } = this.state;

        if (isDragging) {
            console.log(e.pageX);
        }
    }
    render() {
        const { sX, sY } = this.state;
        return (
            <div className="Cropper">
                <img src={'http://local.wedding-spot.com:9000/static/images/venues/1012/IMG_34401.jpg'} ref="image" />
                <div
                    style={{
                        top: sY + 'px',
                        left: sX + 'px'
                    }}
                    className="Cropper--crop-area"
                    onMouseDown={e => this.handleMouseDown(e)}
                    onMouseUp={e => this.handleMouseUp(e)}
                    onMouseMove={e => this.handleMouseMove(e)}
                />
            </div>
        );
    }
}

export default Cropper;