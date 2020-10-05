import * as React from 'react';
import styles from './Translate.module.scss';
import { ITranslateProps } from './ITranslateProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Translate extends React.Component<ITranslateProps, {}> {
  public render(): React.ReactElement<ITranslateProps> {
    return (
      <div >
        hello
      </div>
    );
  }
}
