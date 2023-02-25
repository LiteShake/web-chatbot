const spawner = require('child_process').spawn ;

const data ="hello" ;

console.log( `Data to snake script : ${data}` ) ;

const python_pcs = spawner('python', ['./test.py', data]);

python_pcs.stdout.on( 'data', (data) => {

    console.log( `Data from snake : ${data.toString()}` ) ;
} );
