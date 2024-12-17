import cn from 'classnames'
import { useEffect, useState } from 'react'
import style from './rating.module.css'
import { RatingProps } from './rating.props'
import StarIcon from './star.svg'
export default function Rating({
	rating,
	isEditable = false,
	setRating,
	...props
}: RatingProps): JSX.Element {
	const [ratingarr, setRatingarr] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		renderRating(rating)
	}, [rating])

	const renderRating = (currentRating: number) => {
		const updateArray = ratingarr.map((rating, idx) => (
			<span
				className={cn(style.star, {
					[style.filled]: idx < currentRating,
					[style.editable]: isEditable,
				})}
			>
				<StarIcon />
			</span>
		))

		setRatingarr(updateArray)
	}

	return (
		<div className={style.rating} {...props}>
			{ratingarr.map((star, idx) => (
				<span key={idx}>{star}</span>
			))}
		</div>
	)
}
