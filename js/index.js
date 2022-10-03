particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,//この数値を変更すると紙吹雪の数が増減できる
      "density": {
        "enable": false,
        "value_area": 400
      }
    },
    "color": {
      "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC", "#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
    },
    "shape": {
      "type": "star",//形状はpolygonを指定
      "stroke": {
        "width": 0,
      },
      // "polygon": {
      //   "nb_sides": 6//多角形の角の数
      // }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 20,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,//サイズをランダムに
      "anim": {
        "enable": true,
        "speed": 1.345709068776642,
        "size_min": 0.8,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 7,//この数値を小さくするとゆっくりな動きになる
      "direction": "bottom",//下に向かって落ちる
      "random": true,//動きはランダムにならないように
      "straight": false,//動きをとどめない
      "out_mode": "out",//画面の外に出るように描写
      "bounce": false,//跳ね返りなし
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
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    },
  },
  "retina_detect": true
});