import React , {useState , useEffect} from 'react'
import NaviBar from '../components/NavBar'
import * as baseStyle from '../base/base_style'
import './index.scss'
import BottomCart from '../components/StoreBottomCart'
import ListView from '../components/ListView'
import TagView from '../components/ZTTagView'


const tags = [
    '满减' , '买赠' , '小犁乐透' , '活动' , '买一赠一'
]

const cate_titles = ['为您优选' , '新鲜水果' , '海洋食品', '肉类', '坚果零食', '速冻食品', '米面粮油', '厨房调料', '酒水饮料', '厨房调料', '酒水饮料']

class TerminalPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentRightIndex: 0
        }
        this.clickYinliCard = this.clickYinliCard.bind(this);
        props.cacheLifecycles.didCache(this.didCache)
        props.cacheLifecycles.didRecover(this.didRecover)
    }

    didCache() {
        console.log('terminal cache')
    }
    didRecover() {
        console.log('terminal recover')
    }

    clickYinliCard() {
        this.props.history.push('/person')
    }

    componentDidMount() {
        console.log(this)
        console.log('terminal index mount')
    }

    componentWillUnmount() {
        console.log('terminal index unmount')
    }

    render() {
        return (
            <div className='store-page'>
                <NaviBar bgColor={ baseStyle.nav_bg } />
                <div className='middleContaner'>
                    {this.middleViewHeader()}
                    {this.middleCommView()}
                </div>
                <BottomCart />
            </div>
        )
    }

    middleViewHeader() {
        let imgUrl = '../assets/imgs/银犁卡背景图.png'
        return (
            <div className='contatiner siteAddressContent'>
                <div className='headerLogoName'>
                    <div  className='header Logon'>
                        <img src={require('../assets/imgs/银犁卡背景图.png')}/>
                    </div>
                    <div className='siteAddress'>
                        <div className='address'>
                            <span> 香榭国际二期店 </span>
                            <span className='adver'> 优鲜就在您身边 </span>
                        </div>
                        <div className='yinli-card' onClick={this.clickYinliCard}>
                            <span> 银犁卡 </span>
                        </div>
                    </div>
                </div>
                <div className='siteTags'>
                    {
                        tags.map((tag , index) => {
                            return this.tagView(tag , index)
                        })
                    }
                </div>
                <span className='header-line'></span>
            </div>
        )
    }

    middleCommView(){
        return (
            <div className='store-comms'>
                {this.cateListView()}
                {this.rightListView()}
            </div>
        )
    }

    tagView(siteName ,index) {
        return (
            <div className ='tagContainer' key={index + ''}>
                <span>{siteName} </span>
            </div>
        )
    }

    cateListView() {
        return (
            <div className='left-list'>
                <ListView renderItem={(item , index) => {
                    return this.cateListItem(item , index)
                }} data={cate_titles} clickItem={(s_index) => {
                    this.setState({
                        currentRightIndex:s_index
                    })
                }} />
            </div>
        )
    }

    rightListView() {
        return (
            <div style={{background:'white'}} className='right-list'>
                <div className='com-secon-cat'>
                    <TagView tags={['腊肉','猪肉','牛肉','羊肉','鸡肉','鱼肉' , '香肠']} />
                    <div><i className='icon iconfont icon-unfold'></i> </div>
                </div>
                <ListView renderItem={(item , index) => {
                    return (<CommItem key={index + ''} />)
                }} data={cate_titles} clickItem={(s_index) => {
                    
                }} />
            </div>
        )
    }

    cateListItem(item , index) {
        return (
            <div className={ this.state.currentRightIndex == index ? 'list-item-select' : 'list-item'} key={index + ''}>
                <span>{item}</span>
            </div>
        )
    }

    commList() {
        let items = []
        for(let i = 0 ; i < 20 ; i ++ ) {
            items.push(<CommItem key={i + ''} />)
        }
        return items;
    }
}

class CommItem extends React.Component {

    render() {
        return (
        <div className='com-container'>
            <div className='com-img'>
                <img src={require('../assets/imgs/银犁卡背景图.png')} />
            </div>
            <div className='com-info'>
                <div className='comm-name'>
                    <span className='new-tag'>新品</span>
                    <span> 猪腿肉 长白山上黑猪 林间散养 800g/袋 </span>
                </div>
                <div className='tags'>
                    <span> 当日宰杀 </span><span> 秒杀 </span>
                </div>
                <div className='info-bottom'>
                    <div className='price-comm'>
                        <div className='price-half'>
                            <span className='price'>26.00</span>
                            <span className='half-price'>第二件半价</span>
                        </div>
                        <div className='delte-comment'>
                            <span className='delete-price'>￥23.00</span><span className='comment'>好评率100%</span>
                        </div>
                    </div>
                    <div className='buy-comm'>
                        <i className='icon iconfont icon-mendianfenleiPx'></i>
                    </div>
                </div>
            </div>
            <span className='seperate-line'></span> 
        </div>
        )
    }
}

export default TerminalPage;