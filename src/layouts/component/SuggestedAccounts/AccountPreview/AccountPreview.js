import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import style from './AccountPreview.module.scss';

const cx = classNames.bind(style);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1662282000&x-signature=OjB0n5Y3EaUnU3XsQrg0gLTzWJY%3D"
          alt="vtv24"
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>VTV24</strong>
          <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>VTV24-Monney</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>10M</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
