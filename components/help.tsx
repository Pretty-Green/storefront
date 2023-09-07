import React from 'react';

type Method = {
  optionName: string;
  price: number;
  isActive: boolean;
};

interface MethodTable {
  mutate: () => void;
}

const MethodTable = ({ mutate, children }: React.PropsWithChildren<MethodTable>) => {
  return (
    <table>
      {children}
      <button onClick={mutate}></button>
    </table>
  );
};

interface MethodRow {
  hendlePriceChange: () => void;
  hendleStatusChange: () => void;
}

const MethodRow = ({ hendlePriceChange, hendleStatusChange }: MethodRow) => {
  return (
    <>
      <button onChange={hendlePriceChange} />
      <button onChange={hendleStatusChange} />
    </>
  );
};

const Parent = () => {
  const { loading, error, data } = useQuery();

  const { mutate } = useMutate();

  const [method, setMethod] = React.useState<Method[]>(data);

  const hendlePriceChange = ({ optionName, price }: Omit<Method, 'isActive'>) => {
    setMethod((prevMethod) => {
      const newVal = prevMethod.map((method) => {
        if (method.optionName === optionName) {
          method.price = price;
        }
        return method;
      });
      return newVal;
    });
  };
  const hendleStatusChange = ({ optionName, isActive }: Omit<Method, 'price'>) => {
    setMethod((prevMethod) => {
      const newVal = prevMethod.map((method) => {
        if (method.optionName === optionName) {
          method.isActive = isActive;
        }
        return method;
      });
      return newVal;
    });
  };

  return (
    <div>
      <MethodTable mutate={() => mutate(method)}>
        {data.map((method) => (
          <MethodRow
            key={method.optionName}
            hendlePriceChange={() => hendlePriceChange(method)}
            hendleStatusChange={() => hendleStatusChange(method)}
          />
        ))}
      </MethodTable>
    </div>
  );
};
