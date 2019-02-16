#!/usr/bin/env bash

rm -rf dist/
npm ci
npm run build
cd dist
git init
git cob release
git add .
git commit -m "Build"
git remote add origin git@github.com:Bielik20/ngrx-actions.git
git push origin release -f
