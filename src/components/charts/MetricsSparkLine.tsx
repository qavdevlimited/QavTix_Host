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
    
    const pathData = useMemo(() => {
        if (!data || data.length < 2) return "";
        
        const min = Math.min(...data)
        const max = Math.max(...data)
        const range = max - min || 1;
        
        // Padding to prevent line from touching edges
        const padding = 4;
        const effectiveHeight = height - (padding * 2)
        const effectiveWidth = width - (padding * 2)
        
        // Calculate points
        const points = data.map((value, index) => {
            const x = padding + (index / (data.length - 1)) * effectiveWidth;
            const y = padding + effectiveHeight - ((value - min) / range) * effectiveHeight;
            return { x, y };
        })
        
        // Create smooth curve using quadratic bezier curves
        let path = `M ${points[0].x} ${points[0].y}`;
        
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            
            // Control point for smooth curve
            const cpX = (prev.x + curr.x) / 2;
            const cpY = (prev.y + curr.y) / 2;
            
            path += ` Q ${prev.x} ${prev.y}, ${cpX} ${cpY}`;
            
            if (i === points.length - 1) {
                path += ` T ${curr.x} ${curr.y}`;
            }
        }
        
        return path;
    }, [data, width, height])
    
    return (
        <svg 
            width={width} 
            height={height} 
            className={className}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
        >
            <path
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}