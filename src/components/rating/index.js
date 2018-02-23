import React from 'react';
import './style.css';


class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.renderStars = this.renderStars.bind(this);
    }
    getStar(size, color) {
        let pts = [9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78];
        pts = pts.map((pt) => pt * size / 25);
        return (
            <svg height={size} width={size}  >
                <polygon className='star' points={pts.toString()} fill={color} style={{ fillRule: 'nonzero'}} />
            </svg>
        )
    }
    render() {
        return (
            <div className='star-five'>
                {this.renderStars()}
            </div>
        )
    }
    renderStars() {
        const { max, value, size, baseColor, color } = this.props;
        let stars = [];
        for (let i = 0; i < max; i++) {
            stars.push(this.getStar(size, i < value ? baseColor : color))
        }
        return stars;
    }
}
export default Rating;