import * as React from 'react';
import { Link } from 'gatsby';
import Page from '../components/Page';
import Section from '../components/Section';
import lostTraveller from '../images/lost_traveller_transparent.webp';

const NotFoundPage = () => {
  return (
    <Page title={'Page not found'}>
      <Section className="py-6 items-center">
        <p className="mb-3 text-center">
          The page you're trying to access could not be found. Perhaps it is
          time to return{' '}
          <Link to="/" className="font-bold underline">
            home
          </Link>
          ?
        </p>
        <img src={lostTraveller} className="w-2/3 mx-auto mb-4 mt-10" />
      </Section>
    </Page>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page not found - Barney's Travels</title>;
