---
title: "Local development \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/local-development
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/advanced-services
source_metadata:
  url: https://developers.google.com/looker-studio/connector/local-development
  title: "Local development \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Local development
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
dscc-gen is a tool that automates repetitive tasks in creating and managing Data Studio community connectors.
It simplifies connector development by providing commands to create projects, push code updates, and deploy to Looker Studio.
Developers can use dscc-gen with existing connectors or create new ones from scratch, streamlining their workflow.
dscc-gen utilizes clasp for command-line interaction with Apps Script projects and provides various helpful commands like npm run watch , npm run try_latest , and npm run update_production for efficient development and deployment.
To get started with an existing connector, you need to obtain the scriptId from the Apps Script project URL.
While you can accomplish all connector-related tasks using the online Apps
Script environment, some of them can become repetitive and error-prone over
time.
dscc-gen is an opinionated tool that's meant to address these repetitive
tasks so you can focus on solving your business problem instead of errors that
can be avoided through automation.
Requirements
npm 5.2.0 or later
Some familiarity with the command-line.
Using dscc-gen
dscc-gen can create new community-connector projects or be
used with existing ones .
Existing connectors
dscc-gen can also be used with existing projects. First,
copy your scriptId , then run the following command (replacing
YOUR_SCRIPT_ID with your scriptId .):
npx @google/dscc-gen connector --script_id YOUR_SCRIPT_ID
You'll be prompted for a few details for your connector. If you don't already
have a deployment called "Production", one will be created for you. None of your
existing code will be modified, but you will have access to
everything dscc-gen can do .
New connectors
To create a new community-connector with dscc-gen , run the following command:
npx @google/dscc-gen connector
Note: npx was added to npm 5.2.0. It runs one-off executables without
modifying your PATH .
You'll be prompted for a few details for your new connector. First-time users
will be asked to authenticate clasp . clasp is a tool for creating &
modifying Apps Script projects from the command-line.
After completing the prompts, dscc-gen will create a new Apps Script project
and print out everything it can do .
What can dscc-gen do?
Command
Description
npm run open
Open your project in Apps Script.
npm run push
Push your local changes to Apps Script.
npm run watch
Watch for local changes, and push them to Apps
Script.
npm run prettier
Format your code using community standards.
npm run try_latest
Open the deployment with your latest code in
Looker Studio.
npm run try_production
Open your Production deployment in Looker
Studio.
npm run update_production
Update your production deployment to use your
latest code.
Note: All of these commands should be run from the top-level directory of your
project.
How should I Use it?
Using dscc-gen often goes a little like this:
Identify a feature you'd like to add to your connector.
Run npm run watch , so local changes will be pushed to Apps Script.
Make your code changes using your favorite
JavaScript editor .
Run npm run tryLatest and check that your new feature is working as
expected.
Run npm run updateProduction to update your production deployment to have
your new feature.
Run npm run tryProduction and double check that the new feature works.
Get your script Id
To get your scriptId , navigate to your existing project, then copy the section
of the url after /d/ and before /edit . For example: the following url:
Original Url:
https://script.google.com/a/google.com/d/example-script-id/edit
Script Id: example-script-id
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
