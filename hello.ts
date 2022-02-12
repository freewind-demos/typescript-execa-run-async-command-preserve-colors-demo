import childProcess from 'child_process';

const cmd = 'http GET https://httpbin.org/get';
const [command, ...args] = cmd.split(' ');
childProcess.spawn(command, args, {stdio: 'inherit'});

