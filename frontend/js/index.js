
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
    colors: 'rgb(220,220,220)'
  },
  methods:{
    handleClick: function(index, parent, event){
      //   alert(index + 1)
      // alert(parent + 1)

        //Als je op een button clickt opent de colorpicker op de juiste plaats
        // let cx = event.clientX;
        // let transform = cx - 180;
        // $('.translate').css("transform", 'translate('+ transform + 'px)');
        // $('.color-picker').css("transform", "scale(1.2 ,1.2)");
    }
  }
});


var defaultProps = {
    hex: '#194d33',
    hsl: {
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 1
    },
    hsv: {
        h: 150,
        s: 0.66,
        v: 0.30,
        a: 1
    },
    rgba: {
        r: 25,
        g: 77,
        b: 51,
        a: 1
    },
    a: 1
}

new Vue({
    el: '#colorpicker',

    components: {
        'photoshop-picker': photoshop
    },

    data: {
        colors: defaultProps
    },

    computed: {
        bgc () {
            return this.colors.rgba
        }
    },

    methods: {
        onOk () {
            console.log('ok')
        },
        onCancel () {
            console.log('cancel')
        },
        updateValue (value) {
            this.colors = value
        }
    }
})