class App extends React.Component {
    constructor(props) {
    super(props)
    this.state= {
        operationDisplay: '',
        calcDisplay: '0',
        currentCalc: null,
        decimalSwitch: false
        }
    this.handleClear = this.handleClear.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleSubtractNegative = this.handleSubtractNegative.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    }
    handleClear = () => {
        this.setState({
        operationDisplay: '',
        calcDisplay: '0',
        currentCalc: null,
        decimalSwitch: false
        })
    }
    handleOperation = (operator) => {
        const { operationDisplay, currentCalc, calcDisplay, decimalSwitch} = this.state;
        this.setState({
            currentCalc: operationDisplay,
            operationDisplay: operationDisplay.charAt(operationDisplay.length - 1) == operator ? operationDisplay : operationDisplay + operator,
            calcDisplay: calcDisplay.charAt(calcDisplay.length - 1) == operator ? calcDisplay : operator,
            decimalSwitch: false,
        })
    }
    handleNumber = (digit) => {
        const { operationDisplay, calcDisplay } = this.state;
        this.setState({
            operationDisplay: operationDisplay === '0' ? digit : operationDisplay + digit,//conditional alternative to if else, if 0 return digit, else append digit
            calcDisplay: calcDisplay === '0' ? digit : calcDisplay + digit
        })
    }
    handleDecimal = (decimal) => {
        const { operationDisplay, calcDisplay, decimalSwitch } = this.state;
        this.setState({
            operationDisplay: decimalSwitch === true || operationDisplay.charAt(operationDisplay.length - 1) == decimal ? operationDisplay : operationDisplay + decimal,
            calcDisplay: decimalSwitch === true || calcDisplay.charAt(calcDisplay.length - 1) == decimal ? calcDisplay : calcDisplay + decimal,
            decimalSwitch: true

        })
    }
    handleSubtractNegative = (minus) => {
        const { operationDisplay, currentCalc, calcDisplay, decimalSwitch } = this.state;
        this.setState({
            currentCalc: operationDisplay,
            operationDisplay: operationDisplay.charAt(operationDisplay.length - 2) == minus ? operationDisplay : operationDisplay + minus,
            calcDisplay: minus,
            decimalSwitch: false  
        })
    }
    handleEvaluate = () => {
        const { operationDisplay, currentCalc, calcDisplay } = this.state;
        let newExpression = operationDisplay;
        let matchRegex = /(-\(-\d+\.?\d*)/g;//capture group looks for "-(-" + optional decimal and greedy number of digits after decimal
        newExpression = newExpression
            .replace(/--/g, "-(-")
            .replace(matchRegex, "$1)");//return capture group "$1" + ")"
            console.log(newExpression);
        this.setState({
            calcDisplay: String(eval(newExpression)),
            operationDisplay: String(eval(newExpression))
        })
        
    }
    render () {
        const { operationDisplay, calcDisplay } = this.state;
        
        return (
        <div className="container">
            <div className="grid">
                <div className="operationDisplay" id="operationDisplay">{operationDisplay}</div>
                <div className="calcDisplay display" id="display">{calcDisplay}</div>
                <div onClick={this.handleClear} className="calcButton clear" id="clear">AC</div>
                <div onClick={() => this.handleOperation('/')} className="calcButton operator divide" id="divide">/</div>
                <div onClick={() => this.handleOperation('*')} className="calcButton operator multiply" id="multiply">x</div>
                <div onClick={() => this.handleNumber('7')} className="calcButton digits seven" id="seven">7</div>
                <div onClick={() => this.handleNumber('8')} className="calcButton digits eight" id="eight">8</div>
                <div onClick={() => this.handleNumber('9')} className="calcButton digits nine" id="nine">9</div>
                <div onClick={() => this.handleSubtractNegative('-')} className="calcButton operator subtract" id="subtract">-</div>
                <div onClick={() => this.handleNumber('4')} className="calcButton digits four" id="four">4</div>
                <div onClick={() => this.handleNumber('5')} className="calcButton digits five" id="five">5</div>
                <div onClick={() => this.handleNumber('6')} className="calcButton digits six" id="six">6</div>
                <div onClick={() => this.handleOperation('+')} className="calcButton operator add" id="add">+</div>
                <div onClick={() => this.handleNumber('1')} className="calcButton digits one" id="one">1</div>
                <div onClick={() => this.handleNumber('2')} className="calcButton digits two" id="two">2</div>
                <div onClick={() => this.handleNumber('3')} className="calcButton digits three" id="three">3</div>
                <div onClick={() => this.handleEvaluate()} className="calcButton equals" id="equals">=</div>
                <div onClick={() => this.handleNumber('0')} className="calcButton digits zero" id="zero">0</div>
                <div onClick={() => this.handleDecimal('.')} className="calcButton digits decimal" id="decimal">.</div>
            </div>
        </div>
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("root"));