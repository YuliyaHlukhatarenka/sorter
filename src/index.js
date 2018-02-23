class Sorter {
  constructor() {
    this.Array = [];
  return this;
  }

  add(element) {
  this.Array[this.Array.length] = element;
  }

  at(index) {
    // your implementation
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    var i,j,min,temp;
    for ( i=0; i< indices.length; i++){
      min = i;
        for (j=i+1; j< indices.length; j++){
          if (this.Array[indices[j]]<this.Array[indices[min]]) {min=j};
        }
      temp = this.Array[indices[i]];
      this.Array[indices[i]] = this.Array[indices[min]] ;
      this.Array[indices[min]] = temp;

    }
    return this.Array;
  }

  setComparator(compareFunction) {
    return compareFunction (this.Array);
  }

}

module.exports = Sorter;
