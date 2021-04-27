(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"EyesBanner_atlas_1", frames: [[0,899,940,684],[0,1585,404,81],[406,1585,138,44],[0,0,1280,897]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.EYES = function() {
	this.initialize(ss["EyesBanner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PhantomEyes = function() {
	this.initialize(ss["EyesBanner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.studiosss = function() {
	this.initialize(ss["EyesBanner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.watercolor = function() {
	this.initialize(ss["EyesBanner_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.studiosss();
	this.instance.setTransform(-43.9,-14,0.6364,0.6364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-14,87.8,28);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.studiosss();
	this.instance.setTransform(-43.9,-14,0.6364,0.6364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-14,87.8,28);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PhantomEyes();
	this.instance.setTransform(-92.75,-18.6,0.4592,0.4592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-18.6,185.5,37.2);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PhantomEyes();
	this.instance.setTransform(-92.75,-18.6,0.4592,0.4592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-18.6,185.5,37.2);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.EYES();
	this.instance.setTransform(-83.9,-61.05,0.1786,0.1786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-61,167.9,122.1);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.EYES();
	this.instance.setTransform(-83.9,-61.05,0.1786,0.1786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-61,167.9,122.1);


(lib.prsbttn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("PRESS", "normal 400 22px 'tk-hobeaux-rococeaux'", "#FFFF00");
	this.text.lineHeight = 32;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(-38.05,-15.1);
	if(!lib.properties.webfonts['tk-hobeaux-rococeaux']) {
		lib.webFontTxtInst['tk-hobeaux-rococeaux'] = lib.webFontTxtInst['tk-hobeaux-rococeaux'] || [];
		lib.webFontTxtInst['tk-hobeaux-rococeaux'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// Pressbtn
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AmjjHINHAAQAeAAAAAeIAAFTQAAAegeAAItHAAQgeAAAAgeIAAlTQAAgeAeAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AmjDIQgeAAAAgeIAAlTQAAgeAeAAINHAAQAeAAAAAeIAAFTQAAAegeAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6E6D6D").ss(5,1,1).p("AmjjHINHAAQAeAAAAAeIAAFTQAAAegeAAItHAAQgeAAAAgeIAAlTQAAgeAeAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7171FE").s().p("AmjDIQgeAAAAgeIAAlTQAAgeAeAAINHAAQAeAAAAAeIAAFTQAAAegeAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#79674E").ss(5,1,1).p("AmjjHINHAAQAeAAAAAeIAAFTQAAAegeAAItHAAQgeAAAAgeIAAlTQAAgeAeAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7800FF").s().p("AmjDIQgeAAAAgeIAAlTQAAgeAeAAINHAAQAeAAAAAeIAAFTQAAAegeAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000CFF").s().p("AmjDIQgeAAAAgeIAAlTQAAgeAeAAINHAAQAeAAAAAeIAAFTQAAAegeAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-22.5,116.1,45);


// stage content:
(lib.EyesBanner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [29];
	// timeline functions:
	this.frame_29 = function() {
		var _this = this;
		/*
		Double click on the specified symbol instance executes a function.
		*/
		_this.prsbtn.on('dblclick', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.pictureofhotdog.com/pickle', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(59));

	// button
	this.prsbtn = new lib.prsbttn();
	this.prsbtn.name = "prsbtn";
	this.prsbtn.setTransform(405,30);
	this.prsbtn._off = true;
	new cjs.ButtonHelper(this.prsbtn, 0, 1, 2, false, new lib.prsbttn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.prsbtn).wait(29).to({_off:false},0).wait(59));

	// Studios
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(529.9,49);
	this.instance._off = true;

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(214.9,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance_1}]},6).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({_off:true,x:214.9},6).wait(59));

	// Phantom_Eyes
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(595.75,18.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(259.75,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_3}]},5).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true,x:259.75},5).wait(65));

	// Eyes_Logo
	this.instance_4 = new lib.Tween8("synched",0);
	this.instance_4.setTransform(617.9,51.05);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween9("synched",0);
	this.instance_5.setTransform(79.9,51.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},10).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({_off:true,x:79.9},10).wait(70));

	// BG
	this.instance_6 = new lib.watercolor();
	this.instance_6.setTransform(-15,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(88));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(219,-40,1046,867);
// library properties:
lib.properties = {
	id: '9C495B394645094280F97E0BD8CB88A2',
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"EyesBanner_atlas_1.png", id:"EyesBanner_atlas_1"}
	],
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
an.compositions['9C495B394645094280F97E0BD8CB88A2'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;