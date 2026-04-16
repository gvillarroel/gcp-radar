---
title: "Google Cloud metrics: I through O \_|\_ Cloud Monitoring \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_i_o
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_i_o
  title: "Google Cloud metrics: I through O \_|\_ Cloud Monitoring \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Reference
Send feedback
Google Cloud metrics: I through O
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the metric types defined by
Google Cloud services when the service name begins with the
letter i through o . For example, this page lists all metric types whose
prefix is iam.googleapis.com . For information about other
metric types, see Google Cloud metrics overview .
For a general explanation of the entries in the tables,
including information about values like DELTA and GAUGE ,
see Metric types .
To chart or monitor metric types with values of type STRING , you
must use Monitoring Query Language (MQL), and you must convert the value into a
numeric value. For information about MQL string-conversion methods,
see String .
For information about the units used in the metric lists, see
the unit field in the MetricDescriptor reference.
For information about statements of the form
“Sampled every x seconds” and
“After sampling, data is not visible for up to y seconds”,
see Additional information: metadata .
The resource-hierarchy level tells you if the metric is written at the
project, organization, or folder level(s). When the level is not specified
in the metric descriptor, the metric writes at the project level by default.
For pricing information, see Google Cloud Observability pricing .
For information about the meaning of launch stages such as
GA (General Availability) and BETA (Preview), see
Product launch stages .
Cloud Endpoints : APIs managed by Cloud Endpoints write
serviceruntime metrics against the
api
monitored-resource type.
Note: To monitor the availability of a service, create an uptime check.
These checks create
monitoring.googleapis.com/uptime_check/check_passed
metric data. Don't configure an alerting
policy to track a metric type such as compute.googleapis.com/instance/uptime
if your goal is to monitor the availability of a service.
For information about why such alerting policies might not function
as you expect, see
Uptime policy doesn't create expected alerts .
For information about how to create an uptime check, see
Managing uptime checks .
Google Cloud metrics
Metrics from Google Cloud .
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
iam
Metrics from Identity and Access Management .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with iam.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
service_account/authn_events_count
GA
(project)
Service account authentication events
DELTA , INT64 , 1
iam_service_account
Number of authentication events for a service account. Sampled every 600 seconds. After sampling, data is not visible for up to 10800 seconds.
service_account/key/authn_events_count
GA
(project)
Service account key authentication events
DELTA , INT64 , 1
iam_service_account
Number of authentication events for a service account key. Sampled every 600 seconds. After sampling, data is not visible for up to 10800 seconds.
key_id :
The key ID associated with the authentication event.
workforce_identity_federation/count
BETA
(project)
Workforce identity federation count
DELTA , INT64 , 1
iam.googleapis.com/WorkforcePoolProvider
Count of token exchanges using workforce identity federation.
result :
If the request succeeds, the value will be 'success'. Otherwise, the value will match one of the possible OAuth 2.0 error types, for instance, 'invalid_client'.
workload_identity_federation/count
BETA
(project)
Workload identity federation count
DELTA , INT64 , 1
iam.googleapis.com/WorkloadIdentityPoolProvider
Count of token exchanges using workload identity federation.
result :
If the request succeeds, the value will be 'success'. Otherwise, the value will match one of the possible OAuth 2.0 error types, for instance, 'invalid_client'.
workload_identity_federation/key_usage_count
BETA
(project)
Workload identity federation key usage count
DELTA , INT64 , 1
iam.googleapis.com/WorkloadIdentityPoolProvider
Count of times a key is used as part of workload identity federation.
key :
The identifier of a public key used during a workload identity federation.
use :
What the key was used for, one of ['verify' - verify a signature]. Additional values might be added in the future.
identitytoolkit
Metrics from Identity Platform .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with identitytoolkit.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
mfa/totp/enrollment_attempt_count
BETA
(project)
MFA TOTP enrollment attempts
DELTA , INT64 , 1
identitytoolkit_tenant
Count of MFA TOTP enrollment attempts.
provider :
The identity provider for the first-factor, e.g. password, Google, Facebook, etc.
response_code :
(INT64)
The HTTP status code.
mfa/totp/sign_in_challenge_attempt_count
BETA
(project)
MFA TOTP sign in challenge attempts
DELTA , INT64 , 1
identitytoolkit_tenant
Count of MFA TOTP sign in challenge attempts.
provider :
The identity provider for the first-factor, e.g. password, Google, Facebook, etc.
response_code :
(INT64)
The HTTP status code.
password_policy/weak_password_sign_in_count
BETA
(project)
Weak password sign-ins
DELTA , INT64 , 1
identitytoolkit_tenant
Count of successful sign-ins with weak password.
client_type :
Client platform, one of [web, android, ios].
quota/free_daily_signin/exceeded
BETA
(project)
Free Daily Sign-in Quota Exceeded
DELTA , INT64 , 1
identitytoolkit_project
The number of sign-ins that have exceeded the free daily new sign-in quota.
pricing_tier :
The pricing tier of the identity provider used to sign in.
recaptcha/risk_scores
BETA
(project)
reCAPTCHA bot detection risk score distribution
DELTA , DISTRIBUTION , 1
identitytoolkit_tenant
Distribution of reCAPTCHA bot scores. Scores range from 0 (high risk) to 1 (low risk).
provider :
The identity provider, one of [passwordProvider, phoneProvider].
api_name :
The reCAPTCHA supported API name, one of [signUpPassword, signInWithPassword, getOobCode, sendVerificationCode, mfaSmsEnrollment, mfaSmsSignIn].
client_type :
Client platform, one of [web, android, ios].
recaptcha/sms_tf_risk_scores
BETA
(project)
reCAPTCHA sms toll fraud detection risk score distribution
DELTA , DISTRIBUTION , 1
identitytoolkit_tenant
Distribution of reCAPTCHA sms toll fraud detection scores. Scores range from 0 (low risk) to 1 (high risk).
provider :
The identity provider, one of [phoneProvider].
api_name :
The reCAPTCHA supported API name, one of [sendVerificationCode, mfaSmsEnrollment, mfaSmsSignIn].
client_type :
Client platform, one of [web, android, ios].
recaptcha/token_count
BETA
(project)
reCAPTCHA token count
DELTA , INT64 , 1
identitytoolkit_tenant
Count of reCAPTCHA tokens in different states.
provider :
The identity provider, one of [passwordProvider, phoneProvider].
api_name :
The reCAPTCHA supported API name, one of [signUpPassword, signInWithPassword, getOobCode, sendVerificationCode, mfaSmsEnrollment, mfaSmsSignIn].
client_type :
Client platform, one of [web, android, ios].
token_state :
The state of a token, one of [expired, duplicate, missing, invalid, valid].
recaptcha/verdict_count
BETA
(project)
reCAPTCHA verdicts count
DELTA , INT64 , 1
identitytoolkit_tenant
Count of evaluation results based on the reCAPTCHA configuration.
provider :
The identity provider, one of [passwordProvider, phoneProvider].
api_name :
The reCAPTCHA supported API name, one of [signUpPassword, signInWithPassword, getOobCode, sendVerificationCode, mfaSmsEnrollment, mfaSmsSignIn].
client_type :
Client platform, one of [web, android, ios].
verdict_state :
The state of a verdict, one of [passed, failed_in_audit, failed_in_enforce].
usage/blocked_sms_count
BETA
(project)
Blocked SMS
DELTA , INT64 , 1
identitytoolkit_project
The number of SMS-based verification codes that were blocked from being sent.
pricing_tier :
The pricing tier of the country where the SMS is sent.
country_calling_code :
The country calling code of the phone number where the SMS is sent.
region_code :
The two-letter region code of the phone number where the SMS is sent.
sms_purpose :
The purpose of the SMS-based verification code (i.e. phone auth, MFA).
usage/daily_new_signin_count
BETA
(project)
Daily New Sign-ins
DELTA , INT64 , 1
identitytoolkit_project
The number of new daily active users. A sign-in or token refresh is counted as a new daily active user if the user has not previously signed in that day.
pricing_tier :
The pricing tier of the identity provider used to sign in.
is_anon :
Whether or not the sign-in is an anonymous auth sign-in.
usage/monthly_new_signin_count
BETA
(project)
Monthly New Sign-ins
DELTA , INT64 , 1
identitytoolkit_project
The number of new monthly active users. A sign-in or token refresh is counted as a new monthly active user if the user has not previously signed in that month.
pricing_tier :
The pricing tier of the identity provider used to sign in.
is_anon :
Whether or not the sign-in is an anonymous auth sign-in.
usage/sent_sms_count
BETA
(project)
Sent SMS
DELTA , INT64 , 1
identitytoolkit_project
The number of SMS-based verification codes sent.
pricing_tier :
The pricing tier of the country where the SMS is sent.
country_calling_code :
The country calling code of the phone number where the SMS is sent.
region_code :
The two-letter region code of the phone number where the SMS is sent.
sms_purpose :
The purpose of the SMS-based verification code (i.e. phone auth, MFA).
usage/verification_sms_count
BETA
(project)
Verified SMS
DELTA , INT64 , 1
identitytoolkit_project
The number of successful SMS-based verifications.
pricing_tier :
The pricing tier of the country where the SMS is sent.
country_calling_code :
The country calling code of the phone number where the SMS is sent.
region_code :
The two-letter region code of the phone number where the SMS is sent.
sms_purpose :
The purpose of the SMS-based verification code (i.e. phone auth, MFA).
ids
Metrics from Cloud IDS .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with ids.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
received_bytes_count
BETA
(project)
Received bytes
DELTA , INT64 , By
ids.googleapis.com/Endpoint
Total IDS Endpoint received bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
received_packets_count
BETA
(project)
Received packets
DELTA , INT64 , 1
ids.googleapis.com/Endpoint
Total IDS Endpoint received packets. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
integrations
Metrics from Application Integration .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with integrations.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
integration/execution_count
BETA
(project)
Integration execution count
DELTA , INT64 , 1
integrations.googleapis.com/IntegrationVersion
Count of integration executions since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 86400 seconds.
status :
Integration execution status, one of [SUCCEEDED, FAILED, CANCELLED, RETRY_ON_HOLD].
trigger_name :
Type of the trigger used for Integration execution, for example, "API trigger" or "Cloud Pub/Sub trigger".
trigger_id :
Trigger Id which triggered the execution of Integration.
error_enum :
Canonical code of the last error occurred during Integration execution, for example, "PERMISSION_DENIED" or "INVALID_ARGUMENT".
is_retry :
(BOOL)
Indicates whether the integration execution is a retry or a first attempt, one of [true, false].
integration/execution_latencies
BETA
(project)
Integration execution latency
DELTA , DISTRIBUTION , ms
integrations.googleapis.com/IntegrationVersion
A distribution of time taken by the integrations to complete execution. Sampled every 60 seconds. After sampling, data is not visible for up to 86400 seconds.
status :
Integration execution status, one of [SUCCEEDED, FAILED, CANCELLED, RETRY_ON_HOLD].
trigger_name :
Type of the trigger used for Integration execution, for example, "API trigger" or "Cloud Pub/Sub trigger".
trigger_id :
Trigger Id which triggered the execution of Integration.
error_enum :
Canonical code of the last error occurred during Integration execution, for example, "PERMISSION_DENIED" or "INVALID_ARGUMENT".
is_retry :
(BOOL)
Indicates whether the integration execution is a retry or a first attempt, one of [true, false].
processed_bytes_count
BETA
(project)
Processed bytes count
DELTA , INT64 , By
integrations.googleapis.com/IntegrationVersion
Size of data consumed by the integration executions since the last sample. It is computed by taking the size of input and output parameters to the integration, along with the request and response payload size for Rest and Connector tasks. Sampled every 60 seconds. After sampling, data is not visible for up to 86400 seconds.
step_type :
Indicates whether the data is processed by parameters of the integration, or task request and response payload, one of [Trigger, Task].
step_name :
Type of the task used for processing request and response payload, or type of the trigger used for processing parameters of the integration.
step_id :
Task number used for processing request and response payload, or Trigger Id used for processing parameters of the integration.
step/execution_count
BETA
(project)
Step execution count
DELTA , INT64 , 1
integrations.googleapis.com/IntegrationVersion
Count of step (task or trigger) executions since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 86400 seconds.
status :
Step execution status, for example "SUCCEEDED" or "FAILED".
step_type :
Type of the step executed, one of [Trigger, Task].
step_name :
Type of the trigger or task executed, for example, "API Trigger" or "Data Mapping task".
step_id :
Trigger Id or task number depending upon which type of step is executed.
error_enum :
Canonical code of the error occurred during the step execution, for example, "PERMISSION_DENIED" or "INVALID_ARGUMENT".
is_retry :
(BOOL)
Indicates whether the step execution is a retry or a first attempt, one of [true, false].
is_step_external :
(BOOL)
Indicates whether the task executed is internal or external, one of ["true" - external tasks such as Rest or Connector task.; "false" - internal tasks such as Data Mapper or Inline Scripting task].
step/execution_latencies
BETA
(project)
Step execution latency
DELTA , DISTRIBUTION , ms
integrations.googleapis.com/IntegrationVersion
A distribution of time taken by the steps (task) to complete execution. Sampled every 60 seconds. After sampling, data is not visible for up to 86400 seconds.
status :
Step execution status, for example "SUCCEEDED" or "FAILED".
step_name :
Type of the trigger or task executed, for example, "API Trigger" or "Data Mapping task".
step_id :
Trigger Id or task number depending upon which type of step is executed.
error_enum :
Canonical code of the error occurred during the step execution, for example, "PERMISSION_DENIED" or "INVALID_ARGUMENT".
is_retry :
(BOOL)
Indicates whether the step execution is a retry or a first attempt, one of [true, false].
is_step_external :
(BOOL)
Indicates whether the task executed is internal or external, one of ["true" - external tasks such as Rest or Connector task.; "false" - internal tasks such as Data Mapper or Inline Scripting task].
interconnect
Metrics from Cloud Interconnect . For Dedicated Interconnect, Monitoring and Google Cloud collect measurements for the network/interconnect and network/attachment metric types. For Partner Interconnect, Monitoring and Google Cloud collect measurements for the network/attachment metric type only.
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with interconnect.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
network/attachment/capacity
GA
(project)
Network Capacity
GAUGE , INT64 , By/s
interconnect_attachment
Network Capacity of the Attachment. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/attachment/egress_dropped_packets_count
GA
(project)
Egress dropped packets
DELTA , INT64 , {packets}
interconnect_attachment
Number of outbound packets dropped since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
drop_reason :
Reason packet was dropped.
l3_protocol :
Layer 3 protocol.
network/attachment/ingress_dropped_packets_count
GA
(project)
Ingress dropped packets
DELTA , INT64 , {packets}
interconnect_attachment
Number of inbound packets dropped since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
drop_reason :
Reason packet was dropped.
l3_protocol :
Layer 3 protocol.
network/attachment/received_bytes_count
GA
(project)
Ingress Bytes
DELTA , INT64 , By
interconnect_attachment
Number of inbound bytes received. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/attachment/received_bytes_count_by_l3_protocol
GA
(project)
Ingress bytes by L3 protocol
DELTA , INT64 , By
interconnect_attachment
Number of inbound bytes received by L3 Protocol. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
l3_protocol :
Layer 3 protocol.
network/attachment/received_packets_count
GA
(project)
Ingress Packets
DELTA , INT64 , {packets}
interconnect_attachment
Number of inbound packets received. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/attachment/received_packets_count_by_l3_protocol
GA
(project)
Ingress packets by L3 protocol
DELTA , INT64 , {packets}
interconnect_attachment
Number of inbound packets received by L3 Protocol. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
l3_protocol :
Layer 3 protocol.
network/attachment/sent_bytes_count
GA
(project)
Egress Bytes
DELTA , INT64 , By
interconnect_attachment
Number of outbound bytes sent. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/attachment/sent_bytes_count_by_l3_protocol
GA
(project)
Egress bytes by L3 protocol
DELTA , INT64 , By
interconnect_attachment
Number of outbound bytes sent by L3 Protocol. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
l3_protocol :
Layer 3 protocol.
network/attachment/sent_packets_count
GA
(project)
Egress Packets
DELTA , INT64 , {packets}
interconnect_attachment
Number of outbound packets sent. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/attachment/sent_packets_count_by_l3_protocol
GA
(project)
Egress packets by L3 protocol
DELTA , INT64 , {packets}
interconnect_attachment
Number of outbound packets sent by L3 Protocol. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
l3_protocol :
Layer 3 protocol.
network/interconnect/capacity
GA
(project)
Network Capacity
GAUGE , INT64 , By/s
interconnect
Active capacity of the interconnect. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/dropped_packets_count
GA
(project)
Dropped Packets
DELTA , DOUBLE , {packets}
interconnect
Number of outbound packets dropped due to link congestion. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/link/aai/bytes_count
GA
(project)
Application awareness on Interconnect: Bytes Count
DELTA , DOUBLE , By
interconnect
Number of bytes on the Interconnect that has application awareness enabled. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
direction :
Direction of the traffic, one of [ingress, egress].
outcome :
Outcome for the byte, one of [sent, dropped].
traffic_class :
Traffic class, one of [TC1, TC2, TC3, TC4, TC5, TC6].
network/interconnect/link/aai/packets_count
GA
(project)
Application awareness on Interconnect: Packets Count
DELTA , DOUBLE , {packets}
interconnect
Number of packets on the Interconnect that has application awareness enabled. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
direction :
Direction of the traffic, one of [ingress, egress].
outcome :
Outcome for the packet, one of [sent, dropped].
traffic_class :
Traffic class, one of [TC1, TC2, TC3, TC4, TC5, TC6].
network/interconnect/link/macsec/operational
GA
(project)
Link MACsec Operational
GAUGE , BOOL ,
interconnect
Operational status of MACsec (if enabled) on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/receive_dropped_packets_count
GA
(project)
Link MACsec Ingress Dropped Packets
DELTA , DOUBLE , {packets}
interconnect
The number of MACsec dropped ingress packets on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/receive_errors_count
GA
(project)
Link MACsec Ingress Errors
DELTA , DOUBLE , {errors}
interconnect
The number of MACSEC ingress errors on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/received_control_packets_count
GA
(project)
Link MACsec Ingress Control Packets
DELTA , DOUBLE , {packets}
interconnect
The number of MACsec ingress control packets on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/received_data_packets_count
GA
(project)
Link MACsec Ingress Data Packets
DELTA , DOUBLE , {packets}
interconnect
The number of MACsec ingress data packets on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/send_dropped_packets_count
GA
(project)
Link MACsec Egress Dropped Packets
DELTA , DOUBLE , {packets}
interconnect
The number of MACsec dropped egress packets on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/send_errors_count
GA
(project)
Link MACsec Egress Errors
DELTA , DOUBLE , {errors}
interconnect
The number of MACsec egress errors on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/sent_control_packets_count
GA
(project)
Link MACsec Egress Control Packets
DELTA , DOUBLE , {packets}
interconnect
The number of MACsec egress control packets on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/macsec/sent_data_packets_count
GA
(project)
Link MACsec Egress Data Packets
DELTA , DOUBLE , {packets}
interconnect
The number of MACsec egress data packets on the physical link. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/operational
GA
(project)
Circuit Operational Status
GAUGE , BOOL ,
interconnect
Whether the operational status of the circuit is 'up'. This metric is specific to individual physical circuits. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
network/interconnect/link/rx_power
GA
(project)
Circuit Receive Power
GAUGE , DOUBLE , {dBm}
interconnect
Light level received over physical circuit. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
laser_index :
(INT64)
Index of the laser channel on an individual circuit.
network/interconnect/link/tx_power
GA
(project)
Circuit Transmit Power
GAUGE , DOUBLE , {dBm}
interconnect
Light level transmitted over physical circuit. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
link_id :
Identifier for the individual physical circuit.
laser_index :
(INT64)
Index of the laser channel on an individual circuit.
network/interconnect/operational
GA
(project)
Operational Status
GAUGE , BOOL ,
interconnect
Whether the operational status of the interconnect is 'up'. This metric is specific to the aggregate LACP bundle. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/receive_errors_count
GA
(project)
Ingress Errors
DELTA , DOUBLE , {errors}
interconnect
Number of errors encountered while receiving packets. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/received_bytes_count
GA
(project)
Ingress Bytes
DELTA , DOUBLE , By
interconnect
Number of inbound bytes received. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/received_unicast_packets_count
GA
(project)
Ingress Unicast Packets
DELTA , DOUBLE , {packets}
interconnect
Number of inbound unicast packets received. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/send_errors_count
GA
(project)
Egress Errors
DELTA , DOUBLE , {errors}
interconnect
Number of errors encountered while sending packets. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/sent_bytes_count
GA
(project)
Egress Bytes
DELTA , DOUBLE , By
interconnect
Number of outbound bytes sent. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/interconnect/sent_unicast_packets_count
GA
(project)
Egress Unicast Packets
DELTA , DOUBLE , {packets}
interconnect
Number of outbound unicast packets sent. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/dst_to_src_received_bytes_count
GA
(project)
Egress Bytes, measured at the source Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes sent to the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/dst_to_src_received_packets_count
GA
(project)
Egress Packets, measured at the source Interconnect.
DELTA , INT64 , {packets}
wire_endpoint
Number of packets sent to the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/dst_to_src_sent_bytes_count
GA
(project)
Ingress Bytes, measured at the destination Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes received from the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/dst_to_src_sent_packets_count
GA
(project)
Ingress Packets, measured at the destination Interconnect.
DELTA , INT64 , {packets}
wire_endpoint
Number of packets received from the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/excess_dropped_bytes_count
GA
(project)
Total bandwidth excess dropped bytes, measured ingress at the source Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes dropped due to exceeding the sum of unmetered and metered bandwidth limits. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/inline_probe_count
GA
(project)
Inline Probes
DELTA , INT64 , {packets}
wire_endpoint
The number of inline probes with a given status in the last minute. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
SUCCESS or FAILURE.
network/wire_endpoint/inline_probe_latency
GA
(project)
Inline Probe RTT Latency
GAUGE , INT64 , ms
wire_endpoint
Pseudowire inline probe RTT latency in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/metered_received_bytes_count
GA
(project)
Metered Received Bytes, measured ingress at the source Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes received from the customer that exceed the unmetered bandwidth limit and fit within the metered bandwidth limit. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/operational
GA
(project)
Operational Status
GAUGE , BOOL ,
wire_endpoint
The operational status of the wire. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/out_of_band_probe_count
GA
(project)
Out of Band Probes
DELTA , INT64 , {packets}
wire_endpoint
The number of probes with a given status in the last minute. Probes traverse a pseudowire between the router of this Interconnect and the router of the remote_interface. Although the routers are the same, the probe pseudowire is distinct from your pseudowire, so the probes are out of band. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
SUCCESS or FAILURE.
network/wire_endpoint/out_of_band_probe_latency
GA
(project)
Out of Band Probe RTT Latency
GAUGE , INT64 , ms
wire_endpoint
Pseudowire out of band probe RTT latency in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/src_to_dst_received_bytes_count
GA
(project)
Egress Bytes, measured at the destination Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes sent to the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/src_to_dst_received_packets_count
GA
(project)
Egress Packets, measured at the destination Interconnect.
DELTA , INT64 , {packets}
wire_endpoint
Number of packets sent to the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/src_to_dst_sent_bytes_count
GA
(project)
Ingress Bytes, measured at the source Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes received from the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/src_to_dst_sent_packets_count
GA
(project)
Ingress Packets, measured at the source Interconnect.
DELTA , INT64 , {packets}
wire_endpoint
Number of packets received from the customer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/wire_endpoint/unmetered_received_bytes_count
GA
(project)
Unmetered Received Bytes, measured ingress at the source Interconnect.
DELTA , INT64 , By
wire_endpoint
Number of bytes received from the customer that fall within the specified unmetered bandwidth. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
livestream
Metrics for Live Stream API .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with livestream.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
channel/distribution_dropped_packets_count
BETA
(project)
Distribution dropped packets count
DELTA , INT64 , 1
livestream.googleapis.com/Channel
Count of dropped packets for distribution outputs since the last sample.
distribution_key :
Key of the distribution.
distribution_type :
The type of the distribution, one of [RTMP_PUSH, SRT_PUSH].
channel/distribution_published_bytes_count
BETA
(project)
Distribution published bytes count
DELTA , INT64 , By
livestream.googleapis.com/Channel
Count of published bytes for distribution outputs since the last sample.
distribution_key :
Key of the distribution.
distribution_type :
The type of the distribution, one of [RTMP_PUSH, SRT_PUSH].
channel/distribution_published_packets_count
BETA
(project)
Distribution published packets count
DELTA , INT64 , 1
livestream.googleapis.com/Channel
Count of published packets for distribution outputs since the last sample.
distribution_key :
Key of the distribution.
distribution_type :
The type of the distribution, one of [RTMP_PUSH, SRT_PUSH].
channel/distribution_rtt
BETA
(project)
Distribution RTT
DELTA , DISTRIBUTION , ms
livestream.googleapis.com/Channel
Distribution of RTT (round-trip time) over distribution output connections in milliseconds.
distribution_type :
The type of the distribution, one of [RTMP_PUSH, SRT_PUSH].
distribution_key :
Key of the distribution.
channel/distribution_state
BETA
(project)
Distribution state
GAUGE , INT64 , 1
livestream.googleapis.com/Channel
The state of the distribution at a specific time point. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
distribution_key :
Key of the distribution.
distribution_type :
The type of the distribution, one of [RTMP_PUSH, SRT_PUSH].
state :
Distribution state, one of [NOT_READY, READY, ERROR, AWAITING_INPUT, DISTRIBUTING].
channel/dropped_packets_count
BETA
(project)
Dropped packets count
DELTA , INT64 , 1
livestream.googleapis.com/Channel
Count of dropped packets since the last sample.
input_type :
The type of the input, one of [RTMP_PUSH, SRT_PUSH].
input_attachment :
Key of the attached input resource.
channel/input_rtt
BETA
(project)
Input RTT
DELTA , DISTRIBUTION , ms
livestream.googleapis.com/Channel
Distribution of RTT (round-trip time) over input connections in milliseconds.
input_type :
The type of the input, one of [RTMP_PUSH, SRT_PUSH].
input_attachment :
Key of the attached input resource.
channel/published_bytes_count
BETA
(project)
Published bytes count
DELTA , INT64 , By
livestream.googleapis.com/Channel
Count of published bytes for media segments since the last sample.
mux_stream :
Key of the output mux stream.
channel/received_bytes_count
BETA
(project)
Received bytes count
DELTA , INT64 , By
livestream.googleapis.com/Channel
Count of received bytes since the last sample.
input_type :
The type of the input, one of [RTMP_PUSH, SRT_PUSH].
input_attachment :
Key of the attached input resource.
channel/received_packets_count
BETA
(project)
Received packets count
DELTA , INT64 , 1
livestream.googleapis.com/Channel
Count of received packets since the last sample.
input_type :
The type of the input, one of [RTMP_PUSH, SRT_PUSH].
input_attachment :
Key of the attached input resource.
channel/streaming_state
BETA
(project)
Streaming state
GAUGE , INT64 , 1
livestream.googleapis.com/Channel
The streaming state of the channel at a specific time point. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
streaming_state :
Channel streaming state, one of [STREAMING, AWAITING_INPUT, STREAMING_ERROR, STREAMING_NO_INPUT, STOPPED, STARTING, STOPPING].
loadbalancing
Metrics for Cloud Load Balancing .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with loadbalancing.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
application_lb/backend_latencies
BETA
(project)
Backend latencies
DELTA , DISTRIBUTION , ms
gce_backend_service
A distribution of the latency calculated from when the request was sent by the Application Load Balancer proxy to the backend until the proxy received from the backend the last byte of response. For Service Extensions, this value represents the sum of latencies of each ProcessingRequest/ProcessingResponse pair between the load balancer and the extension backend.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/backend_request_bytes_count
BETA
(project)
Backend request bytes count per application load balancer
DELTA , INT64 , By
gce_backend_service
The number of bytes sent as requests from the application load balancer to backends. For Service Extensions, this value represents the total number of bytes sent from the load balancer to the extension backend.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/backend_request_count
BETA
(project)
Backend request count per application load balancer
DELTA , INT64 , 1
gce_backend_service
The number of requests served by backends of the application load balancer. For Service Extensions, this value represents the number of gRPC streams between the load balancer and the extension backend.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/backend_response_bytes_count
BETA
(project)
Backend response bytes count per application load balancer
DELTA , INT64 , By
gce_backend_service
The number of bytes sent as response from backends to the application load balancer. For Service Extensions, this value represents the total number of bytes received by the load balancer from the extension backend.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/request_bytes_count
BETA
(project)
Request bytes
DELTA , INT64 , By
gce_forwarding_rule
The number of request bytes received by the application load balancer. For Service Extensions, this value represents the total number of bytes sent from the load balancer to the extension backend.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/request_count
BETA
(project)
Request count
DELTA , INT64 , 1
gce_forwarding_rule
The number of requests served by the application load balancer.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/response_bytes_count
BETA
(project)
Response bytes
DELTA , INT64 , By
gce_forwarding_rule
The number of bytes sent as responses from the application load balancer to clients.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' for the sink default rule.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
application_lb/total_latencies
BETA
(project)
Total latencies
DELTA , DISTRIBUTION , ms
gce_forwarding_rule
A distribution of the latency calculated from when the request was received by the proxy until the proxy got ACK from client on last response byte.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
matcher_type :
The type of rule matched for the request: 'PATH_MATCHER' or 'DEFAULT_MATCH'. 'DEFAULT_MATCH' indicates that the default route rule or action was matched to the request.
matcher_name :
Matched rule for the request. Label value is based on matcher_type. PATH_MATCHER type will be the name of the path matcher. DEFAULT_MATCH types will be empty.
matched_path :
The prefix, exact, regex, or template URL path matcher that matched the request. 'UNMATCHED' when a default (empty) path was matched.
load_balancing_scheme :
Load balancing scheme used by the Application Load Balancer: 'EXTERNAL_MANAGED' or 'INTERNAL_MANAGED'.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
proxy_continent :
Continent of the proxy where the traffic originated from, such as 'North America' or 'Europe'.
https/backend_latencies
GA
(project)
Backend latency
DELTA , DISTRIBUTION , ms
https_lb_rule
A distribution of the latency calculated from when the request was sent by the proxy to the backend until the proxy received from the backend the last byte of response. For Service Extensions, this value represents the sum of latencies of each ProcessingRequest/ProcessingResponse pair between the load balancer and the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
protocol :
Protocol used by the client, one of [HTTP/1.0, HTTP/1.1, HTTP/2.0, SPDY, UNKNOWN].
response_code :
(INT64)
HTTP response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the hit: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (for example, 'United States', 'Germany').
https/backend_request_bytes_count
GA
(project)
Backend Request Bytes
DELTA , INT64 , By
https_lb_rule
The number of bytes sent as requests from external HTTP(S) load balancer to backends. For Service Extensions, this value represents the total number of bytes sent from the load balancer to the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
(INT64)
HTTP backend response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP backend response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the request: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving the HTTP request by backends (cache hits are abstracted as backend requests): 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/backend_request_count
GA
(project)
Backend Request Count
DELTA , INT64 , 1
https_lb_rule
The number of requests served by backends of external HTTP(S) load balancer. For Service Extensions, this value represents the total number of gRPC streams between the load balancer to the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
(INT64)
HTTP backend response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP backend response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the request: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving the HTTP request by backends (cache hits are abstracted as backend requests): 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/backend_response_bytes_count
GA
(project)
Backend Response Bytes
DELTA , INT64 , By
https_lb_rule
The number of bytes sent as responses from backends (or cache) to external HTTP(S) load balancer. For Service Extensions, this value represents the total number of bytes received by the load balancer from the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
(INT64)
HTTP backend response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP backend response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the request: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving the HTTP request by backends (cache hits are abstracted as backend requests): 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/external/regional/backend_latencies
GA
(project)
Backend latencies
DELTA , DISTRIBUTION , ms
http_external_regional_lb_rule
A distribution of the latency calculated from when the request was sent by the proxy to the backend until the proxy received from the backend the last byte of response. For Service Extensions, this value represents the sum of latencies of each ProcessingRequest/ProcessingResponse pair between the load balancer and the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (e.g. 'United States', 'Germany').
https/external/regional/backend_request_bytes_count
BETA
(project)
Backend request bytes count per external regional https load balancer
DELTA , INT64 , By
http_external_regional_lb_rule
The number of bytes sent as requests from Regional External HTTP(S) load balancer to backends. For Service Extensions, this value represents the total number of bytes sent from the load balancer to the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
https/external/regional/backend_request_count
BETA
(project)
Backend request count per external regional https load balancer
DELTA , INT64 , 1
http_external_regional_lb_rule
The number of requests served by backends of Regional External HTTP(S) load balancer. For Service Extensions, this value represents the total number of gRPC streams between the load balancer to the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
https/external/regional/backend_response_bytes_count
BETA
(project)
Backend response bytes count per external regional https load balancer
DELTA , INT64 , By
http_external_regional_lb_rule
The number of bytes sent as response from backends to Regional External HTTP(S) load balancer. For Service Extensions, this value represents the total number of bytes received by the load balancer from the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
https/external/regional/request_bytes_count
GA
(project)
Request bytes
DELTA , INT64 , By
http_external_regional_lb_rule
The number of bytes sent as requests from clients to HTTP/S load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (e.g. 'United States', 'Germany').
https/external/regional/request_count
GA
(project)
Request count
DELTA , INT64 , 1
http_external_regional_lb_rule
The number of requests served by HTTP/S load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (e.g. 'United States', 'Germany').
https/external/regional/response_bytes_count
GA
(project)
Response bytes
DELTA , INT64 , By
http_external_regional_lb_rule
The number of bytes sent as responses from HTTP/S load balancer to clients. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (e.g. 'United States', 'Germany').
https/external/regional/total_latencies
GA
(project)
Total latencies
DELTA , DISTRIBUTION , ms
http_external_regional_lb_rule
A distribution of the latency calculated from when the request was received by the proxy until the proxy got ACK from client on last response byte. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (e.g. 'United States', 'Germany').
https/frontend_tcp_rtt
GA
(project)
Frontend RTT
DELTA , DISTRIBUTION , ms
https_lb_rule
A distribution of the RTT measured for each connection between client and proxy. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
proxy_continent :
Continent of the HTTP proxy that handled the hit: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that issued the HTTP request (for example, 'United States', 'Germany').
https/internal/backend_latencies
GA
(project)
Backend latencies
DELTA , DISTRIBUTION , ms
internal_http_lb_rule
A distribution of the latency calculated from when the request was sent by the internal Application Load Balancer proxy to the backend until the proxy received from the backend the last byte of response. For Service Extensions, this value represents the sum of latencies of each ProcessingRequest/ProcessingResponse pair between the load balancer and the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'SPDY' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/internal/backend_request_bytes_count
BETA
(project)
Backend request bytes count per internal https load balancer
DELTA , INT64 , By
internal_http_lb_rule
The number of bytes sent as requests from Internal HTTP(S) load balancer to backends. For Service Extensions, this value represents the total number of bytes sent from the load balancer to the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
https/internal/backend_request_count
BETA
(project)
Backend request count per internal https load balancer
DELTA , INT64 , 1
internal_http_lb_rule
The number of requests served by backends of Internal HTTP(S) load balancer. For Service Extensions, this value represents the number of gRPC streams between the load balancer and the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
https/internal/backend_response_bytes_count
BETA
(project)
Backend response bytes count per internal https load balancer
DELTA , INT64 , By
internal_http_lb_rule
The number of bytes sent as response from backends to Internal HTTP(S) load balancer. For Service Extensions, this value represents the total number of bytes received by the load balancer from the extension backend. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
https/internal/request_bytes_count
GA
(project)
Request bytes
DELTA , INT64 , By
internal_http_lb_rule
The number of bytes sent as requests from clients to internal Application Load Balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'SPDY' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/internal/request_count
GA
(project)
Request count
DELTA , INT64 , 1
internal_http_lb_rule
The number of requests served by internal Application Load Balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'QUIC/HTTP/2.0' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/internal/response_bytes_count
GA
(project)
Response bytes
DELTA , INT64 , By
internal_http_lb_rule
The number of bytes sent as responses from internal Application Load Balancer to clients. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'SPDY' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/internal/total_latencies
GA
(project)
Total latencies
DELTA , DISTRIBUTION , ms
internal_http_lb_rule
A distribution of the latency calculated from when the request was received by the internal Application Load Balancer proxy until the proxy got ACK from client on last response byte. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
protocol :
Protocol used by the client: 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0', 'SPDY' or 'UNKNOWN'.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED' or 'UNKNOWN'.
https/request_bytes_count
GA
(project)
Request bytes
DELTA , INT64 , By
https_lb_rule
The number of bytes sent as requests from clients to external HTTP(S) load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
protocol :
Protocol used by the client, one of [HTTP/1.0, HTTP/1.1, HTTP/2.0, SPDY, UNKNOWN].
response_code :
(INT64)
HTTP response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the hit: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED', 'PARTIAL_HIT' (for a request served partially from cache and partially from backend) or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (for example, 'United States', 'Germany').
https/request_count
GA
(project)
Request count
DELTA , INT64 , 1
https_lb_rule
The number of requests served by external HTTP(S) load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
protocol :
Protocol used by the client, one of [HTTP/1.0, HTTP/1.1, HTTP/2.0, QUIC/HTTP/2.0, UNKNOWN].
response_code :
(INT64)
HTTP response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the hit: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED', 'PARTIAL_HIT' (for a request served partially from cache and partially from backend) or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (for example, 'United States', 'Germany').
https/response_bytes_count
GA
(project)
Response bytes
DELTA , INT64 , By
https_lb_rule
The number of bytes sent as responses from external HTTP(S) load balancer to clients. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
protocol :
Protocol used by the client, one of [HTTP/1.0, HTTP/1.1, HTTP/2.0, SPDY, UNKNOWN].
response_code :
(INT64)
HTTP response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the hit: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED', 'PARTIAL_HIT' (for a request served partially from cache and partially from backend) or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (for example, 'United States', 'Germany').
https/total_latencies
GA
(project)
Total latency
DELTA , DISTRIBUTION , ms
https_lb_rule
A distribution of the latency calculated from when the request was received by the external HTTP(S) load balancer proxy until the proxy got ACK from client on last response byte. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
protocol :
Protocol used by the client, one of [HTTP/1.0, HTTP/1.1, HTTP/2.0, SPDY, UNKNOWN].
response_code :
(INT64)
HTTP response code.
load_balancing_scheme :
Load balancing scheme: EXTERNAL or EXTERNAL_MANAGED.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
proxy_continent :
Continent of the HTTP proxy that handled the hit: 'America', 'Europe' or 'Asia'.
cache_result :
Cache result for serving HTTP request by proxy: 'HIT', 'MISS', 'DISABLED', 'PARTIAL_HIT' (for a request served partially from cache and partially from backend) or 'UNKNOWN'.
client_country :
Country of the client that issued the HTTP request (for example, 'United States', 'Germany').
l3/external/egress_bytes_count
GA
(project)
Egress bytes count
DELTA , INT64 , By
loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule
tcp_lb_rule
udp_lb_rule
The number of bytes sent from the backend of the external network load balancer to the client. For TCP flows, this metric counts the bytes on the application stream only. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_continent :
Continent of the client that initiated the flow to the external network load balancer.
client_country :
Country of the client that initiated the flow to the external network load balancer.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP]. This field remains empty for all resources other than loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule.
l3/external/egress_packets_count
GA
(project)
Egress packets count
DELTA , INT64 , 1
loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule
tcp_lb_rule
udp_lb_rule
The number of packets sent from the backend of the external network load balancer to the client. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_continent :
Continent of the client that initiated the flow to the external network load balancer.
client_country :
Country of the client that initiated the flow to the external network load balancer.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP]. This field remains empty for all resources other than loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule.
l3/external/ingress_bytes_count
GA
(project)
Ingress bytes count
DELTA , INT64 , By
loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule
tcp_lb_rule
udp_lb_rule
The number of bytes sent from the client to the backend of the external network load balancer. For TCP flows, this metric counts the bytes on the application stream only. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_continent :
Continent of the client that initiated the flow to the external network load balancer.
client_country :
Country of the client that initiated the flow to the external network load balancer.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP]. This field remains empty for all resources other than loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule.
l3/external/ingress_packets_count
GA
(project)
Ingress packets count
DELTA , INT64 , 1
loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule
tcp_lb_rule
udp_lb_rule
The number of packets sent from the client to the backend of the external network load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_continent :
Continent of the client that initiated the flow to the external network load balancer.
client_country :
Country of the client that initiated the flow to the external network load balancer.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP]. This field remains empty for all resources other than loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule.
l3/external/rtt_latencies
GA
(project)
RTT latencies
DELTA , DISTRIBUTION , ms
loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule
tcp_lb_rule
A distribution of the round trip time latency, measured over TCP connections for the external network load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_continent :
Continent of the client that initiated the flow to the external network load balancer.
client_country :
Country of the client that initiated the flow to the external network load balancer.
protocol :
Protocol of the connection, set to TCP if the resource is loadbalancing.googleapis.com/ExternalNetworkLoadBalancerRule, otherwise empty.
l3/internal/egress_bytes_count
GA
(project)
Egress bytes per internal TCP/UDP load balancer
DELTA , INT64 , By
internal_tcp_lb_rule
internal_udp_lb_rule
The number of bytes sent from the internal TCP/UDP load balancer backend to the client (for TCP flows it's counting bytes on application stream only). Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_project_id :
Project ID of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_network :
Network of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_subnetwork :
Subnetwork of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_zone :
Zone of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
l3/internal/egress_packets_count
GA
(project)
Egress packets per internal TCP/UDP load balancer
DELTA , INT64 , 1
internal_tcp_lb_rule
internal_udp_lb_rule
The number of packets sent from the internal TCP/UDP load balancer to the client. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_project_id :
Project ID of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_network :
Network of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_subnetwork :
Subnetwork of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_zone :
Zone of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
l3/internal/ingress_bytes_count
GA
(project)
Ingress bytes per internal TCP/UDP load balancer
DELTA , INT64 , By
internal_tcp_lb_rule
internal_udp_lb_rule
The number of bytes sent from the client to the internal TCP/UDP load balancer backend (for TCP flows it's counting bytes on application stream only). Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_project_id :
Project ID of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_network :
Network of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_subnetwork :
Subnetwork of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_zone :
Zone of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
l3/internal/ingress_packets_count
GA
(project)
Ingress packets per internal TCP/UDP load balancer
DELTA , INT64 , 1
internal_tcp_lb_rule
internal_udp_lb_rule
The number of packets sent from the client to the internal TCP/UDP load balancer backend. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_project_id :
Project ID of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_network :
Network of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_subnetwork :
Subnetwork of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_zone :
Zone of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
l3/internal/rtt_latencies
GA
(project)
RTT latencies per internal TCP/UDP load balancer
DELTA , DISTRIBUTION , ms
internal_tcp_lb_rule
A distribution of RTT measured over TCP connections for internal TCP/UDP load balancer flows. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
client_project_id :
Project ID of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_network :
Network of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_subnetwork :
Subnetwork of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
client_zone :
Zone of the client instance communicating with the internal TCP/UDP load balancer. If the client instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to CLIENT_IS_EXTERNAL.
l4_proxy/egress_bytes_count
GA
(project)
Egress bytes
DELTA , INT64 , By
l4_proxy_rule
Number of bytes sent from VM to client using proxy. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
l4_proxy/ingress_bytes_count
GA
(project)
Ingress bytes
DELTA , INT64 , By
l4_proxy_rule
Number of bytes sent from client to VM using proxy. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
l4_proxy/tcp/closed_connections_count
GA
(project)
Closed connections
DELTA , INT64 , 1
l4_proxy_rule
Number of connections that were terminated over TCP proxy or SSL proxy load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
l4_proxy/tcp/new_connections_count
GA
(project)
New connections
DELTA , INT64 , 1
l4_proxy_rule
Number of connections that were opened over TCP proxy or SSL proxy load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
client_country :
Country of the client where the traffic originated from, such as 'United States' or 'Germany'.
subnet/proxy_only/addresses
GA
(project)
Proxy-only addresses
GAUGE , INT64 , 1
gce_subnetwork
The current number of proxy-only addresses by state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
State of the address, one of [used, free].
tcp_ssl_proxy/closed_connections
GA
(project)
Closed connections
DELTA , INT64 , 1
tcp_ssl_proxy_rule
Number of connections that were terminated over TCP proxy or SSL proxy load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
proxy_continent :
Continent of the SSL proxy that handles the connection: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that opened the TCP/SSL connection (for example, 'United States', 'Germany').
tcp_ssl_proxy/egress_bytes_count
GA
(project)
Egress bytes
DELTA , INT64 , By
tcp_ssl_proxy_rule
Number of bytes sent from VM to client using proxy. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
proxy_continent :
Continent of the proxy that handles the connection: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that opened the TCP/SSL connection (for example, 'United States', 'Germany').
tcp_ssl_proxy/frontend_tcp_rtt
GA
(project)
Frontend RTT
DELTA , DISTRIBUTION , ms
tcp_ssl_proxy_rule
A distribution of the smoothed RTT (in ms) measured by the proxy's TCP stack, each minute application layer bytes pass from proxy to client. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
proxy_continent :
Continent of the SSL proxy that handles the connection: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that opened the TCP/SSL connection (for example, 'United States', 'Germany').
tcp_ssl_proxy/ingress_bytes_count
GA
(project)
Ingress bytes
DELTA , INT64 , By
tcp_ssl_proxy_rule
Number of bytes sent from client to VM using proxy. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
proxy_continent :
Continent of the proxy that handles the connection: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that opened the TCP/SSL connection (for example, 'United States', 'Germany').
tcp_ssl_proxy/new_connections
GA
(project)
New connections opened
DELTA , INT64 , 1
tcp_ssl_proxy_rule
Number of connections that were created over TCP proxy or SSL proxy load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
proxy_continent :
Continent of the SSL proxy that handles the connection: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that opened the TCP/SSL connection (for example, 'United States', 'Germany').
tcp_ssl_proxy/open_connections
GA
(project)
Open Connections
GAUGE , INT64 , 1
tcp_ssl_proxy_rule
Current number of outstanding connections through the TCP proxy or SSL proxy load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
proxy_continent :
Continent of the SSL proxy that handles the connection: 'America', 'Europe' or 'Asia'.
client_country :
Country of the client that opened the TCP/SSL connection (for example, 'United States', 'Germany').
logging
Metrics from Cloud Logging .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with logging.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
billing/bytes_ingested
GA
(project)
Bytes streamed into log buckets
DELTA , INT64 , By
global
Number of bytes streamed into log buckets for indexing, querying, and analysis; includes up to 30 days of storage. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
resource_type :
Monitored resource type for the log entry.
billing/bytes_stored
GA
(project)
Logging Retention
GAUGE , INT64 , By
global
Volume of logs that are retained past the default 30 days. No data exists when the retention period of a log bucket is never larger than 30 days. This metric might have a value of zero when the retention period of a log bucket is shortened to 30 days. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
data_type :
This field indicates that log volume reported here is charged for retention past the default 30 days. The data_type for all reported retention is set to `CHARGED`.
log_bucket_location :
The location where the log bucket resides.
log_bucket_id :
The id of the log bucket.
billing/log_bucket_bytes_ingested
GA
(project)
Bytes streamed into log buckets
DELTA , INT64 , By
global
Number of bytes streamed into log buckets for indexing, querying, and analysis; includes up to 30 days of storage. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
log_source :
The resource container where the log comes from.
resource_type :
Monitored resource type for the logs streamed into log buckets.
log_bucket_location :
The location where the log bucket resides.
log_bucket_id :
The id of the log bucket.
billing/log_bucket_monthly_bytes_ingested
GA
(project)
Bytes streamed into log buckets monthly
GAUGE , INT64 , By
global
Number of bytes streamed into log buckets for indexing, querying, and analysis for this month-to-date; include up to 30 days of storage. Sampled every 1800 seconds. After sampling, data is not visible for up to 6000 seconds.
log_source :
The resource container where the log comes from.
resource_type :
Monitored resource type for the logs streamed into log buckets.
log_bucket_location :
The location where the log bucket resides.
log_bucket_id :
The id of the log bucket.
billing/monthly_bytes_ingested
GA
(project)
Monthly bytes streamed into log buckets
GAUGE , INT64 , By
global
Month-to-date number of bytes streamed into log buckets for indexing, querying, and analysis; includes up to 30 days of storage. Sampled every 1800 seconds. After sampling, data is not visible for up to 6000 seconds.
resource_type :
Monitored resource type for the log entry.
byte_count
GA
(project)
Log bytes
DELTA , INT64 , By
Total bytes of log entries, either written directly or routed to this project via project-sink, that are stored in at least one log bucket. Sampled every 60 seconds.
log :
Name of the log.
severity :
Severity of the log entry.
dropped_log_entry_count
DEPRECATED
(project)
Logs-based metric errors (Deprecated)
DELTA , INT64 , 1
Use "logging.googleapis.com/logs_based_metrics_error_count" instead. Sampled every 60 seconds.
log :
Name of the log.
exports/byte_count
GA
(project)
Exported log bytes
DELTA , INT64 , By
logging_sink
Number of bytes in log entries that were exported. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
exports/error_count
GA
(project)
Exported log entries failures
DELTA , INT64 , 1
logging_sink
Number of log entries that failed to be exported. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
exports/log_entry_count
GA
(project)
Exported log entries
DELTA , INT64 , 1
logging_sink
Number of log entries that were exported. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
log_entry_count
GA
(project)
Log entries
DELTA , INT64 , 1
Number of log entries, either written directly or routed to this project via project-sink, that are stored in at least one log bucket. By default, log entries are stored for 30 days. Excluded logs are not counted. Sampled every 60 seconds.
log :
Name of the log.
severity :
Severity of the log entry.
logs_based_metrics_error_count
GA
(project)
Logs-based metric errors
DELTA , INT64 , 1
Number of log entries, either written directly or routed to this project via project-sink, and are stored in a log bucket but excluded from any system or user-defined logs-based metrics. This condition can occur if the timestamp of a log entry is more than 24 hours older, or 10 minutes newer, than the actual receive time. Sampled every 60 seconds.
log :
Name of the log.
metric_label_cardinality
BETA
(project)
Logs-based metric active cardinality count by label
GAUGE , INT64 , 1
metric
Cardinality estimate for each metric label of a logs-based metric. The estimate is computed over approximately 25 hours. Sampled every 60 seconds. After sampling, data is not visible for up to 270 seconds.
label :
Name of the metric label.
metric_label_throttled
BETA
(project)
Logs-based metric label throttled status
GAUGE , BOOL ,
metric
Indicates if metric labels are being dropped for logs-based metrics due to exceeding cardinality limits. Sampled every 60 seconds. After sampling, data is not visible for up to 270 seconds.
label :
Name of the metric label.
metric_throttled
GA
(project)
Logs-based metric throttled status
GAUGE , BOOL ,
metric
Indicates if labels or points are being dropped for logs-based metrics due to exceeding active time series (cardinality) limits. Sampled every 60 seconds. After sampling, data is not visible for up to 270 seconds.
time_series_count
BETA
(project)
Logs-based metric active time series (cardinality) count
GAUGE , INT64 , 1
metric
Active time series (cardinality) estimates for logs-based metrics. Only metric labels are counted and the estimate is computed over approximately 25 hours. Sampled every 60 seconds. After sampling, data is not visible for up to 270 seconds.
lustre
Metrics for Google Cloud Managed Lustre .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with lustre.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
instance/available_bytes
BETA
(project)
Available bytes
GAUGE , INT64 , By
lustre.googleapis.com/Instance
The number of bytes of storage space for a given Object Storage Target (OST) or Metadata Target (MDT) that is available to non-root users. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
instance/capacity_bytes
BETA
(project)
Capacity bytes
GAUGE , INT64 , By
lustre.googleapis.com/Instance
The number of bytes provisioned for the given Lustre target. The total cluster usable data or metadata space for an instance can be obtained by adding the capacity of all targets for a given type of Lustre target. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
instance/connected_clients
BETA
(project)
Connected clients
GAUGE , INT64 , {client}
lustre.googleapis.com/Instance
The number of clients currently connected to the given Metadata Target (MDT). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device. This will always be 'mdt'.
target :
The name of the Metadata Target (MDT).
instance/free_bytes
BETA
(project)
Free bytes
GAUGE , INT64 , By
lustre.googleapis.com/Instance
The number of bytes of storage space for a given Object Storage Target (OST) or Metadata Target (MDT) that is available to root users. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
instance/inodes_free
BETA
(project)
Free inodes
GAUGE , INT64 , {inode}
lustre.googleapis.com/Instance
The number of inodes (objects) available on the given target. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
instance/inodes_maximum
BETA
(project)
Maximum inodes
GAUGE , INT64 , {inode}
lustre.googleapis.com/Instance
The maximum number of inodes (objects) the target can hold. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
instance/io_time_milliseconds_total
BETA
(project)
Operation latency
DELTA , INT64 , {operation}
lustre.googleapis.com/Instance
The number of read or write operations whose latency is within the bucketed latency ranges. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
operation :
The operation type.
size :
The bucketed latency range (e.g. 512 includes the count of operations that took between 512 and 1024 milliseconds).
target :
The name of the Lustre target device.
instance/metadata_operations_total
BETA
(project)
Metadata Operations
DELTA , INT64 , {operation}
lustre.googleapis.com/Instance
Number of metadata operations the filesystem has performed on the given Metadata Target (MDT). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The component that handled the request.
operation :
The operation type.
target :
The name of the Lustre target device.
instance/read_bytes_total
BETA
(project)
Data read bytes
DELTA , INT64 , By
lustre.googleapis.com/Instance
The number of data bytes read from the given Object Storage Target (OST). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
operation :
The operation type.
target :
The name of the Lustre target device.
instance/read_samples_total
BETA
(project)
Data read operations
DELTA , INT64 , {operation}
lustre.googleapis.com/Instance
The number of read operations performed on the given Object Storage Target (OST). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
operation :
The operation type.
target :
The name of the Lustre target device.
instance/write_bytes_total
BETA
(project)
Data write bytes
DELTA , INT64 , By
lustre.googleapis.com/Instance
The number of data bytes written to the given Object Storage Target (OST). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
operation :
The operation type.
target :
The name of the Lustre target device.
instance/write_samples_total
BETA
(project)
Data write operations
DELTA , INT64 , {operation}
lustre.googleapis.com/Instance
The number of write operations performed on the given Object Storage Target (OST). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
operation :
The operation type.
target :
The name of the Lustre target device.
job/metadata_operations_total
BETA
(project)
Metadata operations by job
DELTA , INT64 , {operation}
lustre.googleapis.com/Job
Number of operations the filesystem has performed, recorded by jobstats. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
operation :
The operation type.
target :
The name of the Lustre target device.
job/read_bytes_total
BETA
(project)
Data read bytes by job
DELTA , INT64 , By
lustre.googleapis.com/Job
The total number of bytes that have been read. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/read_maximum_size_bytes
BETA
(project)
Data read maximum size by job
GAUGE , INT64 , By
lustre.googleapis.com/Job
The maximum read size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/read_minimum_size_bytes
BETA
(project)
Data read minimum size by job
GAUGE , INT64 , By
lustre.googleapis.com/Job
The minimum read size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/read_samples_total
BETA
(project)
Data read operations by job
DELTA , INT64 , {operation}
lustre.googleapis.com/Job
Total number of reads that have been recorded. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/write_bytes_total
BETA
(project)
Data write bytes by job
DELTA , INT64 , By
lustre.googleapis.com/Job
The total number of bytes that have been written. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/write_maximum_size_bytes
BETA
(project)
Data write maximum size by job
GAUGE , INT64 , By
lustre.googleapis.com/Job
The maximum write size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/write_minimum_size_bytes
BETA
(project)
Data write minimum size by job
GAUGE , INT64 , By
lustre.googleapis.com/Job
The minimum write size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
job/write_samples_total
BETA
(project)
Data write operations by job
DELTA , INT64 , {operation}
lustre.googleapis.com/Job
Total number of writes that have been recorded. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
The type of the Lustre target device.
target :
The name of the Lustre target device.
quota/capacity/exceeded
ALPHA
(project)
Lustre storage capacity (GiB) per zone and network quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/capacity. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/capacity/limit
ALPHA
(project)
Lustre storage capacity (GiB) per zone and network quota limit
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/capacity/usage
ALPHA
(project)
Lustre storage capacity (GiB) per zone and network quota usage
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/capacity. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/dynamic_tier_capacity/exceeded
ALPHA
(project)
Dynamic tier storage capacity (GiB) per zone and network quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/dynamic_tier_capacity. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/dynamic_tier_capacity/limit
ALPHA
(project)
Dynamic tier storage capacity (GiB) per zone and network quota limit
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/dynamic_tier_capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/dynamic_tier_capacity/usage
ALPHA
(project)
Dynamic tier storage capacity (GiB) per zone and network quota usage
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/dynamic_tier_capacity. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_1000MBps_throughput_per_TiB/exceeded
ALPHA
(project)
Storage capacity (GiB) for a throughput of 1000 MB/s/TiB. quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/storage_for_1000MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_1000MBps_throughput_per_TiB/limit
ALPHA
(project)
Storage capacity (GiB) for a throughput of 1000 MB/s/TiB. quota limit
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/storage_for_1000MBps_throughput_per_TiB. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_1000MBps_throughput_per_TiB/usage
ALPHA
(project)
Storage capacity (GiB) for a throughput of 1000 MB/s/TiB. quota usage
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/storage_for_1000MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_125MBps_throughput_per_TiB/exceeded
ALPHA
(project)
Storage capacity (GiB) for a throughput of 125 MB/s/TiB. quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/storage_for_125MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_125MBps_throughput_per_TiB/limit
ALPHA
(project)
Storage capacity (GiB) for a throughput of 125 MB/s/TiB. quota limit
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/storage_for_125MBps_throughput_per_TiB. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_125MBps_throughput_per_TiB/usage
ALPHA
(project)
Storage capacity (GiB) for a throughput of 125 MB/s/TiB. quota usage
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/storage_for_125MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_250MBps_throughput_per_TiB/exceeded
ALPHA
(project)
Storage capacity (GiB) for a throughput of 250 MB/s/TiB. quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/storage_for_250MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_250MBps_throughput_per_TiB/limit
ALPHA
(project)
Storage capacity (GiB) for a throughput of 250 MB/s/TiB. quota limit
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/storage_for_250MBps_throughput_per_TiB. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_250MBps_throughput_per_TiB/usage
ALPHA
(project)
Storage capacity (GiB) for a throughput of 250 MB/s/TiB. quota usage
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/storage_for_250MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_500MBps_throughput_per_TiB/exceeded
ALPHA
(project)
Storage capacity (GiB) for a throughput of 500 MB/s/TiB. quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/storage_for_500MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_500MBps_throughput_per_TiB/limit
ALPHA
(project)
Storage capacity (GiB) for a throughput of 500 MB/s/TiB. quota limit
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/storage_for_500MBps_throughput_per_TiB. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/storage_for_500MBps_throughput_per_TiB/usage
ALPHA
(project)
Storage capacity (GiB) for a throughput of 500 MB/s/TiB. quota usage
GAUGE , INT64 , GiBy
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/storage_for_500MBps_throughput_per_TiB. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/throughput/exceeded
ALPHA
(project)
Lustre throughput (GBps) per zone and network quota exceeded error
DELTA , INT64 , 1
lustre.googleapis.com/Location
Number of attempts to exceed the limit on quota metric lustre.googleapis.com/throughput. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/throughput/limit
ALPHA
(project)
Lustre throughput (GBps) per zone and network quota limit
GAUGE , INT64 , GiBy.s
lustre.googleapis.com/Location
Current limit on quota metric lustre.googleapis.com/throughput. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota/throughput/usage
ALPHA
(project)
Lustre throughput (GBps) per zone and network quota usage
GAUGE , INT64 , GiBy.s
lustre.googleapis.com/Location
Current usage on quota metric lustre.googleapis.com/throughput. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
network_name :
The Managed Lustre network name in format of projects/{project}/global/networks/{network}.
quota_entity/hard_limit_bytes
BETA
(project)
Quota Hard Limit Bytes
GAUGE , INT64 , By
lustre.googleapis.com/QuotaEntity
The absolute maximum byte usage allowed. New writes are blocked when this limit is reached. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
accounting_type :
The type of entity for which quota is accounted (e.g., user, group, project).
target :
The name of the Lustre target device.
quota_entity/hard_limit_inodes
BETA
(project)
Quota Hard Limit Inodes
GAUGE , INT64 , {inode}
lustre.googleapis.com/QuotaEntity
The absolute maximum inode usage allowed. New file/directory creations are blocked when this limit is reached. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
accounting_type :
The type of entity for which quota is accounted (e.g., user, group, project).
target :
The name of the Lustre target device.
quota_entity/soft_limit_bytes
BETA
(project)
Quota Soft Limit Bytes
GAUGE , INT64 , By
lustre.googleapis.com/QuotaEntity
The soft limit for byte usage. Exceeding this starts a grace period. Enforced as a hard limit if usage remains above this limit after the grace period expires. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
accounting_type :
The type of entity for which quota is accounted (e.g., user, group, project).
target :
The name of the Lustre target device.
quota_entity/soft_limit_inodes
BETA
(project)
Quota Soft Limit Inodes
GAUGE , INT64 , {inode}
lustre.googleapis.com/QuotaEntity
The soft limit for inode usage. Exceeding this starts a grace period. Enforced as a hard limit if usage remains above this limit after the grace period expires. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
accounting_type :
The type of entity for which quota is accounted (e.g., user, group, project).
target :
The name of the Lustre target device.
quota_entity/used_bytes
BETA
(project)
Quota Used Bytes
GAUGE , INT64 , By
lustre.googleapis.com/QuotaEntity
The current byte usage for the entity. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
accounting_type :
The type of entity for which quota is accounted (e.g., user, group, project).
target :
The name of the Lustre target device.
quota_entity/used_inodes
BETA
(project)
Quota Used Inodes
GAUGE , INT64 , {inode}
lustre.googleapis.com/QuotaEntity
The current number of inodes used by the entity. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
accounting_type :
The type of entity for which quota is accounted (e.g., user, group, project).
target :
The name of the Lustre target device.
managedflink
Metrics from BigQuery Engine for Apache Flink .
The "metric type" strings in this table must be prefixed
with managedflink.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
deployment/cpu/limit
DEPRECATED
(project)
CPU limit
GAUGE , DOUBLE , s{vCPU}/s
managedflink.googleapis.com/Deployment
The maximum amount of vCPU that the deployment can use. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/cpu/usage
DEPRECATED
(project)
CPU usage
GAUGE , DOUBLE , s{vCPU}/s
managedflink.googleapis.com/Deployment
The amount of vCPU that the deployment is currently using. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/disk/limit
DEPRECATED
(project)
Disk limit
GAUGE , INT64 , By
managedflink.googleapis.com/Deployment
The maximum amount of disk usage allowed for the deployment, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/disk/ops_usage
DEPRECATED
(project)
Disk operation usage
GAUGE , INT64 , {Ops}/s
managedflink.googleapis.com/Deployment
The current disk usage for the deployment in number of operations per second. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/disk/usage
DEPRECATED
(project)
Disk usage
GAUGE , INT64 , By
managedflink.googleapis.com/Deployment
The amount of disk space that the deployment is currently using. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/jobs/count
DEPRECATED
(project)
Jobs count
DELTA , INT64 , 1
managedflink.googleapis.com/Deployment
The cumulative count of the jobs in the deployment, categorized by state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
The state of the job.
deployment/memory/limit
DEPRECATED
(project)
Memory limit
GAUGE , INT64 , By
managedflink.googleapis.com/Deployment
The maximum amount of memory that the deployment can use, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/memory/usage
DEPRECATED
(project)
Memory usage
GAUGE , INT64 , By
managedflink.googleapis.com/Deployment
The amount of memory that the deployment is currently using. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployment/state
DEPRECATED
(project)
State
GAUGE , INT64 , 1
managedflink.googleapis.com/Deployment
The current state of the deployment. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
The state of the deployment.
deployment/uptime_secs
DEPRECATED
(project)
Uptime seconds
GAUGE , INT64 , s
managedflink.googleapis.com/Deployment
The number of seconds that this deployment has been running. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job/autotuning/horizontal_scaling/max_parallelism
DEPRECATED
(project)
Maximum task slots
GAUGE , INT64 , 1
managedflink.googleapis.com/Job
The maximum number of allowed task slots for the job.
job/autotuning/horizontal_scaling/min_parallelism
DEPRECATED
(project)
Minimum task slots
GAUGE , INT64 , 1
managedflink.googleapis.com/Job
The minimum number of allowed task slots for the job.
job/autotuning/horizontal_scaling/parallelism
DEPRECATED
(project)
Task slots
GAUGE , DOUBLE , 1
managedflink.googleapis.com/Job
The total number of task slots for the job.
job/autotuning/horizontal_scaling/recommended_parallelism
DEPRECATED
(project)
Recommended task slots
GAUGE , DOUBLE , 1
managedflink.googleapis.com/Job
The number of task slots recommeded by the autotuning algorithm.
job/state
DEPRECATED
(project)
State
GAUGE , INT64 , 1
managedflink.googleapis.com/Job
The current state of job. This data is passed through from the Apache Flink API. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
Stringified enum state of job.
job/state_millis
DEPRECATED
(project)
State milliseconds
GAUGE , INT64 , ms
managedflink.googleapis.com/Job
For a given state, returns the total amount of time in milliseconds since the job transitioned to that state. Otherwise, returns 0.
state :
The stringified enum state of the job.
job/state_total_millis
DEPRECATED
(project)
State total milliseconds
GAUGE , INT64 , ms
managedflink.googleapis.com/Job
The total amount of time, in milliseconds, the job has been in a given state.
state :
The stringified enum state of the job.
operator/current_input_n_watermark_millis
DEPRECATED
(project)
Current Input N Watermark
GAUGE , INT64 , ms
managedflink.googleapis.com/Operator
The most recent input watermark, in milliseconds, this operator received in its N'th input, with the index starting from 1. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operator_name :
Human-readable name.
input_index :
The index for the n'th input.
operator/current_input_watermark_millis
DEPRECATED
(project)
Current input watermark
GAUGE , INT64 , ms
managedflink.googleapis.com/Operator
The most recent input watermark, in milliseconds,received by this operator. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operator_name :
Human-readable name.
operator/current_output_watermark_millis
DEPRECATED
(project)
Current output watermark
GAUGE , INT64 , ms
managedflink.googleapis.com/Operator
The most recent output watermark, in milliseconds, received by this operator. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operator_name :
Human-readable name.
operator/late_records_dropped_count
DEPRECATED
(project)
Late records dropped count
DELTA , INT64 , 1
managedflink.googleapis.com/Operator
The total number of records dropped due to arriving late. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operator_name :
Human-readable name.
operator/records_in_count
DEPRECATED
(project)
Records in count
DELTA , INT64 , 1
managedflink.googleapis.com/Operator
The total number of records ingested by this operator. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operator_name :
Human-readable name.
operator/records_out_count
DEPRECATED
(project)
Records out count
DELTA , INT64 , 1
managedflink.googleapis.com/Operator
The total number of records outputted by this operator. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operator_name :
Human-readable name.
vertex/autotuning/horizontal_scaling/parallelism
DEPRECATED
(project)
Vertex parallelism
GAUGE , DOUBLE , 1
managedflink.googleapis.com/Vertex
The number of task slots assigned to this vertex.
vertex_name :
Human-readable name.
vertex/autotuning/horizontal_scaling/recommended_parallelism
DEPRECATED
(project)
Recommended vertex parallelism
GAUGE , DOUBLE , 1
managedflink.googleapis.com/Vertex
The number of task slots recommended by the autotuning algorithm.
vertex_name :
Human-readable name.
vertex/backlog_elements
DEPRECATED
(project)
Vertex backlog elements
GAUGE , DOUBLE , 1
managedflink.googleapis.com/Vertex
The total number of pending records.
vertex_name :
Human-readable name.
vertex/current_input_watermark_millis
DEPRECATED
(project)
Current input watermark
GAUGE , INT64 , ms
managedflink.googleapis.com/Vertex
The most recent input watermark this vertex received. For operators or vertices with two inputs, this is calculated as the oldest of the most recently received watermarks. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
vertex_name :
Human-readable name.
vertex/input_bytes
DEPRECATED
(project)
Input bytes
GAUGE , INT64 , By
managedflink.googleapis.com/Vertex
The total number of bytes ingested by this vertex. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
vertex_name :
Human-readable name.
vertex/late_records_dropped
DEPRECATED
(project)
Late records dropped count
GAUGE , INT64 , 1
managedflink.googleapis.com/Vertex
The total number of records dropped due to late arrival. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
vertex_name :
Human-readable name.
vertex/output_bytes
DEPRECATED
(project)
Output bytes
GAUGE , INT64 , By
managedflink.googleapis.com/Vertex
The total number of bytes emitted by this vertex. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
vertex_name :
Human-readable name.
vertex/records_in
DEPRECATED
(project)
Records in count
GAUGE , INT64 , 1
managedflink.googleapis.com/Vertex
The total number of records that this vertex has ingested. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
vertex_name :
Human-readable name.
vertex/records_out
DEPRECATED
(project)
Records out count
GAUGE , INT64 , 1
managedflink.googleapis.com/Vertex
The total number of records that this vertex has outputted. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
vertex_name :
Human-readable name.
vertex/state_millis_per_sec
DEPRECATED
(project)
State milliseconds per second
GAUGE , INT64 , ms/s
managedflink.googleapis.com/Vertex
The number of milliseconds within the last second (that is, the percentage of time) that this vertex was in a specific state of idle, busy, or backpressured. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
The state of the vertex. When `idle`, it has nothing to do. When `busy`, it's neither idle or backpressured. When `backpressured`, it's waiting for downstream vertices to finish. Soft backpressure is when a vertex is still responsive and can, for example, trigger unaligned checkpoints. Hard backpressure is when a vertex is completely blocked and unresponsive.
vertex_name :
Human-readable name.
managedidentities
Metrics from Managed Service for Microsoft Active Directory .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with managedidentities.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
microsoft_ad/domain/health
BETA
(project)
AD Domain Health
GAUGE , BOOL ,
microsoft_ad_domain
Overall health status for Active Directory domain. True if healthy, else false. Sampled every 60 seconds. After sampling, data is not visible for up to 195 seconds.
microsoft_ad/domain/ldaps/cert_ttl
BETA
(project)
LDAPS Certificate TTL
GAUGE , INT64 , d
microsoft_ad_domain
Number of days until certificate with the closest expiry in the chain used for LDAPS expires. Will be 0 if certificate has expired. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
microsoft_ad/domain/trust/state
BETA
(project)
AD Domain Trust Health
GAUGE , BOOL ,
microsoft_ad_domain
Detailed state for Active Directory trust between source and target domain. True if connected, else false. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
trust_direction :
The direction decides the domain is trusted, trusting or both.
target_domain_name :
The target domain name which is in trust with.
trust_type :
The different inter forest trust type.
managedkafka
Metrics from Google Cloud Managed Service for Apache Kafka .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with managedkafka.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
broker/under_min_isr_partitions
BETA
(project)
Under-MinISR Partitions
GAUGE , INT64 , {partition}
managedkafka.googleapis.com/Cluster
Number of under minIsr partitions (|ISR| < min.insync.replicas). From MBean kafka.server:type=ReplicaManager,name=UnderMinIsrPartitionCount. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
broker/under_replicated_partitions
BETA
(project)
Under-replicated Partitions
GAUGE , INT64 , {partition}
managedkafka.googleapis.com/Cluster
Number of under replicated partitions, or the number of partitions that have replicas not in sync. From MBean kafka.server:type=ReplicaManager,name=UnderReplicatedPartitions. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
byte_in_count
GA
(project)
Byte In Count
DELTA , INT64 , By
managedkafka.googleapis.com/Topic
The total number of bytes from clients sent to the topic. This comes from the MBean kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec,topic=([-.\w]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
byte_out_count
GA
(project)
Byte Out Count
DELTA , INT64 , By
managedkafka.googleapis.com/Topic
The total number of bytes sent to clients. This comes from the MBean kafka.server:type=BrokerTopicMetrics,name=BytesOutPerSec,topic=([-.\w]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
byte_size
GA
(project)
Byte Size
GAUGE , INT64 , By
managedkafka.googleapis.com/TopicPartition
The size of the partition on disk in bytes. This comes from MBean kafka.log:type=Log,name=Size,topic=([-.\w]+),partition=([0-9]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
cluster_byte_in_count
GA
(project)
Cluster Byte In Count
DELTA , INT64 , By
managedkafka.googleapis.com/Cluster
The total number of bytes from clients sent to all topics. This comes from the MBean kafka.server:type=BrokerTopicMetrics,name=BytesInPerSec. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
cluster_byte_out_count
GA
(project)
Cluster Byte Out Count
DELTA , INT64 , By
managedkafka.googleapis.com/Cluster
The total number of bytes sent to clients from all topics. This comes from the MBean kafka.server:type=BrokerTopicMetrics,name=BytesOutPerSec. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
cluster_message_in_count
GA
(project)
Cluster Message In Count
DELTA , INT64 , {message}
managedkafka.googleapis.com/Cluster
The total number of messages that have been published all topics. This comes from the MBean kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
connector_deadletterqueue_record_count
BETA
(project)
Connector Dead Letter Queue Record Count
DELTA , INT64 , {request}
managedkafka.googleapis.com/Connector
Total number of attempted or failed writes to the dead letter queue, from MBean kafka.connect<type=task-error-metrics, connector=(.+), task=(.+)><>(deadletterqueue-produce-failures|deadletterqueue-produce-requests). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
type :
The type of dead letter queue record counts (failures or requests).
connector_incoming_byte_rate
BETA
(project)
Connector Incoming Byte Rate
GAUGE , DOUBLE , By/s
managedkafka.googleapis.com/ConnectCluster
Average number of outgoing bytes read per second from all sockets from client connection, from MBean kafka.connect<type=connect-metrics, client-id=(.+)><>incoming-byte-rate. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
client_id :
The id of the connect client.
connector_outgoing_byte_rate
BETA
(project)
Connector Outgoing Byte Rate
GAUGE , DOUBLE , By/s
managedkafka.googleapis.com/ConnectCluster
Average number of outgoing bytes sent per second to all servers from client connection, from MBean kafka.connect<type=connect-metrics, client-id=(.+)><>outgoing-byte-rate. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
client_id :
The id of the connect client.
connector_request_rate
BETA
(project)
Connector Request Rate
GAUGE , DOUBLE , {request}/s
managedkafka.googleapis.com/ConnectCluster
Average number of requests sent per second from client connection, from MBean kafka.connect<type=connect-metrics, client-id=(.+)><>request-rate. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
client_id :
The id of the connect client.
connector_response_rate
BETA
(project)
Connector Response Rate
GAUGE , DOUBLE , {response}/s
managedkafka.googleapis.com/ConnectCluster
Average number of responses received and sent per second from client connection, from MBean kafka.connect<type=connect-metrics, client-id=(.+)><>response-rate. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
client_id :
The id of the connect client.
connector_sink_active_records
BETA
(project)
Connector Sink Record Active Counts
GAUGE , INT64 , {record}
managedkafka.googleapis.com/Connector
Most recent number of records read from Kafka but not completely committed by the sink task, from MBean kafka.connect<type=sink-task-metrics, connector=(.+), task=(.+)><>sink-record-active-count. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
connector_sink_record_rate
BETA
(project)
Connector Sink Record Rate
GAUGE , DOUBLE , {record}/s
managedkafka.googleapis.com/Connector
Average record read or send rate from sink connector, from MBean kafka.connect<type=source-task-metrics, connector=(.+), task=(.+)><>(sink-record-read-rate|sink-record-send-rate). Read rate is before transformation. Send rate is after transformation. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
type :
The type of sink record (read-rate or send-rate).
connector_source_active_records
BETA
(project)
Connector Source Record Active Counts
GAUGE , INT64 , {record}
managedkafka.googleapis.com/Connector
Most recent number of records polled by the task but not completely written to Kafka, from MBean kafka.connect<type=source-task-metrics, connector=(.+), task=(.+)><>source-record-active-count. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
connector_source_record_rate
BETA
(project)
Connector Source Record Rate
GAUGE , DOUBLE , {record}/s
managedkafka.googleapis.com/Connector
Average record write or poll rate from source connector, from MBean kafka.connect<type=source-task-metrics, connector=(.+), task=(.+)><>(source-record-write-rate|source-record-poll-rate). Poll rate is before transformation. Write rate is after transformation. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
type :
The type of source record (write-rate or poll-rate).
connector_tasks
BETA
(project)
Connector Task Counts
GAUGE , INT64 , {task}
managedkafka.googleapis.com/Connector
Number of connector task in different states, from MBean kafka.connect<type=connect-worker-metrics, connector=(.+)><>(connector-destroyed-task-count|connector-failed-task-count|connector-paused-task-count|connector-restarting-task-count|connector-running-task-count|connector-unassigned-task-count). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
state :
The state of the task (running, paused, unassigned, restarting, failed, or destroyed).
connector_total_error_record_count
BETA
(project)
Connector Total Record Error Count
DELTA , INT64 , {record}
managedkafka.googleapis.com/Connector
Total number of task record errors, from MBean kafka.connect<type=task-error-metrics, connector=(.+), task=(.+)><>(total-record-errors|total-record-failures|total-records-skipped). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
type :
The type of task record error counts (record-errors, record-failures, or record-skipped).
connector_total_retries_count
BETA
(project)
Connector Total Retries
DELTA , INT64 , {retry}
managedkafka.googleapis.com/Connector
Total number of connector task retries, from MBean kafka.connect<type=task-error-metrics, connector=(.+), task=(.+)><>total-retries. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
task :
The id of the task.
consumer_groups
GA
(project)
Consumer Groups
GAUGE , INT64 , {consumer_groups}
managedkafka.googleapis.com/Cluster
The current number of Consumer Groups consuming from the broker. This comes from MBean kafka.server:type=GroupMetadataManager,name=NumGroups. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
The state of the consumer group.
broker_index :
The index of the broker.
consumer_lag
GA
(project)
Consumer Lag
GAUGE , INT64 , message
managedkafka.googleapis.com/TopicPartition
Lag in messages per follower replica. This comes from MBean kafka.server:type=FetcherLagMetrics,name=ConsumerLag,clientId=([-.\w]+),topic=([-.\w]+),partition=([0-9]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
client_id :
The ID of the client consuming from the partition.
cpu/core_usage_time
GA
(project)
CPU Core Usage
DELTA , DOUBLE , s{vCPU}
managedkafka.googleapis.com/Cluster
Total CPU usage of the broker in vCPU seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
cpu/limit
GA
(project)
CPU Limit
GAUGE , DOUBLE , s{vCPU}/s
managedkafka.googleapis.com/Cluster
Current CPU limit of the broker in vCPUs. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
cpu/worker_core_usage_time
BETA
(project)
Connect Cluster Worker CPU Core Usage
DELTA , DOUBLE , s{vCPU}
managedkafka.googleapis.com/ConnectCluster
Total connect worker CPU usage of the worker in vCPU seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the worker.
disk/limit
GA
(project)
Disk Limit
GAUGE , DOUBLE , By
managedkafka.googleapis.com/Cluster
The disk limit of the broker in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
disk/used_bytes
GA
(project)
Used Disk Bytes
GAUGE , DOUBLE , By
managedkafka.googleapis.com/Cluster
Used bytes of the broker's disk. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
first_offset
GA
(project)
First Offset
GAUGE , INT64 , {offset}
managedkafka.googleapis.com/TopicPartition
The first offset in the partition. This comes from MBean kafka.log:type=Log,name=LogStartOffset,topic=([-.\w]+),partition=([0-9]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
last_offset
GA
(project)
Last Offset
GAUGE , INT64 , {offset}
managedkafka.googleapis.com/TopicPartition
The last offset in the partition. This comes from MBean kafka.log:type=Log,name=LogEndOffset,topic=([-.\w]+),partition=([0-9]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
log_segments
GA
(project)
Log Segments
GAUGE , INT64 , {log_segments}
managedkafka.googleapis.com/TopicPartition
The current number of log segments. This comes from MBean kafka.log:type=Log,name=NumLogSegments,topic=([-.\w]+),partition=([0-9]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
memory/limit
GA
(project)
Memory Limit
GAUGE , DOUBLE , By
managedkafka.googleapis.com/Cluster
The memory limit of the broker in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
memory/usage
GA
(project)
Memory Usage
GAUGE , INT64 , By
managedkafka.googleapis.com/Cluster
The memory usage of the broker in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
memory/worker_usage
BETA
(project)
Connect Cluster Worker Memory Usage
GAUGE , INT64 , By
managedkafka.googleapis.com/ConnectCluster
The worker memory usage of the worker in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the worker.
message_in_count
GA
(project)
Message In Count
DELTA , INT64 , {message}
managedkafka.googleapis.com/Topic
The total number of messages that have been published to the topic. This comes from the MBean kafka.server:type=BrokerTopicMetrics,name=MessagesInPerSec,topic=([-.\w]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
mirror_source_connector_byte_rate
BETA
(project)
Mirror Source Connector Byte Rate
GAUGE , DOUBLE , {byte}/s
managedkafka.googleapis.com/Connector
The average number of bytes per sec in replicated records, from MBean kafka.connect.mirror<type=MirrorSourceConnector, target=(.+), topic=(.+), partition=(.+)><>byte-rate. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
target :
The alias of target cluster.
topic :
The replicated topic on target cluster.
partition :
The partition being replicated on target cluster.
mirror_source_connector_bytes
BETA
(project)
Mirror Source Connector Byte Count
GAUGE , INT64 , {byte}
managedkafka.googleapis.com/Connector
The number of bytes in replicated records, from MBean kafka.connect.mirror<type=MirrorSourceConnector, target=(.+), topic=(.+), partition=(.+)><>byte-count. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
target :
The alias of target cluster.
topic :
The replicated topic on target cluster.
partition :
The partition being replicated on target cluster.
mirror_source_connector_record_age
BETA
(project)
Mirror Source Connector Record Age
GAUGE , INT64 , ms
managedkafka.googleapis.com/Connector
The age of a record when they are replicated, from MBean kafka.connect.mirror<type=MirrorSourceConnector, target=(.+), topic=(.+), partition=(.+)><>record-age-ms. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
target :
The alias of target cluster.
topic :
The replicated topic on target cluster.
partition :
The partition being replicated on target cluster.
mirror_source_connector_record_rate
BETA
(project)
Mirror Source Connector Record Rate
GAUGE , DOUBLE , {record}/s
managedkafka.googleapis.com/Connector
The rate of records replicated from source to target cluster, from MBean kafka.connect.mirror<type=MirrorSourceConnector, target=(.+), topic=(.+), partition=(.+)><>record-rate. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
target :
The alias of target cluster.
topic :
The replicated topic on target cluster.
partition :
The partition being replicated on target cluster.
mirror_source_connector_records
BETA
(project)
Mirror Source Connector Record Count
GAUGE , INT64 , {record}
managedkafka.googleapis.com/Connector
The number of records replicated from source to target cluster, from MBean kafka.connect.mirror<type=MirrorSourceConnector, target=(.+), topic=(.+), partition=(.+)><>record-count. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
target :
The alias of target cluster.
topic :
The replicated topic on target cluster.
partition :
The partition being replicated on target cluster.
mirror_source_connector_replication_latency
BETA
(project)
Mirror Source Connector Replication Latency
GAUGE , INT64 , ms
managedkafka.googleapis.com/Connector
The time it takes a record to propagate from source to target, from MBean kafka.connect.mirror<type=MirrorSourceConnector, target=(.+), topic=(.+), partition=(.+)><>replication-latency-ms. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
worker_id :
The id of the connect worker.
target :
The alias of target cluster.
topic :
The replicated topic on target cluster.
partition :
The partition being replicated on target cluster.
mtls_truststore_update_count
BETA
(project)
mTLS Truststore Update Count
DELTA , INT64 , {update}
managedkafka.googleapis.com/Cluster
A cumulative count of mTLS Truststore update attempts for the Kafka cluster categorized by the update status. This metric increments each time an mTLS truststore update attempt concludes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of the last truststore update attempt. Can be SUCCESS or a failure reason.
offline_partitions
GA
(project)
Offline Partitions
GAUGE , INT64 , {partition}
managedkafka.googleapis.com/Cluster
The number of offline topic partitions as observed by this Controller, from MBean kafka.controller:type=KafkaController,name=OfflinePartitionsCount. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
controller_index :
The index of the controller.
offset_lag
GA
(project)
Offset Lag
GAUGE , INT64 , {message}
managedkafka.googleapis.com/TopicPartitionConsumerGroup
The number of messages that the consumer group has not yet committed on the partition.
partitions
GA
(project)
Partitions
GAUGE , INT64 , {partition}
managedkafka.googleapis.com/Cluster
The current number of partitions handled by this broker. This comes from the MBean kafka.server:type=ReplicaManager,name=PartitionCount. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
request_byte_count
GA
(project)
Request Byte Count
DELTA , INT64 , By
managedkafka.googleapis.com/Cluster
The total size, in bytes, of requests made to the Cluster. This comes from the MBean kafka.network:type=RequestMetrics,name=RequestBytes,request=([-.\w]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
request :
The type of the request.
broker_index :
The index of the broker.
request_count
BETA
(project)
Request Count
DELTA , INT64 , {request}
managedkafka.googleapis.com/Cluster
The total number of requests made to the broker. This comes from the MBean kafka.network:type=RequestMetrics,name=RequestsPerSec,request={Produce|FetchConsumer|FetchFollower},version=([0-9]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
broker_index :
The index of the broker.
request :
The type of the request.
request_latencies
GA
(project)
Request Latencies
GAUGE , INT64 , ms
managedkafka.googleapis.com/Cluster
The number of milliseconds taken for each request, at various percentiles. This comes from MBean kafka.network:type=RequestMetrics,name=TotalTimeMs,request={Produce|FetchConsumer|FetchFollower}. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
request :
The type of the request.
percentile :
The latency percentile.
broker_index :
The index of the broker.
storage/long_term_usage
GA
(project)
Long Term Storage Usage
GAUGE , INT64 , By
managedkafka.googleapis.com/Cluster
The long term storage usage for the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic_error_count
BETA
(project)
Topic Error Count
DELTA , INT64 , {error}
managedkafka.googleapis.com/Topic
The total number failed requests made to the topic. This comes from the MBeans kafka.server:type=BrokerTopicMetrics,name=FailedProduceRequestsPerSec,topic=([-.\w]+) and kafka.server:type=BrokerTopicMetrics,name=FailedFetchRequestsPerSec,topic=([-.\w]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
request :
The type of the request.
broker_index :
The index of the broker.
topic_request_count
GA
(project)
Topic Request Count
DELTA , INT64 , {request}
managedkafka.googleapis.com/Topic
The total number of requests made to the topic. This comes from the MBeans kafka.server:type=BrokerTopicMetrics,name=TotalProduceRequestsPerSec,topic=([-.\w]+) and kafka.server:type=BrokerTopicMetrics,name=TotalFetchRequestsPerSec,topic=([-.\w]+). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
request :
The type of the request.
broker_index :
The index of the broker.
maps
Metrics from Google Maps Platform .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with maps.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
service/request_count
DEPRECATED
(project)
Request Count (Deprecated)
DELTA , INT64 , 1
maps.googleapis.com/Api
Use "maps.googleapis.com/service/v2/request_count" instead. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
grpc_status_code :
The numeric gRPC response code or canonical gRPC equivalent of the reported Google Maps Platform API HTTP response code. See code mapping in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto .
platform_type :
Platform type where Google Maps API query comes from.
response_code :
The response code of the Maps API call.
response_code_class :
The response code class of the Maps API call.
protocol :
The protocol of the request, for example, "http" or "grpc".
service/request_count_by_domain
GA
(project)
Request count by domains
DELTA , INT64 , 1
maps.googleapis.com/Api
The count of completed requests by top100 frequency domains. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
platform_type :
Platform type where Google Maps API query comes from, one of [PLATFORM_TYPE_JS, PLATFORM_TYPE_WEBSERVICE, PLATFORM_TYPE_UNKNOWN, PLATFORM_TYPE_ANDROID, PLATFORM_TYPE_IOS].
response_code_class :
The response code class of the Maps API call, one of [2xx, 3xx, 4xx, 5xx]
protocol :
The protocol of the request, for example, "http" or "grpc".
domain :
The domain of the request.
service/request_latencies
DEPRECATED
(project)
Service Request Latencies (Deprecated)
DELTA , DISTRIBUTION , ms
maps.googleapis.com/Api
Use "maps.googleapis.com/service/v2/request_latencies" instead. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
platform_type :
Platform type where Google Maps API query comes from.
response_code :
The response code of the Maps API call.
response_code_class :
The response code class of the Maps API call.
protocol :
The protocol of the request, for example, "http" or "grpc".
service/request_latencies_by_domain
GA
(project)
Request latencies by domains
DELTA , DISTRIBUTION , ms
maps.googleapis.com/Api
The latencies of completed requests by top100 frequency domains. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
platform_type :
Platform type of the request, for example, "IOS", "Android" or "Web service".
response_code_class :
The response code class of the Maps API call.
protocol :
The protocol of the request, for example, "http" or "grpc".
domain :
The domain of the request.
service/v2/request_count
GA
(project)
Request Count
DELTA , INT64 , 1
maps.googleapis.com/Api
The count of completed requests. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
grpc_status_code :
The numeric gRPC response code or canonical gRPC equivalent of the reported Google Maps Platform API HTTP response code. See code mapping in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto .
platform_type :
Platform type where Google Maps API query comes from.
response_code :
The response code of the Maps API call.
response_code_class :
The response code class of the Maps API call.
protocol :
The protocol of the request, for example, "http" or "grpc".
service/v2/request_latencies
GA
(project)
Service Request Latencies
DELTA , DISTRIBUTION , ms
maps.googleapis.com/Api
Distribution of latencies in milliseconds for non-streaming requests. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
platform_type :
Platform type where Google Maps API query comes from.
response_code :
The response code of the Maps API call.
response_code_class :
The response code class of the Maps API call.
protocol :
The protocol of the request, for example, "http" or "grpc".
memcache
Metrics from Memorystore for Memcached .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with memcache.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
node/active_connections
BETA
(project)
Active connections
GAUGE , INT64 , 1
memcache_node
Connections active in this Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/cache_memory
BETA
(project)
Cache memory usage
GAUGE , INT64 , By
memcache_node
Bytes alloted for the Memcached cache in this node, grouped by whether that memory is used or not. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
used :
0 for unused and 1 for used cache memory.
node/cpu/usage_time
BETA
(project)
CPU usage time
DELTA , DOUBLE , s{CPU}
memcache_node
CPU usage time by Memcached process grouped by user and kernel mode. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
mode :
CPU usage mode, e.g. user or kernel.
node/cpu/utilization
BETA
(project)
CPU usage percent
DELTA , DOUBLE , 10^2.%
memcache_node
CPU usage percent by Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/eviction_count
BETA
(project)
Eviction count
DELTA , INT64 , 1
memcache_node
Count of items evicted by this Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/hit_ratio
BETA
(project)
Hit ratio
GAUGE , DOUBLE , 10^2.%
memcache_node
Hit ratio, expressed as a percentage of the total cache requests excluding set operations. Values are numbers between 0.0 and 1.0, charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/items
BETA
(project)
Items
GAUGE , INT64 , 1
memcache_node
Items stored in this Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/memory/utilization
BETA
(project)
System memory utilization
GAUGE , DOUBLE , 10^2.%
memcache_node
Utilization of system memory by Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/operation_count
BETA
(project)
Memcached operation count
DELTA , INT64 , 1
memcache_node
Count of Memcached operations grouped by command and response_type (e.g. hit, miss). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
command :
Name of the Memcached command.
response_type :
Status of the operation, e.g. hit, miss.
node/received_bytes_count
BETA
(project)
Received bytes
DELTA , INT64 , By
memcache_node
Bytes received by this Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/sent_bytes_count
BETA
(project)
Sent bytes
DELTA , INT64 , By
memcache_node
Bytes sent by this Memcached node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/uptime
BETA
(project)
Uptime
GAUGE , INT64 , s
memcache_node
Time in seconds the node has been running. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memorystore
Metrics from Memorystore .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with memorystore.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
instance/backup/last_backup_duration
GA
(project)
Last backup duration
GAUGE , INT64 , ms
memorystore.googleapis.com/Instance
The duration of the last backup operation as milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
instance/backup/last_backup_size
GA
(project)
Last backup size
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
The size of the last backup in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
instance/backup/last_backup_start_time
GA
(project)
Last backup start time
GAUGE , INT64 , s
memorystore.googleapis.com/Instance
The start time of the last backup operation. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
instance/backup/last_backup_status
GA
(project)
Last backup status
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The status of the last backup operation as 1/0 (success/failure). Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
instance/clients/average_connected_clients
GA
(project)
Client connections - average
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Mean current number of client connections across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/clients/maximum_connected_clients
GA
(project)
Client connections - maximum
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Maximum current number of client connections across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/clients/total_connected_clients
GA
(project)
Client connections - total
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Current number of client connections to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/commandstats/total_calls_count
GA
(project)
Commands count
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Count of Engine commands. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
instance/commandstats/total_usec_count
GA
(project)
Commands time
DELTA , INT64 , us
memorystore.googleapis.com/Instance
The total time consumed per command. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
instance/cpu/average_utilization
GA
(project)
CPU utilization - average
GAUGE , DOUBLE , 10^2.%
memorystore.googleapis.com/Instance
Mean CPU utilization across the instance from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/cpu/maximum_utilization
GA
(project)
CPU utilization - maximum
GAUGE , DOUBLE , 10^2.%
memorystore.googleapis.com/Instance
Maximum CPU utilization across the instance from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/cross_instance_replication/secondary_average_replication_offset_diff
GA
(project)
Cross instance replication average offset diff
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
Average replication offset difference between primary shards and secondary shards. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
secondary_instance_project_number :
Secondary instance project number.
secondary_instance_location :
Secondary instance location.
secondary_instance_id :
Secondary instance Id.
secondary_instance_uid :
Secondary instance uid.
instance/cross_instance_replication/secondary_maximum_replication_offset_diff
GA
(project)
Cross instance replication maximum offset diff
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
Maximum replication offset difference between primary shards and secondary shards. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
secondary_instance_project_number :
Secondary instance project number.
secondary_instance_location :
Secondary instance location.
secondary_instance_id :
Secondary instance Id.
secondary_instance_uid :
Secondary instance uid.
instance/cross_instance_replication/secondary_replication_links
GA
(project)
Cross instance replication links
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Number of replication links between a primary instance and a secondary instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
secondary_instance_project_number :
Secondary instance project number.
secondary_instance_location :
Secondary instance location.
secondary_instance_id :
Secondary instance Id.
secondary_instance_uid :
Secondary instance uid.
instance/import/last_import_duration
GA
(project)
Last import duration
GAUGE , INT64 , ms
memorystore.googleapis.com/Instance
The duration of the last import operation as milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
import_type :
The type of the import, one of [CREATE_IMPORT, LIVE_IMPORT].
import_source :
The source of the import, one of [MANAGED_BACKUP, GCS_SOURCE].
instance/import/last_import_start_time
GA
(project)
Last import start time
GAUGE , INT64 , s
memorystore.googleapis.com/Instance
The start time of the last import operation. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
import_type :
The type of the import, one of [CREATE_IMPORT, LIVE_IMPORT].
import_source :
The source of the import, one of [MANAGED_BACKUP, GCS_SOURCE].
instance/keyspace/total_keys
GA
(project)
Total keys
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Number of keys stored in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/memory/average_utilization
GA
(project)
Memory utilization - average
GAUGE , DOUBLE , 10^2.%
memorystore.googleapis.com/Instance
Mean memory utilization across the instance from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/memory/maximum_utilization
GA
(project)
Memory utilization - maximum
GAUGE , DOUBLE , 10^2.%
memorystore.googleapis.com/Instance
Maximum memory utilization across the instance from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/memory/size
GA
(project)
Memory size
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
Memory size of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/memory/total_used_memory
GA
(project)
Memory usage
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
Total memory usage of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/node/bloomfilter/objects_count
GA
(project)
Bloom filter objects count
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of bloom filter object in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/bloomfilter/used_memory
GA
(project)
Bloom filter memory usage
GAUGE , INT64 , By
memorystore.googleapis.com/InstanceNode
Memory consumed by the bloom filter objects in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/clients/blocked_clients
GA
(project)
Blocked connections
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of client connections blocked by the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/clients/connected_clients
GA
(project)
Client connections
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of clients connected to the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/commandstats/calls_count
GA
(project)
Commands count
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Total number of calls for this command on the instance node in one minute. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
instance/node/commandstats/usec_count
GA
(project)
Commands time
DELTA , INT64 , us
memorystore.googleapis.com/InstanceNode
The total time consumed per command in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
instance/node/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
memorystore.googleapis.com/InstanceNode
CPU utilization for the instance node from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
state :
CPU usage state, one of [sys, sys_children, sys_main_thread, user, user_children, user_main_thread]
instance/node/cross_instance_replication/follower_replication_offset_diff
GA
(project)
Cross instance replication follower offset diff
GAUGE , INT64 , By
memorystore.googleapis.com/InstanceNode
Replication offset diff in bytes between a replicator node and its follower node, reported by the replicator node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
secondary_instance_project_number :
Secondary instance project number.
secondary_instance_location :
Secondary instance Id.
secondary_instance_id :
Secondary instance Id.
secondary_instance_uid :
Secondary instance uid.
follower_node_id :
Follower node Id.
instance/node/cross_instance_replication/role
GA
(project)
Cross instance replication role
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Cross instance replication role of the node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
ccr_role :
Cross instance replication role, one of [replicator, follower].
instance/node/json/documents_count
GA
(project)
JSON documents count
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of JSON documents in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/json/used_memory
GA
(project)
JSON memory usage
GAUGE , INT64 , By
memorystore.googleapis.com/InstanceNode
Memory consumed by the JSON documents in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/keyspace/total_keys
GA
(project)
Total keys
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of keys stored in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/memory/usage
GA
(project)
Memory usage
GAUGE , INT64 , By
memorystore.googleapis.com/InstanceNode
Total memory usage of the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/memory/utilization
GA
(project)
Memory utilization
GAUGE , DOUBLE , 10^2.%
memorystore.googleapis.com/InstanceNode
Memory utilization within the instance node from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/migration_link_reconnect_count
BETA
(project)
Node migration link reconnections
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of migration link reconnections. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/migration_received_bytes_size
BETA
(project)
Node migration received bytes
DELTA , INT64 , By
memorystore.googleapis.com/InstanceNode
Number of migration bytes received. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/migration_status
BETA
(project)
Node migration status
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Represents the migration status of the node, e.g. if a primary node is in migrating state and replication link is up, it is HEALTHY. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status :
The migration status of the node, one of [HEALTHY, UNHEALTHY, NOT_APPLICABLE].
instance/node/persistence/aof_fsync_errors_count
GA
(project)
AOF fsync errors count
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of AOF fsync errors on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/persistence/aof_fsync_lag
GA
(project)
AOF fsync lag
GAUGE , INT64 , s
memorystore.googleapis.com/InstanceNode
AOF lag between memory and persistent store on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/persistence/aof_last_bgrewrite_status
GA
(project)
AOF last bgrewrite success
GAUGE , BOOL , 1
memorystore.googleapis.com/InstanceNode
Indicates the success of the last AOF bgrewrite operation on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_string :
Status code description.
instance/node/persistence/aof_last_write_status
GA
(project)
AOF last write success
GAUGE , BOOL , 1
memorystore.googleapis.com/InstanceNode
Indicates the success of the last AOF write operation on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_string :
Status code description.
instance/node/persistence/aof_rewrites_count
GA
(project)
AOF rewrites count
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
AOF rewrites count on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_code :
(INT64)
gRPC error code (e.g. 0=OK, 8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
instance/node/persistence/auto_restore_count
GA
(project)
Auto restore count
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of restores from dumpfile on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_code :
(INT64)
gRPC error code (e.g. 0=OK, 13=INTERNAL)
status_string :
Status code description.
persistence_mode :
"AOF" or "RDB".
instance/node/persistence/current_save_keys_total
GA
(project)
Keys in current save
GAUGE , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of keys at the beginning of the current save operation. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/persistence/rdb_bgsave_in_progress
GA
(project)
RDB BGSAVE in progress
GAUGE , BOOL , 1
memorystore.googleapis.com/InstanceNode
Indicates if a RDB BGSAVE is currently in progress on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/persistence/rdb_last_bgsave_status
GA
(project)
RDB last BGSAVE success
GAUGE , BOOL , 1
memorystore.googleapis.com/InstanceNode
Indicates the success of the last BGSAVE on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_string :
Status code description.
instance/node/persistence/rdb_last_save_age
GA
(project)
RDB last save age
GAUGE , INT64 , s
memorystore.googleapis.com/InstanceNode
Measures the time in seconds, since the last successful snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/persistence/rdb_next_save_time_until
GA
(project)
Time until next RDB snapshot
GAUGE , INT64 , s
memorystore.googleapis.com/InstanceNode
Measures the time in seconds, remaining until the next snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/persistence/rdb_saves_count
GA
(project)
RDB saves count.
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of RDB saves in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_code :
(INT64)
gRPC error code (e.g. 0=OK, 8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
instance/node/replication/offset
GA
(project)
Replication offset
GAUGE , INT64 , By
memorystore.googleapis.com/InstanceNode
Measures the replication offset bytes of the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/server/healthy
GA
(project)
Node is healthy
GAUGE , BOOL , 1
memorystore.googleapis.com/InstanceNode
Indicates if Instance Node is healthy and available. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/server/uptime
GA
(project)
Node uptime
GAUGE , INT64 , s
memorystore.googleapis.com/InstanceNode
Measures the uptime of the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/connections_received_count
GA
(project)
Client connections - received
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of total client connections created in the last one minute on the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/evicted_keys_count
GA
(project)
Evicted keys
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of evicted keys by the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/expired_keys_count
GA
(project)
Expired keys
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of key expiration events in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/keyspace_hits_count
GA
(project)
Keyspace hits
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of successful lookup of keys in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/keyspace_misses_count
GA
(project)
Keyspace misses
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Count of failed lookup of keys in the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/net_input_bytes_count
GA
(project)
Network bytes - incoming
DELTA , INT64 , By
memorystore.googleapis.com/InstanceNode
Count of incoming network bytes received by the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/net_output_bytes_count
GA
(project)
Network bytes - outgoing
DELTA , INT64 , By
memorystore.googleapis.com/InstanceNode
Count of outgoing network bytes sent from the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/node/stats/rejected_connections_count
GA
(project)
Client connections - rejected
DELTA , INT64 , 1
memorystore.googleapis.com/InstanceNode
Number of connections rejected because of maxclients limit by the instance node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/persistence/aof_fsync_lags
GA
(project)
AOF fsync lags.
GAUGE , DISTRIBUTION , s
memorystore.googleapis.com/Instance
Distribution of AOF lag between memory and persistent store across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/persistence/aof_rewrite_count
GA
(project)
AOF rewrite count.
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Count of AOF rewrites across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_code :
(INT64)
gRPC error code (e.g. 0=OK,8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
instance/persistence/rdb_last_success_ages
GA
(project)
RDB snapshot ages.
GAUGE , DISTRIBUTION , s
memorystore.googleapis.com/Instance
Age of RDB snapshots across instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/persistence/rdb_saves_count
GA
(project)
RDB saves count.
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Count of RDB saves across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_code :
(INT64)
gRPC error code (e.g. 0=OK,8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
instance/replication/average_ack_lag
GA
(project)
Replication acknowledge lag - average
GAUGE , DOUBLE , s
memorystore.googleapis.com/Instance
Mean replication acknowledge lag (in seconds) of replica across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/replication/average_offset_diff
GA
(project)
Replication offset diff - average
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
Mean replication offset diff (in bytes) across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/replication/maximum_ack_lag
GA
(project)
Replication acknowledge lag - maximum
GAUGE , DOUBLE , s
memorystore.googleapis.com/Instance
Maximum replication acknowledge lag (in seconds) of replica across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/replication/maximum_offset_diff
GA
(project)
Replication offset diff - maximum
GAUGE , INT64 , By
memorystore.googleapis.com/Instance
Maximum replication offset diff (in bytes) across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/attributes
GA
(project)
Vector search attributes
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The number of attributes across all indexes for vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/average_used_memory_bytes
GA
(project)
Vector search average used memory
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The average per-node used memory for all search functionality, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/background_indexing_in_progress
GA
(project)
Vector search background indexing in progress
GAUGE , BOOL , 1
memorystore.googleapis.com/Instance
Indicates if the background indexing is in progress across any index. When the metric value is true, background indexing is in progress in at least one index. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/indexed_keys
GA
(project)
Vector search indexed keys
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The number of keys indexed across all indexes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/indexes
GA
(project)
Vector search indexes
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The number of indexes created for searching for vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/maximum_used_memory_bytes
GA
(project)
Vector search maximum used memory
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The maximum per-node used memory for all search functionality, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/search/query_requests_count
GA
(project)
Vector search query request count
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
The number of query requests across all indexes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status :
Success or failure of the query request. one of [success, failure].
role :
The replication role, one of [primary, replica].
instance/search/total_used_memory_bytes
GA
(project)
Vector search total used memory
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
The total used memory in bytes for all search functionality in all nodes, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/security/rotate_tls_cert_count
BETA
(project)
TLS certificate rotation count
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Count of TLS certificate rotations on the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status :
The status of the TLS certificate rotation.
failure_reason :
The failure reason of the TLS certificate rotation.
rotation_trigger_source :
The trigger source of the TLS certificate rotation.
instance/stats/average_evicted_keys
GA
(project)
Evicted keys - average
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Mean number of evicted keys due to memory capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/stats/average_expired_keys
GA
(project)
Expired keys - average
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Mean number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/stats/average_keyspace_hits
GA
(project)
Keyspace hits - average
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Mean number of successful lookup of keys across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/average_keyspace_misses
GA
(project)
Keyspace misses - average
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Mean number of failed lookup of keys across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/maximum_evicted_keys
GA
(project)
Evicted keys - maximum
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Maximum number of evicted keys due to memory capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/stats/maximum_expired_keys
GA
(project)
Expired keys - maximum
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Maximum number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/stats/maximum_keyspace_hits
GA
(project)
Keyspace hits - maximum
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Maximum number of successful lookup of keys across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/maximum_keyspace_misses
GA
(project)
Keyspace misses - maximum
GAUGE , INT64 , 1
memorystore.googleapis.com/Instance
Maximum number of failed lookup of keys across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/total_connections_received_count
GA
(project)
Client connections - received
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Count of client connections created in the last one minute. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/total_evicted_keys_count
GA
(project)
Evicted keys - total
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Total number of evicted keys due to memory capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/stats/total_expired_keys_count
GA
(project)
Expired keys - total
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Total number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
instance/stats/total_keyspace_hits_count
GA
(project)
Keyspace Hits - total
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Total number of successful lookup of keys across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/total_keyspace_misses_count
GA
(project)
Keyspace misses - total
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Total number of failed lookup of keys across the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/total_net_input_bytes_count
GA
(project)
Network bytes - incoming total
DELTA , INT64 , By
memorystore.googleapis.com/Instance
Count of incoming network bytes received by the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/total_net_output_bytes_count
GA
(project)
Network bytes - outgoing total
DELTA , INT64 , By
memorystore.googleapis.com/Instance
Count of outgoing network bytes sent from the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
instance/stats/total_rejected_connections_count
GA
(project)
Client connections - rejected
DELTA , INT64 , 1
memorystore.googleapis.com/Instance
Count of client connections rejected because of maxclients limit. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
metastore
Metrics from Dataproc Metastore .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with metastore.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
federation/health
BETA
(project)
Federation service health
GAUGE , INT64 , 1
metastore.googleapis.com/Federation
The health of the Federated Dataproc Metastore Service.
version :
The Hive Metastore version of the service.
federation/server/request_count
BETA
(project)
Federation service request count
DELTA , INT64 , {request}
metastore.googleapis.com/Federation
The number of requests sent to the Federated Dataproc Metastore Service.
method_name :
The request method name.
status :
End status of the request, one of [success, client_error, server_error].
version :
The Hive Metastore version of the service.
service/grpc/finished_requests_count
BETA
(project)
gRPC Requests Finished Count
DELTA , INT64 , 1
metastore.googleapis.com/Service
The number of requests finished by the GRPC Dataproc Metastore Service.
tier :
Service tier or instance size of the service, such as ENTERPRISE.
version :
The Hive Metastore version of the service.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc/received_bytes_count
BETA
(project)
gRPC Bytes Received
DELTA , INT64 , By
metastore.googleapis.com/Service
Number of bytes received by the Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
service/grpc/request_latencies
BETA
(project)
gRPC Request Latencies
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
Distribution of gRPC request latencies for a Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc/sent_bytes_count
BETA
(project)
gRPC Bytes Sent
DELTA , INT64 , By
metastore.googleapis.com/Service
Number of bytes sent by the Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
service/grpc/started_requests_count
BETA
(project)
gRPC Requests Started Count
DELTA , INT64 , 1
metastore.googleapis.com/Service
The number of requests received and started by the GRPC Dataproc Metastore Service.
tier :
Service tier or instance size of the service.
version :
The Hive Metastore version of the service.
method_name :
The request method name.
service/grpc_client/finished_requests_count
BETA
(project)
gRPC Client Requests Finished Count
CUMULATIVE , INT64 , 1
metastore.googleapis.com/Service
Total number of RPCs completed on the client, regardless of success or failure.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc_client/received_bytes_count
BETA
(project)
gRPC Client Bytes Received
CUMULATIVE , INT64 , By
metastore.googleapis.com/Service
Number of bytes received by the gRPC client.
service/grpc_client/request_latencies
BETA
(project)
gRPC Client Request Latencies
CUMULATIVE , DISTRIBUTION , ms
metastore.googleapis.com/Service
Distribution of gRPC request latencies for a Dataproc Metastore Service.
status :
The gRPC status code of the request, such as `NOT_FOUND`.
method_name :
The request method name.
service/grpc_client/sent_bytes_count
BETA
(project)
gRPC Client Bytes Sent
CUMULATIVE , INT64 , By
metastore.googleapis.com/Service
Number of bytes sent by the gRPC client.
service/grpc_client/started_requests_count
BETA
(project)
gRPC Client Requests Started Count
CUMULATIVE , INT64 , 1
metastore.googleapis.com/Service
The number of requests started by the gRPC client.
method_name :
The request method name.
service/health
GA
(project)
Service health
GAUGE , INT64 , 1
metastore.googleapis.com/Service
The health of the Dataproc Metastore Service.
tier :
Service tier or instance size of the service, such as ENTERPRISE.
version :
The Hive Metastore version of the service.
release_tag :
Dataproc Metastore release tag, populated by the service backend and may change over service lifetime.
service/metadata/bytes_used
BETA
(project)
Size of the metadata stored in the Dataproc Metastore service.
GAUGE , INT64 , By
metastore.googleapis.com/Service
The amount of data that is stored in the backend database of the service.
version :
The Hive Metastore version of the service.
database_type :
The type of database, one of [SQL, Spanner].
service/migration/replication_lag
BETA
(project)
Replication pipeline processing latency in seconds.
GAUGE , DOUBLE , s
metastore.googleapis.com/Service
Current maximum duration in seconds taken to replicate data to Dataproc Metastore.
migration_id :
The migration ID.
service/migration/write_throughput
BETA
(project)
Destination database write throughput.
GAUGE , DOUBLE , By/s
metastore.googleapis.com/Service
Current write throughput at the Dataproc Metastore database where the data is being copied to during the replication phase.
migration_id :
The migration ID.
service/multi_region/health
GA
(project)
Multiregional service health
GAUGE , INT64 , 1
metastore.googleapis.com/Service
The health of the multiregional Dataproc Metastore Service.
version :
The Hive Metastore version of the service.
release_tag :
Dataproc Metastore release tag, populated by the service backend and may change over service lifetime.
service_region :
The constituent region that Dataproc Metastore service is hosted in.
scaling_factor :
Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].
service/multi_region/request_count
GA
(project)
Multiregional service request count
DELTA , INT64 , {request}
metastore.googleapis.com/Service
The number of requests sent to the multiregional Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service_region :
The constituent region that Dataproc Metastore service is hosted in.
scaling_factor :
Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].
service/multi_region/request_latencies
GA
(project)
Multiregional service request latencies
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
The latencies of the requests sent to the multiregional Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service_region :
The constituent region that Dataproc Metastore service is hosted in.
scaling_factor :
Scaling factor of the service, one of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0].
service/query_metadata/request_count
BETA
(project)
Admin Interface request count
DELTA , INT64 , {request}
metastore.googleapis.com/Service
The number of Admin Interface requests.
database_type :
The type of database, one of [SQL, Spanner].
code :
The gRPC status code.
service/query_metadata/request_latencies
BETA
(project)
Admin Interface request latency
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
The end to end request latency for Admin Interface requests.
database_type :
The type of database, one of [SQL, Spanner].
code :
The gRPC status code.
service/request_count
GA
(project)
Request count
DELTA , INT64 , {request}
metastore.googleapis.com/Service
The number of requests sent to the Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service/request_latencies
BETA
(project)
Request latencies
DELTA , DISTRIBUTION , ms
metastore.googleapis.com/Service
The latencies of the requests sent to the Dataproc Metastore Service.
method_name :
The request method name.
version :
The Hive Metastore version of the service.
service/scheduled_backups/backup_count
BETA
(project)
Scheduled Backups Count
DELTA , INT64 , 1
metastore.googleapis.com/Service
The number of scheduled backups currently stored for the service.
state :
State of the backup, one of [SUCCEEDED, FAILED, IN_PROGRESS].
database_type :
The type of database, one of [SQL, Spanner].
version :
The Hive Metastore version of the service.
service/scheduled_backups/last_backup_duration
BETA
(project)
Scheduled Backups - Last Backup Duration
GAUGE , INT64 , s
metastore.googleapis.com/Service
The duration of the last successful scheduled backup in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
State of the backup, one of [SUCCEEDED, FAILED, IN_PROGRESS].
database_type :
The type of database, one of [SQL, Spanner].
version :
The Hive Metastore version of the service.
service/scheduled_backups/last_backup_size
BETA
(project)
Scheduled Backups Request - Last Backup Size
GAUGE , INT64 , By
metastore.googleapis.com/Service
The size of the last successful scheduled backup in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
State of the backup, one of [SUCCEEDED, FAILED, IN_PROGRESS].
database_type :
The type of database, one of [SQL, Spanner].
version :
The Hive Metastore version of the service.
ml
Metrics from Vertex AI (formerly Cloud Machine Learning).
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with ml.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
prediction/error_count
GA
(project)
Error count
DELTA , INT64 , 1
cloudml_model_version
Cumulative count of prediction errors. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
prediction_type :
One of the CloudML prediction types: online_prediction, batch_prediction.
prediction/latencies
GA
(project)
Latency
DELTA , DISTRIBUTION , us
cloudml_model_version
Latency of a certain type. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
latency_type :
One of the following: overhead, model, or user. Aggregating these three gives us the total latency.
prediction/online/accelerator/duty_cycle
ALPHA
(project)
Accelerator duty cycle
GAUGE , DOUBLE , 10^2.%
cloudml_model_version
Average fraction of time over the past sample period during which the accelerator(s) were actively processing. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
replica_id :
Unique ID corresponding to the model replica.
prediction/online/accelerator/memory/bytes_used
ALPHA
(project)
Accelerator memory usage
GAUGE , INT64 , By
cloudml_model_version
Amount of accelerator memory allocated by the model replica. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
replica_id :
Unique ID corresponding to the model replica.
prediction/online/cpu/utilization
ALPHA
(project)
CPU usage
GAUGE , DOUBLE , 10^2.%
cloudml_model_version
Fraction of CPU allocated by the model replica and currently in use. May exceed 100% if the machine type has multiple CPUs. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
replica_id :
Unique ID corresponding to the model replica.
prediction/online/memory/bytes_used
ALPHA
(project)
Memory usage
GAUGE , INT64 , By
cloudml_model_version
Amount of memory allocated by the model replica and currently in use. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
replica_id :
Unique ID corresponding to the model replica.
prediction/online/network/bytes_received
ALPHA
(project)
Network bytes received
DELTA , INT64 , By
cloudml_model_version
Number of bytes received over the network by the model replica. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
replica_id :
ID corresponding to the model replica.
prediction/online/network/bytes_sent
ALPHA
(project)
Network bytes sent
DELTA , INT64 , By
cloudml_model_version
Number of bytes sent over the network by the model replica. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
replica_id :
Unique ID corresponding to the model replica.
prediction/online/replicas
ALPHA
(project)
Replica count
GAUGE , INT64 , 1
cloudml_model_version
Number of active model replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
prediction/online/target_replicas
ALPHA
(project)
Replica target
GAUGE , INT64 , 1
cloudml_model_version
Aspired number of active model replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
prediction/prediction_count
GA
(project)
Prediction count
DELTA , INT64 , 1
cloudml_model_version
Cumulative count of predictions. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
prediction_type :
One of the CloudML prediction types: online_prediction, batch_prediction.
prediction/response_count
GA
(project)
Response count
DELTA , INT64 , 1
cloudml_model_version
Cumulative count of different response codes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
prediction_type :
One of the CloudML prediction types: online_prediction, batch_prediction.
response_code :
(INT64)
The http response code.
training/accelerator/memory/utilization
BETA
(project)
Accelerator memory utilization
GAUGE , DOUBLE , 10^2.%
cloudml_job
Fraction of allocated accelerator memory that is currently in use. Values are numbers between 0.0 and 1.0, charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the CloudML training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
training/accelerator/utilization
BETA
(project)
Accelerator utilization
GAUGE , DOUBLE , 10^2.%
cloudml_job
Fraction of allocated accelerator that is currently in use. Values are numbers between 0.0 and 1.0, charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the CloudML training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
training/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
cloudml_job
Fraction of allocated CPU that is currently in use. Values are numbers between 0.0 and 1.0, charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the CloudML training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
training/disk/utilization
GA
(project)
Disk bytes used
GAUGE , INT64 , By
cloudml_job
Number of bytes used by the training job. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the Vertex AI training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
training/memory/utilization
GA
(project)
Memory utilization
GAUGE , DOUBLE , 10^2.%
cloudml_job
Fraction of allocated memory that is currently in use. Values are numbers between 0.0 and 1.0, charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the CloudML training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
training/network/received_bytes_count
GA
(project)
Network bytes received
DELTA , INT64 , By
cloudml_job
Number of bytes received by the training job over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the CloudML training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
training/network/sent_bytes_count
GA
(project)
Network bytes sent
DELTA , INT64 , By
cloudml_job
Number of bytes sent by the training job over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
task_type :
One of the CloudML training job task types: master, worker or ps (for Parameter Server).
task_index :
(INT64)
Zero based task index.
trial_id :
ID of hyperparameter trial.
modelarmor
Metrics from Model Armor
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with modelarmor.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
template/malicious_uri_request_count
BETA
(project, folder, organization)
Malicious URI Filter Count
DELTA , INT64 , 1
modelarmor.googleapis.com/Template
The number of requests detected with malicious uri content against a template. Sampled every 60 seconds.
match_found :
(BOOL)
Whether a match was found in the request for the malicious uri filter.
operation_type :
Sanitize API Operation type. It can be SANITIZE_USER_PROMPT or SANITIZE_MODEL_RESPONSE.
client_name :
The name of the client making the request.
template/pi_jb_request_count
BETA
(project, folder, organization)
Prompt Injection and Jailbreak Filter Count
DELTA , INT64 , 1
modelarmor.googleapis.com/Template
The number of requests detected with Prompt Injection and Jailbreak content against a template. Sampled every 60 seconds.
match_found :
(BOOL)
Whether a match was found in the request for the Prompt Injection and Jailbreak filter.
operation_type :
Sanitize API Operation type. It can be SANITIZE_USER_PROMPT or SANITIZE_MODEL_RESPONSE.
confidence_level :
Confidence Level of Model Armor detections. It can be NA, LOW_AND_ABOVE, MEDIUM_AND_ABOVE or HIGH.
client_name :
The name of the client making the request.
template/rai_request_count
BETA
(project, folder, organization)
Responsible AI Filter Count
DELTA , INT64 , 1
modelarmor.googleapis.com/Template
The number of requests detected with Responsible AI filters content against a template. Sampled every 60 seconds.
match_found :
(BOOL)
Whether a match was found in the request for the Responsible AI filter.
operation_type :
Sanitize API Operation type. It can be SANITIZE_USER_PROMPT or SANITIZE_MODEL_RESPONSE.
filter_sub_type :
Responsible AI filter subtype. It can be DANGEROUS, SEXUALLY_EXPLICIT, HATE_SPEECH or HARASSMENT.
confidence_level :
Confidence Level of Model Armor detections. It can be NA, LOW_AND_ABOVE, MEDIUM_AND_ABOVE or HIGH.
client_name :
The name of the client making the request.
template/request_count
BETA
(project, folder, organization)
SanitizeAPI Request Count
DELTA , INT64 , 1
modelarmor.googleapis.com/Template
The number of requests received by Model Armor sanitize APIs. Sampled every 60 seconds.
match_found :
(BOOL)
Whether a match was found in the request for any filter.
operation_type :
Sanitize API Operation type. It can be SANITIZE_USER_PROMPT or SANITIZE_MODEL_RESPONSE.
client_name :
The name of the client making the request.
sanitization_verdict :
The verdict of the sanitization. It can be BLOCKED or ALLOWED.
template/sdp_request_count
BETA
(project, folder, organization)
Sensitive Data Protection Filter Count
DELTA , INT64 , 1
modelarmor.googleapis.com/Template
The number of requests detected with Sensitive Data Protection content against a template. Sampled every 60 seconds.
match_found :
(BOOL)
Whether a match was found in the request for the Sensitive Data Protection filter.
operation_type :
Sanitize API Operation type. It can be SANITIZE_USER_PROMPT or SANITIZE_MODEL_RESPONSE.
filter_sub_type :
Sensitive Data Protection filter subtype. It can be BASIC or ADVANCED.
sdp_data_type :
Type of data detected by Sensitive Data Protection. It can be NA, SSN, GCP_API_KEY, GCP_EUC, etc.
transformed :
(BOOL)
If the content was transformed.
client_name :
The name of the client making the request.
template/used_token_count
BETA
(project, folder, organization)
Used Token Count
DELTA , DOUBLE , 1
modelarmor.googleapis.com/Template
The number of tokens processed against a template. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operation_type :
Sanitize API Operation type. It can be SANITIZE_USER_PROMPT or SANITIZE_MODEL_RESPONSE.
client_name :
The name of the client making the request.
monitoring
Metrics from Cloud Monitoring .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with monitoring.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
billing/bytes_ingested
GA
(project)
Metric bytes ingested
DELTA , INT64 , By
global
Chargeable number of bytes of metric data ingested. Sampled every 60 seconds. After sampling, data is not visible for up to 1020 seconds.
metric_domain :
Domain name prefix from the metric type.
metric_type :
Metric type for the ingested data.
resource_type :
Monitored resource type for the ingested data.
billing/bytes_ingested_hourly
GA
(project)
Metric bytes ingested hourly
DELTA , INT64 , By
global
Chargeable number of bytes of metric data ingested, aggregated hourly. Sampled every 3600 seconds. After sampling, data is not visible for up to 8220 seconds.
metric_domain :
Domain name prefix from the metric type.
metric_type :
Metric type for the ingested data.
resource_type :
Monitored resource type for the ingested data.
billing/samples_ingested
GA
(project)
Metric samples ingested
DELTA , INT64 , 1
global
Chargeable number of samples of metric data ingested. Chargeable usage reported as samples ingested is never reported as bytes ingested, and vice versa. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
metric_domain :
Domain name prefix from the metric type.
metric_type :
Metric type for the ingested data.
resource_type :
Monitored resource type for the ingested data.
billing/samples_ingested_hourly
GA
(project)
Metric samples ingested hourly
DELTA , INT64 , 1
global
Chargeable number of samples of metric data ingested, aggregated hourly. Chargeable usage reported as samples ingested is never reported as bytes ingested, and vice versa. Sampled every 3600 seconds. After sampling, data is not visible for up to 7500 seconds.
metric_domain :
Domain name prefix from the metric type.
metric_type :
Metric type for the ingested data.
resource_type :
Monitored resource type for the ingested data.
billing/time_series_billed_for_queries_count
BETA
(project)
Count of time series billed for queries
DELTA , INT64 , 1
global
The number of time series billed for queries. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
api_method :
The fully qualified name of the API method which billed the time series.
collection/attribution/write_sample_count
BETA
(project)
Samples written by attribution id
DELTA , INT64 , 1
monitoring.googleapis.com/MetricIngestionAttribution
The number of chargeable metric samples written that are tagged with a reporting attribution dimension.
metric_domain :
The metric domain.
metric_type :
The metric type.
resource_type :
The monitored resource type.
collection/write_request_point_count
DEPRECATED
(project)
(DEPRECATED) Metric write requests
DELTA , INT64 , 1
monitoring.googleapis.com/MetricStatistics
The number of metric points written. One request may contain multiple points, which are counted separately. This metric is deprecated. Please refer to https://cloud.google.com/monitoring/docs/metrics-management#diagnostics and https://cloud.google.com/monitoring/docs/metrics-management#view-summary for how monitor the ingestion of metrics.
resource_type :
The monitored resource type.
status :
The status code for the write attempt, for example, "OK" or "INVALID_ARGUMENT".
stats/filtered_byte_count
ALPHA
(project)
Filtered byte count
DELTA , INT64 , 1
global
Number of bytes of metric data filtered through Metric Exclusion rules. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
metric_domain :
Domain name prefix from the metric type.
metric_type :
Metric type that was filtered.
resource_type :
Monitored resource type for the filtered metric.
filter_id :
The Metric Exclusion rule ID which caused this metric to be filtered.
stats/filtered_sample_count
ALPHA
(project)
Filtered sample count
DELTA , INT64 , 1
global
Number of samples of metric data filtered through Metric Exclusion rules. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
metric_domain :
Domain name prefix from the metric type.
metric_type :
Metric type that was filtered.
resource_type :
Monitored resource type for the filtered metric.
filter_id :
The Metric Exclusion rule ID which caused this metric to be filtered.
stats/metrics_queried_hourly_count
GA
(project)
Metrics queried hourly count
DELTA , INT64 , 1
global
Number of API queries by metric type and origin. Only recorded for user metrics. Sampled every 3600 seconds. After sampling, data is not visible for up to 7380 seconds.
api_method :
The fully qualified name of the API method through which the metric was queried.
origin :
The origin of the query, one of [console, other].
metric_type :
Metric type for the queried data.
stats/num_time_series
GA
(project)
Time series count
GAUGE , INT64 , 1
global
Number of active time series for user-defined metrics under custom.googleapis.com and logging.googleapis.com/user. An active time series is one that has received data in the previous 24 hours. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
prefix :
Metric type name prefix for the encompassed data, one of [custom.googleapis.com, logging.googleapis.com/user].
uptime_check/check_passed
GA
(project)
Check passed
GAUGE , BOOL ,
aws_ec2_instance
cloud_run_revision
gae_app
gce_instance
k8s_service
servicedirectory_service
uptime_url
True if the resource passed the check. After sampling, data is not visible for up to 35 seconds.
check_id :
The Uptime check for which the request was made.
checker_location :
For external checks, the Uptime Monitoring location making the request.
checker_project_id :
For internal checks, the checker project.
checker_network :
For internal checks, the checker network.
checker_zone :
For internal checks, the checker zone.
checked_resource_id :
ID of the resource being checked. Format depends on resource type.
uptime_check/content_mismatch
GA
(project)
Content mismatch
GAUGE , BOOL ,
aws_ec2_instance
cloud_run_revision
gae_app
gce_instance
k8s_service
servicedirectory_service
uptime_url
True if the response failed to match the check's specification of required content. After sampling, data is not visible for up to 35 seconds.
check_id :
The Uptime check for which the request was made.
checker_location :
For external checks, the Uptime Monitoring location making the request.
checker_project_id :
For internal checks, the checker project.
checker_network :
For internal checks, the checker network.
checker_zone :
For internal checks, the checker zone.
checked_resource_id :
ID of the resource being checked. Format depends on resource type.
uptime_check/error_code
GA
(project)
Error code
GAUGE , STRING ,
aws_ec2_instance
cloud_run_revision
gae_app
gce_instance
k8s_service
servicedirectory_service
uptime_url
Error, if any, that prevented contact with the resource. After sampling, data is not visible for up to 35 seconds.
check_id :
The Uptime check for which the request was made.
checker_location :
For external checks, the Uptime Monitoring location making the request.
checker_project_id :
For internal checks, the checker project.
checker_network :
For internal checks, the checker network.
checker_zone :
For internal checks, the checker zone.
checked_resource_id :
ID of the resource being checked. Format depends on resource type.
uptime_check/http_status
GA
(project)
HTTP status
GAUGE , STRING ,
aws_ec2_instance
cloud_run_revision
gae_app
gce_instance
k8s_service
servicedirectory_service
uptime_url
HTTP response code returned by the resource. After sampling, data is not visible for up to 35 seconds.
check_id :
The Uptime check for which the request was made.
checker_location :
For external checks, the Uptime Monitoring location making the request.
checker_project_id :
For internal checks, the checker project.
checker_network :
For internal checks, the checker network.
checker_zone :
For internal checks, the checker zone.
checked_resource_id :
ID of the resource being checked. Format depends on resource type.
uptime_check/request_latency
GA
(project)
Request latency
GAUGE , DOUBLE , ms
aws_ec2_instance
cloud_run_revision
gae_app
gce_instance
k8s_service
servicedirectory_service
uptime_url
The request latency in milliseconds measured by Uptime Monitoring when executing the request. After sampling, data is not visible for up to 35 seconds.
check_id :
The Uptime check for which the request was made.
checker_location :
For external checks, the Uptime Monitoring location making the request.
checker_project_id :
For internal checks, the checker project.
checker_network :
For internal checks, the checker network.
checker_zone :
For internal checks, the checker zone.
checked_resource_id :
ID of the resource being checked. Format depends on resource type.
uptime_check/time_until_ssl_cert_expires
GA
(project)
Time until SSL certificate expires
GAUGE , DOUBLE , d
aws_ec2_instance
cloud_run_revision
gae_app
gce_instance
k8s_service
servicedirectory_service
uptime_url
The number of days until the SSL certificate on the resource expires. After sampling, data is not visible for up to 35 seconds.
check_id :
The Uptime check for which the request was made.
checker_location :
For external checks, the Uptime Monitoring location making the request.
checker_project_id :
For internal checks, the checker project.
checker_network :
For internal checks, the checker network.
checker_zone :
For internal checks, the checker zone.
checked_resource_id :
ID of the resource being checked. Format depends on resource type.
netapp
Metrics from NetApp
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with netapp.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
replication/current_transfer_bytes
BETA
(project)
Volume Replication Transfer Progress
GAUGE , INT64 , By
netapp.googleapis.com/Replication
Amount of data transferred thus far for the current job.
replication/healthy
BETA
(project)
Volume Replication Healthy
GAUGE , BOOL ,
netapp.googleapis.com/Replication
FALSE if a scheduled transfer is missed or is unhealthy.
replication/lag_time
BETA
(project)
Volume Replication Transfer Lag Time
GAUGE , INT64 , s
netapp.googleapis.com/Replication
Time since the snapshot for transfer was taken on source (includes transfer duration).
replication/last_transfer_duration
BETA
(project)
Volume Replication Last Transfer Duration
GAUGE , INT64 , s
netapp.googleapis.com/Replication
Duration of the last transfer job.
replication/last_transfer_size
BETA
(project)
Volume Replication Last Transfer Size
GAUGE , INT64 , By
netapp.googleapis.com/Replication
Size of the last transfer job.
replication/total_transfer_byte_count
BETA
(project)
Volume Replication Total Transfer Bytes
CUMULATIVE , INT64 , By
netapp.googleapis.com/Replication
Cumulative data transferred for the relationship since it was created. May reset to 0.
replication/transferring
BETA
(project)
Volume Replication Status
GAUGE , BOOL ,
netapp.googleapis.com/Replication
Status of replication: TRUE = transferring, FALSE = idle.
storage_pool/allocated
BETA
(project)
Storage pool space usage
GAUGE , INT64 , By
netapp.googleapis.com/StoragePool
Storage pool capacity allocated to volumes.
storage_pool/auto_tiering/cold_tier_read_byte_count
BETA
(project)
StoragePool cold tier read bytes
DELTA , INT64 , By
netapp.googleapis.com/StoragePool
Capacity read from cold tier of the StoragePool.
storage_pool/auto_tiering/cold_tier_write_byte_count
BETA
(project)
StoragePool cold tier write bytes
DELTA , INT64 , By
netapp.googleapis.com/StoragePool
Capacity write to cold tier of the StoragePool.
storage_pool/auto_tiering/tiered_bytes
BETA
(project)
Auto tiering storage pool capacity tiering type size
GAUGE , INT64 , By
netapp.googleapis.com/StoragePool
Storage pool capacity tiering types: cold, or non-cold.
type :
Type of tiered data, cold or or non-cold.
storage_pool/capacity
BETA
(project)
Storage pool capacity
GAUGE , INT64 , By
netapp.googleapis.com/StoragePool
Total size of the storage pool.
custom_performance_enabled :
Whether the storage pool has custom performance enabled.
storage_pool/iops_limit
BETA
(project)
Maximum IOPS
GAUGE , INT64 , 1
netapp.googleapis.com/StoragePool
Maximum IOPS set for the pool.
type :
Type of IOPS, allocated or used.
storage_pool/replication_status
BETA
(project)
Replication Status
GAUGE , INT64 , 1
netapp.googleapis.com/StoragePool
Replication status for regional Flex StoragePool.
state :
Replication status: Synced, CatchingUp, OutOfSync.
storage_pool/throughput_limit
BETA
(project)
Maximum Throughput
GAUGE , INT64 , MiB/s
netapp.googleapis.com/StoragePool
Maximum throughput set for the pool.
type :
Type of throughput, allocated or used.
volume/allocated_bytes
BETA
(project)
Volume space allocated
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Capacity allocated to volume from the storage pool.
volume/auto_tiering/cold_tier_read_byte_count
BETA
(project)
Volume cold tier read bytes
DELTA , INT64 , By
netapp.googleapis.com/Volume
Capacity read from cold tier of the of the volume.
volume/auto_tiering/cold_tier_write_byte_count
BETA
(project)
Volume cold tier write bytes
DELTA , INT64 , By
netapp.googleapis.com/Volume
Capacity write to cold tier of the of the volume.
volume/auto_tiering/tiered_bytes
BETA
(project)
Auto tiering volume used space type
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Auto tiering volume used capacity by tiered types: cold or hot.
type :
Type of tiered data, cold or hot.
volume/average_latency
BETA
(project)
Volume I/O operation latency
GAUGE , DOUBLE , ms
netapp.googleapis.com/Volume
Volume I/O operation latency within the storage system.
method :
Type of latency, read, write or metadata.
volume/backup_current_transfer_bytes
BETA
(project)
Volume Backup Transfer Progress
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Amount of data transferred thus far for the current job.
volume/backup_healthy
BETA
(project)
Volume Backup Transfer Healthy
GAUGE , BOOL ,
netapp.googleapis.com/Volume
FALSE if a backup transfer is missed or failed or has experienced a manual backup failure.
volume/backup_last_transfer_duration
BETA
(project)
Volume Backup Last Transfer Duration
GAUGE , INT64 , s
netapp.googleapis.com/Volume
Duration of the last transfer job.
volume/backup_last_transfer_size
BETA
(project)
Volume Backup Last Transfer Size
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Size of the last transfer job.
volume/backup_transferring
BETA
(project)
Volume Backup Status
GAUGE , BOOL ,
netapp.googleapis.com/Volume
Status of backup: TRUE = transferring, FALSE = idle.
volume/backup_used
BETA
(project)
Bytes backed up
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Bytes backed up (baseline and incremental changes).
volume/bytes_used
BETA
(project)
Volume space used
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Capacity used to store data written as files and additional space used for snapshots.
volume/files_restored_bytes
BETA
(project)
Files restored bytes
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Total size of the files restored successfully.
volume/files_restored_count
BETA
(project)
Files restored count
GAUGE , INT64 , 1
netapp.googleapis.com/Volume
Total count of the files restored successfully.
volume/inode_limit
BETA
(project)
Volume inode allocation
GAUGE , INT64 , 1
netapp.googleapis.com/Volume
Inodes allocated for the volume (hard cap). Tied to allocated capacity (size) of volume.
volume/inode_used
BETA
(project)
Volume inode usage
GAUGE , INT64 , 1
netapp.googleapis.com/Volume
Number of inodes in use on the volume.
volume/operation_count
BETA
(project)
Operations count
DELTA , INT64 , 1
netapp.googleapis.com/Volume
Number of operations being performed on the volume by the clients.
type :
Type of operation, read, write, or metadata.
volume/snapshot_bytes
BETA
(project)
Volume snapshot space used
GAUGE , INT64 , By
netapp.googleapis.com/Volume
Capacity used for snapshot copies.
volume/throughput
BETA
(project)
Throughput
DELTA , INT64 , By
netapp.googleapis.com/Volume
Throughput for the operation type.
type :
Type of operation, read, write, or metadata.
volume/throughput_limit
BETA
(project)
Maximum throughput
GAUGE , INT64 , KiBy/s
netapp.googleapis.com/Volume
Maximum throughput allocated for the volume.
networkconnectivity
Metrics from Network Connectivity .
Launch stages of these metrics:
ALPHA
GA
The "metric type" strings in this table must be prefixed
with networkconnectivity.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
quota/active_vpc_spokes_per_hub/exceeded
GA
(project)
Active VPC Spokes per Hub quota exceeded error
DELTA , INT64 , 1
networkconnectivity.googleapis.com/Hub
Number of attempts to exceed the limit on quota metric networkconnectivity.googleapis.com/active_vpc_spokes_per_hub. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/active_vpc_spokes_per_hub/limit
GA
(project)
Active VPC Spokes per Hub quota limit
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/Hub
Current limit on quota metric networkconnectivity.googleapis.com/active_vpc_spokes_per_hub. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/active_vpc_spokes_per_hub/usage
GA
(project)
Active VPC Spokes per Hub quota usage
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/Hub
Current usage on quota metric networkconnectivity.googleapis.com/active_vpc_spokes_per_hub. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/dynamic_route_prefixes_per_hub_route_table_per_route_region/exceeded
GA
(project)
Unique dynamic route prefixes per hub route table per route region quota exceeded error
DELTA , INT64 , 1
networkconnectivity.googleapis.com/RouteTable
Number of attempts to exceed the limit on quota metric networkconnectivity.googleapis.com/dynamic_route_prefixes_per_hub_route_table_per_route_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
route_region :
The region that contains unique dynamic route prefixes.
quota/dynamic_route_prefixes_per_hub_route_table_per_route_region/limit
GA
(project)
Unique dynamic route prefixes per hub route table per route region quota limit
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/RouteTable
Current limit on quota metric networkconnectivity.googleapis.com/dynamic_route_prefixes_per_hub_route_table_per_route_region. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
route_region :
The region that contains unique dynamic route prefixes.
quota/dynamic_route_prefixes_per_hub_route_table_per_route_region/usage
GA
(project)
Unique dynamic route prefixes per hub route table per route region quota usage
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/RouteTable
Current usage on quota metric networkconnectivity.googleapis.com/dynamic_route_prefixes_per_hub_route_table_per_route_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
route_region :
The region that contains unique dynamic route prefixes.
quota/routes_per_route_table/exceeded
GA
(project)
Subnet Routes per Route Table quota exceeded error
DELTA , INT64 , 1
networkconnectivity.googleapis.com/RouteTable
Number of attempts to exceed the limit on quota metric networkconnectivity.googleapis.com/routes_per_route_table. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/routes_per_route_table/limit
GA
(project)
Subnet Routes per Route Table quota limit
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/RouteTable
Current limit on quota metric networkconnectivity.googleapis.com/routes_per_route_table. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/routes_per_route_table/usage
GA
(project)
Subnet Routes per Route Table quota usage
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/RouteTable
Current usage on quota metric networkconnectivity.googleapis.com/routes_per_route_table. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/routing_vpcs_per_hub/exceeded
ALPHA
(project)
Routing VPCs per Hub quota exceeded error
DELTA , INT64 , 1
networkconnectivity.googleapis.com/Hub
Number of attempts to exceed the limit on quota metric networkconnectivity.googleapis.com/routing_vpcs_per_hub. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/routing_vpcs_per_hub/limit
ALPHA
(project)
Routing VPCs per Hub quota limit
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/Hub
Current limit on quota metric networkconnectivity.googleapis.com/routing_vpcs_per_hub. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/routing_vpcs_per_hub/usage
ALPHA
(project)
Routing VPCs per Hub quota usage
GAUGE , INT64 , 1
networkconnectivity.googleapis.com/Hub
Current usage on quota metric networkconnectivity.googleapis.com/routing_vpcs_per_hub. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
networking
Metrics from Network Topology .
Launch stages of these metrics:
ALPHA
GA
The "metric type" strings in this table must be prefixed
with networking.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
all_gcp/vm_traffic/zone_pair_median_rtt
GA
(project, folder, organization)
VM to VM median RTT per zone pair, for all GCP projects
GAUGE , DOUBLE , ns
networking.googleapis.com/Location
The median RTT (round-trip time) for VM to VM traffic, per zone pair and aggregated across all GCP projects. Sampled every 60 seconds. After sampling, data is not visible for up to 540 seconds.
remote_region :
Region of the remote endpoints for which the RTT was measured.
remote_zone :
Zone of the remote endpoints for which the RTT was measured.
protocol :
Protocol of the connections for which the RTT was measured. The only valid value is TCP.
cloud_netslo/active_probing/probe_count
GA
(project)
Number of probes
DELTA , INT64 , 1
gce_zone_network_health
Number of probing probes. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
remote_zone :
Zone of the remote instance.
remote_region :
Region of the remote instance.
remote_location_type :
Type of destination.
protocol :
Protocol used for probing.
result :
Result of probing (success/failure).
fixed_standard_tier/limit
DEPRECATED
(project)
Fixed standard network tier limit
GAUGE , INT64 , By
networking.googleapis.com/Location
The limit for fixed standard network tier in number of egress bytes per second. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
bandwidth_policy_id :
The identifier for fixed standard tier policy or 'UNKNOWN'.
fixed_standard_tier/usage
DEPRECATED
(project)
Fixed standard network tier usage
GAUGE , INT64 , By
networking.googleapis.com/Location
The current rate of egress bytes per second sent over Fixed Standard Tier. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
bandwidth_policy_id :
The identifier for fixed standard tier policy or 'UNKNOWN'.
traffic_source :
Traffic source for the fixed standard network tier, one of [L7LB, VM].
google_service/request_bytes_count
GA
(project)
Request bytes count
DELTA , INT64 , By
google_service_gce_client
The number of bytes sent in requests from the clients to the Google Service. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
protocol :
Protocol of the connection, one of [HTTP/1.1, HTTP/2.0].
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none. For gRPC error mapping to response code class see https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto .
service_name :
The Google Service name, such as "storage.googleapis.com".
service_region :
The region of the client, such as "us-central1", "asia-south1", "europe-west6".
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
google_service/response_bytes_count
GA
(project)
Response bytes count
DELTA , INT64 , By
google_service_gce_client
The number of bytes sent in responses to the clients from the Google Service. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
protocol :
Protocol of the connection, one of [HTTP/1.1, HTTP/2.0].
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none. For gRPC error mapping to response code class see https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto .
service_name :
The Google Service name, such as "storage.googleapis.com".
service_region :
The region of the client, such as "us-central1", "asia-south1", "europe-west6".
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
interconnect_attachment/egress_bytes_count
GA
(project)
Egress bytes from the Cloud Interconnect attachment
DELTA , INT64 , By
interconnect_attachment
The number of bytes sent from GCP via the Cloud Interconnect attachment. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_project_number :
The project number of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_project_id :
The project ID of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_region :
Region of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_zone :
Zone of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_location_type :
Type of destination, one of ["CLOUD" - when the local end is inside a VPC; "EXTERNAL" - otherwise]. If the GCP endpoint belongs to a different project, the field is set to "CLOUD" only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to EXTERNAL.
local_resource_type :
Resource type of local end, one of ["GCE_VM" - for a VM instance; "ICA" - for a Cloud Interconnect attachment; "VPN" - for a Cloud VPN tunnel; "ROUTER_APPLIANCE" - for a router appliance instance; "OTHER" - otherwise]. If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the local_location_type is CLOUD, 2) the projects are in the same organization, 3) the communication was via Shared VPC or VPC Peering, 4) cross project metrics were not disabled. Otherwise the field is set to OTHER.
local_network :
Network of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_subnetwork :
Subnetwork of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
interconnect_attachment/ingress_bytes_count
GA
(project)
Ingress bytes to the Cloud Interconnect attachment
DELTA , INT64 , By
interconnect_attachment
The number of bytes sent to GCP via the Cloud Interconnect attachment. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_project_number :
The project number of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_project_id :
The project ID of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_region :
Region of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_zone :
Zone of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_location_type :
Type of destination, one of ["CLOUD" - when the local end is inside a VPC; "EXTERNAL" - otherwise]. If the GCP endpoint belongs to a different project, the field is set to "CLOUD" only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to EXTERNAL.
local_resource_type :
Resource type of local end, one of ["GCE_VM" - for a VM instance; "ICA" - for a Cloud Interconnect attachment; "VPN" - for a Cloud VPN tunnel; "ROUTER_APPLIANCE" - for a router appliance instance; "OTHER" - otherwise]. If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the local_location_type is CLOUD, 2) the projects are in the same organization, 3) the communication was via Shared VPC or VPC Peering, 4) cross project metrics were not disabled. Otherwise the field is set to OTHER.
local_network :
Network of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_subnetwork :
Subnetwork of the GCP endpoint that communicated via the attachment. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
interconnect_attachment/vm/egress_bytes_count
GA
(project)
Egress bytes per VM to the Cloud Interconnect attachment
DELTA , INT64 , By
gce_instance
Number of bytes sent from the local VM to its remote peers via the tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
attachment_project_number :
The project number of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
attachment_project_id :
The project ID of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
attachment_name :
The name of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
attachment_region :
Region of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
interconnect_name :
The name of the Cloud Interconnect. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
interconnect_project_id :
The project identifier of the Cloud Interconnect. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
interconnect_attachment/vm/ingress_bytes_count
GA
(project)
Ingress bytes per VM from the Cloud Interconnect attachment
DELTA , INT64 , By
gce_instance
Number of bytes sent to the local VM from its remote peers via the Cloud Interconnect attachment. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
attachment_project_number :
The project number of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
attachment_project_id :
The project ID of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
attachment_name :
The name of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
attachment_region :
Region of the Cloud Interconnect attachment. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
interconnect_name :
The name of the Cloud Interconnect. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
interconnect_project_id :
The project identifier of the Cloud Interconnect. If the attachment belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to ATTACHMENT_BELONGS_TO_AN_EXTERNAL_PROJECT.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
node_flow/egress_bytes_count
GA
(project)
Egress bytes count per GKE node
DELTA , INT64 , By
k8s_node
Number of bytes sent from the GKE node to its remote peers, including from Pods inside the node. The bytes count doesn't include packet header size. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE node.
local_subnetwork :
Subnetwork of the local GKE node.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
node_flow/egress_packets_count
GA
(project)
Egress packets count per GKE node
DELTA , INT64 , 1
k8s_node
Number of packets sent from the GKE node to its remote peers, including from Pods inside the node. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE node.
local_subnetwork :
Subnetwork of the local GKE node.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
node_flow/ingress_bytes_count
GA
(project)
Ingress bytes count per GKE node
DELTA , INT64 , By
k8s_node
Number of bytes sent to the GKE node from its remote peers, including to Pods inside the Node. The bytes count doesn't include packet header size. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE node.
local_subnetwork :
Subnetwork of the local GKE node.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
node_flow/ingress_packets_count
GA
(project)
Ingress packets count per GKE node
DELTA , INT64 , 1
k8s_node
Number of packets sent to the GKE node from its remote peers, including to Pods inside the node. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE node.
local_subnetwork :
Subnetwork of the local GKE node.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL".
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
node_flow/rtt
GA
(project)
RTT latencies per GKE node
DELTA , DISTRIBUTION , ms
k8s_node
A distribution of RTT measured over TCP connections from the GKE node to Cloud endpoints, including from Pods inside the node. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE node.
local_subnetwork :
Subnetwork of the local GKE node.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Always TCP.
pod_flow/egress_bytes_count
GA
(project)
Egress bytes count per GKE Pod
DELTA , INT64 , By
k8s_pod
Number of bytes sent from the GKE Pod to its remote peers. The bytes count doesn't include packet header size. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE Pod.
local_subnetwork :
Subnetwork of the local GKE Pod.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster_location :
GKE cluster location of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_namespace :
GKE namespace of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_workload :
GKE workload name of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD", or if the remote endpoint belongs to a different project and one of the following does not hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. If the value is not known or the remote endpoint is not a GKE workload, the field is set to "NOT_APPLICABLE".
remote_workload_type :
GKE workload type of the remote endpoint, one of: [REPLICA_SET, DEPLOYMENT, STATEFUL_SET, DAEMON_SET, JOB, CRON_JOB, REPLICATION_CONTROLLER, UNKNOWN]. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
pod_flow/egress_packets_count
GA
(project)
Egress packets count per GKE Pod
DELTA , INT64 , 1
k8s_pod
Number of packets sent from the GKE Pod to its remote peers. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE Pod.
local_subnetwork :
Subnetwork of the local GKE Pod.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster_location :
GKE cluster location of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_namespace :
GKE namespace of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_workload :
GKE workload name of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD", or if the remote endpoint belongs to a different project and one of the following does not hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. If the value is not known, the field is set to "NOT_APPLICABLE".
remote_workload_type :
GKE workload type of the remote endpoint, one of: [REPLICA_SET, DEPLOYMENT, STATEFUL_SET, DAEMON_SET, JOB, CRON_JOB, REPLICATION_CONTROLLER, UNKNOWN]. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
pod_flow/ingress_bytes_count
GA
(project)
Ingress bytes count per GKE Pod
DELTA , INT64 , By
k8s_pod
Number of bytes sent to the GKE Pod from its remote peers. The bytes count doesn't include packet header size. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE Pod.
local_subnetwork :
Subnetwork of the local GKE Pod.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster_location :
GKE cluster location of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_namespace :
GKE namespace of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_workload :
GKE workload name of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD", or if the remote endpoint belongs to a different project and one of the following does not hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. If the value is not known or the remote endpoint is not a GKE workload, the field is set to "NOT_APPLICABLE".
remote_workload_type :
GKE workload type of the remote endpoint, one of: [REPLICA_SET, DEPLOYMENT, STATEFUL_SET, DAEMON_SET, JOB, CRON_JOB, REPLICATION_CONTROLLER, UNKNOWN]. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
pod_flow/ingress_packets_count
GA
(project)
Ingress packets count per GKE Pod
DELTA , INT64 , 1
k8s_pod
Number of packets sent to the GKE Pod from its remote peers. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE Pod.
local_subnetwork :
Subnetwork of the local GKE Pod.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster_location :
GKE cluster location of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_namespace :
GKE namespace of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_workload :
GKE workload name of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD", or if the remote endpoint belongs to a different project and one of the following does not hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. If the value is not known or the remote endpoint is not a GKE workload, the field is set to "NOT_APPLICABLE".
remote_workload_type :
GKE workload type of the remote endpoint, one of: [REPLICA_SET, DEPLOYMENT, STATEFUL_SET, DAEMON_SET, JOB, CRON_JOB, REPLICATION_CONTROLLER, UNKNOWN]. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the remote_location_type is not "EXTERNAL". By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]. Set to "UNKNOWN" if the remote_location_type is not "EXTERNAL" or the network tier was not identified. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
pod_flow/rtt
GA
(project)
RTT latencies per GKE Pod
DELTA , DISTRIBUTION , ms
k8s_pod
A distribution of RTT measured over TCP connections from the GKE Pod to Cloud endpoints. By default, traffic between the Pod and an endpoint outside the VPC is attributed to the Node and not the Pod, due to IP masquerading before our sampling point. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local GKE Pod.
local_subnetwork :
Subnetwork of the local GKE Pod.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster :
GKE cluster of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_cluster_location :
GKE cluster location of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_namespace :
GKE namespace of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_workload :
GKE workload name of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD", or if the remote endpoint belongs to a different project and one of the following does not hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. If the value is not known or the remote endpoint is not a GKE workload, the field is set to "NOT_APPLICABLE".
remote_workload_type :
GKE workload type of the remote endpoint, one of: [REPLICA_SET, DEPLOYMENT, STATEFUL_SET, DAEMON_SET, JOB, CRON_JOB, REPLICATION_CONTROLLER, UNKNOWN]. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if the communication was via Shared VPC or VPC Peering. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Always TCP.
region/external_rtt
GA
(project)
External RTT latencies per GCP region
DELTA , DISTRIBUTION , ms
networking.googleapis.com/Location
A distribution of RTT measured over TCP connections from a GCP region to Internet destinations. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the remote continent is unknown.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown.
remote_region :
The region of the remote endpoint. Set to "NOT_APPLICABLE" if the region is unknown.
remote_city :
The city of the remote endpoint. Set to "NOT_APPLICABLE" if the city is unknown.
remote_location_type :
Always EXTERNAL.
protocol :
Always TCP.
router_appliance/gateway/egress_bytes_count
GA
(project)
Egress bytes from router appliance instance
DELTA , INT64 , By
gce_instance
The number of bytes sent to GCP via the router appliance instance from on-premises hosts. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
router_appliance_network :
Network name of the router appliance instance NIC.
router_appliance_subnetwork :
Subnetwork name of the router appliance instance NIC.
local_project_id :
The project identifier of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_project_number :
The project number of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_region :
Region of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_zone :
Zone of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_location_type :
Type of destination, one of ["CLOUD" - when the local end is inside a VPC; "EXTERNAL" - otherwise]. If the GCP endpoint belongs to a different project, the field is set to "CLOUD" only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to EXTERNAL.
local_resource_type :
Resource type of local end, one of ["GCE_VM" - for a VM instance; "ICA" - for a Cloud Interconnect attachment; "VPN" - for a Cloud VPN tunnel; "ROUTER_APPLIANCE" - for a router appliance instance; "OTHER" - otherwise]. If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the local_location_type is CLOUD, 2) the projects are in the same organization, 3) the communication was via Shared VPC or VPC Peering, 4) cross project metrics were not disabled. Otherwise the field is set to OTHER.
local_network :
Network of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_subnetwork :
Subnetwork of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
router_appliance/gateway/ingress_bytes_count
GA
(project)
Ingress bytes to the router appliance instance
DELTA , INT64 , By
gce_instance
The number of bytes sent from GCP via the router appliance instance to on-premises hosts. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
router_appliance_network :
Network name of the router appliance instance NIC.
router_appliance_subnetwork :
Subnetwork name of the router appliance instance NIC.
local_project_id :
The project identifier of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_project_number :
The project number of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_region :
Region of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_zone :
Zone of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_location_type :
Type of destination, one of ["CLOUD" - when the local end is inside a VPC; "EXTERNAL" - otherwise]. If the GCP endpoint belongs to a different project, the field is set to "CLOUD" only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to EXTERNAL.
local_resource_type :
Resource type of local end, one of ["GCE_VM" - for a VM instance; "ICA" - for a Cloud Interconnect attachment; "VPN" - for a Cloud VPN tunnel; "ROUTER_APPLIANCE" - for a router appliance instance; "OTHER" - otherwise]. If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the local_location_type is CLOUD, 2) the projects are in the same organization, 3) the communication was via Shared VPC or VPC Peering, 4) cross project metrics were not disabled. Otherwise the field is set to OTHER.
local_network :
Network of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_subnetwork :
Subnetwork of the GCP endpoint that communicated via the router appliance instance. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
router_appliance/vm/egress_bytes_count
GA
(project)
Egress bytes per VM to router appliance instance
DELTA , INT64 , By
gce_instance
Number of bytes sent from the local VM to its remote peers via the router appliance instance. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
router_appliance_instance_name :
The instance name of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_instance_id :
The instance id of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_project_number :
The project number of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_project_id :
The project ID of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_zone :
Zone of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_region :
Region of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
router_appliance/vm/ingress_bytes_count
GA
(project)
Ingress bytes per VM from the router appliance instance
DELTA , INT64 , By
gce_instance
Number of bytes sent to the local VM from its remote peers via the router appliance instance. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
router_appliance_instance_name :
The instance name of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_instance_id :
The instance id of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_project_number :
The project number of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_project_id :
The project ID of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_zone :
Zone of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
router_appliance_region :
Region of the router appliance instance. If the router appliance instance belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to RA_PROJECT_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
vm_flow/connection_count
ALPHA
(project)
Connection Count
DELTA , INT64 , 1
gce_instance
Number of connections measured between the local VM and its remote peers. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown or the remote_location_type is not "EXTERNAL".
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the business region is unknown or the remote_location_type is not "EXTERNAL".
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
network_topology_remote_label :
Always UNSUPPORTED.
remote_vpn_tunnel :
Always UNSUPPORTED.
vm_flow/egress_bytes_count
GA
(project)
Egress bytes
DELTA , INT64 , By
gce_instance
Number of bytes sent from the local VM to its remote peers. This metric does not include the header size. So this value is lower than the compute.googleapis.com/instance/network/sent_bytes_count value. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown or the remote_location_type is not "EXTERNAL".
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the business region is unknown or the remote_location_type is not "EXTERNAL".
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
network_topology_remote_label :
Always UNSUPPORTED.
remote_vpn_tunnel :
Always UNSUPPORTED.
vm_flow/egress_packets_count
ALPHA
(project)
Egress Packets Per VM
DELTA , INT64 , 1
gce_instance
Number of packets sent from the local VM to its remote peers. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown or the remote_location_type is not "EXTERNAL".
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the business region is unknown or the remote_location_type is not "EXTERNAL".
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote instance. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
network_topology_remote_label :
Always UNSUPPORTED.
remote_vpn_tunnel :
Always UNSUPPORTED.
vm_flow/external_rtt
GA
(project)
External RTT latencies
DELTA , DISTRIBUTION , ms
gce_instance
A distribution of RTT measured over TCP connections from the local VM to Internet destinations. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
network_tier :
Network tier of the connection, one of [PREMIUM, STANDARD, FIXED_STANDARD, UNKNOWN]
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the remote continent is unknown.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown.
remote_region :
The region of the remote endpoint. Set to "NOT_APPLICABLE" if the region is unknown.
remote_city :
The city of the remote endpoint. Set to "NOT_APPLICABLE" if the city is unknown.
remote_location_type :
Always EXTERNAL.
protocol :
Always TCP.
vm_flow/ingress_bytes_count
GA
(project)
Ingress bytes
DELTA , INT64 , By
gce_instance
Number of bytes sent to the local VM from its remote peers. This metric does not include the header size. So this value is lower than the compute.googleapis.com/instance/network/received_bytes_count value. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown or the remote_location_type is not "EXTERNAL".
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the business region is unknown or the remote_location_type is not "EXTERNAL".
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
network_topology_remote_label :
Always UNSUPPORTED.
remote_vpn_tunnel :
Always UNSUPPORTED.
vm_flow/ingress_packets_count
ALPHA
(project)
Ingress Packets Per VM
DELTA , INT64 , 1
gce_instance
Number of packets sent to the local VM from its remote peers. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
remote_country :
The country of the remote endpoint. Set to "NOT_APPLICABLE" if the country is unknown or the remote_location_type is not "EXTERNAL".
remote_continent :
The business region of the remote endpoint, one of [America, Asia, Europe, NOT_APPLICABLE]. Set to "NOT_APPLICABLE" if the business region is unknown or the remote_location_type is not "EXTERNAL".
remote_project_id :
Project ID of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote instance. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote region is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". Set to "global" if the remote zone is unknown. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_location_type :
Type of the remote endpoint, one of: ["CLOUD" - when the endpoint is inside a VPC; "EXTERNAL" - when the endpoint is an Internet endpoint including public IP of a VM or network load balancer; "GOOGLE_INTERNAL" - when the endpoint is Google infrastructure such as a health check or GFE; "ON_PREM" - when the communication is through a Cloud VPN tunnel, Cloud Interconnect Attachment or router appliance instance].
remote_network :
Network of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. Set to "REMOTE_IS_EXTERNAL" if the remote_location_type is not "CLOUD". If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
network_topology_remote_label :
Always UNSUPPORTED.
remote_vpn_tunnel :
Always UNSUPPORTED.
vm_flow/rtt
GA
(project)
RTT latencies
DELTA , DISTRIBUTION , ms
gce_instance
A distribution of RTT measured over TCP connections from the local VM. Measured for intra Cloud traffic only. Based on sampled traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
remote_country :
Always NOT_APPLICABLE.
remote_continent :
Always NOT_APPLICABLE.
remote_project_id :
Project ID of the remote endpoint. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_region :
Region of the remote instance. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_zone :
Zone of the remote endpoint. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_location_type :
Always CLOUD.
remote_network :
Network of the remote endpoint. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
remote_subnetwork :
Subnetwork of the remote endpoint. If the remote endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to REMOTE_IS_EXTERNAL.
protocol :
Always TCP.
network_topology_remote_label :
Always UNSUPPORTED.
remote_vpn_tunnel :
Always UNSUPPORTED.
vpc_flow/predicted_max_vpc_flow_logs_count
GA
(project)
Predicted Max VPC Flow Logs Count
DELTA , INT64 , 1
gce_subnetwork
A predicted upper bound for the amount of VPC Flow Logs that would be exported for a specific subnet. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
vpn_tunnel/egress_bytes_count
GA
(project)
Egress bytes from the Cloud VPN tunnel
DELTA , INT64 , By
vpn_tunnel
The number of bytes sent from GCP via the Cloud VPN tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_project_number :
The project number of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_project_id :
The project ID of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_region :
Region of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_zone :
Zone of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_location_type :
Type of destination, one of ["CLOUD" - when the local end is inside a VPC; "EXTERNAL" - otherwise]. If the GCP endpoint belongs to a different project, the field is set to "CLOUD" only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to EXTERNAL.
local_resource_type :
Resource type of local end, one of ["GCE_VM" - for a VM instance; "ICA" - for a Cloud Interconnect attachment; "VPN" - for a Cloud VPN tunnel; "ROUTER_APPLIANCE" - for a router appliance instance; "OTHER" - otherwise]. If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the local_location_type is CLOUD, 2) the projects are in the same organization, 3) the communication was via Shared VPC or VPC Peering, 4) cross project metrics were not disabled. Otherwise the field is set to OTHER.
local_network :
Network of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_subnetwork :
Subnetwork of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
vpn_tunnel/ingress_bytes_count
GA
(project)
Ingress bytes to the Cloud VPN tunnel
DELTA , INT64 , By
vpn_tunnel
The number of bytes sent to GCP via the Cloud VPN tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_project_number :
The project number of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_project_id :
The project ID of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_AN_EXTERNAL_PROJECT" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_AN_EXTERNAL_PROJECT.
local_region :
Region of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_zone :
Zone of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_location_type :
Type of destination, one of ["CLOUD" - when the local end is inside a VPC; "EXTERNAL" - otherwise]. If the GCP endpoint belongs to a different project, the field is set to "CLOUD" only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to EXTERNAL.
local_resource_type :
Resource type of local end, one of ["GCE_VM" - for a VM instance; "ICA" - for a Cloud Interconnect attachment; "VPN" - for a Cloud VPN tunnel; "ROUTER_APPLIANCE" - for a router appliance instance; "OTHER" - otherwise]. If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the local_location_type is CLOUD, 2) the projects are in the same organization, 3) the communication was via Shared VPC or VPC Peering, 4) cross project metrics were not disabled. Otherwise the field is set to OTHER.
local_network :
Network of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
local_subnetwork :
Subnetwork of the GCP endpoint that communicated via the Cloud VPN tunnel. Set to "LOCAL_IS_EXTERNAL" if the local_location_type is not "CLOUD". If the GCP endpoint belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to LOCAL_IS_EXTERNAL.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
vpn_tunnel/vm/egress_bytes_count
GA
(project)
Egress bytes per VM to the Cloud VPN tunnel
DELTA , INT64 , By
gce_instance
Number of bytes sent from the local VM to its remote peers via the Cloud VPN tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
vpn_project_number :
The project number of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_project_id :
The project ID of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_region :
Region of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_tunnel_id :
The tunnel identifier of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_tunnel_name :
The tunnel name of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
vpn_tunnel/vm/ingress_bytes_count
GA
(project)
Ingress bytes per VM from the Cloud VPN tunnel
DELTA , INT64 , By
gce_instance
Number of bytes sent to the local VM from its remote peers via the Cloud VPN tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
local_network :
Network of the local instance.
local_subnetwork :
Subnetwork of the local instance.
local_network_interface :
NIC of the local instance.
vpn_project_number :
The project number of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_project_id :
The project ID of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_region :
Region of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_tunnel_id :
The tunnel identifier of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
vpn_tunnel_name :
The tunnel name of the Cloud VPN tunnel. If the tunnel belongs to a different project, the field is set with the correct value only if all of the following hold: 1) the projects are in the same organization, 2) the communication was via Shared VPC or VPC Peering, 3) cross project metrics were not disabled. Otherwise the field is set to TUNNEL_BELONGS_TO_AN_EXTERNAL_PROJECT.
protocol :
Protocol of the connection, one of [TCP, UDP, GRE, ICMP, ICMPV6, ESP].
networkmanagement
Metrics from Network Management API .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with networkmanagement.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
insights/active_monitored_paths
BETA
(project)
Active Monitored Paths
GAUGE , INT64 , 1/h
networkmanagement.googleapis.com/NetworkMonitoringProvider
Number of active monitored paths.
insights/network/data/in/packets_received_count
BETA
(project)
Inbound data packets received for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked data probes received inbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/data/in/packets_sent_count
BETA
(project)
Inbound data packets sent for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked data probes sent inbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/data/out/packets_received_count
BETA
(project)
Outbound data packets received for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked data probes received outbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/data/out/packets_sent_count
BETA
(project)
Outbound data packets sent for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked data probes sent outbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/data/total/packets_received_count
BETA
(project)
Total data packets received for Network Path (Single-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked data probes received in this measurement interval (Single-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/data/total/packets_sent_count
BETA
(project)
Total data packets sent for Network Path (Single-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked data probes sent in this measurement interval (Single-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/in/jitter
BETA
(project)
Inbound jitter for Network Path (Dual-Ended)
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/NetworkPath
Packet delay variation for inbound probes in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/in/loss_percent
BETA
(project)
Inbound loss percent for Network Path (Dual-Ended)
GAUGE , DOUBLE , %
networkmanagement.googleapis.com/NetworkPath
Indicator of success or failure for inbound network probes. (Packets sent - packets received)/ packets sent * 100.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/out/jitter
BETA
(project)
Outbound jitter for Network Path (Dual-Ended)
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/NetworkPath
Packet delay variation for outbound probes in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/out/loss_percent
BETA
(project)
Outbound loss percent for Network Path (Dual-Ended)
GAUGE , DOUBLE , %
networkmanagement.googleapis.com/NetworkPath
Indicator of success or failure for outbound network probes. (Packets sent - packets received)/ packets sent * 100.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/rtt_avg
BETA
(project)
Average RTT for Network Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/NetworkPath
Average round-trip time for all tracked data and voice probes in this measurement interval.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/rtt_max
BETA
(project)
Maximum RTT for Network Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/NetworkPath
Maximum round-trip time for all tracked data and voice probes in this measurement interval.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/rtt_min
BETA
(project)
Minimum RTT for Network Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/NetworkPath
Minimum round-trip time for all tracked data and voice probes in this measurement interval.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/test_error
BETA
(project)
Test error for Network Path
GAUGE , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
0- Indicates that the network test succeeded (i.e there wasn’t 100% loss) and performance metrics are available. 1 - Indicates that the network test failed in which case not all performance metrics might be available.
error_type :
Type of the error.
error_detail :
Detail of the error.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP". Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/total/jitter
BETA
(project)
Total jitter for Network Path (Single-Ended)
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/NetworkPath
Packet delay variation for probes in this measurement interval (Single-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/total/loss_percent
BETA
(project)
Loss percent for Network Path (Single-Ended)
GAUGE , DOUBLE , %
networkmanagement.googleapis.com/NetworkPath
Indicator of success or failure for network probes independent of which probes are enabled. (Packets sent - packets received)/ packets sent * 100.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP". Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/in/mos
BETA
(project)
Inbound voice MOS for Network Path (Dual-Ended)
GAUGE , DOUBLE , 1
networkmanagement.googleapis.com/NetworkPath
Mean Opinion Score (MOS) is an estimate of sound quality of a call. Measured on inbound voice probes sent in this measurement interval only (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/in/packets_received_count
BETA
(project)
Inbound voice packets received for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked voice probes received inbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/in/packets_sent_count
BETA
(project)
Inbound voice packets sent for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked voice probes sent inbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/out/mos
BETA
(project)
Outbound voice MOS for Network Path (Dual-Ended)
GAUGE , DOUBLE , 1
networkmanagement.googleapis.com/NetworkPath
Mean Opinion Score (MOS) is an estimate of sound quality of a call. Measured on outbound voice probes sent in this measurement interval only (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/out/packets_received_count
BETA
(project)
Outbound voice packets received for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked voice probes received outbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/out/packets_sent_count
BETA
(project)
Outbound voice packets sent for Network Path (Dual-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked voice probes sent outbound in this measurement interval (Dual-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/total/mos
BETA
(project)
Total voice MOS for Network Path (Single-Ended)
GAUGE , DOUBLE , 1
networkmanagement.googleapis.com/NetworkPath
Mean Opinion Score (MOS) is an estimate of sound quality of a call. Measured on voice probes sent in this measurement interval only (Single-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/total/packets_received_count
BETA
(project)
Total voice packets received for Network Path (Single-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked voice probes received in this measurement interval (Single-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/network/voice/total/packets_sent_count
BETA
(project)
Total voice packets sent for Network Path (Single-Ended)
DELTA , INT64 , 1
networkmanagement.googleapis.com/NetworkPath
Count of tracked voice probes sent in this measurement interval (Single-Ended Path).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
The IP address or hostname of the network path destination.
network_protocol :
Network protocol. Can be either "ICMP", "UDP" or "TCP".
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
destination_monitoring_point_id :
Unique identifier of the destination Monitoring Point. Relevant only for Monitoring Point->Monitoring Point path.
destination_monitoring_point_display_name :
Destination Monitoring Point display name.
destination_cloud_provider :
Destination Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_instance_id :
Destination instance ID. Relevant only for Monitoring Point->Monitoring Point path.
destination_cloud_zone :
Destination cloud zone.
destination_cloud_region :
Destination cloud region.
destination_cloud_project_id :
The cloud project ID of the destination Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id. Relevant only for Monitoring Point->Monitoring Point path.
insights/web/browser/test_error
BETA
(project)
Browser test status for Web Path
GAUGE , INT64 , 1
networkmanagement.googleapis.com/WebPath
This metric is only available for browser web path. A browser path error can occur when a Selenium script fails to complete dueto errors in the script itself or a timeout while waiting for a response. 0 : Test completed without errors. 1 : Errors prevented test completion (see error attributes).
error_type :
Type of the error.
error_detail :
Detail of the error.
response_code :
HTTP response code.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/download/size
BETA
(project)
HTTP download size for Web Path
GAUGE , INT64 , By
networkmanagement.googleapis.com/WebPath
The number of bytes downloaded during a response to the first non-redirected HTTP request.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/download/speed
BETA
(project)
HTTP download speed for Web Path
GAUGE , DOUBLE , By/s
networkmanagement.googleapis.com/WebPath
Total size of the downloaded content divided by the time taken to download for the first non-redirected request.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/dns_lookup
BETA
(project)
DNS lookup HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
The time to resolve the IP address of the destination domain for the first non-redirected request.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/redirect
BETA
(project)
Redirect HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
The time for a redirected request to arrive at the final server and for a response. Includes all aspects of a redirected request, including the time taken for DNS lookup, for a TCP/SSL connection to be established, the request itself, and the response time. 0: The initial request is not redirected.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/request_receive
BETA
(project)
Request receive HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
Time taken to download the entire content of the first HTTP response.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/request_wait
BETA
(project)
Request wait HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
The time from when the first non-redirected HTTP request is sent until the first byte of the response is received.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/ssl_connect
BETA
(project)
SSL connect HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
The time to complete the SSL handshake for the first non-redirected request.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/tcp_connect
BETA
(project)
TCP connect HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
The time to establish the TCP connection for the first non-redirected request (SYN->SYNACK).
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/response_time/total
BETA
(project)
Total HTTP response time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
Total response time for the first request.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/retransmission/out
BETA
(project)
Outbound HTTP retransmission rate for Web Path
GAUGE , DOUBLE , %
networkmanagement.googleapis.com/WebPath
The percentage of packets that the client had to resend to the server. It is captured directly from the TCP/IP stack during the web transaction.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/http/test_error
BETA
(project)
HTTP test status for Web Path
GAUGE , INT64 , 1
networkmanagement.googleapis.com/WebPath
0- Indicates that the HTTP web test succeeded (i.e the web path successfully completed all stages of the request and the actual result equals to the expected result) and performance metrics are available.1 - Indicates that the HTTP web test failed in which case not all performance metrics might be available.
error_type :
Type of the error.
error_detail :
Detail of the error.
response_code :
HTTP response code.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
insights/web/total_transaction_time
BETA
(project)
Total transaction time for Web Path
GAUGE , DOUBLE , ms
networkmanagement.googleapis.com/WebPath
The total time to execute the workflow.
source_cloud_provider :
Source Cloud Provider. Can be either "GCP", "AWS", or "AZURE" for example. Otherwise "UNDEFINED".
source_monitoring_point_id :
Unique identifier of the source Monitoring Point.
source_monitoring_point_display_name :
Source Monitoring Point display name.
source_cloud_instance_id :
Source instance ID.
source_cloud_zone :
Source cloud zone.
source_cloud_region :
Source cloud region.
source_cloud_project_id :
The cloud project ID of the source Monitoring Point. In AWS it is equivalent to account_id, in Azure to subscription_id.
destination :
Web monitoring destination URL.
monitoring_policy_id :
The ID of the monitoring policy that created this path.
monitoring_policy_display_name :
The name of the monitoring policy that created this path.
networksecurity
Metrics from Google Cloud Armor .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with networksecurity.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
dnsthreatdetector/received_dns_threat_count
BETA
(project)
DNS threat log count
CUMULATIVE , INT64 , bytes
networksecurity.googleapis.com/DnsThreatDetector
Total number of threat logs generated by DNS threat detection service.
inspected_project_id :
The ID of GCP project associated with Protective DNS.
severity :
The severity of threat logs (info, low, medium, high, critical).
type :
The type of threat logs as a string.
dnsthreatdetector/sent_dns_log_count
BETA
(project)
Inspected log count
CUMULATIVE , INT64 , bytes
networksecurity.googleapis.com/DnsThreatDetector
Total number of DNS query logs inspected by the Protective DNS service.
inspected_project_id :
The ID of GCP project associated with Protective DNS.
dos/ingress_bytes_count
BETA
(project)
Ingress bytes
DELTA , INT64 , By
networksecurity.googleapis.com/ProtectedEndpoint
The total number of bytes received, broken down by drop status (allowed or dropped). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
drop_status :
Indicates whether the bytes were dropped or allowed by the network infrastructure.
dos/ingress_packets_count
BETA
(project)
Ingress packets
DELTA , INT64 , {packets}
networksecurity.googleapis.com/ProtectedEndpoint
The total number of packets received, broken down by drop status (allowed or dropped). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
drop_status :
Indicates whether the packets were dropped or allowed by the network infrastructure.
firewall_endpoint/antivirus_signature_version
BETA
(project)
Antivirus signature version
GAUGE , INT64 , 1
networksecurity.googleapis.com/FirewallEndpoint
The minimum Antivirus signature version in the firewall endpoint. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
version :
The minimum Antivirus signature version in the firewall endpoint.
firewall_endpoint/apps_and_threats_signature_version
BETA
(project)
Apps and threats signature version
GAUGE , INT64 , 1
networksecurity.googleapis.com/FirewallEndpoint
The minimum Apps and Threats signature version in the firewall endpoint. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
version :
The minimum Apps and Threats signature version in the firewall endpoint.
firewall_endpoint/health
BETA
(project)
Firewall Endpoint Health
GAUGE , BOOL , 1
networksecurity.googleapis.com/FirewallEndpoint
Indicates whether the Firewall Endpoint is healthy or not. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
firewall_endpoint/received_bytes_count
BETA
(project)
Received bytes
DELTA , INT64 , By
networksecurity.googleapis.com/FirewallEndpoint
Total Firewall Endpoint received bytes.
security_profile_group_name :
The name of the security profile group.
inspected_network_name :
The name of the Network that was inspected.
inspected_project_id :
The ID of the GCP project associated with the network.
firewall_endpoint/received_packets_count
BETA
(project)
Received packets
DELTA , INT64 , 1
networksecurity.googleapis.com/FirewallEndpoint
Total Firewall Endpoint received packets.
security_profile_group_name :
The name of the security profile group.
inspected_network_name :
The name of the Network that was inspected.
inspected_project_id :
The ID of the GCP project associated with the network.
firewall_endpoint/sent_bytes_count
BETA
(project)
Sent bytes
DELTA , INT64 , By
networksecurity.googleapis.com/FirewallEndpoint
Total Firewall Endpoint sent bytes.
security_profile_group_name :
The name of the security profile group.
inspected_network_name :
The name of the Network that was inspected.
inspected_project_id :
The ID of the GCP project associated with the network.
firewall_endpoint/sent_packets_count
BETA
(project)
Sent packets
DELTA , INT64 , 1
networksecurity.googleapis.com/FirewallEndpoint
Total Firewall Endpoint sent packets.
security_profile_group_name :
The name of the security profile group.
inspected_network_name :
The name of the Network that was inspected.
inspected_project_id :
The ID of the GCP project associated with the network.
firewall_endpoint/threats_count
BETA
(project)
Threats count
DELTA , INT64 , 1
networksecurity.googleapis.com/FirewallEndpoint
Total Firewall Endpoint detected threats. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
security_profile_group_name :
The name of the security profile group.
inspected_network_name :
The name of the Network that was inspected.
inspected_project_id :
The ID of the GCP project associated with the network.
action :
The action that was taken, either the default action or the override action specified in the security profile.
firewall_endpoint/wildfire_health
BETA
(project)
WildFire health
GAUGE , BOOL ,
networksecurity.googleapis.com/FirewallEndpoint
Indicates whether the WildFire integration is healthy or not.
firewall_endpoint/wildfire_signature_version
BETA
(project)
WildFire signature version
GAUGE , INT64 , 1
networksecurity.googleapis.com/FirewallEndpoint
The minimum WildFire signature version in the firewall endpoint. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
version :
The minimum WildFire signature version in the firewall endpoint.
https/previewed_request_count
GA
(project)
Previewed request count
DELTA , INT64 , 1
network_security_policy
Queries that would be affected by rules currently in the 'preview' mode, if those rules were to be made non-preview. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
blocked :
(BOOL)
Policy application result.
backend_target_name :
HTTP(S) Backend Service Name.
https/request_count
GA
(project)
Request count
DELTA , INT64 , 1
network_security_policy
Actual result of policy enforcement on queries. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
blocked :
(BOOL)
Policy application result.
backend_target_name :
HTTP(S) Backend Service Name.
l3/external/packet_count
BETA
(project)
Packet count
DELTA , INT64 , 1
networksecurity.googleapis.com/RegionalNetworkSecurityPolicy
Estimated number of packets by matching rule and enforcement action (sampled).
rule_number :
(INT64)
Rule number in RegionalSecurityPolicy.
blocked :
(BOOL)
Rule application result.
l3/external/preview_packet_count
BETA
(project)
Preview packet count
DELTA , INT64 , 1
networksecurity.googleapis.com/RegionalNetworkSecurityPolicy
Estimated number of packets that would be affected by rule currently in preview mode, if that rule were to be made non-preview (sampled).
rule_number :
(INT64)
Rule number in RegionalSecurityPolicy.
blocked :
(BOOL)
Rule application result.
partner_sse_gateway/established_bgp_sessions
BETA
(project)
Established BGP sessions
GAUGE , INT64 , 1
networksecurity.googleapis.com/PartnerSSEGateway
Number of external BGP sessions established by the Partner SSE Gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
partner_sse_gateway/sse_received_bytes_count
BETA
(project)
Bytes received from partner
DELTA , INT64 , By
networksecurity.googleapis.com/PartnerSSEGateway
Count of bytes received by the Partner SSE Gateway from the partner.
zone :
The zone in which the gateway received and processed packets.
partner_sse_gateway/sse_received_packets_count
BETA
(project)
Packets received from partner
DELTA , INT64 , 1
networksecurity.googleapis.com/PartnerSSEGateway
Count of packets received by the Partner SSE Gateway from the partner.
zone :
The zone in which the gateway received and processed packets.
partner_sse_gateway/sse_sent_bytes_count
BETA
(project)
Bytes sent to partner
DELTA , INT64 , By
networksecurity.googleapis.com/PartnerSSEGateway
Count of bytes sent by the Partner SSE Gateway to the partner.
zone :
The zone from which the gateway sent packets.
partner_sse_gateway/sse_sent_packets_count
BETA
(project)
Packets sent to partner
DELTA , INT64 , 1
networksecurity.googleapis.com/PartnerSSEGateway
Count of packets sent by the Partner SSE Gateway to the partner.
zone :
The zone from which the gateway sent packets.
sse_gateway/sse_received_bytes_count
BETA
(project)
Bytes received from partner
DELTA , INT64 , By
networksecurity.googleapis.com/SSEGateway
Count of bytes received by the SSE Gateway from the partner endpoint.
sse_gateway/sse_received_packets_count
BETA
(project)
Packets received from partner
DELTA , INT64 , 1
networksecurity.googleapis.com/SSEGateway
Count of packets received by the SSE Gateway from the partner endpoint.
sse_gateway/sse_sent_bytes_count
BETA
(project)
Bytes sent to partner
DELTA , INT64 , By
networksecurity.googleapis.com/SSEGateway
Count of bytes sent by the SSE Gateway to the partner endpoint.
sse_gateway/sse_sent_packets_count
BETA
(project)
Packets sent to partner
DELTA , INT64 , 1
networksecurity.googleapis.com/SSEGateway
Count of packets sent by the SSE Gateway to the partner endpoint.
sse_gateway/trusted_network_received_bytes_count
BETA
(project)
Bytes received from trusted network
DELTA , INT64 , By
networksecurity.googleapis.com/SSEGateway
Count of bytes received by the SSE Gateway from a trusted application network.
sse_gateway/trusted_network_received_packets_count
BETA
(project)
Packets received from trusted network
DELTA , INT64 , 1
networksecurity.googleapis.com/SSEGateway
Count of packets received by the SSE Gateway from a trusted application network.
sse_gateway/trusted_network_sent_bytes_count
BETA
(project)
Bytes sent to trusted network
DELTA , INT64 , By
networksecurity.googleapis.com/SSEGateway
Count of bytes sent by the SSE Gateway to a trusted application network.
sse_gateway/trusted_network_sent_packets_count
BETA
(project)
Packets sent to trusted network
DELTA , INT64 , 1
networksecurity.googleapis.com/SSEGateway
Count of packets sent by the SSE Gateway to a trusted application network.
sse_gateway/untrusted_network_received_bytes_count
BETA
(project)
Bytes received from untrusted network
DELTA , INT64 , By
networksecurity.googleapis.com/SSEGateway
Count of bytes received by the SSE Gateway from an untrusted user network.
sse_gateway/untrusted_network_received_packets_count
BETA
(project)
Packets received from untrusted network
DELTA , INT64 , 1
networksecurity.googleapis.com/SSEGateway
Count of packets received by the SSE Gateway from an untrusted user network.
sse_gateway/untrusted_network_sent_bytes_count
BETA
(project)
Bytes sent to untrusted network
DELTA , INT64 , By
networksecurity.googleapis.com/SSEGateway
Count of bytes sent by the SSE Gateway to an untrusted user network.
sse_gateway/untrusted_network_sent_packets_count
BETA
(project)
Packets sent to untrusted network
DELTA , INT64 , 1
networksecurity.googleapis.com/SSEGateway
Count of packets sent by the SSE Gateway to an untrusted user network.
tcp_ssl_proxy/new_connection_count
GA
(project)
New connection count
DELTA , INT64 , 1
network_security_policy
Actual result of policy enforcement on new connections. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
blocked :
(BOOL)
Policy application result.
backend_target_name :
TCP/SSL Backend Service Name.
tcp_ssl_proxy/previewed_new_connection_count
GA
(project)
Previewed new connection count
DELTA , INT64 , 1
network_security_policy
New connections that would be affected by rules currently in the 'preview' mode, if those rules were to be made non-preview. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
blocked :
(BOOL)
Policy application result.
backend_target_name :
TCP/SSL Backend Service Name.
networkservices
Metrics from Secure Web Proxy .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with networkservices.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
https/backend_latencies
GA
(project)
Backend latencies
DELTA , DISTRIBUTION , ms
networkservices.googleapis.com/Gateway
The latency from when the request is sent by the proxy to the backend, and the proxy receives the last byte of response. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
security_policy_action :
Action taken by security policy. Can be ALLOW or DENY.
https/request_bytes_count
GA
(project)
Request bytes count
DELTA , INT64 , By
networkservices.googleapis.com/Gateway
The number of bytes sent as requests from an HTTP/S load balancer to clients. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
security_policy_action :
Action taken by security policy. Can be ALLOW or DENY.
https/request_count
GA
(project)
Request count
DELTA , INT64 , 1
networkservices.googleapis.com/Gateway
The number of requests served by an HTTP/S load balancer. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
security_policy_action :
Action taken by security policy. Can be ALLOW or DENY.
https/response_bytes_count
GA
(project)
Response bytes count
DELTA , INT64 , By
networkservices.googleapis.com/Gateway
The number of bytes sent as responses from an HTTP/S load balancer to clients. Sampled every 60 seconds. After sampling, data is not visible for up to 90 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
security_policy_action :
Action taken by security policy. Can be ALLOW or DENY.
https/total_latencies
GA
(project)
Total latencies
DELTA , DISTRIBUTION , ms
networkservices.googleapis.com/Gateway
A distribution of the latency from when the request is received by the proxy, until the proxy receives an ACK from the client on last response byte. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
(INT64)
HTTP response code.
response_code_class :
(INT64)
HTTP response code class: 200, 300, 400, 500 or 0 for none.
security_policy_action :
Action taken by security policy. Can be ALLOW or DENY.
multicast/admin/group_control_messages
BETA
(project)
The number of control messages received for the specific multicast group
DELTA , INT64 , 1
networkservices.googleapis.com/MulticastGroup
The number of multicast group control messages. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
consumer_project_number :
Consumer project ID (numeric string).
consumer_location :
The consumer's zone.
message_type :
The type of the control message. (e.g. "IGMP_CONSUMER_JOINED")
result :
"UNKNOWN" for all but "IGMP_JOIN_REJECTED" messages. For "IGMP_JOIN_REJECTED", contains the rejection reason.
multicast/admin/number_of_active_consumers
BETA
(project)
The number of consumers currently subscribed to the specific multicast group
GAUGE , INT64 , 1
networkservices.googleapis.com/MulticastGroup
The number of active consumers per multicast group. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
consumer_project_number :
Consumer project ID (numeric string).
consumer_location :
The consumer's zone.
wasm_plugin/cpu/usage_times
BETA
(project)
Wasm plugin normalized CPU usage
DELTA , DISTRIBUTION , us{CPU}
networkservices.googleapis.com/WasmPluginVersion
CPU usage time of Wasm plugin invocations, in microseconds normalized across machine platforms.
status :
The status of the invocation, for example, "SUCCESS" or "CPU_LIMIT_EXCEEDED".
operation :
The operation type of the invocation, for example, "CONFIGURE_PLUGIN" or "HTTP_REQUEST_HEADERS".
effect :
The effect of the invocation, for example, "NONE", "CONTENT_MODIFIED" or "IMMEDIATE_RESPONSE".
attached_resource :
The name of a resource to which the plugin is attached, that triggered the plugin invocation.
wasm_plugin/invocation_count
BETA
(project)
Wasm plugin invocation count
DELTA , INT64 , 1
networkservices.googleapis.com/WasmPluginVersion
Number of invocations handled by the Wasm plugin.
status :
The status of the invocation, for example, "SUCCESS" or "CPU_LIMIT_EXCEEDED".
operation :
The operation type of the invocation, for example, "CONFIGURE_PLUGIN" or "HTTP_REQUEST_HEADERS".
effect :
The effect of the invocation, for example, "NONE", "CONTENT_MODIFIED" or "IMMEDIATE_RESPONSE".
attached_resource :
The name of a resource to which the plugin is attached, that triggered the plugin invocation.
wasm_plugin/invocation_latencies
BETA
(project)
Wasm plugin invocation latencies
DELTA , DISTRIBUTION , us
networkservices.googleapis.com/WasmPluginVersion
Wall time latency of Wasm plugin invocations, in microseconds.
status :
The status of the invocation, for example, "SUCCESS" or "CPU_LIMIT_EXCEEDED".
operation :
The operation type of the invocation, for example, "CONFIGURE_PLUGIN" or "HTTP_REQUEST_HEADERS".
effect :
The effect of the invocation, for example, "NONE", "CONTENT_MODIFIED" or "IMMEDIATE_RESPONSE".
attached_resource :
The name of a resource to which the plugin is attached, that triggered the plugin invocation.
wasm_plugin/memory/bytes_used
BETA
(project)
Wasm plugin memory usage
GAUGE , DISTRIBUTION , By
networkservices.googleapis.com/WasmPluginVersion
Total memory allocated by Wasm plugin VMs, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
oracledatabase
Metrics from Oracle Database@Google Cloud .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with oracledatabase.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
asm_diskgroup_utilization
GA
(project)
ASM Diskgroup Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/CloudVmCluster
Percentage of usable space used in a Disk Group. Usable space is the space available for growth. DATA disk group stores our Oracle database files. RECO disk group contains database files for recovery such as archives and flashback logs.
deployment_type :
Deployment type of CloudVmCluster node.
diskgroup_name :
Disk group name.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/apex_apps
GA
(project)
Active APEX Applications
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
Displays the number of active APEX applications over the time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/apex_page_events
GA
(project)
APEX Page Events
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
Displays the number of page events over time.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/apex_page_load_time
GA
(project)
APEX Page Load Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/AutonomousDatabase
Average APEX page execution time over the time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/apex_workspaces
GA
(project)
APEX Workspace Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
Displays the number of APEX workspaces over the time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/average_active_sessions
GA
(project)
Average Active Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The average number of sessions that are actively executing or waiting for resources.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of changes that were part of an update or delete operation that were made to all blocks in the SGA. Such changes generate redo log entries and thus become permanent changes to the database if the transaction is committed. This approximates total database work. This statistic indicates the rate at which buffers are being dirtied, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/blocking_sessions
GA
(project)
Blocking Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of current blocking sessions.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/connection_latency
GA
(project)
Connection Latency
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/AutonomousDatabase
The time taken to connect to an Oracle Autonomous Database Serverless instance in each region from a Compute service virtual machine in the same region.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/connections_dropped_by_client
GA
(project)
Connections Dropped By Client
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of connections dropped by the client.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/connections_dropped_by_server
GA
(project)
Connections Dropped By Server
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of connections dropped by the server.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/cpu_time
GA
(project)
CPU Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/AutonomousDatabase
Average rate of accumulation of CPU time by foreground sessions in the database over the time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/AutonomousDatabase
The CPU usage expressed as a percentage, aggregated across all consumer groups. The utilization percentage is reported with respect to the number of CPUs the database is allowed to use.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of successful logons during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/database_availability
GA
(project)
Database Availability
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The database is available for connections in the given minute, with possible values. 1 = DB Available, 0 = DB Unavailable.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/db_time
GA
(project)
DB Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/AutonomousDatabase
The amount of time database user sessions spend executing database code (CPU Time + WaitTime). DB Time is used to infer database call latency, because DB Time increases in direct proportion to both database call latency (response time) and call volume. It is calculated as the average rate of accumulation of database time by foreground sessions in the database over the time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/failed_connections
GA
(project)
Failed Connections
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of failed database connections.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/failed_logons
GA
(project)
Failed Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of log ons that failed because of an invalid user name and/or password, during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/hard_parses
GA
(project)
Parse Count (Hard)
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of parse calls (real parses) during the selected time interval. A hard parse is an expensive operation in terms of memory use, because it requires Oracle to allocate a workheap and other memory structures and then build a parse tree.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/logical_reads
GA
(project)
Session Logical Reads
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The sum of "db block gets" plus "consistent gets", during the selected time interval. This includes logical reads of database blocks from either the buffer cache or process private memory.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/parse_failures
GA
(project)
Parse Count (Failures)
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of parse failures during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/parses
GA
(project)
Parse Count (Total)
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of hard and soft parses during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/peer_lag
GA
(project)
Peer Lag
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/AutonomousDatabase
The total time in seconds by which the Disaster Recovery peer lags behind its Primary database.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/physical_read_total_bytes
GA
(project)
Physical Read Total Bytes
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
The size in bytes of disk reads by all database instance activity including application reads, backup and recovery, and other utilities, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/physical_reads
GA
(project)
Physical Reads
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of data blocks read from disk, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/physical_write_total_bytes
GA
(project)
Physical Write Total Bytes
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
The size in bytes of all disk writes for the database instance including application activity, backup and recovery, and other utilities, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/physical_writes
GA
(project)
Physical Writes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of data blocks written to disk, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/query_latency
GA
(project)
Query Latency
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/AutonomousDatabase
The time taken to display the results of a simple query on the user's screen.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/queued_statements
GA
(project)
Queued Statements
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of queued SQL statements, aggregated across all consumer groups, during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/redo_generated
GA
(project)
Redo Generated
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
Amount of redo generated in bytes, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/running_statements
GA
(project)
Running Statements
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of running SQL statements, aggregated across all consumer groups, during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/session_utilization
GA
(project)
Session Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/AutonomousDatabase
The maximum session utilization expressed as a percentage, aggregated across all consumer groups.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/sessions
GA
(project)
Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of sessions in the database.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/sqlnet_bytes_from_client
GA
(project)
Bytes Received via SQL*Net from Client
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
The number of bytes received from the client over Oracle Net Services, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/sqlnet_bytes_from_dblink
GA
(project)
Bytes Received via SQL*Net from DBLink
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
The number of bytes received from a database link over Oracle Net Services, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/sqlnet_bytes_to_client
GA
(project)
Bytes Sent via SQL*Net to Client
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
The number of bytes sent to the client from the foreground processes, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/sqlnet_bytes_to_dblink
GA
(project)
Bytes Sent via SQL*Net to DBLink
GAUGE , DOUBLE , By
oracledatabase.googleapis.com/AutonomousDatabase
The number of bytes sent over a database link, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/storage_allocated
GA
(project)
Storage Space Allocated
GAUGE , DOUBLE , GB
oracledatabase.googleapis.com/AutonomousDatabase
Amount of space allocated to the database for all tablespaces, during the interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/storage_max
GA
(project)
Maximum Storage Space
GAUGE , DOUBLE , GB
oracledatabase.googleapis.com/AutonomousDatabase
Maximum amount of storage reserved for the database during the interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/storage_used
GA
(project)
Storage Space Used
GAUGE , DOUBLE , GB
oracledatabase.googleapis.com/AutonomousDatabase
Maximum amount of space used during the interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/AutonomousDatabase
The percentage of the reserved maximum storage currently allocated for all database tablespaces. Represents the total reserved space for all tablespaces.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The combined number of user commits and user rollbacks during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The combined number of logons, parses, and execute calls during the selected interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/user_commits
GA
(project)
User Commits
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
The number of user commits during the selected time interval. When a user commits a transaction, the generated redo that reflects the changes made to database blocks must be written to disk. Commits often represent the closest thing to a user transaction rate.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/user_rollbacks
GA
(project)
User Rollbacks
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/AutonomousDatabase
Number of times users manually issue the ROLLBACK statement or an error occurs during a user's transactions, during the selected time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
autonomousdatabase/wait_time
GA
(project)
Wait Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/AutonomousDatabase
Average rate of accumulation of non-idle wait time by foreground sessions in the database over the time interval.
autonomous_db_type :
Type of Autonomous database.
deployment_type :
Deployment type of Autonomous database.
resource_id :
OCID, Oracle cloud Resource identifier.
containerdatabase/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ContainerDatabase
Changes per second.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ContainerDatabase
Percent CPU utilization of container database.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
containerdatabase/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ContainerDatabase
The number of successful logons during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ContainerDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/parses
GA
(project)
Parse Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ContainerDatabase
The number of hard and soft parses during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/storage_allocated
GA
(project)
Storage Space Allocated
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ContainerDatabase
Total amount of storage space allocated to the database at the collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/storage_allocated_by_tablespace
GA
(project)
Allocated Storage Space By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ContainerDatabase
Total amount of storage space allocated to the tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Tablespace name.
tablespace_type :
Tablespace type.
containerdatabase/storage_used
GA
(project)
Storage Space Used
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ContainerDatabase
Total amount of storage space used by the database at the collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/storage_used_by_tablespace
GA
(project)
Storage Space Used By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ContainerDatabase
Total amount of storage space used by tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Tablespace name.
tablespace_type :
Tablespace type.
containerdatabase/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ContainerDatabase
The percentage of provisioned storage capacity currently in use. Represents the total allocated space for all tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/storage_utilization_by_tablespace
GA
(project)
Storage Space Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ContainerDatabase
This indicates the percentage of storage space utilized by the tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Tablespace name.
tablespace_type :
Tablespace type.
containerdatabase/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ContainerDatabase
The combined number of user commits and user rollbacks during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
containerdatabase/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ContainerDatabase
The combined number of logons, parses, and execute calls during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/CloudVmCluster
Percent CPU utilization of CloudVmCluster.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/asm_diskgroup_utilization
GA
(project)
ASM Diskgroup Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystem
Percentage of usable space used in a Disk Group. Usable space is the space available for growth. DATA disk group stores our Oracle database files. RECO disk group contains database files for recovery such as archives and flashback logs.
deployment_type :
Deployment type of the node.
diskgroup_name :
Disk group name.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystem
Percent CPU utilization.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/filesystem_utilization
GA
(project)
Filesystem Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystem
Percent utilization of provisioned filesystem.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
filesystem_name :
Filesystem name.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/load_average
GA
(project)
Load Average
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystem
System load average over 5 minutes.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/memory_utilization
GA
(project)
Memory Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystem
Percentage of memory available for starting new applications, without swapping.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/node_status
GA
(project)
Node Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystem
Indicates whether the host is reachable.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/ocpus_allocated
GA
(project)
OCPUs Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystem
The number of OCPUs allocated.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system/swap_utilization
GA
(project)
Swap Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystem
Percent utilization of total swap space.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
db_system_container_database/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemContainerDatabase
The Average number of blocks changed per second.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
instance_number :
Instance number.
instance_name :
Name of the instance.
db_system_container_database/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemContainerDatabase
The CPU utilization expressed as a percentage, aggregated across all consumer groups. The utilization percentage is reported with respect to the number of CPUs the database is allowed to use, which is two times the number of OCPUs.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the Db System.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
db_system_container_database/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemContainerDatabase
The number of successful logons during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
instance_number :
Instance number.
instance_name :
Name of the instance.
db_system_container_database/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemContainerDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
instance_number :
Instance number.
instance_name :
Name of the instance.
db_system_container_database/parses
GA
(project)
Parse Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemContainerDatabase
The number of hard and soft parses during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the db.
database_resource_id :
Oracle cloud Resource identifier of the database.
db_system_container_database/storage_allocated
GA
(project)
Storage Space Allocated
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemContainerDatabase
Total amount of storage space allocated to the database at the collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
db_system_container_database/storage_allocated_by_tablespace
GA
(project)
Allocated Storage Space By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemContainerDatabase
Total amount of storage space allocated to the tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Name of the tablespace.
tablespace_type :
Type of the tablespace.
db_system_container_database/storage_used
GA
(project)
Storage Space Used
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemContainerDatabase
Total amount of storage space used by the database at the collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
db_system_container_database/storage_used_by_tablespace
GA
(project)
Storage Used By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemContainerDatabase
Total amount of storage space used by tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Name of the tablespace.
tablespace_type :
Type of the tablespace.
db_system_container_database/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemContainerDatabase
The percentage of provisioned storage capacity currently in use. Represents the total allocated space for all tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
db_system_container_database/storage_utilization_by_tablespace
GA
(project)
Storage Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemContainerDatabase
This indicates the percentage of storage space utilized by the tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Name of the tablespace.
tablespace_type :
Type of the tablespace.
db_system_container_database/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemContainerDatabase
The combined number of user commits and user rollbacks during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
instance_number :
Instance number.
instance_name :
Name of the instance.
db_system_container_database/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemContainerDatabase
The combined number of logons, parses, and execute calls during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of the node.
deployment_type :
Deployment type of the Db System.
database_resource_id :
Oracle cloud Resource identifier of the database.
instance_number :
Instance number.
instance_name :
Name of the instance.
db_system_pluggable_database/allocated_storage_utilization_by_tablespace
GA
(project)
Allocated Storage Utilization by Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The percentage of space used by a tablespace, out of allocated space. For CDBs, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
tablespace_name :
Name of the tablespace.
resource_type :
Type of the database resource.
tablespace_contents :
Tablespace contents.
db_system_pluggable_database/apply_lag
GA
(project)
Apply Lag
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of seconds the standby database is behind the primary database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_role :
Role of the database.
primary_db_id :
Primary database identifier.
primary_db_unique_name :
Primary database unique name.
db_system_pluggable_database/apply_lag_data_refresh_elapsed_time
GA
(project)
Apply Lag Data Refresh Elapsed Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The elapsed time since the ApplyLag metric sample was last collected.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_role :
Role of the database.
primary_db_id :
Primary database identifier.
primary_db_unique_name :
Primary database unique name.
db_system_pluggable_database/avg_gc_current_block_receive_time
GA
(project)
Average GC Current Block Receive Time
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average global cache current blocks receive time. Statistic reports the mean value. For Real Application Cluster (RAC) databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/avg_gccr_block_receive_time
GA
(project)
Average GC CR Block Receive Time
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average global cache consistent-read (CR) block receive time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/backup_duration
GA
(project)
Backup Duration
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The duration of the last database backup.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
status :
Status of the backup.
backup_type :
Type of the backup.
device_type :
Type of the device.
db_system_pluggable_database/backup_size
GA
(project)
Backup Size
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The size of the last database backup.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
status :
Status of the backup.
backup_type :
Type of the backup.
device_type :
Type of the device.
db_system_pluggable_database/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average number of blocks changed per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/blocking_sessions
GA
(project)
Blocking Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The current blocking sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/cpu_time
GA
(project)
CPU Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average rate of accumulation of CPU time by foreground sessions in the database instance over the time interval. The CPU time component of Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The CPU utilization expressed as a percentage, aggregated across all consumer groups. The utilization percentage is reported with respect to the number of CPUs the database is allowed to use, which is two times the number of OCPUs.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/cpus
GA
(project)
CPUs
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of CPUs during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/cpus_enabled
GA
(project)
CPUs Enabled
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of CPUs or processors available on the database instance.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of successful logons during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/db_mgmt_job_executions
GA
(project)
DB Management Job Executions Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of SQL job executions on a single Managed Database or a Database Group, and their status. Status dimensions can be the following values Succeeded, Failed, InProgress.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
managed_database_id :
Managed database identifier.
managed_database_group_id :
Managed database group identifier.
job_id :
The identifier of the job.
status :
Status of the job run.
resource_type :
Type of the database resource.
db_system_pluggable_database/db_time
GA
(project)
DB Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average rate of accumulation of database time (CPU + Wait) by foreground sessions in the database instance over the time interval. Also known as Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/ecpus_allocated
GA
(project)
ECPUs Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The actual number of ECPUs allocated by the service during the selected interval. This metric is available if the VM cluster uses the ECPU compute model.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
db_system_pluggable_database/estimated_failover_time
GA
(project)
Estimated Failover Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of seconds required to fail over to the standby database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_role :
Role of the database.
primary_db_id :
Primary database identifier.
primary_db_unique_name :
Primary database unique name.
db_system_pluggable_database/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/fra_space_limit
GA
(project)
Flash Recovery Area Space Limit
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The flash recovery area space limit.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/fra_utilization
GA
(project)
Flash Recovery Area Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The flash recovery area utilization.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/gcc_current_blocks_received
GA
(project)
GC Current Blocks Received
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The global cache current blocks received per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/gccr_blocks_received
GA
(project)
GC CR Blocks Received
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The global cache CR blocks received per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/interconnect_traffic
GA
(project)
Interconnect Traffic
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average internode data transfer rate.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/invalid_objects
GA
(project)
Invalid Objects
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of invalid database objects.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/io_throughput
GA
(project)
IO Throughput
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average throughput in MB per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
io_type :
Type of IO.
resource_type :
Type of the database resource.
db_system_pluggable_database/iops
GA
(project)
IOPS
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average number of IO operations per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
io_type :
Type of IO.
resource_type :
Type of the database resource.
db_system_pluggable_database/logical_blocks_read
GA
(project)
Logical Blocks Read
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average number of blocks read from SGA/Memory (buffer cache) per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/max_tablespace_size
GA
(project)
Max Tablespace Size
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The maximum possible tablespace size. For CDBs, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
db_system_pluggable_database/memory_usage
GA
(project)
Memory Usage
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The total size of the memory pool.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
memory_type :
Type of memory.
memory_pool :
Memory pool.
resource_type :
Type of the database resource.
db_system_pluggable_database/monitoring_status
GA
(project)
Monitoring Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The monitoring status of the resource. If metric collection fails, error information is captured in this metric.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
collection_name :
Collection name.
resource_type :
Type of the database resource.
error_severity :
Severity of the error.
error_code :
Error code.
db_system_pluggable_database/monitoring_user_password_expiration
GA
(project)
Monitoring User Password Expiration
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of days left before the monitoring user password expires.
is_perpetual :
Whether the password is perpetual.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_system_pluggable_database/non_reclaimable_fra
GA
(project)
Non Reclaimable FRA
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The non-reclaimable fast recovery area.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/ocpus_allocated
GA
(project)
OCPUs Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The actual number of OCPUs allocated by the service during the selected interval of time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
db_system_pluggable_database/parses
GA
(project)
Parse Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of hard and soft parses during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/parses_by_type
GA
(project)
Parses By Type
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of hard or soft parses per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
parse_type :
Parse type.
resource_type :
Type of the database resource.
db_system_pluggable_database/problematic_scheduled_dbms_jobs
GA
(project)
Problematic Scheduled DBMS Jobs
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of problematic scheduled database jobs.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
type :
Type of the problematic job.
resource_type :
Type of the database resource.
db_system_pluggable_database/process_limit_utilization
GA
(project)
Process Limit Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The process limit utilization.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/processes
GA
(project)
Processes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of database processes.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/reclaimable_fra_space
GA
(project)
Reclaimable FRA Space
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The flash recovery area reclaimable space.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/recoverable_fra
GA
(project)
Recoverable FRA
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The reclaimable fast recovery area.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/recovery_window
GA
(project)
Recovery Window
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The current recovery window of a database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
device_type :
Type of the device.
db_system_pluggable_database/redo_apply_rate
GA
(project)
Redo Apply Rate
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The redo apply rate on the standby database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_role :
Role of the database.
primary_db_id :
Primary database identifier.
primary_db_unique_name :
Primary database unique name.
db_system_pluggable_database/redo_generation_rate
GA
(project)
Redo Generation Rate
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The redo generation rate on the primary database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_system_pluggable_database/redo_size
GA
(project)
Redo Size
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average amount of redo generated.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/retention_period
GA
(project)
Retention Period
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of days for which database backups are retained.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_system_pluggable_database/session_limit_utilization
GA
(project)
Session Limit Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The session limit utilization.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/sessions
GA
(project)
Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of sessions in the database.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/storage_allocated
GA
(project)
Storage Allocated
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The total amount of storage space allocated to the database at collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/storage_allocated_by_tablespace
GA
(project)
Storage Allocated by Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The total amount of storage space allocated to the tablespace at collection time. In the case of CDBs, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
db_system_pluggable_database/storage_used
GA
(project)
Storage Used
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The total storage used by the database at collection time, including the space used by tablespaces, flash recovery area, control files, and log files.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/storage_used_by_tablespace
GA
(project)
Storage Used by Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The total amount of storage space used by tablespace at collection time. In the case of CDBs, this metric provides root container tablespace.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
db_system_pluggable_database/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The percentage of provisioned storage capacity currently in use. Represents the total allocated space for all tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/storage_utilization_by_tablespace
GA
(project)
Storage Utilization by Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The percentage of storage space utilized by the tablespace at the collection time. In the case of CDBs, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
db_system_pluggable_database/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The combined number of user commits and user rollbacks during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/transactions_by_status
GA
(project)
Transactions By Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of committed or rolled back transactions per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
transaction_status :
Transaction status.
resource_type :
Type of the database resource.
db_system_pluggable_database/transport_lag
GA
(project)
Transport Lag
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of seconds of redo not yet available on the standby database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_role :
Role of the database.
primary_db_id :
Primary database identifier.
primary_db_unique_name :
Primary database unique name.
db_system_pluggable_database/transport_lag_data_refresh_elapsed_time
GA
(project)
Transport Lag Data Refresh Elapsed Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The elapsed time since the TransportLagDataRefreshElapsedTime metric sample was last collected.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
db_role :
Role of the database.
primary_db_id :
Primary database identifier.
primary_db_unique_name :
Primary database unique name.
db_system_pluggable_database/unprotected_data_window
GA
(project)
Unprotected Data Window
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The current unprotected data window of a database.
deployment_type :
Deployment type of the node.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
device_type :
Type of the device.
db_system_pluggable_database/unusable_indexes
GA
(project)
Unusable Indexes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The number of unusable indexes in the database schema.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
schema_name :
Schema name.
resource_type :
Type of the database resource.
db_system_pluggable_database/usable_fra
GA
(project)
Usable FRA
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The usable fast recovery area.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/used_fra_space
GA
(project)
Used FRA Space
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The flash recovery area space usage.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The combined number of logons, parses, and execute calls during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
resource_type :
Type of the database resource.
db_system_pluggable_database/wait_time
GA
(project)
Wait Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/DbSystemPluggableDatabase
The average rate of accumulation of non-idle wait time by foreground sessions in the database instance over the time interval. The wait time component of Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of the node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of the node.
wait_class :
Wait class.
resource_type :
Type of the database resource.
exadb_containerdatabase/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbContainerDatabase
Changes per second.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbContainerDatabase
Percent CPU utilization of container database.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
exadb_containerdatabase/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbContainerDatabase
The number of successful logons during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbContainerDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/parses
GA
(project)
Parse Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbContainerDatabase
The number of hard and soft parses during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/redo_generation_rate
GA
(project)
Redo Generation Rate
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/ExadbContainerDatabase
The redo generation rate on the primary database.
resource_id :
OCID, Oracle cloud Resource identifier.
resource_type :
Type of the database resource.
deployment_type :
Deployment type of ExadbVmCluster node.
exadb_containerdatabase/storage_allocated
GA
(project)
Storage Space Allocated
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbContainerDatabase
Total amount of storage space allocated to the database at the collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/storage_allocated_by_tablespace
GA
(project)
Allocated Storage Space By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbContainerDatabase
Total amount of storage space allocated to the tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Tablespace name.
tablespace_type :
Tablespace type.
exadb_containerdatabase/storage_used
GA
(project)
Storage Space Used
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbContainerDatabase
Total amount of storage space used by the database at the collection time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/storage_used_by_tablespace
GA
(project)
Storage Space Used By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbContainerDatabase
Total amount of storage space used by tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Tablespace name.
tablespace_type :
Tablespace type.
exadb_containerdatabase/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbContainerDatabase
The percentage of provisioned storage capacity currently in use. Represents the total allocated space for all tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/storage_utilization_by_tablespace
GA
(project)
Storage Space Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbContainerDatabase
This indicates the percentage of storage space utilized by the tablespace at the collection time. In case of container database, this metric provides root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
database_resource_id :
Oracle cloud Resource identifier of the database.
tablespace_name :
Tablespace name.
tablespace_type :
Tablespace type.
exadb_containerdatabase/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbContainerDatabase
The combined number of user commits and user rollbacks during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_containerdatabase/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbContainerDatabase
The combined number of logons, parses, and execute calls during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
database_resource_id :
Oracle cloud Resource identifier of the database.
exadb_pluggabledatabase/allocated_storage_utilization_by_tablespace
GA
(project)
Allocated Space Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The percentage of space used by tablespace, out of all allocated. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/avg_gc_current_block_receive_time
GA
(project)
Average GC Current Block Receive Time
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average global cache current blocks receive time. Statistic reports the mean value. For Real Application Cluster (RAC) databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/avg_gccr_block_receive_time
GA
(project)
Average GC CR Block Receive Time
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average global cache CR (consistent-read) block receive time. For RAC / cluster databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average number of blocks changed per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/blocking_sessions
GA
(project)
Blocking Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
Current blocking sessions. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/cpu_time
GA
(project)
CPU Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average rate of accumulation of CPU time by foreground sessions in the database instance over the time interval. The CPU time component of Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The CPU utilization expressed as a percentage, aggregated across all consumer groups. The utilization percentage is reported with respect to the number of CPUs the database is allowed to use, which is two times the number of OCPUs.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/cpus
GA
(project)
CPU Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of CPUs during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of successful logons during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/db_mgmt_job_executions
GA
(project)
Job Executions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of SQL job executions on a single managed database or a database group, and their status.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
managed_database_id :
Managed database identifier.
managed_database_group_id :
Managed database group identifier.
job_id :
The identifier of the job.
status :
Status of the job run.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/db_time
GA
(project)
DB Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average rate of accumulation of database time (CPU + Wait) by foreground sessions in the database instance over the time interval. Also known as Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/ecpus_allocated
GA
(project)
ECPU Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The actual number of ECPUs allocated by the service during the selected interval. This metric is available if the VM cluster uses the ECPU compute model.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
exadb_pluggabledatabase/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/fra_space_limit
GA
(project)
Flash Recovery Area Limit
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The flash recovery area space limit.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/fra_utilization
GA
(project)
Flash Recovery Area Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The flash recovery area utilization.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/gc_current_blocks_received
GA
(project)
GC Current Blocks Received
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
Represents global cache current blocks received per second. Statistic reports the mean value. For Real Application Cluster (RAC) databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/gccr_blocks_received
GA
(project)
GC CR Blocks Received
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The global cache CR (consistent-read) blocks received per second. For RAC / cluster databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/interconnect_traffic
GA
(project)
Average Interconnect Traffic
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average internode data transfer rate. For RAC / cluster databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/invalid_objects
GA
(project)
Invalid Objects
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
Invalid database objects count. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/io_throughput
GA
(project)
IO Throughput
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average throughput in MB per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
io_type :
Type of IO.
exadb_pluggabledatabase/iops
GA
(project)
IOPS
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average number of input-output operations per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
io_type :
Type of IO.
exadb_pluggabledatabase/logical_blocks_read
GA
(project)
Logical Reads
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average number of blocks read from SGA/Memory (buffer cache) per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/max_tablespace_size
GA
(project)
Max Tablespace Size
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The maximum possible tablespace size. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/memory_usage
GA
(project)
Memory Usage
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
Memory pool total size in MB.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
memory_type :
Type of memory.
memory_pool :
Memory pool.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/monitoring_status
GA
(project)
Monitoring Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The monitoring status of the resource. If a metric collection fails, error information is captured in this metric.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
collection_name :
Collection name.
resource_type :
Type of the database resource.
error_severity :
Severity of the error.
error_code :
Error code.
exadb_pluggabledatabase/monitoring_user_password_expiration
GA
(project)
Monitoring User Password Expiration
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of days left before the monitoring user password expires.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/non_reclaimable_fra
GA
(project)
Non Reclaimable Fast Recovery Area
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The Non-reclaimable fast recovery area.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/ocpus_allocated
GA
(project)
OCPU Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The actual number of OCPUs allocated by the service during the selected interval of time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
exadb_pluggabledatabase/parses
GA
(project)
Parse Count (Total)
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of hard and soft parses during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/parses_by_type
GA
(project)
Parses By Type
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of hard or soft parses per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
parse_type :
Parse type.
exadb_pluggabledatabase/problematic_scheduled_dbms_jobs
GA
(project)
Problematic Scheduled DBMS Jobs
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The problematic scheduled database jobs count. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
type :
Type of the problematic scheduled dbms jobs.
exadb_pluggabledatabase/process_limit_utilization
GA
(project)
Process Limit Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The process limit utilization.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/processes
GA
(project)
Process Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The database processes count.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/reclaimable_fra_space
GA
(project)
Flash Recovery Area Reclaimable Space
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The flash recovery area reclaimable space.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/recoverable_fra
GA
(project)
Reclaimable Fast Recovery Area
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The reclaimable fast recovery area.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/redo_size
GA
(project)
Redo Generated
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average amount of redo generated, in MB per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/session_limit_utilization
GA
(project)
Session Limit Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The session limit utilization.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/sessions
GA
(project)
Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of sessions in the database.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/storage_allocated
GA
(project)
Allocated Storage Space
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The maximum amount of space allocated by tablespace during the interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/storage_allocated_by_tablespace
GA
(project)
Allocated Storage Space By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The maximum amount of space allocated by tablespace during the interval. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/storage_used
GA
(project)
Storage Space Used
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The maximum amount of space used during the interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/storage_used_by_tablespace
GA
(project)
Storage Space Used By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The maximum amount of space used by tablespace during the interval. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The percentage of provisioned storage capacity currently in use. Represents the total allocated space for all tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/storage_utilization_by_tablespace
GA
(project)
Storage Space Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The percentage of the space utilized, by tablespace. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The combined number of user commits and user rollbacks during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/transactions_by_status
GA
(project)
Transactions By Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The number of committed or rolled back transactions per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
transaction_status :
Transaction status.
exadb_pluggabledatabase/unusable_indexes
GA
(project)
Unusable Indexes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
Unusable indexes count in database schema. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
schema_name :
Schema name.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/usable_fra
GA
(project)
Usable Fast Recovery Area
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbPluggableDatabase
The useable fast recovery area.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/used_fra_space
GA
(project)
Flash Recovery Area Usage
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/ExadbPluggableDatabase
The flash recovery area space usage.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbPluggableDatabase
The combined number of logons, parses, and execute calls during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
exadb_pluggabledatabase/wait_time
GA
(project)
Wait Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/ExadbPluggableDatabase
The average rate of accumulation of non-idle wait time by foreground sessions in the database instance over the time interval. The wait time component of Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of ExadbVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
wait_class :
Wait class.
exadb_vm_cluster/asm_diskgroup_utilization
GA
(project)
ASM Diskgroup Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbVmCluster
Percentage of usable space used in a Disk Group. Usable space is the space available for growth. DATA disk group stores our Oracle database files. RECO disk group contains database files for recovery such as archives and flashback logs.
deployment_type :
Deployment type of ExadbVmCluster node.
diskgroup_name :
Disk group name.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbVmCluster
Percent CPU utilization of ExadbVmCluster.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/ecpus_enabled
GA
(project)
Ecpus Enabled
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbVmCluster
The actual number of ECPUs enabled by the service during the selected interval. This metric is available if the VM cluster uses the ECPU compute model.
deployment_type :
Deployment type of ExadbVmCluster node.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/exascale_vault_utilization
GA
(project)
Exascale Vault Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbVmCluster
Percent Exascale Vault Utilization.
deployment_type :
Deployment type of ExadbVmCluster node.
vault_name :
Vault name.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/filesystem_utilization
GA
(project)
Filesystem Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbVmCluster
Percent utilization of provisioned filesystem.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
filesystem_name :
File system name.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/load_average
GA
(project)
Load Average
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbVmCluster
System load average over 5 minutes.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/memory_utilization
GA
(project)
Memory Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbVmCluster
Percentage of memory available for starting new applications, without swapping.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/node_status
GA
(project)
Node Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbVmCluster
Indicates whether the host is reachable.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/ocpus_allocated
GA
(project)
OCPU Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/ExadbVmCluster
The number of OCPUs allocated.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
exadb_vm_cluster/swap_utilization
GA
(project)
Swap Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/ExadbVmCluster
Percent utilization of total swap space.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of ExadbVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
filesystem_utilization
GA
(project)
Filesystem Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/CloudVmCluster
Percent utilization of provisioned filesystem.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
filesystem_name :
File system name.
resource_id :
OCID, Oracle cloud Resource identifier.
load_average
GA
(project)
Load Average
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/CloudVmCluster
System load average over 5 minutes.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
memory_utilization
GA
(project)
Memory Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/CloudVmCluster
Percentage of memory available for starting new applications, without swapping.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
node_status
GA
(project)
Node Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/CloudVmCluster
Indicates whether the host is reachable.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
ocpus_allocated
GA
(project)
OCPU Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/CloudVmCluster
The number of OCPUs allocated.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
pluggabledatabase/allocated_storage_utilization_by_tablespace
GA
(project)
Allocated Space Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The percentage of space used by tablespace, out of all allocated. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
pluggabledatabase/avg_gc_current_block_receive_time
GA
(project)
Average GC Current Block Receive Time
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/PluggableDatabase
The average global cache current blocks receive time. Statistic reports the mean value. For Real Application Cluster (RAC) databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/avg_gccr_block_receive_time
GA
(project)
Average GC CR Block Receive Time
GAUGE , DOUBLE , ms
oracledatabase.googleapis.com/PluggableDatabase
The average global cache CR (consistent-read) block receive time. For RAC / cluster databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/block_changes
GA
(project)
DB Block Changes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The average number of blocks changed per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/blocking_sessions
GA
(project)
Blocking Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
Current blocking sessions. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/cpu_time
GA
(project)
CPU Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/PluggableDatabase
The average rate of accumulation of CPU time by foreground sessions in the database instance over the time interval. The CPU time component of Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/cpu_utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The CPU utilization expressed as a percentage, aggregated across all consumer groups. The utilization percentage is reported with respect to the number of CPUs the database is allowed to use, which is two times the number of OCPUs.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/cpus
GA
(project)
CPU Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of CPUs during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/current_logons
GA
(project)
Current Logons
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of successful logons during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/db_mgmt_job_executions
GA
(project)
Job Executions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of SQL job executions on a single managed database or a database group, and their status.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
managed_database_id :
Managed database identifier.
managed_database_group_id :
Managed database group identifier.
job_id :
The identifier of the job.
status :
Status of the job run.
resource_type :
Type of the database resource.
pluggabledatabase/db_time
GA
(project)
DB Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/PluggableDatabase
The average rate of accumulation of database time (CPU + Wait) by foreground sessions in the database instance over the time interval. Also known as Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/executions
GA
(project)
Execute Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of user and recursive calls that executed SQL statements during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/fra_space_limit
GA
(project)
Flash Recovery Area Limit
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The flash recovery area space limit. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/fra_utilization
GA
(project)
Flash Recovery Area Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The flash recovery area utilization. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/gc_current_blocks_received
GA
(project)
GC Current Blocks Received
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
Represents global cache current blocks received per second. Statistic reports the mean value. For Real Application Cluster (RAC) databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/gccr_blocks_received
GA
(project)
GC CR Blocks Received
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The global cache CR (consistent-read) blocks received per second. For RAC / cluster databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/interconnect_traffic
GA
(project)
Average Interconnect Traffic
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/PluggableDatabase
The average internode data transfer rate. For RAC / cluster databases only.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/invalid_objects
GA
(project)
Invalid Objects
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
Invalid database objects count. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/io_throughput
GA
(project)
IO Throughput
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/PluggableDatabase
The average throughput in MB per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
io_type :
Type of IO.
pluggabledatabase/iops
GA
(project)
IOPS
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The average number of input-output operations per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
io_type :
Type of IO.
pluggabledatabase/logical_blocks_read
GA
(project)
Logical Reads
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The average number of blocks read from SGA/Memory (buffer cache) per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/max_tablespace_size
GA
(project)
Max Tablespace Size
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The maximum possible tablespace size. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
pluggabledatabase/memory_usage
GA
(project)
Memory Usage
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/PluggableDatabase
Memory pool total size in MB.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
memory_type :
Type of memory.
memory_pool :
Memory pool.
resource_type :
Type of the database resource.
pluggabledatabase/monitoring_status
GA
(project)
Monitoring Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The monitoring status of the resource. If a metric collection fails, error information is captured in this metric.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
collection_name :
Collection name.
resource_type :
Type of the database resource.
error_severity :
Severity of the error.
error_code :
Error code.
pluggabledatabase/non_reclaimable_fra
GA
(project)
Non Reclaimable Fast Recovery Area
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The Non-reclaimable fast recovery area. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/ocpus_allocated
GA
(project)
OCPU Allocated
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The actual number of OCPUs allocated by the service during the selected interval of time.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
pluggabledatabase/parses
GA
(project)
Parse Count (Total)
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of hard and soft parses during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/parses_by_type
GA
(project)
Parses By Type
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of hard or soft parses per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
parse_type :
Parse type.
pluggabledatabase/problematic_scheduled_dbms_jobs
GA
(project)
Problematic Scheduled DBMS Jobs
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The problematic scheduled database jobs count. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
type :
Type of the problematic scheduled dbms jobs.
pluggabledatabase/process_limit_utilization
GA
(project)
Process Limit Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The process limit utilization. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/processes
GA
(project)
Process Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The database processes count. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/reclaimable_fra_space
GA
(project)
Flash Recovery Area Reclaimable Space
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The flash recovery area reclaimable space. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/recoverable_fra
GA
(project)
Reclaimable Fast Recovery Area
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The reclaimable fast recovery area. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/redo_size
GA
(project)
Redo Generated
GAUGE , DOUBLE , MBy
oracledatabase.googleapis.com/PluggableDatabase
The average amount of redo generated, in MB per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/session_limit_utilization
GA
(project)
Session Limit Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The session limit utilization. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/sessions
GA
(project)
Sessions
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of sessions in the database.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/storage_allocated
GA
(project)
Allocated Storage Space
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The maximum amount of space allocated by tablespace during the interval. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/storage_allocated_by_tablespace
GA
(project)
Allocated Storage Space By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The maximum amount of space allocated by tablespace during the interval. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
pluggabledatabase/storage_used
GA
(project)
Storage Space Used
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The maximum amount of space used during the interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/storage_used_by_tablespace
GA
(project)
Storage Space Used By Tablespace
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The maximum amount of space used by tablespace during the interval. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
pluggabledatabase/storage_utilization
GA
(project)
Storage Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The percentage of provisioned storage capacity currently in use. Represents the total allocated space for all tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/storage_utilization_by_tablespace
GA
(project)
Storage Space Utilization By Tablespace
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The percentage of the space utilized, by tablespace. For container databases, this metric provides data for root container tablespaces.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
tablespace_name :
Name of the tablespace.
tablespace_contents :
Tablespace contents.
resource_type :
Type of the database resource.
pluggabledatabase/transactions
GA
(project)
Transaction Count
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The combined number of user commits and user rollbacks during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/transactions_by_status
GA
(project)
Transactions By Status
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The number of committed or rolled back transactions per second.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
transaction_status :
Transaction status.
pluggabledatabase/unusable_indexes
GA
(project)
Unusable Indexes
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
Unusable indexes count in database schema. Not applicable for container databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
schema_name :
Schema name.
resource_type :
Type of the database resource.
pluggabledatabase/usable_fra
GA
(project)
Usable Fast Recovery Area
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/PluggableDatabase
The useable fast recovery area. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/used_fra_space
GA
(project)
Flash Recovery Area Usage
GAUGE , DOUBLE , GBy
oracledatabase.googleapis.com/PluggableDatabase
The flash recovery area space usage. Not applicable for pluggable databases.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
resource_type :
Type of the database resource.
pluggabledatabase/user_calls
GA
(project)
User Calls
GAUGE , DOUBLE , 1
oracledatabase.googleapis.com/PluggableDatabase
The combined number of logons, parses, and execute calls during the selected interval.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
pluggabledatabase/wait_time
GA
(project)
Wait Time
GAUGE , DOUBLE , s
oracledatabase.googleapis.com/PluggableDatabase
The average rate of accumulation of non-idle wait time by foreground sessions in the database instance over the time interval. The wait time component of Average Active Sessions.
resource_id :
OCID, Oracle cloud Resource identifier.
deployment_type :
Deployment type of CloudVmCluster node.
instance_number :
Instance number.
instance_name :
Name of the instance.
hostname :
Hostname of VM cluster node.
resource_type :
Type of the database resource.
wait_class :
Wait class.
swap_utilization
GA
(project)
Swap Utilization
GAUGE , DOUBLE , %
oracledatabase.googleapis.com/CloudVmCluster
Percent utilization of total swap space.
hostname :
Hostname of VM cluster node.
deployment_type :
Deployment type of CloudVmCluster node.
dbnode_resource_id :
Resource identifier of the dbnode.
resource_id :
OCID, Oracle cloud Resource identifier.
osconfig
Metrics from VM Manager .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with osconfig.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
patch/job/instance_state
GA
(project)
VM instance patch state
GAUGE , INT64 , 1
osconfig.googleapis.com/PatchJob
The number of VM instances that have patch jobs in a specific state.
state :
The state of a patch job that is running on a VM instance. The following states are available: "PENDING", "STARTED", "APPLYING_PATCHES", "SUCCEEDED", "FAILED".
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
