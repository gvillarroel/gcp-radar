---
title: "Manage Google Cloud Armor resources by using custom constraints \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/custom-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/custom-constraints
  title: "Manage Google Cloud Armor resources by using custom constraints \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Google Cloud Armor
Guides
Send feedback
Manage Google Cloud Armor resources by using custom constraints
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud Organization Policy gives you centralized, programmatic
control over your organization's resources. As the
organization policy administrator , you can define an organization policy,
which is a set of restrictions called constraints that apply to
Google Cloud resources and descendants of those resources in the
Google Cloud resource hierarchy . You can enforce organization policies at
the organization, folder, or project level.
Organization Policy provides predefined constraints for various
Google Cloud services. However, if you want more granular, customizable
control over the specific fields that are restricted in your organization
policies, you can also create custom constraints and enforce those custom
constraints in a custom organization policy.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, see
Hierarchy evaluation rules .
Cloud Armor supported resources
For Google Cloud Armor resources , you can set custom constraints on the following
resources and fields.
Security Policy : compute.googleapis.com/SecurityPolicy
Name: resource.name
Description: resource.description
Rules: resource.rules[]
Header action: resource.rules[].headerAction
Request headers to add:
resource.rules[].headerAction.requestHeadersToAdds[]
Header name:
resource.rules[].headerAction.requestHeadersToAdds[].headerName
Header value:
resource.rules[].headerAction.requestHeadersToAdds[].headerValue
Matcher: resource.rules[].match
Versioned expression:
resource.rules[].match.versionedExpr
Config: resource.rules[].match.config
Source IP ranges:
resource.rules[].match.config.srcIpRanges[]
Expression: resource.rules[].match.expr
Expression options:
resource.rules[].match.exprOptions
reCAPTCHA options:
resource.rules[].match.exprOptions.recaptchaOptions
Action token site keys:
resource.rules[].match.exprOptions.recaptchaOptions.actionTokenSiteKeys[]
Session token site keys:
resource.rules[].match.exprOptions.recaptchaOptions.sessionTokenSiteKeys[]
Network matcher: resource.rules[].networkMatch
User defined field match:
resource.rules[].networkMatch.userDefinedFieldMatch
Name:
resource.rules[].networkMatch.userDefinedFieldMatch.name
Values:
resource.rules[].networkMatch.userDefinedFieldMatch.values
Source IP ranges:
resource.rules[].networkMatch.srcIpRanges
Destination IP ranges:
resource.rules[].networkMatch.destIpRanges
IP protocols: resource.rules[].networkMatch.ipProtocols
Source ports: resource.rules[].networkMatch.srcPorts
Destination ports:
resource.rules[].networkMatch.destPorts
Source region codes:
resource.rules[].networkMatch.srcRegionCodes
Source ASNs: resource.rules[].networkMatch.srcAsns
Preconfigured WAF config:
resource.rules[].preconfiguredWafConfig
Exclusions:
resource.rules[].preconfiguredWafConfig.exclusions[]
Target rule set:
resource.rules[].preconfiguredWafConfig.exclusions[].targetRuleSet
Target rule IDs:
resource.rules[].preconfiguredWafConfig.exclusions[].targetRuleIds[]
Request headers to exclude:
resource.rules[].preconfiguredWafConfig.exclusions[].requestHeadersToExclude[]
Value:
resource.rules[].preconfiguredWafConfig.exclusions[].requestHeadersToExclude[].val
Operation:
resource.rules[].preconfiguredWafConfig.exclusions[].requestHeadersToExclude[].op
Request cookies to exclude:
resource.rules[].preconfiguredWafConfig.exclusions[].requestCookiesToExclude[]
Value:
resource.rules[].preconfiguredWafConfig.exclusions[].requestCookiesToExclude[].val
Operation:
resource.rules[].preconfiguredWafConfig.exclusions[].requestCookiesToExclude[].op
Request query params to exclude:
resource.rules[].preconfiguredWafConfig.exclusions[].requestQueryParamsToExclude[]
Value:
resource.rules[].preconfiguredWafConfig.exclusions[].requestQueryParamsToExclude[].val
Operation:
resource.rules[].preconfiguredWafConfig.exclusions[].requestQueryParamsToExclude[].op
Request URIs to exclude:
resource.rules[].preconfiguredWafConfig.exclusions[].requestUrisToExclude[]
Value:
resource.rules[].preconfiguredWafConfig.exclusions[].requestUrisToExclude[].val
Operation:
resource.rules[].preconfiguredWafConfig.exclusions[].requestUrisToExclude[].op
Redirect options: resource.rules[].redirectOptions[]
Type: resource.rules[].redirectOptions[].type
Target: resource.rules[].redirectOptions[].target
Rate limit options: resource.rules[].rateLimitOptions[]
Rate limit threshold:
resource.rules[].rateLimitOptions[].rateLimitThreshold
Count:
resource.rules[].rateLimitOptions[].rateLimitThreshold.count
Interval seconds:
resource.rules[].rateLimitOptions[].rateLimitThreshold.intervalSec
Conform action:
resource.rules[].rateLimitOptions[].conformAction
Exceed action:
resource.rules[].rateLimitOptions[].exceedAction
Exceed redirect options:
resource.rules[].rateLimitOptions[].exceedRedirectOptions
Type:
resource.rules[].rateLimitOptions[].exceedRedirectOptions.type
Target:
resource.rules[].rateLimitOptions[].exceedRedirectOptions.target
Exceed action RPC status:
resource.rules[].rateLimitOptions[].exceedActionRpcStatus
Code:
resource.rules[].rateLimitOptions[].exceedActionRpcStatus.code
Message:
resource.rules[].rateLimitOptions[].exceedActionRpcStatus.message
Enforce on key:
resource.rules[].rateLimitOptions[].enforceOnKey
Enforce on key name:
resource.rules[].rateLimitOptions[].enforceOnKeyName
Enforce on key configs:
resource.rules[].rateLimitOptions[].enforceOnKeyConfigs
Enforce on key type:
resource.rules[].rateLimitOptions[].enforceOnKeyConfigs.enforceOnKeyType
Enforce on key name:
resource.rules[].rateLimitOptions[].enforceOnKeyConfigs.enforceOnKeyName
Ban threshold:
resource.rules[].rateLimitOptions[].banThreshold
Count:
resource.rules[].rateLimitOptions[].banThreshold.count
Interval seconds:
resource.rules[].rateLimitOptions[].banThreshold.intervalSec
Ban duration seconds:
resource.rules[].rateLimitOptions[].banDurationSec
Redirect target: resource.rules[].redirectTarget
Rule number: resource.rules[].ruleNumber
Adaptive protection config:
resource.adaptiveProtectionConfig
Layer 7 DDoS defense config:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig
Enable:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.enable
Rule visibility:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.ruleVisibility
Threshold configs:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[]
Name:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].name
Auto deploy load threshold:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployLoadThreshold
Auto deploy confidence threshold:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployConfidenceThreshold
Auto deploy impacted baseline threshold:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployImpactedBaselineThreshold
Auto deploy expiration seconds:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployExpirationSec
Detection load threshold:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].detectionLoadThreshold
Detection absolute QPS:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].detectionAbsoluteQps
Detection relative to baseline QPS:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].detectionRelativeToBaselineQps
Traffic granularity configs:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[]
Type:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[].type
Value:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[].value
Enable each unique value:
resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[].enableEachUniqueValue
Auto deploy config:
resource.adaptiveProtectionConfig.autoDeployConfig
Load threshold:
resource.adaptiveProtectionConfig.autoDeployConfig.loadThreshold
Confidence threshold:
resource.adaptiveProtectionConfig.autoDeployConfig.confidenceThreshold
Impacted baseline threshold:
resource.adaptiveProtectionConfig.autoDeployConfig.impactedBaselineThreshold
Expiration seconds:
resource.adaptiveProtectionConfig.autoDeployConfig.expirationSec
Advanced options config:
resource.advancedOptionsConfig
JSON parsing:
resource.advancedOptionsConfig.jsonParsing
JSON custom config:
resource.advancedOptionsConfig.jsonCustomConfig
Content types:
resource.advancedOptionsConfig.jsonCustomConfig.contentTypes[]
Log level: resource.advancedOptionsConfig.logLevel
User IP request headers:
resource.advancedOptionsConfig.userIpRequestHeaders[]
DDoS protection config:
resource.ddosProtectionConfig
DDoS protection:
resource.ddosProtectionConfig.ddosProtection
reCAPTCHA options config:
resource.recaptchaOptionsConfig
Redirect site key:
resource.recaptchaOptionsConfig.redirectSiteKey
Type: resource.type
User defined fields:
resource.userDefinedFields[]
Name: resource.userDefinedFields[].name
Base: resource.userDefinedFields[].base
Offset: resource.userDefinedFields[].offset
Size: resource.userDefinedFields[].size
Mask: resource.userDefinedFields[].mask
Network
Edge Security Service :
compute.googleapis.com/NetworkEdgeSecurityService
Name: resource.name
Description: resource.description
Security policy: resource.securityPolicy
Defining custom constraints
A custom constraint is defined by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing organization policies .
Before you begin
If you haven't already, set up authentication .
Authentication verifies your identity for access to Google Cloud services and APIs. To run
code or samples from a local development environment, you can authenticate to
Compute Engine by selecting one of the following options:
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Set a default region and zone .
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
* Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage organization policies for Cloud Armor resources,
ask your administrator to grant you the
following IAM roles:
Organization policy administrator ( roles/orgpolicy.policyAdmin )
on the organization resource
To test the constraints:
Compute Security Admin ( roles/compute.securityAdmin )
on the project
Service Account User ( roles/iam.serviceAccountUser )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage organization policies for Cloud Armor resources. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies for Cloud Armor resources:
orgpolicy.constraints.list
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Set up a custom constraint
You can create a custom constraint and set it up for use in organization
policies by using the Google Cloud console or Google Cloud CLI.
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
Select the Project picker at the top of the page.
From the Project picker , select the resource for which you want
to set the organization policy.
Click add Custom constraint .
In the Display name box, enter a human-friendly name for the
constraint. This field has a maximum length of 200 characters.
Don't use PII or sensitive data in constraint names, because they could be
exposed in error messages.
In the Constraint ID box, enter the name you want for your new
custom constraint. A custom constraint must start with custom. , and can
only include uppercase letters, lowercase letters, or numbers, for
example, custom.requireSecurityPolicyWithStandardJsonParsing. The maximum length of this field is 70
characters, not counting the prefix, for example,
organizations/123456789/customConstraints/custom. .
In the Description box, enter a human-friendly description of the
constraint to display as an error message when the policy is violated.
This field has a maximum length of 2,000 characters.
In the Resource type box, select the name of the Google Cloud
REST resource containing the object and field you want to restrict. For
example, compute.googleapis.com/SecurityPolicy .
Under Enforcement method , select whether to enforce the constraint
on the REST CREATE method only or on both the REST CREATE and
UPDATE methods.
To define a condition, click edit
Edit condition .
In the Add condition panel, create a CEL condition that refers to a
supported service resource. This field has a maximum
length of 1,000 characters.
Click Save .
Under Action , select whether to allow or deny the evaluated method if
the above condition is met.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML
configuration for this custom constraint appears on the right.
gcloud
To create a custom constraint using the Google Cloud CLI, create a YAML file.
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resource_types : compute.googleapis.com/ RESOURCE_NAME
method_types :
– METHOD1
– METHOD2
condition : " CONDITION "
action_type : ACTION
display_name : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name you want for your new
custom constraint. A custom constraint must start with custom. , and can
only include uppercase letters, lowercase letters, or numbers, for
example, custom.requireSecurityPolicyWithStandardJsonParsing. The maximum length of this field is 70
characters, not counting the prefix, for example,
organizations/123456789/customConstraints/custom .
RESOURCE_NAME : the name (not the URI) of the
Compute Engine API REST resource containing the object and field
you want to restrict. For example, compute.googleapis.com/SecurityPolicy.
METHOD1 , METHOD2 ,... : a list of
RESTful methods for which to enforce the constraint. Can be CREATE
or CREATE and UPDATE .
CONDITION : a CEL condition that is written against
a representation of a supported service resource. This field has a maximum
length of 1,000 characters. See
Supported resources for more information about the
resources available to write conditions against.
ACTION : the action to take if the condition is
met. This can be either ALLOW or DENY .
DISPLAY_NAME : a human-friendly name for the
constraint. This field has a maximum length of 200 characters.
DESCRIPTION : a human-friendly description of the
constraint to display as an error message when the policy is violated.
This field has a maximum length of 2,000 characters.
For more information about how to create a custom constraint, see
Defining custom constraints .
Console
To create a custom constraint, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the organization
policy for.
Click add Custom constraint .
In the Display name box, enter a human-readable name for the constraint. This name is
used in error messages and can be used for identification and debugging. Don't use
personally identifiable information (PII) or sensitive data in display names because this
name could be exposed in error messages. This field can contain up to 200 characters.
In the Constraint ID box, enter the ID that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase) or
numbers, for example custom.requireSecurityPolicyWithStandardJsonParsing . This field can contain up to
70 characters, not counting the prefix ( custom. ), for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
In the Description box, enter a human-readable description of the constraint. This
description is used as an error message when the policy is violated. Include details about
why the policy violation occurred and how to resolve the policy violation. Don't include
PII or sensitive data in your description, because it could be exposed in error messages.
This field can contain up to 2000 characters.
In the Resource type box, select the name of the Google Cloud REST resource
containing the object and field that you want to restrict—for example,
container.googleapis.com/NodePool . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
This constraint
can only be enforced on the REST CREATE method.
To see supported methods for each service, find the service in
Services that support custom constraints .
To define a condition, click edit Edit condition .
In the Add condition panel, create a CEL condition that refers to a supported
service resource, for example, resource.management.autoUpgrade == false . This
field can contain up to 1000 characters. For details about CEL usage, see
Common Expression Language .
For more information about the service resources you can use in your custom constraints,
see
Custom constraint supported services .
Click Save .
Under Action , select whether to allow or deny the evaluated method if the condition
is met.
The deny action means that the operation to create or update the resource is blocked if the
condition evaluates to true.
The allow action means that the operation to create or update the resource is permitted only
if the condition evaluates to true. Every other case except those explicitly listed in the
condition is blocked.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML configuration for this
custom constraint appears on the right.
gcloud
To create a custom constraint, create a YAML file using the following format:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes : RESOURCE_NAME
methodTypes :
- CREATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase)
or numbers, for example, custom.requireSecurityPolicyWithStandardJsonParsing . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
compute.googleapis.com/SecurityPolicy . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can only be
CREATE .
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
"resource.advancedOptionsConfig.jsonParsing != 'STANDARD'" .
For more information about the resources available to write conditions against, see
Supported resources .
ACTION : the action to take if the condition is met.
Can only be ALLOW .
The allow action means that if the condition evaluates to true, the operation to create or
update the resource is permitted. This also means that every other case except the one
explicitly listed in the condition is blocked.
DISPLAY_NAME : a human-readable name for the constraint. This name
is used in error messages and can be used for identification and debugging. Don't use PII
or sensitive data in display names because this name could be exposed in error messages.
This field can contain up to 200 characters.
DESCRIPTION : a human-friendly description of the constraint to
display as an error message when the policy is violated. This field can contain up to
2000 characters.
After you have created the YAML file for a new custom constraint, you must set it up to make
it available for organization policies in your organization. To set up a custom constraint,
use the
gcloud org-policies set-custom-constraint command:
gcloud org-policies set-custom-constraint CONSTRAINT_PATH
Replace CONSTRAINT_PATH with the full path to your custom constraint
file. For example, /home/user/customconstraint.yaml .
After this operation is complete, your custom constraints are available as organization
policies in your list of Google Cloud organization policies.
To verify that the custom constraint exists, use the
gcloud org-policies list-custom-constraints command:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the ID of your organization resource.
For more information, see
Viewing organization policies .
Enforce a custom constraint
You can enforce a constraint by creating an organization policy that references it, and then
applying that organization policy to a Google Cloud resource.
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the
organization policy for.
From the list on the Organization policies page, select your constraint to view
the Policy details page for that constraint.
To configure the organization policy for this resource, click Manage policy .
On the Edit policy page, select Override parent's policy .
Click Add a rule .
In the Enforcement section, select whether this organization policy is enforced or
not.
Optional: To make the organization policy conditional on a tag, click
Add condition . Note that if you add a conditional rule to an organization
policy, you must add at least one unconditional rule or the policy cannot be saved. For more
information, see
Scope organization policies with tags .
Click Test changes to simulate the effect of the organization policy. For more
information, see
Test organization policy changes with Policy Simulator .
To enforce the organization policy in dry-run mode, click Set dry run policy . For
more information, see
Test organization policies .
After you verify that the organization policy in dry-run mode works as intended, set the
live policy by clicking Set policy .
gcloud
To create an organization policy with boolean rules, create a policy YAML file that
references the constraint:
name : projects/ PROJECT_ID /policies/ CONSTRAINT_NAME
spec :
rules :
- enforce : true
dryRunSpec :
rules :
- enforce : true
Replace the following:
PROJECT_ID : the project that you want to enforce your constraint
on.
CONSTRAINT_NAME : the name you defined for your custom constraint. For
example, custom.requireSecurityPolicyWithStandardJsonParsing .
To enforce the organization policy in
dry-run mode , run
the following command with the dryRunSpec flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = dryRunSpec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
After you verify that the organization policy in dry-run mode works as intended, set the
live policy with the org-policies set-policy command and the spec
flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = spec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
Example: Create a constraint that requires all security policies to have standard JSON parsing enabled
This constraint prevents security policies from being created if they don't have standard JSON parsing enabled.
gcloud
Create a requireStandardJsonParsing.yaml constraint file with the following
information.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.requireStandardJsonParsing
resource_types : compute.googleapis.com/SecurityPolicy
condition : "resource.advancedOptionsConfig.jsonParsing != 'STANDARD'"
action_type : DENY
method_types : [ CREATE , UPDATE ]
display_name : Security policies must have standard JSON parsing enabled.
Replace ORGANIZATION_ID with your organization ID.
Set the custom constraint.
gcloud org-policies set-custom-constraint requireStandardJsonParsing.yaml
Create a requireStandardJsonParsing-policy.yaml policy file with the
information provided in the following example and enforce the constraint at
the project level. You can also set this constraint at the organization or
folder level.
name : projects/ PROJECT_ID /policies/custom.requireStandardJsonParsing
spec :
rules :
– enforce : true
Replace PROJECT_ID with your project ID.
Enforce the policy.
gcloud org-policies set-policy requireStandardJsonParsing-policy.yaml
To test the constraint, create security policy without the JSON parsing field set.
gcloud compute security-policies create my-policy \
--type=CLOUD_ARMOR
The output is similar to the following:
ERROR : (gcloud.compu te .securi t yPolicies.crea te ) Could n o t fet ch resource :
- Opera t io n de n ied by cus t om org policy : [ cus t omCo nstra i nts /cus t om.requireS tan dardJso n Parsi n g ] : Securi t y policies mus t have s tan dard JSON parsi n g e na bled.
Pricing
The Organization Policy Service, including predefined and custom organization policies, is
offered at no charge.
What's next
Introduction to the Organization Policy Service
Create and manage organization policies
Organization policy constraints
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
