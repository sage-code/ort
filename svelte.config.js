import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ 
			out: 'build',
			host: 'ort.sagecpde.net',
			precompress: false,
			envPrefix: ''
	    }),
	}
};

export default config;
