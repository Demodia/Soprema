import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';

export default () => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { href: '/courses', text: 'Kursliste' }, { text: 'Übersicht' }]} />

    <Title text="Übersicht" />
  </Fragment>
);
