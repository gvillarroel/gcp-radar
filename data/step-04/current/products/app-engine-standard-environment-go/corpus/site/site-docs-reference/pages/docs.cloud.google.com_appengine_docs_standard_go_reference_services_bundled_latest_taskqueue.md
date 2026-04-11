---
title: "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\
  \ standard environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue
  title: "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\
    \ standard environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Reference
Send feedback
Package google.golang.org/appengine/v2/taskqueue (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package taskqueue provides a client for App Engine's taskqueue service.
Using this service, applications may perform work outside a user's request.
A Task may be constructed manually; alternatively, since the most common
taskqueue operation is to add a single POST task, NewPOSTTask makes it easy.
t := taskqueue . NewPOSTTask ( "/worker" , url . Values {
"key" : { key },
})
taskqueue . Add ( c , t , "" ) // add t to the default queue
Variables
ErrTaskAlreadyAdded
var (
// ErrTaskAlreadyAdded is the error returned by Add and AddMulti when a task has already been added with a particular name.
ErrTaskAlreadyAdded = errors . New ( "taskqueue: task has already been added" )
)
Functions
func Delete
func Delete ( c context . Context , task * Task , queueName string ) error
Delete deletes a task from a named queue.
func DeleteMulti
func DeleteMulti ( c context . Context , tasks [] * Task , queueName string ) error
DeleteMulti deletes multiple tasks from a named queue.
If a given task could not be deleted, an appengine.MultiError is returned.
Each task is deleted independently; one may fail to delete while the others
are successfully deleted.
func ModifyLease
func ModifyLease ( c context . Context , task * Task , queueName string , leaseTime int ) error
ModifyLease modifies the lease of a task.
Used to request more processing time, or to abandon processing.
leaseTime is in seconds and must not be negative.
func Purge
func Purge ( c context . Context , queueName string ) error
Purge removes all tasks from a queue.
QueueStatistics
type QueueStatistics struct {
Tasks int // may be an approximation
OldestETA time . Time // zero if there are no pending tasks
Executed1Minute int // tasks executed in the last minute
InFlight int // tasks executing now
EnforcedRate float64 // requests per second
}
QueueStatistics represents statistics about a single task queue.
func QueueStats
func QueueStats ( c context . Context , queueNames [] string ) ([] QueueStatistics , error )
QueueStats retrieves statistics about queues.
RequestHeaders
type RequestHeaders struct {
QueueName string
TaskName string
TaskRetryCount int64
TaskExecutionCount int64
TaskETA time . Time
TaskPreviousResponse int
TaskRetryReason string
FailFast bool
}
RequestHeaders are the special HTTP request headers available to push task
HTTP request handlers. These headers are set internally by App Engine.
See https://cloud.google.com/appengine/docs/standard/go/taskqueue/push/creating-handlers#reading_request_headers
for a description of the fields.
func ParseRequestHeaders
func ParseRequestHeaders ( h http . Header ) * RequestHeaders
ParseRequestHeaders parses the special HTTP request headers available to push
task request handlers. This function silently ignores values of the wrong
format.
RetryOptions
type RetryOptions struct {
// Number of tries/leases after which the task fails permanently and is deleted.
// If AgeLimit is also set, both limits must be exceeded for the task to fail permanently.
RetryLimit int32
// Maximum time allowed since the task's first try before the task fails permanently and is deleted (only for push tasks).
// If RetryLimit is also set, both limits must be exceeded for the task to fail permanently.
AgeLimit time . Duration
// Minimum time between successive tries (only for push tasks).
MinBackoff time . Duration
// Maximum time between successive tries (only for push tasks).
MaxBackoff time . Duration
// Maximum number of times to double the interval between successive tries before the intervals increase linearly (only for push tasks).
MaxDoublings int32
// If MaxDoublings is zero, set ApplyZeroMaxDoublings to true to override the default non-zero value.
// Otherwise a zero MaxDoublings is ignored and the default is used.
ApplyZeroMaxDoublings bool
}
RetryOptions let you control whether to retry a task and the backoff intervals between tries.
Task
type Task struct {
// Path is the worker URL for the task.
// If unset, it will default to /_ah/queue/
A Task represents a task to be executed.
func Add
func Add ( c context . Context , task * Task , queueName string ) ( * Task , error )
Add adds the task to a named queue.
An empty queue name means that the default queue will be used.
Add returns an equivalent Task with defaults filled in, including setting
the task's Name field to the chosen name if the original was empty.
func AddMulti
func AddMulti ( c context . Context , tasks [] * Task , queueName string ) ([] * Task , error )
AddMulti adds multiple tasks to a named queue.
An empty queue name means that the default queue will be used.
AddMulti returns a slice of equivalent tasks with defaults filled in, including setting
each task's Name field to the chosen name if the original was empty.
If a given task is badly formed or could not be added, an appengine.MultiError is returned.
func Lease
func Lease ( c context . Context , maxTasks int , queueName string , leaseTime int ) ([] * Task , error )
Lease leases tasks from a queue.
leaseTime is in seconds.
The number of tasks fetched will be at most maxTasks.
func LeaseByTag
func LeaseByTag ( c context . Context , maxTasks int , queueName string , leaseTime int , tag string ) ([] * Task , error )
LeaseByTag leases tasks from a queue, grouped by tag.
If tag is empty, then the returned tasks are grouped by the tag of the task with earliest ETA.
leaseTime is in seconds.
The number of tasks fetched will be at most maxTasks.
func NewPOSTTask
func NewPOSTTask ( path string , params url . Values ) * Task
NewPOSTTask creates a Task that will POST to a path with the given form data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
