---
title: "Deployment Manager deprecation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/deprecations
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/reference/latest
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/deprecations
  title: "Deployment Manager deprecation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Deployment Manager deprecation
Stay organized with collections
Save and categorize content based on your preferences.
Support for Google Cloud Deployment Manager will be discontinued on March 31, 2026 .
After this date, you won't be able to use the
Deployment Manager service. All related APIs and functions will
no longer be supported.
Your existing resources created by Deployment Manager will continue to function. You can manage these individual resources using standard Google Cloud tools, but not with Deployment Manager or gcloud deployment-manager commands.
What you need to know
We'll be discontinuing support for Deployment Manager on March 31, 2026.
Over the past years, we've focused our efforts on modernizing the Google Cloud
deployment experience through
Infrastructure Manager (Infra Manager) .
Note: If you're an App Engine Flex customer and don't use
Deployment Manager, this change won't affect you.
What you need to do
If you currently use Deployment Manager, migrate to
Infra Manager or an alternative deployment technology before
March 31, 2026 to ensure your services continue without interruption.
Complete the following required actions before March 31, 2026:
Review your use cases and applications that rely on Deployment Manager.
Decide if Infra Manager meets your needs or if another tool is more
suitable.
Migrate your deployments to your selected platform .
How does Deployment Manager relate to Infrastructure Manager?
Google Cloud offers two distinct services for deploying and managing
infrastructure: Deployment Manager (DM) and
Infra Manager. While both aim to
automate this process, they differ in their approach and underlying
technologies.
Deployment Manager uses YAML-based configuration files and
Jinja or Python templates to define infrastructure declaratively.
Infra Manager leverages Terraform to create
infrastructure deployments using infrastructure as code (IaC). You define
your infrastructure in Terraform configuration files, which
Infra Manager deploys and manages on Google Cloud.
Infra Manager provides a managed environment for executing
Terraform, simplifying infrastructure management on Google Cloud.
Feature Comparison
There are key differences in the features and functionalities of
Deployment Manager and Infra Manager.
Configuration and templating
Feature
Deployment Manager
Infra Manager
Considerations
Configuration language
YAML with Jinja/Python templates
Terraform HCL
Learn Terraform's HCL language and convert existing DM configurations.
Template management
Supports reusable templates and composite types (deprecated).
Leverages Terraform modules.
Adapt to Terraform's module system for managing reusable infrastructure components.
Source code management
Supports various options for storing configurations.
Supports public and private Git repositories and Cloud Storage buckets, but lacks direct support for private Git repositories.
If you rely on private Git repositories for managing your DM configurations,
you may face challenges when migrating your configurations to Infra Manager.
State management
Feature
Deployment Manager
Infra Manager
Considerations
State management
Manages deployment state internally.
Stores state files in Cloud Storage.
Familiarize yourself with Terraform's state management (which involves managing state files and potential state locking issues). Infra Manager handles state management automatically.
Deployment updates and rollbacks
Feature
Deployment Manager
Infra Manager
Considerations
Deployment update mechanism
Supports in-place updates and rolling updates.
Infra Manager manages updates through its CreateDeployment and UpdateDeployment methods.
Understand Terraform's update mechanisms that may differ from Deployment Manager's update strategies.
Rollback capabilities
Offers rollback to previous deployments.
Roll forward by deploying previous Terraform configurations.
Infra Manager
provides access to the Terraform state file for each deployment
revision, but rolling back to a previous version is a manual process.
Preview functionality
Allows previewing changes before deployment.
Use CreatePreview to create and review a Terraform plan.
Adapt to Terraform's workflow for previewing changes using the terraform plan .
Integration with Google Cloud services
Feature
Deployment Manager
Infra Manager
Considerations
Integration with Google Cloud services
Integrates with various Google Cloud services.
Integrates with Google Cloud through Terraform providers.
Terraform providers offer greater Google Cloud service coverage than Deployment Manager, however some Google Cloud-specific features or integrations may not be readily available in Terraform providers.
Access control
Allows integration with Identity and Access Management (IAM) for granular access
control to deployments.
Infra Manager also integrates with IAM
for granular access control to deployments.
Ensure that appropriate access control mechanisms are implemented when
integrating Infra Manager with IAM. The
service account you use to create a deployment needs the necessary
permissions for the each of the resources you want to deploy.
Migrate to Infrastructure Manager using DM Convert
You can migrate your deployment experience to Infra Manager
using the
DM Convert
tool. However, there are some Deployment Manager concepts
that are not supported by Terraform and cannot be exported to Terraform using
DM Convert.
For more information about how DM Convert translates concepts across formats,
see Understanding how DM Convert translates concepts across formats .
Convert your configurations and templates to Infrastructure Manager
To convert your Deployment Manager configurations and templates
into a Terraform configuration:
Convert your Deployment Manager configurations and templates
into a Terraform configuration and state file.
Import your Terraform resources to Infra Manager.
Delete your Deployment Manager deployment
using abandon.
We're here to help
We understand that making these changes may require some planning. Let your
respective Google Cloud representative know if you have any other questions,
or need assistance with your migration plans. We're here to help you achieve a
seamless transition.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
