---
title: "Get support \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/getting-support
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/getting-support
  title: "Get support \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Resources
Send feedback
Get support
Stay organized with collections
Save and categorize content based on your preferences.
This document outlines the support options that are available for
Cluster Toolkit.
Get a Google support package
Google Cloud offers different support packages to meet different needs, such as
24-7 coverage, phone support, and access to a technical support manager.
For more information, see Cloud Customer Care .
Support for Cluster Toolkit is offered under the Standard support package and
higher. To learn more about the different levels of support, review
Cloud Customer Care .
If you're not sure whether you have a paid technical support package, check your
Cloud Customer Care console:
Go to Support
Open a support case
If you have paid support, you can open a support case from the
Cloud Customer Care console. To open a support case, review
Customer Care procedures .
To open a support case for Cluster Toolkit from the console, you need to
specify Compute Engine as the product, and then on the following page, select
Cluster Toolkit from the category list.
Get support from the community
Because Cluster Toolkit is an open source project, you can also get support
from the following forums.
Ask a question on the GitHub discussions page
The central discussion forum for Cluster Toolkit users and community
developers is the Cluster Toolkit GitHub discussions page . From this page, you can review past
discussions, ask questions to other Cluster Toolkit users and developers,
and stay up to date with the Cluster Toolkit community.
Open an issue using the GitHub issue tracker
For issues with the gcluster engine and Cluster Toolkit modules, you can
open an issue on
GitHub to report a
bug or request a new feature.
For issues related to certain
community modules ,
you can seek support directly from the partner developers.
If available, you can find this information in the Support section of the module
README. For example:
SchedMD
DDN
Recommendations for efficient support
To allow the Cloud Customer Care team or Cluster Toolkit engineering to respond
expeditiously to your issue, include as much of the following information as is
possible in a report:
A clear and concise description of what the problem is.
Steps to reproduce the behavior.
A description of what you expected to happen.
A description of what actually happened.
The output of gcluster --version , which has Cluster Toolkit and Terraform
version information.
Attach a copy of the blueprint (YAML file) file used.
Any output logs or screenshots that might be useful.
Terraform Provider versions
Navigate to the deployment group folder where the issue occurred.
The deployment group folder uses the following naming convention:
DEPLOYMENT_NAME / GROUP_NAME .
For example, if the deployment name is hpc-small and the group name is
primary , you would access the folder as follows: cd ./hpc-small/primary .
In that folder call terraform version and provide the output.
Information about the environment where the ./gcluster command was ran.
This includes the following:
Operating system: [such as macOS, ubuntu]
Shell (To find this, run ps -p $$ ): [bash, zsh, …]
Output of go version :
Output of gcloud --version :
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
