import React from 'react';
import {connect } from '../base/decration'
import Toast from '../components/toast/toast'

@connect({
    name:'huanglu',
    age:123
} , {
    jj:'huanglu',
    hh:123
})
class Home extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
        console.log(this)
    }

    componentWillUnmount() {
        console.log('home will unmount')
    }

    showInfo() {
        Toast.info('info')
    }

    showError(){
        Toast.error('error' , 50000)
    }

    showSuccess() {
        Toast.success('success')
    }

    hidden(){
    }

    render() {
        return (
            <div onClick={() => {
                console.log(this.props)
            }}> this is home page 
                <div style={{width:'100px',height:'30px',background:'#f00'}} onClick={() => {
                    this.showInfo()
                }}> showInfo </div>
                <div style={{width:'100px',height:'30px',background:'#ff0'}} onClick={() => {
                    this.showError()
                }}> showError </div>
                <div style={{width:'100px',height:'30px',background:'#f0f'}} onClick={() => {
                    this.showSuccess()
                }}> showSuccess </div>
                <div style={{width:'100px',height:'30px',background:'#f30'}} onClick={() => {
                    this.hidden()
                }}> hidden </div>
            </div>
        )
    }
}
export default Home;