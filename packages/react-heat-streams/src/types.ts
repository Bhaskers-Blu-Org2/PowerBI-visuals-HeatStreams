/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
/**
 * The coarseness of x-aggregated blocks (when using dates)
 */
export enum DateAggregation {
	Hours = 'hours',
	Days = 'days',
	Months = 'months',
	Years = 'years',
}

/**
 * Represents the X-Domain of the Visual
 */
export type XDomain = TimeDomain

/**
 * A user scrub over the X-Domain of the Visual
 */
export type Scrub = TimeDomain

/**
 * A Visualized Category
 */
export interface ICategory {
	id: CategoryId
	name: string
	metadata?: {
		[key: string]: number
	}
}

/**
 * A Selection of Category IDs
 */
export type CategoryId = number | string
export type ICategorySelectionMap = Record<CategoryId, boolean>

/**
 * Interface for the value to color function
 */
export type IColorizer = (value: number) => string

/**
 * Interface for the domain to position scaler, usually a d3-scaler
 */
export type IScaler = (value: number | Date) => number

export interface IValueSlice {
	start: Date | number
	end: Date | number
	value: number
}

export interface ICategoryValueMap {
	[key: string]: IValueSlice[]
}

/**
 * Callback signature for when the user has performed a selection interaction with a category
 */
export type SelectionChangedHandler = (
	category: ICategory,
	multiselect: boolean,
) => void

/**
 * Callback signature for when the user has cleared the selection
 */
export type SelectionClearedHandler = () => void

/**
 * Callback Signature for when the user has performed a domain-scrub operation
 */
export type ScrubbedHandler = (bounds: Scrub) => void

export type TimeDomain = [number, number] | [Date, Date]
