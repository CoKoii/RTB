const UserInfo = {
  name: "曹凯",
  phone: "13390945900",
  email: "2655257336@qq.com",
  photo: "https://q1.qlogo.cn/g?b=qq&nk=2655257336&s=640",
  age: 20,
  gender: "男",
  experience: "1",
  status: "在读",
  job: "前端开发工程师",
  education: {
    school: "苏州大学应用技术学院",
    major: "软件工程",
    degree: "本科",
    time: {
      start: "2023-09",
      end: "2027-07",
    },
    description: ["学院工作室前端负责人，独立多个真实企业项目前端开发"],
  },
  skills: {
    mainSkills: [
      {
        name: "HTML/CSS",
        level: 70,
        gradient: "linear-gradient(90deg, #50fa7b 0%, #8be9fd 100%)",
      },
      {
        name: "JavaScript",
        level: 75,
        gradient: "linear-gradient(90deg, #8be9fd 0%, #bd93f9 100%)",
      },
      {
        name: "TypeScript",
        level: 20,
        gradient: "linear-gradient(90deg, #bd93f9 0%, #ff5555 100%)",
      },
      {
        name: "React",
        level: 30,
        gradient: "linear-gradient(90deg, #ff79c6 0%, #bd93f9 100%)",
      },
      {
        name: "Vue.js",
        level: 60,
        gradient: "linear-gradient(90deg, #ffb86c 0%, #50fa7b 100%)",
      },
    ],
    descriptions: [
      "前端基础: HTML5、CSS3、JavaScript(ES6+)、TypeScript、Flex/Grid响应式布局",
      "前端框架: Vue.js、React、Uniapp及其周边组件库、熟练v-charts等可视化工具(绘制可视化图表)",
      "中后台框架: 熟练使用Ant Design Pro、Vben Admin等构建后台管理系统",
      "Node: 了解Express等开发框架",
      "前端工具: 了解Webpack、了解vite构建工具、熟练使用ESLint等规则工具",
      "协同开发: 熟悉Git、具有多次协同开发经验、熟悉GitHub、Gitee、Coding等托管平台",
      "服务端: 熟悉使用Java/Mysql/Springboot、了解docker部署",
    ],
  },
  workExperiences: [
    {
      id: 1,
      company: "科技有限公司",
      position: "前端开发实习生",
      period: "2022.06 - 2022.09",
      description: [
        "负责公司主要产品的前端页面开发和维护",
        "使用React、TypeScript开发新功能模块，提升用户体验",
        "参与需求评审和UI设计讨论，优化前端架构",
      ],
      location: {
        address: "上海市浦东新区张江高科技园区",
        coordinates: "120.838,31.117",
      },
    },
    {
      id: 2,
      company: "互联网科技有限公司",
      position: "全栈开发实习生",
      period: "2023.01 - 2023.04",
      description: [
        "参与电商平台核心功能开发，使用Vue.js构建用户界面",
        "使用Node.js开发服务端API，对接数据库和第三方服务",
        "独立负责多个页面的性能优化，提升加载速度30%",
      ],
      location: {
        address: "北京市海淀区中关村软件园",
        coordinates: "116.307673,40.042976",
      },
    },
    {
      id: 3,
      company: "创新科技有限公司",
      position: "前端开发工程师",
      period: "2023.07 - 至今",
      description: [
        "负责公司核心产品的前端架构设计和开发",
        "使用React、Redux管理复杂状态，实现高性能用户界面",
        "带领前端小组完成多个关键项目，提升团队开发效率",
      ],
      location: {
        address: "深圳市南山区科技园",
        coordinates: "113.944158,22.528763",
      },
    },
  ],
};

export default UserInfo;
