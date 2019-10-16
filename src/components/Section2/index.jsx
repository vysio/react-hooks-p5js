import React, { useContext } from 'react'

import { generate } from 'shortid'

import sketchSrc from '../../sketches/sketch'

import { AppDispatchContext, AppStateContext } from '../App/AppStateProvider'
import p5Wrapper from '../P5Wrapper'

const P5Wrapper = p5Wrapper(generate())
// const P5Wrapper2 = p5Wrapper(generate())

export default function Section2() {
    const dispatch = useContext(AppDispatchContext)
    const {
        slider,
        sketch1L,
    } = useContext(AppStateContext)

    return (
        <div className="section">
            <h5>Section #2</h5>
            <div className="section section-content">
                {sketch1L && (
                    <P5Wrapper
                        dispatch={dispatch}
                        sketch={sketchSrc}
                        state={{ slider: 100 - slider }}
                    />
                )}
            </div>
        </div>
    )
}
