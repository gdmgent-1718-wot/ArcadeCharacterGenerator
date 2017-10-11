function createMatrix(row, col){
    a = []
    for(var i=0; i < row; i++){
        a[i] = []
        for(var j=0; j < col; j++){
            a[i][j] = null
        }
    } return a
}

var matrixConstruction = createMatrix(8, 8);


new Vue({
	el: '#app',
  data: {
  	matrix: matrixConstruction
  },
  methods:{
    handleClick: function(index, parent){
        alert(index + 1)
      alert(parent + 1)

    }
  }
});