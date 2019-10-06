const drawer = false
const items= [
	{
		text: 'Men',
		to: '/Men',
		items:[
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	},
	{
		text: 'Women',
		to: '/Women'
	},
	{
		text: 'Accessories',
		to: '/'
	},
	{
		text: 'Arts and Crafts',
		to: '/'
	}
]
export default {
	drawer,
	items
}
