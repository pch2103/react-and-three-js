import * as THREE from "three";

export default function addCone(radius,height,sides=12) {
	const geometry = new THREE.ConeGeometry(radius, height, sides);
	const material = new THREE.MeshPhongMaterial({
		color: 0x039BE5,
		specular: 0xbcbcbc,
	});
	return new THREE.Mesh(geometry, material);
}