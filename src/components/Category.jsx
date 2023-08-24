import classes from './Category.module.css'
export const Category = ({title='Category',image='https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1'}) => {
  return (
	<a href='#' className="flex flex-col items-center">
		<figure className={classes.category} style={{backgroundImage: `url(${image})`}}></figure>	
		<h1>{ title }</h1>
	</a>
  )
}
