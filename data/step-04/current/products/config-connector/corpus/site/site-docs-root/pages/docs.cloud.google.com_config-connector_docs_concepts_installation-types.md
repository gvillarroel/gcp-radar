---
title: "Choosing an installation type \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/concepts/installation-types
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/concepts/installation-types
  title: "Choosing an installation type \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Choosing an installation type
The page provides you with an overview of the different installations options
you can use when installing Config Connector.
You can install Config Connector in one of three ways:
Config Controller :
Config Controller is a hosted service that includes Config Connector.
The Config Connector version in Config Controller is managed by Google
and automatically updated regularly as versions qualify.
Config Controller is a centralized and designated control plane which
provides a more secure way to manage Google Cloud resources. For more
information, see Quickstart: Manage resources with Config Controller
or
Set up Config Controller .
Manual installation :
Manually installing with the
Kubernetes operator
gives you the most flexibility. You can install Config Connector in
namespaced mode (recommended for most use cases) or cluster mode .
Manual installation lets you control the exact version of Config Connector
you install and when you upgrade.
GKE Config Connector add-on :
The Config Connector add-on lets you install Config Connector during cluster creation.
The Config Connector add-on is available on only GKE Standard
clusters, and not
Autopilot .
The version of Config Connector installed through the Config Connector add-on is
often behind by up to 12 months or more. For more information, see
Config Connector add-on upgrades .
If you want to reduce the operational cost of managing a GKE
Standard cluster, consider using
Config Controller .
There are many factors to consider when selecting an installation method. The following table outlines some high-level considerations:
Installation methods
Advantages
Disadvantages
Config Controller
• No installation required.
• Automatic version upgrades.
• Includes Config Sync .
• Managed and supported by Google Cloud.
• Restriction on custom workloads.
Manual installation
• Allows more customization, such as installing in either namespaced mode (recommended) or cluster mode.
• Flexible version update schedule.
• Can run with any custom workload in the same cluster.
• Operational cost.
GKE Config Connector add-on
• Significant lag behind the latest Config Connector version.
Authentication
If you want to install Config Connector on GKE clusters, use
Workload Identity Federation for GKE .
Workload Identity Federation for GKE lets you configure a Kubernetes ServiceAccount
to impersonate Identity and Access Management (IAM) service accounts to access Google Cloud
services. Config Connector uses that Kubernetes ServiceAccount
within your cluster to create new resources. Config Connector can only create
resources with the roles that you grant the IAM service account.
If you want to install Config Connector on other
deployment options , such as on-premises or
multi-cloud options, use Cloud Identity to
create an account and then use IAM to
create a service account key and import the key's credentials as a Secret to your clusters .
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
Managing resources with service accounts
When installing Config Connector manually, you can choose between a single,
cluster-wide service account ( cluster mode ) or multiple service accounts,
one for each namespace ( namespaced mode ). Namespaced mode is the recommended
approach for most use cases, as it provides better permission isolation. For
more information about using IAM service accounts with
Config Connector, see Access control with
IAM .
What's next
Learn how to manage Google Cloud resources with Config Controller .
Learn how to manually install Config Connector .
Learn how to install Config Connector as a GKE add-on .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
