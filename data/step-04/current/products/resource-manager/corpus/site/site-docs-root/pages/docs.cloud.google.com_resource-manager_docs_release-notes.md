---
title: "Resource Manager release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/release-notes
  title: "Resource Manager release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Resources
Send feedback
Resource Manager release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Resource Manager. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 07, 2026
Feature
You can now create tag keys and tag bindings with dynamic values using the
Google Cloud console. You can also use a new unified API and Google Cloud CLI to
add or update tags on a resource.
For more information, see Create and define a new tag .
February 15, 2026
Deprecated
Control of MCP use with organization policies is deprecated. After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies. For more information about controlling MCP use, see Control MCP use with IAM .
Change
After March 17, 2026, when you enable Resource Manager, the Resource Manager MCP server is automatically enabled.
February 02, 2026
Feature
Access Resource Manager using our remote MCP server
You can use the Resource Manager remote MCP server to search for and identify all
Google Cloud projects you have permission to access, so you have the correct
identifiers before configuring specific resources.
The Resource Manager remote MCP server is in Preview .
November 11, 2025
Change
The list of Organization Policy Service constraints that are enforced when an organization
resource is created has changed. The following Google Cloud security baseline
constraints are enforced for all organizations created on or after May 3, 2024:
constraints/iam.managed.disableServiceAccountKeyCreation
constraints/iam.managed.disableServiceAccountKeyUpload
constraints/iam.automaticIamGrantsForDefaultServiceAccounts
constraints/iam.allowedPolicyMemberDomains
constraints/essentialcontacts.managed.allowedContactDomains
constraints/compute.managed.restrictProtocolForwardingCreationForTypes
constraints/storage.uniformBucketLevelAccess
For more information, see Manage baseline constraints .
September 10, 2025
Feature
Designate project environments with tags : You can now use tags to visually distinguish projects based on their environment—such as production, staging, or development—directly within the Google Cloud console. This new visual indicator helps prevent errors and improves awareness when you're working in sensitive environments. For information, see Designate project environments with tags .
March 26, 2025
Feature
Custom organization policies are now available in Preview for Cloud Resource Manager. For more information, see Manage resources with custom constraints .
February 19, 2025
Feature
Custom organization policies are now generally available for Essential Contacts. For more information, see Creating custom constraints for Essential Contacts .
June 04, 2024
Feature
Cloud Data Fusion supports annotating resources with tags in Preview . For more information, see the Services that support tags .
March 13, 2024
Feature
You can add tags at the time of creating folders and projects. These tags can be added as key-value pairs. For more information, see Add tags during folder creation and Add tags during project creation . This feature is currently in preview.
February 05, 2024
Feature
With the secure-by-default organization policy enforcements, insecure
posture is addressed with a bundle of organization policies that are enforced
at the time of creation of an organization resource.
Enforcement of these policies will apply to organizations created early in 2024, as the feature is gradually rolled out.
September 22, 2023
Feature
Tag key and value short names can now have a maximum length of 256 characters. For more information, see Tags overview .
April 17, 2023
Feature
You can now create tags that are children of projects as well as organization resources. For more information, see Creating and managing tags .
February 16, 2023
Feature
The organization restrictions feature has entered General Availability. The organization restrictions feature helps security administrators to prevent data exfiltration due to phishing or insider attacks. The organization restrictions feature restricts access only to resources in authorized Google Cloud organizations. For more information, see Introduction to organization restrictions .
November 01, 2022
Feature
The feature for listing all tags that are attached to or inherited by your resources has entered general availability. For more information, see Creating and managing tags .
Feature
You can now use the Cloud Console UI to create and manage tags. For more information, see Creating and managing tags .
October 13, 2022
Feature
The organization restrictions feature has launched into public preview. The organization restrictions feature enables you to prevent data exfiltration through phishing or insider attacks. For managed devices in an organization, the organization restrictions feature restricts access only to resources in authorized Google Cloud organizations. For more information, see Introduction to organization restrictions .
June 17, 2022
Feature
A feature for protecting tag values from being deleted has launched into general availability. If a tag value has a tag hold, it cannot be deleted by users unless the tag hold is first deleted. For more information about tag holds, see Protecting tag values with tag holds .
May 06, 2022
Feature
The feature for listing the effectively evaluated tags on a resource has launched into public preview. For more information, see Listing effective tags on a resource .
June 08, 2021
Feature
The Resource Settings API has entered general availability. You can use Resource Settings to centrally configure settings for your Google Cloud projects, folders, and organization. For more information, see Resource Settings overview .
May 26, 2021
Feature
The process for migrating a project from one organization to another has released into general availability. To make it easier to see the impact a project migration will have on your organization, you can use the Cloud Asset Inventory Analyze Move API to get a detailed report before performing a move. For more information, see Migrating projects and Analyze project move .
April 19, 2021
Feature
The Resource Manager v3 API has been released into general availability. For more information, see the API reference documentation .
March 24, 2021
Feature
The Resource Manager v3 API has been released into public preview. For more information, see the API reference documentation .
March 16, 2021
Feature
Tags have been launched into general availability. For more information, see the Tags overview .
February 26, 2021
Feature
Project migration between organizations is now a self-serve process in public preview. For more information, see Migrating projects .
February 09, 2021
Issue
If you run one of the gcloud tool's add-iam-policy-binding commands, and the IAM policy contains conditional role bindings for that role, the gcloud tool prompts you to choose one of the condition expressions that exists in the policy. If you choose a condition expression that contains a comma, the command fails.
To work around this issue, use the --condition flag to specify a condition expression on the command line.
Feature
Tags have released into public preview. Tags provide a way to conditionally allow or deny policies based on whether a resource has a specific tag. You can use tags and conditional enforcement of policies for fine-grained control across your resource hierarchy. For more information, see the Tags overview .
October 12, 2020
Feature
You can now customize who receives notifications from Google Cloud with Essential Contacts. This feature is available in preview. For more information, see Managing contacts for notifications .
August 02, 2018
Feature
Organization setup wizard beta release
The organization setup wizard UI makes it easier for you to delegate setup and management of Organization resources to other users, assign fundamental IAM roles to users, and import existing projects and billing accounts to your organization.
March 12, 2018
Feature
Audit Logging for ContactInfo Beta Release
Audit Logging support has been expanded to support the European Union General Data Protection Regulation (GDPR). The UpdateContactInfo and GetContactInfo operations have been added to the list of audited operations.
July 24, 2017
Feature
Folders General Availability
Cloud folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. You can use folders to group projects under an organization in a hierarchy. For example, you organization might contain multiple departments, each with its own set of Cloud Platform resources. Folders allows you to group these resources on a per-department basis. Folders are used to group resources that share common IAM policies.
January 01, 2017
Feature
Organization Resource Automatic Provisioning
With this launch we made the Organization resource automatically available to all Google Workspace and Cloud Identity customers. Google Workspace customers just need to create a project using their domain email account and the Organization resource will be automatically provisioned for them.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-15 UTC."],[],[]]
