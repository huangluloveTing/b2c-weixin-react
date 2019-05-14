
import React, { Component } from 'react'


function Wrapper(WrapperComponent) {

    return class extends React.Component {

        props : {}

        constructor(props) {
            super(props)
            this.props = props;
        }

        render() {
            return (
                <WrapperComponent {...this.props} />
            )
        }
    }
}

/**
 * 装饰器模式 redux中的connect的原理
 * @param mapDispatch 
 * @param mapProps 
 */
export function connect(mapDispatch:{} , mapProps:{}) {

    return (WrapperComponent) => {
        return class extends Component {
            props:{};
            state:{};

            constructor(props) {
                super(props);
                this.state = Object.assign({} , props , mapDispatch , mapProps)
            }
            componentDidMount() {
            }

            componentWillUnmount() {
            }

            render() {
                console.log(this.state)
                return (
                     <WrapperComponent {...this.state} />
                );
            }
        }
    }
}

export default Wrapper;