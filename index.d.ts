import { Component } from "react";
import { ViewPropTypes } from 'react-native'

declare module 'rn-bottom-sheet' {
    export class BottomDrawer extends Component<IBottomDrawerProps> { }

    export interface IBottomDrawerProps {
        roundedEdges?: boolean;
        shadow?: boolean;
        backgroundColor?: string;
        onExpanded?: () => {};
        onCollapsed?: () => {};
        containerHeight: number;
        downDisplay?: number;
        startUp?: boolean;
        offset?: number;
        customStyle?: ViewPropTypes;
    }
}