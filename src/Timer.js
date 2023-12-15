import React,{Component} from "react"
import Card from 'react-bootstrap/Card';

class Timer extends Component{
    constructor(props){
        super(props)
        this.state={
            min:0,
            sec:0,
        }
    }
   
    timerStart=()=>{
        this.timer=setInterval(() => {
        this.setState({

            sec:this.state.sec === 60 ? 0 : this.state.sec+1,
            min:this.state.sec === 60  ? this.state.min+1 :this.state.min,
                     
        })
    },1000);
    
    }

    timerStop=()=>{
        clearInterval(
            this.timer
        )
    }
    
    render(){
        return(
        <div>
            <Card className="card-style mx-auto p-2" style={{ width: '600px',height:"40vh"}}>
                <h2 className="text-danger">TIMER</h2>
                    <Card.Body>

                        <Card.Text className="text-style">{this.state.min}m : {this.state.sec}s</Card.Text>

                        <Card.Text className="btn-style">
                            <button onClick={this.timerStart} type="button" class="btn btn-primary ">Start</button>
                        </Card.Text>

                        <Card.Text className="btn-style">
                            <button onClick={this.timerStop}  type="button" class="btn btn-primary ">Stop</button>
                        </Card.Text>

                    </Card.Body>
            </Card>
        </div>
        )

    }
}
export default Timer;
