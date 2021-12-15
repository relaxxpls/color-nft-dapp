module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 7545,
			network_id: '*',
		},
	},

	// ? make smart contracts accessible to frontend
	contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',

	compilers: {
		solc: {
			version: '0.8.10',
			settings: {
				optimizer: {
					enabled: true,
					runs: 200,
				},
			},
		},
	},
}
