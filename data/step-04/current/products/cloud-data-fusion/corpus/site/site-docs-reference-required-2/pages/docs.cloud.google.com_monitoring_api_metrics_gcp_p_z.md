---
title: "Google Cloud metrics: P through Z \_|\_ Cloud Monitoring \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_p_z
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_p_z
  title: "Google Cloud metrics: P through Z \_|\_ Cloud Monitoring \_|\_ Google Cloud\
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
Google Cloud metrics: P through Z
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the metric types defined by
Google Cloud services when the service name begins with the
letter p through z . For example, this page lists all metric types whose
prefix is storage.googleapis.com . For information about other
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
parallelstore
Metrics from Parallelstore .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with parallelstore.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
instance/available_capacity_bytes
BETA
(project)
Available capacity in bytes
GAUGE , INT64 , By
parallelstore.googleapis.com/Instance
Available storage in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/export_data_bytes_count
BETA
(project)
Export Data Bytes Count
DELTA , INT64 , By
parallelstore.googleapis.com/Instance
Number of bytes exported.
instance/export_data_objects_count
BETA
(project)
Export Data Objects Count
DELTA , INT64 , 1
parallelstore.googleapis.com/Instance
Number of objects exported.
instance/import_data_bytes_count
BETA
(project)
Import Data Bytes Count
DELTA , INT64 , By
parallelstore.googleapis.com/Instance
Number of bytes imported.
instance/import_data_objects_count
BETA
(project)
Import Data Objects Count
DELTA , INT64 , 1
parallelstore.googleapis.com/Instance
Number of objects imported.
instance/instance_failure
BETA
(project)
Parallelstore Instance failure
GAUGE , BOOL ,
parallelstore.googleapis.com/Instance
When an instance is in a FAILED state, this metric will report True, otherwise False. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
instance/read_bytes_count
BETA
(project)
Read byte count
DELTA , INT64 , By
parallelstore.googleapis.com/Instance
Number of bytes read. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/read_ops_count
BETA
(project)
Read operation count
DELTA , INT64 , {operation}
parallelstore.googleapis.com/Instance
The number of read/fetch RPC processed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/total_capacity_bytes
BETA
(project)
Total capacity (bytes)
GAUGE , INT64 , By
parallelstore.googleapis.com/Instance
The total amount of usable storage in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/transferred_byte_count
BETA
(project)
(Deprecated) Transferred byte count
DELTA , INT64 , By
parallelstore.googleapis.com/Instance
(Deprecated) Number of bytes read or written. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operation_type :
Operation type, one of [fetch, update].
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/used_capacity_bytes
BETA
(project)
Used capacity in bytes
GAUGE , INT64 , By
parallelstore.googleapis.com/Instance
Used storage in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/write_bytes_count
BETA
(project)
Write byte count
DELTA , INT64 , By
parallelstore.googleapis.com/Instance
Number of bytes written. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
instance/write_ops_count
BETA
(project)
Write operation count
DELTA , INT64 , {operation}
parallelstore.googleapis.com/Instance
The number of write/update RPC processed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
rank :
Server ID within the System.
target :
The ID of the DAOS target on the server.
privateca
Metrics from Certificate Authority Service .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with privateca.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
ca/cert/ca_cert_creation
GA
(project)
CA certificate creation count
DELTA , INT64 , 1
privateca.googleapis.com/CertificateAuthority
The number of certificates issued by a CA with CA:TRUE. Sampled every 60 seconds.
ca/cert/create_count
GA
(project)
Certificate creation count
DELTA , INT64 , 1
privateca.googleapis.com/CertificateAuthority
The number of certificates issued by a CA. Sampled every 60 seconds.
ca/cert/create_failure_count
GA
(project)
Certificate creation CA policy error count
DELTA , INT64 , 1
privateca.googleapis.com/CertificateAuthority
The number of certificate creation failures. Sampled every 60 seconds.
reason :
The failure reason, such as VALIDATION or POLICY.
error_detail :
The detailed reason that caused the failure.
ca/cert/create_request_count
GA
(project)
Certificate creation request count
DELTA , INT64 , 1
privateca.googleapis.com/CertificateAuthority
The number of certificate creation requests per CA. Sampled every 60 seconds.
ca/cert_chain_expiration
GA
(project)
CA certificate chain expiration
GAUGE , INT64 , s
privateca.googleapis.com/CertificateAuthority
Time (in seconds) until each CA certificate parent expires. Sampled every 3600 seconds.
cert_subject_key_id :
Subject key ID (SKID) of the CA certificate.
ca/cert_expiration
GA
(project)
CA certificate expiration
GAUGE , INT64 , s
privateca.googleapis.com/CertificateAuthority
Time (in seconds) until the CA certificate expires. Sampled every 3600 seconds.
ca/cert_revoked
GA
(project)
CA revocation status
GAUGE , BOOL ,
privateca.googleapis.com/CertificateAuthority
The CA certificate has been revoked. Value is true when revoked. Sampled every 3600 seconds.
status :
REVOKED when the value is true. When false, possible values are NOT_REVOKED, or REVOCATION_STATUS_UNKNOWN if the CRL is inaccessible.
ca/resource_state
GA
(project)
CA resource state
GAUGE , BOOL ,
privateca.googleapis.com/CertificateAuthority
State of the certificate authority. Value is true when enabled, false otherwise. Sampled every 3600 seconds.
state :
State of CA, such as "ENABLED" or "DISABLED".
gcs/bucket_issue
GA
(project)
Cloud Storage bucket issue
GAUGE , BOOL ,
privateca.googleapis.com/CertificateAuthority
Errors for Cloud Storage buckets. Value is false when OK, true when there are issues. Sampled every 3600 seconds.
status :
Status of the Storage bucket, such as "OK", "PERMISSION_DENIED" or "DELETED".
kms/key_issue
GA
(project)
Cloud KMS key issue
GAUGE , BOOL ,
privateca.googleapis.com/CertificateAuthority
Errors for Cloud KMS signing keys. Value is false when OK, true when there are issues. Sampled every 3600 seconds.
status :
Status of the KMS key, such as "OK", "PERMISSION_DENIED" or "DESTROYED".
pubsub
Metrics from Pub/Sub . For more information, see Pub/Sub monitoring .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with pubsub.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
snapshot/backlog_bytes
GA
(project)
Snapshot backlog bytes
GAUGE , INT64 , By
pubsub_snapshot
Total byte size of the messages retained in a snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
snapshot/backlog_bytes_by_region
GA
(project)
Snapshot backlog bytes by region
GAUGE , INT64 , By
pubsub_snapshot
Total byte size of the messages retained in a snapshot, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
snapshot/config_updates_count
GA
(project)
Snapshot configuration operations
DELTA , INT64 , 1
pubsub_snapshot
Cumulative count of configuration operations, grouped by operation type and result. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
operation_type :
Type of operation performed.
snapshot/num_messages
GA
(project)
Snapshot messages
GAUGE , INT64 , 1
pubsub_snapshot
Number of messages retained in a snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
snapshot/num_messages_by_region
GA
(project)
Snapshot messages by region
GAUGE , INT64 , 1
pubsub_snapshot
Number of messages retained in a snapshot, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
snapshot/oldest_message_age
GA
(project)
Oldest snapshot message age
GAUGE , INT64 , s
pubsub_snapshot
Age (in seconds) of the oldest message retained in a snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
snapshot/oldest_message_age_by_region
GA
(project)
Oldest snapshot message age by region
GAUGE , INT64 , s
pubsub_snapshot
Age (in seconds) of the oldest message retained in a snapshot, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
subscription/ack_latencies
GA
(project)
Ack latency
DELTA , DISTRIBUTION , ms
pubsub_subscription
Distribution of ack latencies in milliseconds. The ack latency is the time between when Cloud Pub/Sub sends a message to a subscriber client and when Cloud Pub/Sub receives an Acknowledge request for that message. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
delivery_type :
Delivery mechanism: push, pull or streaming pull.
subscription/ack_message_count
GA
(project)
Ack message count
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of messages acknowledged by Acknowledge requests, grouped by delivery type. Dead-lettered messages may show up as pull acks. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
delivery_type :
Delivery mechanism: push, pull, streaming pull, or filter.
subscription/backlog_bytes
GA
(project)
Backlog size
GAUGE , INT64 , By
pubsub_subscription
Total byte size of the unacknowledged messages (a.k.a. backlog messages) in a subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/billable_bytes_by_region
GA
(project)
Billable bytes by region
GAUGE , INT64 , By
pubsub_subscription
Total byte size of the billable messages in a subscription, broken down by Cloud region and type. Please refer to https://cloud.google.com/pubsub/pricing#storage_costs to understand the pricing for retaining unacknowledged messages in subscriptions for more than 24 hours. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
type :
The type of billable backlog (unacked messages or retained acked messages).
subscription/byte_cost
GA
(project)
Subscription byte cost
DELTA , INT64 , By
pubsub_subscription
Cumulative cost of operations, measured in bytes. This is used to measure quota utilization. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
operation_type :
Type of operation performed.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/config_updates_count
GA
(project)
Subscription configuration operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of configuration operations for each subscription, grouped by operation type and result. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
operation_type :
Type of operation performed.
subscription/dead_letter_message_count
GA
(project)
Dead letter message count
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of messages published to dead letter topic, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/delivery_latency_health_score
GA
(project)
Delivery latency health score
GAUGE , BOOL , 1
pubsub_subscription
A score that measures the health of a subscription over a 10 minute rolling window. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
criteria :
Criteria of the health score. Possible values are ack_latency, expired_ack_deadlines, nack_requests, seek_requests, and utilization.
subscription/exactly_once_warning_count
GA
(project)
Exactly once delivery warning
DELTA , INT64 , 1
pubsub_subscription
Count of instances (acks and modacks that may have failed) that may lead to message redeliveries. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
delivery_type :
Delivery mechanism: push, pull or streaming pull.
reason :
Cause of the possible redelivery.
operation_type :
Type of operation performed. One of [ack, modack].
subscription/expired_ack_deadlines_count
GA
(project)
Expired ack deadlines count
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of messages whose ack deadline expired while the message was outstanding to a subscriber client. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
delivery_type :
Delivery mechanism: push, pull or streaming pull.
subscription/export_push_subscription_details
GA
(project)
Export push subscription details
GAUGE , INT64 , 1
pubsub_subscription
Type and state of the export push subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
subscription_state :
State of the export push subscription.
subscription_type :
Export push subscription type.
subscription/message_transform_latencies
GA
(project)
Subscription message transform latency
DELTA , DISTRIBUTION , ms
pubsub_subscription
Distribution of subscription message transform latencies in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
String representation of a status code such as 'ok', 'invalid_argument', or 'unavailable'.
filtered :
(BOOL)
Whether or not the message transform resulted in a filtered message.
subscription/mod_ack_deadline_message_count
GA
(project)
Mod ack deadline message count
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of messages whose deadline was updated by ModifyAckDeadline requests, grouped by delivery type. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
delivery_type :
Delivery mechanism: push, pull or streaming pull.
subscription/mod_ack_deadline_message_operation_count
DEPRECATED
(project)
ModifyAckDeadline message operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of ModifyAckDeadline message operations, grouped by result. This metric is deprecated. Use subscription/mod_ack_deadline_request_count instead. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/mod_ack_deadline_request_count
GA
(project)
ModifyAckDeadline requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of ModifyAckDeadline requests, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/mod_ack_latencies
GA
(project)
ModAck latency
DELTA , DISTRIBUTION , ms
pubsub_subscription
Distribution of ModAck latencies. For each message delivery attempt, the ModAck latency is the duration between when the CPS service delivers the message to a subscriber client and when the CPS service receives a ModAck request for that message (note that this means this metric may be recorded multiple times per delivery attempt). If this metric is growing, it indicates that the subscriber is repeatedly extending the acknowledgement deadline for a message (i.e., it is holding on to that message). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
delivery_type :
Delivery mechanism, one of [push, pull, streaming pull].
subscription/nack_requests
GA
(project)
Nack requests
GAUGE , INT64 , 1
pubsub_subscription
Cumulative count of messages that were nacked. One message nacked multiple times will be counted multiple times. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
delivery_type :
Delivery mechanism: push, pull or streaming pull.
subscription/num_outstanding_messages
GA
(project)
Outstanding push messages
GAUGE , INT64 , 1
pubsub_subscription
Number of messages delivered to a subscription's push endpoint, but not yet acknowledged. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
subscription/num_retained_acked_messages
GA
(project)
Retained acked messages
GAUGE , INT64 , 1
pubsub_subscription
Number of acknowledged messages retained in a subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/num_retained_acked_messages_by_region
GA
(project)
Retained acked messages by region
GAUGE , INT64 , 1
pubsub_subscription
Number of acknowledged messages retained in a subscription, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
subscription/num_unacked_messages_by_region
GA
(project)
Unacked messages by region
GAUGE , INT64 , 1
pubsub_subscription
Number of unacknowledged messages in a subscription, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
subscription/num_undelivered_messages
GA
(project)
Unacked messages
GAUGE , INT64 , 1
pubsub_subscription
Number of unacknowledged messages (a.k.a. backlog messages) in a subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/oldest_retained_acked_message_age
GA
(project)
Oldest retained acked message age
GAUGE , INT64 , s
pubsub_subscription
Age (in seconds) of the oldest acknowledged message retained in a subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/oldest_retained_acked_message_age_by_region
GA
(project)
Oldest retained acked message age by region
GAUGE , INT64 , s
pubsub_subscription
Age (in seconds) of the oldest acknowledged message retained in a subscription, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
subscription/oldest_unacked_message_age
GA
(project)
Oldest unacked message age
GAUGE , INT64 , s
pubsub_subscription
Age (in seconds) of the oldest unacknowledged message (a.k.a. backlog message) in a subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/oldest_unacked_message_age_by_region
GA
(project)
Oldest unacked message age by region
GAUGE , INT64 , s
pubsub_subscription
Age (in seconds) of the oldest unacknowledged message in a subscription, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
subscription/open_streaming_pulls
GA
(project)
Number of open streaming pulls
GAUGE , INT64 , 1
pubsub_subscription
Number of open StreamingPull streams per subscription, grouped by status. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
Status of the stream. For example, 'ok', 'suspended_subscriber_quota_exceeded' when subscriber throughput quota limits are exceeded, 'suspended_client_flow_controlled' when flow control is initiated by the client, 'suspended_max_outstanding_bytes_exceeded' when the maximum number of outstanding bytes is exceeded, or 'suspended_max_outstanding_messages_exceeded' when the maximum number of outstanding messages is exceeded.
subscription/pull_ack_message_operation_count
DEPRECATED
(project)
Acknowledge message operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of acknowledge message operations, grouped by result. This metric is deprecated. Use subscription/pull_ack_request_count instead. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/pull_ack_request_count
GA
(project)
Acknowledge requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of acknowledge requests, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/pull_message_operation_count
DEPRECATED
(project)
Pull operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of pull message operations, grouped by result. This metric is deprecated. Use subscription/pull_request_count instead. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/pull_request_count
GA
(project)
Pull requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of pull requests, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/push_request_count
GA
(project)
Push requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of push attempts, grouped by result. Unlike pulls, the push server implementation does not batch user messages. So each request only contains one user message. The push server retries on errors, so a given user message can appear multiple times. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_class :
A classification group for the response code. It can be one of ['ack', 'deadline_exceeded', 'internal', 'invalid', 'remote_server_4xx', 'remote_server_5xx', 'unreachable'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
delivery_type :
Push delivery mechanism.
subscription/push_request_latencies
GA
(project)
Push latency
DELTA , DISTRIBUTION , us
pubsub_subscription
Distribution of push request latencies (in microseconds), grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
delivery_type :
Push delivery mechanism.
subscription/retained_acked_bytes
GA
(project)
Retained acked bytes
GAUGE , INT64 , By
pubsub_subscription
Total byte size of the acknowledged messages retained in a subscription. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/retained_acked_bytes_by_region
GA
(project)
Retained acked bytes by region
GAUGE , INT64 , By
pubsub_subscription
Total byte size of the acknowledged messages retained in a subscription, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
subscription/seek_request_count
GA
(project)
Seek requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of seek attempts, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
subscription/sent_message_count
GA
(project)
Sent message count
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of messages sent by Cloud Pub/Sub to subscriber clients, grouped by delivery type. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
delivery_type :
Delivery mechanism: push, pull or streaming pull.
subscription/streaming_pull_ack_message_operation_count
DEPRECATED
(project)
StreamingPull Acknowledge message operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of StreamingPull acknowledge message operations, grouped by result. This metric is deprecated. Use subscription/streaming_pull_ack_request_count instead. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'unavailable').
subscription/streaming_pull_ack_request_count
GA
(project)
StreamingPull Acknowledge requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of streaming pull requests with non-empty acknowledge ids, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'unavailable').
subscription/streaming_pull_message_operation_count
DEPRECATED
(project)
StreamingPull message operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of streaming pull message operations, grouped by result. This metric is deprecated. Use subscription/streaming_pull_response_count instead. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'unavailable').
subscription/streaming_pull_mod_ack_deadline_message_operation_count
DEPRECATED
(project)
StreamingPull ModifyAckDeadline message operations
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of StreamingPull ModifyAckDeadline operations, grouped by result. This metric is deprecated. Use subscription/streaming_pull_mod_ack_deadline_request_count instead. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'unavailable').
subscription/streaming_pull_mod_ack_deadline_request_count
GA
(project)
StreamingPull ModifyAckDeadline requests
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of streaming pull requests with non-empty ModifyAckDeadline fields, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'unavailable').
subscription/streaming_pull_response_count
GA
(project)
StreamingPull responses
DELTA , INT64 , 1
pubsub_subscription
Cumulative count of streaming pull responses, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'unavailable').
subscription/unacked_bytes_by_region
GA
(project)
Unacked bytes by region
GAUGE , INT64 , By
pubsub_subscription
Total byte size of the unacknowledged messages in a subscription, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
topic/byte_cost
GA
(project)
Topic byte cost
DELTA , INT64 , By
pubsub_topic
Cost of operations, measured in bytes. This is used to measure utilization for quotas. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
operation_type :
Type of operation performed.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
topic/config_updates_count
GA
(project)
Topic configuration operations
DELTA , INT64 , 1
pubsub_topic
Cumulative count of configuration operations, grouped by operation type and result. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
operation_type :
Type of operation performed.
topic/ingestion_byte_count
GA
(project)
Ingestion byte count
DELTA , INT64 , By
pubsub_topic
Byte count of ingested messages per ingestion source type and import partition (e.g. AWS Kinesis shard id). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
source_type :
Ingestion data source type.
source_name :
Ingestion data source name.
import_partition :
Import partition of the ingestion source, if applicable.
topic/ingestion_data_source_state
GA
(project)
Ingestion data source state
GAUGE , INT64 , 1
pubsub_topic
State of the ingestion data source per ingestion source type. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
source_type :
Ingestion data source type.
source_name :
Ingestion data source name.
state :
State of the ingestion source.
topic/ingestion_failure_count
GA
(project)
Ingestion failure count
DELTA , INT64 , 1
pubsub_topic
Number of errors encountered when ingesting data per ingestion source type, source name, import partition, and reason for error. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
source_type :
Ingestion data source type.
source_name :
Ingestion data source name.
import_partition :
Import partition of the ingestion source, if applicable.
reason :
Reason for ingestion failure.
topic/ingestion_message_count
GA
(project)
Ingestion message count
DELTA , INT64 , 1
pubsub_topic
Number of ingested messages per ingestion source type and import partition (e.g. AWS Kinesis shard id). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
source_type :
Ingestion data source type.
source_name :
Ingestion data source name.
import_partition :
Import partition of the ingestion source, if applicable.
topic/message_sizes
GA
(project)
Publish message size
DELTA , DISTRIBUTION , By
pubsub_topic
Distribution of publish message sizes (in bytes). Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
topic/message_transform_latencies
GA
(project)
Topic message transform latency
DELTA , DISTRIBUTION , ms
pubsub_topic
Distribution of topic message transform latencies in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
String representation of a status code such as 'ok', 'invalid_argument', or 'unavailable'.
filtered :
(BOOL)
Whether or not the message transform resulted in a filtered message.
topic/num_retained_acked_messages_by_region
GA
(project)
Retained acked messages by region
GAUGE , INT64 , 1
pubsub_topic
Number of acknowledged messages retained across all subscriptions and snapshots attached to the topic, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
topic/num_retained_messages
GA
(project)
Retained messages
GAUGE , INT64 , 1
pubsub_topic
Number of messages retained in a topic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/num_unacked_messages_by_region
GA
(project)
Unacked messages by region
GAUGE , INT64 , 1
pubsub_topic
Number of unacknowledged messages across all subscriptions and snapshots attached to a topic, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
topic/oldest_retained_acked_message_age_by_region
GA
(project)
Oldest retained acked message age by region
GAUGE , INT64 , s
pubsub_topic
Age (in seconds) of the oldest acknowledged message retained across all subscriptions and snapshots attached to a topic, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
topic/oldest_retained_message_age
GA
(project)
Oldest retained message age
GAUGE , INT64 , s
pubsub_topic
Age (in seconds) of the oldest message retained in a topic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/oldest_unacked_message_age_by_region
GA
(project)
Oldest unacked message age by region
GAUGE , INT64 , s
pubsub_topic
Age (in seconds) of the oldest unacknowledged message across all subscriptions and snapshots attached to a topic, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
topic/retained_acked_bytes_by_region
GA
(project)
Retained acked bytes by region
GAUGE , INT64 , By
pubsub_topic
Total byte size of the acknowledged messages retained across all subscriptions and snapshots attached to a topic, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
topic/retained_bytes
GA
(project)
Retained bytes
GAUGE , INT64 , By
pubsub_topic
Total byte size of the messages retained in a topic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/schema_validation_latencies
GA
(project)
Schema validation latency
DELTA , DISTRIBUTION , ms
pubsub_topic
Distribution of schema validation latencies in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
schema_name_with_revision_id :
The schema name with revision id such as 'my-schema@0a0b0c0d' - on success, or 'my-schema@unknown' - on failure).
status :
String representation of a status code such as 'ok', 'invalid_argument', or 'unavailable'.
topic/send_message_operation_count
DEPRECATED
(project)
Publish message operations
DELTA , INT64 , 1
pubsub_topic
Cumulative count of publish message operations, grouped by result. This metric is deprecated. Apply a count aggregator on topic/message_sizes instead. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
topic/send_request_count
GA
(project)
Publish requests
DELTA , INT64 , 1
pubsub_topic
Cumulative count of publish requests, grouped by result. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
response_class :
A classification group for the response code. It can be one of ['success', 'invalid', 'internal'].
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'success', 'not_found', 'unavailable').
topic/send_request_latencies
GA
(project)
Publish request latency
DELTA , DISTRIBUTION , us
pubsub_topic
Distribution of publish request latencies in microseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Operation response code string, derived as a string representation of a status code, for example, 'success', 'not_found', 'unavailable').
has_ordering :
(BOOL)
Whether or not the publish contained ordering keys.
schema_type :
The schema type associated with the topic, one of ['proto','avro', none]
topic/unacked_bytes_by_region
GA
(project)
Unacked bytes by region
GAUGE , INT64 , By
pubsub_topic
Total byte size of the unacknowledged messages across all subscriptions and snapshots attached to the topic, broken down by Cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
region :
The Cloud region in which messages are persisted.
pubsublite
Metrics from Pub/Sub Lite .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with pubsublite.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
reservation/throughput_capacity/limit
BETA
(project)
Reservation throughput capacity limit
GAUGE , INT64 , 1
pubsublite_reservation
The current configured throughput capacity of this reservation. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
reservation/throughput_capacity/usage
BETA
(project)
Reservation throughput capacity usage
DELTA , DOUBLE , 1
pubsublite_reservation
Usage of reservation throughput capacity by kind of usage. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
kind :
Usage kind, one of ["ZONAL_PUBLISH" - publishing to zonal topics; "ZONAL_SUBSCRIBE" - subscribing to zonal topics].
reservation/throughput_capacity/utilization
BETA
(project)
Reservation throughput capacity utilization ratio
GAUGE , DOUBLE , 10^2.%
pubsublite_reservation
The ratio of the rate of throughput capacity usage to available throughput capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
kind :
Usage kind, one of ["ZONAL_PUBLISH" - publishing to zonal topics; "ZONAL_SUBSCRIBE" - subscribing to zonal topics].
subscription/backlog_message_count
GA
(project)
Backlog message count
GAUGE , INT64 , 1
pubsublite_subscription_partition
Total number of the unacknowledged messages (a.k.a. backlog messages) for a subscription in a given topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/backlog_quota_bytes
GA
(project)
Backlog quota bytes
GAUGE , INT64 , By
pubsublite_subscription_partition
Total quota byte size of the unacknowledged messages (a.k.a. backlog messages) for a subscription in a given topic partition.. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/export_status
BETA
(project)
Subscription export status
GAUGE , BOOL ,
pubsublite_subscription_partition
The status of an export subscription in a given topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
Status of the export, such as "ACTIVE", "PAUSED", "NOT_FOUND" or "PERMISSION_DENIED".
subscription/flow_control_status
BETA
(project)
Subscription flow control
GAUGE , DOUBLE , 10^2.%
pubsublite_subscription_partition
Fraction of time spent in each flow control state. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
state :
Flow control state, one of ["NO_CLIENT_TOKENS" - indicates that the per-partition limit of outstanding bytes or messages has been reached; "NO_PARTITION_CAPACITY" - indicates that the per-partition subscribe throughput limit has been reached; "NO_RESERVATION_CAPACITY" - indicates that the per-reservation throughput limit has been reached; "NOT_FLOW_CONTROLLED" - indicates that the subscriber is not flow-controlled].
subscription/oldest_unacked_message_age
GA
(project)
Oldest unacked message age
GAUGE , INT64 , s
pubsublite_subscription_partition
Age (in seconds) of the oldest unacknowledged message retained for a subscription in a given topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
subscription/sent_message_count
GA
(project)
Subscription sent message count
DELTA , INT64 , 1
pubsublite_subscription_partition
Count of messages sent to subscribers for a subscription in a given topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
subscription/sent_quota_bytes
GA
(project)
Subscription sent quota bytes
DELTA , INT64 , By
pubsublite_subscription_partition
Quota byte size of messages sent to subscribers for a subscription in a given topic partition. See https://cloud.google.com/pubsub/lite/quotas#resource_quotas for quota byte calculation. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
subscription/sent_raw_bytes
GA
(project)
Subscription sent raw bytes
DELTA , INT64 , By
pubsublite_subscription_partition
Byte size of messages sent to subscribers for a subscription in a given topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
subscription/unexportable_message_count
BETA
(project)
Subscription unexportable message count
DELTA , INT64 , 1
pubsublite_subscription_partition
Count of messages that cannot be exported to the destination for an export subscription in a given topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
reason :
Reason why a message is unexportable, one of ["INCOMPATIBLE" - violates constraints of the export destination; "OVERSIZED" - exceeds size limits for the export destination].
topic/flow_control_status
BETA
(project)
Topic publish flow control
GAUGE , DOUBLE , 10^2.%
pubsublite_topic_partition
Fraction of time spent in each flow control state. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
state :
Flow control state, one of ["NO_PARTITION_CAPACITY" - indicates that the per-partition subscribe throughput limit has been reached; "NO_RESERVATION_CAPACITY" - indicates that the per-reservation throughput limit has been reached; "NOT_FLOW_CONTROLLED" - indicates that the subscriber is not flow-controlled].
topic/oldest_retained_message_age
GA
(project)
Oldest retained message age
GAUGE , INT64 , s
pubsublite_topic_partition
Age (in seconds) of the oldest message retained in a topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/publish_message_count
GA
(project)
Publish message count
DELTA , INT64 , 1
pubsublite_topic_partition
Count of messages published to a topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
topic/publish_quota_byte_limit
GA
(project)
Publish quota byte limit
GAUGE , INT64 , By
pubsublite_topic_partition
The maximum number of message bytes that can be published per second per topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/publish_quota_bytes
GA
(project)
Publish quota bytes
DELTA , INT64 , By
pubsublite_topic_partition
Quota byte size of messages published to a topic partition. See https://cloud.google.com/pubsub/lite/quotas#resource_quotas for quota byte calculation. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
topic/publish_quota_utilization
GA
(project)
Publish quota utilization ratio
GAUGE , DOUBLE , 10^2.%
pubsublite_topic_partition
The ratio of the rate of message quota bytes that are being published to a partition to the rate that can be published per topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
topic/publish_raw_bytes
GA
(project)
Publish raw bytes
DELTA , INT64 , By
pubsublite_topic_partition
Byte size of messages published to a topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
topic/publish_request_count
GA
(project)
Publish request count
DELTA , INT64 , 1
pubsublite_topic_partition
Count of publish requests sent to a topic partition, broken down by response code. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
Operation response code string, derived as a string representation of a status code (e.g., 'OK', 'NOT_FOUND', 'UNAVAILABLE').
topic/sent_quota_bytes
GA
(project)
Topic sent quota bytes
DELTA , INT64 , By
pubsublite_topic_partition
Quota byte size of messages sent to subscribers for a topic partition. See https://cloud.google.com/pubsub/lite/quotas#resource_quotas for quota byte calculation. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
topic/storage_quota_byte_limit
GA
(project)
Storage quota byte limit
GAUGE , INT64 , By
pubsublite_topic_partition
The quota byte limit for message storage in a topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/storage_quota_bytes
GA
(project)
Storage quota bytes
GAUGE , INT64 , By
pubsublite_topic_partition
The current quota bytes of messages stored in a topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/storage_quota_utilization
GA
(project)
Storage quota utilization ratio
GAUGE , DOUBLE , 10^2.%
pubsublite_topic_partition
The ratio of the number of message quota bytes that are stored in a partition to the provisioned bytes that can be stored per topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/subscribe_quota_byte_limit
GA
(project)
Subscribe quota byte limit
GAUGE , INT64 , By
pubsublite_topic_partition
The maximum number of message bytes that can be received by subscribers per second per topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
topic/subscribe_quota_utilization
GA
(project)
Subscribe quota utilization ratio
GAUGE , DOUBLE , 10^2.%
pubsublite_topic_partition
The ratio of the rate of message quota bytes that are sent to subscribers for a partition to the rate that can be received per topic partition. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
recaptchaenterprise
Metrics from reCAPTCHA .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with recaptchaenterprise.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
account_defender_assessment_count
BETA
(project)
Account Defender assessments
DELTA , INT64 , 1
recaptchaenterprise.googleapis.com/Key
Count of Account Defender assessments. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
label :
The Account Defender label returned in the assessment, one of ["profile_match"; "suspicious_login_activity"; "suspicious_account_creation"; "related_accounts_number_high"; "" - empty string when no label is returned in the assessment].
assessment_count
GA
(project)
Token assessments
DELTA , INT64 , 1
recaptchaenterprise.googleapis.com/Key
Total count of token assessments. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
token_status :
Token assessment outcome. "valid" for valid token assessments, otherwise an InvalidReason will be given. One of [valid, invalid_reason_unspecified, unknown_invalid_reason, malformed, expired, dupe, missing, browser_error, unexpected_action].
assessments
GA
(project)
Assessment request scores
DELTA , DISTRIBUTION , 1
recaptchaenterprise.googleapis.com/Key
Distribution of real-time assessment request scores for valid tokens. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
action :
Action name provided at token generation.
platform :
Client platform: "web", "android", or "ios".
challenge :
For CHECKBOX or INVISIBLE keys, "challenge" or "nocaptcha".
executes
GA
(project)
Execute request scores
DELTA , DISTRIBUTION , 1
recaptchaenterprise.googleapis.com/Key
Distribution of execute request scores. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
action :
Action name provided at token generation.
platform :
Client platform. Examples include: "firefox", "ios".
express_assessments
BETA
(project)
Express Assessment request scores
DELTA , DISTRIBUTION , 1
recaptchaenterprise.googleapis.com/Key
Distribution of real-time express assessment request scores. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
score_counts
DEPRECATED
(project)
Score counts
DELTA , DISTRIBUTION , 1
recaptchaenterprise.googleapis.com/Key
Distribution of scores associated with a Key. Deprecated. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
action :
Action name provided at token generation.
sms_toll_fraud_risks
BETA
(project)
SMS toll fraud risks
DELTA , DISTRIBUTION , 1
recaptchaenterprise.googleapis.com/Key
Distribution of SMS toll fraud risks. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
country_calling_code :
The ITU E.164 country calling code for the phone number.
solution_count
GA
(project)
Captcha solution results
DELTA , INT64 , 1
recaptchaenterprise.googleapis.com/Key
Counts of captcha solutions. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
challenge :
Challenge result: "pass", "fail", or "nocaptcha".
platform :
Client platform. Examples include: "firefox", "ios".
recommendationengine
Metrics from Recommendations .
Launch stages of these metrics:
EARLY_ACCESS
The "metric type" strings in this table must be prefixed
with recommendationengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
event_store/processed_event_count
EARLY_ACCESS
(project)
Recommendation Processed Event Count
DELTA , INT64 , 1
recommendationengine.googleapis.com/EventStore
The count of processed user event in given event store. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
event_type :
Event type, see https://cloud.google.com/recommendations-ai/docs/user-events#user_event_types.
status :
Status of event, should be joined or unjoined.
redis
Metrics from Memorystore for Redis .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with redis.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
clients/blocked
GA
(project)
Blocked Clients
GAUGE , INT64 , 1
redis_instance
Number of blocked clients. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
clients/connected
GA
(project)
Connected Clients
GAUGE , INT64 , 1
redis_instance
Number of client connections. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
cluster/backup/last_backup_duration
GA
(project)
Last backup duration
GAUGE , INT64 , ms
redis.googleapis.com/Cluster
The duration of the last backup operation as milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
cluster/backup/last_backup_size
GA
(project)
Last backup size
GAUGE , INT64 , By
redis.googleapis.com/Cluster
The size of the last backup in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
cluster/backup/last_backup_start_time
GA
(project)
Last backup start time
GAUGE , INT64 , s
redis.googleapis.com/Cluster
The start time of the last backup operation. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
cluster/backup/last_backup_status
GA
(project)
Last backup status
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The status of the last backup operation as 1/0 (success/failure). Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
backup_type :
The type of the backup, one of [ON_DEMAND, AUTOMATED].
cluster/clients/average_connected_clients
GA
(project)
Client connections - average
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Mean current number of client connections across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/clients/maximum_connected_clients
GA
(project)
Client connections - maximum
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Maximum current number of client connections across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/clients/total_connected_clients
GA
(project)
Client connections - total
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Current number of client connections to the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/commandstats/total_calls_count
GA
(project)
Commands count
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Count of Redis commands. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
cluster/commandstats/total_usec_count
GA
(project)
Commands time
DELTA , INT64 , us
redis.googleapis.com/Cluster
The total time consumed per command. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
cluster/cpu/average_utilization
GA
(project)
CPU utilization - average
GAUGE , DOUBLE , 10^2.%
redis.googleapis.com/Cluster
Mean CPU utilization across the cluster from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/cpu/maximum_utilization
GA
(project)
CPU utilization - maximum
GAUGE , DOUBLE , 10^2.%
redis.googleapis.com/Cluster
Maximum CPU utilization across the cluster from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/cross_cluster_replication/secondary_average_replication_offset_diff
GA
(project)
Cross cluster replication average offset diff
GAUGE , INT64 , By
redis.googleapis.com/Cluster
Average replication offset difference between primary shards and secondary shards. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
secondary_cluster_project_number :
Secondary cluster project number.
secondary_cluster_location :
Secondary cluster location.
secondary_cluster_id :
Secondary cluster Id.
secondary_cluster_uid :
Secondary cluster uid.
cluster/cross_cluster_replication/secondary_maximum_replication_offset_diff
GA
(project)
Cross cluster replication maximum offset diff
GAUGE , INT64 , By
redis.googleapis.com/Cluster
Maximum replication offset difference between primary shards and secondary shards. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
secondary_cluster_project_number :
Secondary cluster project number.
secondary_cluster_location :
Secondary cluster location.
secondary_cluster_id :
Secondary cluster Id.
secondary_cluster_uid :
Secondary cluster uid.
cluster/cross_cluster_replication/secondary_replication_links
GA
(project)
Cross cluster replication links
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Number of replication links between a primary cluster and a secondary cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
secondary_cluster_project_number :
Secondary cluster project number.
secondary_cluster_location :
Secondary cluster location.
secondary_cluster_id :
Secondary cluster Id.
secondary_cluster_uid :
Secondary cluster uid.
cluster/import/last_import_duration
GA
(project)
Last import duration
GAUGE , INT64 , ms
redis.googleapis.com/Cluster
The duration of the last import operation as milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
import_type :
The type of the import, one of [CREATE_IMPORT, LIVE_IMPORT].
import_source :
The source of the import, one of [MANAGED_BACKUP, GCS_SOURCE].
cluster/import/last_import_start_time
GA
(project)
Last import start time
GAUGE , INT64 , s
redis.googleapis.com/Cluster
The start time of the last import operation. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_string :
Status code description.
import_type :
The type of the import, one of [CREATE_IMPORT, LIVE_IMPORT].
import_source :
The source of the import, one of [MANAGED_BACKUP, GCS_SOURCE].
cluster/keyspace/total_keys
GA
(project)
Total keys
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Number of keys stored in the cluster instance. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/memory/average_utilization
GA
(project)
Memory utilization - average
GAUGE , DOUBLE , 10^2.%
redis.googleapis.com/Cluster
Mean memory utilization across the cluster from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/memory/maximum_utilization
GA
(project)
Memory utilization - maximum
GAUGE , DOUBLE , 10^2.%
redis.googleapis.com/Cluster
Maximum memory utilization across the cluster from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/memory/size
GA
(project)
Memory size
GAUGE , INT64 , By
redis.googleapis.com/Cluster
Memory size of the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/memory/total_used_memory
GA
(project)
Memory usage
GAUGE , INT64 , By
redis.googleapis.com/Cluster
Total memory usage of the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/node/clients/blocked_clients
GA
(project)
Blocked connections
GAUGE , INT64 , 1
redis.googleapis.com/ClusterNode
Number of client connections blocked by the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/clients/connected_clients
GA
(project)
Client connections
GAUGE , INT64 , 1
redis.googleapis.com/ClusterNode
Number of clients connected to the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/commandstats/calls_count
GA
(project)
Commands count
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Total number of calls for this command on the cluster node in one minute. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
cluster/node/commandstats/usec_count
GA
(project)
Commands time
DELTA , INT64 , us
redis.googleapis.com/ClusterNode
The total time consumed per command in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
command :
The command executed.
cluster/node/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
redis.googleapis.com/ClusterNode
CPU utilization for the cluster node from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
state :
CPU usage state, one of [sys, sys_children, sys_main_thread, user, user_children, user_main_thread]
cluster/node/cross_cluster_replication/follower_replication_offset_diff
GA
(project)
Cross cluster replication follower offset diff
GAUGE , INT64 , By
redis.googleapis.com/ClusterNode
Replication offset diff in bytes between a replicator node and its follower node, reported by the replicator node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
secondary_cluster_project_number :
Secondary cluster project number.
secondary_cluster_location :
Secondary cluster Id.
secondary_cluster_id :
Secondary cluster Id.
secondary_cluster_uid :
Secondary cluster uid.
follower_node_id :
Follower node Id.
cluster/node/cross_cluster_replication/role
GA
(project)
Cross cluster replication role
GAUGE , INT64 , 1
redis.googleapis.com/ClusterNode
Cross cluster replication role of the node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
ccr_role :
Cross cluster replication role, one of [replicator, follower].
cluster/node/json/documents_count
GA
(project)
JSON documents count
GAUGE , INT64 , 1
redis.googleapis.com/ClusterNode
Number of JSON documents in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/json/used_memory
GA
(project)
JSON memory usage
GAUGE , INT64 , By
redis.googleapis.com/ClusterNode
Memory consumed by JSON documents in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/keyspace/total_keys
GA
(project)
Total keys
GAUGE , INT64 , 1
redis.googleapis.com/ClusterNode
Number of keys stored in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/memory/usage
GA
(project)
Memory usage
GAUGE , INT64 , By
redis.googleapis.com/ClusterNode
Total memory usage of the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/memory/utilization
GA
(project)
Memory utilization
GAUGE , DOUBLE , 10^2.%
redis.googleapis.com/ClusterNode
Memory utilization within the cluster node from 0.0 to 1.0. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/aof_fsync_errors_count
GA
(project)
AOF fsync errors count
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of AOF fsync errors on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/aof_fsync_lag
GA
(project)
AOF fsync lag
GAUGE , INT64 , s
redis.googleapis.com/ClusterNode
AOF lag between memory and persistent store on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/aof_last_bgrewrite_status
GA
(project)
AOF last bgrewrite success
GAUGE , BOOL , 1
redis.googleapis.com/ClusterNode
Indicates the success of the last AOF bgrewrite operation on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_string :
Status code description.
cluster/node/persistence/aof_last_write_status
GA
(project)
AOF last write success
GAUGE , BOOL , 1
redis.googleapis.com/ClusterNode
Indicates the success of the last AOF write operation on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_string :
Status code description.
cluster/node/persistence/aof_rewrites_count
GA
(project)
AOF rewrites count
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
AOF rewrites count on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_code :
(INT64)
gRPC error code (e.g. 0=OK, 8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
cluster/node/persistence/auto_restore_count
GA
(project)
Auto restore count
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of restores from dumpfile on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_code :
(INT64)
gRPC error code (e.g. 0=OK, 13=INTERNAL)
status_string :
Status code description.
persistence_mode :
"AOF" or "RDB".
cluster/node/persistence/current_save_keys_total
GA
(project)
Keys in current save
GAUGE , INT64 , 1
redis.googleapis.com/ClusterNode
Number of keys at the beginning of the current save operation. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/rdb_bgsave_in_progress
GA
(project)
RDB BGSAVE in progress
GAUGE , BOOL , 1
redis.googleapis.com/ClusterNode
Indicates if a RDB BGSAVE is currently in progress on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/rdb_last_bgsave_status
GA
(project)
RDB last BGSAVE success
GAUGE , BOOL , 1
redis.googleapis.com/ClusterNode
Indicates the success of the last BGSAVE on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_string :
Status code description.
cluster/node/persistence/rdb_last_save_age
GA
(project)
RDB last save age
GAUGE , INT64 , s
redis.googleapis.com/ClusterNode
Measures the time in seconds, since the last successful snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/rdb_next_save_time_until
GA
(project)
Time until next RDB snapshot
GAUGE , INT64 , s
redis.googleapis.com/ClusterNode
Measures the time in seconds, remaining until the next snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/persistence/rdb_saves_count
GA
(project)
RDB saves count.
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of RDB saves in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
status_code :
(INT64)
gRPC error code (e.g. 0=OK, 8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
cluster/node/replication/offset
GA
(project)
Replication offset
GAUGE , INT64 , By
redis.googleapis.com/ClusterNode
Measures the replication offset bytes of the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/server/healthy
GA
(project)
Cluster node is healthy
GAUGE , BOOL , 1
redis.googleapis.com/ClusterNode
Indicates if Cluster Node is healthy and available. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/server/uptime
GA
(project)
Node uptime
GAUGE , INT64 , s
redis.googleapis.com/ClusterNode
Measures the uptime of the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/connections_received_count
GA
(project)
Client connections - received
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of total client connections created in the last one minute on the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/evicted_keys_count
GA
(project)
Evicted keys
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of evicted keys by the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/expired_keys_count
GA
(project)
Expired keys
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of key expiration events in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/keyspace_hits_count
GA
(project)
Keyspace hits
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of successful lookup of keys in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/keyspace_misses_count
GA
(project)
Keyspace misses
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Count of failed lookup of keys in the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/net_input_bytes_count
GA
(project)
Network bytes - incoming
DELTA , INT64 , By
redis.googleapis.com/ClusterNode
Count of incoming network bytes received by the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/net_output_bytes_count
GA
(project)
Network bytes - outgoing
DELTA , INT64 , By
redis.googleapis.com/ClusterNode
Count of outgoing network bytes sent from the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/node/stats/rejected_connections_count
GA
(project)
Client connections - rejected
DELTA , INT64 , 1
redis.googleapis.com/ClusterNode
Number of connections rejected because of maxclients limit by the cluster node. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/persistence/aof_fsync_lags
GA
(project)
AOF fsync lags.
GAUGE , DISTRIBUTION , s
redis.googleapis.com/Cluster
Distribution of AOF lag between memory and persistent store across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/persistence/aof_rewrite_count
GA
(project)
AOF rewrite count.
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Count of AOF rewrites across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_code :
(INT64)
gRPC error code (e.g. 0=OK,8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
cluster/persistence/rdb_last_success_ages
GA
(project)
RDB snapshot ages.
GAUGE , DISTRIBUTION , s
redis.googleapis.com/Cluster
Age of RDB snapshots across cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/persistence/rdb_saves_count
GA
(project)
RDB saves count.
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Count of RDB saves across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status_code :
(INT64)
gRPC error code (e.g. 0=OK,8=RESOURCE_EXHAUSTED, 13=INTERNAL)
status_string :
Status code description.
cluster/replication/average_ack_lag
GA
(project)
Replication acknowledge lag - average
GAUGE , DOUBLE , s
redis.googleapis.com/Cluster
Mean replication acknowledge lag (in seconds) of replica across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/replication/average_offset_diff
GA
(project)
Replication offset diff - average
GAUGE , INT64 , By
redis.googleapis.com/Cluster
Mean replication offset diff (in bytes) across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/replication/maximum_ack_lag
GA
(project)
Replication acknowledge lag - maximum
GAUGE , DOUBLE , s
redis.googleapis.com/Cluster
Maximum replication acknowledge lag (in seconds) of replica across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/replication/maximum_offset_diff
GA
(project)
Replication offset diff - maximum
GAUGE , INT64 , By
redis.googleapis.com/Cluster
Maximum replication offset diff (in bytes) across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/attributes
GA
(project)
Vector search attributes
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The number of attributes across all indexes for vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/average_used_memory_bytes
GA
(project)
Vector search average used memory
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The average per-node used memory for all search functionality, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/background_indexing_in_progress
GA
(project)
Vector search background indexing in progress
GAUGE , BOOL , 1
redis.googleapis.com/Cluster
Indicates if the background indexing is in progress across any index. When the metric value is true, background indexing is in progress in at least one index. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/indexed_keys
GA
(project)
Vector search indexed keys
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The number of keys indexed across all indexes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/indexes
GA
(project)
Vector search indexes
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The number of indexes created for searching for vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/maximum_used_memory_bytes
GA
(project)
Vector search maximum used memory
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The maximum per-node used memory for all search functionality, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/search/query_requests_count
GA
(project)
Vector search query request count
DELTA , INT64 , 1
redis.googleapis.com/Cluster
The number of query requests across all indexes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status :
Success or failure of the query request. Possible values: "success", "failure".
role :
The replication role, one of [primary, replica].
cluster/search/total_used_memory_bytes
GA
(project)
Vector search total used memory
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
The total used memory in bytes for all search functionality in all nodes, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/security/rotate_tls_cert_count
BETA
(project)
TLS certificate rotation count
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Count of TLS certificate rotations on the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
status :
The status of the TLS certificate rotation.
failure_reason :
The failure reason of the TLS certificate rotation.
rotation_trigger_source :
The trigger source of the TLS certificate rotation.
cluster/stats/average_evicted_keys
GA
(project)
Evicted keys - average
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Mean number of evicted keys due to memory capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/stats/average_expired_keys
GA
(project)
Expired keys - average
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Mean number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/stats/average_keyspace_hits
GA
(project)
Keyspace hits - average
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Mean number of successful lookup of keys across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/average_keyspace_misses
GA
(project)
Keyspace misses - average
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Mean number of failed lookup of keys across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/maximum_evicted_keys
GA
(project)
Evicted keys - maximum
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Maximum number of evicted keys due to memory capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/stats/maximum_expired_keys
GA
(project)
Expired keys - maximum
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Maximum number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/stats/maximum_keyspace_hits
GA
(project)
Keyspace hits - maximum
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Maximum number of successful lookup of keys across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/maximum_keyspace_misses
GA
(project)
Keyspace misses - maximum
GAUGE , INT64 , 1
redis.googleapis.com/Cluster
Maximum number of failed lookup of keys across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/total_connections_received_count
GA
(project)
Client connections - received
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Count of client connections created in the last one minute. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/total_evicted_keys_count
GA
(project)
Evicted keys - total
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Total number of evicted keys due to memory capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/stats/total_expired_keys_count
GA
(project)
Expired keys - total
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Total number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/stats/total_keyspace_hits_count
GA
(project)
Keyspace Hits - total
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Total number of successful lookup of keys across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/total_keyspace_misses_count
GA
(project)
Keyspace misses - total
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Total number of failed lookup of keys across the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/total_net_input_bytes_count
GA
(project)
Network bytes - incoming total
DELTA , INT64 , By
redis.googleapis.com/Cluster
Count of incoming network bytes received by the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/total_net_output_bytes_count
GA
(project)
Network bytes - outgoing total
DELTA , INT64 , By
redis.googleapis.com/Cluster
Count of outgoing network bytes sent from the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
cluster/stats/total_rejected_connections_count
GA
(project)
Client connections - rejected
DELTA , INT64 , 1
redis.googleapis.com/Cluster
Count of client connections rejected because of maxclients limit. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
role :
The replication role, one of [primary, replica].
commands/calls
GA
(project)
Calls
DELTA , INT64 , 1
redis_instance
Total number of calls for this command in one minute. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
cmd :
The command executed.
commands/total_time
GA
(project)
Total Time of Calls
DELTA , INT64 , us
redis_instance
The amount of time in microseconds that this command took in the last second. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
cmd :
The command executed.
commands/usec_per_call
GA
(project)
Time per Call
GAUGE , DOUBLE , 1
redis_instance
Average time per call over 1 minute by command. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
cmd :
The command executed.
keyspace/avg_ttl
GA
(project)
Average TTL
GAUGE , DOUBLE , ms
redis_instance
Average TTL for keys in this database. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
db :
The index of the database, default of 0.
keyspace/keys
GA
(project)
Keys
GAUGE , INT64 , 1
redis_instance
Number of keys stored in this database. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
db :
The index of the database, default of 0.
keyspace/keys_with_expiration
GA
(project)
Expirable Keys
GAUGE , INT64 , 1
redis_instance
Number of keys with an expiration in this database. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
db :
The index of the database, default of 0.
persistence/rdb/bgsave_in_progress
GA
(project)
Persisting RDB
GAUGE , BOOL , 1
redis_instance
Flag indicating a RDB save is on-going. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/enabled
GA
(project)
Snapshot RDB mode enabled
GAUGE , BOOL ,
redis_instance
Indicates if the snapshot is in RDB mode. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/attempts_since_last_success
GA
(project)
RDB recovery attempts
GAUGE , INT64 , 1
redis_instance
Indicates number of recovery attempts since the last successful recovery attempt. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/elapsed_time
GA
(project)
RDB recovery elapsed time
GAUGE , INT64 , s
redis_instance
Indicates increasing time elapsed for an in-progress recovery from an RDB snapshot. 0 means the recovery is idle or completed. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/estimated_recovery_time
GA
(project)
RDB recovery estimated time
GAUGE , INT64 , s
redis_instance
Indicates the expected recovery time when using the last successful snapshot for recovery. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/estimated_remaining_time
GA
(project)
RDB recovery remaining time
GAUGE , INT64 , s
redis_instance
Indicates remaining time to finish recovery from an RDB snapshot. 0 means the recovery is idle or completed. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/in_progress
GA
(project)
RDB recovery in progress
GAUGE , BOOL ,
redis_instance
Indicates if recovery from an RDB snapshot is in progress. When the metric value is true, then a recovery is in progress. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/last_duration
GA
(project)
RDB recovery last duration
GAUGE , INT64 , s
redis_instance
Indicates time it took to restore the last snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/last_status
GA
(project)
RDB recovery last status
GAUGE , INT64 , 1
redis_instance
Indicates status of the most recent recovery. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
message :
The message from the status of the last recovery.
rdb/recovery/loaded_bytes_count
GA
(project)
RDB loaded size
DELTA , INT64 , By
redis_instance
During a recovery, indicates how many bytes have loaded. 0 if the recovery is not active. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/recovery/total_bytes_count
GA
(project)
RDB snapshot size
DELTA , INT64 , By
redis_instance
Indicates the size in bytes of the snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/snapshot/attempt_count
GA
(project)
RDB snapshot attempts count
DELTA , INT64 , 1
redis_instance
Indicates number of snapshot attempts every minute. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/snapshot/elapsed_time
GA
(project)
RDB snapshot elapsed time
GAUGE , INT64 , s
redis_instance
Indicates increasing time elapsed while creating the current snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/snapshot/in_progress
GA
(project)
RDB snapshot in progress
GAUGE , BOOL ,
redis_instance
Indicates if RDB snapshot is in progress. When the metric value is true, then an RDB snapshot is in progress. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/snapshot/last_status
GA
(project)
RDB snapshot last status
GAUGE , INT64 , 1
redis_instance
Indicates status of the most recent snapshot attempt. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
message :
The message from the status of the last snapshot.
rdb/snapshot/last_success_age
GA
(project)
RDB snapshot last success age
GAUGE , INT64 , s
redis_instance
Indicates time elapsed since the start of the last successful snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/snapshot/last_success_duration
GA
(project)
RDB snapshot last success duration
GAUGE , INT64 , s
redis_instance
Indicates the total time required to write the last successful snapshot, not including failed attempts. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
rdb/snapshot/time_until_next_run
GA
(project)
Next snapshot time
GAUGE , INT64 , s
redis_instance
Seconds until the next scheduled snapshot. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
replication/master/slaves/lag
GA
(project)
Seconds lagging
GAUGE , INT64 , s
redis_instance
The number of seconds that replica is lagging behind primary. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
slave :
The index of slave on a particular master.
replication/master/slaves/offset
GA
(project)
Replication byte offset (Replica)
GAUGE , INT64 , By
redis_instance
The number of bytes that have been acknowledged by replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
slave :
The index of slave on a particular master.
replication/master_repl_offset
GA
(project)
Replication byte offset (Master)
GAUGE , INT64 , By
redis_instance
The number of bytes that master has produced and sent to replicas. To be compared with replication byte offset of replica. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
replication/offset_diff
GA
(project)
Bytes pending replication
GAUGE , INT64 , By
redis_instance
The largest number of bytes that have not been replicated across all replicas. This is the biggest difference between replication byte offset (master) and replication byte offset (replica) of all replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
replication/role
GA
(project)
Node Role
GAUGE , INT64 , 1
redis_instance
Returns a value indicating the node role. 1 indicates primary and 0 indicates replica. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
search/attributes
GA
(project)
Vector search attributes
GAUGE , INT64 , 1
redis_instance
Indicates the number of attributes in vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
search/background_indexing_in_progress
GA
(project)
Vector search background indexing in progress
GAUGE , BOOL , 1
redis_instance
Indicates if the background indexing is in progress. When the metric value is true, then the background indexing is in progress. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
search/indexed_hash_keys
GA
(project)
Vector search indexed hash keys
GAUGE , INT64 , 1
redis_instance
Indicates the number of indexed hash keys in vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
search/indexes
GA
(project)
Vector search indexes
GAUGE , INT64 , 1
redis_instance
Indicates the number of indexes in vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
search/query_requests_count
GA
(project)
Vector search query requests count
DELTA , INT64 , 1
redis_instance
Indicates the number of query requests count. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
status_string :
Status code description.
search/used_memory_bytes
GA
(project)
Vector search used memory in bytes
GAUGE , INT64 , By
redis_instance
Indicates the used memory in bytes in vector search. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
server/uptime
GA
(project)
Uptime
GAUGE , INT64 , s
redis_instance
Uptime in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/cache_hit_ratio
GA
(project)
Cache Hit ratio
GAUGE , DOUBLE , 1
redis_instance
Cache Hit ratio as a fraction. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/connections/total
GA
(project)
Total Connections Received
DELTA , INT64 , 1
redis_instance
Total number of connections accepted by the server. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/cpu_utilization
GA
(project)
CPU seconds
DELTA , DOUBLE , s{CPU}
redis_instance
CPU-seconds consumed by the Redis server, broken down by system/user space and parent/child relationship. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role (one of [primary, replica]).
space :
The space ("system" or "user") in which CPU resources were consumed.
relationship :
The parent/child relationship of the process using CPU resources.
stats/cpu_utilization_main_thread
GA
(project)
Main Thread CPU seconds
DELTA , DOUBLE , s{CPU}
redis_instance
CPU-seconds consumed by the Redis server main thread, broken down by system/user space and parent/child relationship. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role (one of [primary, replica]).
space :
The space ("system" or "user") in which CPU resources were consumed.
relationship :
The parent/child relationship of the process using CPU resources.
stats/evicted_keys
GA
(project)
Evicted Keys
DELTA , INT64 , 1
redis_instance
Number of evicted keys due to maxmemory limit. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/expired_keys
GA
(project)
Expired Keys
DELTA , INT64 , 1
redis_instance
Total number of key expiration events. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/keyspace_hits
GA
(project)
Hits
DELTA , INT64 , 1
redis_instance
Number of successful lookup of keys in the main dictionary. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/keyspace_misses
GA
(project)
Misses
DELTA , INT64 , 1
redis_instance
Number of failed lookup of keys in the main dictionary. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/memory/maxmemory
GA
(project)
Maximum Memory
GAUGE , INT64 , By
redis_instance
Maximum amount of memory Redis can consume. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/memory/system_memory_overload_duration
GA
(project)
Time in system memory overload
DELTA , INT64 , us
redis_instance
The amount of time in microseconds the instance is in system memory overload mode. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/memory/system_memory_usage_ratio
GA
(project)
System Memory Usage Ratio
GAUGE , DOUBLE , 1
redis_instance
Memory usage as a ratio of maximum system memory. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/memory/usage
GA
(project)
Used Memory
GAUGE , INT64 , By
redis_instance
Total number of bytes allocated by Redis. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/memory/usage_ratio
GA
(project)
Memory Usage Ratio
GAUGE , DOUBLE , 1
redis_instance
Memory usage as a ratio of maximum memory. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/network_traffic
GA
(project)
Total traffic to Redis
DELTA , INT64 , By
redis_instance
Total number of bytes sent to/from redis (includes bytes from commands themselves, payload data, and delimiters). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
direction :
The direction of the traffic, inbound or outbound.
stats/pubsub/channels
GA
(project)
Pubsub Channels
GAUGE , INT64 , 1
redis_instance
Global number of pub/sub channels with client subscriptions. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/pubsub/patterns
GA
(project)
Pubsub Patterns
GAUGE , INT64 , 1
redis_instance
Global number of pub/sub pattern with client subscriptions. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
stats/reject_connections_count
GA
(project)
Rejected Connections
DELTA , INT64 , 1
redis_instance
Number of connections rejected because of maxclients limit. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
role :
The node role, one of [primary, replica].
retail
Metrics from Retail API .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with retail.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
catalog/processed_user_events
GA
(project)
Number of user events processed
GAUGE , INT64 , 1
retail.googleapis.com/Catalog
The number of user events that have been processed for a catalog. Only the user events that are recorded in real time are included. Historical user events, which are bulk imported, are not included. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
event_type :
Event type, see https://cloud.google.com/retail/docs/user-events.
status :
Status of event, should be joined or unjoined.
router
Metrics from Cloud Router .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with router.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
best_received_routes_count
GA
(project)
Received routes count
GAUGE , INT64 , 1
gce_router
Current number of best routes received by router. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bfd/control/receive_intervals
GA
(project)
BFD control packets receive intervals
GAUGE , INT64 , ms
gce_router
BFD control packets receive intervals. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/received_packets_count
GA
(project)
Control packets received
DELTA , INT64 , 1
gce_router
Number of control packets received from this BFD session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/rejected_packets_count
GA
(project)
Control packets rejected
DELTA , INT64 , 1
gce_router
Number of control packets rejected, from this BFD session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/transmit_intervals
GA
(project)
BFD control packets transmit intervals
GAUGE , INT64 , ms
gce_router
BFD control packets transmit intervals. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/control/transmitted_packets_count
GA
(project)
Control packets transmitted
DELTA , INT64 , 1
gce_router
Number of control packets transmitted from this BFD session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bfd/session_flap_events_count
GA
(project)
BFD session flap
DELTA , INT64 , 1
gce_router
Number of each BFD flap event from this BFD session. A session flap event refers to the transition from Up state. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
event_type :
The reason for the BFD flap such as "AdminDown" or "ControlDetectionTimeExpired".
bfd/session_up
GA
(project)
BFD session status
GAUGE , INT64 , 1
gce_router
Indicator for successful BFD session establishment. 1 indicates the session is up. 0 indicates the session is down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
peer_ip :
The peer IP of the BFD session.
bgp/received_routes_count
GA
(project)
BGP received routes count
GAUGE , INT64 , 1
gce_router
Current number of routes received on a bgp session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_peer_name :
The name of the bgp session.
bgp/sent_routes_count
GA
(project)
BGP sent routes count
GAUGE , INT64 , 1
gce_router
Current number of routes sent on a bgp session. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_peer_name :
The name of the bgp session.
bgp/session_up
GA
(project)
BGP session status
GAUGE , INT64 , 1
gce_router
Indicator for successful bgp session establishment. 1 indicates the session is up. 0 indicates the session is down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_peer_name :
The name of the bgp session.
bgp_sessions_down_count
GA
(project)
BGP sessions down count
GAUGE , INT64 , 1
gce_router
Number of BGP sessions on the router that are down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bgp_sessions_up_count
GA
(project)
BGP sessions up count
GAUGE , INT64 , 1
gce_router
Number of BGP sessions on the router that are up. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
dynamic_routes/learned_routes/any_dropped_unique_destinations
BETA
(project)
Any unique destinations dropped
GAUGE , BOOL , 1
gce_network_region
A boolean metric of whether there are any unique destinations dropped in a network region due to exceeding quota. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
dynamic_routes/learned_routes/dropped_unique_destinations
BETA
(project)
Unique destinations dropped
GAUGE , INT64 , 1
gce_network_region
The number of unique destinations dropped in a network region due to exceeding quota. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
dynamic_routes/learned_routes/unique_destinations_limit
BETA
(project)
Unique destinations limit
GAUGE , INT64 , 1
gce_network_region
The maximum number of unique destinations allowed by route quota for this network region. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
dynamic_routes/learned_routes/used_unique_destinations
BETA
(project)
Unique destinations used
GAUGE , INT64 , 1
gce_network_region
Number of unique destinations used by learned routes for this network region. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
routing_mode :
Routing mode of the route, one of ["global" - learned from remote regions; "regional" - learned from local regions].
nat/allocated_ports
GA
(project)
Allocated ports
GAUGE , INT64 , {port}
nat_gateway
Number of ports allocated to all VMs by the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
nat_ip :
NAT IP of the ports.
nat/closed_connections_count
GA
(project)
Closed connections count
DELTA , INT64 , {connection}
nat_gateway
Count of connections closed over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_received_packets_count
GA
(project)
Received packets dropped count
DELTA , INT64 , {packet}
nat_gateway
Count of received packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_sent_packets_count
GA
(project)
Sent packets dropped count
DELTA , INT64 , {packet}
nat_gateway
Count of sent packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
reason :
The reason for the packet drop. Possible values are OUT_OF_RESOURCES, ENDPOINT_INDEPENDENCE_CONFLICT.
nat/nat_allocation_failed
GA
(project)
NAT allocation failed
GAUGE , BOOL ,
nat_gateway
Indicates if there is a failure in allocating NAT IPs to any VM in the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
nat/new_connections_count
GA
(project)
New connections count
DELTA , INT64 , {connection}
nat_gateway
Count of new connections created over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/open_connections
GA
(project)
Open connections
GAUGE , INT64 , {connection}
nat_gateway
Number of connections currently open on the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/port_usage
GA
(project)
Port usage
GAUGE , INT64 , {port}
nat_gateway
Maximum number of connections from VM to a single internet endpoint (IP:port). Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_bytes_count
GA
(project)
Received bytes count
DELTA , INT64 , By
nat_gateway
Count of bytes received (destination -> VMs) via the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_packets_count
GA
(project)
Received packets count
DELTA , INT64 , {packet}
nat_gateway
Count of packets received (destination -> VMs) via the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_bytes_count
GA
(project)
Sent bytes count
DELTA , INT64 , By
nat_gateway
Count of bytes sent (VMs -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_packets_count
GA
(project)
Sent packets count
DELTA , INT64 , {packet}
nat_gateway
Count of packets sent (VMs -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
router_up
GA
(project)
Router tasks up
GAUGE , INT64 , 1
gce_router
Number of router software tasks that are running successfully. A value greater than or equal to 1 indicates that the router is up, although not all software tasks may be running. Compare the returned number to the expected number of software tasks for the router. A value of 0 indicates that the router is down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
sent_routes_count
GA
(project)
Sent routes count
GAUGE , INT64 , 1
gce_router
Current number of routes sent by router. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
run
Metrics from managed Cloud Run . (For Knative serving metrics, see Kubernetes metrics and Knative metrics .)
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with run.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
container/billable_instance_time
GA
(project)
Billable Instance Time
DELTA , DOUBLE , s
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Billable time aggregated across all container instances. For a given container instance, billable time occurs when the container instance is starting or at least one request is being processed. Billable time is rounded up to the nearest 100 milliseconds. Examples: If a revision with 2 container instances has been continuously serving traffic in the last minute, the value is 2s/s with the default "rate" aligner. If a single request lasting 30ms was received by a revision in the past minute, it is rounded up to 100ms and averaged to 1.7ms/s over the minute with the default "rate" aligner. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/completed_probe_attempt_count
GA
(project)
Completed Health Check Probe Attempt Count
DELTA , INT64 , 1
cloud_run_revision
cloud_run_worker_pool
Number of completed health check probe attempts and their results. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
probe_action :
Mechanism used to perform the probing.
is_healthy :
(BOOL)
Result of the health check probe.
container_name :
Name of the probed container.
is_default :
(BOOL)
Whether this probe is injected by google infrastructure.
probe_type :
Type of the probe.
container/completed_probe_count
GA
(project)
Completed Health Check Probe Count
DELTA , INT64 , 1
cloud_run_revision
cloud_run_worker_pool
Number of completed health check probes and their results. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
probe_action :
Mechanism used to perform the probing.
is_healthy :
(BOOL)
Result of the health check probe.
container_name :
Name of the probed container.
is_default :
(BOOL)
Whether this probe is injected by google infrastructure.
probe_type :
Type of the probe.
container/containers
GA
(project)
Multi-container instance counts
GAUGE , INT64 , 1
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Number of container instances that exist, broken down by state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
state :
Whether a container is "active" or "idle".
container/cpu/allocation_time
GA
(project)
Container CPU Allocation
DELTA , DOUBLE , s{CPU}
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container CPU allocation in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/cpu/usage
GA
(project)
Multi-container CPU Usage
GAUGE , DISTRIBUTION , s{CPU}
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Actual container cpu usage in cpu seconds broken down by the metric field, container name. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
container/cpu/utilizations
GA
(project)
Container CPU Utilization
DELTA , DISTRIBUTION , 10^2.%
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container CPU utilization distribution across all container instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/gpu/memory_usages
GA
(project)
GPU Memory Usage
GAUGE , DISTRIBUTION , By
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container GPU memory usage distribution across all container instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
gpu_number :
(INT64)
Matches the CUDA device index (e.g. "0", "1").
container/gpu/memory_utilizations
GA
(project)
GPU Memory Utilization
GAUGE , DISTRIBUTION , 10^2.%
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container GPU memory utilization distribution across all container instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
gpu_number :
(INT64)
Matches the CUDA device index (e.g. "0", "1").
container/gpu/utilizations
GA
(project)
GPU Utilization
GAUGE , DISTRIBUTION , 10^2.%
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container GPU utilization distribution across all container instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
gpu_number :
(INT64)
Matches the CUDA device index (e.g. "0", "1").
container/instance_count
GA
(project)
Instance Count
GAUGE , INT64 , 1
cloud_run_revision
cloud_run_worker_pool
Number of container instances that exist, broken down by state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
Whether a container is "active" or "idle".
container/instance_count_with_readiness
BETA
(project)
Instance Count with Readiness
GAUGE , INT64 , 1
cloud_run_revision
The number of instances broken down by readiness probe status. The readiness status can be one of "UNKNOWN", "HEALTHY" and "UNHEALTHY". Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
readiness_status :
The readiness status can be one of "UNKNOWN", "HEALTHY" and "UNHEALTHY".
container/max_request_concurrencies
GA
(project)
Max Concurrent Requests
DELTA , DISTRIBUTION , 1
cloud_run_revision
Distribution of the maximum number of concurrent requests being served by each container instance over a minute. Filter by 'state' = 'active' only get the concurrency of active container instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
Whether a container is "active" or "idle".
container/memory/allocation_time
GA
(project)
Container Memory Allocation
DELTA , DOUBLE , GiBy.s
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container memory allocation in Gibibyte-seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/memory/tmpfs_usage
GA
(project)
Multi-container Tmpfs Usage
GAUGE , DISTRIBUTION , byte
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Actual container tmpfs usage in bytes broken down by the metric field, container name. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
container/memory/usage
GA
(project)
Multi-container Memory Usage
GAUGE , DISTRIBUTION , byte
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Actual container memory usage in bytes broken down by the metric field, container name. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container_name :
Container name.
container/memory/utilizations
GA
(project)
Container Memory Utilization
DELTA , DISTRIBUTION , 10^2.%
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Container memory utilization distribution across all container instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/network/received_bytes_count
GA
(project)
Received Bytes
DELTA , INT64 , By
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Incoming socket and HTTP request traffic, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
kind :
Type of network from where traffic is received, one of [internet, private, google]
container/network/sent_bytes_count
GA
(project)
Sent Bytes
DELTA , INT64 , By
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Outgoing socket and HTTP response traffic, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
kind :
Type of network where traffic is sent, one of [internet, private, google]. Response traffic is classified as [google] for responses returned through Google Cloud load balancers and [internet] for the rest.
container/network/throttled_inbound_bytes_count
BETA
(project)
Inbound bytes throttled
DELTA , INT64 , By
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Inbound bytes dropped due to network throttling. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
network :
Network layer (L3) protocol used, one of [ipv4, ipv6].
transport :
Transport used, one of [tcp, udp, icmp].
type :
Type of network from where traffic is received, one of [public, private, googleapis]
container/network/throttled_inbound_packets_count
BETA
(project)
Inbound packets throttled
DELTA , INT64 , {packet}
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Inbound packets dropped due to network throttling. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
network :
Network layer (L3) protocol used, one of [ipv4, ipv6].
transport :
Transport used, one of [tcp, udp, icmp].
type :
Type of network from where traffic is received, one of [public, private, googleapis]
container/network/throttled_outbound_bytes_count
BETA
(project)
Outbound bytes throttled
DELTA , INT64 , By
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Outbound bytes dropped due to network throttling. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
network :
Network layer (L3) protocol used, one of [ipv4, ipv6].
transport :
Transport used, one of [tcp, udp, icmp].
type :
Type of network from where traffic is received, one of [public, private, googleapis]
container/network/throttled_outbound_packets_count
BETA
(project)
Outbound packets throttled
DELTA , INT64 , {packet}
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Outbound packets dropped due to network throttling. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
network :
Network layer (L3) protocol used, one of [ipv4, ipv6].
transport :
Transport used, one of [tcp, udp, icmp].
type :
Type of network from where traffic is received, one of [public, private, googleapis]
container/probe_attempt_latencies
GA
(project)
Health Check Probe Attempt Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
cloud_run_worker_pool
Distribution of time spent running a single probe attempt before success or failure in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
probe_action :
Mechanism used to perform the probing.
is_healthy :
(BOOL)
Result of the health check probe.
container_name :
Name of the probed container.
is_default :
(BOOL)
Whether this probe is injected by google infrastructure.
probe_type :
Type of the probe.
container/probe_latencies
GA
(project)
Health Check Probe Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
cloud_run_worker_pool
Distribution of time spent running a probe before success or failure in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
probe_action :
Mechanism used to perform the probing.
is_healthy :
(BOOL)
Result of the health check probe.
container_name :
Name of the probed container.
is_default :
(BOOL)
Whether this probe is injected by google infrastructure.
probe_type :
Type of the probe.
container/startup_latencies
BETA
(project)
Container startup latency
DELTA , DISTRIBUTION , ms
cloud_run_job
cloud_run_revision
cloud_run_worker_pool
Distribution of time spent starting a new container instance in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/connection_latencies
GA
(project)
CloudSQL connection latency
DELTA , DISTRIBUTION , us
cloud_run_revision
Distribution of latency in microseconds for connections originating from Cloud Run to CloudSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/connection_refused_count
GA
(project)
CloudSQL connection refused count
DELTA , INT64 , 1
cloud_run_revision
Total number of connections refused originating from Cloud Run to CloudSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/connection_request_count
GA
(project)
CloudSQL connection request count
DELTA , INT64 , 1
cloud_run_revision
Total number of connection requests originating from Cloud Run to CloudSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/received_bytes_count
GA
(project)
CloudSQL bytes received
DELTA , INT64 , By
cloud_run_revision
Number of bytes received by Cloud Run from CloudSQL over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/sent_bytes_count
GA
(project)
CloudSQL bytes sent
DELTA , INT64 , By
cloud_run_revision
Number of bytes sent by Cloud Run to CloudSQL over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job/completed_execution_count
GA
(project)
Completed Executions
DELTA , INT64 , 1
cloud_run_job
Number of completed job executions and their result. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
result :
Execution result.
job/completed_task_attempt_count
GA
(project)
Completed exit result and task attempts
DELTA , INT64 , 1
cloud_run_job
Number of completed task attempts and its corresponding exit result. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
result :
Job task result.
attempt :
(INT64)
The number of retries for a job task.
job/running_executions
GA
(project)
Running Executions
GAUGE , INT64 , 1
cloud_run_job
Number of running job executions. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job/running_task_attempts
GA
(project)
Running task attempts
GAUGE , INT64 , 1
cloud_run_job
Number of running task attempts. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
attempt :
(INT64)
The number of retries for a job task.
pending_queue/pending_requests
ALPHA
(project)
Pending Requests
GAUGE , INT64 , 1
cloud_run_revision
Number of pending requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
request_count
GA
(project)
Request Count
DELTA , INT64 , 1
cloud_run_revision
Number of requests reaching the revision. Excludes requests that are not reaching your container instances (for example, unauthorized requests or when maximum number of instances is reached). Captured at the end of the request lifecycle. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
route :
Always empty.
request_latencies
GA
(project)
Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of request latency in milliseconds reaching the revision. Latency is measured from when the request reaches the running container to when it exits. Notably, it does not include container startup latency. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
route :
Always empty.
request_latency/e2e_latencies
BETA
(project)
End to End Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of request latencies in milliseconds measured from when the request enters Google Cloud's network to when Cloud Run sends the response. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
request_latency/ingress_to_region
BETA
(project)
Ingress to Region Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of request latencies in milliseconds measured from when the request enters Google Cloud's network to when the request reaches the cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
request_latency/pending
BETA
(project)
Pending Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of request latencies in milliseconds measured from when the request reaches Cloud Run to when the request is sent to an instance. Includes time spent waiting for a slot on an existing instance, or for a new instance to start (startup latency). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
request_latency/response_egress
BETA
(project)
Response Egress Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of response latencies in milliseconds measured from when the container finished processing the request to when Cloud Run sends the response. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
request_latency/routing
BETA
(project)
Routing Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of request latencies in milliseconds measured from when the request reaches the cloud region to when the request reaches Cloud Run. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
request_latency/user_execution
BETA
(project)
User Execution Request Latency
DELTA , DISTRIBUTION , ms
cloud_run_revision
Distribution of request latencies in milliseconds measured from when the request reaches a running instance to when it exits. Only includes time spent in user container. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
Response code of a request.
response_code_class :
Response code class of a request.
scaling/recommended_instances
GA
(project)
Recommended Instances
GAUGE , INT64 , 1
cloud_run_revision
Recommended number of instances per scaling driver. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
scaling_driver :
Factor that determined the recommended instance count, e.g. CPU utilization.
service_health_count
BETA
(project)
Service Health Count
GAUGE , INT64 , 1
cloud_run_revision
The number of services in each Service Health status, based on their readiness probe results. The service health status can be one of "UNKNOWN", "HEALTHY" and "UNHEALTHY". Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
service_health :
The service health status can be one of "UNKNOWN", "HEALTHY" and "UNHEALTHY".
saasservicemgmt
Metrics from SaaS Runtime .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with saasservicemgmt.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
rollout/state
BETA
(project)
Rollout State
GAUGE , BOOL ,
saasservicemgmt.googleapis.com/Rollout
Indicates the current state of a specific rollout.
state_name :
The human-readable name of the rollout state, one of ['UNSPECIFIED', 'RUNNING', 'PAUSED', 'SUCCEEDED', 'FAILED', 'CANCELLED', 'WAITING', 'CANCELLING', 'RESUMING', 'PAUSING'].
root_rollout_id :
The root_rollout associated with this local rollout. If this rollout is the root_rollout itself then the rollout_id of the monitored resource will be equal to the root_rollout_id.
saas_id :
The SaaS ID associated with this rollout.
unit_kind_id :
The Unit Kind ID associated with this rollout.
release_id :
The Release ID associated with this rollout.
reason :
Indicates the reason for the current state of the rollout.
unit/count
BETA
(project)
Unit Count
GAUGE , INT64 , 1
saasservicemgmt.googleapis.com/UnitKind
The total number of units.
release_id :
The release name of the unit.
unit_state :
The state of the unit at time of collection.
saas_id :
Unique identifier for saas instance.
tenant_id :
Unique identifier for tenant.
unit/unit_operation_completion_time
BETA
(project)
The time to complete a unit operation
GAUGE , INT64 , ms
saasservicemgmt.googleapis.com/Unit
The time from unit operation creation to the time the unit operation completes.
unit_kind_id :
Identifier for a unit kind.
unit_operation_type :
The type of unit operation e.g. provision and upgrade.
saas_id :
Unique identifier for saas instance.
tenant_id :
Unique identifier for tenant.
unit/unit_operations_by_state
BETA
(project)
Unit Operation counts by state
GAUGE , INT64 , 1
saasservicemgmt.googleapis.com/Unit
Indicates the number of unit operation in a terminal state.
rollout_id :
Identifier for a rollout.
unit_kind_id :
Identifier for a unit kind.
unit_operation_type :
The type of unit operation e.g. provision and upgrade.
unit_operation_state :
The current state of unit operation e.g. succeed and failed.
status :
The canonical code for this unit operation.
saas_id :
Unique identifier for saas instance.
tenant_id :
Unique identifier for tenant.
serviceruntime
Metrics available to be collected by any Google Cloud API (resource type consumed_api ) and by APIs you created by using Cloud Endpoints (resource type api ). Note that not all Google Cloud APIs collect serviceruntime metrics.
The resources listed for the metrics are at launch stage GA , except for api , which is at launch stage BETA .
The "metric type" strings in this table must be prefixed
with serviceruntime.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
api/request_count
GA
(project)
Request count
DELTA , INT64 , 1
api
consumed_api
produced_api
The count of completed requests. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
protocol :
The protocol of the request, e.g. "http", "grpc".
response_code :
The HTTP response code for HTTP requests, or HTTP equivalent code for gRPC requests. See code mapping in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto .
response_code_class :
The response code class for HTTP requests, or HTTP equivalent class for gRPC requests, e.g. "2xx", "4xx".
grpc_status_code :
The numeric gRPC response code for gRPC requests, or gRPC equivalent code for HTTP requests. See code mapping in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto .
api/request_latencies
GA
(project)
Request latencies
DELTA , DISTRIBUTION , s
api
consumed_api
produced_api
Distribution of latencies in seconds for non-streaming requests. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
api/request_latencies_backend
GA
(project)
Request backend latencies
DELTA , DISTRIBUTION , s
api
produced_api
Distribution of backend latencies in seconds for non-streaming requests. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
api/request_latencies_overhead
GA
(project)
Request overhead latencies
DELTA , DISTRIBUTION , s
api
produced_api
Distribution of request latencies in seconds for non-streaming requests excluding the backend. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
api/request_sizes
GA
(project)
Request sizes
DELTA , DISTRIBUTION , By
api
consumed_api
produced_api
Distribution of request sizes in bytes recorded at request completion. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
api/response_sizes
GA
(project)
Response sizes
DELTA , DISTRIBUTION , By
api
consumed_api
produced_api
Distribution of response sizes in bytes recorded at request completion. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
mcp/request_count
BETA
(project)
MCP Request Count
DELTA , INT64 , 1
consumed_mcp_api
The count of MCP requests.
response_code :
The HTTP response code for HTTP requests, or HTTP equivalent code for MCP requests.
response_code_class :
The response code class for HTTP requests, or HTTP equivalent class for gRPC requests, e.g. '2xx', '4xx'.
mcp/request_durations
BETA
(project)
MCP Request Duration
DELTA , DISTRIBUTION , s
consumed_mcp_api
The duration of the MCP request from the time it was sent until the response or ack is received.
quota/allocation/usage
GA
(project, folder, organization)
Allocation quota usage
GAUGE , INT64 , 1
consumer_quota
producer_quota
The total consumed allocation quota. Values reported more than 1/min are dropped. If no changes are received in quota usage, the last value is repeated at least every 24 hours. Sampled every 60 seconds.
quota_metric :
The name of quota metric or quota group.
quota/concurrent/exceeded
ALPHA
(project, folder, organization)
Concurrent Quota Exceeded
DELTA , INT64 , 1
consumer_quota
The number of times exceeding the concurrent quota was attempted. Sampled every 86400 seconds. After sampling, data is not visible for up to 180 seconds.
limit_name :
The quota limit name, such as "Requests per day" or "In-use IP addresses".
quota_metric :
The name of quota metric or quota group.
time_window :
The window size for concurrent operation limits.
quota/concurrent/limit
ALPHA
(project, folder, organization)
Concurrent Quota limit
GAUGE , INT64 , 1
consumer_quota
producer_quota
The concurrent limit for the quota. Sampled every 86400 seconds. After sampling, data is not visible for up to 180 seconds.
limit_name :
The quota limit name, such as "Requests per day" or "In-use IP addresses".
quota_metric :
The name of quota metric or quota group.
time_window :
The window size for concurrent operation limits.
quota/concurrent/usage
ALPHA
(project, folder, organization)
Concurrent Quota usage
GAUGE , INT64 , 1
consumer_quota
producer_quota
The concurrent usage of the quota. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
limit_name :
The quota limit name, such as "Requests per day" or "In-use IP addresses".
quota_metric :
The name of quota metric or quota group.
time_window :
The window size for concurrent operation limits.
quota/exceeded
GA
(project, folder, organization)
Quota exceeded error
GAUGE , BOOL , 1
consumer_quota
The error happened when the quota limit was exceeded. Sampled every 60 seconds.
limit_name :
The quota limit name, such as "Requests per day" or "In-use IP addresses".
quota_metric :
The name of quota metric or quota group.
quota/limit
GA
(project, folder, organization)
Quota limit
GAUGE , INT64 , 1
consumer_quota
producer_quota
The limit for the quota. Sampled every 86400 seconds.
limit_name :
The quota limit name, such as "Requests per day" or "In-use IP addresses".
quota_metric :
The name of quota metric or quota group.
quota/rate/net_usage
GA
(project, folder, organization)
Rate quota usage
DELTA , INT64 , 1
consumer_quota
producer_quota
The total consumed rate quota. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
method :
The API method name, such as "disks.list".
quota_metric :
The name of quota metric or quota group.
reserved/metric1
EARLY_ACCESS
(project)
Deprecated
DELTA , INT64 , 1
deprecated_resource
Deprecated. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
quota_name :
Deprecated.
credential_id :
Deprecated.
quota_location :
Deprecated.
spanner
Metrics from Spanner .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with spanner.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
api/adapter_request_count
GA
(project)
Adapter API requests
DELTA , INT64 , 1
spanner_instance
Cloud Spanner Adapter API requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
status :
Request call result, ok=success.
method :
Cloud Spanner Adapter API method.
protocol :
Adapter protocol.
message_type :
Adapter protocol message type.
adapter_status :
Adapter protocol request result.
op_type :
Operation type.
api/adapter_request_latencies
GA
(project)
Adapter request latencies
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of server request latencies for a database. This includes latency of request processing in Cloud Spanner backends and API layer. It does not include network or reverse-proxy overhead between clients and servers. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
method :
Cloud Spanner Adapter API method.
protocol :
Adapter protocol.
message_type :
Adapter protocol message type.
op_type :
Operation type.
api/api_request_count
GA
(project)
API requests
DELTA , INT64 , 1
spanner_instance
Cloud Spanner API requests. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
status :
Request call result, ok=success.
method :
Cloud Spanner API method.
api/read_request_count_by_serving_location
BETA
(project)
Read API request by serving location
DELTA , INT64 , 1
spanner_instance
Cloud Spanner Read API requests by serving location, whether it is a directed read query, and whether it is a change stream query. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
method :
Cloud Spanner API method.
is_change_stream :
(BOOL)
TRUE if it is a change stream query.
is_directed_read :
(BOOL)
TRUE if it is a directed read query.
status :
Request call result, OK=success.
serving_location :
The location of serving replicas.
api/read_request_latencies_by_change_stream
GA
(project)
Read request latencies by change stream
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of read request latencies by whether it is a change stream query. This includes latency of request processing in Cloud Spanner backends and API layer. It does not include network or reverse-proxy overhead between clients and servers. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
method :
Cloud Spanner API method.
is_change_stream :
(BOOL)
TRUE if it is a change stream query.
api/read_request_latencies_by_serving_location
BETA
(project)
Read API request latencies by serving location
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of read request latencies by serving location, whether it is a directed read query, and whether it is a change stream query. This includes latency of request processing in Cloud Spanner backends and API layer. It does not include network or reverse-proxy overhead between clients and servers. This is a superset of spanner.googleapis.com/api/read_request_latencies_by_change_stream. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
method :
Cloud Spanner API method.
is_change_stream :
(BOOL)
TRUE if it is a change stream query.
is_directed_read :
(BOOL)
TRUE if it is a directed read query.
serving_location :
The location of serving replicas.
api/received_bytes_count
GA
(project)
Bytes received by Cloud Spanner
DELTA , INT64 , By
spanner_instance
Uncompressed request bytes received by Cloud Spanner. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
method :
Cloud Spanner API method.
api/request_count
GA
(project)
API request rate
GAUGE , DOUBLE , 1/s
spanner_instance
Rate of Cloud Spanner API requests. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
status :
Request call result, ok=success.
method :
Cloud Spanner API method.
api/request_count_per_transaction_options
GA
(project)
API requests by transaction options
GAUGE , DOUBLE , 1/s
spanner_instance
Cloud Spanner API request rate by transaction options. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
method :
Cloud Spanner API method.
status :
Request call result, ok=success.
op_type :
Operation type ("read", "write" or "other").
response_code :
HTTP response code received, such as 200 or 500.
lock_mode :
The read lock mode used if within a read-write transaction ("PESSIMISTIC" or "OPTIMISTIC").
isolation_level :
The isolation level used if within a read-write transaction ("SERIALIZABLE" or "REPEATABLE_READ").
region :
The region where the request was served.
transaction_type :
Transaction type ("READ_ONLY", "READ_WRITE", "PARTITIONED_DML" or "NONE").
api/request_latencies
GA
(project)
Request latencies
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of server request latencies for a database. This includes latency of request processing in Cloud Spanner backends and API layer. It does not include network or reverse-proxy overhead between clients and servers. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
method :
Cloud Spanner API method.
api/request_latencies_by_transaction_type
GA
(project)
Request latencies by transaction type
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of server request latencies by transaction types. This includes latency of request processing in Cloud Spanner backends and API layer. It does not include network or reverse-proxy overhead between clients and servers. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
method :
Cloud Spanner API method.
transaction_type :
Transaction type ("READ_ONLY" or "READ_WRITE").
is_leader_involved :
(BOOL)
TRUE if the leader roundtrip call is issued.
api/request_latencies_per_transaction_options
GA
(project)
Request latencies by transaction options
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of server request latencies by transaction options for a database. This includes latency of request processing in Cloud Spanner backends and API layer. It does not include network or reverse-proxy overhead between clients and servers. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
method :
Cloud Spanner API method.
op_type :
Operation type ("read", "write" or "other").
lock_mode :
The read lock mode used if within a read-write transaction ("PESSIMISTIC" or "OPTIMISTIC").
isolation_level :
The isolation level used if within a read-write transaction ("SERIALIZABLE" or "REPEATABLE_READ").
is_leader_involved :
(BOOL)
TRUE if the leader roundtrip call is issued.
region :
The region where the request was served.
transaction_type :
Transaction type ("READ_ONLY", "READ_WRITE", "PARTITIONED_DML" or "NONE").
api/sent_bytes_count
GA
(project)
Bytes sent by Cloud Spanner
DELTA , INT64 , By
spanner_instance
Uncompressed response bytes sent by Cloud Spanner. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
method :
Cloud Spanner API method.
client/afe_connectivity_error_count
GA
(project)
AFE Connectivity Error Count
DELTA , INT64 , 1
spanner_instance
Number of requests that failed to reach the Spanner API Frontend. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner operation status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/afe_latencies
GA
(project)
AFE Latencies
DELTA , DISTRIBUTION , ms
spanner_instance
Latency between Spanner API Frontend receiving an RPC and starting to write back the response. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner operation status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/attempt_count
GA
(project)
Attempt Count
DELTA , INT64 , 1
spanner_instance
The total number of RPC attempt performed by the Spanner client. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner attempt status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/attempt_latencies
GA
(project)
Attempt Latencies
DELTA , DISTRIBUTION , ms
spanner_instance
Distribution of the total end-to-end latency across a RPC attempt. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner attempt status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/gfe_connectivity_error_count
GA
(project)
GFE Connectivity Error Count
DELTA , INT64 , 1
spanner_instance
Number of requests that failed to reach the Google network. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner operation status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/gfe_latencies
GA
(project)
GFE Latencies
DELTA , DISTRIBUTION , ms
spanner_instance
Latency between Google network(GFE) receiving an RPC and reading back the first byte of the response. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner operation status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/operation_count
GA
(project)
Operation Count
DELTA , INT64 , 1
spanner_instance
The total number of operations performed by the Spanner client. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner operation status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
client/operation_latencies
GA
(project)
Operation Latencies
DELTA , DISTRIBUTION , ms
spanner_instance
Distribution of the total end-to-end latency across all RPC attempts associated with a Spanner operation. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Spanner API method.
database :
Target database.
status :
Cloud Spanner operation status.
client_name :
Cloud Spanner client name.
directpath_enabled :
(BOOL)
True if directpath is enabled.
directpath_used :
(BOOL)
True if directpath is used for the RPC request.
graph_algorithm_stat/total/execution_count
GA
(project)
Graph algorithm execution count
DELTA , INT64 , 1
spanner_instance
Total graph algorithm requests received by Cloud Spanner during the time interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
algorithm :
Graph algorithm executed.
graph_algorithm_stat/total/execution_durations
GA
(project)
Graph algorithm durations
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of graph algorithm execution times (in seconds) within the database. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
algorithm :
Graph algorithm executed.
graph_algorithm_stat/total/failed_execution_count
GA
(project)
Graph algorithm failed count
DELTA , INT64 , 1
spanner_instance
Total failed graph algorithm requests in Cloud Spanner during the time interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
algorithm :
Graph algorithm executed.
status :
failed status, one of [cancelled, timeout, error].
graph_query_stat/total/bytes_returned_count
GA
(project)
Graph query bytes returned count
DELTA , INT64 , By
spanner_instance
Number of data bytes that the graph queries returned, excluding transmission encoding overhead. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
graph_query_stat/total/execution_count
GA
(project)
Graph query execution count
DELTA , INT64 , 1
spanner_instance
Number of times Cloud Spanner saw graph queries during the interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
graph_query_stat/total/failed_execution_count
GA
(project)
Graph query failures
DELTA , INT64 , 1
spanner_instance
Number of times graph queries failed during the interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
status :
failed status, one of [cancelled, timeout, error].
graph_query_stat/total/query_latencies
GA
(project)
Graph query latencies
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of total length of time, in seconds, for graph query executions within the database. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
graph_query_stat/total/returned_rows_count
GA
(project)
Graph query rows returned count
DELTA , INT64 , 1
spanner_instance
Number of rows that the graph queries returned. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
graph_query_stat/total/scanned_rows_count
GA
(project)
Graph query rows scanned count
DELTA , INT64 , 1
spanner_instance
Number of rows that the graph queries scanned excluding deleted values. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
instance/autoscaling/high_priority_cpu_utilization_target
GA
(project)
Autoscaling high priority cpu utilization target
GAUGE , DOUBLE , 10^2.%
spanner_instance
High priority CPU utilization target used for autoscaling. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/autoscaling/max_node_count
GA
(project)
Autoscaling max nodes
GAUGE , INT64 , 1
spanner_instance
Maximum number of nodes autoscaler is allowed to allocate to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/autoscaling/max_processing_units
GA
(project)
Autoscaling max processing units
GAUGE , INT64 , 1
spanner_instance
Maximum number of processing units autoscaler is allowed to allocate to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/autoscaling/min_node_count
GA
(project)
Autoscaling min nodes
GAUGE , INT64 , 1
spanner_instance
Minimum number of nodes autoscaler is allowed to allocate to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/autoscaling/min_processing_units
GA
(project)
Autoscaling min processing units
GAUGE , INT64 , 1
spanner_instance
Minimum number of processing units autoscaler is allowed to allocate to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/autoscaling/storage_utilization_target
GA
(project)
Autoscaling storage utilization target
GAUGE , DOUBLE , 10^2.%
spanner_instance
Storage utilization target used for autoscaling. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/autoscaling/total_cpu_utilization_target
GA
(project)
Autoscaling total cpu utilization target
GAUGE , DOUBLE , 10^2.%
spanner_instance
Total CPU utilization target used for autoscaling. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
instance/backup/used_bytes
GA
(project)
Backup storage used
GAUGE , INT64 , By
spanner_instance
Backup storage used in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
backup :
Target backup.
instance/cpu/smoothed_utilization
GA
(project)
Smoothed CPU utilization
GAUGE , DOUBLE , 10^2.%
spanner_instance
24-hour smoothed utilization of provisioned CPU. Values are typically numbers between 0.0 and 1.0 (but might exceed 1.0), charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
instance/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
spanner_instance
Percent utilization of provisioned CPU. Values are typically numbers between 0.0 and 1.0 (but might exceed 1.0), charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
instance/cpu/utilization_by_operation_type
GA
(project)
CPU utilization by operation type
GAUGE , DOUBLE , 10^2.%
spanner_instance
Percent utilization of provisioned CPU, by operation type. Values are typically numbers between 0.0 and 1.0 (but might exceed 1.0), charts display the values as a percentage between 0% and 100% (or more). Currently, it does not include CPU utilization for system tasks. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
is_system :
(BOOL)
TRUE if the number is system CPU utilization.
priority :
Task priority ("high" or "medium" or "low").
category :
Operation type ("read_readonly", "beginorcommit" etc).
instance/cpu/utilization_by_priority
GA
(project)
CPU utilization by priority
GAUGE , DOUBLE , 10^2.%
spanner_instance
Percent utilization of provisioned CPU, by priority. Values are typically numbers between 0.0 and 1.0 (but might exceed 1.0), charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
is_system :
(BOOL)
TRUE if the number is system CPU utilization.
priority :
Task priority ("high", "medium", or "low").
instance/cross_region_replicated_bytes_count
GA
(project)
Cross region replicated bytes
DELTA , INT64 , By
spanner_instance
Number of bytes replicated from preferred leader to replicas across regions. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
database :
Target database.
source_region :
Preferred leader region.
destination_region :
Cloud Spanner region the data is replicated to.
tag :
Type of transaction contributing to replication.
instance/data_boost/processing_unit_second_count
GA
(project)
Processing unit second
DELTA , INT64 , 1
spanner_instance
Total processing units used for DataBoost operations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
credential_id :
The IAM credential ID.
instance/disk_load
GA
(project)
Disk load
GAUGE , DOUBLE , 10^2.%
spanner_instance
Percent utilization of HDD disk load in an instance. Values are typically numbers between 0.0 and 1.0 (but might exceed 1.0), charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
instance/dual_region_quorum_availability
GA
(project)
Dual Region Quorum Availability
GAUGE , BOOL , 1
spanner_instance
Quorum availability signal for dual region instance configs. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
quorum_availability :
Quorum availability level.
instance/edition/feature_usage
GA
(project)
Feature usage
GAUGE , BOOL , 1
spanner_instance
Indicates if an edition feature is being used by the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
feature :
Edition feature.
database :
Database using the feature, if any.
used_in_query_path :
(BOOL)
Used in query path, or not.
instance/leader_percentage_by_region
GA
(project)
Leader percentage by region
GAUGE , DOUBLE , 10^2.%
spanner_instance
Percentage of leaders by cloud region. Values are typically numbers between 0.0 and 1.0, charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
region :
Cloud region containing the leaders.
instance/node_count
GA
(project)
Nodes
GAUGE , INT64 , 1
spanner_instance
Total number of nodes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/peak_split_cpu_usage_score
GA
(project)
Peak split cpu usage score
GAUGE , DOUBLE , 1
spanner_instance
Maximum cpu usage score observed in a database across all splits. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
instance/placement_row_limit
GA
(project)
Placement row limit
GAUGE , INT64 , 1
spanner_instance
Upper limit for placement rows. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
instance/placement_row_limit_per_processing_unit
GA
(project)
Placement row limit per processing unit
GAUGE , DOUBLE , 1
spanner_instance
Upper limit for placement rows per processing unit. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
instance/placement_rows
GA
(project)
Placement row count by database
GAUGE , INT64 , 1
spanner_instance
Number of placement rows in a database. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
instance/processing_units
GA
(project)
Processing units
GAUGE , INT64 , 1
spanner_instance
Total number of processing units. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/replica/autoscaling/high_priority_cpu_utilization_target
GA
(project)
Autoscaling high priority cpu utilization target for replica
GAUGE , DOUBLE , 10^2.%
spanner_instance
High priority CPU utilization target used for autoscaling replica. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/autoscaling/max_node_count
GA
(project)
Autoscaling max nodes for replica
GAUGE , INT64 , 1
spanner_instance
Maximum number of nodes autoscaler is allowed to allocate to the replica. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/autoscaling/max_processing_units
GA
(project)
Autoscaling max processing units for replica
GAUGE , INT64 , 1
spanner_instance
Maximum number of processing units autoscaler is allowed to allocate to the replica. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/autoscaling/min_node_count
GA
(project)
Autoscaling min nodes for replica
GAUGE , INT64 , 1
spanner_instance
Minimum number of nodes autoscaler is allowed to allocate to the replica. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/autoscaling/min_processing_units
GA
(project)
Autoscaling min processing units for replica
GAUGE , INT64 , 1
spanner_instance
Minimum number of processing units autoscaler is allowed to allocate to the replica. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/autoscaling/total_cpu_utilization_target
GA
(project)
Autoscaling total cpu utilization target for replica
GAUGE , DOUBLE , 10^2.%
spanner_instance
Total CPU utilization target used for autoscaling replica. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/cmek/total_keys
BETA
(project)
CMEK keys
GAUGE , INT64 , 1
spanner_instance
Number of CMEK keys identified by database and key revocation status. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
is_key_revoked :
(BOOL)
True if the CloudKMS key is revoked.
instance/replica/node_count
GA
(project)
Replica nodes
GAUGE , INT64 , 1
spanner_instance
Number of nodes allocated to each replica identified by location and replica type. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/replica/processing_units
GA
(project)
Replica processing units.
GAUGE , INT64 , 1
spanner_instance
Number of processing units allocated to each replica identified by location and replica type. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
location :
Replica location.
replica_type :
Replica type.
instance/schema_object_count_limit
GA
(project)
Schema objects count limit
GAUGE , INT64 , 1
spanner_instance
The schema object count limit for the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
instance/schema_objects
GA
(project)
Schema object count
GAUGE , INT64 , 1
spanner_instance
The total count of schema objects in the database. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
instance/session_count
GA
(project)
Sessions
GAUGE , INT64 , 1
spanner_instance
Number of sessions in use. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
instance/storage/columnar_used_bytes
BETA
(project)
Storage used (logical) for columnar storage
GAUGE , INT64 , By
spanner_instance
Storage used (logical) in bytes for columnar storage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
storage_class :
Storage type.
instance/storage/columnar_used_bytes_by_region
BETA
(project)
Storage used (logical) for columnar storage by region
GAUGE , INT64 , By
spanner_instance
Storage used (logical) in bytes for columnar storage by cloud region. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
storage_class :
Storage type.
instance/storage/combined/limit_bytes
GA
(project)
Storage limit (combined)
GAUGE , INT64 , By
spanner_instance
Storage limit (combined) for instance in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/storage/combined/limit_bytes_per_processing_unit
GA
(project)
Storage limit (combined) per processing unit
GAUGE , INT64 , By
spanner_instance
Storage limit (combined) per processing unit in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/storage/combined/utilization
GA
(project)
Storage utilization (combined)
GAUGE , DOUBLE , 10^2.%
spanner_instance
Storage used (combined) as a fraction of storage limit (combined). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/storage/limit_bytes
GA
(project)
Storage limit
GAUGE , INT64 , By
spanner_instance
Storage limit for instance in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_class :
Storage type.
instance/storage/limit_bytes_per_processing_unit
GA
(project)
Storage limit per processing unit
GAUGE , INT64 , By
spanner_instance
Storage limit per processing unit in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_class :
Storage type.
instance/storage/used_bytes
GA
(project)
Storage used
GAUGE , INT64 , By
spanner_instance
Storage used in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Target database.
storage_class :
Storage type.
instance/storage/utilization
GA
(project)
Storage utilization
GAUGE , DOUBLE , 10^2.%
spanner_instance
Storage used as a fraction of storage limit. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_class :
Storage type.
lock_stat/total/lock_wait_time
GA
(project)
Lock wait time
DELTA , DOUBLE , s
spanner_instance
Total lock wait time for lock conflicts recorded for the entire database. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
pending_restore_count
GA
(project)
Pending restore count
GAUGE , INT64 , 1
spanner.googleapis.com/Instance
Limits number of pending restores per instance. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
query_count
GA
(project)
Count of queries
DELTA , INT64 , 1
spanner_instance
Count of queries by database name, status, query type, and used optimizer version. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
status :
Request call result, ok=success.
query_type :
Type of query.
optimizer_version :
(INT64)
Optimizer version used by the query.
query_stat/total/bytes_returned_count
GA
(project)
Bytes returned count
DELTA , INT64 , By
spanner_instance
Number of data bytes that the queries returned, excluding transmission encoding overhead. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
query_stat/total/cpu_time
GA
(project)
Query cpu time
DELTA , DOUBLE , s
spanner_instance
Number of seconds of CPU time Cloud Spanner spent on operations to execute the queries. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
query_stat/total/execution_count
GA
(project)
Query execution count
DELTA , INT64 , 1
spanner_instance
Number of times Cloud Spanner saw queries during the interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
query_stat/total/failed_execution_count
GA
(project)
Query failures
DELTA , INT64 , 1
spanner_instance
Number of times queries failed during the interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
status :
failed status, one of [cancelled, timeout, error].
query_stat/total/query_latencies
GA
(project)
Query latencies
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of total length of time, in seconds, for query executions within the database. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
query_stat/total/remote_service_calls_count
GA
(project)
Remote service calls count
DELTA , INT64 , 1
spanner_instance
Count of remote service calls. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
service :
Target remote service.
response_code :
(INT64)
HTTP response code received, such as 200 or 500.
query_stat/total/remote_service_calls_latencies
GA
(project)
Remote service calls latencies
DELTA , DISTRIBUTION , ms
spanner_instance
Latency of remote service calls. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
service :
Target remote service.
response_code :
(INT64)
HTTP response code received, such as 200 or 500.
query_stat/total/remote_service_network_bytes_sizes
GA
(project)
Remote service network bytes
DELTA , DISTRIBUTION , By
spanner_instance
Network bytes exchanged with remote service. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
service :
Target remote service.
direction :
Direction of traffic: sent or received.
query_stat/total/remote_service_processed_rows_count
GA
(project)
Remote service rows count
DELTA , INT64 , 1
spanner_instance
Count of rows processed by a remote service. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
service :
Target remote service.
response_code :
(INT64)
HTTP response code received, such as 200 or 500.
query_stat/total/remote_service_processed_rows_latencies
GA
(project)
Remote service rows latencies
DELTA , DISTRIBUTION , ms
spanner_instance
Latency of rows processed by a remote service. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
service :
Target remote service.
response_code :
(INT64)
HTTP response code received, such as 200 or 500.
query_stat/total/returned_rows_count
GA
(project)
Rows returned count
DELTA , INT64 , 1
spanner_instance
Number of rows that the queries returned. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
query_stat/total/scanned_rows_count
GA
(project)
Rows scanned count
DELTA , INT64 , 1
spanner_instance
Number of rows that the queries scanned excluding deleted values. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
quota/internal/instance_admin_update_instance_requests/exceeded
ALPHA
(project)
Instance update requests quota exceeded error
DELTA , INT64 , 1
spanner.googleapis.com/Instance
Number of attempts to exceed the limit on quota metric spanner.googleapis.com/internal/instance_admin_update_instance_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/internal/instance_admin_update_instance_requests/limit
ALPHA
(project)
Instance update requests quota limit
GAUGE , INT64 , 1
spanner.googleapis.com/Instance
Current limit on quota metric spanner.googleapis.com/internal/instance_admin_update_instance_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/internal/instance_admin_update_instance_requests/usage
ALPHA
(project)
Instance update requests quota usage
DELTA , INT64 , 1
spanner.googleapis.com/Instance
Current usage on quota metric spanner.googleapis.com/internal/instance_admin_update_instance_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
quota/pending_restore_count/exceeded
GA
(project)
Pending restore count quota exceeded error
DELTA , INT64 , 1
spanner.googleapis.com/Instance
Number of attempts to exceed the limit on quota metric spanner.googleapis.com/pending_restore_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/pending_restore_count/limit
GA
(project)
Pending restore count quota limit
GAUGE , INT64 , 1
spanner.googleapis.com/Instance
Current limit on quota metric spanner.googleapis.com/pending_restore_count. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/pending_restore_count/usage
GA
(project)
Pending restore count quota usage
GAUGE , INT64 , 1
spanner.googleapis.com/Instance
Current usage on quota metric spanner.googleapis.com/pending_restore_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
read_stat/total/bytes_returned_count
GA
(project)
Bytes returned count
DELTA , INT64 , By
spanner_instance
Total number of data bytes that the reads returned excluding transmission encoding overhead. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
read_stat/total/client_wait_time
GA
(project)
Client wait time
DELTA , DOUBLE , s
spanner_instance
Number of seconds spent waiting due to throttling. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
read_stat/total/cpu_time
GA
(project)
Read cpu time
DELTA , DOUBLE , s
spanner_instance
Number of seconds of CPU time Cloud Spanner spent execute the reads excluding prefetch CPU and other overhead. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
read_stat/total/execution_count
GA
(project)
Read execution count
DELTA , INT64 , 1
spanner_instance
Number of times Cloud Spanner executed the read shapesduring the interval. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
read_stat/total/leader_refresh_delay
GA
(project)
Leader refresh delay
DELTA , DOUBLE , s
spanner_instance
Number of seconds spent coordinating reads across instances in multi-regionconfigurations. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
read_stat/total/locking_delays
GA
(project)
Locking delays
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of total time in seconds spent waiting due to locking. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
read_stat/total/returned_rows_count
GA
(project)
Rows returned count
DELTA , INT64 , 1
spanner_instance
Number of rows that the reads returned. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
row_deletion_policy/deleted_rows_count
GA
(project)
Rows deleted
DELTA , INT64 , 1
spanner_instance
Count of rows deleted by the policy since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
row_deletion_policy/processed_watermark_age
GA
(project)
Processed watermark age
GAUGE , INT64 , s
spanner_instance
Time between now and the read timestamp of the last successful execution. An execution happens as the background task deletes eligible data in batches and is successful even when there are rows that cannot be deleted. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
row_deletion_policy/undeletable_rows
GA
(project)
Total number of undeletable rows
GAUGE , INT64 , 1
spanner_instance
Number of rows in all tables in the database that can't be deleted. A row can't be deleted if, for example, it has so many child rows that a delete would exceed the transaction limit. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
database :
Target database.
transaction_stat/total/bytes_written_count
GA
(project)
Bytes written
DELTA , INT64 , By
spanner_instance
Number of bytes written by transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
transaction_stat/total/commit_attempt_count
GA
(project)
Transaction commit attempts
DELTA , INT64 , 1
spanner_instance
Number of commit attempts for transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
status :
Commit status ("success", "abort", or "precondition_failure")
transaction_stat/total/commit_retry_count
GA
(project)
Transaction commit retries
DELTA , INT64 , 1
spanner_instance
Number of commit attempts that are retries from previously aborted transaction attempts. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
transaction_stat/total/participants
GA
(project)
Transaction participants
DELTA , DISTRIBUTION , 1
spanner_instance
Distribution of total number of participants in each commit attempt. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
transaction_stat/total/transaction_latencies
GA
(project)
Transaction latencies
DELTA , DISTRIBUTION , s
spanner_instance
Distribution of total seconds takenfrom the first operation of the transaction to commit or abort. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
database :
Target database.
storage
Metrics from Cloud Storage .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with storage.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
anywhere_cache/ingested_bytes_count
BETA
(project)
Ingested Raw Bytes
DELTA , INT64 , By
gcs_bucket
Delta number of raw bytes (successfully) ingested into the cache, broken down by zone. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
cache_zone :
The zone of the cache being accessed.
anywhere_cache_zone :
The zone of the Anywhere Cache used to serve the request.
anywhere_cache/request_count
BETA
(project)
Request Count for Anywhere Cache
DELTA , INT64 , 1
gcs_bucket
Delta count of API calls, grouped by the API method name, response code, cache zone, and cache hit. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
The response code of the requests.
anywhere_cache_zone :
The zone of the Anywhere Cache used to serve the request.
anywhere_cache_hit :
(BOOL)
Whether the request was served from Anywhere Cache.
method :
The name of the API method called.
anywhere_cache/sent_bytes_count
BETA
(project)
Sent Bytes For Anywhere Cache
DELTA , INT64 , By
gcs_bucket
Delta count of bytes sent over the network, grouped by the API method name, response code, cache zone, and cache hit status. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
The response code of the requests.
anywhere_cache_zone :
The zone of the Anywhere Cache used to serve the request.
anywhere_cache_hit :
(BOOL)
Whether the request was served from Anywhere Cache.
method :
The name of the API method called.
anywhere_cache_metering/cache_storage_bytes_count
GA
(project)
Bytes in Cache
GAUGE , INT64 , By
storage.googleapis.com/Storage
Number of bytes in cache, broken down by zone.
cache_zone :
Cache zone.
anywhere_cache_metering/cache_storage_kbsec_count
GA
(project)
Bytes in Anywhere Cache over time in Kibibyte-secs.
DELTA , INT64 , KiBy.s
storage.googleapis.com/Storage
The delta of Anywhere Cache Storage in Kibibyte-secs broken down by Anywhere Cache zone.
cache_zone :
Cache zone.
anywhere_cache_metering/eviction_byte_count
GA
(project)
Evicted Bytes
DELTA , INT64 , By
storage.googleapis.com/Storage
Delta number of bytes evicted from cache, broken down by zone.
cache_zone :
Cache zone.
anywhere_cache_metering/ingested_billable_bytes_count
GA
(project)
Ingested Billable Bytes
DELTA , INT64 , By
storage.googleapis.com/Storage
Delta number of billable bytes (successfully) ingested into the cache, broken down by zone.
cache_zone :
Cache zone.
api/lro_count
GA
(project)
Operation count
DELTA , INT64 , 1
gcs_bucket
Count of completed long-running operations, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
type :
Operation type, such as "bulk-restore-objects" or "rename-folder".
canonical_code :
Canonical code of the operation.error field, such as "OK" or "CANCELLED".
api/request_count
GA
(project)
Request count
DELTA , INT64 , 1
gcs_bucket
Delta count of API calls, grouped by the API method name and response code. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
The response code of the requests.
method :
The name of the API method called.
authn/authentication_count
BETA
(project)
Authentication count
DELTA , INT64 , 1
gcs_bucket
Count of HMAC/RSA signed requests grouped by authentication method and access id. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
authentication_method :
The authentication method (HMAC/RSA) used for the request.
response_code :
The response code of the requests.
method :
The name of the API method called.
access_id :
The access id of the authentication key.
authz/acl_based_object_access_count
GA
(project)
Object-ACL based access count
DELTA , INT64 , 1
gcs_bucket
Delta count of requests that result in an object being granted access solely due to object ACLs. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
authz/acl_operations_count
GA
(project)
ACLs usage
DELTA , INT64 , 1
gcs_bucket
Usage of ACL operations broken down by type. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
acl_operation :
Type of ACL operation.
authz/object_specific_acl_mutation_count
GA
(project)
Object ACL changes
DELTA , INT64 , 1
gcs_bucket
Delta count of changes made to object specific ACLs. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
autoclass/transition_operation_count
GA
(project)
Autoclass transition count
DELTA , INT64 , 1
gcs_bucket
Total number of storage class transition operations initiated by Autoclass. Sampled every 300 seconds. After sampling, data is not visible for up to 1200 seconds.
source_storage_class :
The source storage class of the transition.
destination_storage_class :
The destination storage class of the transition.
autoclass/transitioned_bytes_count
GA
(project)
Autoclass transitioned bytes count
DELTA , INT64 , By
gcs_bucket
Total bytes transitioned by Autoclass. Sampled every 300 seconds. After sampling, data is not visible for up to 1200 seconds.
source_storage_class :
The source storage class of the transition.
destination_storage_class :
The destination storage class of the transition.
client/grpc/client/attempt/duration
BETA
(project)
End-to-end time taken to complete an RPC attempt
CUMULATIVE , DISTRIBUTION , s
storage.googleapis.com/Client
End-to-end time taken to complete an RPC attempt including the time it takes to pick a subchannel.
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_status :
gRPC server status code received, e.g. "OK", "CANCELLED", "DEADLINE_EXCEEDED".
grpc_method :
Full gRPC method name, including package, service and method.
grpc_target :
Canonicalized target URI used when creating gRPC Channel.
client/grpc/client/attempt/rcvd_total_compressed_message_size
BETA
(project)
Total bytes (compressed but not encrypted) received across all response messages (metadata excluded) per RPC attempt
CUMULATIVE , DISTRIBUTION , By
storage.googleapis.com/Client
Total bytes (compressed but not encrypted) received across all response messages (metadata excluded) per RPC attempt; does not include grpc or transport framing bytes.
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_status :
gRPC server status code received, e.g. "OK", "CANCELLED", "DEADLINE_EXCEEDED".
grpc_method :
Full gRPC method name, including package, service and method.
grpc_target :
Canonicalized target URI used when creating gRPC Channel.
client/grpc/client/attempt/sent_total_compressed_message_size
BETA
(project)
Total bytes (compressed but not encrypted) sent across all request messages (metadata excluded) per RPC attempt
CUMULATIVE , DISTRIBUTION , By
storage.googleapis.com/Client
Total bytes (compressed but not encrypted) sent across all request messages (metadata excluded) per RPC attempt; does not include grpc or transport framing bytes.
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_status :
gRPC server status code received, e.g. "OK", "CANCELLED", "DEADLINE_EXCEEDED".
grpc_method :
Full gRPC method name, including package, service and method.
grpc_target :
Canonicalized target URI used when creating gRPC Channel.
client/grpc/client/attempt/started
BETA
(project)
The total number of RPC attempts started
CUMULATIVE , INT64 , {attempt}
storage.googleapis.com/Client
The total number of RPC attempts started, including those that have not completed.
grpc_method :
Full gRPC method name, including package, service and method.
grpc_target :
Canonicalized target URI used when creating gRPC Channel.
client/grpc/client/call/duration
BETA
(project)
End-to-end time the gRPC library takes to complete an RPC from the application’s perspective.
CUMULATIVE , DISTRIBUTION , s
storage.googleapis.com/Client
This metric aims to measure the end-to-end time the gRPC library takes to complete an RPC from the application’s perspective.
grpc_status :
gRPC server status code received, e.g. "OK", "CANCELLED", "DEADLINE_EXCEEDED".
grpc_method :
Full gRPC method name, including package, service and method.
grpc_target :
Canonicalized target URI used when creating gRPC Channel.
client/grpc/lb/rls/cache_entries
BETA
(project)
Number of entries in the RLS cache
GAUGE , INT64 , {entry}
storage.googleapis.com/Client
Number of entries in the RLS cache.
grpc_lb_rls_server_target :
The target URI of the RLS server to talk to.
grpc_lb_rls_instance_uuid :
A UUID for an individual RLS client instance. The value is not meaningful by itself, but it is useful for differentiating between RLS client instances in cases where there are either multiple instances in the same gRPC channel or where there are multiple channels to the same target.
grpc_target :
Indicates the target of the gRPC channel in which WRR is used.
client/grpc/lb/rls/cache_size
BETA
(project)
The current size of the RLS cache
GAUGE , INT64 , By
storage.googleapis.com/Client
The current size of the RLS cache.
grpc_lb_rls_server_target :
The target URI of the RLS server to talk to.
grpc_lb_rls_instance_uuid :
A UUID for an individual RLS client instance. The value is not meaningful by itself, but it is useful for differentiating between RLS client instances in cases where there are either multiple instances in the same gRPC channel or where there are multiple channels to the same target.
grpc_target :
Indicates the target of the gRPC channel in which RLS is used.
client/grpc/lb/rls/default_target_picks
BETA
(project)
Number of LB picks sent to the default target
CUMULATIVE , INT64 , {pick}
storage.googleapis.com/Client
Number of LB picks sent to the default target.
grpc_lb_rls_server_target :
The target URI of the RLS server to talk to.
grpc_lb_rls_data_plane_target :
A target string used by RLS for routing data plane traffic. The value is either returned by the RLS server for a particular key or configured as the default target in the RLS config.
grpc_lb_pick_result :
The result of an LB pick. This will be one of the values "complete", "fail", or "drop".
grpc_target :
Indicates the target of the gRPC channel in which RLS is used.
client/grpc/lb/rls/failed_picks
BETA
(project)
Number of LB failed picks
CUMULATIVE , INT64 , {pick}
storage.googleapis.com/Client
Number of LB picks failed due to either a failed RLS request or the RLS channel being throttled.
grpc_lb_rls_server_target :
The target URI of the RLS server to talk to.
grpc_target :
Indicates the target of the gRPC channel in which RLS is used.
client/grpc/lb/rls/target_picks
BETA
(project)
Number of LB picks sent to each RLS target
CUMULATIVE , INT64 , {pick}
storage.googleapis.com/Client
Number of LB picks sent to each RLS target. Note that if the default target is also returned by the RLS server, RPCs sent to that target from the cache will be counted in this metric, not in grpc.rls.default_target_picks.
grpc_lb_rls_server_target :
The target URI of the RLS server to talk to.
grpc_lb_rls_data_plane_target :
A target string used by RLS for routing data plane traffic. The value is either returned by the RLS server for a particular key or configured as the default target in the RLS config.
grpc_lb_pick_result :
The result of an LB pick. This will be one of the values "complete", "fail", or "drop".
grpc_target :
Indicates the target of the gRPC channel in which RLS is used.
client/grpc/lb/wrr/endpoint_weight_not_yet_usable
BETA
(project)
Number of unusable endpoints
CUMULATIVE , INT64 , {endpoint}
storage.googleapis.com/Client
Number of endpoints from each scheduler update that do not yet have usable weight information (i.e., either the load report has not yet been received, or it is within the blackout period).
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_target :
Indicates the target of the gRPC channel in which WRR is used.
client/grpc/lb/wrr/endpoint_weight_stale
BETA
(project)
Number of stale endpoints
CUMULATIVE , INT64 , {endpoint}
storage.googleapis.com/Client
Number of endpoints from each scheduler update whose latest weight is older than the expiration period.
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_target :
Indicates the target of the gRPC channel in which WRR is used.
client/grpc/lb/wrr/endpoint_weights
BETA
(project)
Endpoint weight ranges
CUMULATIVE , DISTRIBUTION , {weight}
storage.googleapis.com/Client
The histogram buckets will be endpoint weight ranges. Each bucket will be a counter that is incremented once for every endpoint whose weight is within that range. Note that endpoints without usable weights will have weight 0.
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_target :
Indicates the target of the gRPC channel in which WRR is used.
client/grpc/lb/wrr/rr_fallback
BETA
(project)
RR fallbacks caused the WRR policy
CUMULATIVE , INT64 , {update}
storage.googleapis.com/Client
Number of scheduler updates in which there were not enough endpoints with valid weight, which caused the WRR policy to fall back to RR behavior.
grpc_lb_locality :
The locality to which the traffic is being sent. This will be set to the resolver attribute passed down from the weighted_target policy, or the empty string if the resolver attribute is unset.
grpc_target :
Indicates the target of the gRPC channel in which WRR is used.
client/grpc/xds_client/connected
BETA
(project)
Whether or not the xDS client currently has a working ADS stream to the xDS server
GAUGE , INT64 , {bool}
storage.googleapis.com/Client
Whether or not the xDS client currently has a working ADS stream to the xDS server. For a given server, this will be set to 1 when the stream is initially created. It will be set to 0 when we have a connectivity failure or when the ADS stream fails without seeing a response message, as per A57. Once set to 0, it will be reset to 1 when we receive the first response on an ADS stream.
grpc_xds_server :
The target URI of the xDS server with which the XdsClient is communicating.
grpc_target :
For clients, indicates the target of the gRPC channel in which the XdsClient is used. For servers, will be the string "#server".
client/grpc/xds_client/resource_updates_invalid
BETA
(project)
A counter of resources received that were considered invalid
CUMULATIVE , INT64 , {resource}
storage.googleapis.com/Client
A counter of resources received that were considered invalid.
grpc_xds_server :
The target URI of the xDS server with which the XdsClient is communicating.
grpc_xds_resource_type :
Indicates an xDS resource type, such as "envoy.config.listener.v3.Listener".
grpc_target :
For clients, indicates the target of the gRPC channel in which the XdsClient is used. For servers, will be the string "#server".
client/grpc/xds_client/resource_updates_valid
BETA
(project)
A counter of resources received that were considered valid
CUMULATIVE , INT64 , {resource}
storage.googleapis.com/Client
A counter of resources received that were considered valid. The counter will be incremented even for resources that have not changed.
grpc_xds_server :
The target URI of the xDS server with which the XdsClient is communicating.
grpc_xds_resource_type :
Indicates an xDS resource type, such as "envoy.config.listener.v3.Listener".
grpc_target :
For clients, indicates the target of the gRPC channel in which the XdsClient is used. For servers, will be the string "#server".
client/grpc/xds_client/resources
BETA
(project)
Number of xDS resources
GAUGE , INT64 , {resource}
storage.googleapis.com/Client
Number of xDS resources.
grpc_xds_authority :
The xDS authority. The value will be "#old" for old-style non-xdstp resource names.
grpc_xds_resource_type :
Indicates an xDS resource type, such as "envoy.config.listener.v3.Listener".
grpc_xds_cache_state :
Indicates the cache state of an xDS resource.
grpc_target :
For clients, indicates the target of the gRPC channel in which the XdsClient is used. For servers, will be the string "#server".
client/grpc/xds_client/server_failure
BETA
(project)
A counter of xDS servers going from healthy to unhealthy
CUMULATIVE , INT64 , {failure}
storage.googleapis.com/Client
A counter of xDS servers going from healthy to unhealthy. A server goes unhealthy when we have a connectivity failure or when the ADS stream fails without seeing a response message, as per gRFC A57.
grpc_xds_server :
The target URI of the xDS server with which the XdsClient is communicating.
grpc_target :
For clients, indicates the target of the gRPC channel in which the XdsClient is used. For servers, will be the string "#server".
network/received_bytes_count
GA
(project)
Received bytes
DELTA , INT64 , By
gcs_bucket
Delta count of bytes received over the network, grouped by the API method name and response code. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
The response code of the requests.
method :
The name of the API method called.
network/sent_bytes_count
GA
(project)
Sent bytes
DELTA , INT64 , By
gcs_bucket
Delta count of bytes sent over the network, grouped by the API method name and response code. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
response_code :
The response code of the requests.
method :
The name of the API method called.
quota/anywhere_cache_storage_size/exceeded
GA
(project)
Anywhere Cache Storage Size quota exceeded error
DELTA , INT64 , 1
storage.googleapis.com/Storage
Number of attempts to exceed the limit on quota metric storage.googleapis.com/anywhere_cache_storage_size. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
anywhere_cache_id :
The ID of the cache.
quota/anywhere_cache_storage_size/limit
GA
(project)
Anywhere Cache Storage Size quota limit
GAUGE , INT64 , KiBy
storage.googleapis.com/Storage
Current limit on quota metric storage.googleapis.com/anywhere_cache_storage_size. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
anywhere_cache_id :
The ID of the cache.
quota/anywhere_cache_storage_size/usage
GA
(project)
Anywhere Cache Storage Size quota usage
GAUGE , INT64 , KiBy
storage.googleapis.com/Storage
Current usage on quota metric storage.googleapis.com/anywhere_cache_storage_size. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
anywhere_cache_id :
The ID of the cache.
quota/dualregion_anywhere_cache_egress_bandwidth/limit
GA
(project)
Dualregion Anywhere Cache Egress Bandwidth quota limit
GAUGE , INT64 , bit
storage.googleapis.com/Project
Current limit on quota metric storage.googleapis.com/dualregion_anywhere_cache_egress_bandwidth. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
dualregion_location :
The dualregion location of the GCS bucket.
quota/dualregion_anywhere_cache_egress_bandwidth/usage
GA
(project)
Dualregion Anywhere Cache Egress Bandwidth quota usage
DELTA , INT64 , bit
storage.googleapis.com/Project
Current usage on quota metric storage.googleapis.com/dualregion_anywhere_cache_egress_bandwidth. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
dualregion_location :
The dualregion location of the GCS bucket.
quota/dualregion_google_egress_bandwidth/limit
GA
(project)
Dualregion Google Egress Bandwidth quota limit
GAUGE , INT64 , bit
storage.googleapis.com/Project
Current limit on quota metric storage.googleapis.com/dualregion_google_egress_bandwidth. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
dualregion_location :
The dualregion location of the GCS bucket.
quota/dualregion_google_egress_bandwidth/usage
GA
(project)
Dualregion Google Egress Bandwidth quota usage
DELTA , INT64 , bit
storage.googleapis.com/Project
Current usage on quota metric storage.googleapis.com/dualregion_google_egress_bandwidth. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
dualregion_location :
The dualregion location of the GCS bucket.
quota/dualregion_internet_egress_bandwidth/limit
GA
(project)
Dualregion Internet Egress Bandwidth quota limit
GAUGE , INT64 , bit
storage.googleapis.com/Project
Current limit on quota metric storage.googleapis.com/dualregion_internet_egress_bandwidth. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
dualregion_location :
The dualregion location of the GCS bucket.
quota/dualregion_internet_egress_bandwidth/usage
GA
(project)
Dualregion Internet Egress Bandwidth quota usage
DELTA , INT64 , bit
storage.googleapis.com/Project
Current usage on quota metric storage.googleapis.com/dualregion_internet_egress_bandwidth. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
dualregion_location :
The dualregion location of the GCS bucket.
quota/total_core_bytes/exceeded
ALPHA
(project)
Total Storage Size for Core Buckets (GiB) quota exceeded error
DELTA , INT64 , 1
storage.googleapis.com/Project
Number of attempts to exceed the limit on quota metric storage.googleapis.com/total_core_bytes. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
bucket_location :
The location of the bucket.
quota/total_core_bytes/limit
ALPHA
(project)
Total Storage Size for Core Buckets (GiB) quota limit
GAUGE , INT64 , GiBy
storage.googleapis.com/Project
Current limit on quota metric storage.googleapis.com/total_core_bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
bucket_location :
The location of the bucket.
quota/total_core_bytes/usage
ALPHA
(project)
Total Storage Size for Core Buckets (GiB) quota usage
GAUGE , INT64 , GiBy
storage.googleapis.com/Project
Current usage on quota metric storage.googleapis.com/total_core_bytes. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
bucket_location :
The location of the bucket.
replication/meeting_rpo
GA
(project)
Meeting RPO
GAUGE , BOOL , 1
gcs_bucket
A boolean value of whether objects are meeting RPO or not. For ASYNC_TURBO, RPO is 15 minutes; For DEFAULT, RPO is 12 hours. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
rpo :
Recovery Point Objective of the bucket, one of [ASYNC_TURBO - turbo replication, DEFAULT - default replication].
replication/missing_rpo_minutes_last_30d
GA
(project)
Minutes missing Recovery Point Objective (RPO) in last 30d
GAUGE , INT64 , 1
gcs_bucket
Total number of minutes where the Recovery Point Objective (RPO) was missed, as measured over the most recent 30 days. The metric is delayed by storage.googleapis.com/replication/v2/time_since_metrics_updated. Sampled every 60 seconds. After sampling, data is not visible for up to 3720 seconds.
rpo :
Recovery Point Objective of the bucket, one of [ASYNC_TURBO - turbo replication, DEFAULT - default replication].
replication/object_replications_last_30d
DEPRECATED
(project)
Object replications in last 30d
GAUGE , INT64 , 1
gcs_bucket
Total number of object replications, as measured over the most recent 30 days. The metric can be broken down by whether each object replication was meeting or missing Recovery Point Objective (RPO). The metric is delayed by storage.googleapis.com/replication/time_since_metrics_updated. Sampled every 60 seconds. After sampling, data is not visible for up to 3720 seconds.
rpo :
Recovery Point Objective of the bucket, one of [ASYNC_TURBO - turbo replication, DEFAULT - default replication].
meeting_rpo :
(BOOL)
Whether the object replication was meeting Recovery Point Objective (RPO).
replication/time_since_metrics_updated
DEPRECATED
(project)
Time since replication metrics were updated
GAUGE , INT64 , s
gcs_bucket
Seconds since the last time when storage.googleapis.com/replication/* metrics were calculated. Sampled every 60 seconds. After sampling, data is not visible for up to 3720 seconds.
rpo :
Recovery Point Objective of the bucket, one of [ASYNC_TURBO - turbo replication, DEFAULT - default replication].
replication/turbo_max_delay
GA
(project)
Maximum delay in Turbo replication
GAUGE , INT64 , s
gcs_bucket
Delay represents the age in seconds of the oldest object that has not been replicated. Objects uploaded before this time have been replicated. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
replication/v2/object_replications_last_30d
GA
(project)
Object replications in last 30d
GAUGE , INT64 , 1
gcs_bucket
Total number of object replications, as measured over the most recent 30 days. The metric can be broken down by whether each object replication was meeting or missing the design target. The metric is delayed by storage.googleapis.com/replication/v2/time_since_metrics_updated. Sampled every 60 seconds. After sampling, data is not visible for up to 3720 seconds.
rpo :
Recovery Point Objective of the bucket, one of [ASYNC_TURBO - turbo replication, DEFAULT - default replication].
target :
Replication design target. ASYNC_TURBO has one design target - 15 min RPO. DEFAULT has two design targets - 99.9% of newly written objects within 1 hr, and 12 hour RPO.
meeting_target :
(BOOL)
Whether the object replication was meeting the design target.
replication/v2/time_since_metrics_updated
GA
(project)
Time since replication metrics were updated
GAUGE , INT64 , s
gcs_bucket
Seconds since the last time when metric storage.googleapis.com/replication/missing_rpo_minutes_last_30dand /replication/v2/object_replications_last_30d were calculated. Sampled every 60 seconds. After sampling, data is not visible for up to 3720 seconds.
rpo :
Recovery Point Objective of the bucket, one of [ASYNC_TURBO - turbo replication, DEFAULT - default replication].
target :
Replication design target. ASYNC_TURBO has one design target - 15 min RPO. DEFAULT has two design targets - 99.9% of newly written objects within 1 hr, and 12 hour RPO.
storage/object_count
GA
(project)
Object count
GAUGE , INT64 , 1
gcs_bucket
Total number of objects per bucket, grouped by storage class. Soft-deleted objects are not included in the total; use the updated v2 metric for a breakdown of total usage including soft-deleted objects. This value is measured once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the day. Buckets with no objects in them are not tracked by this metric. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 690 seconds.
storage_class :
Storage class of the data.
storage/total_byte_seconds
GA
(project)
Total byte seconds
GAUGE , DOUBLE , By.s
gcs_bucket
Total daily storage in byte*seconds used by the bucket, grouped by storage class. Soft-deleted objects are not included in the total; use the updated v2 metric for a breakdown of total usage including soft-deleted objects. This value is measured once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the day. Buckets with no objects in them are not tracked by this metric. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 690 seconds.
storage_class :
Storage class of the data.
storage/total_bytes
GA
(project)
Total bytes
GAUGE , DOUBLE , By
gcs_bucket
Total size of all objects in the bucket, grouped by storage class. Soft-deleted objects are not included in the total; use the updated v2 metric for a breakdown of total usage including soft-deleted objects. This value is measured once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the day. Buckets with no objects in them are not tracked by this metric. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 690 seconds.
storage_class :
Storage class of the data.
storage/v2/deleted_bytes
GA
(project)
Deleted Bytes (v2)
DELTA , INT64 , By
gcs_bucket
Delta count of deleted bytes per bucket, grouped by storage class. This value is measured and reported once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. On days with no deletes, no datapoint is exported for this metric. Sampled every 86400 seconds. After sampling, data is not visible for up to 86400 seconds.
storage_class :
Storage class of the data.
storage/v2/total_byte_seconds
GA
(project)
Total byte seconds (v2)
GAUGE , DOUBLE , By.s
gcs_bucket
Total daily storage in byte*seconds used by the bucket, grouped by storage class and type where type can be live-object, noncurrent-object, soft-deleted-object and multipart-upload. This value is measured once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the day. Buckets with no objects in them are not tracked by this metric. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 690 seconds.
storage_class :
Storage class of the data.
type :
Type of the data.
storage/v2/total_bytes
GA
(project)
Total bytes (v2)
GAUGE , DOUBLE , By
gcs_bucket
Total size of all objects and multipart-uploads in the bucket, grouped by storage class and type where type can be live-object, noncurrent-object, soft-deleted-object and multipart-upload. This value is measured once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the day. Buckets with no objects in them are not tracked by this metric. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 690 seconds.
storage_class :
Storage class of the data.
type :
Type of the data.
storage/v2/total_count
GA
(project)
Total count (v2)
GAUGE , INT64 , 1
gcs_bucket
Total number of objects and multipart-uploads per bucket, grouped by storage class and type where type can be live-object, noncurrent-object, soft-deleted-object and multipart-upload. This value is measured once per day, and there might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the day. Buckets with no objects in them are not tracked by this metric. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 690 seconds.
storage_class :
Storage class of the data.
type :
Type of the data.
storagetransfer
Metrics from Storage Transfer Service .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with storagetransfer.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
agent/connected
BETA
(project)
Agent connected status
GAUGE , BOOL ,
transfer_service_agent
Indicates whether or not a Transfer Service agent is connected. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
agent/transferred_bytes_count
BETA
(project)
Agent transfer delta
DELTA , INT64 , By
transfer_service_agent
Delta of bytes transferred by a Transfer Service agent. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
transferjob/copied_bytes_count
BETA
(project)
Copied bytes count
DELTA , INT64 , By
storage_transfer_job
Number of bytes copied to the data sink. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
The status of copying the bytes; can be 'succeeded', 'skipped' due to sync, or 'failed'.
transferjob/copied_objects_count
BETA
(project)
Copied objects count
DELTA , INT64 , 1
storage_transfer_job
Number of objects copied to the data sink. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
The status of copying the objects; can be 'succeeded', 'skipped' due to sync, or 'failed'.
transferjob/deleted_bytes_count
BETA
(project)
Deleted bytes count
DELTA , INT64 , By
storage_transfer_job
Number of bytes deleted from the data source or sink. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
The status of deleting the bytes; can be 'succeeded' or 'failed'.
origin :
The location where the bytes are deleted; can be 'source' or 'sink'.
transferjob/deleted_objects_count
BETA
(project)
Deleted objects count
DELTA , INT64 , 1
storage_transfer_job
Number of objects deleted from the data source or sink. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
The status of deleting the objects; can be 'succeeded' or 'failed'.
origin :
The location where the objects are deleted; can be 'source' or 'sink'.
transferjob/error_count
BETA
(project)
Error count
DELTA , INT64 , 1
storage_transfer_job
Number of errors encountered during the transfer, grouped by canonical error code. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
code :
The canonical error code of the error, such as 'NOT_FOUND' or 'PERMISSION_DENIED'.
transferjob/found_bytes_count
BETA
(project)
Found bytes count
DELTA , INT64 , By
storage_transfer_job
Number of bytes found that are scheduled to be transferred or deleted, excluding any that are filtered based on object conditions or skipped due to sync. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
origin :
The location where the bytes are found; can be 'source' or 'sink'.
transferjob/found_objects_count
BETA
(project)
Found objects count
DELTA , INT64 , 1
storage_transfer_job
Number of objects found that are scheduled to be transferred or deleted, excluding any that are filtered based on object conditions or skipped due to sync. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
origin :
The location where the objects are found; can be 'source' or 'sink'.
transferjob/object_replication_count
BETA
(project)
Replicated objects count
DELTA , INT64 , 1
storage_transfer_job
The number of objects replicated via Cross-bucket replication. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
The status of the object replication can be 'succeeded' or 'failed'.
source_bucket :
The name of the source bucket.
destination_bucket :
The name of the destination bucket.
transferjob/replication_latency
BETA
(project)
Replication latency
DELTA , DISTRIBUTION , ms
storage_transfer_job
Completion latency for the object to be replicated via Cross-bucket replication. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
source_bucket :
The name of the source bucket.
destination_bucket :
The name of the destination bucket.
telcoautomation
Metrics from Telecom Network Automation .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with telcoautomation.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
deployment/update_count
BETA
(project)
Deployment Updates
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Total count of the 'updates' to the NFDeployment, with specific status codes.
source :
The source of the status could be deployment creation, deletion or an EdgeEvent.
status :
Status of the update.
deployment/update_failures
BETA
(project)
Deployment Update Failures
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Total count of the 'updates' failed to be written.
edgecontainer/request_count
BETA
(project)
Edgecontainer Requests
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Requests to EdgeContainer API.
resource_type :
The type of resource (EdgeCluster, EdgeMahcine etc.) that request is based upon.
operation_type :
The operation type (create, delete etc.) of the request.
status :
Status of the request.
edgecontainer/update_count
BETA
(project)
Edgecontainer Updates
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Total count of the 'updates' to the EdgeContainer CRs, with specific status code.
resource_type :
The type of resource: EdgeCluster, EdgeMahcine etc.
status :
Status of the update.
edgecontainer/update_failures
BETA
(project)
Edgecontainer Update Failures
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Total count of the 'updates' failed to be written.
edgenetwork/request_count
BETA
(project)
Edgenetwork Requests
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Requests to EdgeNetwork API.
resource_type :
The type of resource (EdgeRouter, EdgeSubnet etc.) that request is based upon.
operation_type :
The operation type (create, delete etc.) of the request.
status :
Status of the request.
edgenetwork/update_count
BETA
(project)
Edgenetwork Updates
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Total count of the 'updates' to the EdgeNetwork CRs, with specific status code.
resource_type :
The type of resource: EdgeRouter, EdgeSubnet etc.
status :
Status of the update.
edgenetwork/update_failures
BETA
(project)
Edgenetwork Update Failures
CUMULATIVE , INT64 , 1
telcoautomation.googleapis.com/OrchestrationCluster
Total count of the 'updates' failed to be written.
tpu
Metrics from Cloud TPU .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with tpu.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
accelerator/duty_cycle
GA
(project)
Accelerator Duty Cycle
GAUGE , DOUBLE , %
tpu.googleapis.com/GceTpuWorker
Percentage of time over the sample period during which the accelerator was actively processing. Values are in the range of [0,100].
accelerator_id :
Device Id of Accelerator.
accelerator/memory_bandwidth_utilization
GA
(project)
Accelerator Memory Bandwidth Utilization
GAUGE , DOUBLE , %
tpu.googleapis.com/GceTpuWorker
Current percentage of the accelerator memory bandwidth that is being used. Computed by dividing the memory bandwidth used over a sample period by the maximum supported bandwidth over the same sample period.
accelerator_id :
Device Id of Accelerator.
accelerator/memory_total
GA
(project)
Accelerator Total Memory
GAUGE , INT64 , By
tpu.googleapis.com/GceTpuWorker
Total accelerator memory currently allocated in bytes.
accelerator_id :
Device Id of Accelerator.
accelerator/memory_used
GA
(project)
Accelerator Memory Used
GAUGE , INT64 , By
tpu.googleapis.com/GceTpuWorker
Total accelerator memory currently used in bytes.
accelerator_id :
Device Id of Accelerator.
accelerator/tensorcore_utilization
GA
(project)
Accelerator TensorCore Utilization
GAUGE , DOUBLE , %
tpu.googleapis.com/GceTpuWorker
Current percentage of the Tensorcore that is utilized. Computed by dividing the Tensorcore operations that were performed over a sample period by the supported number of Tensorcore operations over the same sample period.
accelerator_id :
Device Id of Accelerator.
container/cpu/utilization
BETA
(project)
Container CPU utilization
GAUGE , DOUBLE , %
tpu_worker
Current CPU utilization of the docker container on the TPU worker. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
container_name :
The docker container name.
container/memory/usage
BETA
(project)
Container memory usage
GAUGE , DOUBLE , By
tpu_worker
Current memory usage of the docker container on the TPU worker. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
container_name :
The docker container name.
cpu/utilization
BETA
(project)
CPU utilization
GAUGE , DOUBLE , %
tpu_worker
Current CPU utilization on the TPU worker, represented as a percentage. Values are typically numbers between 0.0 and 100.0, but might exceed 100.0. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
core :
The CPU core in use.
instance/interruption_count
BETA
(project)
Interruption Count
GAUGE , INT64 , 1
tpu.googleapis.com/GceTpuWorker
Interruptions are system evictions of infrastructure while the customer is in control of that infrastructure. This metric is the current count of interruptions by type and reason. The stream is often undefined when the count is zero. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
instance_name :
The name of the VM instance.
interruption_type :
The top-level interruption type.
interruption_reason :
The reason for the interruption.
instance/uptime_total
GA
(project)
Uptime Total
GAUGE , INT64 , s
tpu.googleapis.com/GceTpuWorker
Elapsed time since the VM was started, in seconds. After sampling, data is not visible for up to 120 seconds. When VM is Stopped the time is not calculated. On starting the VM again, the timer will reset to 0 for that VM. Sampled every 60 seconds. After sampling, data is not visible for up to 125 seconds.
memory/usage
BETA
(project)
Memory usage
GAUGE , INT64 , By
tpu_worker
Memory usage in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
multislice/accelerator/device_to_host_transfer_latencies
GA
(project)
Device to Host Transfer Latencies
CUMULATIVE , DISTRIBUTION , us
tpu.googleapis.com/GceTpuWorker
Cumulative distribution of device to host transfer latency for each chunk of data. A latency starts when the request for data to be transferred to the host is issued and ends when an acknowledgement is received that the transfer of data has completed.
buffer_size :
Size of the buffer.
multislice/accelerator/host_to_device_transfer_latencies
GA
(project)
Host to Device Transfer Latencies
CUMULATIVE , DISTRIBUTION , us
tpu.googleapis.com/GceTpuWorker
Cumulative distribution of host to device transfer latency for each chunk of data of multislice traffic. A latency starts when the request for data to be transferred to the device is issued and ends when an acknowledgement is received that the transfer of data has completed.
buffer_size :
Size of the buffer.
multislice/network/collective_end_to_end_latencies
GA
(project)
Collective End to End Latencies
CUMULATIVE , DISTRIBUTION , us
tpu.googleapis.com/GceTpuWorker
Cumulative distribution of end to end collective latency for multislice traffic. A latency starts when the request for the collective is issued and ends when an acknowledgement is received that the transfer of data has completed.
input_size :
Size of the buffer.
collective_type :
Collective operation type.
multislice/network/dcn_transfer_latencies
GA
(project)
DCN Transfer Latencies
CUMULATIVE , DISTRIBUTION , us
tpu.googleapis.com/GceTpuWorker
Cumulative distribution of network-transfer latencies for multislice traffic. A latency starts when the request for data to be transferred over the DCN is issued and ends when an acknowledgement is received that the transfer of data has completed.
buffer_size :
Size of the buffer.
type :
Protocol type.
network/received_bytes_count
BETA
(project)
Network bytes received
DELTA , INT64 , By
tpu_worker
Cumulative bytes of data this server has received over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
network/sent_bytes_count
BETA
(project)
Network bytes sent
DELTA , INT64 , By
tpu_worker
Cumulative bytes of data this server has sent over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tpu/mxu/utilization
BETA
(project)
MXU utilization
GAUGE , DOUBLE , %
tpu_worker
Current MXU utilization on the TPU worker, represented as a percentage. Values are typically numbers between 0.0 and 100.0. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tpu/tensorcore/idle_duration
BETA
(project)
Tensorcore idle duration
GAUGE , INT64 , s
tpu_worker
The number of seconds tensorcore has been idle for. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
chip :
The chip ID.
trafficdirector
Metrics from Cloud Service Mesh .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with trafficdirector.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
xds/server/connected_clients
GA
(project)
Connected clients
GAUGE , INT64 , 1
gateway_scope
gce_network
mesh
The number of clients connected to Traffic Director. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
client_type :
Type of xDS_client connected to Traffic Director, one of [ENVOY, GRPC_JAVA, GRPC_CPP GRPC_PYTHON, GRPC_GO, GRPC_RUBY, GRPC_PHP, GRPC_NODE, GRPC_CSHARP, UNKNOWN].
api_version :
The xDS API version used by xDS clients to connect to Traffic Director, one of [V2, V3].
client_zone :
The Google Cloud zone where xDS clients are running.
xds/server/request_count
GA
(project)
Request count
DELTA , INT64 , 1
gce_backend_service
The number of requests served by a backend service. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
source_region :
The Google Cloud region which is the source of the request.
destination_region :
The Google Cloud region which is the destination of the request.
status :
The status of the request, one of [ISSUED, SUCCESS, ERROR].
xds/server/request_count_by_zone
GA
(project)
Request count by zone
DELTA , INT64 , 1
gce_backend_service
The number of requests served by a backend service grouped by zone. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
source_zone :
The Google Cloud zone which is the source of the request.
destination_zone :
The Google Cloud zone which is the destination of the request.
status :
The status of the request, one of [issued, success, error].
transferappliance
Metrics from Transfer Appliance .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with transferappliance.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
appliance/cpu/load_average
ALPHA
(project)
Average CPU load
GAUGE , DOUBLE , 10^2.%
transferappliance.googleapis.com/Appliance
CPU load average over the past sample period. Sampled every 60 seconds.
sample_period :
Sample collection interval to calculate CPU load, one of ["1min", "5mins", "15mins"].
appliance/disk/health
ALPHA
(project)
Disk health
GAUGE , BOOL , 1
transferappliance.googleapis.com/Appliance
Reports the health status of each disk. Sampled every 3600 seconds.
id :
ID of the disk.
type :
Disk health evaluation standards, for example, "vendor_reported".
appliance/disk/partition/total_bytes
ALPHA
(project)
Disk partition total space
GAUGE , INT64 , By
transferappliance.googleapis.com/Appliance
The total space of each disk partition. Sampled every 60 seconds.
type :
The type of the disk partition, for example, "root", "metadata", "srv", "data", etc.
appliance/disk/partition/used_bytes
ALPHA
(project)
Disk partiton used space
GAUGE , INT64 , By
transferappliance.googleapis.com/Appliance
The used space of each disk partition. Sampled every 60 seconds.
type :
The type of the disk partition, for example, "root", "metadata", "srv", "data", etc.
appliance/hardware/health
ALPHA
(project)
Hardware component health
GAUGE , BOOL , 1
transferappliance.googleapis.com/Appliance
Reports if the specific hardware component works properly. Sampled every 3600 seconds.
type :
The type of the hardware component, for example, "power_supply", "fan", "cache_vault", etc.
appliance/network/bytes_received
ALPHA
(project)
Network bytes received per interface
GAUGE , INT64 , By
transferappliance.googleapis.com/Appliance
Reports the amount of bytes received per interface. Sampled every 60 seconds.
interface :
Name of the interface, for example, eno1, eno2, enp26s0f1, ens26, etc.
appliance/network/bytes_sent
ALPHA
(project)
Network bytes sent per interface
GAUGE , INT64 , By
transferappliance.googleapis.com/Appliance
Reports the amount of bytes sent per interface. Sampled every 60 seconds.
interface :
Name of the interface, for example, eno1, eno2, enp26s0f1, ens26, etc.
appliance/network/connectivity
ALPHA
(project)
Interface network connectivity
GAUGE , BOOL , 1
transferappliance.googleapis.com/Appliance
Reports if the interface network is reachable. Sampled every 60 seconds.
interface :
Name of the interface, for example, eno1, eno2, enp26s0f1, ens26, etc.
appliance/network/dns_health
ALPHA
(project)
DNS health
GAUGE , BOOL , 1
transferappliance.googleapis.com/Appliance
Reports if the DNS configuration works well. Sampled every 60 seconds.
appliance/network/packets_received
ALPHA
(project)
Network packets received per interface
GAUGE , INT64 , 1
transferappliance.googleapis.com/Appliance
Reports the amount of packets received per interface. Sampled every 60 seconds.
interface :
Name of the interface, for example, eno1, eno2, enp26s0f1, ens26, etc.
status :
Status of the packet transmission, one of ["success" - healthy packets; "dropped" - discarded packets; "error" - packets errors].
appliance/network/packets_sent
ALPHA
(project)
Network packets sent per interface
GAUGE , INT64 , 1
transferappliance.googleapis.com/Appliance
Reports the amount of packets sent per interface. Sampled every 60 seconds.
interface :
Name of the interface, for example, eno1, eno2, enp26s0f1, ens26, etc.
status :
Status of the packet transmission, one of ["success" - healthy packets; "dropped" - discarded packets; "error" - packets errors].
appliance/service/state
ALPHA
(project)
Service state
GAUGE , BOOL , 1
transferappliance.googleapis.com/Appliance
Reports the running status of the service. Sampled every 60 seconds.
name :
Name of the service.
appliance/storage/stored_bytes
BETA
(project)
Stored bytes
GAUGE , INT64 , By
transferappliance.googleapis.com/Appliance
The current number of bytes stored in the storage buffer of the appliance. Sampled every 60 seconds.
appliance/transfer/health
BETA
(project)
Transfer health
GAUGE , BOOL , 1
transferappliance.googleapis.com/Appliance
Is on-prem transfer software currently running?. Sampled every 60 seconds.
appliance/version
ALPHA
(project)
Appliance component version
GAUGE , BOOL ,
transferappliance.googleapis.com/Appliance
Current version of the specific appliance component. Sampled every 300 seconds.
type :
Component type, for example, os, ta, samba, containerd_server, containerd_client, kubelet, etc.
version :
The version of the appliance component.
translationhub
Metrics from Translation Hub .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with translationhub.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
quota/document_pages/exceeded
BETA
(project)
Translation Hub document pages quota exceeded error
DELTA , INT64 , 1
translationhub.googleapis.com/Portal
Number of attempts to exceed the limit on quota metric translationhub.googleapis.com/document_pages. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
portal :
Translation Hub Portal.
quota/document_pages/limit
BETA
(project)
Translation Hub document pages quota limit
GAUGE , INT64 , d
translationhub.googleapis.com/Portal
Current limit on quota metric translationhub.googleapis.com/document_pages. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
portal :
Translation Hub Portal.
quota/document_pages/usage
BETA
(project)
Translation Hub document pages quota usage
DELTA , INT64 , d
translationhub.googleapis.com/Portal
Current usage on quota metric translationhub.googleapis.com/document_pages. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
portal :
Translation Hub Portal.
videostitcher
Metrics from Video Stitcher API .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with videostitcher.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
project/live_ad_insertion_count
BETA
(project)
Live ad insertion count
DELTA , INT64 , 1
videostitcher.googleapis.com/Project
The number of ad insertions for live sessions including success and failure.
failed_reason :
Failure reason if the ad was not inserted successfully.
state :
Whether the ad insertion succeeded or failed.
liveconfig_id :
The ID of the liveconfig.
project/live_slate_insertion_count
BETA
(project)
Live slate insertion count
DELTA , INT64 , 1
videostitcher.googleapis.com/Project
The number of slate insertions for live sessions including success and failure.
failed_reason :
Failure reason if the slate was not inserted successfully.
state :
Whether the slate insertion succeeded or failed.
stream_id :
The ID of the video stream.
project/vod_ad_insertion_count
BETA
(project)
VOD ad insertion count
DELTA , INT64 , 1
videostitcher.googleapis.com/Project
The number of ad insertions for VOD sessions including success and failure.
failed_reason :
Failure reason if the ad was not inserted successfully.
state :
Whether the ad insertion succeeded or failed.
asset_id :
The ID of the video asset.
visionai
Metrics from Vision AI .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with visionai.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
platform/connected_service/request_count
BETA
(project)
Request count
DELTA , INT64 , 1
visionai.googleapis.com/Instance
The number of requests sent from Vertex AI Vision App Platform to other connected GCP services.
service_name :
The name of the service that Vertex AI Vision App Platform connected to.
response_code :
The response code that Vertex AI Vision App Platform received from the service.
processing_type :
The type of processing for which Vertex AI Vision App Platform connected to this service.
node_id :
The Vertex AI Vision App Platform application node from which this connection originated.
platform/connected_service/request_latencies
BETA
(project)
Request latencies
DELTA , DISTRIBUTION , ms
visionai.googleapis.com/Instance
The total client-side request latencies from Vertex AI Vision to other connected GCP services. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
service_name :
The name of the service that Vertex AI Vision App Platform connected to.
response_code :
The response code that Vertex AI Vision App Platform received from the service.
processing_type :
The type of processing for which Vertex AI Vision App Platform connected to this service.
node_id :
The Vertex AI Vision App Platform application node from which this connection originated.
platform/custom_model/predict_count
BETA
(project)
Prediction count
DELTA , INT64 , 1
visionai.googleapis.com/Instance
The number of predictions from Vertex AI Vision App Platform.
response_code :
The response code that Vertex AI Vision App Platform received for the prediction.
node_id :
The Vertex AI Vision App Platform application node from which this prediction originated.
platform/custom_model/predict_latencies
BETA
(project)
Prediction latencies
DELTA , DISTRIBUTION , ms
visionai.googleapis.com/Instance
The total client-side prediction latencies from Vertex AI Vision App Platform. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
The response code that Vertex AI Vision App Platform received for the prediction.
node_id :
The Vertex AI Vision App Platform application node from which this prediction originated.
platform/instance/uptime
BETA
(project)
Uptime
GAUGE , DOUBLE , ms
visionai.googleapis.com/Instance
The uptime of a Vertex AI Vision App Platform application instance. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
stream/network/received_bytes_count
BETA
(project)
Received bytes
DELTA , INT64 , By
visionai.googleapis.com/Stream
The number of bytes received by a Vertex AI Vision stream.
event_id :
The event corresponding to the bytes being received.
stream/network/received_packets_count
BETA
(project)
Received packets
DELTA , INT64 , 1
visionai.googleapis.com/Stream
The number of packets received by a Vertex AI Vision stream.
event_id :
The event corresponding to the packets being received.
stream/network/sent_bytes_count
BETA
(project)
Sent bytes
DELTA , INT64 , By
visionai.googleapis.com/Stream
The number of bytes sent by a Vertex AI Vision stream.
event_id :
The event corresponding to the bytes being sent.
stream/network/sent_packets_count
BETA
(project)
Sent packets
DELTA , INT64 , 1
visionai.googleapis.com/Stream
The number of packets sent by a Vertex AI Vision stream.
event_id :
The event corresponding to the packets being sent.
vmwareengine
Metrics from Google Cloud VMware Engine .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with vmwareengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
network/max_utilization_percentage
BETA
(project)
Max percentage of network usage
GAUGE , DOUBLE , 1
vmwareengine.googleapis.com/VmwareEngineNetwork
Maximum percentage network usage for a vmware engine network across all network paths.
datacenter_zone :
Zone of the private clouds for this network path.
private_connection_name :
Private connection name if the Vmware Engine Network is legacy.
network/utilization
BETA
(project)
Network usage in Mbps
GAUGE , DOUBLE , 1
vmwareengine.googleapis.com/VmwareEngineNetwork
Total network usage for a vmware engine network across all network paths in Mbps.
datacenter_zone :
Zone of the private clouds for this network path.
private_connection_name :
Private connection name if the Vmware Engine Network is legacy.
vpcaccess
Metrics from Serverless VPC Access .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with vpcaccess.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connector/cpu/utilizations
BETA
(project)
CPU Utilizations
GAUGE , DISTRIBUTION , 10^2.%
vpc_access_connector
Distribution of CPU utilizations for instances underlying a VPC Access Connector. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
connector/instances
BETA
(project)
Active instances
GAUGE , INT64 , 1
vpc_access_connector
Total number of active instances underlying a VPC Access connector. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
connector/received_bytes_count
BETA
(project)
Bytes received delta
DELTA , INT64 , By
vpc_access_connector
Delta of bytes transferred by a VPC Access Connector. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
connector/received_packets_count
BETA
(project)
Packets received delta
DELTA , INT64 , {packet}
vpc_access_connector
Delta of packets received by a VPC Access Connector. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
connector/sent_bytes_count
BETA
(project)
Bytes sent delta
DELTA , INT64 , By
vpc_access_connector
Delta of bytes transferred by a VPC Access Connector. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
connector/sent_packets_count
BETA
(project)
Packets sent delta
DELTA , INT64 , {packet}
vpc_access_connector
Delta of packets sent by a VPC Access Connector. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
vpn
Metrics from Cloud VPN .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with vpn.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
gateway/connections
GA
(project)
Number of connections
GAUGE , INT64 , 1
vpn_gateway
Indicates the number of HA connections per VPN gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
configured_for_sla :
(BOOL)
Whether the HA connection is fully configured for SLA.
gcp_service_health :
(BOOL)
Whether the Google Cloud side of the HA connection is fully functional.
end_to_end_health :
(BOOL)
Whether the HA connection is functional end-to-end.
network/dropped_received_packets_count
GA
(project)
Incoming packets dropped
DELTA , INT64 , 1
vpn_gateway
Ingress (received from peer VPN) packets dropped for tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tunnel_name :
The name of the tunnel.
gateway_name :
The name of the gateway managing the tunnel.
network/dropped_sent_packets_count
GA
(project)
Outgoing packets dropped
DELTA , INT64 , 1
vpn_gateway
Egress (directed to peer VPN) packets dropped for tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tunnel_name :
The name of the tunnel.
gateway_name :
The name of the gateway managing the tunnel.
network/received_bytes_count
GA
(project)
Received bytes
DELTA , INT64 , By
vpn_gateway
Ingress (received from peer VPN) bytes for tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tunnel_name :
The name of the tunnel.
gateway_name :
The name of the gateway managing the tunnel.
network/received_packets_count
GA
(project)
Received packets
DELTA , INT64 , {packets}
vpn_gateway
Ingress (received from peer VPN) packets for tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
Delivery status, for example, [successful, exceeds_mtu, throttled].
tunnel_name :
The name of the tunnel.
network/sent_bytes_count
GA
(project)
Sent bytes
DELTA , INT64 , By
vpn_gateway
Egress (directed to peer VPN) bytes for tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tunnel_name :
The name of the tunnel.
gateway_name :
The name of the gateway managing the tunnel.
network/sent_packets_count
GA
(project)
Sent packets
DELTA , INT64 , {packets}
vpn_gateway
Egress (directed to peer VPN) packets for tunnel. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
Delivery status, for example, [successful, exceeds_mtu, throttled].
tunnel_name :
The name of the tunnel.
tunnel_established
GA
(project)
Tunnel established
GAUGE , DOUBLE , 1
vpn_gateway
Indicates successful tunnel establishment if > 0. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tunnel_name :
The name of the tunnel.
gateway_name :
The name of the gateway managing the tunnel.
vpn_tunnel/gateway_ip_version
GA
(project)
Gateway IP version
GAUGE , BOOL ,
vpn_tunnel
The IP version of the HA VPN gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
gateway_ip_version :
The IP version of the HA VPN gateway.
workflows
Metrics from Workflows .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with workflows.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
await_callback_step_count
GA
(project)
Await Callback Step Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executed steps that wait for a callback. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
callback_requests_count
GA
(project)
Callback Requests Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of requests made to trigger a callback. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
callback_timeout_count
GA
(project)
Callback Timeout Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of callbacks that timed out. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
cmek_protected_workflow_count
GA
(project)
CMEK Protected Workflow Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of workflows deployed with CMEK protection. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
compute_slice_count
GA
(project)
Compute Slice Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of compute slices executed. Steps are executed in slices of work, which depends on the of type steps being executed (e.g. HTTP requests will run separately from “assign” steps). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
type :
The type of compute slice, such as "IO_REQUEST" or "WAKEUP".
has_parallel :
(BOOL)
Whether the workflow uses parallel steps.
compute_slice_latencies
GA
(project)
Compute Slice Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies from the time a compute slice was scheduled to the time it was executed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
type :
The type of compute slice, such as "IO_REQUEST" or "WAKEUP".
has_parallel :
(BOOL)
Whether the workflow uses parallel steps.
compute_step_count
GA
(project)
Compute Step Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of compute steps executed (e.g. "assign" and "for" steps). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
compute_step_latencies
GA
(project)
Compute Step Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies of executed compute steps. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
create_callback_step_count
GA
(project)
Create Callback Step Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executed steps that create a callback. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
method :
The method type of the created callback, such as "POST".
deployment_attempt_count
GA
(project)
Deployment Attempt Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of workflow deployment attempts. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
result :
The status of the deployment attempts.
deployment_latencies
GA
(project)
Deployment Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies of workflow deployment attempts. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
duplicate_event_count
GA
(project)
Duplicate Event Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of duplicate event triggers received. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
event_type :
The type of the event.
event_time_to_ack_latencies
GA
(project)
Event Time To Ack Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies from the time an event starts to the time the workflows service acks it. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
event_type :
The type of the event.
event_trigger_count
GA
(project)
Event Trigger Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of event triggers received. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
event_type :
The type of the event.
result :
The result of the event trigger.
execution_backlog_size
GA
(project)
Execution Backlog Size
GAUGE , INT64 , 1
workflows.googleapis.com/Workflow
Number of executions that have not started yet. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
execution_times
BETA
(project)
Execution times
DELTA , DISTRIBUTION , s
workflows.googleapis.com/Workflow
Distribution of workflow execution times.
revision_id :
The revision ID of the executed workflow.
external_step_count
BETA
(project)
External step count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Count of executed external steps for the workflow.
finished_execution_count
BETA
(project)
Finished execution count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Count of finished executions for the workflow.
status :
The execution status of the workflow.
revision_id :
The revision ID of the executed workflow.
internal_execution_error_count
GA
(project)
Internal Execution Error Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executions that failed with an internal error. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
internal_step_count
BETA
(project)
Internal step count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Count of executed internal steps for the workflow.
io_internal_request_count
GA
(project)
IO Internal Request Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of I/O requests made by a Workflow to Google services. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
service_domain :
The domain of the Google service being called, such as "bigquery.googleapis.com".
io_step_count
GA
(project)
IO Step Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of I/O steps executed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
io_result :
The I/O step result.
io_step_type :
The I/O step type.
destination_type :
The I/O step destination type.
had_system_error :
(BOOL)
Whether the I/O step had a system error.
io_step_latencies
GA
(project)
IO Step Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies of I/O steps executed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
io_result :
The I/O step result.
io_step_type :
The I/O step type.
had_system_error :
(BOOL)
Whether the I/O step had a system error.
kms_decrypt_latencies
GA
(project)
KMS Decrypt Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies of decrypt requests to KMS by workflows for CMEK. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
status :
The status of the decrypt requests.
attempts :
(INT64)
The attempts count of the decrypt requests.
kms_decrypt_request_count
GA
(project)
KMS Decrypt Request Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of KMS decrypt requests made by the service for CMEK. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
status :
The status of the decrypt requests.
kms_encrypt_latencies
GA
(project)
KMS Encrypt Latencies
DELTA , DISTRIBUTION , ms
workflows.googleapis.com/Workflow
Latencies of encrypt requests to KMS by workflows for CMEK. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
status :
The status of the encrypt requests.
attempts :
(INT64)
The attempts count of the encrypt requests.
kms_encrypt_request_count
GA
(project)
KMS Encrypt Request Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of KMS encrypt requests made by the service for CMEK. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
status :
The status of the encrypt requests.
parallel_branch_step_count
GA
(project)
Parallel branch step count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executed steps using parallel branches. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
parallel_branch_substep_count
GA
(project)
Parallel branch substep count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executed steps within parallel branches. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
parallel_iteration_step_count
GA
(project)
Parallel iteration step count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executed steps using parallel iterations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
parallel_iteration_substep_count
GA
(project)
Parallel iteration substep count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of executed steps within parallel iterations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
parallel_unhandled_exceptions_limit_count
GA
(project)
Parallel unhandled exceptions limit count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of times the unhandled parallel exception limit was reached. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
pending_io_requests
GA
(project)
Pending IO Requests
GAUGE , INT64 , 1
workflows.googleapis.com/Workflow
Number of in-flight I/O requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
sent_bytes_count
BETA
(project)
Network bytes sent
DELTA , INT64 , By
workflows.googleapis.com/Workflow
Count of outgoing HTTP bytes (URL, headers and body) sent by the workflow.
revision_id :
The revision ID of the executed workflow.
started_execution_count
BETA
(project)
Started execution count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Count of started executions for the workflow.
revision_id :
The revision ID of the executed workflow.
started_vpcsc_executions_count
GA
(project)
Started VPC-SC Executions Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of VPC-SC restricted executions started. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
vpcsc_protected_io_count
GA
(project)
VPC-SC Protected IO Count
DELTA , INT64 , 1
workflows.googleapis.com/Workflow
Number of I/O requests made using VPC-SC. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
revision_id :
The revision ID of the executed workflow.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
