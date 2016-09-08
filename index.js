var express = require('express');

var primish = require('primish');
var http = require('http')

var Insulter = primish({
	a:  'tossing,bloody,shitting,wanking,stinky,raging,dementing,dumb,dipping,fucking,dipping,holy,maiming,cocking,ranting,twunting,hairy,spunking,flipping,slapping,sodding,blooming,frigging,sponglicking,guzzling,glistering,cock wielding,failed,artist formally known as,unborn,pulsating,naked,throbbing,lonely,failed,stale,spastic,senile,strangely shaped,virgin,bottled,twin-headed,fat,gigantic,sticky,prodigal,bald,bearded,horse-loving,spotty,spitting,dandy,fritzl-admiring,friend of a,indeterminable,overrated,fingerlicking,diaper-wearing,leg-humping,gold-digging,mong loving,trout-faced,cunt rotting,flip-flopping,rotting,inbred,badly drawn,undead,annoying,whoring,leaking,dripping,racist,slutty,cross-eyed,irrelevant,mental,rotating,scurvy looking,rambling,gag sacking,cunting,wrinkled old,dried out,sodding,funky,silly,unhuman,bloated,wanktastic,bum-banging,cockmunching,animal-fondling,stillborn,scruffy-looking,hard-rubbing,rectal,glorious,eye-less,constipated,bastardized,utter,hitler\'s personal,irredeemable,complete,enormous,go suck a,fuckfaced,broadfaced,titless,son of a,demonizing,pigfaced,treacherous'.split(','),
	b: 'cock,tit,cunt,wank,piss,crap,shit,arse,sperm,nipple,anus,colon,shaft,dick,poop,semen,slut,suck,earwax,fart,scrotum,cock-tip,tea-bag,jizz,cockstorm,bunghole,food trough,bum,butt,shitface,ass,nut,ginger,llama,tramp,fudge,vomit,cum,lard,puke,sphincter,nerf,turd,cocksplurt,cockthistle,dickwhistle,gloryhole,spazz,nutsack,fuck,spunk,shitshark,shitehawk,fuckwit,dipstick,asswad,chesticle,clusterfuck,douchewaffle'.split(','),
	c: 'force,bottom,hole,goatse,testicle,balls,bucket,biscuit,stain,boy,flaps,erection,mange,twat,twunt,mong,spack,diarrhea,sod,excrement,pirate,asswipe,sock,sack,barrel,head,zombie,alien,minge,candle,torch,pipe,bint,jockey,udder,pig,dog,cockroach,worm,MILF,sample,infidel,spunk-bubble,stack,handle,badger,wagon,bandit,lord,bogle,bollock,knob,nugget,king,hole,kid,trailer,lorry,whale,rag,foot'.split(','),
	d: 'licker,lover,shiner,blender,fucker,assjacker,butler,packer,rider,wanker,sucker,felcher,wiper,experiment,wiper,bender,dictator,basher,piper,slapper,fondler,plonker,bastard,handler,herder,fan,amputee,extractor,professor,graduate,voyeur'.split(','),

	combos: ['a,b,c', 'a,b,d', 'b,c', 'b,d'],

	constructor: function(element){
		this.combos = this.combos.map(function(c){return c.split(',')});
	},

	insult: function(e){
		var insult = this.get();
		return insult;
	},

	get: function(){
		var c = this.combos,
			self = this;

		return c[Math.random()*c.length>>0].map(function(k){
			return self[k][Math.random()*self[k].length>>0]
		}).join(' ');
	}
});

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  var insulter = new Insulter();
  var insult = insulter.insult();
  console.log(insult);
  response.send(insult);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


