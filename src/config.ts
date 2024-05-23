// 网站标题
const title = "[简历]徐华臣-前端开发工程师";

// 个人信息
const avatar = {
  name: "徐华臣",
  info: "前端开发 / node开发",
  // 这里src是头像图片的名称,在public文件中放自己的头像图片,然后替换这里的文件名,`./`记得加上
  src: "./misaka10032.png",
};

// 基本信息
const baseInfo: Info[] = [
  { label: "个人信息", value: "徐华臣 / 男 / 24岁" },
  { label: "工作经验", value: "3年" },
  { label: "毕业院校", value: "河南工业大学(2018-2022)" },
  { label: "学历", value: "本科" },
];

// 联系方式
const contacts: Contact[] = [
  { label: "手机/微信", value: "18864518921", link: false },
  { label: "邮箱", value: "breezexu@foxmail.com", link: false },
];

// 技能点
const skills: Skill = [
  "前端： HTML, CSS, Echart,VUE,JS/Ts,react",
  "后端： koa,express",
  "数据库： MySQL,MongoDB,Redis,Tednige",
];

// 技术栈
const skillStack: string[] = [
  "熟练HTML、CSS(SASS)、Javascript(TS)，ES6+等基本前端知识，能独立完成前端页面开发",
  "熟练掌握Vue2和Vue3项目结构&开发规范，对其周边生态有所了解",
  "熟悉React的语法，了解项目开发规范",
  "熟悉Git分支管理、深度理解前端工程化,高效协同开发",
  "掌握express,koa等nodejs后端框架，了解其原理和中间件的运行机制",
  "熟悉nodejs的操作数据库的方法,如 sequelize、knex",
  "熟悉Mysql,MongoDB,Redis等数据库的使用以及部署安装，了解sql查询的优化技巧",
  "熟悉Kafka,Zmq,消息队列的使用，了解其应用场景",
  "熟悉Webpack、Vite等构建工具，对性能优化有深入了解",
  "熟悉的Jenkins自动化部署技能以及Docker容器化部署经验,熟悉CI/CD流程",
  "具有远程部署（win/linux），现场部署的的经验",
  
];

const educations: Education[] = [
  {
    title: "河南工业大学 （本科）",
    startTime: "2018.9",
    endTime: "2022.7",
    education: `专业排名06
    <mark>3.86/5</mark
    >,`,
  },
];

// 工作经历
const workInfo: Work[] = [
  {
    title: "江苏源驶科技有限公司——平台开发工程师",
    startTime: "2023.07",
    endTime: "至今",
    desc: [
      `对公司主要产品「道路巡检」「AI巡检车」的功能进行开发,主要负责后端接口开发以及部分前端页面的开发`,
    ],
  },
  {
    title: "浙江华友钴业有限公司——前端工程师",
    startTime: "2022.07",
    endTime: "2023.04",
    desc: [
      `对公司的oa系统进行迭代升级,重构前端页面,主要负责的是首页，用户管理，文件上传，部门管理等模块，同时开发公司内部的小程序`,
    ],
  },
  {
    title: "科创比特互联网科技——实习生",
    startTime: "2021.07",
    endTime: "2022.03",
    desc: [
      `作为实习生,负责部分前端页面开发和协助测试对产品进行测试,编写部分测试用例，书写测试报告`,
    ],
  },
];

// 个人开源项目
const projects: Project[] = [
  {
    title: "AI巡检车 +  AI巡检车中台",
    // demoLink: "#",
    startTime: "2023.09",
    endTime: "至今",
    skill: "Koa + Mysql + Redis + Tednige + Kafka + Vue + Echart",
    background:
      "公司的停车巡检项目，对车位进行巡检预警，同时提供一个数据可视化管理平台",
    result: [
      `提高准确率：对判定逻辑进行重写,车牌车位匹配<mark>准确率从83%提升到96%</mark>,并且将串位问题发生率降低90%`,
      `风险监控:后端接受终端传入kafka的数据,在线且长时间没有数据的巡检车,进行<mark>邮件实时报警提醒</mark>`,
      `优化查询速度: 借助缓存和定时任务,将查询时间由6s压缩至1s,提升了查询效率`,
      `自动化部署: 通过Jenkins和Docker,实现<mark>CI/CD</mark>,一键部署前端和后端`,
      `数据大屏: 监控大屏对今日巡检车在线数据,巡检数据进行实时归类统计,`,
      `配置中心: 区分生产环境和开发环境，对于不同的环境，执行不同的脚本进行<mark>独立部署</mark>`,
      `日志中心：合理的日志采集，区分不同的日志到不同的文件夹，动态日志自动归档`,
      `复用型功能：封装通用型的数据报表的导出功能,传入标题和数据即可,支持导出csv、excel、pdf格式`,
      `h5页面实现车位录制功能,点击车位录制后,读取车辆上报的实时定位信息,同时在页面进行历史车位和当前车位的一个可视化展示,同时实时对新增车位进行检测,数据异常或者数据重复等等,进行弹窗提醒`,
      `调用本地的算法对车牌进行二次识别,对设备上报的车牌进行及时纠错,提高准确率 `,
      `解析终端盒子发送至Kafka的数据信息,调用算法解析图片,对图片进行二次处理,并上传止OSS`,
    ],
  },
  {
    title: "科技兴安-非信控路口预测报警",
    demoName: "repo链接",
    startTime: "2024.01",
    endTime: "2024.03",
    skill: "KOA + MySQL + Vue.js + OpenLayer + WebSocket",
    background: "对非信控路口进行车辆轨迹的监测和碰撞预告进行统计",
    result: [
      `前端：天地图+openlayer实现对ws传来的实时车辆轨迹经纬度信息进行动态展示`,
      `前端：使用高德地图+高清路口地图贴图,对实时车辆信息的运动轨迹进行展示`,
      `后端: 接受阿里云IOT中的相关数据进行融合处理,同时对不合规的数据进行过滤删除,同时根据数据对碰撞进行预测,并实时报警,同时进行报警信息的可视化展示`,
    ],
  },
  {
    title: "银基智能化服务区业务平台",
    startTime: "2024.03",
    endTime: "2024.05",
    skill: "KOA + MySQL + Vue.js + ECharts +  WebSocket",
    background: "淮安业主的智能化一体式服务区设计方案",
    result: [
      `设备对接:对接服务区内的地磁,广播,led屏幕,智能化音箱,出入口闸机,路口引导屏的设备,支持消息的接受和发送`,
      `文件上传：采用切片的方法,解决大文件上传失败的问题`,
      `部署：打包部署前后端服务，以及以来的数据库等相关配置文件到业主提供的服务器`,
    ],
  },
  {
    title: "飞书平台-工单系统",
    startTime: "2023.10",
    endTime: "2023.10",
    skill: "KOA + MySQL + Vue.js + ECharts",
    background:
      "公司研发中心内部使用的工单系统，我负责框架的搭建和部分功能的开发",
    result: [
      `免登：内嵌飞书平台的应用，实现飞书客户端免密登录跳转功能`,
      `机器人通知：借助飞书机器人功能实现与工单相关的各种提醒功能,如工单超时通知,工单状态变更通知`,
      `实现定时任务，定时发送工单填写提醒，每周每月自动统计工单并推送至飞书账户`,
    ],
  },
  {
    title: "ruoyi系统后端代码重构",
    startTime: "2023.07",
    endTime: "2023.09",
    skill: "KOA + MySQL + Redis + JWT + Sequelize  ",
    background: "ruoyi系统后端代码重构，为公司后端服务提供支持",
    result: [`使用koa+mysql+redis+jwt+sequelize对若依的java后端代码进行重构`],
  },
];

const evaluations = [
  `此处如果有一些能够量化的、且比较个性的指标会有加分,比如喜爱跑步坚持夜跑200小时或者200km等`,
  `“多静多思考,反省不张扬”是我给自己总结的“十字箴言”,鞭策自己做人既不能以己度人,也不以人观己,要脚踏实地做事,坚持自己的梦想和本心。`,
];

const rightAside: RightAside[] = [];

// footer
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default {
  title,
  avatar,
  baseInfo,
  contacts,
  skills,
  skillStack,
  workInfo,
  educations,
  projects,
  evaluations,
  rightAside,
  year,
  month,
  day,
};
