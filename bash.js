process.stdout.write('prompt > ');
process.stdin.on('data', (x) => {
	const cmd = x.toString().trim();
	const cwd = process.cwd()
	if (cmd === 'pwd') {
		process.stdout.write(cwd)
	} 
	process.stdout.write('\nprompt > ');
});
