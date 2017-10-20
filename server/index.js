"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var express = require("express");
var clientPath = path_1.join(__dirname, '../client');
var app = express();
app.use(express.static(clientPath));
console.log(process.env.GREETING);
app.listen(process.env.PORT || 3000, function () { return console.log('Listening on port 3000'); });
