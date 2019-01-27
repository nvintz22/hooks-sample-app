import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { Group, Input, Label, Bar } from '../../resources/emotions/forms';

class Home extends Component {
    constructor () {
        super()
        this.state = {
            name: "Danniel Irvin",
        }
    }

    setName = e => {
        this.setState({
            name: e.target.value
        })
    }

    render () {
        return (
            <Fragment>
                <h3>React@16.8 (Hooks)</h3>
                <small>{this.state.name}</small>
                <br/>
                <br/>
                <form>
                    <Group class="group">      
                        <Input type="text" required onChange={this.setName} value={this.state.name}/> 
                        <span className="highlight"></span>
                        <Bar className="bar"></Bar>
                        <Label>First name</Label>
                    </Group>
                </form>
            </Fragment>
        )
    }
}

export default Home