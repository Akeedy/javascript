import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

//lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight)


//Helpers
const lighthelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lighthelper, gridHelper);

//controls
const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
    const geometry = new THREE.SphereGeometry(0.24, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar);

//background
const spaceTexture = new THREE.TextureLoader().load('./images/surface.jpg')
scene.background = spaceTexture;

//Avatar
const avatarTexture = new THREE.TextureLoader().load('./images/berserk.jpg');

const berserk = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ map: avatarTexture })
);
scene.add(berserk);

//Moon

const moontexture = new THREE.TextureLoader().load('./images/moon.jpg');
const moonNormal = new THREE.TextureLoader().load('./images/normalmoon.jpg');



const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshBasicMaterial({
        map: moontexture,
        normalMap: moonNormal
    })
);
moon.position.set(10, 10, 30);
scene.add(moon);




function moveCamera() {

    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.09;
    moon.rotation.z += 0.01;

    berserk.rotation.x += 0.01;
    berserk.rotation.y += 0.04;

    camera.position.z = t * -0.01;
    camera.position.z = t * -0.02;
    camera.position.z = t * -0.02;

}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // torus.rotation.y += .01;
    // torus.rotation.x += .01;
    // moon.rotation.y += 0.1;
    controls.update();
}

animate();