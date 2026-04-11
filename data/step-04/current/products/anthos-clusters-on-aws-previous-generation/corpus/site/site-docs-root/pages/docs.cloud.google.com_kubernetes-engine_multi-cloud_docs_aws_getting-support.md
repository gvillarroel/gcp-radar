---
title: "Get support \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/getting-support
  title: "Get support \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Resources
Send feedback
Get support
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to get support for GKE on AWS.
Before contacting support
Before contacting support, you can try and resolve issues yourself. For tips on
resolving common problems, see
Troubleshoot common issues .
Get a Google support package
Google Cloud offers different support packages to meet different
needs, such as 24/7 coverage, phone support, and access to a technical support
manager. For more information, see Cloud Customer Care .
File bugs or feature requests
You can submit a product or documentation issue by using one of the following
procedures:
GKE on AWS issues and feature requests : If you experience
an issue with the product that you can't resolve, or you'd like to make
a feature request, open a support case. The support team can then open a bug
or feature request if required.
Documentation issues : From the GKE on AWS documentation,
click Send feedback > Documentation feedback . This
button opens a feedback form. The comments that you submit are reviewed by the
GKE on AWS documentation team.
Billing questions
Use the following resources to get help with billing questions:
To learn more about billing, read the
Google Cloud billing documentation .
Resolve billing concerns by using the
billing concerns troubleshooter .
Request help with billing questions by using the
billing support form .
Version Support Policy
Google supports each GKE on AWS minor version for the later of:
12 months after the initial release of the minor version.
The release of the third subsequent minor version.
For the list of the Kubernetes versions that GKE on AWS supports,
see
Kubernetes version notes .
Shared responsibility model
Running a business-critical production application on GKE on AWS
requires multiple parties to carry different responsponsibilities.
Although they
aren't an exhaustive list, the following sections list the roles and
responsibilities of different parties.
Google's responsibilities
Maintain and distribute the GKE on AWS software package
including Kubernetes, base images, the AWS integration features,
the Ingress controller, the Connect agent, and the
anthos-gke command line tool.
Continually scan components with the
Artifact Analysis API
and patch known vulnerabilities.
Maintain and distribute the management service, control plane, and node pool
machine images, including regular patching and security fixes.
Notify users of available upgrades for GKE on AWS, and produce
upgrade instructions for the previous version. GKE on AWS supports
sequential upgrades only (1.2 → 1.3 → 1.4 only and not 1.2 → 1.4).
Provide Google Cloud integrations for Connect and Google Cloud Observability.
Troubleshoot, provide workarounds, and correct the root cause of any
issues related to Google-provided components.
Customer's responsibilities
Provide overall system administration for GKE on AWS clusters. For
example, configuring them to work within the corporate VPC environment.
Maintain your workloads, including your application code, build files,
container images, data, RBAC/IAM allow policy, and containers
and pods that you are running.
Operate and maintain the AWS environment, including networking configuration,
and connectivity to Google Cloud.
Maintain support contracts with AWS.
Upgrade GKE on AWS to a
supported version on a regular basis. For the list of the Kubernetes
versions that GKE on AWS supports, see
Kubernetes version notes .
Monitor clusters and applications and respond to any incidents.
Ensure Logging and Monitoring agents are
deployed to clusters. Without logs, support is available on a best-effort
basis .
Provide Google with environmental details (for example, AWS VPC configuration)
when requested for troubleshooting purposes.
What's next
Review the
compatibility between GKE components and cluster product families .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
