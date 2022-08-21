import * as React from 'react';
import { useCallback, useState } from 'react';
import cx from 'classnames';
import './Table.style.css';

export type RowItem<T> = {
  value: T;
  key: string | number;
  selected?: boolean;
};

type RowProps<T> = {
  selectable: boolean;
  item: RowItem<T>;
};

const Row = <T extends Object>({ item, selectable }: RowProps<T>) => {
  const [selected, setSelected] = useState(false);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      item.selected = event.target.checked;
      setSelected(item.selected);
    },
    [item]
  );

  React.useEffect(() => {
    setSelected(item.selected);
  }, [item.selected]);

  return (
    <div className={cx('row')}>
      {Object.keys(item.value).map((key, index) => (
        <div
          className={cx('column', `column-${index}`, {
            'column-selected': item.selected,
          })}
          key={key}
        >
          {`${item.value[key]}`}
        </div>
      ))}
      {selectable ? (
        <input type="checkbox" checked={selected} onChange={handleOnChange} />
      ) : null}
    </div>
  );
};

type TableProps<T> = {
  selectable: boolean;
  items: RowItem<T>[];
};

export const Table = <T extends Object>({
  items,
  selectable = false,
}: TableProps<T>) => {
  return (
    <div className={cx('table')}>
      {items.map((item) => (
        <Row key={item.key} item={item} selectable={selectable} />
      ))}
    </div>
  );
};
