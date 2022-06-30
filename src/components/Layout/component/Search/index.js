import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDebounce } from '~/hooks';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import * as searchService from '~/apiService/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounce = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounce]);

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive={true}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {searchResult.map((result) => {
              return <AccountItem key={result.id} data={result} />;
            })}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          placeholder="Search account and videos"
          spellCheck={false}
          ref={inputRef}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => {
            setShowResult(true);
          }}
        />

        {!!searchValue && !loading && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              setSearchResult([]);
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
