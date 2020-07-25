import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './loading.less';

export default function Loading(): JSX.Element {
    const [loadingTime, setLoadingTime] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingTime(loadingTime + 10);
        }, 10000);
        return (): void => window.clearTimeout(timer);
    }, []);
    return (
        <>
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <h3>Loading...</h3>
            <FontAwesomeIcon className='loading' icon={faSpinner} />
            {loadingTime >= 10 ? (
                <h4 className='warning'>
                    You seem to be stuck loading.{' '}
                    <button
                        type='button'
                        onClick={(): void => window.location.reload()}
                    >
                        Click Here to refresh
                    </button>
                    If the problem persists, please report it.
                </h4>
            ) : null}
        </>
    );
}
