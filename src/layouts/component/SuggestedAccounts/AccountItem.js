import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem({}) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1662282000&x-signature=OjB0n5Y3EaUnU3XsQrg0gLTzWJY%3D"
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
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
