const objectData = [{
	title: "Kitchen",
	description: "Choose the right marble / granite for your kitchen now.",
	thumbnailSrc: "./images/render-compressed/kitchen_2.jpg",
	model: [{
		title: 'Enter kitchen 1',
		thumbnailSrc: "./images/render-compressed/kitchen_2.jpg",
		description: "Set marble and granite for your modern kitchen",
		modelSrc: "./models/modern_kitchen.glb",
		rotation: [0, Math.PI / 5, 0],
		camPos: [0.1, 0.3, 0.5],
		enableControls: true, // set it to true in case you want to have controls
		objects: [{
			name: ["backewall", "polySurfaceCounterTop"],
			title: "Counter Top",
			userImageRepeat: 4,
			textures: [
				"./images/marbles/granite/4.jpg",
				"./images/marbles/granite/5.jpg",
				"./images/marbles/3.jpg"
			]
		}]
	}, {
		title: 'Enter Kitchen 2',
		thumbnailSrc: "./images/render-compressed/kitchen.jpg",
		description: "Set marble and granite for traditional kitchen.",
		modelSrc: "./models/old_kitchen.glb",
		rotation: [0, Math.PI / 2, 0],
		camPos: [0.6, 0.6, 0.5],
		enableControls: true, // set it to true in case you want to have controls
		objects: [{
			name: "Counter_Top",
			title: "Counter Top",
			userImageRepeat: 4,
			textures: [
				"./images/marbles/granite/4.jpg",
				"./images/marbles/13.jpg",
				"./images/marbles/3.jpg"
			]
		}]
	}]
},
{
	title: "Living Room",
	description: "Choose the right marble / granite for your living room now.",
	thumbnailSrc: "./images/render-compressed/living-room2.jpg",
	model: [{
		title: 'Enter Livingroom 1',
		thumbnailSrc: "./images/render-compressed/living-room2.jpg",
		description: "Set marble and granite for your modern living room",
		modelSrc: "./models/livingroom1.glb",
		rotation: [0, Math.PI / 2.8, 0],
		camPos: [0.2, 0.2, 0.4],
		enableControls: true, // set it to true in case you want to have controls
		objects: [{
			name: ["polySurfaceMain"],
			title: "Counter Top",
			userImageRepeat: 2,
			textures: [
				"./images/marbles/granite/4.jpg",
				"./images/marbles/11.jpg",
				"./images/marbles/12.jpg"
			]
		}]
	}, {
		title: 'Enter Livingroom 2',
		thumbnailSrc: "./images/render-compressed/living-room.jpg",
		description: "Set marble and granite for your traditional living room",
		modelSrc: "./models/livingroom2.glb",
		rotation: [0, -Math.PI / 2.2, 0],
		camPos: [0.3, 0.4, 0.3],
		enableControls: true,
		objects: [{
			name: ["Floor"],
			title: "Floor",
			userImageRepeat: 7,
			textures: [
				"./images/marbles/granite/4.jpg",
				"./images/marbles/11.jpg",
				"./images/marbles/12.jpg"
			]
		}]
	}]
},
{
	title: "Bedroom",
	description: "Choose the right marble for your bedroom room now.",
	thumbnailSrc: "./images/render-compressed/bedroom.jpg",
	model: {
		modelSrc: "./models/bedroom.glb",
		rotation: [0, Math.PI / 6, 0],
		camPos: [0.25, 0.25, 0.4],
		enableControls: true,
		objects: [
			{
				name: ["pCube9","pPlane1"],
				title: "Bedroom",
				textures: [
					"./images/marbles/granite/4.jpg",
					"./images/marbles/11.jpg",
					"./images/marbles/12.jpg"
				]
			}
		]
	}
}, 
{
	title: "Front Elevation",
	description: "Choose the right marble / granite for your elevation now.",
	thumbnailSrc: "./images/render-compressed/house.jpg",
	model: {
		modelSrc: "./models/house_elevation.glb",
		camPos: [0.3, 0.1, 0.5],
		rotation: [0, Math.PI / 3, 0],
		enableControls: true,
		objects: [ {
			name: ["Cube"],
				title: "House",
				userImageRepeat: 10,
				textures: [
					"./images/marbles/granite/3.jpg",
					"./images/marbles/granite/2.jpg",
					"./images/marbles/granite/1.jpg",
				]
		} ]
	}
},
{
	title: "Stairs",
	description: "Choose the right marble / granite for your living room now.",
	thumbnailSrc: "./images/render-compressed/stairs.jpg",
	model: {
		modelSrc: "./models/stairs.glb",
		camPos: [0.8, 0.7, -0.06],
		rotation: [0, Math.PI /35, 0],
		enableControls: true,
		objects: [
			{
				name: ["Stairs", "Slab_1", "Slab_2", "Slab_3"],
				title: "Stair",
				textures: [
					
					"./images/marbles/granite/4.jpg",
					"./images/marbles/13.jpg",
					"./images/marbles/3.jpg",
				]
			}
		]
	}
}

	// {
	// 	title: "Bathroom",
	// 	description: "Find the best tiles for your modern bathroom.",
	// 	thumbnailSrc: "./images/render-compressed/bathroom.jpg",
	// 	model: {
	// 		modelSrc: "./models/bathroom.glb",
	// 		rotation: [ 0, Math.PI / 2, 0 ],
	// 		camPos: [ 0.4, 0.4, 0.4 ],
	// 		objects: [ {
	// 			name: [ "Floor", "Wall_1", "Wall_2", "Wall_3", "Wall_4", "Wall_5" ],
	// 			title: "Floor and Walls",
	// 			userImageRepeat: 3,
	// 			textures: [
	// 				"./images/marbles/4.jpg",
	// 				"./images/marbles/5.jpg",
	// 				"./images/marbles/6.jpg"
	// 			]
	// 		} ]
	// 	}
	// }  
]