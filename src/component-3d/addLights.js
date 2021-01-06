import * as THREE from "three";

const addLights = (scene) => {
	const frontSpot = new THREE.SpotLight(0xeeeece);
	frontSpot.position.set(1000, 1000, 1000);
	scene.add(frontSpot);
	const frontSpot2 = new THREE.SpotLight(0xddddce);
	frontSpot2.position.set(-300, -300, -300);
	scene.add(frontSpot2);
}

export default addLights;