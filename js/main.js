const clicker = document.getElementById('clicker');
const counter = document.getElementById('counter');
const saveStorage = document.getElementById('saveStorage');
const clearStorage = document.getElementById('clearStorage');
const storage = window.localStorage;

let save = {};
// Object to save
function load() {
	if (storage.getItem("save")) {
		save = JSON.parse(storage.getItem("save"));
		console.log("Save found: ", save);
		counter.innerHTML = save.count;
	} else {
		save.count = 0;
		console.log("Save not found");
		counter.innerHTML = 0;
	}
}
load();

// Click Event
clicker.addEventListener("click", function () {
	save.count++;
	counter.innerHTML = save.count;
});

saveStorage.addEventListener("click", function () {
	storage.setItem("save", JSON.stringify(save));
	console.log("Saved game");
});

clearStorage.addEventListener("click", function () {
	storage.removeItem("save");
	counter.innerHTML = 0;
});
