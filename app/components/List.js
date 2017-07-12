import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Row, Col, Tag } from 'antd'
import { Link } from 'react-router-dom'

class List extends Component {
    tagsList(tags){
        const tagList = tags.map((tag, index) => 
            <Link to={'/tag'} key={index}>
                <Tag key={index} color='#FBBB69' style={{marginRight: 5, marginTop: 5}}>
                    #{tag}
                </Tag>
            </Link>
        )
        return tagList
    }
    
    render(){
        const { topicName, language, tags, author, date } = this.props
        return(
            <div className={'tpList'}>
                <ReactCSSTransitionGroup
                    transitionName='synopsis'
                    transitionAppear={true}
                    transitionAppearTimeout={700}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <Row type='flex'>
                        <Col md={16}>
                            <Link to={'/detail'} className={'topicDetail'}>
                                <h2>{ topicName }</h2>
                            </Link>
                        </Col>
                        <Col md={{span:4, push:4}}>
                            <span style={{color: '#8F8E7C'}}>{ date }</span>
                            <Link to={'/author'} className={'topicDetail'}>{ author }</Link>
                        </Col>
                    </Row>
                    <Row type='flex'>
                        <Col md={{span:22, offset: 1}}>
                            {this.tagsList(tags)}
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default List