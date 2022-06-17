import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { convertDate } from '../../../../../shared/utility';

import './PublicationBlock.scss';

class PublicationBlock extends Component {
    render() {
        const {
            photo, title, created_at, link = '/'
        } = this.props;
        const lang = localStorage.getItem('lang');

        return <div className='UI PublicationBlock shadow-sm'>
            <div className='embed-responsive embed-responsive-16by9 bg-img' style={{ backgroundImage: 'url("' + photo + '")' }}>
                {!photo && <div className='title'>{title[lang]}</div>}
            </div>

            <div className='text'>
                <div className='date'>
                    <i className='fas fa-calendar-alt' />{convertDate(created_at)}
                </div>

                <Link to={link} className='title'>{title[lang]}</Link>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(PublicationBlock);