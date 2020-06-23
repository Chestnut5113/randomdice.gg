import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../Components/Main/main';
import Menu from '../../Components/Menu/menu';
import './homepage.less';
import { menu } from '../../Misc/menuConfig';

export default function Homepage(): JSX.Element {
    return (
        <Main className='homepage' title='Random Dice Unofficial Site'>
            <h3 className='welcome'>Welcome</h3>
            <p>
                Hello all, this is a Random Dice community created website. You
                will find useful resources for the game such as deck lists,
                calculators, and game tips. This website uses a modern framework
                and can be served while having no internet connection; it can
                also be easily installed onto your device for convenient access,
                you can check out how to install in the links here for
                <a
                    href='https://www.howtogeek.com/fyi/how-to-install-progressive-web-apps-pwas-in-chrome/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Desktop
                </a>{' '}
                and{' '}
                <a
                    href='https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Mobile
                </a>
                .
                <p>
                    You are welcome to join the community in discord or on
                    Reddit. If you find any issues, please contact the webmaster
                    through discord on JackyKit#0333 or by emailing{' '}
                    <a href={`mailto:admin@${process.env.REACT_APP_DOMAIN}`}>
                        {`admin@${process.env.REACT_APP_DOMAIN}`}
                    </a>{' '}
                    for any web related issue.
                </p>
            </p>
            <br />
            <br />
            <br />
            <h3 className='news'>What&apos;s New?</h3>
            <p>
                A login system is now implemented, you may not need to login to
                use this website, there is no hidden content. For now it is for
                content writers and{' '}
                <Link to='/about/patreon'>patreon supporters</Link> to enjoying
                ad free browsing. Later we may implement system to find co-op
                games.
            </p>
            <p>
                Update for v4.1.0 is live with the game. Updated{' '}
                <Link to='/calculator/solar'>Solar Calculator</Link>,{' '}
                <Link to='/calculator/combo'>Combo Calculator</Link>,{' '}
                <Link to='/calculator/dps'>DPS Calculator</Link> in accordance
                to moon dice buff.{' '}
                <Link to='/calculator/stat'>Stat Calculator</Link> is also live.
            </p>
            <p>
                Login system is updated, you may now skip verifying email if
                your Discord or Patreon is account is verified by them, once
                again, as of now you do not need to login to use this website.
                This is mainly for Patreon Ad-Free browsing and editors editing
                only.
            </p>
            <br />
            <br />
            <br />
            <h3 className='menu'>Menu</h3>
            <Menu menuList={menu} />
        </Main>
    );
}
