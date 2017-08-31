import * as React from 'react';
import * as three from 'three';

class Three extends React.Component<{}, {}> {
    componentDidMount() {
        const wrapper = document.getElementById('js-three-wrapper');
        var scene = new three.Scene();
        var camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        var renderer = new three.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        if (wrapper) {
            wrapper.appendChild( renderer.domElement );
        }
        var geometry = new three.BoxGeometry( 1, 1, 1 );
        var material = new three.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new three.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };
        renderer.render(scene, camera);

        animate();
    }
    render() {
        return (
            <div id="js-three-wrapper" />
        );
    }
}

export default Three;
