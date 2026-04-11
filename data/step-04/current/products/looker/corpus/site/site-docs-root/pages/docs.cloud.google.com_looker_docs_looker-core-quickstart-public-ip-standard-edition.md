---
title: "Quickstart: Create a Looker (Google Cloud core) public secure connection standard\
  \ edition instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition
  title: "Quickstart: Create a Looker (Google Cloud core) public secure connection\
    \ standard edition instance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a Looker (Google Cloud core) public secure connection standard edition instance
Learn how to create a Looker (Google Cloud core) instance
that uses default configuration settings. Looker (Google Cloud core) requires
approximately 60 minutes to generate a new instance.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Before you can create an instance, you need to complete these steps for the Google Cloud project in which you want to
create the Looker (Google Cloud core) instance:
Work with Sales to ensure that your annual contract is completed and that you have quota allocated in your project.
Make sure that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page, create a Google Cloud project or navigate to an existing one.
Go to project selector
Enable the Looker API for your project in the Google Cloud console. When enabling the API, you may need to refresh the console page to confirm that the API has been enabled.
Enable the API
Ensure that you have been granted the Looker Admin IAM role for the Google Cloud project in which you want to create the Looker (Google Cloud core) instance.
Create the Looker (Google Cloud core) instance
To create a Looker (Google Cloud core) instance that uses default configuration
settings, follow these steps:
Click Go to Looker (Google Cloud core) and select the Google Cloud project in which you want to create the Looker (Google Cloud core) instance, if it is not already pre-selected. When you click the button, depending on what Looker instances already exist in this project, you'll see one of the following:
If a Looker (Google Cloud core) instance already exists within this project, the Instances page will open. Click Create Instance to open the instance creation page.
If no Looker (Google Cloud core) instances have been created in this project, the Looker (Google Cloud core) product page will open. Click Create An Instance to open the instance creation page.
In the Instance name field, provide a name for your Looker (Google Cloud core) instance. The instance name is
not associated with the instance's URL. You won't be able to rename the instance after it has been created.
In the Region field, select the region that matches your subscription contract, as this is where the quota for your project is allocated. Then click OK .
In the Edition section, set the instance edition to Standard . This edition provides a Looker platform that is best for small organizations or teams with fewer than 50 users. This edition is
billed monthly while the instance is active.
Tip: If your project doesn't have quota, you won't be able to select an edition type. Contact Sales to allocate quota to your project.
Click Create . Looker (Google Cloud core) requires approximately 60 minutes to generate a new instance.
Sign in to the new instance by navigating to the instance URL, which can be found on the Instances page of the Google Cloud console, and sign in with Google .
What's next
This Quickstart covered how to create a Standard Looker (Google Cloud core) instance
that uses a public secure network connection and Google-managed encryption and that requires no deferred
or denied maintenance windows and no additional users beyond the default number
that is provided for a Standard edition.
For more information about creating and configuring an instance, see the
Looker (Google Cloud core) documentation:
Create a Looker (Google Cloud core) instance
Set up a custom domain for a Looker (Google Cloud core) instance that uses public connections
Configure an IP allowlist for Looker (Google Cloud core)
Prepare a Looker (Google Cloud core) instance for users
Connect to your database
Use the sample LookML project on a Looker (Google Cloud core) instance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
