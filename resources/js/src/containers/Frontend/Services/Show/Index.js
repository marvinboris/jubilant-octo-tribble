import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../../../../components/UI/Preloaders/Loading';

import PageTitle from '../../../../components/Frontend/UI/Title/PageTitle';

import { getService, resetServices } from '../../../../store/actions/frontend/services';

import './Show.scss';

class Services extends Component {
    state = { isMounted: false }



    // Lifecycle methods
    componentDidMount() {
        this.props.get(this.props.match.params.slug);
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: { cms: {
                pages: { frontend: { pages: { services: cms } } }
            } },
            frontend: { services: { loading, service } }
        } = this.props;
        let content;
        const lang = localStorage.getItem('frontend_lang');

        if (loading) content = <>
            <PageTitle title={cms.title} subtitle={cms.loading} />
        </>;
        else if (service) {
            const { title, body, icon } = service;

            content = <>
                <PageTitle title={cms.title} subtitle={title[lang]} />

                <section className='service'>
                    <div className='container'>
                        <div className="title">{title[lang]}</div>

                        <div className='content' dangerouslySetInnerHTML={{ __html: body[lang] }} />
                    </div>
                </section>
            </>;
        }

        return <Loading loading={this.state.isMounted && loading}>
            <div className="Services Show">
                {content}
            </div>
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(getService(slug)),
    reset: () => dispatch(resetServices()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Services));