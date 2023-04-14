import * as fs from 'fs';

const files = ['/'];

let version = 1;

try {
	version = parseInt(fs.readFileSync('./version.txt', 'utf8')) + 1;
	fs.writeFileSync('./version.txt', version.toString());
} catch (e) {
	console.log('SW version error');
}

const getFiles = (dir) => {
	fs.readdirSync(dir).forEach((file) => {
		let name = dir + '/' + file;
		if (fs.statSync(name).isDirectory()) {
			getFiles(name);
		} else {
			name = name.substring(7, name.length);
			if (name !== '/index.html' && name.substring(name.length - 11) === '/index.html') {
				files.push(name.substring(0, name.length - 10));
			} else {
				files.push(name);
			}
		}
	});
};

getFiles('./build');

const joinFiles = files.join(`","`) + `"`;

const code = `
const cacheName = 'v${version}';

const cacheAssets = [${`"` + joinFiles}];

// Call Install Event
self.addEventListener('install', (e) => {
	console.log('Service Worker: Installed');

	e.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				console.log('Service Worker: Caching Files');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
	);
});

// Call Activate Event
self.addEventListener('activate', (e) => {
	console.log('Service Worker: Activated');
	// Remove unwanted caches
	e.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== cacheName) {
						console.log('Service Worker: Clearing Old Cache');
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// Call Fetch Event
self.addEventListener('fetch', (e) => {
	console.log('Service Worker: Fetching');
	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
`;

try {
	fs.writeFileSync('./build/service-worker.js', code);
	console.log('Service worker built succesfully');
} catch (err) {
	console.error(err);
}
