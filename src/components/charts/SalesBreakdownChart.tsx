"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const DATA_CONFIG = [
  { name: 'Regular Ticket', value: 40, color: '#00388D' },
  { name: 'Standard Ticket', value: 35, color: '#2F70D9' },
  { name: 'VIP Ticket', value: 25, color: '#FF914D' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-[#001D4A] text-white p-4 rounded-lg shadow-xl border-none">
        <p className="text-sm font-semibold">{data.time || 'Afternoon'}</p>
        <p className="text-[10px] bg-brand-neutral-400 mb-1">1pm - 4pm</p>
        <p className="text-sm font-bold">{data.purchases || '890'} Purchases</p>
        {/* Tooltip Arrow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#001D4A] rotate-45" />
      </div>
    )
  }
  return null
}

export default function SalesBreakdownChart() {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-[0px_5.8px_23.17px_0px_#3326AE14] border border-neutral-100">
      <div className="mb-2">
        <h2 className="text-sm font-bold text-brand-secondary-9">Sales Breakdown</h2>
        <p className="text-sm text-brand-secondary-5">Sales by Ticket Type</p>
      </div>

      <div className="h-50 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={DATA_CONFIG}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {DATA_CONFIG.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {DATA_CONFIG.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[10px] text-slate-400 whitespace-nowrap">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-slate-700">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}