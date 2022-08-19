import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem({}) {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1661094000&x-signature=ZAtMAjm9NadbaJW95fuOtxIZzQo%3D"
        alt="vtv24"
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>VTV24</strong>
          <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>VTV24-Monney</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
