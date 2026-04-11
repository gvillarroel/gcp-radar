---
title: "Logs and metrics \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/monitor-logs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/monitor-logs
  title: "Logs and metrics \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Guides
Send feedback
Logs and metrics
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how Secure Web Proxy logs various types of information about its
operations and how to use Cloud Monitoring API metrics to analyze the performance
of the proxy.
Logs
Secure Web Proxy uses Cloud Logging to let you capture information and
perform various tasks in the following key areas:
Monitoring and compliance
Enforce compliance with regulations, improve network security, and
provide visibility into the outbound web traffic that's sent to allowed
external destinations.
Acquire valuable layers of control and visibility over workload traffic.
Gain critical insights for effective Security Operations Center (SOC)
monitoring.
Use logs to detect and track security events to respond to threats
proactively.
Deployment and configuration
Track your initial infrastructure setup, user account creation, and
configuration changes.
Monitor for potential errors to help ensure a smooth and secure
deployment.
Understand the impact of policy-tuning adjustments and optimize your
protection.
Types of logs
Secure Web Proxy uses Logging to capture and store the
following types of logs:
Cloud Audit Logs : capture
administrative changes and data access to your
Secure Web Proxy resources. These logs include the following:
Admin Activity audit logs for
API calls and other actions that modify your
Secure Web Proxy resources like gateways and policies. Admin
Activity logs are always enabled.
Data Access audit logs , if enabled.
Proxy transaction logs :
capture details about specific web requests that
your Secure Web Proxy processes. These logs provide insights
into the traffic flow, policy enforcement, and performance of your
Secure Web Proxy instance.
Configure log alerts
You can configure alerts for events that Secure Web Proxy writes to
Logging, such as traffic denials or specific rule matches. For
general instructions about how to set up these alerts, see
Configure log-based alerts .
Here are a few examples of queries that you can use to configure log-based
alerts for Secure Web Proxy:
Alert for traffic denied by a Secure Web Proxy policy
Use the following query to trigger an alert when your Secure Web Proxy policy
denies a request:
logName="projects/ PROJECT_ID /logs/networkservices.googleapis.com%2Fgateway_requests"
resource.type="networkservices.googleapis.com/Gateway"
jsonPayload.enforcedGatewaySecurityPolicy.matchedRules.action="DENIED"
Replace PROJECT_ID with the ID of your target
Google Cloud project.
Alert for traffic denied by a Secure Web Proxy rule
Use the following query to trigger an alert when a specific Secure Web Proxy
rule (such as, my-specific-deny-rule ) denies a request:
logName="projects/ PROJECT_ID /logs/networkservices.googleapis.com%2Fgateway_requests"
resource.type="networkservices.googleapis.com/Gateway"
jsonPayload.enforcedGatewaySecurityPolicy.matchedRules.action="DENIED"
AND jsonPayload.enforcedGatewaySecurityPolicy.matchedRules.name=~"projects/ PROJECT_ID /locations/ REGION /gatewaySecurityPolicies/ POLICY_NAME /rules/my-specific-deny-rule$"
Replace the following:
PROJECT_ID : ID of your target Google Cloud project
REGION : region of your Secure Web Proxy instance
POLICY_NAME : name of your Secure Web Proxy policy
Alert for high latency requests
Use the following query to get notified when requests exceed a certain latency,
such as five seconds:
logName="projects/' PROJECT_ID '/logs/networkservices.googleapis.com%2Fgateway_requests"
resource.type="networkservices.googleapis.com/Gateway"
latency >= "5s"
Replace PROJECT_ID with the ID of your target
Google Cloud project.
View logs in Cloud Logging
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
Select your Google Cloud project.
Use the drop-down menus to select either the
networkservices.googleapis.com/Gateway resource or your Secure Web Proxy
instance.
For more information, see
Using the Logs Explorer .
Examples of log entries
Secure Web Proxy generates detailed log entries each time it processes a
request, keeping track of its actions and applied policies. The following
examples show how Secure Web Proxy logs work.
Example of an allow log entry
The following log entry shows that the Secure Web Proxy instance intercepted
and inspected the HTTPS traffic for
www.example.com ,
and then allowed it to proceed to the destination website. The policy and rule
names are swp-policy and allow-port-443 , respectively.
Field
Values
enforcedGatewaySecurityPolicy
{
"requestWasTlsIntercepted": true,
"hostname": "www.example.com",
"matchedRules": [
{
"action": "ALLOWED",
"name": "projects/76537/locations/us-central1/gatewaySecurityPolicies/swp-policy/rules/allow-port-443"
}
]
}
httpRequest
{
"requestMethod": "GET",
"requestUrl": "https://www.example.com/",
"requestSize": "41",
"status": 200,
"responseSize": "1446",
"userAgent": "curl/7.74.0",
"remoteIp": "10.128.0.12:35418",
"serverIp": "93.184.216.34:443",
"latency": "0.051800s",
"protocol": "HTTP/2"
}
resource
{
"type": "networkservices.googleapis.com/Gateway",
"labels": {
"gateway_name": "multi-level-tlds",
"network_name": "projects/76537/global/networks/default",
"location": "us-central1",
"resource_container": "",
"gateway_type": "SECURE_WEB_GATEWAY"
}
}
timestamp
"2024-02-15T16:56:19.570534Z"
severity
"INFO"
logName
"projects/76537/logs/networkservices.googleapis.com%2Fgateway_requests"
receiveTimestamp
"2024-02-15T16:56:20.714988329Z"
Example of a deny log entry
This log entry shows that the Secure Web Proxy instance inspected the traffic
for www.example.com:443 and denied the HTTPS
request due to the default_denied rule in the Secure Web Proxy policy.
Field
Values
enforcedGatewaySecurityPolicy
{
"hostname": "www.example.com:443",
"matchedRules": [
{
"name": "default_denied",
"action": "DENIED"
}
]
}
httpRequest
{
"requestMethod": "CONNECT",
"requestSize": "122",
"status": 403,
"responseSize": "141",
"userAgent": "curl/7.74.0",
"remoteIp": "10.128.0.12:36338",
"latency": "0.000133s",
"protocol": "HTTP/1.1"
}
resource
{
"type": "networkservices.googleapis.com/Gateway",
"labels": {
"gateway_type": "SECURE_WEB_GATEWAY",
"resource_container": "",
"location": "us-central1",
"network_name": "projects/gcp-1768/global/networks/default",
"gateway_name": "high-latency-repro"
}
}
timestamp
"2024-02-15T16:55:00.089727Z"
severity
"WARNING"
logName
"projects/gcp-1768/logs/networkservices.googleapis.com%2Fgateway_requests"
receiveTimestamp
"2024-02-15T16:55:04.456901833Z"
Metrics
Cloud Monitoring API metrics help you observe the performance, health, and usage
of your Secure Web Proxy instances.
Monitored resource
Metrics for Secure Web Proxy are exported under the following monitored
resource:
networkservices.googleapis.com/Gateway : represents a Secure Web Proxy
gateway instance.
The following table describes the available resources for
networkservices.googleapis.com/Gateway . You can use these resources to filter
and aggregate your monitoring data.
Label
Description
resource_container
ID of the project associated with the Secure Web Proxy gateway instance.
location
Google Cloud region where the gateway is deployed.
gateway_id
Unique name of the Secure Web Proxy gateway instance.
gateway_type
Type of gateway, which is set to SECURE_WEB_GATEWAY .
network_name
Name of the Virtual Private Cloud (VPC) network associated with the gateway.
Available metrics
The following metrics are available for the Gateway resource. All metrics are
prefixed with networkservices.googleapis.com/https/ .
Note: Use the proxy_response_code_details metric to differentiate between
successful connections and requests that are blocked by your security policies
or URL lists.
Metric type
Display name
Kind, Type, Unit
Description
networkservices.googleapis.com/https/request_count
Request count
DELTA , INT64 , 1
Total number of requests processed by the proxy.
networkservices.googleapis.com/https/request_bytes_count
Request bytes
DELTA , INT64 , By
Total number of bytes received in requests.
networkservices.googleapis.com/https/response_bytes_count
Response bytes
DELTA , INT64 , By
Total number of bytes sent in responses.
networkservices.googleapis.com/https/total_latencies
Total latencies
DELTA , DIST , ms
Time from when the first byte of a request was received until the last byte of the response was sent.
networkservices.googleapis.com/https/backend_latencies
Backend latencies
DELTA , DIST , ms
Time from when the request was sent to the backend until the first byte of the response was received.
Create a custom dashboard
To build a custom dashboard for visualizing the performance and traffic
trends of your Secure Web Proxy instances, do the following:
In the Google Cloud console, go to the Dashboards page.
Go to Dashboards
Click add_box Create Custom Dashboard .
Click add_box Add widget , and then
select the Line chart option.
In the Metric field, search for
networkservices.googleapis.com/https/request_count .
In the Filter field, you can filter by gateway_id if you have
configured multiple Secure Web Proxy instances.
In the Aggregation section, set the Alignment Period to 1 minute
and select rate for Aligner .
This converts the raw request data into a
requests per second rate, making it easier to view and analyze consistent
traffic trends over time.
To save the widget, click Apply .
What's next
Secure Web Proxy audit logging
View proxy transaction logs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
