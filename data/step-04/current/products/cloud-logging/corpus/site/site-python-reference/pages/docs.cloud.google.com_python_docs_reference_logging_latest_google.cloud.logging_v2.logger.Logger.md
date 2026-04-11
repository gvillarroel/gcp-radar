---
title: "Class Logger (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.logger.Logger
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.logger.Logger
  title: "Class Logger (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Logger (3.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.15.0 (latest)
3.13.0
3.12.1
3.11.3
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.1
3.2.5
3.1.2
3.0.0
2.7.2
2.6.0
2.5.0
2.4.0
2.3.1
2.2.0
2.1.1
2.0.2
1.15.3
1.14.0
1.13.0
1.12.1
Logger ( name , client , * , labels = None , resource = None )
Loggers represent named targets for log entries.
See https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs
Properties
client
Clent bound to the logger.
full_name
Fully-qualified name used in logging APIs
path
URI path for use in logging APIs
project
Project bound to the logger.
Methods
Logger
Logger ( name , client , * , labels = None , resource = None )
Parameters
Name
Description
name
str
The name of the logger.
client
logging_v2.client.Client
A client which holds credentials and project configuration for the logger (which requires a project).
resource
Optional[ logging_v2.Resource ]
a monitored resource object representing the resource the code was run on. If not given, will be inferred from the environment.
labels
Optional[dict]
Mapping of default labels for entries written via this logger.
batch
batch ( * , client = None )
Return a batch to use as a context manager.
Parameter
Name
Description
client
Union[None, logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
Returns
Type
Description
Batch
A batch to use as a context manager.
delete
delete ( logger_name = None , * , client = None )
Delete all entries in a logger via a DELETE request
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs/delete
Parameters
Name
Description
logger_name
Optional[str]
The resource name of the log to delete: :: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog" , "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity" . If not passed, defaults to the project bound to the client.
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current logger.
list_entries
list_entries (
* ,
resource_names = None ,
filter_ = None ,
order_by = None ,
max_results = None ,
page_size = None ,
page_token = None
)
Return a generator of log entry resources.
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list
Parameters
Name
Description
resource_names
Optional[Sequence[str]]
Names of one or more parent resources from which to retrieve log entries: :: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" If not passed, defaults to the project bound to the client.
filter_
Optional[str]
a filter expression. See https://cloud.google.com/logging/docs/view/advanced_filters By default, a 24 hour filter is applied.
order_by
Optional[str]
One of :data: logging_v2.ASCENDING or :data: logging_v2.DESCENDING .
max_results
Optional[int]
Optional. The maximum number of entries to return. Non-positive values are treated as 0. If None, uses API defaults.
page_size
int
number of entries to fetch in each API call. Although requests are paged internally, logs are returned by the generator one at a time. If not passed, defaults to a value set by the API.
page_token
str
opaque marker for the starting "page" of entries. If not passed, the API will return the first page of entries.
log
log ( message = None , * , client = None , ** kw )
Log an arbitrary message. Type will be inferred based on the input.
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list
Parameters
Name
Description
kw
Optional[dict]
additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
message
Optional[str or dict or google.protobuf.Message]
The message. to log
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
log_empty
log_empty ( * , client = None , ** kw )
Log an empty message
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write
Parameters
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
kw
Optional[dict]
additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
log_proto
log_proto ( message , * , client = None , ** kw )
Log a protobuf message
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list
Parameters
Name
Description
message
google.protobuf.message.Message
The protobuf message to be logged.
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
kw
Optional[dict]
additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
log_struct
log_struct ( info , * , client = None , ** kw )
Logs a dictionary message.
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write
The message must be able to be serializable to a Protobuf Struct.
It must be a dictionary of strings to one of the following:
- `str`
- `int`
- `float`
- `bool`
- :class:`list[str|float|int|bool|list|dict|None]`
- :class:`dict[str, str|float|int|bool|list|dict|None]`
For more details on Protobuf structs, see https://protobuf.dev/reference/protobuf/google.protobuf/#value .
If the provided dictionary cannot be serialized into a Protobuf struct,
it will not be logged, and a ValueError will be raised.
Parameters
Name
Description
info
dict[str, str|float|int|bool|list|dict|None]
the log entry information.
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
kw
Optional[dict]
additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
Exceptions
Type
Description
ValueError
if the dictionary message provided cannot be serialized into a Protobuf struct.
log_text
log_text ( text , * , client = None , ** kw )
Log a text message
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write
Parameters
Name
Description
text
str
the log message
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
kw
Optional[dict]
additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
