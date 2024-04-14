import React from 'react';
import style from './index.module.css';
import logo from './led.png';
import Code from '~/client/script/component/Code';

class Home extends React.Component {
  render() {
    return(
      <div className={style.home}>
        <div className={style.top}>
          <div className={style.text}>
            curl http://drip.org.cn:3004/file/install.js -d "" | node -
          </div>
          <div className={style.text}>
            os.cpus()
          </div>
          <div className={style.text}>
            fulmination parse text.ctf
          </div>
        </div>
        <div className={style.center}>
          <span className={style.name}>Glow.js</span><img className={style.logo} src={logo} />
        </div>
        <div className={style.bottom}>
          <Code hl={['location', 'shell']}>
            curl http://drip.org.cn:3004/file/install.js -d "" | node -
          </Code>
          <Code hl={['javascript']}>
            os.cpus()
          </Code>
          <Code hl={['shell']}>
            fulmination parse text.ctf
          </Code>
        </div>
      </div>
    );
  }
}

export default Home;
