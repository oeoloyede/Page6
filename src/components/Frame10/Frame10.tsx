import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ChatIcon } from './ChatIcon';
import classes from './Frame10.module.css';
import { HomeIcon } from './HomeIcon';
import { SearchIcon } from './SearchIcon';
import { UploadIcon } from './UploadIcon';

interface Props {
  className?: string;
}
/* @figmaId 50:5 */
export const Frame10: FC<Props> = memo(function Frame10(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._4FourthStage}>4. Fourth Stage</div>
      <div className={classes.firstStage}>
        <ol className={classes.list}>
          <li>
            <div className={classes.textBlock}>First Stage</div>
          </li>
        </ol>
      </div>
      <div className={classes.image6}></div>
      <div className={classes.firstStage2}>
        <ol className={classes.list2}>
          <li>
            <div className={classes.textBlock2}>First Stage</div>
          </li>
        </ol>
      </div>
      <div className={classes._2SecondStage}>2. Second Stage</div>
      <div className={classes._3ThirdStage}>3. Third Stage</div>
      <div className={classes._4FourthStage2}>4. Fourth Stage</div>
      <div className={classes._2SecondStage2}>2. Second Stage</div>
      <div className={classes._3ThirdStage2}>3. Third Stage</div>
      <div className={classes.image4}></div>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon2} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon3} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon4} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.image7}></div>
      <div className={classes.image5}></div>
      <div className={classes.yourRoadmap}>Your Roadmap</div>
    </div>
  );
});
