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
                <button onClick={this.props.onAdd}><span role="img" aria-label="add">🔼</span></button>
                <button onClick={this.props.onSubtract}><span role="img" aria-label="subtract">🔽</span></button>
                <button onClick={this.props.onMax}><span role="img" aria-label="maximize">⏫</span></button>
                <button onClick={this.props.onMin}><span role="img" aria-label="minimize">⏬</span></button>
            </div>)
    }
}