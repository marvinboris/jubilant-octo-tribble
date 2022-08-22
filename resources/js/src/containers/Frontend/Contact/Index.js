import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Loading from '../../../components/UI/Preloaders/Loading';

import Error from '../../../components/Messages/Error';
import Feedback from '../../../components/Messages/Feedback';

import PageTitle from '../../../components/Frontend/UI/Title/PageTitle';
import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';

import Input from '../../../components/UI/Input';

import { postContact, resetContact } from '../../../store/actions/frontend/contact';

import './Contact.scss';

const initialState = {
    name: '',
    email: '',
    message: '',
}

class Contact extends Component {
    state = { ...initialState, isMounted: false, componentLoading: false }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (!this.props.frontend.contact.loading) this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.setState({ isMounted: true, componentLoading: true }, () => setTimeout(() => {
            this.setState({ componentLoading: false });
        }, 250));
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.frontend.contact.message && this.props.frontend.contact.message && this.props.frontend.contact.message.type === 'success') this.setState({ ...initialState });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: { cms: {
                pages: { frontend: { pages: { contact: cms } } }
            } },
            frontend: { contact: { loading, error, message: backend_message } }
        } = this.props;
        const { name, email, message, isMounted, componentLoading } = this.state;

        return <Loading loading={isMounted && componentLoading}>
            <div className="Contact">
                <PageTitle {...cms} />

                <section className='contact'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-6'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15919.402202656811!2d9.6971916!3d4.0508907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cb0b54eda30f0fa!2sLeader%20Assurance!5e0!3m2!1sfr!2scm!4v1661138882340!5m2!1sfr!2scm" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>

                            <div className='col-lg-6'>
                                <SectionTitle {...cms.contact} centered />

                                <p>{cms.contact.description}</p>

                                <Error err={error} />
                                <Feedback message={backend_message} />

                                <form onSubmit={this.saveHandler}>
                                    <Input type='text' name='name' onChange={this.inputChangeHandler} value={name} placeholder={cms.contact.name} required disabled={loading} />
                                    <Input type='email' name='email' onChange={this.inputChangeHandler} value={email} placeholder={cms.contact.email} required disabled={loading} />
                                    <Input type='textarea' name='message' onChange={this.inputChangeHandler} value={message} placeholder={cms.contact.message} required disabled={loading} />

                                    <div className='submit'>
                                        <button className={'btn btn-blue' + (loading ? ' btn-disabled' : '')}>{cms.contact.submit}<i className='fas fa-paper-plane' /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Loading>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    post: data => dispatch(postContact(data)),
    reset: () => dispatch(resetContact()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));