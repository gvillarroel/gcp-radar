---
title: "Advanced API Security for multiple Apigee organizations and gateways \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway
  title: "Advanced API Security for multiple Apigee organizations and gateways \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Advanced API Security for multiple Apigee organizations and gateways
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways. Leveraging API hub's plugins and curation capabilities, Advanced API Security offers an unified view that lets you monitor risks, compare configurations, and ensure consistent security standards across your entire API ecosystem.
Key capabilities
Advanced API Security offers the following capabilities when you enable it for your API hub instance:
Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
To learn about viewing security scores across multiple Apigee organizations, environments, and gateways, see View security scores across multiple Apigee organizations and gateways .
To learn about viewing security scores for a specific API across its deployments, see View security scores for APIs .
Security profiles: create and manage custom security profiles based on your organization's needs, and apply them consistently across your multiple Apigee environments, organizations, and gateways.
To learn about creating and managing security profiles for multiple Apigee organizations and gateways, see Manage security profiles for multiple Apigee organizations and gateways .
Monitoring conditions and alerts: track and analyze the security posture of your API deployments over time, using Cloud Monitoring . Add alerts to notify you when the security posture changes.
To learn about managing security monitoring conditions and alerts, see Manage monitoring conditions for multiple Apigee organizations and gateways .
Enable Advanced API Security for your API hub instance
To enable and configure Advanced API Security for your API hub instance, see Configure Advanced API Security for multiple Apigee organizations and gateways .
Caution: Pricing for Advanced API Security varies based on your existing Apigee organization license type. We recommend that you use the Advanced API Security advisor tool to understand your costs before enabling the add-on in your API hub instance.
IAM roles and permissions
To use Advanced API Security, you must have the following IAM roles and permissions:
IAM roles
Permissions
Description
API Security Admin ( roles/apigee.securityAdmin )
apigee.securityProfilesV2.create
apigee.securityProfilesV2.delete
apigee.securityProfilesV2.update
apigee.securityProfilesV2.get
apigee.securityProfilesV2.list
Provides permissions to create, update, delete, get, and list security profiles.
apigee.securityAssessmentResult.compute
Provides permissions to compute security assessment results.
apigee.securityMonitoringConditions.create
apigee.securityMonitoringConditions.delete
apigee.securityMonitoringConditions.get
apigee.securityMonitoringConditions.list
apigee.securityMonitoringConditions.update
Provides permissions to create, delete, get, list, and update security monitoring
conditions.
API Security Viewer ( roles/apigee.securityViewer )
apigee.securityProfilesV2.get
apigee.securityProfilesV2.list
Provides permissions to get, list, and view security profiles.
apigee.securityAssessmentResult.compute
Provides permissions to compute security assessment results.
apigee.securityMonitoringConditions.get
apigee.securityMonitoringConditions.list
Provides permissions to get and list security monitoring conditions.
API hub Admin ( roles/apihub.admin ) or API hub Add-on Admin ( roles/apihub.addonsAdmin )
apihub.addons.get
apihub.addons.list
apihub.addons.manage
Provides permissions to manage add-ons in API hub.
apihub.apis.get
apihub.deployments.list
Provides permissions to get and list APIs and deployments in API hub.
API hub Viewer ( roles/apihub.viewer )
apihub.addons.get
apihub.addons.list
Provides permissions to get and list add-ons in API hub.
apihub.apis.get
apihub.deployments.list
Provides permissions to get and list APIs and deployments in API hub.
To configure and use security monitoring conditions and alerts in Cloud Monitoring:
Action(s)
Required roles or steps
List and view security monitoring condition metrics
Monitoring Admin ( roles/monitoring.admin )
Monitoring Editor ( roles/monitoring.editor )
Create, update, or delete monitoring alerts
See Required roles (for security alerts)
View monitoring alerts
See
Incidents for metric-based alerting policies: Before you begin
For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .
What's next
To enable Advanced API Security for your API hub instance, see Configure Advanced API Security for multiple Apigee organizations and gateways .
To view security scores across multiple Apigee organizations and gateways, see View security scores across multiple Apigee organizations and gateways .
To view security scores for a given API across its deployments in gateways, see View security scores for APIs .
To manage security profiles across multiple Apigee organizations and gateways, see Manage security profiles for multiple Apigee organizations and gateways .
To learn enabling Apigee Advanced API Security from your Apigee X/hybrid instance, see Apigee Advanced API Security .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
