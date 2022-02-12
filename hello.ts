import {execa} from 'execa';

const cmd = 'http GET https://httpbin.org/get';

execa(cmd, {stdio: 'inherit', shell: true});

