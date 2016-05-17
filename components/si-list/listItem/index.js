/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {PropTypes} from 'react-router'
import classnames from 'classnames';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    };
    handleTouchEnd(event) {
        if(!this.props.href) {
            return;
        }
        this.context.router.push(this.props.href);
    };
    render() {
        let {className} = this.props;
        let classes = classnames({
            "list-item": true,
            "flex": true,
            [className]: className
        });
        return (
            <li className={classes} onTouchEnd={this.handleTouchEnd.bind(this)}>
                {this.props.img ? <div className="item"><img src={this.props.img} /></div> : null}
                <div className="item-inner flex">
                    <div className="item-prev">{this.props.prev}</div>
                    <div className="item-back">{this.props.next}</div>
                </div>
            </li>
        )
    }
}
ListItem.defaultProps = {
    img: null,
    prev: "",
    next: ""
};
ListItem.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ListItem;