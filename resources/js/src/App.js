import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import ErrorBoundary from './hoc/ErrorBoundary';

import AuthUserLayout from './containers/Auth/User/Layout';
import AuthAdminLayout from './containers/Auth/Admin/Layout';
import FrontendLayout from './containers/Frontend/Layout';
import BackendManagerLayout from './containers/Backend/Manager/Layout';

import Spinner from './components/UI/Preloaders/Spinner';
import Loading from './components/UI/Preloaders/Loading';

import { authCheckState } from './store/actions/auth';

import 'aos/dist/aos.css';

// Manager routes
const asyncManagerCmsGlobal = lazy(() => import('./containers/Backend/Manager/Cms/Global'));
const asyncManagerCmsGeneral = lazy(() => import('./containers/Backend/Manager/Cms/General'));
const asyncManagerCmsAuth = lazy(() => import('./containers/Backend/Manager/Cms/Auth'));
const asyncManagerCmsBackend = lazy(() => import('./containers/Backend/Manager/Cms/Backend'));
const asyncManagerCmsFrontend = lazy(() => import('./containers/Backend/Manager/Cms/Frontend'));

const asyncManagerDashboard = lazy(() => import('./containers/Backend/Manager/Dashboard'));

const asyncManagerFeatures = lazy(() => import('./containers/Backend/Manager/Features'));
const asyncManagerFeaturesAdd = lazy(() => import('./containers/Backend/Manager/Features/Add'));
const asyncManagerFeaturesEdit = lazy(() => import('./containers/Backend/Manager/Features/Edit'));

const asyncManagerLanguages = lazy(() => import('./containers/Backend/Manager/Languages'));
const asyncManagerLanguagesAdd = lazy(() => import('./containers/Backend/Manager/Languages/Add'));
const asyncManagerLanguagesEdit = lazy(() => import('./containers/Backend/Manager/Languages/Edit'));

const asyncManagerRoles = lazy(() => import('./containers/Backend/Manager/Roles'));
const asyncManagerRolesAdd = lazy(() => import('./containers/Backend/Manager/Roles/Add'));
const asyncManagerRolesEdit = lazy(() => import('./containers/Backend/Manager/Roles/Edit'));

const asyncManagerSettingsLanguage = lazy(() => import('./containers/Backend/Manager/Settings/Language'));

const asyncManagerPublications = lazy(() => import('./containers/Backend/Manager/Publications'));
const asyncManagerPublicationsAdd = lazy(() => import('./containers/Backend/Manager/Publications/Add'));
const asyncManagerPublicationsEdit = lazy(() => import('./containers/Backend/Manager/Publications/Edit'));

const asyncManagerSubscribers = lazy(() => import('./containers/Backend/Manager/Subscribers'));
const asyncManagerSubscribersAdd = lazy(() => import('./containers/Backend/Manager/Subscribers/Add'));
const asyncManagerSubscribersEdit = lazy(() => import('./containers/Backend/Manager/Subscribers/Edit'));

const asyncManagerServices = lazy(() => import('./containers/Backend/Manager/Services'));
const asyncManagerServicesAdd = lazy(() => import('./containers/Backend/Manager/Services/Add'));
const asyncManagerServicesEdit = lazy(() => import('./containers/Backend/Manager/Services/Edit'));

const asyncManagerTestimonies = lazy(() => import('./containers/Backend/Manager/Testimonies'));
const asyncManagerTestimoniesAdd = lazy(() => import('./containers/Backend/Manager/Testimonies/Add'));
const asyncManagerTestimoniesEdit = lazy(() => import('./containers/Backend/Manager/Testimonies/Edit'));

const asyncManagerTeamMembers = lazy(() => import('./containers/Backend/Manager/TeamMembers'));
const asyncManagerTeamMembersAdd = lazy(() => import('./containers/Backend/Manager/TeamMembers/Add'));
const asyncManagerTeamMembersEdit = lazy(() => import('./containers/Backend/Manager/TeamMembers/Edit'));

const asyncManagerPartners = lazy(() => import('./containers/Backend/Manager/Partners'));
const asyncManagerPartnersAdd = lazy(() => import('./containers/Backend/Manager/Partners/Add'));
const asyncManagerPartnersEdit = lazy(() => import('./containers/Backend/Manager/Partners/Edit'));

const asyncManagerUsers = lazy(() => import('./containers/Backend/Manager/Users'));
const asyncManagerUsersAdd = lazy(() => import('./containers/Backend/Manager/Users/Add'));
const asyncManagerUsersEdit = lazy(() => import('./containers/Backend/Manager/Users/Edit'));

// Admin routes
const asyncAdminAdmins = lazy(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = lazy(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = lazy(() => import('./containers/Backend/Admin/Admins/Edit'));

// Auth routes
const asyncAuthUserLogin = lazy(() => import('./containers/Auth/User/Login'));

const asyncAuthAdminLogin = lazy(() => import('./containers/Auth/Admin/Login'));
const asyncAuthAdminVerify = lazy(() => import('./containers/Auth/Admin/Verify'));

// Frontend routes
const asyncHome = lazy(() => import('./containers/Frontend/Home'));
const asyncAbout = lazy(() => import('./containers/Frontend/About'));
const asyncContact = lazy(() => import('./containers/Frontend/Contact'));

const asyncPublications = lazy(() => import('./containers/Frontend/Publications'));
const asyncPublicationsShow = lazy(() => import('./containers/Frontend/Publications/Show'));

const asyncServices = lazy(() => import('./containers/Frontend/Services'));
const asyncServicesShow = lazy(() => import('./containers/Frontend/Services/Show'));

class App extends Component {
    componentDidMount() {
        this.props.authCheckState();
        init();
    }

    render() {
        const { content: { cms, countries }, auth: { role }, location: { pathname } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        const frontendRoutes = <Route path="/">
            <FrontendLayout>
                <Switch>
                    <Route path="/services/:slug" component={asyncServicesShow} />
                    <Route path="/services" component={asyncServices} />

                    <Route path="/publications/:slug" component={asyncPublicationsShow} />
                    <Route path="/publications" component={asyncPublications} />

                    <Route path="/contact" component={asyncContact} />
                    <Route path="/about" component={asyncAbout} />
                    <Route path="/" component={asyncHome} />
                </Switch>
            </FrontendLayout>
        </Route>;

        let routes = <Switch>
            <Route path="/auth/admin">
                <AuthAdminLayout>
                    <Switch>
                        <Route path="/auth/admin/verify" component={asyncAuthAdminVerify} />
                        <Route path="/auth/admin/login" component={asyncAuthAdminLogin} />
                    </Switch>
                </AuthAdminLayout>
            </Route>
            <Redirect path="/admin" to="/auth/admin/login" />

            <Route path="/auth/user">
                <AuthUserLayout>
                    <Switch>
                        <Route path="/auth/user/login" component={asyncAuthUserLogin} />
                    </Switch>
                </AuthUserLayout>
            </Route>
            <Redirect path="/user" to="/auth/user/login" />

            {frontendRoutes}
        </Switch>;

        if (isAuthenticated) {
            routes = <Switch>
                <Route path={['/user', '/admin']}>
                    <BackendManagerLayout>
                        <Switch>
                            <Route path="/admin/admins/:id/edit" component={asyncAdminAdminsEdit} />
                            <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                            <Route path="/admin/admins" component={asyncAdminAdmins} />

                            <Route path="/:manager/partners/:id/edit" component={asyncManagerPartnersEdit} />
                            <Route path="/:manager/partners/add" component={asyncManagerPartnersAdd} />
                            <Route path="/:manager/partners" component={asyncManagerPartners} />

                            <Route path="/:manager/team-members/:id/edit" component={asyncManagerTeamMembersEdit} />
                            <Route path="/:manager/team-members/add" component={asyncManagerTeamMembersAdd} />
                            <Route path="/:manager/team-members" component={asyncManagerTeamMembers} />

                            <Route path="/:manager/testimonies/:id/edit" component={asyncManagerTestimoniesEdit} />
                            <Route path="/:manager/testimonies/add" component={asyncManagerTestimoniesAdd} />
                            <Route path="/:manager/testimonies" component={asyncManagerTestimonies} />

                            <Route path="/:manager/services/:id/edit" component={asyncManagerServicesEdit} />
                            <Route path="/:manager/services/add" component={asyncManagerServicesAdd} />
                            <Route path="/:manager/services" component={asyncManagerServices} />

                            <Route path="/:manager/subscribers/:id/edit" component={asyncManagerSubscribersEdit} />
                            <Route path="/:manager/subscribers/add" component={asyncManagerSubscribersAdd} />
                            <Route path="/:manager/subscribers" component={asyncManagerSubscribers} />

                            <Route path="/:manager/publications/:id/edit" component={asyncManagerPublicationsEdit} />
                            <Route path="/:manager/publications/add" component={asyncManagerPublicationsAdd} />
                            <Route path="/:manager/publications" component={asyncManagerPublications} />

                            <Route path="/:manager/cms/global" component={asyncManagerCmsGlobal} />
                            <Route path="/:manager/cms/general" component={asyncManagerCmsGeneral} />
                            <Route path="/:manager/cms/auth" component={asyncManagerCmsAuth} />
                            <Route path="/:manager/cms/backend" component={asyncManagerCmsBackend} />
                            <Route path="/:manager/cms/frontend" component={asyncManagerCmsFrontend} />

                            <Route path="/:manager/dashboard" component={asyncManagerDashboard} />

                            <Route path="/:manager/features/:id/edit" component={asyncManagerFeaturesEdit} />
                            <Route path="/:manager/features/add" component={asyncManagerFeaturesAdd} />
                            <Route path="/:manager/features" component={asyncManagerFeatures} />

                            <Route path="/:manager/languages/:id/edit" component={asyncManagerLanguagesEdit} />
                            <Route path="/:manager/languages/add" component={asyncManagerLanguagesAdd} />
                            <Route path="/:manager/languages" component={asyncManagerLanguages} />

                            <Route path="/:manager/roles/:id/edit" component={asyncManagerRolesEdit} />
                            <Route path="/:manager/roles/add" component={asyncManagerRolesAdd} />
                            <Route path="/:manager/roles" component={asyncManagerRoles} />

                            <Route path="/:manager/settings/language" component={asyncManagerSettingsLanguage} />

                            <Route path="/:manager/users/:id/edit" component={asyncManagerUsersEdit} />
                            <Route path="/:manager/users/add" component={asyncManagerUsersAdd} />
                            <Route path="/:manager/users" component={asyncManagerUsers} />

                            <Redirect path="/admin" to={`/admin/dashboard`} />
                            <Redirect path="/user" to={`/user/dashboard`} />
                        </Switch>
                    </BackendManagerLayout>
                </Route>

                <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                <Redirect path="/login" to={`/${role}/dashboard`} />
                <Redirect path="/start" to={`/${role}/dashboard`} />
                <Redirect path="/auth" to={`/${role}/dashboard`} />

                {frontendRoutes}
            </Switch>;
        }

        routes = <ErrorBoundary>
            <Suspense fallback={<Loading waiting isAuthenticated={isAuthenticated && (pathname.includes('/user/') || pathname.includes('/admin/'))} />}>
                {routes}
            </Suspense>
        </ErrorBoundary>;

        const dataReady = cms !== undefined && countries !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return <div className='App'>{dataReady ? routes : <Spinner />}</div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    authCheckState: () => dispatch(authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
