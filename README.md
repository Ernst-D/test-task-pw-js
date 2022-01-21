# test-task-pw

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [CI](#ci)
- [CI Bonus questions](#ci-bonus)


<h2 id = "about"> About </h2>
If you use VS Code - please, do `ctr/cmd + shift + v` to  show readme in preview mode.

Resident AQA Task. Contains first option of every task and CI task (№ 1,3 and 5); 

[**GitHub link**](https://github.com/Ernst-D/test-task-pw-js)

<h2 id = "getting_started"> Getting Started </h2>

If you want to see just results of the test - see [CI](#ci) section

If you want run the tests on your machine - you should have nvm ([Windows](https://github.com/nvm-sh/nvm), [Unix](https://github.com/nvm-sh/nvm)). With this you should have **nodejs v.16.13.1**.

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

5. If you want to run Playwright with [Moon](https://aerokube.com/moon/latest/#_getting_started) - please, use [minikube](https://aerokube.com/moon/latest/#install-minikube) and refer to [this](https://aerokube.com/moon/latest/#_using_playwright) section

<h2 id = "ci"> CI </h2>

Use link below to navigate to CircleCI

[![CircleCI](https://circleci.com/gh/Ernst-D/test-task-pw-js/tree/main.svg?style=svg)](https://circleci.com/gh/Ernst-D/test-task-pw-js/tree/main)

There you will be able to see builds for this project. Click on latest *build* and you will be on page with three tabs: *Steps*, *Tests*, *Artifacts*. 

To see how build was made - go to *Steps*.

To see test results - go to *Artifacts*. 
There you can click on [playwright-report/index.html](https://11-447347280-gh.circle-artifacts.com/0/playwright-report/index.html) (for example) and inspect summary of test results. **OR** you can download *trace.zip* and then upload this zip file to [web version of Playwright Trace Viewer](https://trace.playwright.dev/). Just drag and drop the downloaded zip and inspect the result of test spec :)

More about Trace Viewer [here](https://playwright.dev/docs/trace-viewer).


<h2 id = "ci-bonus"> CI Bonus Questions </h2>

1. Speed up test execution: use (playwright parallezation)[https://playwright.dev/docs/test-parallel], descrease UI actions (if it doesn't affect), specify server region (for remote test run in cloud providers), server optimisation (for example, caching some requests if we use `nginx` in infrastructure)
2. Speed up whole workflow:  caching the docker image, caching the node_modules, caching playwright browsers (if we use Windows / MacOS executor).
3. Artifacts management: upload to any S3. 


