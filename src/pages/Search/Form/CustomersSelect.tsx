import React, { useCallback } from 'react';
import Select, { Option } from 'components/shared/Select';

interface Props {
  name: string;
  className?: string;
  data: Option[];
}

const CustomersSelect: React.FC<Props> = ({ name, className, data }) => {
  const loadItems = useCallback(() => {
    return data;
  }, [data]);

  return (
    <Select
      name={name}
      label="Cliente"
      loadItems={loadItems}
      className={className}
      placeholder="Escolha o Cliente"
    />
  );
};

export default CustomersSelect;
