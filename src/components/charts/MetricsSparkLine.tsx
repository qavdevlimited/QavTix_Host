import { useMemo } from "react";

interface MetricSparklineProps {
    data: number[];
    color?: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function MetricSparkline({ 
    data, 
    color = "#10B981", 
    width = 80, 
    height = 40,
    className = ""
}: MetricSparklineProps) {
    
    const { pathData, lastPoint } = useMemo(() => {
        if (!data || data.length < 2) return { pathData: "", lastPoint: null }
        
        const min = Math.min(...data)
        const max = Math.max(...data)
        const range = max - min || 1;
        
        const padding = 6;
        const effectiveHeight = height - (padding * 2)
        const effectiveWidth = width - (padding * 2)
        
        const points = data.map((value, index) => {
            const x = padding + (index / (data.length - 1)) * effectiveWidth;
            const y = padding + effectiveHeight - ((value - min) / range) * effectiveHeight;
            return { x, y }
        })


        let path = `M ${points[0].x} ${points[0].y}`;
        
        for (let i = 0; i < points.length - 1; i++) {
            const curr = points[i];
            const next = points[i + 1];
            
            const controlX = (curr.x + next.x) / 2;
            
            // C controlX1,currY controlX2,nextY nextX,nextY
            path += ` C ${controlX},${curr.y} ${controlX},${next.y} ${next.x},${next.y}`;
        }
        
        return { 
            pathData: path, 
            lastPoint: points[points.length - 1] 
        }
    }, [data, width, height])

    if (!pathData) return null;
    
    return (
        <svg 
            width={width} 
            height={height} 
            className={`overflow-visible ${className}`}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20 blur-[1.5px]"
            />

            <path
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {lastPoint && (
                <circle 
                    cx={lastPoint.x} 
                    cy={lastPoint.y} 
                    r="3.5" 
                    fill={color} 
                    className="drop-shadow-sm"
                />
            )}
        </svg>
    )
}