---
title: "Example security policies \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/example-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/example-policies
  title: "Example security policies \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
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
Example security policies
Stay organized with collections
Save and categorize content based on your preferences.
This page describes example security policy configurations for different types
of load balancers and security policies.
Configure security policies for external Application Load Balancers
The following are the high-level steps for configuring Google Cloud Armor
security policies to enable rules that allow or deny traffic to the
global external Application Load Balancer or the classic Application Load Balancer:
Create a Cloud Armor security policy.
Add rules to the security policy based on IP address lists, custom expressions, or
preconfigured expression sets.
Attach the security policy to a backend service of
the global external Application Load Balancer or the classic Application Load Balancer for which you want
to control access.
Update the security policy as needed.
In the following example, you create two Cloud Armor security
policies and apply them to different backend services.
Example in which two security policies are applied to different backend services (click to enlarge).
In the example, these are the Cloud Armor security policies:
mobile-clients-policy applies to external users of your games services.
internal-users-policy applies to your organization's test-network team.
You apply mobile-clients-policy to the games service, whose backend service
is called games , and you apply internal-users-policy to the internal test
service for the testing team, whose corresponding backend service is called
test-network .
If the backend instances for a backend service are in multiple regions,
the Cloud Armor security policy associated with the service is
applicable to instances in all regions. In the preceding example, the
security policy mobile-clients-policy is applicable
to instances 1, 2, 3, and 4 in us-central and to instances 5 and 6 in
us-east .
Create the example
Use these instructions to create the example configuration discussed in the
previous section.
Console
Configure the security policy for external users:
In the Google Cloud console, go to the Google Cloud Armor policies page.
Go to Google Cloud Armor policies
Click Create policies .
In the Name field, enter mobile-clients-policy .
In the Description field, enter Policy for external users .
For Default rule action , select Deny .
For Deny status , select 404 (Not Found) .
Click Next step .
Add more rules:
Click Add rule .
In the Description field, enter allow traffic from 192.0.2.0/24 .
For Mode , select Basic mode (IP addresses/ranges only) .
In the Match field, enter 192.0.2.0/24 .
For Action , select Allow .
In the Priority field, enter 1000 .
Click Done .
Click Next step .
Apply policy to targets:
Click Add Target .
In the Target list, select a target.
Click Done .
Click Create policy .
Optionally, enable Google Cloud Armor Adaptive Protection:
To enable Adaptive Protection, check the Enable checkbox.
Configure the security policy for internal users:
Click Create policies .
In the Name field, enter internal-users-policy .
In the Description field, enter Policy for internal test users .
For Default rule action , select Deny .
For Deny status , select 502 (Bad Gateway) .
Click Next step .
Add more rules:
Click Add rule .
In the Description field, enter allow traffic from 198.51.100.0/24 .
For Mode , select Basic mode (IP addresses/ranges only) .
In the Match field, enter 198.51.100.0/24 .
For Action , select Allow .
For Preview only , select the Enable checkbox.
In the Priority field, enter 1000 .
Click Done .
Click Next step .
Apply policy to targets:
Click Add Target .
In the Target list, select a target.
Click Done .
Click Create policy .
gcloud
Create the Cloud Armor security policies:
gcloud compute security-policies create mobile-clients-policy \
--description "policy for external users"
gcloud compute security-policies create internal-users-policy \
--description "policy for internal test users"
Update the default rules to the security policies to deny traffic:
gcloud compute security-policies rules update 2147483647 \
--security-policy mobile-clients-policy \
--action "deny-404"
gcloud compute security-policies rules update 2147483647 \
--security-policy internal-users-policy \
--action "deny-502"
Add rules to the security policies:
gcloud compute security-policies rules create 1000 \
--security-policy mobile-clients-policy \
--description "allow traffic from 192.0.2.0/24" \
--src-ip-ranges "192.0.2.0/24" \
--action "allow"
gcloud compute security-policies rules create 1000 \
--security-policy internal-users-policy \
--description "allow traffic from 198.51.100.0/24" \
--src-ip-ranges "198.51.100.0/24" \
--action "allow"
Attach the security policies to the backend services:
gcloud compute backend-services update games \
--security-policy mobile-clients-policy
gcloud compute backend-services update test-network \
--security-policy internal-users-policy
Optionally, enable Adaptive Protection:
gcloud compute security-policies update mobile-clients-policy \
--enable-layer7-ddos-defense
gcloud compute security-policies update internal-users-policy \
--enable-layer7-ddos-defense
Create security policies
You can use the Google Cloud console or the gcloud CLI to create security
policies. The instructions in this section assume that you are configuring
security policies to apply to an existing global external Application Load Balancer or
classic Application Load Balancer and backend service. For an example of how to complete
the fields, see Creating the example .
Console
Create Cloud Armor security policies and rules and attach
a security policy to a backend service:
In the Google Cloud console, go to the Google Cloud Armor policies page.
Go to Google Cloud Armor policies
Click Create policies .
In the Name field, enter the name of your policy.
Optional: Enter a description of the policy.
For Policy type choose Backend security policy or Edge security
policy .
For Default rule action , select Allow for a default rule that
permits access, or select Deny for a default rule that forbids access
to an IP address or IP address range.
The default rule is the lowest priority rule that takes effect only
if no other rule applies.
If you are configuring a Deny rule, select a Deny status message.
This is the error message that Cloud Armor displays if a user
without access tries to gain access.
Regardless of the type of rule that you are configuring, click Next step .
Add more rules:
Click Add rule .
Optional: Enter a description for the rule.
Select the mode:
Basic mode : allow or deny traffic based on IP addresses or
IP ranges.
Advanced mode : allow or deny traffic based on rule
expressions.
In the Match field, specify the conditions under which the rule
applies:
Basic mode : enter IP addresses or IP ranges to match in the rule.
Advanced mode : enter an expression or subexpressions to
evaluate against incoming requests. For information about how to
write the expressions, see the
Configure custom rules language attributes .
For Action , select Allow or Deny to allow or deny traffic
if the rule matches.
To enable preview mode, select the Enable checkbox. In preview mode,
you can see how the rule behaves, but the rule is not enabled.
Enter the rule's Priority . This can be any positive integer from 0 to
2,147,483,646 inclusive. For more information about the evaluation order,
see Rule evaluation order .
Click Done .
To add more rules, click Add rule and repeat the previous steps.
Otherwise, click Next step .
Apply policy to targets:
Click Add Target .
In the Target list, select a target.
To add more targets, click Add Target .
Click Done .
Click Create policy .
gcloud
To create a new Cloud Armor security policy, use the
gcloud compute security-policies create command.
In the type field, use CLOUD_ARMOR to create a backend security
policy or CLOUD_ARMOR_EDGE to create an edge security policy. The
type flag is optional; if no type is specified, a backend security
policy is created by default:
gcloud compute security-policies create NAME \
[--type=CLOUD_ARMOR|CLOUD_ARMOR_EDGE] \
[--file-format= FILE_FORMAT | --description= DESCRIPTION ] \
[--file-name= FILE_NAME ]
Replace the following:
NAME : the name of the security policy
FILE_FORMAT : the format of the file specified in --file-name ; specify yaml or json
DESCRIPTION : the description of the security policy
FILE_NAME : the name of a file that contains either a YAML or JSON export of the security policy
The following command updates a policy that you previously created,
turns JSON parsing on, and changes the log level to VERBOSE :
gcloud compute security-policies update my-policy \
--json-parsing=STANDARD \
--log-level=VERBOSE
To add rules to a security policy, use the gcloud
compute security-policies rules create PRIORITY command.
gcloud compute security-policies rules create PRIORITY \
[--security-policy POLICY_NAME ] \
[--description DESCRIPTION ] \
--src-ip-ranges IP_RANGE,... | --expression EXPRESSION \
--action=[ allow | deny-403 | deny-404 | deny-502 ] \
[--preview]
Replace the following:
PRIORITY : the priority to assign to the rule in
the policy. For information about how rule priority works, see
Rule evaluation order
POLICY_NAME : the name of your security policy
DESCRIPTION : a description of the rule
IP_RANGE,... : a comma-separated list of IP address ranges
EXPRESSION : a Cloud Armor rules language expression
For example, the following command adds a rule to block traffic from
IP address ranges 192.0.2.0/24 and 198.51.100.0/24 . The rule has
priority 1000, and it is a rule in a policy called my-policy .
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--description "block traffic from 192.0.2.0/24 and 198.51.100.0/24" \
--src-ip-ranges "192.0.2.0/24","198.51.100.0/24" \
--action "deny-403"
With the --preview flag added, the rule is added to the policy, but
not enforced, and any traffic that triggers the rule is only logged.
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--description "block traffic from 192.0.2.0/24 and 198.51.100.0/24" \
--src-ip-ranges "192.0.2.0/24","198.51.100.0/24" \
--action "deny-403" \
--preview
Use the --expression flag to specify a custom condition. For more
information, see
Configure custom rules language attributes .
The following command adds a rule to allow traffic from the IP address
1.2.3.4 and contains the string example in the user-agent header:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \
--action allow \
--description "Block User-Agent 'example'"
The following command adds a rule to block requests if the request's
cookie contains a specific value:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "has(request.headers['cookie']) && request.headers['cookie'].contains('cookie_name=cookie_value')" \
--action "deny-403" \
--description "Cookie Block"
The following command adds a rule to block requests from the region
AU :
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "origin.region_code == 'AU'" \
--action "deny-403" \
--description "AU block"
The following command adds a rule to block requests from the region AU
that are not in the specified IP range:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "origin.region_code == 'AU' && !inIpRange(origin.ip, '1.2.3.0/24')" \
--action "deny-403" \
--description "country and IP block"
The following command adds a rule to block requests with a URI that
matches a regular expression:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "request.path.matches('/example_path/')" \
--action "deny-403" \
--description "regex block"
The following command adds a rule to block requests if the Base64
decoded value of the user-id header contains a specific value:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \
--action "deny-403" \
--description "country and IP block"
The following command adds a rule that uses a preconfigured expression
set to mitigate SQLi attacks:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "evaluatePreconfiguredWaf('sqli-v422-stable')" \
--action "deny-403"
The following command adds a rule that uses a preconfigured expression
to allow access from all IP addresses on a named IP address list:
gcloud compute security-policies rules create 1000 \
--security-policy my-policy \
--expression "evaluatePreconfiguredWaf('sourceiplist-fastly')" \
--action "allow"
Configure security policies for regional external Application Load Balancers
This section contains information about configuring regionally scoped
Cloud Armor security policies for regional external Application Load Balancers.
Protect regionally load balanced workloads
Use the following steps to configure a security policy to protect your
regionally scoped backend service:
Create a regionally scoped security policy.
gcloud compute security-policies create POLICY_NAME \
--type=CLOUD_ARMOR \
--region= REGION
Replace the following:
POLICY_NAME : the name of the security policy
REGION : the region in which to create the security policy
Attach the regionally scoped security policy to a regionally scoped backend
service. Replace BACKEND_NAME with the name of your
existing regionally scoped backend service.
gcloud compute backend-services update BACKEND_NAME \
--security-policy= POLICY_NAME \
--region= REGION
Apply a regionally scoped Cloud Armor security policy
Consider an example in which you are a security administrator who wants to
satisfy a residency requirement that all of your backend workloads and WAF rules
are deployed in a specific region. Assume that you have done the following
beforehand:
You created regionally scoped load-balanced backend services in the
region.
You disabled any existing globally scoped security policies in your
deployment.
You created and attached a regionally scoped security policy in the same
region (as in the previous section).
You can add WAF rules and other advanced rules to your policy while satisfying
the requirement by using the following example commands:
Add a WAF rule to the policy:
gcloud compute security-policies rules create 1000 --action=deny-404 \
--expression="evaluatePreconfiguredWaf('xss-v422-stable', ['owasp-crs-v042200-id941100-xss', 'owasp-crs-v042200-id941160-xss'])" \
--security-policy= POLICY_NAME \
--region= REGION
Replace the following:
POLICY_NAME : the name of the security policy
REGION : the region of the security policy
Add an advanced rule to the policy:
gcloud compute security-policies rules create 1000 --action=allow \
--expression="has(request.headers['cookie']) && request.headers['cookie'].contains('80=EXAMPLE')" \
--security-policy= POLICY_NAME \
--region= REGION
Add a rate limiting rule to the policy:
gcloud compute security-policies rules create 1000 --action=throttle \
--src-ip-ranges="1.1.1.1/32" \
--rate-limit-threshold-count=1000 \
--rate-limit-threshold-interval-sec=120 \
--conform-action="allow" \
--exceed-action="deny-429" \
--enforce-on-key=IP \
--ban-duration-sec=999 \
--ban-threshold-count=5000 \
--ban-threshold-interval-sec=60 \
--security-policy= POLICY_NAME \
--region= REGION
Replace the following:
POLICY_NAME : the name of the security policy
REGION : the region of the security policy
What's next
Configure Cloud Armor security policies
Learn more about rate limiting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
