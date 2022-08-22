import * as React from 'react';
import cx from 'classnames';
import './LoadingTitle.style';

type LoadingTitleProps = {
  loading: boolean;
  title: string;
};

const LOADING_GIF =
  'https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif';

export const LoadingTitle = ({ loading, title }: LoadingTitleProps) => (
  <div className={cx('title')}>
    <h1>{title}</h1>
    {loading && <img src={LOADING_GIF} />}
  </div>
);
