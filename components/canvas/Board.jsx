import React, { useState, useEffect, useRef } from 'react'
import { Stage } from 'react-konva';
import CanvasBoard from './Canvas.board';

import Tile from '@/components/game/Tile';
import Player from '../game/Player';
import CanvasPlayer from './Canvas.Player';

export default function Board() {

    const resolution = 40
    const width = 400
    const height = 400

    // let tiles = []
    let cols = width / resolution;
    let rows = height / resolution;

    const [wel, setWel] = useState(0)
    const [tiles, setTiles] = useState([])
    const [play, setPlay] = useState(false)

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const createTile = () => {

        let tiles = []
        let x = 0;
        let y = (rows - 1) * resolution;
        let dir = 1;
        for (let i = 0; i < cols * rows; i++) {
            let tile = new Tile(x, y, resolution, i, i + 1);
            tiles.push(tile);
            x = x + resolution * dir;
            if (x >= width || x <= -resolution) {
                dir *= -1;
                x += resolution * dir;
                y -= resolution;
            }
        }

        return tiles
    }

    const movePlayer = () => {

        let r = Math.floor(Math.random() * 5) + 1
        let c = wel + r

        if (c == 99) {
            setWel(99)
        } else if (c < 99) {
            setWel(c)
        } else if (c > 99) {
            let sisa = c - 99
            setWel(99 - sisa)
        }
    }

    
    useInterval(() => {
        movePlayer()
    }, 500)


    useEffect(() => {
        setTiles(createTile())
    }, [])

    return (

        <div>
            {tiles.length !== 0 &&
                <>
                    <Stage
                        width={width}
                        height={height}
                    >
                        <CanvasBoard tiles={tiles} />
                        <CanvasPlayer tiles={tiles} player={wel} />
                    </Stage>
                    <button className='p-5' onClick={(e) => setPlay(true)}>
                        next
                    </button>
                </>

            }
        </div>
    )
}
