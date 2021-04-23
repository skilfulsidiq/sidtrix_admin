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
    path: "/attendance",
    name: "attendance",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/AttendanceList.vue")
  },
  {
    path: "/courses",
    name: "course",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/Courses.vue")
  },
  {
    path: "/assesment",
    name: "assesment",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/Assesment.vue")
  },
  {
    path: "/assesmentType",
    name: "assesmentType",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/AssesmentType.vue")
  },
  {
    path: "/payment",
    name: "payment",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/Payment.vue")
  },
  {
    path: "/question",
    name: "question",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/Question.vue")
  },
  {
    path: "/session",
    name: "session",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/Session.vue")
  },
  {
    path: "/training",
    name: "training",
    meta: {
      layout: "backend"
    },
    component:() => import("../views/backend/Training.vue")
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
