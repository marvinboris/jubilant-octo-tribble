import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../components/UI/Logo';

import Toolbar from '../../components/Frontend/Navigation/Toolbar';

import './Frontend.scss';

class Layout extends Component {
    render() {
        const {
            children,
            content: {
                cms: {
                    global, pages: { frontend: { footer } }
                }, services
            }
        } = this.props;
        const lang = localStorage.getItem('frontend_lang');

        return <div className="Frontend">
            <Toolbar />

            <div className='main'>{children}</div>

            <footer>
                <div className='top'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 col-xl-3 company'>
                                <div className='title'>{footer.top.company.title}</div>

                                <div className='content'>
                                    <Link to={'/'}>{footer.top.company.menu.home}</Link>
                                    <Link to={'/about'}>{footer.top.company.menu.about}</Link>
                                    <Link to={'/services'}>{footer.top.company.menu.services}</Link>
                                    <Link to={'/publications'}>{footer.top.company.menu.publications}</Link>
                                    <Link to={'/contact'}>{footer.top.company.menu.contact}</Link>
                                </div>
                            </div>

                            <div className='col-md-4 col-xl-3 services'>
                                <div className='title'>{footer.top.services.title}</div>

                                <div className='content'>
                                    {services.map(service => <div key={JSON.stringify(service)}><Link to={service.link}>{service.title[lang]}</Link></div>)}
                                </div>
                            </div>

                            <div className='col-md-4 col-xl-3 contact'>
                                <div className='title'>{footer.top.contact.title}</div>

                                <p>{footer.top.contact.listen}</p>

                                <div className='content'>
                                    <div><i className='fas fa-fw fa-building' />{footer.top.contact.address}</div>
                                    <div><i className='fas fa-fw fa-phone' />{footer.top.contact.phone}</div>
                                    <div><i className='fas fa-fw fa-clock' />{footer.top.contact.hours}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottom'>
                    <div className='container'>
                        <div>
                            <div>© {(new Date()).getFullYear()} <Link className='app-name' to='/'>{global.app_name}</Link></div>
                            <div>{footer.bottom.all_rights} {global.company_name}</div>
                        </div>

                        <div>
                            <Logo />
                        </div>

                        <div className='social-networks'>{footer.bottom.social_networks.map(social_network => <a key={JSON.stringify(social_network)} href={social_network.link} target='_blank'><i className={'fab fa-' + social_network.icon} /></a>)}</div>
                    </div>
                </div>
            </footer>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Layout));