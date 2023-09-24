import * as React from 'react';
import styles from './ListFilter.module.scss';
import { IListFilterProps } from './IListFilterProps';
import { SPContext } from './GlobalSPContext';
import Container from './container/Container';

export default class ListFilter extends React.Component<IListFilterProps, {}> {
  public render(): React.ReactElement<IListFilterProps> {

    return (
      <SPContext.Provider value={this.props.context} >
        <div className={styles.listFilter}>
          <Container />
        </div>
      </SPContext.Provider>
    );
  }
}
