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
    buttonColor: 'rgb(152, 32, 78)',
    x: '',
    y: ''
  },
  methods:{
    showColorpicker: function(index, parent, event){
        colorpicker.preview = true,
        x= index + 1,
        y = parent + 1
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
        newColor: '',
        x: matrix.x,
        y: matrix.y
    },
    computed: {
        bgc () {
            return this.colors.rgba
        }
    },
    methods: {
        onOk () {
            this.preview = false;
            alert('Dit is de nieuwe kleur: ' + newColor + '. En dit zijn de coördinaten: X: ' + x + '  Y: ' + y)
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