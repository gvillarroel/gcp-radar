---
title: "Linting policies \_|\_ Identity and Access Management (IAM) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/iam/docs/linting-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/linting-policies
  title: "Linting policies \_|\_ Identity and Access Management (IAM) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Linting policies | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin Required roles
Understanding linting for allow policies
Linting a condition
Supported validation units
Linting examples No validation issues
ConditionCompileCheck
ConditionComplexityCheck
DateTimeCheck
DateTimeRangeCheck
DrgGetAttributeDefaultValueCheck
EffectiveTimeRangeCheck
HasOnlyListConstCheck
HasOnlyListLengthCheck
ResourceServiceLiteralCheck
ResourceTypeLiteralCheck
RestrictedAttributesCheck
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Linting policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Understanding linting for allow policies
Linting a condition
Supported validation units
Linting examples No validation issues
ConditionCompileCheck
ConditionComplexityCheck
DateTimeCheck
DateTimeRangeCheck
DrgGetAttributeDefaultValueCheck
EffectiveTimeRangeCheck
HasOnlyListConstCheck
HasOnlyListLengthCheck
ResourceServiceLiteralCheck
ResourceTypeLiteralCheck
RestrictedAttributesCheck
Alpha
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This topic describes how to lint , or validate, your Identity and Access Management (IAM)
allow policies.
Before you begin
Enable the IAM API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Read the
IAM Conditions overview to
understand the basics of IAM Conditions.
Note: This alpha release of
lintPolicy only supports
linting operations on the google.iam.v1.Binding.condition field.
Required roles
To lint a resource's allow policy, you need permissions to get the resource, and
to get and set the allow policy for the resource. These permissions have the
following form, where SERVICE is the name of the service
that owns the resource and RESOURCE_TYPE is the name of
the resource type that you want to manage access to:
SERVICE . RESOURCE_TYPE .get
SERVICE . RESOURCE_TYPE .getIamPolicy
SERVICE . RESOURCE_TYPE .setIamPolicy
For example, to lint a project's allow policy, you need the following
permissions:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
To gain the required permissions, ask your administrator to grant you a
predefined or custom role that includes the permissions. For example, your
administrator could grant you the Security Admin role
( roles/iam.securityAdmin ), which includes permissions to get almost all
Google Cloud resources and manage their allow policies.
Understanding linting for allow policies
In the context of allow policies, linting is a method of examining a new or
existing allow policy and checking it for specific issues. These issues include
the following range of possibilities:
Suggestions
Warnings
Information that can help improve the intent of the allow policy, such as
better syntax and semantics
Syntax or semantic errors that cause setIamPolicy operations to fail
If you try to update an allow policy, and you get an error, linting the allow
policy can help you find the cause of the error. You can also use the linter to
help ensure that a conditional role binding has the intended effect.
Linting a condition
Condition expressions can be complex, especially in scenarios that require
multiple clauses and logic operators to appropriately manage access. If a
condition expression contains invalid logic, or if the syntax violates the
restrictions of a condition expression, you cannot add the condition to an allow
policy.
Also, even if a condition expression uses the correct syntax, it might contain
semantic errors, which can prevent your allow policies and role bindings from
working as expected. Common semantic errors include the following:
Use of unrecommended functions
Use of legacy resource types or legacy service names
Ineffective conditions, such as an inapplicable date or time range
When you lint a condition, the linter inspects the condition expression and
reports any syntax errors. It also reports possible semantic errors that could
cause unexpected results.
Before attempting to set a new conditional role binding, you are encouraged to
lint the expression first. This section shows you how to lint a condition
expression using the Google Cloud console, Google Cloud CLI, or the
REST API.
To lint a condition expression:
Console gcloud REST
More
In the Google Cloud console, go to the IAM page.
Go to IAM
Click Select a project , choose a project, and click Open .
From the list of principals, locate the desired principal and click the
edit Edit button.
From the Edit permissions panel, locate the desired role that you want
to lint. Then under IAM condition (optional) , click the name of the
condition.
In the Condition editor , manually add or edit a condition expression.
To validate the CEL syntax, click Run Linter .
If the syntax contains errors, an
error Error icon appears next to the
incorrect line. To see details about each error, hold the pointer over the
icon.
If the condition uses the correct syntax, but the linter finds a possible
issue, a warning Warning icon
appears next to the line with the issue. To see details about each warning,
hold the pointer over the icon.
Make any necessary changes to the condition expression. After you click Run
Linter , the linter runs automatically in the background while you edit the
expression.
You must correct all errors before you save the condition expression. We
strongly encourage you to fix all warnings as well.
When there are no errors or warnings, click Save to apply the condition.
Once the Edit condition panel is closed, click Save again from
the Edit permissions panel to update your allow policy.
Execute the
gcloud alpha iam policies lint-condition
command to lint a given condition expression. To execute this command, you
can either create a text file that contains the condition, or specify
flags for the condition's title, description, and expression.
The following example uses a text file that contains the following condition:
condition.json
{
"title" : "1_less_than_2" ,
"description" : "" ,
"expression" : "1 <"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
The output from the command contains the following:
lintResults :
- debugMessage : |-
ERROR: Parse expression:1:3: mismatched input '<EOF>' expecting {'[', '{', '(', '.', '-', '!', 'true', 'false', 'null', NUM_FLOAT, NUM_INT, NUM_UINT, STRING, BYTES, IDENTIFIER}
| 1 >
| ...^
fieldName : condition.expression
level : CONDITION
locationOffset : 3
severity : ERROR
validationUnitName : LintValidationUnits/ConditionCompileCheck
...
Each of the lint results contain a debugMessage that can be used to help
locate the problem with the condition expression. If the condition failed to
compile, you may see many different validationUnitName types with the
following debugMessage text:
The validation unit is skipped due to absence of a required object: CheckedExpr
Make changes so that the expression compiles, then lint the condition again.
The
iamPolicies.lintPolicy
method lints, or validates, a condition expression in an allow policy.
Before using any of the request data,
make the following replacements:
condition : An
Expr object representing the
condition to lint. For example:
"title" : "1_less_than_2" ,
"description" : "" ,
"expression" : "1 <"
To learn about the format of an Expr object, see the
Expr schema
reference .
HTTP method and URL:
POST https://iam.googleapis.com/v1/iamPolicies:lintPolicy
Request JSON body:
{
"condition": {
condition
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://iam.googleapis.com/v1/iamPolicies:lintPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://iam.googleapis.com/v1/iamPolicies:lintPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The response body contains one or more
LintResult
objects, such as the following:
{
"lint_results": {
"level": "CONDITION",
"validation_unit_name": "LintValidationUnits/ConditionCompileCheck",
"severity": "ERROR",
"field_name": "condition.expression",
"location_offset": "2",
"debug_message": "ERROR: Parse expression:1:2: mismatched input \'<EOF>\' expecting {\'[\', \'{\', \'(\', \'.\', \'-\', \'!\', \'true\', \'false\', \'null\', NUM_FLOAT, NUM_INT, NUM_UINT, STRING, BYTES, IDENTIFIER}\n | 1<\n | ..^"
},
"lint_results": {
"level": "CONDITION",
"validation_unit_name": "LintValidationUnits/ConditionComplexityCheck",
"severity": "NOTICE",
"field_name": "condition.expression",
"debug_message": "The validation unit is skipped due to absence of a required object: CheckedExpr"
}
}
Each of the lint results contain a debug_message that can be used to help
locate the problem with the condition expression. If the condition failed to
compile, you may see many different validation_unit_name types with
the following debugMessage text:
The validation unit is skipped due to absence of a required object: CheckedExpr
Make changes so that the expression compiles, then lint the condition again.
Supported validation units
As described previously, a validation unit is an individual lint type that
evaluates the expression for syntactic issues. The table below summarizes
supported validation units, each with intended linting level, linting result
severity, and a brief description.
Validation unit
Lint level
Severity
Description
ConditionCompileCheck
CONDITION
ERROR
The condition expression contains a compilation error as a result of
invalid CEL syntax.
ConditionComplexityCheck
CONDITION
ERROR
The condition expression contains more than the maximum of 12 logic
operators.
DateTimeCheck
CONDITION
WARNING
The condition expression specifies a timestamp comparison that always
evaluates to either true or false, due to one of these issues:
A timestamp does not use the
correct
format for timestamps .
A timestamp is in the past.
DateTimeRangeCheck
CONDITION
WARNING
Value out of range for the intended advanced timestamp function and
the comparison expression. See the
valid values
for advanced timestamp functions.
DrgGetAttributeDefaultValueCheck
CONDITION
ERROR
The condition expression calls
api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', V ) ,
where V is any value other than an empty list,
[] . For this API attribute, V must
always be an empty list.
EffectiveTimeRangeCheck
CONDITION
WARNING
In a more complex usage of timestamp functions and comparison, the
expression results in an empty effective time range, and is therefore
effectively false. Alternatively, the time range covers a full range,
and is therefore effectively true.
HasOnlyListConstCheck
CONDITION
ERROR
The condition expression calls hasOnly(List<T>) , where
the type T is not a constant type, such as a string or
integer. The hasOnly() function accepts only a list of
constants.
HasOnlyListLengthCheck
CONDITION
ERROR
The condition expression calls hasOnly(List<T>) , and
List<T> contains more than the maximum of
10 elements.
ResourceServiceLiteralCheck
CONDITION
WARNING
The specified resource.service value is not supported. The
expression using such string literal for equality comparison is
effectively false. Use a
supported
value .
ResourceTypeLiteralCheck
CONDITION
WARNING
The specified resource.type value is not supported.
The expression using such string literal for equality comparison is
effectively false. Use a
supported
value .
RestrictedAttributesCheck
CONDITION
WARNING
The expression uses an attribute that is restricted or not supported.
Setting the condition expression might not succeed. See the
list
of attributes .
Linting examples
This section shows examples of conditions that cause each validation unit to
report issues. Each example demonstrates linting by using the Google Cloud CLI.
No validation issues
Example condition:
{
"title" : "1_less_than_2" ,
"description" : "" ,
"expression" : "1 < 2"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
{}
ConditionCompileCheck
Example condition:
{
"title" : "Condition not compiling" ,
"description" : "" ,
"expression" : "true=false"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : |-
ERROR: Parse expression:1:4: token recognition error at: '=f'
| true=false
| ....^
fieldName : condition.expression
level : CONDITION
locationOffset : 4
severity : ERROR
validationUnitName : LintValidationUnits/ConditionCompileCheck
ConditionComplexityCheck
Example condition:
{
"title" : "Condition not compiling" ,
"description" : "" ,
"expression" :
"1<2 || 2<3 || 3<4 || 4<5 || 5<6 || 6<7 || 7<8 || 8<9 || 9<10 || 10<11 || 11<12 || 12<13 || 13<14 || 14<15"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : Logical operators count must not be more than 12
fieldName : condition.expression
level : CONDITION
severity : ERROR
validationUnitName : LintValidationUnits/ConditionComplexityCheck
DateTimeCheck
Example condition:
{
"title" : "Condition not compiling" ,
"description" : "" ,
"expression" : "request.time < timestamp('2000-01-01T00:00:00Z')"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : Ineffective date time value 2000-01-01T00:00:00+00:00 parsed
from "2000-01-01T00:00:00Z"; condition is effectively False. Time expired
already.
fieldName : condition.expression
level : CONDITION
locationOffset : 25
severity : WARNING
validationUnitName : LintValidationUnits/DateTimeCheck
DateTimeRangeCheck
Example condition:
{
"title" : "Time function out of range" ,
"description" : "" ,
"expression" : "request.time.getMonth() > 13"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : The value being compared to the specified timestamp function
(getMonth) must be in range [0, 11].
fieldName : condition.expression
level : CONDITION
locationOffset : 26
severity : WARNING
validationUnitName : LintValidationUnits/DateTimeRangeCheck
DrgGetAttributeDefaultValueCheck
Example condition:
{
"title" : "DRG condition takes non empty list as default value" ,
"description" : "" ,
"expression" :
"api.getAttribute('iam.googleapis.com/modifiedGrantsByRole', ['roles/viewer']).hasOnly(['roles/editor'])"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : api.getAttribute call on
'iam.googleapis.com/modifiedGrantsByRole' can only
accept empty list ('[]') as default value.
fieldName : condition.expression
level : CONDITION
locationOffset : 60
severity : ERROR
validationUnitName : LintValidationUnits/DrgGetAttributeDefaultValueCheck
EffectiveTimeRangeCheck
Example condition:
{
"title" : "Empty time range" ,
"description" : "" ,
"expression" : "request.time.getMonth() > 5 && request.time.getMonth() < 4"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : The aggregate of time functions [getMonth] results in empty ranges.
fieldName : condition.expression
level : CONDITION
severity : WARNING
validationUnitName : LintValidationUnits/EffectiveTimeRangeCheck
HasOnlyListConstCheck
Example condition:
{
"title" : "hasOnly contains more than constant value" ,
"description" : "" ,
"expression" :
"api.getAttribute('somekey', []).hasOnly(['somevalue', resource.name])"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : hasOnly() expects an argument of type list containing only const
values, but a non-const expression was found in the list.
fieldName : condition.expression
level : CONDITION
locationOffset : 59
severity : ERROR
validationUnitName : LintValidationUnits/HasOnlyListConstCheck
HasOnlyListLengthCheck
Example condition:
{
"title" : "hasOnly contains more than 10 elements" ,
"description" : "" ,
"expression" :
"api.getAttribute('somekey', []).hasOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : The list argument to hasOnly() cannot have more than 10 elements
fieldName : condition.expression
level : CONDITION
locationOffset : 39
severity : ERROR
validationUnitName : LintValidationUnits/HasOnlyListLengthCheck
ResourceServiceLiteralCheck
Example condition:
{
"title" : "Condition with unsupported resource service string" ,
"description" : "" ,
"expression" : "resource.service == 'resourcemanager'"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : 'resource.service : resourcemanager is not supported. Using this
value in condition may lead to unintended consequences. Check user guide at
https://cloud.google.com/iam/docs/conditions-resource-attributes#resource_service_values
for supported values for resource.service.'
fieldName : condition.expression
level : CONDITION
locationOffset : 20
severity : WARNING
validationUnitName : LintValidationUnits/ResourceServiceLiteralCheck
ResourceTypeLiteralCheck
Example condition:
{
"title" : "Condition with legacy resource type" ,
"description" : "" ,
"expression" : "resource.type == 'resourcemanager.projects'"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : 'resource.type : resourcemanager.projects is not supported.
Using this value in condition may lead to unintended consequences. Check
user guide at https://cloud.google.com/iam/docs/conditions-resource-attributes#resource_type_values
for supported values for resource.type.'
fieldName : condition.expression
level : CONDITION
locationOffset : 17
severity : WARNING
validationUnitName : LintValidationUnits/ResourceTypeLiteralCheck
RestrictedAttributesCheck
Example condition:
{
"title" : "Condition with restricted attribute" ,
"description" : "" ,
"expression" : "'accessPolicies/123/accesslevels/TRUSTED' in request.auth.access_levels"
}
Run command:
gcloud alpha iam policies lint-condition --condition-from-file = "condition.json"
Lint result:
lintResults :
- debugMessage : Condition attribute `request.auth.access_levels` is restricted
or unsupported. Please check https://cloud.google.com/iam/docs/conditions-overview
for the full list of supported attributes
fieldName : condition.expression
level : CONDITION
locationOffset : 57
severity : WARNING
validationUnitName : LintValidationUnits/RestrictedAttributesCheck
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
