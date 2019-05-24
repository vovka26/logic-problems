class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value){
      let address = this._hash(key);
      // console.log(address)
      if(!this.data[address]){
        this.data[address] = [];
      }
        this.data[address].push([key, value])
        return this.data;
    }
  
    get(key){
      let address = this._hash(key);
      let currentBucket = this.data[address]
      if(currentBucket){
        for(let element of currentBucket){
          if(element[0] === key){
            return element[1]
          }
        }
      }else{
        return undefined;
      }
    }
    keys(){
        const keysArray = [];
        for(let array of this.data){
          if(array){
            for(let subArr of array){
              keysArray.push(subArr[0])
            }
          }
        }
        return keysArray;
      }
  }
  
//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.set('apples', 9)
//   myHashTable.get('grapes')
  
//   myHashTable.get('apples')
//   myHashTable.data