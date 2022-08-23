import * as React from 'react';
import BigNumber from 'bignumber.js';
import cx from 'classnames';
import { useWindowSize } from '../../hooks/useWindowSize';
import { RowItem, Table } from '../../components/Table/Table';
import { useState } from 'react';
import { ToDo } from '../../../domain/models/ToDo';
import './HomeScreen.style.css';
import { Fibonnacci } from '../../components/Fibonnacci/Fibonnacci';
import { useFetch } from '../../hooks/useFetch';
import { useService } from '../../hooks/useService';
import { getToDos } from '../../../domain/services/TodoService';

export const HomeScreen = () => {
  const [items, setItems] = useState<RowItem<ToDo>[]>([]);

  const { fetching: loading, data: toDos } = useService<ToDo[]>(
    {
      service: () => getToDos(),
    },
    []
  );

  React.useEffect(() => {
    const todoItems = toDos?.map((todo) => ({
      value: todo,
      key: todo.id,
      selected: false,
    }));
    setItems(todoItems);
  }, [toDos]);

  const size = useWindowSize();

  const handleOnSelectAll = React.useCallback(() => {
    setItems(
      items.map((item) => {
        item.selected = true;
        return item;
      })
    );
  }, [items]);

  const handleOnLog = React.useCallback(() => {
    console.log('===============================');
    items.forEach((item) => item.selected && console.log(item.value));
    console.log('===============================');
  }, [items]);

  return (
    <div className={cx('home-screen')}>
      <h1>Hello StackBlitz! {new BigNumber(1.000000010000000001).toFixed()}</h1>
      <p className={cx({ test: true }, { test2: true })}>
        Start editing to see some magic happen :) {size}
      </p>
      {loading ? <div>Loading data</div> : <Table items={items} selectable />}
      <button onClick={handleOnSelectAll}>Select All</button>
      <button onClick={handleOnLog}>Log selected items</button>
      <Fibonnacci />
    </div>
  );
};
