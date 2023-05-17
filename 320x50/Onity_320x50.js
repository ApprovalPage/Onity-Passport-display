(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Passport003395svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Passport_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003395").s().p("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");
	this.shape.setTransform(907.95,281.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1815.9,564);


(lib.OnityLOGO286RGBnoTMsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Onity_LOGO_286_RGB_noTM_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003395").s().p("EBAOAenIHUtzMgQ5gimIMWAAIKHYcIK34cIK0AAMgXWAwZgEhb5ANKQm3lXAApaIAAjJQAAnRFBlZQFLlkIvhtIAdgFIAAGeIgTAEQjfAwh4DpQhzDgAAFgIAADUQAAGiCgDXQDeEqItAAQIuAADdkqQCgjXAAmiIAAjUQABlgh0jfQh4jpjfgxIgTgEIAAmeIAcAFQIyBtFJFkQFCFZAAHRIAADJQAAJam4FXQnCFfstABQstgBnClfgEAjEAPBQjPihgBj/IAA1WIlrAAIAAk/IFrAAIAAnpILliNIAAJ2IIXAAIAAE/IoXAAIAAU+QAACHBUBKQBbBPC4AAQAuAAAsgGQAjgEAzgLIAAE5Qg7ARhZAMQhsAPh5ABQnEAAjvi5gAItQxMAAAgilILkAAMAAAAilgAqkQxIAA4oQAAifh4heQiVh1lBAAQioAAh9ARQhhANh4AfIAAddIrlAAMAAAgg3QH8igMGAAQKsAAFMDNQEaCvABErIAAYwgEhLggGRIAA4WIGwAAIAAYWg");
	this.shape.setTransform(632.1,195.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1264.2,391.9);


(lib.HEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003395").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEgBQAFABADADQADAEAAADQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(66.45,18.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003395").s().p("AgaAhIAGgOIAIADIAKABQAEAAACgBQAEgDAAgEQAAgDgDgCIgIgFIgHgCIgGgEQgEgCgCgEQgCgDAAgFQAAgLAHgFQAIgGALAAQANAAAKAFIgGAMQgHgDgIAAQgEAAgCABQgDADAAADQAAAEADACIAHAEIAIADIAGADQAEACACAEQACAEAAAFQAAALgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_1.setTransform(61.425,15.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003395").s().p("AgWAcQgKgLAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAGIgvAFQACAIAFAFQAFADAIAAQALAAAJgEIAFAOQgKAFgRAAQgQAAgKgKgAgKgTQgFAGAAAKIAegEQAAgIgEgFQgEgEgGAAQgHAAgEAFg");
	this.shape_2.setTransform(54.475,15.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003395").s().p("AgIA0IAAhIIARAAIAABIgAgGgiQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(48.925,14.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003395").s().p("AgLAZIAAglIgJAAIAAgNIAJAAIAAgRIASgFIAAAWIAOAAIAAANIgOAAIAAAkQAAAIAIAAQADAAADgCIAAAQQgEACgHAAQgVAAAAgXg");
	this.shape_4.setTransform(44.65,14.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003395").s().p("AgIA0IAAhIIARAAIAABIgAgGgiQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(40.425,14.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003395").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_6.setTransform(36.925,14.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003395").s().p("AgIA0IAAhIIARAAIAABIgAgGgiQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(33.425,14.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003395").s().p("AgQAcQgJgKAAgSQAAgRAJgLQAKgJANAAQAMAAAHAFIgGANQgEgDgHAAQgHAAgDAGQgFAGAAAKQAAALAFAFQADAHAHAAQAHgBAEgCIAGANQgIAFgLAAQgNAAgKgKg");
	this.shape_8.setTransform(28.625,15.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003395").s().p("AgVAgQgIgGAAgMQAAgFACgFQACgEAEgCIAKgEIALgDIANgBIAAgDQAAgLgNAAQgKAAgLAEIgEgMQAMgFAOAAQAOAAAIAGQAHAGAAAOIAAAsIgMAEQgHABgIAAQgQAAgIgGgAADACIgHACQgEABgCACQgCADAAAEQAAAFAEADQAEADAGAAQAHAAAEgCIAAgVg");
	this.shape_9.setTransform(21.625,15.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003395").s().p("AgLA2IAAg7IgKAAIAAgOIAKAAIAAgIQAAgNAIgGQAGgHAMABIAHAAIAAAOIgBAAIgCAAQgGAAgEADQgDADAAAFIAAAIIAOAAIAAAOIgOAAIAAA7g");
	this.shape_10.setTransform(15.65,14.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003395").s().p("AgWAcQgKgLAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAGIgvAFQACAIAFAFQAFADAIAAQALAAAJgEIAFAOQgKAFgRAAQgQAAgKgKgAgKgTQgFAGAAAKIAegEQAAgIgEgFQgEgEgGAAQgHAAgEAFg");
	this.shape_11.setTransform(5.925,15.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003395").s().p("AgbAvIAFgPQAIAFAMAAQAPAAAAgQIAAgFQgFADgIAAQgNAAgJgJQgJgJAAgPQAAgTAKgJQAKgKARABQAPAAALAEIAABEQAAAPgJAJQgJAHgOAAQgQABgLgGgAgHggQgFAGAAALQAAAKAEAFQAFAFAHAAQAFAAAEgCIAAgnQgDgCgGAAQgHAAgEAGg");
	this.shape_12.setTransform(-1.925,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003395").s().p("AgVAgQgIgGAAgMQAAgFACgFQACgEAEgCIAKgEIALgDIANgBIAAgDQAAgLgNAAQgKAAgLAEIgEgMQAMgFAOAAQAOAAAIAGQAHAGAAAOIAAAsIgMAEQgHABgIAAQgQAAgIgGgAADACIgHACQgEABgCACQgCADAAAEQAAAFAEADQAEADAGAAQAHAAAEgCIAAgVg");
	this.shape_13.setTransform(-9.425,15.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003395").s().p("AgTAlIAAhEQANgFAQAAIAKAAIgEAPIgIgBQgFAAgEACIAAA5g");
	this.shape_14.setTransform(-15.2,15.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003395").s().p("AgXAcQgJgLAAgRQAAgQAJgLQAIgKAPAAQAQAAAIAKQAJALAAAQQAAARgJALQgIAKgQAAQgPAAgIgKgAgKgQQgEAGAAAKQAAALAEAGQAEAGAGAAQAHAAAEgGQAEgGAAgLQAAgKgEgGQgEgHgHABQgGgBgEAHg");
	this.shape_15.setTransform(-21.925,15.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003395").s().p("AgKAZIAAglIgJAAIAAgNIAJAAIAAgRIARgFIAAAWIANAAIAAANIgNAAIAAAkQAAAIAIAAQADAAACgCIAAAQQgDACgIAAQgTAAAAgXg");
	this.shape_16.setTransform(-28.3,14.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003395").s().p("AgaAhIAGgOIAIADIAKABQAEAAACgBQAEgDAAgEQAAgDgDgCIgIgFIgHgCIgGgEQgEgCgCgEQgCgDAAgFQAAgLAHgFQAIgGALAAQANAAAKAFIgGAMQgHgDgIAAQgEAAgCABQgDADAAADQAAAEADACIAHAEIAIADIAGADQAEACACAEQACAEAAAFQAAALgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_17.setTransform(-33.925,15.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003395").s().p("AgSAIIAAgPIAlAAIAAAPg");
	this.shape_18.setTransform(-39.725,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003395").s().p("AgLA2IAAg7IgKAAIAAgOIAKAAIAAgIQAAgNAHgGQAHgHAMABIAGAAIAAAOIAAAAIgCAAQgGAAgDADQgEADAAAFIAAAIIAOAAIAAAOIgOAAIAAA7g");
	this.shape_19.setTransform(-44.9,14.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003395").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_20.setTransform(-49.175,14.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003395").s().p("AgWAcQgKgLAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAGIgvAFQACAIAFAFQAFADAIAAQALAAAJgEIAFAOQgKAFgRAAQgQAAgKgKgAgKgTQgFAGAAAKIAegEQAAgIgEgFQgEgEgGAAQgHAAgEAFg");
	this.shape_21.setTransform(-54.825,15.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003395").s().p("AgaAhIAGgOIAIADIAKABQAEAAACgBQAEgDAAgEQAAgDgDgCIgIgFIgHgCIgGgEQgEgCgCgEQgCgDAAgFQAAgLAHgFQAIgGALAAQANAAAKAFIgGAMQgHgDgIAAQgEAAgCABQgDADAAADQAAAEADACIAHAEIAIADIAGADQAEACACAEQACAEAAAFQAAALgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_22.setTransform(-61.825,15.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003395").s().p("AgTAlIAAhEQAOgFAPAAIAJAAIgDAPIgIgBQgGAAgDACIAAA5g");
	this.shape_23.setTransform(72.15,1.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003395").s().p("AgXAcQgJgLAAgRQAAgQAJgKQAIgLAPAAQAQAAAIALQAJAKAAAQQAAARgJALQgIAKgQAAQgPAAgIgKgAgKgQQgEAFAAALQAAALAEAGQAEAGAGAAQAHAAAEgGQAEgGAAgLQAAgLgEgFQgEgHgHAAQgGAAgEAHg");
	this.shape_24.setTransform(65.475,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003395").s().p("AgLA2IAAg7IgKAAIAAgNIAKAAIAAgJQAAgMAHgHQAHgGAMAAIAGAAIAAAPIAAgBIgCAAQgGAAgDADQgEADAAAFIAAAJIAOAAIAAANIgOAAIAAA7g");
	this.shape_25.setTransform(59.15,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003395").s().p("AgTAzIALgdIgchIIAVAAIAOAuIABAEIAAAEIAAADIABAAQAAgHACgEIAOguIAUAAIglBlg");
	this.shape_26.setTransform(49.35,2.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003395").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_27.setTransform(43.725,-0.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003395").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_28.setTransform(40.175,-0.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003395").s().p("AgVAgQgIgGAAgMQAAgFACgFQACgEAEgCIAKgEIALgCIANgBIAAgFQAAgKgNAAQgKAAgLAEIgEgMQAMgFAOAAQAOAAAIAGQAHAGAAAOIAAAsIgMAEQgHABgIAAQgQAAgIgGgAADACIgHABQgEACgCADQgCACAAAEQAAAFAEADQAEADAGAAQAHAAAEgCIAAgVg");
	this.shape_29.setTransform(34.625,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003395").s().p("AgQAcQgJgJAAgTQAAgSAJgJQAKgKANAAQAMAAAHAEIgGAOQgEgDgHAAQgHAAgDAGQgFAGAAAKQAAAKAFAHQADAFAHAAQAHAAAEgCIAGANQgIAFgLAAQgNAAgKgKg");
	this.shape_30.setTransform(28.075,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003395").s().p("AgIA0IAAhIIARAAIAABIgAgGgiQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_31.setTransform(23.125,-0.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003395").s().p("AgLA2IAAg7IgKAAIAAgNIAKAAIAAgJQAAgMAHgHQAHgGAMAAIAHAAIAAAPIgBgBIgCAAQgGAAgDADQgEADAAAFIAAAJIAOAAIAAANIgOAAIAAA7g");
	this.shape_32.setTransform(18.9,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003395").s().p("AgIA0IAAhIIARAAIAABIgAgGgiQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_33.setTransform(14.625,-0.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003395").s().p("AgQAcQgJgJAAgTQAAgSAJgJQAKgKANAAQAMAAAHAEIgGAOQgEgDgHAAQgHAAgDAGQgFAGAAAKQAAAKAFAHQADAFAHAAQAHAAAEgCIAGANQgIAFgLAAQgNAAgKgKg");
	this.shape_34.setTransform(9.825,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003395").s().p("AgWAcQgKgLAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAGIgvAGQACAIAFAEQAFADAIAAQALABAJgFIAFAOQgKAFgRAAQgQAAgKgKgAgKgSQgFAFAAAKIAegEQAAgIgEgFQgEgEgGAAQgHAAgEAGg");
	this.shape_35.setTransform(2.825,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003395").s().p("AgfA0IAAhiQAKgFARAAQAQAAAKAKQAJAKAAASQABAQgKAKQgIALgQAAQgFAAgGgCIAAAegAgNgjIAAArIAJABQAIAAAFgGQAEgFAAgLQAAgLgEgGQgFgHgIAAQgGAAgDACg");
	this.shape_36.setTransform(-4.75,2.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003395").s().p("AgaAhIAGgOIAIADIAKABQAEAAACgCQAEgCAAgEQAAgEgDgBIgIgFIgHgCIgGgDQgEgDgCgEQgCgEAAgEQAAgKAHgHQAIgFALAAQANAAAKAFIgGAMQgHgEgIAAQgEAAgCACQgDACAAAEQAAAEADACIAHAEIAIADIAGADQAEACACAEQACAEAAAFQAAALgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_37.setTransform(-11.925,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003395").s().p("AgVAsQgKgJAAgSQAAgRAJgKQAJgLAQABQAGAAAEABIAAgiIATAAIAABmQgKAFgRAAQgRAAgJgKgAgHAAQgFAFAAALQAAALAEAHQAFAFAIAAQAFAAADgBIAAgrQgDgBgFgBQgIABgEAGg");
	this.shape_38.setTransform(-22.325,-0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003395").s().p("AgWAcQgKgLAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAGIgvAGQACAIAFAEQAFADAIAAQALABAJgFIAFAOQgKAFgRAAQgQAAgKgKgAgKgSQgFAFAAAKIAegEQAAgIgEgFQgEgEgGAAQgHAAgEAGg");
	this.shape_39.setTransform(-29.925,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003395").s().p("AAMAlIAAgvQAAgFgDgEQgEgDgFAAQgHAAgEACIAAA5IgSAAIAAhEQANgFAQAAQAeAAAAAYIAAAxg");
	this.shape_40.setTransform(-37.575,1.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003395").s().p("AgbAvIAFgPQAIAFAMAAQAPAAAAgQIAAgEQgFACgIAAQgNAAgJgJQgJgJAAgQQAAgSAKgKQAKgJARAAQAPAAALAGIAABDQAAAPgJAJQgJAHgOABQgQAAgLgGgAgHggQgFAFAAALQAAALAEAFQAFAFAHAAQAFAAAEgCIAAgnQgDgBgGAAQgHgBgEAGg");
	this.shape_41.setTransform(-45.475,2.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003395").s().p("AgIA0IAAhIIARAAIAABIgAgGgiQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_42.setTransform(-50.925,-0.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003395").s().p("AgaAhIAGgOIAIADIAKABQAEAAACgCQAEgCAAgEQAAgEgDgBIgIgFIgHgCIgGgDQgEgDgCgEQgCgEAAgEQAAgKAHgHQAIgFALAAQANAAAKAFIgGAMQgHgEgIAAQgEAAgCACQgDACAAAEQAAAEADACIAHAEIAIADIAGADQAEACACAEQACAEAAAFQAAALgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_43.setTransform(-55.875,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003395").s().p("AgWAcQgKgLAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAGIgvAGQACAIAFAEQAFADAIAAQALABAJgFIAFAOQgKAFgRAAQgQAAgKgKgAgKgSQgFAFAAAKIAegEQAAgIgEgFQgEgEgGAAQgHAAgEAGg");
	this.shape_44.setTransform(-62.825,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003395").s().p("AgVAsQgKgJAAgSQAAgRAJgKQAJgLAQABQAGAAAEABIAAgiIATAAIAABmQgKAFgRAAQgRAAgJgKgAgHAAQgFAFAAALQAAALAEAHQAFAFAIAAQAFAAADgBIAAgrQgDgBgFgBQgIABgEAGg");
	this.shape_45.setTransform(-70.625,-0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003395").s().p("AAMA1IgZglIgBAAIAAAlIgSAAIAAhpIASAAIAABAIABAAIAXgfIAVAAIgaAhIAcAng");
	this.shape_46.setTransform(71.475,-15.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003395").s().p("AgQAcQgJgJAAgTQAAgRAJgKQAKgKANAAQAMAAAHAEIgGAOQgEgDgHAAQgHAAgDAGQgFAFAAALQAAAKAFAHQADAFAHAAQAHAAAEgDIAGAOQgIAFgLAAQgNAAgKgKg");
	this.shape_47.setTransform(64.375,-13.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003395").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAIgLAPAAQAQAAAIALQAJAKAAAQQAAARgJAKQgIALgQAAQgPAAgIgLgAgKgRQgEAGAAALQAAALAEAGQAEAGAGAAQAHAAAEgGQAEgGAAgLQAAgLgEgGQgEgFgHgBQgGABgEAFg");
	this.shape_48.setTransform(57.275,-13.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003395").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_49.setTransform(51.675,-15.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#003395").s().p("AgKAZIAAglIgJAAIAAgNIAJAAIAAgRIARgFIAAAWIANAAIAAANIgNAAIAAAkQAAAIAIAAQADAAACgCIAAAQQgDACgHAAQgVAAABgXg");
	this.shape_50.setTransform(44.05,-14.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#003395").s().p("AgSAlIAAhEQANgFAPAAIAKAAIgDAPIgJgBQgFAAgDACIAAA5g");
	this.shape_51.setTransform(39.35,-13.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#003395").s().p("AgVAgQgIgGAAgLQAAgGACgFQACgEAEgBIAKgFIALgCIANgBIAAgFQAAgKgNAAQgKAAgLAFIgEgNQAMgFAOAAQAOAAAIAGQAHAGAAAOIAAAsIgMADQgHACgIAAQgQAAgIgGgAADACIgHABQgEACgCADQgCACAAAEQAAAFAEADQAEADAGAAQAHAAAEgBIAAgXg");
	this.shape_52.setTransform(32.725,-13.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#003395").s().p("AAgAlIAAgvQAAgGgDgDQgDgDgGAAQgHAAgEAEIAAA3IgSAAIAAgwQAAgFgDgDQgDgDgGAAQgGAAgFACIAAA5IgSAAIAAhEQANgFAPAAQAPAAAHAHQAKgHAPAAQAMAAAHAGQAHAHAAALIAAAxg");
	this.shape_53.setTransform(23.375,-13.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#003395").s().p("AgaAhIAGgPIAIAEIAKACQAEgBACgCQAEgCAAgDQAAgFgDgCIgIgDIgHgEIgGgCQgEgDgCgEQgCgEAAgFQAAgKAHgGQAIgFALAAQANAAAKAFIgGANQgHgFgIAAQgEAAgCACQgDADAAADQAAAEADACIAHAEIAIADIAGADQAEADACAEQACADAAAGQAAAKgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_54.setTransform(14.225,-13.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#003395").s().p("AgWAbQgKgKAAgRQAAgQAKgLQAJgKAOAAQAPAAAJAJQAIAJAAAPIAAAFIgvAHQACAHAFAEQAFAEAIABQALAAAJgFIAFAOQgKAFgRAAQgQAAgKgLgAgKgSQgFAFAAAKIAegFQAAgIgEgDQgEgFgGAAQgHAAgEAGg");
	this.shape_55.setTransform(3.975,-13.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#003395").s().p("AAMA1IAAgwQAAgLgMAAQgGAAgFADIAAA4IgSAAIAAhpIASAAIAAAjQAHgDAHAAQANAAAHAGQAHAHAAALIAAAxg");
	this.shape_56.setTransform(-3.725,-15.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#003395").s().p("AgIAxIAAhRIgVAAIAAgQIA7AAIAAAQIgUAAIAABRg");
	this.shape_57.setTransform(-11.025,-14.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#003395").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_58.setTransform(-19.65,-10.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#003395").s().p("AgKAZIAAglIgJAAIAAgNIAJAAIAAgRIARgFIAAAWIANAAIAAANIgNAAIAAAkQAAAIAIAAQADAAACgCIAAAQQgEACgGAAQgVAAABgXg");
	this.shape_59.setTransform(-24,-14.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#003395").s().p("AgTAlIAAhEQANgFAQAAIAKAAIgEAPIgIgBQgFAAgEACIAAA5g");
	this.shape_60.setTransform(-28.7,-13.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#003395").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAIgLAPAAQAQAAAIALQAJAKAAAQQAAARgJAKQgIALgQAAQgPAAgIgLgAgKgRQgEAGAAALQAAALAEAGQAEAGAGAAQAHAAAEgGQAEgGAAgLQAAgLgEgGQgEgFgHgBQgGABgEAFg");
	this.shape_61.setTransform(-35.375,-13.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#003395").s().p("AgfA0IAAhiQAKgFARAAQAQAAAKAKQAJAKAAASQABAQgKAKQgIALgQAAQgFAAgGgCIAAAegAgNgjIAAArIAJABQAIAAAFgGQAEgFAAgLQAAgLgEgGQgFgHgIAAQgGAAgDACg");
	this.shape_62.setTransform(-43,-12.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#003395").s().p("AgaAhIAGgPIAIAEIAKACQAEgBACgCQAEgCAAgDQAAgFgDgCIgIgDIgHgEIgGgCQgEgDgCgEQgCgEAAgFQAAgKAHgGQAIgFALAAQANAAAKAFIgGANQgHgFgIAAQgEAAgCACQgDADAAADQAAAEADACIAHAEIAIADIAGADQAEADACAEQACADAAAGQAAAKgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_63.setTransform(-50.175,-13.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#003395").s().p("AgaAhIAGgPIAIAEIAKACQAEgBACgCQAEgCAAgDQAAgFgDgCIgIgDIgHgEIgGgCQgEgDgCgEQgCgEAAgFQAAgKAHgGQAIgFALAAQANAAAKAFIgGANQgHgFgIAAQgEAAgCACQgDADAAADQAAAEADACIAHAEIAIADIAGADQAEADACAEQACADAAAGQAAAKgIAGQgIAGgNAAQgOAAgKgFg");
	this.shape_64.setTransform(-56.475,-13.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#003395").s().p("AgVAgQgIgGAAgLQAAgGACgFQACgEAEgBIAKgFIALgCIANgBIAAgFQAAgKgNAAQgKAAgLAFIgEgNQAMgFAOAAQAOAAAIAGQAHAGAAAOIAAAsIgMADQgHACgIAAQgQAAgIgGgAADACIgHABQgEACgCADQgCACAAAEQAAAFAEADQAEADAGAAQAHAAAEgBIAAgXg");
	this.shape_65.setTransform(-63.325,-13.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#003395").s().p("AggAyIAAheQAMgFAQAAQARAAAKAIQAKAJAAAPQAAANgKAIQgKAJgRgBIgJAAIAAAmgAgNghIAAAgIAIAAQAJAAAFgFQAFgEAAgHQAAgRgSAAQgFAAgEABg");
	this.shape_66.setTransform(-70.625,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(-82.9,-25.5,165.9,53.3), null);


(lib.Passport = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Passport003395svg("synched",0);
	this.instance.setTransform(0.05,-0.05,1,1,0,0,0,908,281.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Passport, new cjs.Rectangle(-907.9,-281.9,1815.9,563.9), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.OnityLOGO286RGBnoTMsvg("synched",0);
	this.instance.setTransform(0,0.05,1,1,0,0,0,714.2,196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-714.2,-195.9,1264.2,391.9), null);


// stage content:
(lib.Onity_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [168,170,175];
	// timeline functions:
	this.frame_168 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}
	this.frame_170 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(168).call(this.frame_168).wait(2).call(this.frame_170).wait(5).call(this.frame_175).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(176));

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.setTransform(262.45,24.75,0.0582,0.0582,0,0,0,1.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176));

	// Passport
	this.instance_1 = new lib.Passport();
	this.instance_1.setTransform(101.05,34.3,0.0756,0.0756,0,0,0,0.7,1.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:0,regY:0,x:101.2634,y:31.5939,alpha:0.1667},0).wait(1).to({x:101.4916,y:29.3366,alpha:0.3333},0).wait(1).to({x:101.655,y:27.7209,alpha:0.5},0).wait(1).to({x:101.7598,y:26.6841,alpha:0.6667},0).wait(1).to({x:101.8206,y:26.0826,alpha:0.8333},0).wait(1).to({regX:1.3,regY:1.3,x:101.9,y:25.9,alpha:1},0).to({_off:true},66).wait(103));

	// HEAD
	this.instance_2 = new lib.HEAD();
	this.instance_2.setTransform(101.5,44.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({_off:false},0).wait(1).to({regX:0.4,regY:0.9,x:101.9,y:40.6,alpha:0.125},0).wait(1).to({y:36.2,alpha:0.25},0).wait(1).to({y:32.6,alpha:0.375},0).wait(1).to({y:29.85,alpha:0.5},0).wait(1).to({y:27.9,alpha:0.625},0).wait(1).to({y:26.55,alpha:0.75},0).wait(1).to({y:25.7,alpha:0.875},0).wait(1).to({regX:0,regY:0,x:101.5,y:24.4,alpha:1},0).wait(95));

	// BKGD_b8d8eb
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8D8EB").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(-44,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(176));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-248,5,568.5,67.2);
// library properties:
lib.properties = {
	id: 'A79EFEC4A97F49888D3F6FD01A528C13',
	width: 320,
	height: 50,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A79EFEC4A97F49888D3F6FD01A528C13'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;