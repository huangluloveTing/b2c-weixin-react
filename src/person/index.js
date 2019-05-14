import React , {Component , useState , useEffect} from 'react'
import Wrapper from '../base/decration'
import { redirectTo } from '@reach/router'

@Wrapper
class Person extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('person mount')
        console.log(this)
    }

    componentWillUnmount() {
        console.log('person will unmount')
    }

    componentWillReceiveProps(next) {
    }

    render () {
        return (
            <div>
                this is person page
                <Icon click={() => {
                    this.props.history.push('/home');
                }}/>
                <Icon click={() => {
                    this.props.history.push('/home')
                }} />
            </div>
        )
    }
}


let Icon = (props) => {

    let [name , setName] = useState('name')
    window.hook = setName

    useEffect(() => {
        document.title = name;
    } , [])

    return (
        <div style={{background:'#f5f5f5' , margin: '5px'}} onClick={() => {
            setName('huanglu' + name)
            if (props.click) {
                props.click()
            }
        }}>
            this is icon component 
            <h1> name : {name} </h1>
        </div>
    )
}



export default Person;