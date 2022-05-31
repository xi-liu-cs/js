function sum(...argv)
{
	return argv.reduce((pre, cur) => { return pre + cur; });
}

const a = [1, 2, 3];
console.log("sum(a) = %d", sum(...a));
