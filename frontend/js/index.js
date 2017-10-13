function createMatrix(row, col){
    a = []
    for(let i=0; i < row; i++){
        a[i] = []
        for(let j=0; j < col; j++){
            a[i][j] = null
        }
    } return a
}
let matrixConstruction = createMatrix(8, 8);


let matrix = new Vue({
	el: '#matrixContainer',
  data: {
    matrix: matrixConstruction,
    colors: 'rgb(220,220,220)',
    buttonColor: '#FFFFFF'
  },
  methods:{
    showColorpicker: function(index, parent, event){
      //   alert(index + 1)
      // alert(parent + 1)
        colorpicker.preview = true,
        test = colorpicker.newColor

    }
  }
});


let defaultProps = {
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

let colorpicker = new Vue({
    el: '#colorpicker',
    components: {
        'photoshop-picker': photoshop
    },
    data: {
        colors: defaultProps,
        preview: false,
        newColor: 'rgb(200,200,200)'
    },
    computed: {
        bgc () {
            return this.colors.rgba
        }
    },
    methods: {
        onOk () {
            this.preview = false;
        },
        onCancel () {
            this.preview = false;
        },
        updateValue (value) {
            this.colors = value,
            newColor = 'rgb(' + value.rgba.r + ',' + value.rgba.g + ',' + value.rgba.b + ')'
        }
    }
})