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
    matrix: matrixConstruction,
    color: 'rgb(220,220,220)'
  },
  methods:{
    handleClick: function(index, parent, event){
      //   alert(index + 1)
      // alert(parent + 1)

        //Als je op een button clickt opent de colorpicker op de juiste plaats
        let cx = event.clientX;
        let transform = cx - 180;
        $('.translate').css("transform", 'translate('+ transform + 'px)');
        $('.color-picker').css("transform", "scale(1.2 ,1.2)");
    }
  }
});
