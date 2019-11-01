import React from 'react';

import Page from '../components/page';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Page>
        <SEO title="404: Not found" />
        <h1>404</h1>
        <p>Page not found.</p>
    </Page>
);

export default NotFoundPage;
