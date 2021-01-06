import * as dat from 'dat.gui';

const addDatGui = (obj3d) => {
	const gui = new dat.GUI();
	gui.add(obj3d, 'rotationX').min(-0.03).max(0.03).step(0.001);
	gui.add(obj3d, 'rotationY').min(-0.03).max(0.03).step(0.001);
	gui.add(obj3d, 'rotationZ').min(-0.03).max(0.03).step(0.001);
}

export default addDatGui;