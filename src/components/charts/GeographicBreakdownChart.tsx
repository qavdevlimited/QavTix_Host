"use client"

import React, { useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Cell
} from 'recharts';
import { ShoppingCart, Wallet, Rocket } from 'lucide-react';

// --- CONFIG: Map your database response to this structure ---
const GEO_DATA = [
    { location: 'Lekki', tickets: 320 },
    { location: 'Ikorodu', tickets: 220 },
    { location: 'Ikoyi', tickets: 110 },
    { location: 'VI', tickets: 280 },
    { location: 'Ikeja', tickets: 500 },
    { location: 'Ajah', tickets: 410 },
    { location: 'Yaba', tickets: 480 },
    { location: 'Festac', tickets: 280 },
    { location: 'Surulere', tickets: 150 },
    { location: 'Badagry', tickets: 280 },
];

const STATS = {
    bestLocation: "Ikeja, Lagos",
    purchases: 500,
    revenue: "₦746,500",
    clicks: "1.42M",
    // Progress percentages for the blue underlines
    purchasesProgress: 70,
    revenueProgress: 55,
    clicksProgress: 90
};

export default function GeographicBreakdown() {
    return (
        <div className="w-full bg-white rounded-[32px] p-8 shadow-sm border border-neutral-50">
            <h2 className="text-secondary-5 text-xs mb-6">Geographic Breakdown</h2>

            {/* Main Blue Chart Card */}
            <div className="w-full bg-[linear-gradient(183.13deg,#2E71D5_2.58%,#0052CC_97.42%)] rounded-[24px] p-8 mb-10 relative overflow-x-auto">
                <span className="text-white text-[11px] absolute top-6 left-8">Tickets Sold</span>
                
                <div className="h-60 min-w-150 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={GEO_DATA} margin={{ top: 20, right: 0, left: -30, bottom: 0 }}>
                            <XAxis 
                                dataKey="location" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 11 }} 
                                dy={10}
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 11 }}
                                ticks={[0, 100, 200, 300, 400, 500]}
                            />
                            <Tooltip 
                                cursor={{ fill: 'rgba(255,255,255,0.1)' }}
                                contentStyle={{ 
                                    borderRadius: '12px', 
                                    border: 'none', 
                                    backgroundColor: '#FFFFFF',
                                    fontSize: '11px',
                                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                }}
                                itemStyle={{ color: '#0F172A', fontWeight: 600, padding: 0, textTransform: "capitalize" }}
                                labelStyle={{ color: '#64748B', marginBottom: '4px', textTransform: "capitalize" }}
                            />
                            <Bar 
                                dataKey="tickets" 
                                fill="#FFFFFF" 
                                radius={[10, 10, 10, 10]} 
                                barSize={10}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Stats Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
                {/* Best Performing Label */}
                <div className="space-y-1">
                    <h3 className="text-secondary-9 font-bold">Best Performing Location</h3>
                    <p className="text-secondary-3 text-sm">{STATS.bestLocation}</p>
                </div>

                {/* Purchases Stat */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-secondary-3 font-bold">
                        <div className="p-2 bg-primary-4 rounded-lg">
                            <ShoppingCart size={16} className='text-white' />
                        </div>
                        <span className="text-xs">Purchases</span>
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-secondary-9 mb-2">{STATS.purchases}</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-4 rounded-full" style={{ width: `${STATS.purchasesProgress}%` }} />
                        </div>
                    </div>
                </div>

                {/* Revenue Stat */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-secondary-3 font-bold">
                        <div className="p-2 bg-primary-4 rounded-lg">
                            <Wallet size={16} className='text-white' />
                        </div>
                        <span className="text-xs">Revenue</span>
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-secondary-9 mb-2">{STATS.revenue}</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-4 rounded-full" style={{ width: `${STATS.revenueProgress}%` }} />
                        </div>
                    </div>
                </div>

                {/* Clicks Stat */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-secondary-3 font-bold">
                        <div className="p-2 bg-primary-4 rounded-lg">
                            <Rocket size={16} className='text-white' />
                        </div>
                        <span className="text-xs">Clicks</span>
                    </div>
                    <div className="space-y-2">
                        <span className="font-bold text-secondary-9 mb-2">{STATS.clicks}</span>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary-4 rounded-full" style={{ width: `${STATS.clicksProgress}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}