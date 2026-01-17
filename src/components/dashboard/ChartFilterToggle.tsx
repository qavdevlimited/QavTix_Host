'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

interface ChartFilterToggleProps {
  chartFilter: 'revenue' | 'tickets'
  setChartFilter: (filter: 'revenue' | 'tickets') => void
}

export function ChartFilterToggle({ chartFilter, setChartFilter }: ChartFilterToggleProps) {
    return (
        <div className="flex gap-4 flex-wrap justify-between items-center mb-6">
            <div className="relative bg-primary-1 rounded-xl p-1.5">
                <motion.div
                    className="absolute inset-y-1.5 left-1.5 bg-primary-6 rounded-lg shadow-sm"
                    initial={false}
                    animate={{
                        x: chartFilter === 'revenue' ? 0 : '87%',
                        width: '50%'
                    }}
                    transition={{
                        type: 'tween',
                        stiffness: 200,
                        damping: 30
                    }}
                />

                <div className="relative flex">
                    <button
                        onClick={() => setChartFilter('revenue')}
                        className={cn(
                        'relative z-10 px-5 py-2.5 rounded-lg text-xs font-medium transition-colors min-w-20',
                        chartFilter === 'revenue' ? 'text-white' : 'text-neutral-7 hover:text-neutral-9'
                        )}
                    >
                        Revenue
                    </button>

                    <button
                        onClick={() => setChartFilter('tickets')}
                        className={cn(
                        'relative z-10 px-5 py-2.5 rounded-lg text-xs font-medium transition-colors min-w-20',
                        chartFilter === 'tickets' ? 'text-white' : 'text-neutral-7 hover:text-neutral-9'
                        )}
                    >
                        Tickets
                    </button>
                </div>
            </div>

            <motion.button
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-between text-sm text-primary font-bold gap-2"
            >
                <span className="w-6 aspect-square rounded flex justify-center items-center bg-primary-3 text-white">
                    <Icon icon="pajamas:export" width="16" height="16" />
                </span>
                <span>Export Data</span>
            </motion.button>
        </div>
    )
}