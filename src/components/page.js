import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Styles from './styles';
import Header from './header';
import Footer from './footer';

const Main = styled.main`
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
`;

const Page = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Styles />
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main children={children} />
            <Footer siteTitle={data.site.siteMetadata.title} />
        </>
    );
};

Page.propTypes = {
    children: PropTypes.node.isRequired
};

export default Page;
