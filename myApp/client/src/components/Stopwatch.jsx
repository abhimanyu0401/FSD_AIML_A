import "./Stopwatch.css"

function Stopwatch() {
    let min = 0;
    let sec = 0;
    let msec = 0;
    return (
        <div className="box" >
            <h1>Stopwatch</h1>
            <div className="container">
                <div className='m'>{min}</div>
                <div className='s'>{sec}</div>
                <div className='ms'>{msec}</div>
            </div>

            <button >Start</button>
        </div>
    )
}

export default Stopwatch
