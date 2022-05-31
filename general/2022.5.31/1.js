function sum(...argv)
{
	return argv.reduce((pre, cur) => { return pre + cur; });
}

console.log("sum(1, 2, 3) = %d", sum(1, 2, 3));
