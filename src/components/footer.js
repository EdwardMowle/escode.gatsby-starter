import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
`;

const Footer = ({ siteTitle, siteHomePage }) => (
    <Wrapper>
        © {new Date().getFullYear()} <Link to={siteHomePage}>{siteTitle}</Link>
    </Wrapper>
);

Footer.propTypes = {
    siteTitle: PropTypes.string,
    siteHomePage: PropTypes.string
};

Footer.defaultProps = {
    siteTitle: '',
    siteHomePage: '/'
};

export default Footer;
