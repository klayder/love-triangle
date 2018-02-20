/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var cont=0;
  for(let i=0;i<preferences.length;i++) {
  	if(i == preferences[preferences[preferences[i]-1]-1]-1){
  		cont++
  	};
  }
return Math.floor(cont/3);
  
  
};
