import Home from "../views/backend/Home.vue";

const backend_routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      layout: "backend"
    },
    component: Home
  },
  {
    path: "/students",
    name: "students",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/StudentList.vue")
  },
  {
    path: "/courses",
    name: "courses",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/CourseList.vue")
  },
  {
    path: "/payment",
    name: "payment",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/PaymentList.vue")
  },
  {
    path: "/assessment",
    name: "assessment",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/AssessmentList.vue")
  },{
    path: "/attendance",
    name: "attendance",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/AttendanceList.vue")
  },
  {
    path: "/coursemgt",
    name: "coursemgt",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/CourseMgt.vue")
  },
  // {
  //   path: "/all-properties",
  //   name: "all-properties",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import( "../views/backend/properties/AllProperties.vue")
  // },
  // {
  //   path: "/add-property",
  //   name: "add-property",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import("../views/backend/properties/NewProperty.vue")
  // },
  // {
  //   path: "/all-contractors",
  //   name: "all-contractors",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import("../views/backend/contrators/Contrator.vue")
  // },
  // {
  //   path: "/all-buyers",
  //   name: "all-buyers",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: () =>import("../views/backend/buyer/Buyer.vue")
  // },

  // {
  //   path: "/profile",
  //   name: "profile",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: Profile
  // },
  // {
  //   path: "/staff",
  //   name: "staff",
  //   meta: {
  //     layout: "backend"
  //   },
  //   component: Staff
  // }
];

export default backend_routes;
