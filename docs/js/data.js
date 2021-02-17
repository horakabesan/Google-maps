const dataList = [
  {
    name: 'だし・麺 未蕾',
    address: '日本、〒443-0059 愛知県蒲郡市本町１−２５',
    img: 'https://lh5.googleusercontent.com/p/AF1QipMnm7eLfWIr-OLFSAz9GHgNCWP0v63cgicntdln=w312-h192-p-k-no',
    Regular_holiday: '定休日：水曜日（月曜日、火曜日の午後は定休日）',
    sales_time_am: '午前の部：11:00~14:00',
    sales_time_pm: '午後の部：17:00~21:00',
    lat: 34.8270414,
    lng: 137.228052
  },
  {
    name: '麺の匠 和み',
    address: '日本、〒443-0048 愛知県蒲郡市緑町３−５９',
    img: 'https://lh5.googleusercontent.com/p/AF1QipPaYhpQur36GoaszhIykTaySXOy_X97RCLP_EXY=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日、火曜日',
    sales_time_am: '午前の部：11:30~14:00',
    sales_time_pm: '午後の部：18:00~22:00',
    lat: 34.8288381,
    lng: 137.2183585
  },
  {
    name: 'OmotenashiNoodles まつじ',
    address: '日本、〒443-0045 愛知県蒲郡市旭町１２−９',
    img: 'https://lh5.googleusercontent.com/p/AF1QipNTVqXvFTZxOkCML4Z7UXR06KbYmQ5JbS187jOH=w312-h192-p-k-no',
    Regular_holiday: '定休日：木曜日',
    sales_time_am: '午前の部：11:00~15:00',
    sales_time_pm: '午後の部：営業時間外',
    lat: 34.8263205,
    lng: 137.2165394
  },
  {
    name: '来来亭 蒲郡店',
    address: '日本、〒443-0046 愛知県蒲郡市竹谷町油井浜１−４',
    img: 'https://lh5.googleusercontent.com/p/AF1QipOK-K_s0xP364-VMnUaSauGt_z3Ek9GOwFa1haj=w312-h192-p-k-no',
    Regular_holiday: '定休日：なし',
    sales_time_am: '1日営業：11:00~20:00',
    lat: 34.824998,
    lng: 137.204511
  },
  {
    name: '麺屋しずる 蒲郡駅前店',
    address: '日本、〒443-0056 愛知県蒲郡市神明町１−１',
    img: 'https://lh5.googleusercontent.com/p/AF1QipM6-fG4cvoe1DV0F83XF3Mc3DoJwpG79hEQrnzd=w312-h192-p-k-no',
    Regular_holiday: '定休日：なし',
    sales_time_am: '1日営業：11:00~22:15',
    lat: 34.8234613,
    lng: 137.2267109
  },
  {
    name: 'こうたのらーめん屋さん',
    address: '日本、〒444-0113 愛知県額田郡幸田町菱池内池６',
    img: 'https://lh5.googleusercontent.com/p/AF1QipOQN3Dw71F2j3VYqhuIjzCNuCWfAu1F8X0XS5IU=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日、火曜日',
    sales_time_am: '午前の部：11:00~14:00',
    sales_time_pm: '午後の部：17:00~21:00',
    lat: 34.8650928,
    lng: 137.1618311
  },
  {
    name: 'ばーばら ラーメン屋 幸田店',
    address: '日本、〒444-0103 愛知県額田郡幸田町大草馬場７３−１',
    img: 'https://lh5.googleusercontent.com/p/AF1QipN3ipm4ub6K8nFHB3oTHbb9zWUPo18cTqGBC88g=w312-h192-p-k-no',
    Regular_holiday: '定休日：日曜日、月曜日',
    sales_time_am: '午前の部：11:30~14:00',
    sales_time_pm: '午後の部：18:00~22:00',
    lat: 34.8765139,
    lng: 137.1768073
  },
  {
    name: '暖だん',
    address: '日本、〒444-0822 愛知県岡崎市若松東１丁目８−２６',
    img: 'https://lh5.googleusercontent.com/p/AF1QipNf4SizqKFX4YCBGk3Mhv9H3bg4iozG5n6u9w5R=w312-h192-p-k-no',
    Regular_holiday: '定休日：火曜日',
    sales_time_am: '午前の部：11:00~14:30',
    sales_time_pm: '午後の部：18:00~21:30',
    lat: 34.9166971,
    lng: 137.1676594
  },
  {
    name: '自家製麺 公園前',
    address: '日本、〒444-0837 愛知県岡崎市柱４丁目８−１６',
    img: 'https://lh5.googleusercontent.com/p/AF1QipN8GW3TnelPmMdRUHe6HKP2Xaqm2kxLUtUIMJQ0=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日、火曜日',
    sales_time_am: '午前の部：11:00~14:00',
    sales_time_pm: '午後の部：営業時間外',
    lat: 34.9227276,
    lng: 137.1503216
  },
  {
    name: '日本晴れ',
    address: '日本、〒444-0201 愛知県岡崎市上和田町南屋敷２−１',
    img: 'https://lh5.googleusercontent.com/p/AF1QipMfdA6VeJ8PvSM4Q7FRkMDm-wxIf9DsgVZ2cxoO=w312-h192-p-k-no',
    Regular_holiday: '定休日：なし',
    sales_time_am: '1日営業：11:00~21:30',
    
    lat: 34.93095,
    lng: 137.1532989
  },
  {
    name: 'つけめん舎 一輝',
    address: '日本、〒444-0206 愛知県岡崎市法性寺町荒子５４−２',
    img: 'https://lh5.googleusercontent.com/p/AF1QipPlJavzAnsoCtOhEhIlK7OSi2RKG9lIWJAnSxx9=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日',
    sales_time_am: '午前の部：11:30~14:00(土日→15:00まで)',
    sales_time_pm: '午後の部：18:00~22:00',
    lat: 34.9294811,
    lng: 137.1427229
  },
  {
    name: 'まるぎん二号',
    address: '日本、〒444-0938 愛知県岡崎市昭和町下川田１０−２',
    img: 'https://lh5.googleusercontent.com/p/AF1QipNY8GvD58Xidyc0lwVZD5bIQiO-VcpIXcQgwEFm=w312-h192-p-k-no',
    Regular_holiday: '定休日：火曜日',
    sales_time_am: '午前の部：11:00~14:00',
    sales_time_pm: '午後の部：17:30~22:00',
    lat: 34.9444221,
    lng: 137.1197176
  },
  {
    name: 'キブサチ',
    address: '日本、〒444-0915 愛知県岡崎市日名南町１７−７ レジャービル １Ｆ',
    img: 'https://lh5.googleusercontent.com/p/AF1QipPtSTWinUJJdMDUMT-oiUQhBUEv9DCskySzo7zV=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日(日曜日、木曜日の午後は定休日)',
    sales_time_am: '午前の部：11:00~13:50',
    sales_time_pm: '午後の部：18:00~20:50',
    lat: 34.9661131,
    lng: 137.1522072
  },
  {
    name: '麺屋らくだ 岡崎本店',
    address: '日本、〒444-0916 愛知県岡崎市日名本町１−１２',
    img: 'https://lh5.googleusercontent.com/p/AF1QipPXzinbEDsft1wvq0D9UGL8bHi3EeYIGV0g6kbj=w312-h192-p-k-no',
    Regular_holiday: '定休日：火曜日',
    sales_time_am: '午前の部：11:00~14:00',
    sales_time_pm: '午後の部：17:30~21:30',
    lat: 34.9661505,
    lng: 137.1517512
  },
  {
    name: 'まんぷく家 井田248店',
    address: '日本、〒444-0068 愛知県岡崎市井田南町２−２',
    img: 'https://lh5.googleusercontent.com/p/AF1QipMrINOvAYwVeSS4xCZgIJ_VfY97DQA7xmatSEE=w312-h192-p-k-no',
    Regular_holiday: '定休日：なし',
    sales_time_am: '1日営業：10:00~19:30',
    lat: 34.9756347,
    lng: 137.1603977
  },
  {
    name: 'らーめんつけ麺 喜竹 岡崎店',
    address: '日本、〒444-0947 愛知県岡崎市西本郷町社口３９−３',
    img: 'https://lh5.googleusercontent.com/p/AF1QipN6cFzzHVEp25drWCmwHH7BYtkt9aqSVunYtG81=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日',
    sales_time_am: '午前の部：11:30~14:00',
    sales_time_pm: '午後の部：17:00~21:30',
    lat: 34.9619081,
    lng: 137.1253502
  },
  {
    name: '麺々わっしゅ',
    address: '日本、〒444-2133 愛知県岡崎市井ノ口町河原西',
    img: 'https://lh5.googleusercontent.com/p/AF1QipNXvKMOMIXq3ZTllMcaX8CFU_gpZaCxaXKb98-a=w312-h192-p-k-no',
    Regular_holiday: '定休日：月曜日',
    sales_time_am: '午前の部：営業時間外',
    sales_time_pm: '午後の部：19:00~1:00',
    lat: 34.9874297,
    lng: 137.1643358
  }
];
