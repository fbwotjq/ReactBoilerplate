import * as React from "react";
import * as ReactDOM from "react-dom";

interface IStatefulComponentProps
{
    foo: string;
    bar?: number;
}

interface IStatefulComponentState
{
    foo: boolean;
}


export default class StatefulComponent extends React.Component<IStatefulComponentProps, IStatefulComponentState>
{
    constructor(props: IStatefulComponentProps)
    {
        super(props);

        this.state = { foo: true };
    }

    private Button_Click(event: MouseEvent): void 
    {
        console.log("Button_Click event: ", event);

        this.setState({ foo: !this.state.foo });
    }

    private Input_Change(event): void // TODO: add type
    {
        console.log(event.target.value);
    }

    render(): React.ReactElement<{}>
    {
        const divStyle = 
        {
            margin: "5px",
            borderColor: "red",
            borderWitdh: 3,
            borderStyle: "dotted"
        }

        return (
            <div style={divStyle}>
                props.foo: { this.props.foo }
                <br />
                props.bar: { this.props.bar ? this.props.bar : "null" }
                <br />
                state.foo: { this.state.foo ? "true" : "false" }
                <br />
                <button onClick={ ()=> this.setState({ foo: !this.state.foo }) }>Toggle state.foo</button>
                <br />
                <button onClick={ this.Button_Click.bind(this) }>Toggle state.foo</button>
                <br /> 
                <input onChange={ this.Input_Change } />
            </div>
        );
    }
}