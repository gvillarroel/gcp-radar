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
February 15, 2026
Deprecated
Control of MCP use with organization policies is deprecated. After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies. For more information about controlling MCP use, see Control MCP use with IAM .
Change
After March 17, 2026, when you enable Resource Manager, the Resource Manager MCP server is automatically enabled.
February 09, 2026
Feature
Organization Policy Service custom constraints are available for some
Network Connectivity resources. For more information, see
Manage VPC resources by using custom organization policies .
February 02, 2026
Feature
Organization Policy Service custom constraints are available for some
Artifact Analysis resources. For more information, see
Use custom organization policies .
Organization Policy Service custom constraints are available for some Storage Transfer Service
resources. For more information, see
Custom organization policy constraints .
Feature
Access Resource Manager using our remote MCP server
You can use the Resource Manager remote MCP server to search for and identify all
Google Cloud projects you have permission to access, so you have the correct
identifiers before configuring specific resources.
The Resource Manager remote MCP server is in Preview .
November 13, 2025
Feature
You can use custom constraints with Organization Policy to provide more
granular control over specific fields for some Dataform resources. For more
information, see
Create custom organization policy constraints .
This feature is
generally available
(GA).
November 11, 2025
Change
The list of Organization Policy Service constraints that are enforced when an organization
resource is created has changed. The following Google Cloud security baseline
constraints are enforced for all organizations created on or after May 3, 2024:
* constraints/iam.managed.disableServiceAccountKeyCreation
* constraints/iam.managed.disableServiceAccountKeyUpload
* constraints/iam.automaticIamGrantsForDefaultServiceAccounts
* constraints/iam.allowedPolicyMemberDomains
* constraints/essentialcontacts.managed.allowedContactDomains
* constraints/compute.managed.restrictProtocolForwardingCreationForTypes
* constraints/storage.uniformBucketLevelAccess
For more information, see Google Cloud security baseline constraints .
November 05, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular
control over specific fields for some BigQuery resources. For more information,
see Manage BigQuery resources using custom constraints .
This feature is generally available (GA).
October 30, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Datastream resources. For more information, see Create custom organization policy constraints . This feature is generally available (GA).
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for managed workload identities. For more information, see Use custom organization policies for Managed workload identities . This feature is generally available (GA).
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some BigQuery sharing resources. For more information, see Manage Sharing data exchanges and listings using custom constraints . This feature is in preview .
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some CA Service resources. For more information, see Manage CA Service resources using custom constraints . This feature is generally available (GA).
October 14, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Datastream resources. For more information, see Create custom organization policy constraints . This feature is generally available (GA).
October 10, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Application Integration resources. For more information, see Manage Application Integration resources using custom constraints . This feature is available in Preview .
October 06, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Dataform resources. For more information, see Create custom organization policy constraints . This feature is generally available (GA).
October 03, 2025
Feature
Select Workload Identity Federation resources let you use custom constraints to define your own restrictions on Google Cloud services. To learn which Workload Identity Federation resources support custom constraints and to view sample use cases, see Use custom organization policies for Workload Identity Federation .
This feature is available in General Availability .
September 18, 2025
Feature
Select Cloud Load Balancing resources let you use custom constraints to define your own restrictions on Google Cloud services. To learn which load balancing resources support custom constraints and to view sample use cases, see Manage Cloud Load Balancing resources using custom constraints .
This feature is available in General Availability .
September 11, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Live Stream API resources. For more information, see Use custom constraints .
September 10, 2025
Feature
Designate project environments with tags : You can now use tags to visually distinguish projects based on their environment—such as production, staging, or development—directly within the Google Cloud console. This new visual indicator helps prevent errors and improves awareness when you're working in sensitive environments. For information, see Designate project environments with tags .
September 09, 2025
Feature
Preview: Eight new organization policy constraints are available to help you
enforce security best practices for Compute Engine virtual machine (VM)
instances.
These managed constraints
simplify governance for common security scenarios and integrate with safe
rollout tools like
dry-run
and
simulation ,
letting you test their impact before enforcement.
The new constraints are as follows:
compute.managed.disableNestedVirtualization
compute.managed.disableSerialPortAccess
compute.managed.disableSerialPortLogging
compute.managed.disallowGlobalDns
compute.managed.requireOsConfig
compute.managed.requireOsLogin
compute.managed.vmCanIpForward
compute.managed.vmExternalIpAccess
These constraints can evaluate metadata values at the VM instance, project, or
zonal level . For more information about these managed constraints, see Managed
Constraints in the Resource Manager documentation.
September 08, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Cloud Deploy resources. For more information, see Use custom organization policies .
August 28, 2025
Fixed
Certain Organization Policy managed constraints that were released on August 21, 2025 were not functioning as intended. The Organization Policy Service evaluated these constraints as if the effectiveInstanceMetadata field of the resources that they were enforced on was empty, causing them to always evaluate to either allow or deny access to the resource.
The following managed constraints were evaluated to always allow creation of resources where they were enforced:
constraints/compute.managed.disableGuestAttributesAccess
constraints/compute.managed.disableSerialPortAccess
constraints/compute.managed.disableSerialPortLogging
The following managed constraints were evaluated to always block creation of resources where they were enforced:
constraints/compute.managed.disallowGlobalDns
constraints/compute.managed.requireOsConfig
constraints/compute.managed.requireOsLogin
This issue has been corrected, and these constraints now properly evaluate the effectiveInstanceMetadata field to determine whether resource creation should be allowed or blocked.
August 18, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Backup for GKE resources. For more information, see Manage Backup for GKE resources using custom constraints . This feature is generally available .
Feature
You can now use organization policy conditions to match a tag key. This lets you enable or
disable enforcement against all resources with that tag key, regardless of what
tag value is attached. For more information, see Setting an organization policy with tags .
July 25, 2025
Issue
Organization policies in dry-run mode are reporting inconsistent results for the following managed constraints :
constraints/compute.managed.restrictProtocolForwardingCreationForTypes
constraints/iam.managed.allowedPolicyMembers
constraints/essentialcontacts.managed.allowedContactDomains
constraints/compute.managed.blockPreviewFeatures
If a resource inherited an organization policy in dry-run mode that uses any of these managed constraints, that dry-run policy was evaluated without using the parameters specified in the live policy. Normally, an organization policy in dry-run mode that's inherited on a resource is overridden by the live organization policy set directly on that same resource. Not evaluating the live organization policy parameters in the inherited organization policy in dry-run mode led to inconsistent results.
Our engineering team is working to resolve this issue.
July 01, 2025
Feature
Policy Simulator for Organization Policy is now generally available (GA) .
June 13, 2025
Feature
Custom organization policies are now generally available for some API Keys. For more information, see Creating and managing custom constraints .
June 10, 2025
Change
You can use custom constraints with Organization Policy to provide more granular control over specific fields for indexes and index endpoints in Vector Search. For more information, see Create custom constraints for Vector Search .
May 15, 2025
Feature
Support for creating custom organization policy constraints in Eventarc Advanced and for creating custom organization policy constraints in Eventarc Standard is generally available for some Eventarc resources.
May 12, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Cloud Quotas resources. For more information, see Use custom organization policies . This feature is available in Preview .
May 06, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Dataplex and data lineage resources. For more information, see Manage Dataplex resources using custom constraints and Manage data lineage resources using custom constraints . This feature is generally available ( GA ).
April 17, 2025
Feature
Custom organization policies are now generally available for Filestore. For more information, see Creating custom constraints for Filestore .
April 08, 2025
Feature
Custom organization policies are now generally available for Identity-Aware Proxy. For more information, see Use custom organization policies .
March 26, 2025
Feature
Custom organization policies are now available in Preview for Cloud Resource Manager. For more information, see Manage resources with custom constraints .
March 21, 2025
Feature
Custom organization policies are now generally available for Access Context Manager and VPC Service Controls. For more information, see Manage Access Context Manager resources with custom constraints and Create custom constraints for VPC Service Controls .
March 18, 2025
Feature
Custom organization policies are now generally available for Cloud Service Mesh. For more information, see Set up custom constraints .
March 17, 2025
Feature
You can enforce mandatory tags on resources using custom organization policies. When a user attempts to create a resource, the system checks for the presence of the mandatory tags. If any mandatory tag is missing or does not have a value, the resource creation is blocked. By defining mandatory tags within an organization policy, you can ensure that all newly created resources adhere to your organization's tagging standards. This feature is available in Preview .
For more information, see Enforcing mandatory tags on resources .
March 14, 2025
Feature
Custom organization policies are now generally available for Cloud Composer. For more information, see Create custom organization policy constraints .
February 27, 2025
Feature
Custom organization policies are now generally available for the Video Stitcher API. For more information, see Create custom constraints for the Video Stitcher API .
Feature
Custom organization policies are now generally available for Service Management. For more information, see Manage Service Management resources with custom constraints .
February 20, 2025
Feature
Custom organization policies are now generally available for Cloud Healthcare API. For more information, see Use custom organization policies .
February 19, 2025
Feature
Custom organization policies are now generally available for Essential Contacts. For more information, see Creating custom constraints for Essential Contacts .
February 14, 2025
Feature
Custom organization policies are now generally available for Cloud Logging. For more information, see Use custom organization policies .
February 13, 2025
Feature
Custom organization policies are now generally available for security posture resources. For more information, see Add a custom organization policy .
February 11, 2025
Feature
Custom organization policies are now generally available for Cloud DNS. For more information, see Create custom organization policy constraints .
Feature
Custom organization policies are now generally available for Identity-Aware Proxy. For more information, see Use custom organization policies .
Feature
Custom organization policies are now generally available for Spanner. For more information, see Add a custom organization policy .
Feature
Custom organization policies are now generally available for Dataproc Serverless. For more information, see Use custom constraints .
Feature
Custom organization policies are now generally available for Developer Connect. For more information, see Create custom organization policies .
February 06, 2025
Feature
You can now create custom organization policies for Workflows. For more information, see Create custom organization policy constraints for Workflows .
February 05, 2025
Feature
You can now create custom organization policies for Cloud Monitoring alerting policies, notification channels, and snoozes. For more information, see Use custom organization policies .
January 21, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Cloud Data Fusion resources. For more information, see Create custom organization policy constraints .
January 15, 2025
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some reCAPTCHA resources. For more information, see Use custom organization policies for reCAPTCHA keys and firewall policies .
December 19, 2024
Feature
The Organization Policy recommender generates insights and organization policy recommendations to restrict the creation and upload of service account keys. This feature is available in Preview .
Feature
You can use the iam.managed.allowedPolicyMembers managed organization policy constraint to implement domain restricted sharing. For more information, see Domain restricted sharing .
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Secure Source Manager resources. For more information, see Manage resources with custom constraints .
December 17, 2024
Feature
You can use Organization Policy Service custom constraints to manage specific operations on Bigtable resources. For more information, see Use custom organization policies . This feature is generally available (GA) .
December 16, 2024
Feature
Cloud Load Balancing resources now let you use custom constraints to define your own restrictions on Google Cloud services. To learn about which load balancing resources support custom constraints, and some sample use cases, see Manage Cloud Load Balancing resources using custom constraints .
This feature is available in General Availability .
December 09, 2024
Change
Using IAM attributes in custom organization policies is generally available. For more information, see Use custom organization policies .
Feature
You can use the iam.managed.preventPrivilegedBasicRolesForDefaultServiceAccounts managed organization policy constraint to prevent default service accounts from being granted the Editor ( roles/editor ) or Owner ( roles/owner ) roles. For more information, see Prevent the Owner and Editor role from being granted to default service accounts .
December 06, 2024
Feature
You can now manage Firestore resources using Organization Policy Service custom constraints .
October 29, 2024
Feature
Organization Policy managed constraints are a set of constraints built on the custom organization policy platform. You can use managed constraints in place of certain predefined constraints to perform dry-run tests and simulate changes to your policies using Policy Intelligence tools . This feature is now in General Availability .
June 04, 2024
Feature
Cloud Data Fusion supports annotating resources with tags in Preview . For more information, see the Services that support tags .
March 13, 2024
Feature
You can add tags at the time of creating folders and projects. These tags can be added as key-value pairs. For more information, see Add tags during folder creation and Add tags during project creation . This feature is currently in preview.
February 12, 2024
Feature
Policy Analyzer for Organization Policy is now in General Availability .
February 06, 2024
Feature
You can use the Google Cloud console with Policy Simulator for Organization Policy to test organization policies . This feature is available in Preview .
February 05, 2024
Feature
With the secure-by-default organization policy enforcements, insecure
posture is addressed with a bundle of organization policies that are enforced
at the time of creation of an organization resource.
Enforcement of these policies will apply to organizations created early in 2024, as the feature is gradually rolled out.
December 20, 2023
Feature
The dry-run feature for Organization Policy is now in General Availability .
December 12, 2023
Feature
Organization Policy custom constraints allow you to configure customizable organization policies to prevent the misconfiguration of resources and help you meet your security and compliance goals. This feature is now in General Availability .
November 07, 2023
Feature
You can use the Google Cloud console to analyze organization policies . This feature is available in Preview.
September 22, 2023
Feature
Tag key and value short names can now have a maximum length of 256 characters. For more information, see Tags overview .
July 27, 2023
Feature
Policy Simulator for Organization Policy allows you to test organization policies before they are enforced. This feature is available in Preview .
Feature
New Organization Policy constraints have launched into general availability to define service attachment controls for Private Service Connect consumers. For more information, see Manage security for Private Service Connect consumers .
July 26, 2023
Feature
Two automatically configured Organization Policy constraints have launched into general availability to provide advanced regulatory control for Assured Workloads. For more information, see Organization policy constraints .
Feature
New Organization Policy constraints have launched into general availability to define access and creation controls for Vertex AI Workbench notebooks and instances. For more information, see Organization policy constraints .
June 16, 2023
Feature
You can now monitor how custom constraints would impact your organization's workflows by setting custom constraints in dry-run mode .
April 18, 2023
Feature
You can now create dry-run organization policies using the Google Cloud console.
April 17, 2023
Feature
You can now create tags that are children of projects as well as organization resources. For more information, see Creating and managing tags .
March 08, 2023
Feature
You can now create dry-run organization policies to monitor how policy changes would impact your workflows before they are enforced.
February 16, 2023
Feature
The organization restrictions feature has entered General Availability. The organization restrictions feature helps security administrators to prevent data exfiltration due to phishing or insider attacks. The organization restrictions feature restricts access only to resources in authorized Google Cloud organizations. For more information, see Introduction to organization restrictions .
November 18, 2022
Feature
Policy Analyzer now offers organization policy analysis . Policy Analyzer helps you get more information about the resources affected by an organization policy constraint. This feature is available in Preview.
November 01, 2022
Feature
The feature for listing all tags that are attached to or inherited by your resources has entered general availability. For more information, see Creating and managing tags .
Feature
You can now use the Cloud Console UI to create and manage tags. For more information, see Creating and managing tags .
October 13, 2022
Feature
The organization restrictions feature has launched into public preview. The organization restrictions feature enables you to prevent data exfiltration through phishing or insider attacks. For managed devices in an organization, the organization restrictions feature restricts access only to resources in authorized Google Cloud organizations. For more information, see Introduction to organization restrictions .
August 24, 2022
Feature
Organization Policy custom constraints has launched into public preview. Custom constraints can allow or restrict access to API calls in the same way that predefined constraints do, but allow administrators to configure conditions based on request parameters and other metadata. For more information, see Creating and managing custom constraints .
August 02, 2022
Feature
Two Organization Policy constraints have launched into general availability to help ensure CMEK usage across an organization. For more information, see CMEK organization policies .
June 17, 2022
Feature
A feature for protecting tag values from being deleted has launched into general availability. If a tag value has a tag hold, it cannot be deleted by users unless the tag hold is first deleted. For more information about tag holds, see Protecting tag values with tag holds .
June 14, 2022
Feature
The following organization policy constraints to restrict resource creation of global security configuration have launched into general availability:
Disable Creation of Cloud Armor Security Policies
Disable Creation of global self-managed SSL Certificates
Disable Global Load Balancing
Disable Enabling Identity-Aware Proxy (IAP) on global resources
Disable Enabling Identity-Aware Proxy (IAP) on regional resources
May 06, 2022
Feature
The feature for listing the effectively evaluated tags on a resource has launched into public preview. For more information, see Listing effective tags on a resource .
May 04, 2022
Feature
The resource usage restriction Organization Policy constraint has launched into general availability.
September 20, 2021
Feature
The Organization Policy Service v2 API reference documentation is now available. For more information, see the API reference documentation .
August 09, 2021
Feature
You can now use the Cloud Console UI to manage your organization policies with tags. For more information, see Setting an organization policy with tags .
July 27, 2021
Feature
The Organization Policy constraints Allowed ingress settings and Allowed VPC egress settings for Cloud Run have launched into general availability.
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
Feature
The Organization Policy Service v2 API has launched into general availability.
You can now apply conditions for the enforcement of organization policies. For more information, see Setting an organization policy with tags .
For more details about the new version of the API, see the v2 tabs on the Using constraints page.
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
September 24, 2020
Feature
The Organization policy constraints for Direct Path disablement have launched into beta.
August 26, 2020
Feature
The Organization policy constraint for Cloud NAT has launched into beta.
August 19, 2020
Feature
The Organization Policies for restricting Cloud Interconnect usage have launched into beta.
The Organization Policy for restricting protocol forwarding creation has launched into general availability.
The Organization policy for restricting Cloud Load Balancing creation has launched into general availability.
August 14, 2020
Feature
The Organization Policy for extending the maximum lifetime for OAuth 2.0 access tokens that you create for a service account has been launched into general availability.
July 20, 2020
Feature
The Organization Policy for enabling detailed Cloud Audit Logs has launched into general availability.
July 17, 2020
Feature
The Organization Policy for restricting protocol forwarding creation has launched into public beta.
July 01, 2020
Feature
The Organization Policy for restricting automatic IAM permission grants to new service accounts has launched into general availability.
June 15, 2020
Feature
The Organization Policy for restricting peer IP addresses through a Cloud VPN tunnel has been launched into general availability.
April 10, 2020
Feature
The Organization Policy Service resource locations constraint has launched for general availability. This constraint allows you to define the location where your resources are created, providing important data location compliance tools. For more information, see the Restricting Resource Locations .
January 30, 2020
Feature
VPC Service Controls (VPC SC) helps you to set up a secure perimeter to guard against data exfiltration. The VPC SC Organization Policies have been launched into public beta.
January 10, 2020
Feature
The IAM Domain Restriction Organization Policies have been launched into general availability.
September 12, 2019
Feature
The Organization Policies for service account management have been launched into general availability.
June 26, 2019
Feature
Resource location restriction constraint beta release
The Organization Policy Service resource locations constraint allows you to define the location where your resources are created. For more information, see the quickstart or the how-to guide .
October 11, 2018
Feature
Organization policy administrative UI beta release
The Organization Policy Service administrative UI allows you to create and manage organization policies in the Google Cloud Platform Console.
August 02, 2018
Feature
Organization setup wizard beta release
The organization setup wizard UI makes it easier for you to delegate setup and management of Organization resources to other users, assign fundamental IAM roles to users, and import existing projects and billing accounts to your organization.
July 12, 2018
Feature
Service account restriction organization policy constraint beta release
The service account restriction constraint can be used to limit the usage of Identity and Access Management service accounts.
July 09, 2018
Feature
Domain restriction organization policy constraint beta release
The domain restriction constraint can be used to restrict the set of identities that can be used in Identity and Access Management policies.
March 12, 2018
Feature
Audit Logging for ContactInfo Beta Release
Audit Logging support has been expanded to support the European Union General Data Protection Regulation (GDPR). The UpdateContactInfo and GetContactInfo operations have been added to the list of audited operations.
July 27, 2017
Feature
Organization Policy General Availability
The Organization Policy service gives you central, programmatic control over your Organization's Cloud resources. It provides a simple mechanism for you to restrict allowed configurations across your entire Cloud Resource hierarchy.
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
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
