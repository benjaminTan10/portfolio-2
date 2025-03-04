
import React, { useEffect, useState } from 'react';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import * as THREE from 'three';
import TWEEN from 'tween.js';
import "./Earth.css";

const table = [
  'HTML', 'imgs/html.svg', '1.00794', 1, 1,
  'CSS', 'imgs/css.svg', '4.002602', 1, 2,
  'JavaScript', 'imgs/js.svg', '6.941', 1, 3,
  'TypeScript', 'imgs/ts.svg', '9.012182', 1, 4,
  'Git', 'imgs/git.png', '10.811', 1, 5,
  'AfterEffect', 'imgs/aftereffect.png', '6.941', 1, 6,
  'Agile', 'imgs/agile.png', '9.012182', 1, 7,

  'AWS', 'imgs/aws.svg', '1.00794', 2, 1,
  'Bootstrap', 'imgs/bootstrap.svg', '4.002602', 2, 2,
  'C++', 'imgs/cpp.svg', '6.941', 2, 3,
  'C#', 'imgs/csharp.svg', '9.012182', 2, 4,
  'Django', 'imgs/django.svg', '10.811', 2, 5,
  'Ajax', 'imgs/ajax.png', '6.941', 2, 6,
  'Android', 'imgs/android.png', '9.012182', 2, 7,

  'Express', 'imgs/express.svg', '1.00794', 3, 1,
  'Flutter', 'imgs/flutter.svg', '4.002602', 3, 2,
  'GraphQL', 'imgs/grpahql.svg', '6.941', 3, 3,
  'jQuery', 'imgs/jquery.svg', '9.012182', 3, 4,
  'B', 'imgs/bootstrap.svg', '10.811', 3, 5,
  'Basj', 'imgs/basj.png', '6.941', 3, 6,
  'Blockchain', 'imgs/blockchain.png', '9.012182', 3, 7,

  'Laravel', 'imgs/laravel.svg', '1.00794', 4, 1,
  'Metamask', 'imgs/metamask.png', '4.002602', 4, 2,
  'MongoDB', 'imgs/mongod.svg', '6.941', 4, 3,
  'MUI', 'imgs/mui.svg', '9.012182', 4, 4,
  'MySQL', 'imgs/mysql.svg', '10.811', 4, 5,
  'Chrome', 'imgs/chrome.png', '6.941', 4, 6,
  'CI', 'imgs/ci.png', '9.012182', 4, 7,

  'Next', 'imgs/next.svg', '1.00794', 5, 1,
  'NodeJS', 'imgs/nodejs.svg', '4.002602', 5, 2,
  'Nuxt', 'imgs/nuxt.svg', '6.941', 5, 3,
  'PHP', 'imgs/php.svg', '9.012182', 5, 4,
  'PostgreSQL', 'imgs/postgresql.svg', '10.811', 5, 5,
  'Cucumber', 'imgs/cucumber.png', '6.941', 5, 6,
  'DB2', 'imgs/db2.png', '9.012182', 5, 7,

  'Python', 'imgs/python.svg', '1.00794', 6, 1,
  'Rails', 'imgs/rails.svg', '4.002602', 6, 2,
  'React', 'imgs/react.svg', '6.941', 6, 3,
  'Ruby', 'imgs/ruby.svg', '9.012182', 6, 4,
  'SASS', 'imgs/sass.svg', '10.811', 6, 5,
  '.Net', 'imgs/dotnet.png', '6.941', 6, 6,
  'ES6', 'imgs/es6.png', '9.012182', 6, 7,

  'Solidity', 'imgs/solidity.svg', '1.00794', 7, 1,
  'TailwindCSS', 'imgs/tailwind.svg', '4.002602', 7, 2,
  'Three.js', 'imgs/three.svg', '6.941', 7, 3,
  'VSCode', 'imgs/vscode.svg', '9.012182', 7, 4,
  'JavaScript', 'imgs/js.svg', '10.811', 7, 5,
  'Flask', 'imgs/flask.png', '6.941', 7, 6,
  'F#', 'imgs/fsharp.png', '9.012182', 7, 7,

  'VueJS', 'imgs/vue.svg', '1.00794', 8, 1,
  'Webpack', 'imgs/webpack.svg', '4.002602', 8, 2,
  'Wordpress', 'imgs/wordpress.svg', '6.941', 8, 3,
  'PHP', 'imgs/php.svg', '9.012182', 8, 4,
  'Laravel', 'imgs/laravel.svg', '10.811', 8, 5,
  'Go', 'imgs/go.jpg', '6.941', 8, 6,
  'Godot', 'imgs/godot.png', '9.012182', 8, 7,

  'Http', 'imgs/http.png', '1.00794', 9, 1,
  'IoT', 'imgs/iot.png', '4.002602', 9, 2,
  'Java', 'imgs/java.png', '6.941', 9, 3,
  'Joomla', 'imgs/joomla.png', '9.012182', 9, 4,
  'JSP', 'imgs/jsp.png', '10.811', 9, 5,
  'Jupiter', 'imgs/jupiter.png', '6.941', 9, 6,
  'Linux', 'imgs/linux.png', '9.012182', 9, 7,

  'MariaDB', 'imgs/mariadb.png', '1.00794', 10, 1,
  'Noe4j', 'imgs/noe4j.png', '4.002602', 10, 2,
  'OpenCV', 'imgs/opencv.png', '6.941', 10, 3,
  'Oracle', 'imgs/oracle.png', '9.012182', 10, 4,
  'PouchDB', 'imgs/pouchdb.png', '10.811', 10, 5,
  'PyGame', 'imgs/pygame.png', '6.941', 10, 6,
  'QA', 'imgs/qa.png', '9.012182', 10, 7,

  'Redis', 'imgs/redis.png', '1.00794', 11, 1,
  'RegExp', 'imgs/regex.png', '4.002602', 11, 2,
  'Selenium', 'imgs/selenium.png', '6.941', 11, 3,
  'Selenium', 'imgs/selenium-py.png', '9.012182', 11, 4,
  'SEO', 'imgs/seo.jpg', '10.811', 11, 5,
  'Shell', 'imgs/shell.png', '6.941', 11, 6,
  'SpringCloud', 'imgs/springcloud.png', '9.012182', 11, 7,

  'Sqlite', 'imgs/sqlite.png', '1.00794', 12, 1,
  'SqlServer', 'imgs/sqlserver.png', '4.002602', 12, 2,
  'Struts', 'imgs/struts.png', '6.941', 12, 3,
  'SVG', 'imgs/svg.png', '9.012182', 12, 4,
  'UML', 'imgs/uml.png', '10.811', 12, 5,
  'Unity', 'imgs/unity.png', '6.941', 12, 6,
  'VBA', 'imgs/vba.png', '9.012182', 12, 7,





  'WebAPI', 'imgs/webapi.png', '10.811', 13, 1,
  'AI', 'imgs/ai.png', '10.811', 13, 2,
  'ASP.Net', 'imgs/asp.png', '10.811', 13, 3,
  'SQL', 'imgs/sql.png', '10.811', 13, 4,
  'Magento', 'imgs/magento.png', '10.811', 13, 5,
  'Gradle', 'imgs/gradle.png', '10.811', 13, 6,
  'Github', 'imgs/github.png', '10.811', 13, 7,

  'Excel', 'imgs/excel.png', '10.811', 14, 1,
  'DevOps', 'imgs/devops.png', '10.811', 14, 2,
  'Cloud', 'imgs/cloud.png', '10.811', 14, 3,
  'C', 'imgs/c.png', '10.811', 14, 4,
  'R', 'imgs/r.png', '10.811', 14, 5,
  'Redis', 'imgs/redis.png', '1.00794', 14, 6,
  'RegExp', 'imgs/regex.png', '4.002602', 14, 7,




  
  

];

const Earth = () => {

  const [ pos, setPos ] = useState(0)

  let camera, scene, renderer;
  let controls;
  const objects = [];
  const targets = { table: [], sphere: [], helix: [], grid: [] };

  const init = () => {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 2500;

    scene = new THREE.Scene();

    // table

    for ( let i = 0; i < table.length; i += 5 ) {

      const element = document.createElement( 'div' );
      element.className = 'element';
      element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

      const number = document.createElement( 'div' );
      number.className = 'number';
      number.textContent = ( i / 5 ) + 1;
      element.appendChild( number );

      const symbol = document.createElement( 'img' );
      symbol.className = 'symbol';
      symbol.src = table[i+1];
      symbol.width = 75;
      symbol.height = 75;
      element.appendChild( symbol );

      const details = document.createElement( 'div' );
      details.className = 'details';
      details.innerHTML = table[i];
      element.appendChild( details );

      const objectCSS = new CSS3DObject( element );
      objectCSS.position.x = Math.random() * 4000 - 2000;
      objectCSS.position.y = Math.random() * 4000 - 2000;
      objectCSS.position.z = Math.random() * 4000 - 2000;
      scene.add( objectCSS );

      objects.push( objectCSS );

      //

      const object = new THREE.Object3D();
      object.position.x = ( table[ i + 3 ] * 200 ) - 1500 ;
      object.position.y = -( table[ i + 4 ] * 180 ) + 700;

      targets.table.push( object );

    }

    // sphere

    const vector = new THREE.Vector3();

    for ( let i = 0, l = objects.length; i < l; i ++ ) {

      const phi = Math.acos( - 1 + ( 2 * i ) / l );
      const theta = Math.sqrt( l * Math.PI ) * phi;

      const object = new THREE.Object3D();

      object.position.setFromSphericalCoords( 600, phi, theta );

      vector.copy( object.position ).multiplyScalar( 2 );

      object.lookAt( vector );

      targets.sphere.push( object );

    }

    // helix

    for ( let i = 0, l = objects.length; i < l; i ++ ) {

      const theta = i * 0.175 + Math.PI;
      const y = - ( i * 8 ) + 450;

      const object = new THREE.Object3D();

      object.position.setFromCylindricalCoords( 1000, theta, y );

      vector.x = object.position.x * 2;
      vector.y = object.position.y;
      vector.z = object.position.z * 2;

      object.lookAt( vector );

      targets.helix.push( object );

    }
    // grid

    for ( let i = 0; i < objects.length; i ++ ) {

      const object = new THREE.Object3D();

      object.position.x = ( ( i % 5 ) * 400 ) - 800;
      object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
      object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

      targets.grid.push( object );

    }

    

    renderer = new CSS3DRenderer();
    renderer.setSize( window.innerWidth - 17, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    //

    // controls = new TrackballControls( camera, renderer.domElement );
    // controls.minDistance = 500;
    // controls.maxDistance = 6000;

    // controls.addEventListener( 'rotate', render );


    transform( targets.sphere, 2000 );

    window.addEventListener( 'resize', onWindowResize );

  }


  const transform = ( targets, duration ) => {

    TWEEN.removeAll();

    for ( let i = 0; i < objects.length; i ++ ) {

      const object = objects[ i ];
      const target = targets[ i ];

      new TWEEN.Tween( object.position )
        .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

      new TWEEN.Tween( object.rotation )
        .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

    }

    new TWEEN.Tween( this )
      .to( {}, duration * 2 )
      .onUpdate( render )
      .start();

  }

  const onWindowResize = () => {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth - 17, window.innerHeight);

    render();

  }

  const animate = () => {
    // Place the entire animate() function from the provided code here
    
    requestAnimationFrame( animate );

    TWEEN.update();

    // controls.update();

    
  };

  const render = () => {
    // Place the entire render() function from the provided code here
    renderer.render( scene, camera );
  };

  let index = 3;

  const swipe = () => {
    if ( ++index > 3 ) {
      index = 0;
    }
    switch (index) {
      case 0:
        transform( targets.table, 2000 );
        break;
      case 1:
        transform( targets.helix, 2000 );
        break;
      case 2:
        transform( targets.grid, 2000 );
        break;
      case 3:
        transform( targets.sphere, 2000 );
        break;
    
      default:
        break;
    }
    console.log(index)

  }

  useEffect(() => {

    
    

    // transform( targets.sphere, 2000 );

    // transform( targets.sphere, 2000 );

    init();
    animate();

    const timeoutId = setInterval(() => {
      // Code to be executed after the specified time
      swipe();
    }, 10000);

    // Clean up the timeout when the component unmounts
    return () => clearInterval(timeoutId);
  }, []);

  return( 
  
    <div id="container" className='earth_back' >
    </div>
  )
}

export default Earth