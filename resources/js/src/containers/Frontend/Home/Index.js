import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';

import BannerCarousel from './BannerCarousel';

import Error from '../../../components/Messages/Error';
import Feedback from '../../../components/Messages/Feedback';

import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';
import ServiceBlock from '../../../components/Frontend/UI/Blocks/ServiceBlock';
import PublicationBlock from '../../../components/Frontend/UI/Blocks/PublicationBlock';
import TeamMemberBlock from '../../../components/Frontend/UI/Blocks/TeamMemberBlock';

import Input from '../../../components/UI/Input';

import { getHome, postNewsletter, postSubscribe, resetHome } from '../../../store/actions/frontend/home';

import './Home.scss';

const PolicyBlock = ({ title, description, cms }) => <div className='PolicyBlock'>
    <div className='title'>{title}</div>

    <div className='description'>{description}</div>

    <Link to={'/about'} className='btn btn-blue'>{cms.learn_more}<i className='fas fa-plus' /></Link>
</div>;

const TestimonyBlock = ({ name, job, photo }) => <div className='TestimonyBlock'>
    <div className='img'>
        <div className='bg-img' style={{ backgroundImage: 'url("' + photo + '")' }} />
    </div>

    <div className='name'>{name}</div>

    <div className='job'>{job}</div>
</div>;

const initialState = {
    name: '',
    email: '',
    service_id: '',
};

class Home extends Component {
    state = { ...initialState }



    // Component methods
    newsletterHandler = e => {
        e.preventDefault();
        if (!this.props.frontend.home.loading) this.props.newsletter(e.target);
    }

    subscribeHandler = e => {
        e.preventDefault();
        if (!this.props.frontend.home.loading) this.props.subscribe(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.frontend.home.message && this.props.frontend.home.message && this.props.frontend.home.message.type === 'success') this.setState({ ...initialState });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { pages: { home: cms } } }
                }, services
            },
            frontend: { home: { loading, error, message, testimonies = [], publications = [], team = [] } }
        } = this.props;
        const { name, email, service_id } = this.state;
        const lang = localStorage.getItem('lang');

        const policiesContent = cms.policy.carousel.map(policy => <PolicyBlock key={JSON.stringify(policy)} {...policy} cms={cms.policy} />);
        const servicesContent = services.map(service => <div key={JSON.stringify(service)} className='col-md-6 col-xxl-4'><ServiceBlock {...service} /></div>);
        const testimoniesContent = testimonies.map(testimony => <TestimonyBlock key={JSON.stringify(testimony)} {...{ ...testimony, job: testimony.job[lang] }} />);
        const publicationsContent = publications.map(publication => <div key={JSON.stringify(publication)} className='col-md-4'><PublicationBlock {...publication} /></div>);
        const teamContent = team.map(member => <TeamMemberBlock key={JSON.stringify(member)} {...{ ...member, job: member.job[lang] }} />);

        return <div className="Home">
            <div className='banner'>
                <div className="banner__container">
                    <div className="banner__text container">
                        <div className='row'>
                            <div className='col-10 col-md-8 col-xl-6'><div className='title text-24 text-md-28 text-xl-32'>{cms.banner.title}</div></div>

                            <div className='col-10 col-md-9 col-xl-8'><div className='subtitle text-14 text-md-16 text-xl-18'>{cms.banner.carousel[0].altText}</div></div>

                            <div className='col-12'>
                                <Link to={'/about'} className="about btn btn-white">{cms.banner.about}<i className='fas fa-address-card' /></Link>
                                <Link to={'/services'} className="btn btn-outline-white">{cms.banner.services}<i className='fas fa-concierge-bell' /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <BannerCarousel items={cms.banner.carousel} />
            </div>

            <section className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 col-lg-4'>
                            <img src={cms.about.photo} className='img-fluid' />
                        </div>

                        <div className='col-md-7 col-lg-8'>
                            <SectionTitle {...cms.about} />

                            <p dangerouslySetInnerHTML={{ __html: cms.about.description }} />

                            <div className='actions text-center text-md-left'>
                                <Link to={'/about'} className="about btn btn-outline-blue">{cms.about.read_more}<i className='fas fa-plus' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='policy'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='img'>
                                <img src={cms.policy.photo} />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <OwlCarousel ref="policy-carousel" options={{ items: 1, autoplay: true, dots: true }}>{policiesContent}</OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className='services'>
                <div className='container'>
                    <SectionTitle {...cms.services} />

                    <div className='row'>
                        {servicesContent}
                    </div>
                </div>
            </section>

            <section className='newsletter'>
                <div className='container'>
                    <SectionTitle {...cms.newsletter} centered />

                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <form onSubmit={this.newsletterHandler}>
                                <Error err={error} />
                                <Feedback message={message} />

                                <Input type='text' name='name' onChange={this.inputChangeHandler} value={name} label={cms.newsletter.name} required disabled={loading} />
                                <Input type='email' name='email' onChange={this.inputChangeHandler} value={email} label={cms.newsletter.email} required disabled={loading} />

                                <div className='submit'>
                                    <button className={'btn btn-outline-white' + (loading ? ' btn-disabled' : '')}>{cms.newsletter.submit}<i className='fas fa-paper-plane' /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='testimonies'>
                <div className='container'>
                    <SectionTitle {...cms.testimonies} />
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <p>{cms.testimonies.description}</p>

                            {testimonies.length > 0 && <OwlCarousel ref="testimonies-carousel" options={{ responsive: { 0: { items: 1 }, 500: { items: 2 }, 750: { items: 3 }, 1000: { items: 4 }, 1250: { items: 5 } }, center: true, dots: true, loop: true, autoplay: true }}>{testimoniesContent}</OwlCarousel>}
                        </div>
                    </div>
                </div>
            </section>

            <section className='subscribe'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form onSubmit={this.subscribeHandler}>
                                <Error err={error} />
                                <Feedback message={message} />

                                <Input type='text' name='name' onChange={this.inputChangeHandler} value={name} icon="user" placeholder={cms.subscribe.name} required disabled={loading} />
                                <Input type='email' name='email' onChange={this.inputChangeHandler} value={email} icon="envelope" placeholder={cms.subscribe.email} required disabled={loading} />
                                <Input type='select' name='service_id' onChange={this.inputChangeHandler} value={service_id} icon="concierge-bell" placeholder={cms.subscribe.service} required disabled={loading}>
                                    <option value="">{cms.subscribe.select_service}</option>
                                    {services.sort((a, b) => a.title[lang].localeCompare(b.title[lang])).map(service => <option key={JSON.stringify(service)} value={service.id}>{service.title[lang]}</option>)}
                                </Input>

                                <div className='submit'>
                                    <button className={'btn btn-blue btn-block' + (loading ? ' btn-disabled' : '')}>{cms.subscribe.submit}</button>
                                </div>
                            </form>
                        </div>

                        <div className='col-md-6'>
                            <SectionTitle {...cms.subscribe} />

                            <img src={cms.subscribe.photo} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='team'>
                <div className='container'>
                    <SectionTitle {...cms.team} centered />

                    {team.length > 0 && <OwlCarousel ref="team-carousel" options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 }, 1200: { items: 4 } }, dots: false, margin: 20 }}>{teamContent}</OwlCarousel>}
                </div>
            </section>

            <section className='publications'>
                <div className='container'>
                    <div className='row'>{publicationsContent}</div>
                </div>
            </section>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getHome()),
    newsletter: data => dispatch(postNewsletter(data)),
    subscribe: data => dispatch(postSubscribe(data)),
    reset: () => dispatch(resetHome()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));