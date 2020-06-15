import React, { useCallback } from 'react';
import Select from 'components/shared/Select';
import { ptMonths } from 'util/date';

interface Props {
  name: string;
  className?: string;
  disabled?: boolean;
  onChange(m: number): void;
}

const MonthsSelect: React.FC<Props> = ({
  name,
  className,
  disabled = false,
  onChange,
}) => {
  const loadItems = useCallback((search = '') => {
    return ptMonths
      .filter(month => month.includes(search))
      .map((month, key) => ({
        value: (key + 1).toString(),
        title: month,
      }));
  }, []);

  return (
    <Select
      name={name}
      label="Mês"
      loadItems={loadItems}
      className={className}
      placeholder="Escolha o Mês"
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default MonthsSelect;
