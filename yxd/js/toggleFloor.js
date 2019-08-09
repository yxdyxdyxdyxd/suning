// let f1 = new Floor(Flobj[0])
// f1.init();

// let tf1 = new Tfloor(tflobj[0]);
// tf1.init();

// let f2 = new Floor(Flobj[1])
// f2.init();

// let f3 = new Floor(Flobj[2])
// f3.init();

// let tf2 = new Tfloor(tflobj[1]);
// tf2.init();

// let f4 = new Floor(Flobj[3])
// f4.init();

// let f5 = new Floor(Flobj[4])
// f5.init();

$.getJSON("../json/floor.json", (json) => (new Floor(json[0])).init())

$.getJSON("../json/t_floor.json", (json) => (new Tfloor(json[0])).init())

$.getJSON("../json/floor.json", (json) => (new Floor(json[1])).init())

$.getJSON("../json/floor.json", (json) => (new Floor(json[2])).init())

$.getJSON("../json/t_floor.json", (json) => (new Tfloor(json[1])).init())

$.getJSON("../json/floor.json", (json) => (new Floor(json[3])).init())

$.getJSON("../json/floor.json", (json) => (new Floor(json[4])).init())