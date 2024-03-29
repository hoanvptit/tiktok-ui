import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text_type = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passaProps
}) {
  let Comp = 'button'; // name of component
  const props = {
    onClick,
    ...passaProps,
  }; // props internal

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        console.log(key);
        delete props[key];
      }
    });
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text_type,
    disabled,
    rounded,
    small,
    large,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text_type: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
