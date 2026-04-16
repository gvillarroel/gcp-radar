---
title: "Deploy a Community Connector \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/deploy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector
source_metadata:
  url: https://developers.google.com/looker-studio/connector/deploy
  title: "Deploy a Community Connector \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Deploy a Community Connector
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Deployments make your Community Connector available for use and testing, with the Head Deployment automatically containing the latest code version.
Maintaining separate versions for production and development, along with understanding deployment management, is crucial for connector stability.
Creating separate deployments like Test and Production, in addition to the Head deployment, ensures a controlled release process.
Updates to existing deployments can be made by editing the deployment and selecting the desired version, automatically updating for users.
Utilizing version control within Apps Script and following deployment best practices provides a stable and efficient connector development workflow.
Deployments allow you to make your Community Connector available to use and
test. The Head Deployment is created by default in Apps Script and will always
contain the current working version of the code. However, you can have
additional deployments based on separate versions of your Community Connector.
For example, in addition to the Head deployment, you should have a Test
deployment and a Production deployment. This helps to ensure a stable and
tested version of your connector is released to users.
Maintain different versions of your code
As you develop your Community Connector in Apps Script, you should maintain
separate versions of your connector code for production and development. You
should also become familiar with how to deploy different versions.
To maintain different versions of the Apps Script project, please see the
Versions documentation for Apps Script.
Create separate deployments
For instructions to create deployments, see Create a versioned deployment .
Add updates to an existing deployment
If you are publishing or sharing your connector with other users, you might want
to provide patches or updates in the future. To do so, Edit the existing
deployment in the deployments list and choose the version you want to deploy.
This way, the users do not have to do anything additional and will receive the
update automatically.
For instructions to edit deployments, see Edit a versioned deployment .
Note: If the connector's creator is using a Google Workspace account, the
connector will have to be deployed from an account on the same domain. Consumer
(e.g. gmail.com) accounts or Google Workspace accounts of a different domain
will not be able to update deployments.
Best practice: keep separate HEAD, Test and Production deployments
The Latest Version (HEAD) deployment will always contain the latest version of
the code. This deployment should be used for development purposes only. In
addition to the HEAD deployment, you should have a Test deployment and a
Production deployment. As you develop your connector, maintain incremental
versions of your code and then assign appropriate versions to the Test and
Production deployments.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
