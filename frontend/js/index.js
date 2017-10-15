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


function createArray(row, col){
    a = []
    for(let i=0; i < row; i++){
        a[i] = []
        for(let j=0; j < col; j++){
            a[i][j] = null
        }
    } return a
}
let arrayConstruction = createArray(8, 8);
let colorpicker = new Vue({
    el: '#colorpicker',
    components: {
        'photoshop-picker': photoshop
    },
    data: {
        array: arrayConstruction,
        index: '',

        colors: defaultProps,
        preview: false,

        newColor: '',
        rValue: '',
        gValue: '',
        bValue: '',

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
            this.preview = false

            // this.matrixArray.push([x, y, rValue, gValue, bValue])
        },
        onCancel () {
            this.preview = false;
        },
        updateValue (value) {
            this.colors = value,
            newColor = 'rgb(' + value.rgba.r + ',' + value.rgba.g + ',' + value.rgba.b + ')',
                rValue = value.rgba.r,
                gValue = value.rgba.g,
                bValue = value.rgba.b
        }
    }
});