import { Component } from "react";

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
}