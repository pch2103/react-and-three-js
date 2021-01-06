import React, {useEffect} from 'react';
import * as THREE from "three";
import addCone from "./addCone";
import addLights from "./addLights";
import addDatGui from "./addDatGui";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const objParameters = {
	rotationX: 0,
	rotationY: 0,
	rotationZ: 0
};

function onWindowResize(camera, renderer) {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function Init () {
	useEffect(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		const renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0x000000);
		renderer.setSize(width, height);

		document.body.appendChild(renderer.domElement);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
		camera.position.z = 1000;

		addLights(scene);

		const mesh = addCone(100, 300,32);
		scene.add(mesh);

		addDatGui(objParameters);

		const controls = new OrbitControls(camera, renderer.domElement);
		// controls.maxPolarAngle=Math.PI/2

		window.addEventListener('resize',
				onWindowResize.bind(this, camera, renderer),
				false)

		const animate = () => {
			requestAnimationFrame( animate );
			controls.update();
			mesh.rotation.x += objParameters.rotationX;
			mesh.rotation.y += objParameters.rotationY;
			mesh.rotation.z += objParameters.rotationZ;
			renderer.render( scene, camera );
		};
		animate();

		console.log('mounted')

		return () => { //componentWillUnmount
			window.removeEventListener('resize', onWindowResize.bind(this, camera, renderer), false)
			console.log('unmounted')
		}
	}, []);
	return <></>
}

export default Init;