#!/bin/bash
NODE_ENV=development babel src/backend -d .backend --plugins=transform-es2015-modules-commonjs && node .backend/index.js
