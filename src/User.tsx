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
      company: "昆山悦云网络科技有限公司",
      position: "前端工程师",
      period: "2025.03 - 至今",
      description: [
        "负责相关项目的需求沟通及设计，梳理流程、绘制草图、流程图",
        "参与产品及项目的前端架构搭建、开发",
        "对产品进行相关的测试工作",
        "根据客户需求对项目进行持续的更新、维护",
      ],
      location: {
        address: "江苏省苏州市昆山市",
        coordinates: "120.980737,31.385598",
      },
    },
  ],
  projects: [
    {
      id: 1,
      name: "昆山高新区巡检系统",
      status: "进行中",
      description: "商铺安全隐患排查与可视化平台，支持5000+商户管理。",
      darkColor: "#7048e8",
      link: "https://www.youtube.com",
      details: {
        intro:
          "为昆山高新区部门开发全域商铺安全隐患排查平台，覆盖5000+商户管理，实现隐患上报、整改跟踪、数据可视化闭环。",
        tech: [
          "系统架构与核心开发：基于React + Ant Design Pro从0到1搭建项目，实现动态路由、权限管理、页面缓存及数据看板模块",
          "Mock数据：通过自定义mock数据，模拟后端接口格式，提升前端开发进度，实现独立开发/测试",
          "地图集成：接入高德地图API，实现点标记、自定义窗口显示详情数据，优化地图模块性能，接口请求频率降低30%",
          "数据可视化集成：在表单页面集成Echart可视化图表，点击图表分类即可执行查询，显著用户体验和查询效率",
          "组件化提取：封装多角色表单提交组件，通过自定义接收参数，提升页面通用性，实现组件独立",
        ],
        tags: [
          "React",
          "Ant Design Pro",
          "Echarts",
          "高德地图API",
          "Mock数据",
          "组件封装",
        ],
        period: "2025年3月 - 至今",
        role: "前端开发",
      },
    },
  ],
};

export default UserInfo;
