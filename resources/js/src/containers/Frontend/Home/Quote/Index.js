import React, { Component } from 'react';
import { connect } from 'react-redux';

import Error from '../../../../components/Messages/Error';

import './Quote.scss';

class Quote extends Component {
    // Lifecycle methods
    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { pages: { home: { quote: cms } } } }
                }, quotations,
            },
            frontend: { home: { error } },
        } = this.props;
        const lang = localStorage.getItem('frontend_lang');

        const quotationItems = quotations.sort((a, b) => a.name[lang].localeCompare(b.name[lang])).map(item => <div key={JSON.stringify(item)} className="quotation">
            <i className='fas fa-fw fa-caret-right' /> <a href={item.link} target="_blank">{item.name[lang]} <i className='fas fa-fw fa-external-link-alt' /></a>
        </div>)

        const errors = <>
            <Error err={error} />
        </>;

        const content = <>
            <div className='description'>{cms.form.description}</div>

            <div className='quotations'>
                {quotationItems}
            </div>
        </>;


        return <div className='Quote'>
            {errors}
            {content}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Quote);