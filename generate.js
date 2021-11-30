module.exports = function () {
  var faker = require("faker");
  var lodash = require("lodash");

  return {
    UserAccounts: lodash.times(20, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        avatar: "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png",
        address: faker.address.streetAddress(),
        status: "Active",
        cv: "Yes",
        birthday: faker.date.between("1980-01-01", "2000-01-01"),
        created_time: faker.date.between("2021-11-01", "2021-12-01"),
      };
    }),
    Company: lodash.times(20, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        avatar: faker.image.business(),
        address: faker.address.streetAddress(),
        status: "Active",
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        status: "Active",
        createdTime: "2021-11-28T09:24:46.592Z",
      };
    }),
    HasWelfares: lodash.times(20, function (n) {
      return {
        id: n,
        welfareId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        recruitmentId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        description: faker.datatype.string(10),
      };
    }),
    InterviewDetails: lodash.times(20, function (n) {
      return {
        id: n,
        interviewId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        starttime: faker.date.between("2021-11-01", "2021-12-01"),
        endtime: faker.date.between("2021-11-01", "2021-12-01"),
        status: "Active",
        link: faker.datatype.string(10),
        description: faker.datatype.string(10),
        evaluation: faker.datatype.string(10),
      };
    }),
    Interviews: lodash.times(20, function (n) {
      return {
        id: n,
        recruitmentId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        title: faker.name.jobTitle(),
        description: faker.datatype.string(10),
        starttime: faker.date.between("2021-11-01", "2021-12-01"),
        link: faker.datatype.string(10),
        place: faker.address.streetName(),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
      };
    }),
    Invoices: lodash.times(20, function (n) {
      return {
        id: n,
        userPaymentId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        createdTime: faker.date.between("2021-11-01", "2021-12-01"),
        status: "Active",
      };
    }),
    Jobs: lodash.times(20, function (n) {
      return {
        id: n,
        name: faker.name.jobTitle(),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        status: "Active",
      };
    }),
    Notifications: lodash.times(3, function (n) {
      return {
        id: n,
        description: faker.datatype.string(5),
        type: faker.datatype.string(1),
        createdTime: "2021-11-28T14:28:26.242Z",
        status: true,
        userAccountId: 0,
      };
    }),
    Positions: lodash.times(20, function (n) {
      return {
        id: n,
        name: faker.name.jobType(),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        status: "Active",
      };
    }),
    Recruitments: lodash.times(20, function (n) {
      return {
        id: n,
        companyId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        title: faker.name.title(),
        description: faker.name.jobDescriptor(),
        createdTime: faker.date.between("2021-11-01", "2021-12-01"),
        endtime: faker.date.between("2021-11-01", "2021-12-01"),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        salary: faker.datatype.number({
          min: 1000,
          max: 5000,
        }),
      };
    }),
    Requirements: lodash.times(15, function (n) {
      return {
        id: n,
        positionId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        jobId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        recruitmentId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
      };
    }),
    SkillRequires: lodash.times(15, function (n) {
      return {
        id: n,
        skillId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        recruitmentId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
      };
    }),
    Skills: lodash.times(15, function (n) {
      return {
        id: n,
        name: faker.name.jobDescriptor(),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        status: "Active",
      };
    }),
    UserPayments: lodash.times(15, function (n) {
      return {
        id: n,
        price: faker.datatype.number({
          min: 500,
          max: 1000,
        }),
        name: faker.name.title(),
        description: faker.datatype.string(10),
        status: "Active",
      };
    }),
    UserRoles: lodash.times(5, function (n) {
      return {
        id: n,
        name: faker.name.title(),
        status: "Active",
      };
    }),
    Welfare: lodash.times(10, function (n) {
      return {
        id: n,
        name: faker.name.title(),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        status: "Active",
      };
    }),
    Works: lodash.times(20, function (n) {
      return {
        id: n,
        companyId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        userAccountId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        positionId: faker.datatype.number({
          min: 0,
          max: 20,
        }),
        status: "Active",
        starttime: faker.date.between("2021-11-01", "2021-12-01"),
        endtime: faker.date.between("2021-11-01", "2021-12-01"),
      };
    }),
  };
};
