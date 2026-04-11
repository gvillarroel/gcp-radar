---
title: "REST Resource: projects.locations.jobs \_|\_ Transcoder API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobs
  title: "REST Resource: projects.locations.jobs \_|\_ Transcoder API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Reference
Send feedback
REST Resource: projects.locations.jobs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Job
JSON representation
ProcessingState
Status
JSON representation
ProcessingMode
OptimizationStrategy
Methods
Resource: Job
Transcoding job resource.
JSON representation
{
"name" : string ,
"inputUri" : string ,
"outputUri" : string ,
"state" : enum ( ProcessingState ) ,
"createTime" : string ,
"startTime" : string ,
"endTime" : string ,
"ttlAfterCompletionDays" : integer ,
"labels" : {
string : string ,
...
} ,
"error" : {
object ( Status )
} ,
"mode" : enum ( ProcessingMode ) ,
"batchModePriority" : integer ,
"optimization" : enum ( OptimizationStrategy ) ,
"fillContentGaps" : boolean ,
// Union field job_config can be only one of the following:
"templateId" : string ,
"config" : {
object ( JobConfig )
}
// End of list of possible types for union field job_config .
}
Fields
name
string
The resource name of the job. Format: projects/{project_number}/locations/{location}/jobs/{job}
inputUri
string
Input only. Specify the inputUri to populate empty uri fields in each element of Job.config.inputs or JobTemplate.config.inputs when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4 ). See Supported input and output formats .
outputUri
string
Input only. Specify the outputUri to populate an empty Job.config.output.uri or JobTemplate.config.output.uri when using template. URI for the output file(s). For example, gs://my-bucket/outputs/ . See Supported input and output formats .
state
enum ( ProcessingState )
Output only. The current state of the job.
createTime
string ( Timestamp format)
Output only. The time the job was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
startTime
string ( Timestamp format)
Output only. The time the transcoding started.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. The time the transcoding finished.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ttlAfterCompletionDays
integer
Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
labels
map (key: string, value: string)
The labels associated with this job. You can use these to organize and group your jobs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
error
object ( Status )
Output only. An error object that describes the reason for the failure. This property is always present when ProcessingState is FAILED .
mode
enum ( ProcessingMode )
The processing mode of the job. The default is PROCESSING_MODE_INTERACTIVE .
batchModePriority
integer
The processing priority of a batch job. This field can only be set for batch mode jobs. The default value is 0. This value cannot be negative. Higher values correspond to higher priorities for the job.
optimization
enum ( OptimizationStrategy )
Optional. The optimization strategy of the job. The default is AUTODETECT .
fillContentGaps
boolean
Optional. Insert silence and duplicate frames when timestamp gaps are detected in a given stream.
Union field job_config . Specify the config for the transcoding job. If you don't specify the job_config , the API selects templateId ; this template ID is set to preset/web-hd by default. When you use a template_id to create a job, the Job.config is populated by the JobTemplate.config . job_config can be only one of the following:
templateId
string
Input only. Specify the templateId to use for populating Job.config . The default is preset/web-hd , which is the only supported preset.
User defined JobTemplate: {jobTemplateId}
config
object ( JobConfig )
The configuration for this job.
ProcessingState
The current state of the job.
Enums
PROCESSING_STATE_UNSPECIFIED
The processing state is not specified.
PENDING
The job is enqueued and will be picked up for processing soon.
RUNNING
The job is being processed.
SUCCEEDED
The job has been completed successfully.
FAILED
The job has failed. For additional information, see Troubleshooting .
Status
The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC . Each Status message contains three pieces of data: error code, error message, and error details.
You can find out more about this error model and how to work with it in the API Design Guide .
JSON representation
{
"code" : integer ,
"message" : string ,
"details" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
code
integer
The status code, which should be an enum value of google.rpc.Code .
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
ProcessingMode
The processing mode of the job.
Enums
PROCESSING_MODE_UNSPECIFIED
The job processing mode is not specified.
PROCESSING_MODE_INTERACTIVE
The job processing mode is interactive mode. Interactive job will either be ran or rejected if quota does not allow for it.
PROCESSING_MODE_BATCH
The job processing mode is batch mode. Batch mode allows queuing of jobs.
OptimizationStrategy
The optimization strategy of the job. The default is AUTODETECT .
Enums
OPTIMIZATION_STRATEGY_UNSPECIFIED
The optimization strategy is not specified.
AUTODETECT
Prioritize job processing speed.
DISABLED
Disable all optimizations.
Methods
create
Creates a job in the specified region.
delete
Deletes a job.
get
Returns the job data.
list
Lists jobs in the specified region.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
