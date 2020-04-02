import React, {Component, ReactNode} from "react";

interface Props {
    name: string,
    amount: number,
    maxAmount: number,
    onAdd(): void,
    onSubtract(): void,
    onMax(): void,
    onMin(): void
}



export class Stat extends Component<Props> {
    render(): ReactNode {
        return (
            <div>{this.props.name}:
                &nbsp;{this.props.amount}/{this.props.maxAmount} ({this.props.amount})&nbsp;
                <button onClick={this.props.onAdd}>🔼</button>
                <button onClick={this.props.onSubtract}>🔽</button>
                <button onClick={this.props.onMax}>⏫</button>
                <button onClick={this.props.onMin}>⏬</button>
            </div>)
    }
}