import React, { useEffect, useState } from 'react'
import { Layer, Circle } from 'react-konva';
import { Motion, spring } from 'react-motion';

export default function CanvasPlayer({ tiles, player }) {

    let { x, y } = tiles[player].getCoor()

    return (
        <Layer>
            <Motion style={{ x: spring(x), y: spring(y) }}>
                {
                    ({ x, y }) => (
                        <Circle
                            x={x}
                            y={y}
                            radius={6}
                            fill='red'
                        >
                        </Circle>
                    )
                }
            </Motion>
        </Layer>
    )
}
