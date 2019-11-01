import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Svg from '../images/gatsby.svg';

const Wrapper = styled.header`
    padding: 1em 0;
    background-color: rebeccapurple;
`;

const Center = styled.div`
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
`;

const Icon = styled(Svg)`
    width: 2em;
    height: 2em;
    margin: 0 auto 1em;
    fill: white;
`;

const Header = ({ siteTitle }) => (
    <Wrapper>
        <Center>
            <h1>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`
                    }}
                >
                    <Icon />
                    <div>{siteTitle}</div>
                </Link>
            </h1>
        </Center>
    </Wrapper>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
