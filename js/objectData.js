const objectData = [ {
	title: "Kitchen",
	description: "Plan your kiten countertop with any marble or granite.",
	thumbnailSrc: "./images/render-compressed/kitchen.jpg",
	modelSrc: "./models/kitchen.glb",
	rotation: [ 0, Math.PI / 2, 0 ],
	objects: [ {
		name: "Counter_Top",
		title: "Counter Top",
		userImageRepeat: 2,
		textures: [
			"./images/marbles/1.jpg",
			"./images/marbles/11.jpg",
			"./images/marbles/12.jpg"
		]
	} ]
}, {
	title: "Bathroom",
	description: "Plan your modern bathroom with any marble or granite.",
	thumbnailSrc: "./images/render-compressed/bathroom.jpg",
	modelSrc: "./models/bathroom.glb",
	rotation: [ 0, Math.PI / 2, 0 ],
	objects: [ {
		name: [ "Floor", "Wall_1", "Wall_2", "Wall_3", "Wall_4", "Wall_5" ],
		title: "Floor and Walls",
		userImageRepeat: 2,
		textures: [
			"./images/marbles/4.jpg",
			"./images/marbles/10.jpg",
			"./images/marbles/6.jpg"
		]
	} ]
}, {
	title: "Living Room",
	description: "Plan your living room floor with any marble or granite.",
	thumbnailSrc: "./images/render-compressed/living-room.jpg",
	modelSrc: "./models/living-room.glb",
	rotation: [ 0, - Math.PI / 2, 0 ],
	objects: [ {
		name: [ "Floor" ],
		title: "Floor",
		userImageRepeat: 2,
		textures: [
			"./images/marbles/8.jpg",
			"./images/marbles/12.jpg",
			"./images/marbles/3.jpg"
		]
	} ]
}, {
	title: "Stairs",
	description: "Plan your house staircases with any marble or granite.",
	thumbnailSrc: "./images/render-compressed/stairs.jpg",
	modelSrc: "./models/stairs.glb",
	objects: [
		{
			name: [ "Stairs", "Slab_1", "Slab_2", "Slab_3" ],
			title: "Stair",
			textures: [
				"./images/marbles/9.jpg",
				"./images/marbles/8.jpg",
				"./images/marbles/11.jpg"
			]
		}
	]
} ]