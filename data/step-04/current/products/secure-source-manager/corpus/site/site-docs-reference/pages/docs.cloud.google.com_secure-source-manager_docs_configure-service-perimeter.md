---
title: "Configure Secure Source Manager in a VPC Service Controls perimeter \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/configure-service-perimeter
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs/create-access-instance
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/configure-service-perimeter
  title: "Configure Secure Source Manager in a VPC Service Controls perimeter \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Guides
Send feedback
Configure Secure Source Manager in a VPC Service Controls perimeter
Stay organized with collections
Save and categorize content based on your preferences.
This guide shows how to use a Private Service Connect
Secure Source Manager in a VPC Service Controls
perimeter to guard against data exfiltration.
This guide is intended for network administrators, security architects, and
cloud operations professionals who want to mitigate the risk of sensitive
data loss.
Before you begin
Create a Private Service Connect Secure Source Manager instance .
Create a VPC Service Controls perimeter .
Required roles
To get the permissions that
you need to configure Secure Source Manager in a VPC Service Controls perimeter,
ask your administrator to grant you the
following IAM roles on the organization:
Access Context Manager Admin role ( roles/accesscontextmanager.policyAdmin )
Project Creator ( roles/resourcemanager.projectCreator )
Follow best practices
Careless enablement of VPC Service Controls can cause problems with existing
applications and could potentially cause an outage. We recommend that you plan
enablement carefully and allow ample time to gather data, conduct tests, and
analyze violation logs. Make sure that stakeholders from your
VPC Service Controls operations team and your applications team are available for
the task.
For more information on best practices, see
Best practices for enabling VPC Service Controls
Add your project to the perimeter
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
On the VPC Service Controls page, select the perimeter you want to use
to protect your project.
On the VPC Service Control enforced config detail page, click Edit
in the resources to protect section.
Click Resources to protect and add your project ID.
Click Save .
Add Secure Source Manager as a restricted service
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
On the VPC Service Controls page, select the perimeter you added your
project to.
On the VPC Service Control enforced config detail page, click Edit
in the Restricted services section.
Click Add services .
In the Specify services to restrict dialog, select the checkbox next to
Secure Source Manager. You can use the filter query to locate Secure Source Manager in
the list.
Click Save .
After you update a service perimeter, it can take up to 30 minutes for the
changes to propagate and take effect. During this time, the perimeter might
block requests with the following error message:
Error 403 : Request is prohibited by organization ' s policy.
What's next
Learn more about Private Service Connect .
Learn more about Connecting to VMs without external IP addresses .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
