import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../../../components/UI/Preloaders/Loading';

import PageTitle from '../../../components/Frontend/UI/Title/PageTitle';
import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';
import ServiceBlock from '../../../components/Frontend/UI/Blocks/ServiceBlock';

import { getServices, resetServices } from '../../../store/actions/frontend/services';

import './Services.scss';

class Services extends Component {
    state = { isMounted: false }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
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
            frontend: { services: { loading, services = [] } }
        } = this.props;

        const publicationsContent = services.map(service => <div className='col-md-6 col-xxl-4' key={JSON.stringify(service)}><ServiceBlock {...service} /></div>);

        return <Loading loading={this.state.isMounted && loading}>
            <div className="Services">
                <PageTitle {...cms} />

                <section className='services'>
                    <div className='container'>
                        <SectionTitle {...cms.services} />

                        <p>{cms.services.description}</p>

                        <div className='row'>{publicationsContent}</div>
                    </div>
                </section>
            </div>
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getServices()),
    reset: () => dispatch(resetServices()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Services));