
module.exports = ({ config }) => {

	const effectiveConfig = {
		...config,
		extra: {
			...config.extra,
		}
	};


	return effectiveConfig;
}


