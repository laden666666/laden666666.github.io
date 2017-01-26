//设置背景
particlesJS('header-background',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// 实例1
var picker1 = new picker({
  cols: ['java','c#','JavaScript','php','Python'],
  title:"请选择你喜欢的编程语言",
  onOkClick: function (values) {
    document.querySelector('#example1').textContent = (values[0]);
  },
})
document.querySelector('#example1').addEventListener('click', function () {
  picker1.show();
})

// 实例2
var picker2 = new picker({
  cols: [{
    prefix: '  第',
    options: ['一', '二', '三', '四', '五'],
    suffix: '章  ',
  }],
  title:"选择要阅读的章节",
  onOkClick: function (values) {
    document.querySelector('#example2').textContent = '第' + (values[0]) + '章';
  },
})
document.querySelector('#example2').addEventListener('click', function () {
  picker2.show();
})

// 实例三
var picker3 = new picker({
  cols: [{
    options:["一","二","三","四","五","六"],
    suffix: '年',
  },{
    options:['1','2','3','4','5'],
    suffix: '班  ',
  }],
  title:"请选择年级和班级",
  onOkClick: function (values) {
    document.querySelector('#example3').textContent = (values[0] + "年" + values[1] + "班");
  },
})
document.querySelector('#example3').addEventListener('click', function () {
  picker3.show();
})

// 实例四
var picker4_1 = new picker({
  cols: ['1','2','3','4','5'],
  setValues: [2],
  onOkClick: function (values) {
    document.querySelector('#example4_1').textContent = values[0];
    document.querySelector('#example4_2').textContent = values[0];
    picker4_2.setValue(0, values[0]);
  },
})
document.querySelector('#example4_1').addEventListener('click', function () {
  picker4_1.show();
})
var picker4_2 = new picker({
  cols: ['1','2','3','4','5'],
  setValues: [2],
  onOkClick: function (values) {
    document.querySelector('#example4_1').textContent = values[0];
    document.querySelector('#example4_2').textContent = values[0];
    picker4_1.setValue(0, values[0]);
  },
})
document.querySelector('#example4_2').addEventListener('click', function () {
  picker4_2.show();
})

// 实例五
var picker5 = new picker({
  cols: [['选择A共0次','选择B共0次','选择C共0次'],['选择D共0次','选择E共0次','选择F共0次']],
  setValues: [2],
  onSelectItem: function (level, selectedIndex, selectedValue) {
    //获取可选值列表
    var options = this.getOptions(level);

    //计算新的可选值列表,并设置到picker控件中
    var count = /(\d+)/.exec(options[selectedIndex])[0];
    options[selectedIndex] = options[selectedIndex].replace(count, parseInt(count) + 1 + "");

    //这里必须要设置新的可选值列表中的默认值,否则会自动选择第一个值
    this.setOptions(level, options, options[selectedIndex]);
  },
  onOkClick: function (values) {
    document.querySelector('#example5').textContent = values[0] + " " + values[1];
  },
})
document.querySelector('#example5').addEventListener('click', function () {
  picker5.show();
})

// 实例六
var picker6 = new picker({
  cols: {
    options:[{
      userId:1,
      name:"张三(userId:1)"
    },{
      userId:2,
      name:"李四(userId:2)"
    },{
      userId:3,
      name:"王五(userId:3)"
    },{
      userId:4,
      name:"贾六(userId:4)"
    },],
    labelKey: 'name',
    valueKey: 'userId',
  },
  title:"请选择人员的userId",
  onOkClick: function (values) {
    document.querySelector('#example6').textContent = '备选人的userId是' + values[0];
  },
})
document.querySelector('#example6').addEventListener('click', function () {
  picker6.show();
})

// 实例七
var athlete = [{
  name:"足球",
  athlete: ['梅西','c罗','小贝','小罗']
},{
  name:"篮球",
  athlete: ['科比','乔丹','詹姆斯']
}]
var picker7 = new picker({
  cols: [{
    options: athlete,
    labelKey: 'name',
    valueKey: 'name',
  },
    //因为运动项的默认值是足球,所以运动员列表使用足球的列表
    athlete[0].athlete
  ],
  setValues: ['足球','小贝'],
  onSelectItem: function (level, selectedIndex, selectedValue) {
    if(level == 0){
      this.setOptions(1, athlete[selectedIndex].athlete);
    }

  },
  title:"请选择你最喜欢的运动员",
  onOkClick: function (values) {
    document.querySelector('#example7').textContent = '你最喜欢的运动员是:' + values[1];
  },
})
document.querySelector('#example7').addEventListener('click', function () {
  picker7.show();
})

// 实例八
var year = [];
for(var i = 16; i < 30 ; i++){
  year.push(i + 2000);
}

var month = [];
for(var i = 1; i <= 12 ; i++){
  month.push(i);
}

var today = new Date();

var picker8  = window.picker({
  cols : [{
    options: year,
    suffix: "年",
  },{
    options: month,
    suffix: "月",
  },{
    options: [],
    suffix: "日",
  },],
  onOkClick: function (values) {
    document.querySelector('#example8').textContent = values[0] + "年" + values[1] + "月" + values[2] + "日";
  },
  setValues: [today.getFullYear(), today.getMonth() + 1, today.getDate()],
  onSelectItem : function (i, index, value) {

    if(i != 2){
      var year = this.getValue(0);
      var month = this.getValue(1);

      if(year == null || month == null)
        return

      var curDate = new Date();
      curDate.setYear(year)
      curDate.setMonth(month);
      curDate.setDate(0);

      var day = [];
      for(var i = 1; i <= curDate.getDate() ; i++){
        day.push(i);
      }
      this.setOptions(2, day);
    }
  }
});
document.querySelector('#example8').addEventListener('click', function () {
  picker8.show();
})