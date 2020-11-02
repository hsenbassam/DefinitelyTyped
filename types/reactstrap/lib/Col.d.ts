import * as React from 'react';
import { CSSModule } from '../index';

export type ColumnProps
  = string
  | boolean
  | number
  | {
    size?: boolean | number | string
    offset?: string | number
    order?: string | number
  };

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    [key: string]: any;
    tag?: React.ElementType;
    xs?: ColumnProps;
    sm?: ColumnProps;
    md?: ColumnProps;
    lg?: ColumnProps;
    xl?: ColumnProps;
    cssModule?: CSSModule;
    // custom widths
    widths?: string[];
}

declare class Col<T = {[key: string]: any}> extends React.Component<ColProps> {}
export default Col;
