import React from 'react'
import { Layer, Rect } from 'react-konva';

export default function CanvasBoard({ tiles }) {

    return (
        <Layer>
            {tiles.map((val, idx) => (
                <Rect x={val.x} y={val.y} width={val.wh} height={val.wh} stroke="black" strokeWidth={4} />
            ))}
        </Layer>
    )
}
