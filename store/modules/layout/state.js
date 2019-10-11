const drawer = false
const items= [
	{
		text: 'Men',
		to: '/Men',
		sub_items:[
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	},
	{
		text: 'Women',
		to: '/Women',
		sub_items:[
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	},
	{
		text: 'Accessories',
		to: '/accessories',
		sub_items:[
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	},
	{
		text: 'Arts and Crafts',
		to: '/arts',
		sub_items:[
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	}
]
const categories = []
export default {
	drawer,
	items,
	categories
}
