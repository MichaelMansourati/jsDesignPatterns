newVars = process.argv.slice(2)

function Ensemble( name, style, director ) {
  this.name = name;
  this.style = style;
  this.director = director;
}

Ensemble.prototype.toString = function () {
  return this.name + " plays in the " + this.style + " style and is led by " + this.director +".";
}

const band = new Ensemble( newVars[0], newVars[1], newVars[2] );

console.log(band.toString() );