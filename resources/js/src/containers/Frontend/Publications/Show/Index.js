import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageTitle from '../../../../components/Frontend/UI/Title/PageTitle';

import { getPublication, resetPublications } from '../../../../store/actions/frontend/publications';

import './Show.scss';

class Publications extends Component {
    // Lifecycle methods
    componentDidMount() {
        this.props.get(this.props.match.params.slug);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: { cms: {
                pages: { frontend: { pages: { publications: cms } } }
            } },
            frontend: { publications: { loading, publication } }
        } = this.props;
        let content;
        const lang = localStorage.getItem('lang');

        if (loading) content = <>
            <PageTitle title={cms.title} subtitle={cms.loading} />
        </>;
        else if (publication) {
            const { title, author, body, photo } = publication;

            content = <>
                <PageTitle title={cms.title} subtitle={title[lang]} />

                <section className='publication'>
                    <div className='container'>
                        <div className="title">{title[lang]}</div>

                        <div className='author'>{cms.written_by} <span>{author}</span></div>

                        <div className="embed-responsive embed-responsive-16by9 bg-img" style={{ backgroundImage: 'url("' + photo + '")' }} />

                        <div className='content' dangerouslySetInnerHTML={{ __html: body[lang] }} />
                    </div>
                </section>
            </>;
        }

        return <div className="Publications Show">
            {content}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(getPublication(slug)),
    reset: () => dispatch(resetPublications()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Publications));