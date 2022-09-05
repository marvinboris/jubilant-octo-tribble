import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Action from '../../../../components/Backend/UI/List/Action';

import actions from '../../../../store/actions/backend/quotations';
import { updateObject, convertDate, htmlEntities } from '../../../../shared/utility';
import * as utility from '../utility';

class Index extends Component {
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
            content: {
                cms: {
                    pages: { backend: { components: { list: { action } }, pages: { quotations: { form } } } }
                }
            },
            backend: { quotations: { quotations = [] } },
        } = this.props;
        const lang = localStorage.getItem('backend_lang');

        const data = quotations.map(service => {
            const name = service.name[lang];

            return updateObject(service, {
                created_at: convertDate(service.created_at),
                name,
                action: <Action props={this.props} resource='quotations' item={service} />,
            });
        });

        return <utility.index.lifecycle.render className='Quotations' props={this.props} state={this.state} resource='quotations' data={data} fields={[
            { name: form.name, key: 'name' },
            { name: form.link, key: 'link' },
            { name: form.is_active, key: 'is_active' },
            { name: action, key: 'action', fixed: true }
        ]} />;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(actions.get(page, show, search)),
    delete: id => dispatch(actions.delete(id)),
    reset: () => dispatch(actions.reset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));