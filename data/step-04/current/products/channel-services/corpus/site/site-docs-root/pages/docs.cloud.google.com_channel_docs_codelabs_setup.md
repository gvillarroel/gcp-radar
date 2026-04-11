---
title: "Technical setup \_|\_ Channel Services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/codelabs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/codelabs/setup
  title: "Technical setup \_|\_ Channel Services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
Guides
Send feedback
Technical setup
Stay organized with collections
Save and categorize content based on your preferences.
Before you begin
Before starting, you need the following:
Super admin access to your reseller domain. For more information, see how to
access the Cloud Channel API .
Access to the Google Cloud console and the Partner Sales Console.
Step 1: Prepare the Partner Sales Console
Before you can use the API, you must accept the terms and conditions of the
Channel Services platform.
Log in to the Partner Sales Console at least once
as an administrator of the reseller domain. The first time you sign in,
you must accept the reseller terms of service, if applicable. If you accepted
specific terms of service offline, this step isn't applicable to you.
You can accept additional terms of service on the
Terms page
of the Partner Sales Console.
Note: You need your Account ID, found in the Partner Sales Console Settings
page, for API integration.
Step 2: Configure your Google Cloud project
To use any Google API, you must have a Google Cloud project.
Create a Google Cloud project
To create a project, navigate to the Projects
area of your Google Cloud console and click
add_box Create Project .
For more detailed instructions on creating a project, and for a list of best
practices, see our Creating and managing projects guide.
Most resellers create Google Cloud projects under their main
Google Cloud organization instead of under the reseller domain. Accessing
data from the reseller domain is granted by setting up
domain-wide delegation to let a service account access
data from the reseller domain.
Give the project a descriptive name. The project ID is an arbitrary identifier
that does not affect your ability to call the Cloud Channel API.
Enable the API
Navigate to the API Library section in the Google Cloud console and enable
the Cloud Channel API .
Create a service account
To create your service account, go to the Service accounts page.
Go to Service accounts
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
Click add_box Create Service Account .
Enter the Service account name (and optional Service account
description ) then click Create .
Click Continue to skip the Grant service account access to project
option.
Skip the Grant users access to this service account section and click
Done to finish account creation.
After you create your account, create a service account key:
In the Google Cloud console, click the email address for the service
account that you created.
Click Keys .
Click Add key , then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Make sure to store the key file securely, because it can be used to
authenticate as your service account. You can move and rename this file
however you would like.
Click Close .
You can delete and create private key files from the Service accounts page.
Step 3: Authorize the service account for the reseller domain
You need your service account's Client ID for this section. From the
more_vert Actions menu, select
Manage details and copy your Unique ID .
Go to the
Domain-wide delegation page
using your reseller domain's super-admin account.
Click Add new and enter your service account's ID in the Client ID field.
Enter https://www.googleapis.com/auth/apps.order in the OAuth Scopes field.
Click Authorize to allow your service account to use the
Cloud Channel API in the context of your Channel Services account.
Note: If you use additional APIs in your final integration, you might have
more than one scope for your service account's client.
Then click Authorize so your service account can use the Cloud Channel API in the
context of your Channel Services account.
Note: You might have to enable more APIs and add more scopes in other codelabs.
Your final integration might have more than one scope for your service account's
client.
Next steps
Now that you have an initial technical integration, you can discover the API by
reading the Cloud Channel API documentation .
Note: If you also have a Test Partner Sales Console, follow steps one through four
with your test reseller domain. Make sure to create a separate project since
Google APIs have per-project quotas. Sharing a project across environments
might cause your test accounts to impact the quotas on your production account.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
