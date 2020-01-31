  var { spawn } = require('child_process');
  var bat = spawn('cmd.exe', ['/c', 'C:/Demo/UiPathBatchFile.bat']);

  bat.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  bat.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  bat.on('exit', (code) => {

  });
