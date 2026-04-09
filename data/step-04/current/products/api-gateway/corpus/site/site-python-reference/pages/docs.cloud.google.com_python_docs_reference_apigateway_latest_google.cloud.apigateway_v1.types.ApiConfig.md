---
title: "Class ApiConfig (1.14.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.types.ApiConfig
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apigateway/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.types.ApiConfig
  title: "Class ApiConfig (1.14.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class ApiConfig (1.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.14.0 (latest)
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.3
1.2.2
1.1.1
1.0.4
0.2.0
0.1.0
ApiConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An API Configuration is a combination of settings for both
the Managed Service and Gateways serving this API Config.
Attributes
Name
Description
name
str
Output only. Resource name of the API Config. Format:
projects/{project}/locations/global/apis/{api}/configs/{api_config}
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Created time.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Updated time.
labels
MutableMapping[str, str]
Optional. Resource labels to represent
user-provided metadata. Refer to cloud
documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
display_name
str
Optional. Display name.
gateway_service_account
str
Immutable. The Google Cloud IAM Service Account that
Gateways serving this config should use to authenticate to
other services. This may either be the Service Account's
email ( {ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com )
or its full resource name
( projects/{PROJECT}/accounts/{UNIQUE_ID} ). This is most
often used when the service is a GCP resource such as a
Cloud Run Service or an IAP-secured service.
service_config_id
str
Output only. The ID of the associated Service
Config (
https://cloud.google.com/service-infrastructure/docs/glossary#config).
state
google.cloud.apigateway_v1.types.ApiConfig.State
Output only. State of the API Config.
openapi_documents
MutableSequence[ google.cloud.apigateway_v1.types.ApiConfig.OpenApiDocument ]
Optional. OpenAPI specification documents. If specified,
grpc_services and managed_service_configs must not be
included.
grpc_services
MutableSequence[ google.cloud.apigateway_v1.types.ApiConfig.GrpcServiceDefinition ]
Optional. gRPC service definition files. If specified,
openapi_documents must not be included.
managed_service_configs
MutableSequence[ google.cloud.apigateway_v1.types.ApiConfig.File ]
Optional. Service Configuration files. At least one must be
included when using gRPC service definitions. See
https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview
for the expected file contents.
If multiple files are specified, the files are merged with
the following rules:
- All singular scalar fields are merged using "last one
wins" semantics in the order of the files uploaded.
- Repeated fields are concatenated.
- Singular embedded messages are merged using these rules
for nested fields.
Classes
File
File ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A lightweight description of a file.
GrpcServiceDefinition
GrpcServiceDefinition ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A gRPC service definition.
LabelsEntry
LabelsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
OpenApiDocument
OpenApiDocument ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An OpenAPI Specification Document describing an API.
State
State ( value )
All the possible API Config states.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
