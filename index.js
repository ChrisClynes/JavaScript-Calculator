class App extends React.Component {
    constructor(props) {
    super(props)
    this.state= {
        operationDisplay: '0',
        calcDisplay: "0",
        calcLeftHand: "0",
        calcRightHand: null
        }
    this.handleClear = this.handleClear.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    }
    handleClear = () => {
        this.setState({
        operationDisplay: "0",
        calcDisplay: "0",
        calcLeftHand: "0",
        calcRightHand: null
        })
    }
    handleOperation = (operator) => {
        const { operationDisplay } = this.state;
        this.setState({
            operationDisplay: operationDisplay + operator
        })
    }
    handleNumber = (digit) => {
        const { operationDisplay } = this.state;
        this.setState({
            operationDisplay: operationDisplay + digit
        })
        console.log(this.state.operationDisplay);
    }

    render () {
        const { operationDisplay } = this.state;
        
        return (
        <div className="container">
            <div className="grid">
                <div className="operationDisplay" id="operationDisplay">{operationDisplay}</div>
                <div className="calcDisplay display" id="display">{this.state.calcDisplay}</div>
                <div onClick={this.handleClear} className="calcButton clear" id="clear">AC</div>
                <div onClick={() => this.handleOperation('/')} className="calcButton divide" id="divide">/</div>
                <div onClick={() => this.handleOperation('*')} className="calcButton multiply" id="multiply">x</div>
                <div onClick={() => this.handleNumber('7')} className="calcButton seven" id="seven">7</div>
                <div onClick={() => this.handleNumber('8')} className="calcButton eight" id="eight">8</div>
                <div onClick={() => this.handleNumber('9')} className="calcButton nine" id="nine">9</div>
                <div onClick={() => this.handleOperation('-')} className="calcButton subtract" id="subtract">-</div>
                <div onClick={() => this.handleNumber('4')} className="calcButton four" id="four">4</div>
                <div onClick={() => this.handleNumber('5')} className="calcButton five" id="five">5</div>
                <div onClick={() => this.handleNumber('6')} className="calcButton six" id="six">6</div>
                <div onClick={() => this.handleOperation('+')} className="calcButton add" id="add">+</div>
                <div onClick={() => this.handleNumber('1')} className="calcButton one" id="one">1</div>
                <div onClick={() => this.handleNumber('2')} className="calcButton two" id="two">2</div>
                <div onClick={() => this.handleNumber('3')} className="calcButton three" id="three">3</div>
                <div onClick={() => this.handleOperation('fix me')} className="calcButton equals" id="equals">=</div>
                <div onClick={() => this.handleNumber('0')} className="calcButton zero" id="zero">0</div>
                <div onClick={() => this.handleOperation('fix me')} className="calcButton decimal" id="decimal">.</div>
            </div>
        </div>
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("root"));