const song=['malayalam','hindi','tamil','english'];
song.push('telgu');
console.log(song);
song.pop();
console.log(song);
let size=song.length
console.log(size);
let acc=song[0]
console.log(acc)
let ac=song[3]
console.log(ac)
console.log(song.join(","));
song1=['tt','kk','ll']
console.log(song.concat(song1))
song2=[['mm','oo'],['qq','ww']]
console.log(song2.flat())
song.splice(0,1,'vv','uu')
console.log(song)
console.log(song.sort());
song.copyWithin(2,0,2)
console.log(song);