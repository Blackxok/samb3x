import style from './rating.module.css'
import { RatingProps } from './rating.props'
export default function Rating({
	rating,
	isEditable = false,
	setRating,
	...props
}: RatingProps): JSX.Element {

	
	return (
		<div className={style.rating} {...props}>
			Rating
		</div>
	)
}
