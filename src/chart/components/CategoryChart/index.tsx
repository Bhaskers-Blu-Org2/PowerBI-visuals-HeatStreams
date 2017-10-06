import { color, hsl } from 'd3-color'
import * as React from 'react'
import { ICategory, IColorizer, IScaler, IValueSlice } from '../../interfaces'
import printValue from '../printValue'
import CategoryView from './CategoryView'
import ValueRun from './ValueRun'
import ValueText from './ValueText'

export interface ICategoryChartProps {
	category: ICategory
	categoryData: IValueSlice[]
	colorizer: IColorizer
	xScale: IScaler
	rowHeight: number
	showValues: boolean
	width: number
	highlightColor: string
	selected: boolean
	y: number
	sliceWidth: number
}

const CategoryChart = ({
	category,
	categoryData,
	colorizer,
	xScale,
	rowHeight,
	showValues,
	width,
	highlightColor,
	selected,
	y,
	sliceWidth,
}: ICategoryChartProps) => {
	return (
		<g className="category-chart">
			<CategoryView
				selected={selected}
				highlightColor={highlightColor}
				width={width}
				height={rowHeight}
				y={y}
			/>
			{categoryData.map(cd => {
				const cellColor = colorizer(cd.value)
				const textColor = hsl(color(cellColor)).l > 0.5 ? '#000' : '#fff'
				const text = printValue(cd.value)
				const start = xScale(cd.start)
				return [
					<ValueRun
						key={`cdv:${cd.start}`}
						color={cellColor}
						height={rowHeight}
						title={text}
						width={sliceWidth}
						x={start}
						y={y}
						value={cd.value}
					/>,
					showValues ? (
						<ValueText
							key={`cdt:${cd.start}`}
							rowHeight={rowHeight}
							text={text}
							sliceWidth={sliceWidth}
							color={textColor}
							x={start + 2}
							y={y + rowHeight - 2}
						/>
					) : null,
				]
			})}
		</g>
	)
}

export default CategoryChart
