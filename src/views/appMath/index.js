import React, { useState, useEffect } from 'react';
import { Group, Input, Label, Bar } from '../../resources/emotions/forms'
import { add, subtract, multiply, divide } from '../../helpers/math'

const AppMath = () => {
    const [valOne, setValOne] = useState(0)
    const [valTwo, setValTwo] = useState(0)

    const handleChange = e => {
        setValOne(e.target.value)
    }

    const handleChangeTwo = e => {
        setValTwo(e.target.value)
    }

    return (
        <div>
        <Group className="group">      
            <Input type="text" required onChange={handleChange} value={valOne}/> 
            <span className="highlight"></span>
            <Bar className="bar"></Bar>
            <Label>Input</Label>
        </Group>
        <Group className="group">      
            <Input type="text" required onChange={handleChangeTwo} value={valTwo}/> 
            <span className="highlight"></span>
            <Bar className="bar"></Bar>
            <Label>Input</Label>
        </Group>

        <div>
            SUM: {add(valOne, valTwo)} <br />
            SUBTRACT: {subtract(valOne, valTwo)} <br />
            MULTIPLY: {multiply(valOne, valTwo)} <br />
            DIVIDE: {divide(valOne, valTwo)} <br />
        </div>
        </div>
    )
}


export default AppMath