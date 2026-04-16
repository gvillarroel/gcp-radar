---
title: "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/configure-security-policies
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/configure-security-policies
  title: "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\
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
Configure Cloud Armor security policies
Stay organized with collections
Save and categorize content based on your preferences.
Use these instructions to create Google Cloud Armor security policies to filter
incoming traffic to your application. For conceptual information about security
policies, see the Cloud Armor security policy
overview .
Caution: Cloud Armor can be configured using Google Kubernetes Engine (GKE)
ingress security policies. When different GKE resources changes
are applied, the Cloud Armor configuration is overwritten. For
information about configuring Cloud Armor on GKE, see
Configuring ingress features through BackendConfig parameters
in Cloud Armor ingress security
policy .
Before you begin
Before you configure security policies, do the following:
Make sure that you are familiar with external Application Load Balancer
concepts.
Examine your existing backend services to determine which don't already have
a security policy attached. These backend services and their associated
backends are not protected by Cloud Armor. To add the protection
that Cloud Armor provides, use the instructions in this document to
attach a newly created or existing security policy to the backend service.
Set up IAM permissions for Cloud Armor security policies
The following operations require the Identity and Access Management (IAM)
Compute Security Admin role
( roles/compute.securityAdmin ):
Configuring, modifying, updating, and deleting a Cloud Armor
security policy
Using the following API methods:
SecurityPolicies insert
SecurityPolicies delete
SecurityPolicies patch
SecurityPolicies addRule
SecurityPolicies patchRule
SecurityPolicies removeRule
A user with the
Compute Network Admin role
( roles/compute.networkAdmin ) can perform the following operations:
Setting a Cloud Armor security policy for a backend service
Using the following API methods:
BackendServices setSecurityPolicy
BackendServices list ( gcloud only)
Users with the Security Admin role
( roles/iam.securityAdmin ) and the Compute Network Admin role
( roles/compute.networkAdmin ) can view Cloud Armor security
policies by using the SecurityPolicies API methods get , list , and
getRule .
Set up IAM permissions for custom roles
The following table lists the IAM roles' base permissions, their
associated API methods, and the roles that grant that permission.
IAM permission
API methods
Roles
compute.securityPolicies.create
SecurityPolicies insert
Compute Security Admin ( roles/compute.securityAdmin )
compute.securityPolicies.delete
SecurityPolicies delete
Compute Security Admin ( roles/compute.securityAdmin )
compute.securityPolicies.get
SecurityPolicies get
SecurityPolicies getRule
Security Admin ( roles/iam.securityAdmin )
compute.securityPolicies.list
SecurityPolicies list
Security Admin ( roles/iam.securityAdmin )
Both of the following:
compute.securityPolicies.use
compute.backendServices. setSecurityPolicy
BackendServices setSecurityPolicy
Compute Network Admin ( roles/compute.networkAdmin )
compute.securityPolicies.update
SecurityPolicies patch
SecurityPolicies addRule
SecurityPolicies patchRule
SecurityPolicies removeRule
Compute Security Admin ( roles/compute.securityAdmin )
Create security policies
You can configure Cloud Armor security policies, rules, and expressions
by using the Google Cloud console, the Google Cloud CLI, or the REST API. When you
use the gcloud CLI to create security policies, use the --type flag
to specify whether the security policy is a backend security policy or an edge
security policy.
If you are unfamiliar with security policy configuration, we recommend that you
view example security policies .
Sample expressions
The following are sample expressions. For more information about expressions,
see the Cloud Armor custom rules language
reference .
If you are configuring a rule or expression that uses ISO 3166-1 alpha
2
country or region codes, Cloud Armor treats each code independently.
Cloud Armor rules and expressions explicitly use those region codes to
allow or deny requests.
The following expression matches against requests from the IP address
1.2.3.4 and contains the string example in the user-agent header:
inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')
Alternatively, you can match on the IP address range of a custom client IP
address header by using the
origin.user_ip
attribute:
inIpRange(origin.user_ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')
The following expression matches against requests that have a cookie with a
specific value:
has(request.headers['cookie']) && request.headers['cookie'].contains('cookie_name=cookie_value')
The following expression matches against requests from the region AU :
origin.region_code == 'AU'
The following expression matches against requests from the region AU that
are not in the specified IP range:
origin.region_code == "AU" && !inIpRange(origin.ip, '1.2.3.0/24')
The following expression matches against requests with a numbered variable
path to a specific file if the URI matches a regular expression:
request.path.matches('/path/[0-9]+/target_file.html')
The following expression matches against requests if the Base64 decoded
value of the user-id header contains a specific value:
has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')
The following expression uses a preconfigured expression set match against
SQLi attacks:
evaluatePreconfiguredWaf('sqli-stable')
Path traversal and normalization
When you normalize content in your path-based rules, you can manage path
traversal and encoding rules straightforwardly and create generalized rules that
avoid capitalization or content-specific encoding.
When writing rules that use startsWith , endsWith , or contains to match on
request.path , we recommend that you use lower and urlDecode to normalize
the path before matching. This can help prevent bypasses that use URL encoding
or case variations.
For example, if you want to block access to the /admin directory, you can use
the following expression:
request.path.lower().urlDecode().startsWith('/admin')
This rule blocks requests for /admin , /Admin , /a%64min , and other
variations.
When writing rules that use matches to match on request.path , we recommend
that you also account for the backslash character () in your regular expression.
For example, if you want to block access to the /admin directory, you can use
the following expression to block bypasses that use the backslash character ():
request.path.matches(r'^/\\*admin')
You can also combine this with urlDecode to handle both URL encoding and
the backslash character () bypasses:
request.path.urlDecode().matches(r'^/\\*admin')
Manage security policies
Use the following sections to list the security policies in your project, update
your security policies, delete your security policies, or test your security
policies.
List security policies
Use these instructions to list all Cloud Armor security policies in the
current project or in a project that you specify.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
To view a particular policy, on the Security policies page, in the
list of policies, click its name.
gcloud
gcloud compute security-policies list
For example:
gcloud compute security-policies list
Output:
NAME: my-policy
REGION: us-central1
For more information, see gcloud compute security-policies
list .
Update security policies
Use these instructions to update a Cloud Armor security policy. For
example, you can modify the policy's description, modify the default rule's
behavior, change the target backend service, or add new rules.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
To update a particular policy, on the Security policies page, in the
list of policies, click
more_vert Menu
for the policy that you want to update.
To update the policy description of the default rule action, select
Edit , make your changes, and then click Update .
To add a rule, select Add rule , and then follow the instructions
in Adding rules to a security policy .
To change the target backend service for the policy, select
Apply policy to target , click Add Target , select a target, and
then click Add .
gcloud
To update a security policy, use the following Google Cloud CLI instructions:
To update a rule in a security policy, see Updating a single rule in a
security policy .
To add a rule to a security policy, see Adding rules to a security
policy .
To delete a rule from a security policy, see Deleting rules from a
security policy .
To update multiple rules in a single update (atomic update), see
Atomically updating multiple rules in a security
policy .
To update non-rule fields in a security policy (such as the description
field), see Exporting security policies and Importing
security policies .
Delete security policies
Use these instructions to delete a Cloud Armor security policy. You
must remove all backend services from the policy before you
can delete it.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, next to the name of the security
policy that you want to delete, select the checkbox.
In the upper-right corner of the page, click
delete Delete .
gcloud
Use gcloud compute security-policies delete NAME . Replace
NAME with the name of the security policy:
gcloud compute security-policies delete NAME
Test security policies
We recommend that you deploy all new rules in preview mode, then examine your
request logs , to verify that the policies and
rules are behaving as expected.
Manage security policy rules
Use the following sections to list security policy rules, add rules, update
rules, or delete rules.
List the rules in a security policy
Use these instructions to list the rules in a Cloud Armor security
policy.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed, and the policy rules
are listed on the Rules tab in the middle of the page.
gcloud
Use the following gcloud command to list all rules in a single security
policy along with a description of the policy:
gcloud compute security-policies describe NAME \
Use the following gcloud command to list all rules in a single security
policy in a specified region along with a description of the policy:
gcloud compute security-policies describe NAME \
--region REGION
Use the following gcloud command to describe a rule with the specified
priority in the specified security policy:
gcloud compute security-policies rules describe PRIORITY \
--security-policy POLICY_NAME
For example, the following command describes the rule with priority 1000 in
the security policy my-policy :
gcloud compute security-policies rules describe 1000 \
--security-policy my-policy
Output:
action: deny(403)
description: block traffic from 192.0.2.0/24 and 198.51.100.0/24
kind: compute#securityPolicyRule
match:
srcIpRanges:
- '192.0.2.0/24'
- '198.51.100.0/24'
preview: false
priority: 1000
For more information, see gcloud compute security-policies
describe .
Add rules to a security policy
Use these instructions to add rules to a Cloud Armor security policy.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed.
In the middle of the page, click the Rules tab.
Click Add rule .
Optional: Enter a description of the rule.
Select the mode:
Basic mode : allow or deny traffic based on IP addresses or IP
ranges.
Advanced mode : allow or deny traffic based on rule expressions.
In the Match field, specify the conditions under which the rule
applies:
Basic mode : enter from one (1) to 10 IP address ranges to match
in the rule. You can add a maximum of 10 IP address ranges. For
limits, see Cloud Armor quotas and
limits .
Advanced mode :
Match condition builder ( Preview ):
use the visual builder to create expressions without writing
raw CEL code. You can add conditions, group them, and apply
string transformations. For more information, see Use the
match condition builder .
Match condition editor : enter an expression or
subexpressions to evaluate against incoming requests. For
information about how to write the expressions and read the
following examples, see the custom rules language
reference .
The following expression matches against requests from the IP
address 1.2.3.4 and contains the string example in the
user-agent header:
inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')
* The following expression matches against requests that have a cookie
with a specific value:
has(request.headers['cookie']) && request.headers['cookie'].contains(' cookie_name = cookie_value ')
* The following expression matches against requests from the region
`AU`:
origin.region_code == 'AU'
* The following expression matches against requests from the region
`AU` that are not in the specified IP range:
origin.region_code == "AU" && !inIpRange(origin.ip, '1.2.3.0/24')
* The following expression matches against requests if the URI matches
a regular expression:
request.path.matches('/example_path/')
* The following expression matches against requests if the Base64
decoded value of the `user-id` header contains a specific value:
has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')
* The following expression uses a preconfigured expression set to
match against SQLi attacks:
evaluatePreconfiguredWaf('sqli-stable')
For Action , select Allow or Deny .
If you are configuring a deny rule, select a Deny status message.
If you want to enable preview mode for the rule, select the Enable
checkbox.
In the Priority field, enter a positive integer.
Click Add .
gcloud
Use the command gcloud compute security-policies rules create
PRIORITY . Replace PRIORITY with the
priority of the rule in the policy:
gcloud compute security-policies rules create PRIORITY \
--security-policy POLICY_NAME \
--description DESCRIPTION \
--src-ip-ranges IP_RANGES | --expression EXPRESSION \
--action=[ allow | deny-403 | deny-404 | deny-502 ] \
--preview
For example, the following command adds a rule to block traffic from IP
address ranges 192.0.2.0/24 and 198.51.100.0/24. The rule has priority 1000
and is a rule in a policy called my-policy :
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--description "block traffic from 192.0.2.0/24 and 198.51.100.0/24" \
--src-ip-ranges "192.0.2.0/24","198.51.100.0/24" \
--action "deny-403"
Use the --expression flag to specify a condition in the custom rules
language reference . The following
command adds a rule to allow traffic from the IP address 1.2.3.4 and
contains the string example in the user-agent header:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \
--action allow \
--description "Block User-Agent 'example'"
The following command adds a rule to block requests if the request's cookie
contains a specific value:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "has(request.headers['cookie']) && request.headers['cookie'].contains('80=BLAH')" \
--action deny-403 \
--description "Cookie Block"
The following command adds a rule to block requests from the region AU :
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "origin.region_code == 'AU'" \
--action deny-403 \
--description "AU block"
The following command adds a rule to block requests from the region AU
that are not in the specified IP range:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "origin.region_code == "AU" && !inIpRange(origin.ip, '1.2.3.0/24')" \
--action deny-403 \
--description "country and IP block"
The following command adds a rule to block requests with a URI that matches
a regular expression:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "request.path.matches('/example_path/')" \
--action deny-502 \
--description "regex block"
The following command adds a rule to block requests if the Base64 decoded
value of the user-id header contains a specific value:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \
--action deny-403 \
--description "country and IP block"
The following command adds a rule that uses a preconfigured expression set
to mitigate SQLi attacks:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "evaluatePreconfiguredWaf('sqli-stable')" \
--action deny-403
Update a single rule in a security policy
Use these instructions to update a single rule in a Cloud Armor
security policy. To atomically update multiple rules, see Atomically updating
multiple rules in a security policy .
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed.
In the middle of the page, click the Rules tab.
Next to the rule that you want to update, click
edit Edit .
The Edit rule page is displayed.
Make your changes, and then click Update .
gcloud
Use this command to update a rule with the specified priority in a
designated security policy. You can only update one security policy at a
time using this command:
gcloud compute security-policies rules update PRIORITY [ \
--security-policy POLICY_NAME \
--description DESCRIPTION \
--src-ip-ranges IP_RANGES | --expression EXPRESSION \
--action=[ allow | deny-403 | deny-404 | deny-502 ] \
--preview
]
For example, the following command updates a rule with priority 1111 to
allow traffic from the IP address range 192.0.2.0/24:
gcloud compute security-policies rules update 1111 \
--security-policy my-policy \
--description "allow traffic from 192.0.2.0/24" \
--src-ip-ranges "192.0.2.0/24" \
--action "allow"
For more information about this command, see gcloud compute
security-policies rules
update .
To update the priority of a rule, you must use the REST API. For more
information, see
securityPolicies.patchRule .
Use the match condition builder
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The match condition builder is the visual interface in the Google Cloud console that
you can use to create complex Common Expression Language (CEL) expressions
without writing raw code. The builder visualizes logic through a structured UI
and supports grouping, flat lists, and deeply nested logic. This tool is
particularly useful when configuring rules to protect multi-cloud backends or
hybrid deployments, where you might need to inspect specific request attributes
before routing traffic to external endpoints.
Features of the match condition builder
Logic and nesting : you can combine multiple conditions using AND and
OR operators. The builder supports a single level of grouping and nesting
up to five expressions.
String transformations : for string-based attributes (such as
request.path or request.headers ), you can apply transformations to
normalize data before evaluation. Supported transformations include:
Lowercase and Uppercase
Base64 Decode
URL Decode and URL Decode (Unicode)
UTF-8 to Unicode Convert
Bidirectional parsing : you can switch between the visual Match
condition builder and the raw text Match condition editor . The UI
attempts to parse raw CEL code into visual blocks automatically.
Function support : the builder provides specific UI controls for
function-based expressions, such as preconfigured WAF rules, address groups,
and Threat Intelligence.
Limitations
The match condition builder is the default interface for advanced rule creation.
However, if an expression contains unsupported logic (such as unknown macros),
the builder is disabled. In these cases, you must use the Match condition
editor to edit the rule.
Additionally, the availability of certain expressions in the builder depends on
your project's Cloud Armor Enterprise tier and the security policy
type.
Atomically update multiple rules in a security policy
An atomic update applies changes to multiple rules in a single update. If you
were to update rules one-by-one, you might see some unintended behavior because
old and new rules might be working together for a short period of time.
To atomically update multiple rules, export the current security policy to a
JSON or YAML file, and then modify it. Use the modified file to create a new
security policy, and then switch the security policy for the relevant backend
services.
gcloud
Export the policy to update, as shown in the following example:
gcloud compute security-policies export my-policy \
--file-name my-file \
--file-format yaml
The exported policy will look similar to the following example:
description: my description
fingerprint: PWfLGDWQDLY=
id: '123'
name: my-policy
rules:
- action: deny(404)
description: my-rule-1
match:
expr:
expression: evaluatePreconfiguredWaf('xss-stable')
versionedExpr: SRC_IPS_V1
preview: false
priority: 1
- action: allow
description: my-rule-2
match:
config:
srcIpRanges:
- '1.2.3.4'
versionedExpr: SRC_IPS_V1
preview: false
priority: 2
- action: deny
description: default rule
kind: compute#securityPolicyRule
match:
config:
srcIpRanges:
- '*'
versionedExpr: SRC_IPS_V1
preview: false
priority: 2147483647
selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy
Use any text editor to modify the policy. For example, you can modify
the the priorities of the existing rules and add a new rule:
description: my description
fingerprint: PWfLGDWQDLY=
id: '123'
name: my-policy
rules:
- action: deny(404)
description: my-rule-1
match:
expr:
expression: evaluatePreconfiguredWaf('xss-stable')
versionedExpr: SRC_IPS_V1
preview: false
priority: 1
- action: allow
description: my-new-rule
match:
config:
srcIpRanges:
- '1.2.3.1'
versionedExpr: SRC_IPS_V1
preview: false
priority: 10
- action: allow
description: my-rule-2
match:
config:
srcIpRanges:
- '1.2.3.4'
versionedExpr: SRC_IPS_V1
preview: false
priority: 11
- action: deny
description: default rule
kind: compute#securityPolicyRule
match:
config:
srcIpRanges:
- '*'
versionedExpr: SRC_IPS_V1
preview: false
priority: 2147483647
selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy
Create a new Cloud Armor security policy and specify the
modified filename and format, as shown in the following example:
gcloud compute security-policies create new-policy \
--file-name modified-policy \
--file-format yaml
Remove the old security policy from the relevant backend service, as
shown in the following example:
gcloud compute backend-services update my-backend \
--security-policy ""
Add the new security policy to the backend service, as shown in the
following example:
gcloud compute backend-services update my-backend \
--security-policy new-policy
If the old policy is unused, delete it:
gcloud compute security-policies delete my-policy
Delete rules from a security policy
Use these instructions to delete rules from a Cloud Armor security
policy.
Console
In the Google Cloud console, go to the Google Cloud Armor policies page.
Go to Google Cloud Armor policies
Click the name of the security policy. The Policy details page is
displayed.
In the middle of the page, on the Rules tab, select the checkbox
next to the rule that you want to delete.
Click delete Delete .
gcloud
Use this command to remove a rule with the specified priority from a
designated security policy. You can modify only one security policy at a
time, but you can delete multiple rules at once:
gcloud compute security-policies rules delete PRIORITY [...] [
--security-policy POLICY_NAME \
]
For example:
gcloud compute security-policies rules delete 1000 \
--security-policy my-policy
Attach and remove security policies
Use the following sections to attach and remove security policies from backend
services and backend buckets.
Attach a security policy to a backend service
Use these instructions to attach a Cloud Armor security policy to a
backend service. A security policy can be attached to more than one backend
service, but a backend service can have only one of each type of security policy
attached to it.
Console
Caution: You cannot use the Google Cloud console to attach a security policy to
an external proxy Network Load Balancer or a classic proxy Network Load Balancer.
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed.
In the middle of the page, click the Targets tab.
Click Apply policy to new target .
Click Add Target .
In the Target list, select a target, and then click Add .
gcloud
When you attach a backend security policy to a backend service, use the
gcloud compute backend-services command and the --security-policy flag:
gcloud compute backend-services update my-backend \
--security-policy my-policy
When you attach an edge security policy to a backend service, use the
gcloud compute backend-services command and the --edge-security-policy
flag:
gcloud compute backend-services update my-backend \
--edge-security-policy my-policy
Remove a security policy from a backend service
Use these instructions to remove a Cloud Armor backend security policy
or edge security policy from a backend service.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed.
In the middle of the page, click the Targets tab.
Select the target backend service from which you are removing the
policy.
Click Remove .
In the Remove target message, click Remove .
gcloud
When you remove a backend security policy, use the gcloud compute
backend-services command and the --security-policy flag:
gcloud compute backend-services update my-backend \
--security-policy ""
When you remove an edge security policy, use the gcloud compute
backend-services command and the --edge-security-policy flag:
gcloud compute backend-services update my-backend \
--edge-security-policy ""
Attach a security policy to a backend bucket
Use these instructions to attach a Cloud Armor edge security policy to
a backend bucket. An edge security policy can be attached to more than one
backend bucket.
Note: Only edge security policies can be attached to backend buckets.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed.
In the middle of the page, click the Targets tab.
Click Apply policy to new target .
Click Add Target .
In the Target list, select a target, and then click Add .
gcloud
When you attach an edge security policy to a backend bucket, use the cloud
compute backend-buckets command and the --edge-security-policy flag:
gcloud compute backend-services update my-bucket \
--edge-security-policy my-edge-policy
Remove a security policy from a backend bucket
Use these instructions to remove a Cloud Armor edge security policy
from a backend bucket.
Console
In the Google Cloud console, go to the Cloud Armor policies
page.
Go to Cloud Armor policies
On the Security policies page, click the name of the security
policy. The Policy details page is displayed.
In the middle of the page, click the Targets tab.
Select the target backend service from which you are removing the
policy.
Click Remove .
In the Remove target message, click Remove .
gcloud
When you remove an edge security policy from a backend bucket, use the
cloud compute backend-buckets command and the --edge-security-policy
flag:
gcloud compute backend-services update my-bucket \
--edge-security-policy ""
Import and export security policies
Use the following sections to import and export security policies as YAML or
JSON files.
Export security policies
You can export a Cloud Armor security policy as a YAML or JSON file
using the Google Cloud CLI. This feature provides the following benefits:
Save a copy for version control or backup : exporting provides a local
copy of your policy. You can save this copy in source control systems as a
backup, or to track changes over time. You can re-import it later to restore
a prior version of your policy if needed.
Modify and update policies locally : you can modify exported policies
offline using your preferred text editor. After making changes, re-import
the updated policy to apply your modifications to Cloud Armor.
gcloud
In the following command, NAME is the name of the
security policy. Valid file formats are YAML and JSON. If you don't
provide the file format, Cloud Armor uses the default YAML.
gcloud compute security-policies export NAME \
--file-name FILE_NAME \
--file-format FILE_FORMAT
The following example exports the my-policy security policy to the
my-file file in the YAML format:
gcloud compute security-policies export my-policy \
--file-name my-file \
--file-format yaml
The following example shows an exported security policy:
description: my description
fingerprint: PWfLGDWQDLY=
id: '123'
name: my-policy
rules:
- action: allow
description: default rule
match:
config:
srcIpRanges:
- '*'
versionedExpr: SRC_IPS_V1
preview: false
priority: 2147483647
selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy
You can modify the exported file with any text editor, and then
import it back to Google Cloud by using the
import command.
Import security policies
You can import Cloud Armor security policies from a YAML or JSON file
by using the Google Cloud CLI. You can't use the import command to update an
existing policy's rules. Instead, you must update rules one-by-one by using the
Updating a single rule in a security policy procedure, or all
at once by using the Atomically updating multiple rules in a security
policy procedure.
gcloud
To import security policies, use the gcloud compute security-policies
import NAME command. Replace NAME with
the name of the security policy that you are importing. If you don't provide
the file format, the correct format is assumed based on the file structure.
If the structure is invalid, you see an error.
gcloud compute security-policies import NAME \
--file-name FILE_NAME \
[--file-format FILE_FORMAT ]
For example, the following command updates the policy my-policy by
importing the file my-file .
gcloud compute security-policies import my-policy \
--file-name my-file \
--file-format json
If the policy's
fingerprint is out of
date when you import it, Cloud Armor shows an error. This means
that the policy has been modified since you last exported it. To fix this,
use the describe command on the policy to get the latest fingerprint.
Merge any differences between the described policy and your policy, and then
replace the outdated fingerprint with the latest one.
Note: Exporting and importing security policies is useful for version control
and local modification but not for migrating a policy from one project to
another.
List available preconfigured rules
List preconfigured rules to view the predefined application protection rules and
signatures such as the OWASP Core Rule
Set that Cloud Armor
provides. These preconfigured rules contain multiple built-in signatures that
Cloud Armor uses to evaluate against incoming requests. You add these
preconfigured rules to new or existing rules by using the custom rules language
reference .
For more information, see preconfigured
rules .
gcloud
Run the gcloud compute security-policies
list-preconfigured-expression-sets command:
gcloud compute security-policies list-preconfigured-expression-sets
The follow example shows the form of the output from the command:
EXPRESSION_SET
expression-set-1
RULE_ID SENSITIVITY
expression-set-1-id-1 sensitivity-value-1
expression-set-1-id-2 sensitivity-value-2
expression-set-2
alias-1
RULE_ID SENSITIVITY
expression-set-2-id-1 sensitivity-value-1
expression-set-2-id-2 sensitivity-value-2
The follow example includes a sample of the actual output from the command.
Note that the actual output would include all of the rules that are listed
in Tuning Cloud Armor WAF rules .
gcloud compute security-policies list-preconfigured-expression-sets
EXPRESSION_SET
sqli-canary
RULE_ID SENSITIVITY
owasp-crs-v042200-id942120-sqli 2
…
xss-canary
RULE_ID SENSITIVITY
owasp-crs-v042200-id941110-xss 1
owasp-crs-v042200-id941120-xss 2
…
sourceiplist-fastly
sourceiplist-cloudflare
sourceiplist-imperva
What's next
Tune web application firewall (WAF) rules
Troubleshoot issues
Use the custom rules language reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
