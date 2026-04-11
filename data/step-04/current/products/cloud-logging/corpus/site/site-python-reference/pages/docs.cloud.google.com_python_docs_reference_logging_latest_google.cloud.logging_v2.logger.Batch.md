---
title: "Class Batch (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.logger.Batch
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.logger.Batch
  title: "Class Batch (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Batch (3.15.0)
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
Batch ( logger , client , * , resource = None )
Context manager: collect entries to log via a single API call.
Helper returned by Logger.batch
Parameters
Name
Description
logger
logging_v2.logger.Logger
the logger to which entries will be logged.
client
logging_V2.client.Client
The client to use.
resource
Optional[ logging_v2.resource.Resource ]
Monitored resource of the batch, defaults to None, which requires that every entry should have a resource specified. Since the methods used to write entries default the entry's resource to the global resource type, this parameter is only required if explicitly set to None. If no entries' resource are set to None, this parameter will be ignored on the server.
Methods
commit
commit ( * , client = None , partial_success = True )
Send saved log entries as a single API call.
Parameters
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current batch.
partial_success
Optional[bool]
Whether a batch's valid entries should be written even if some other entry failed due to a permanent error such as INVALID_ARGUMENT or PERMISSION_DENIED.
Exceptions
Type
Description
ValueError
if one of the messages in the batch cannot be successfully parsed.
log
log ( message = None , ** kw )
Add an arbitrary message to be logged during commit .
Type will be inferred based on the input message.
Parameters
Name
Description
kw
Optional[dict]
Additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
message
Optional[str or dict or google.protobuf.Message]
The message. to log
log_empty
log_empty ( ** kw )
Add a entry without payload to be logged during commit .
Parameter
Name
Description
kw
Optional[dict]
Additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
log_proto
log_proto ( message , ** kw )
Add a protobuf entry to be logged during commit .
Parameters
Name
Description
message
google.protobuf.Message
The protobuf entry.
kw
Optional[dict]
Additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
log_struct
log_struct ( info , ** kw )
Add a struct entry to be logged during commit .
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
it will not be logged, and a ValueError will be raised during commit .
Parameters
Name
Description
info
dict[str, str|float|int|bool|list|dict|None]
The struct entry,
kw
Optional[dict]
Additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
log_text
log_text ( text , ** kw )
Add a text entry to be logged during commit .
Parameters
Name
Description
text
str
the text entry
kw
Optional[dict]
Additional keyword arguments for the entry. See logging_v2.entries.LogEntry .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
