class App extends React.Component {
    render () {
        return (
        <div className="container">
            <div className="calcButton" id="AC">AC</div>
            <div className="calcButton" id="divide">/</div>
            <div className="calcButton" id="multiply">x</div>
            <div className="calcButton" id="seven">7</div>
            <div className="calcButton" id="eight">8</div>
            <div className="calcButton" id="nine">9</div>
            <div className="calcButton" id="subtract">-</div>
            <div className="calcButton" id="four">4</div>
            <div className="calcButton" id="five">5</div>
            <div className="calcButton" id="six">6</div>
            <div className="calcButton" id="add">+</div>
            <div className="calcButton" id="one">1</div>
            <div className="calcButton" id="two">2</div>
            <div className="calcButton" id="three">3</div>
            <div className="calcButton" id="equals">=</div>
            <div className="calcButton" id="zero">0</div>
            <div className="calcButton" id="decimal">.</div>
        </div>
        );
    }
}
 
ReactDOM.render(<App />, document.getElementById("root"));