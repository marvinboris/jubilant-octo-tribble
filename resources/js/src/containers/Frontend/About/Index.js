import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';

import PageTitle from '../../../components/Frontend/UI/Title/PageTitle';
import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';

import ServiceBlock from '../../../components/Frontend/UI/Blocks/ServiceBlock';
import TeamMemberBlock from '../../../components/Frontend/UI/Blocks/TeamMemberBlock';

import { getAbout, resetAbout } from '../../../store/actions/frontend/about';

import './About.scss';

class About extends Component {
    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: { cms: {
                pages: { frontend: { pages: { about: cms } } }
            }, services },
            frontend: { about: { team = [] } }
        } = this.props;
        const lang = localStorage.getItem('lang');

        const servicesContent = services.map(service => <div key={JSON.stringify(service)} className='col-md-6 col-xxl-4'><ServiceBlock {...service} /></div>);
        const teamContent = team.map(member => <TeamMemberBlock key={JSON.stringify(member)} {...{ ...member, job: member.job[lang] }} />);

        return <div className="About">
            <PageTitle {...cms} />

            <section className='about'>
                <div className='container'>
                    <SectionTitle {...cms.about} centered />
                    <div className='row'>
                        <div className='col-md-5 col-lg-4'>
                            <img src={cms.about.photo} className='img-fluid' />
                        </div>

                        <div className='col-md-7 col-lg-8'>
                            <p dangerouslySetInnerHTML={{ __html: cms.about.description }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='services'>
                <div className='container'>
                    <SectionTitle {...cms.services} centered />

                    <div className='row'>
                        {servicesContent}
                    </div>
                </div>
            </section>

            <section className='team'>
                <div className='container'>
                    <SectionTitle {...cms.team} centered />

                    {team.length > 0 && <OwlCarousel ref="team-carousel" options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 }, 1200: { items: 4 } }, dots: false, margin: 20 }}>{teamContent}</OwlCarousel>}
                </div>
            </section>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getAbout()),
    reset: () => dispatch(resetAbout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));