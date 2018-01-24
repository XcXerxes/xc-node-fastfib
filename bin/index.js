#!/usr/bin/env node
const fastlib = require('../')
const seqNo = Number(process.argv[2])

if(isNaN(seqNo)) {
  return console.error('\n Invalid sequence number provided')
}

console.log(fastlib(seqNo))