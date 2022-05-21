import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1c9388305beeb29e3a92daf9ed39c582.jpeg?x-expires=1653296400&x-signature=%2BzUnkRdskss88J9DTCk15%2BdUeBs%3D"
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyễn Văn Hoà</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check_info')} />
        </h4>
        <span className={cx('username')}>hoanv</span>
      </div>
    </div>
  );
}

export default AccountItem;
