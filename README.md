# test-task-pw

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [CI](#ci)

<h2 id = "about"> About </h2>
If you use VS Code - please, do `ctr/cmd + shift + v` to  show readme in preview mode.

Resident AQA Task. Contains first option of every task and CI task (№ 1,3 and 5); 

[**GitHub link**](https://github.com/Ernst-D/test-task-pw-js)

<h2 id = "getting_started"> Getting Started </h2>

You should have nvm ([Windows](https://github.com/nvm-sh/nvm), [Unix](https://github.com/nvm-sh/nvm)). With this you should have **nodejs v.16.13.1**.

<h2 id = "usage"> Usage </h2>

1. `npm i`
2. Run in headful mode: `npm run test -- --project='chromium' --headed`
    
    2.1. Run in headless mode: `npm run test -- 
    --project='chromium'`
    
    2.2. Run in a sequence: `npm run test -- --project="chromium"  --workers=1`

    2.3 Run against localhost chrome: ` npm run test -- --project="chrome"`

3. Show reports: `npx playwright show-report`. If you ran UI test - you will be able to see traces for ui specs

4. If you want traces: `npx playwright show-trace ./relative_path/to/trace.zip`

    Example (Windows): `npx playwright show-trace .\test-results\logout-Logout-test-suite-Logout-via-API-with-predifined-user-chrome\trace.zip`

<h2 id = "ci"> CI </h2>

Use link below to navigate to CircleCi

[![CircleCI](https://circleci.com/gh/Ernst-D/test-task-pw-js/tree/main.svg?style=svg)](https://circleci.com/gh/Ernst-D/test-task-pw-js/tree/main)