"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const WEEK_DATA = [
  { day: '01', morning: 20, noon: 30, evening: 60 },
  { day: '02', morning: 15, noon: 45, evening: 55 },
  { day: '03', morning: 40, noon: 15, evening: 65 },
  { day: '04', morning: 38, noon: 50, evening: 40 },
  { day: '05', morning: 25, noon: 35, evening: 68 },
  { day: '06', morning: 22, noon: 40, evening: 58 },
  { day: '07', morning: 60, noon: 42, evening: 48 },
]

export default function WeekAnalysisChart() {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-neutral-100">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-sm font-bold text-brand-secondary-9">Week-Based Analysis:</h2>
          <p className="text-xs text-brand-secondary-5">Report from the last 7 days</p>
          <p className="text-xs text-brand-secondary-5 mt-2.5 font-medium">Sales from 1-7 Dec, 2025</p>
        </div>
        <div className="flex items-center gap-1 text-rose-500 font-bold text-xs">
          <span>↓ 2.1%</span>
          <span className="text-slate-400 font-normal">vs last week</span>
        </div>
      </div>

      <div className="h-50 w-full overflow-x-auto">
        <div className="min-w-75 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={WEEK_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#CBD5E1', fontSize: 10 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                ticks={[20, 40, 60]} 
                tickFormatter={(val) => val === 20 ? 'Morn.' : val === 40 ? 'Noon' : 'Eve.'}
                tick={{ fill: '#94A3B8', fontSize: 10 }}
              />
              <Tooltip cursor={{ stroke: '#E2E8F0', strokeWidth: 1, fontSize: "10px" }} />
              
              {/* Evening Line (Orange) */}
              <Line 
                type="monotone" 
                dataKey="evening" 
                stroke="#FFD8BE" 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 4 }} 
              />
              {/* Noon Line (Grey) */}
              <Line 
                type="monotone" 
                dataKey="noon" 
                stroke="#D1D5DB" 
                strokeWidth={2} 
                dot={false} 
              />
              {/* Morning Line (Blue) */}
              <Line 
                type="monotone" 
                dataKey="morning" 
                stroke="#2563EB" 
                strokeWidth={2} 
                dot={false} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="text-[10px] text-slate-300 font-bold mt-2">Time</p>
    </div>
  )
}