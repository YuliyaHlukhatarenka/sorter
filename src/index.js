class Sorter {
  constructor() {
    this.Array = [];
    this.COMPARATOR = (left, right) => left - right;
  return this;
  }

  add(element) {
  this.Array[this.Array.length] = element;
  }

  at(index) {
    return this.Array[index];
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    var i, j, min, temp, g;
    for ( i = 0; i < indices.length - 1; i++){
      min = i;
        for (j = i + 1; j < indices.length; j++){
          if (indices[i] > indices[j]) {
            g = indices[i];
            indices[i] = indices[j];
            indices[j] = g;
          }
          if (this.COMPARATOR(this.Array[indices[min]], this.Array[indices[j]]) > 0) { min = j };
        }
      temp = this.Array[indices[i]];
      this.Array[indices[i]] = this.Array[indices[min]] ;
      this.Array[indices[min]] = temp;
    }
    return this.Array;
  }

    setComparator(compareFunction) {
    this.COMPARATOR = compareFunction;
    }

}


module.exports = Sorter;
