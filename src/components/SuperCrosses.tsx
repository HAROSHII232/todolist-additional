import { ReactNode } from "react";

type CrossesProps = {
  croses: Array<ItemCross>;
  children?: ReactNode
};

type ItemCross = {
  id: number;
  model: string;
  size: string;
};
export const SuperCrosses = ({ croses }: CrossesProps) => {
  return (
    <div>
      <ul>
        {croses.map((el) => {
          return (
            <li key={el.id}>
              <div>{el.model}</div>
              <div>{el.size}</div>
            </li>
          );
        })}
      </ul>
{/*       {children} */}
    </div>
  );
};
