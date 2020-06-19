const pwd = require('./pwd')


process.stdout.write('prompt > ');
process.stdin.on('data', (x) => {
	const cmd = x.toString().trim();
	if (cmd === 'pwd') {
		process.stdout.write(`${pwd.pwder}`)
	} 
	else {process.stdout.write(cmd)};
	process.stdout.write('\nprompt > ');
});
