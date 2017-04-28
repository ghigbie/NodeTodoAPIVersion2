const expect    = require("expect"),
      supertest = require("supertest");

//local files
const {app}  = require("./../server"),
      {Todo} = require("./../models/todo");
