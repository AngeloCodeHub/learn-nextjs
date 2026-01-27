"use client";

import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';
// import { Monitor } from 'lucide-react';
// import useImage from "use-image"


export default function KonvaComponent() {

  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  // const [monitorImg, setMonitorImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    // 只在客戶端設定尺寸
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Stage width={dimensions.width} height={dimensions.height}>
      <Layer>
        <Text text="Try to drag shapes" fontSize={15} />
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
          draggable
        >
        </Rect>
        <Circle
          x={200}
          y={100}
          radius={50}
          fill="green"
          draggable
        />

      </Layer>
    </Stage>

    // <Stage width={window.innerWidth} height={window.innerHeight}>
    //   <Layer>
    //     <Text text="Try to drag shapes" fontSize={15} />
    //     <Rect
    //       x={20}
    //       y={50}
    //       width={100}
    //       height={100}
    //       fill="red"
    //       shadowBlur={10}
    //       draggable
    //     />
    //     <Circle
    //       x={200}
    //       y={100}
    //       radius={50}
    //       fill="green"
    //       draggable
    //     />
    //   </Layer>
    // </Stage>
  )
}
