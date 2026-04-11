---
title: "Tutorial: Optimize a Go app \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/profiler/docs/quickstart-go-app
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/quickstart-go-app
  title: "Tutorial: Optimize a Go app \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Profiler
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Optimize a Go app
In this tutorial, you deploy an intentionally inefficient Go application
that is configured to collect profile data. You use the Profiler
interface to view the profile data and to identify potential optimizations.
You then modify the application, deploy it, and evaluate the effect of the
modification.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Enable the Cloud Profiler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
To open the Cloud Shell, in the Google Cloud console toolbar, click
Activate Cloud Shell :
After a few moments, a Cloud Shell session opens inside the
Google Cloud console:
Sample application
The primary objective is to maximize the number of queries per second that
the server can process. A secondary objective is reduce memory usage
by eliminating unnecessary memory allocations.
The server, using a gRPC framework, receives a word or phrase, and then returns
the number of times the word or phrase appears in the works of Shakespeare.
The average number of queries per second that the server can handle is
determined by load testing the server. For each round of tests, a client
simulator is called and instructed to issue 20 sequential queries.
At the completion of a round, the number of queries sent by the client
simulator, the elapsed time, and the average number of queries per second
are displayed.
The server code is intentionally inefficient.
Running the sample application
Note: The application's execution time is just long enough to collect
some profile data. In practice, it's desirable to have at least 10 profiles
before analyzing profile data.
Download and run the sample application:
In the Cloud Shell, run the following commands:
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
cd golang-samples/profiler/shakesapp
Run the application with the version set to 1 and the number of
rounds set to 15:
go run . - version 1 - num_rounds 15
After a minute or two, profile data is displayed. The profile data looks
similar to the following example:
In the screenshot, notice that the Profile type is set to CPU time .
This indicates that CPU usage data is displayed in the flame graph.
Sample output printed in the Cloud Shell is shown below:
$ go run . -version 1 -num_rounds 15
2020/08/27 17:27:34 Simulating client requests, round 1
2020/08/27 17:27:34 Stackdriver Profiler Go Agent version: 20200618
2020/08/27 17:27:34 profiler has started
2020/08/27 17:27:34 creating a new profile via profiler service
2020/08/27 17:27:51 Simulated 20 requests in 17.3s, rate of 1.156069 reqs / sec
2020/08/27 17:27:51 Simulating client requests, round 2
2020/08/27 17:28:10 Simulated 20 requests in 19.02s, rate of 1.051525 reqs / sec
2020/08/27 17:28:10 Simulating client requests, round 3
2020/08/27 17:28:29 Simulated 20 requests in 18.71s, rate of 1.068947 reqs / sec
...
2020/08/27 17:44:32 Simulating client requests, round 14
2020/08/27 17:46:04 Simulated 20 requests in 1m32.23s, rate of 0.216849 reqs / sec
2020/08/27 17:46:04 Simulating client requests, round 15
2020/08/27 17:47:52 Simulated 20 requests in 1m48.03s, rate of 0.185134 reqs / sec
The Cloud Shell output displays the elapsed time for each iteration and
the average request rate. When the application is started, the entry
"Simulated 20 requests in 17.3s, rate of 1.156069 reqs / sec"
indicates that the server is executing about 1 request per second.
By the last round, the entry
"Simulated 20 requests in 1m48.03s, rate of 0.185134 reqs / sec" indicates
that the server is executing about 1 request every 5 seconds.
Using CPU time profiles to maximize queries per second
One approach to maximizing the number of queries per second is to identify CPU
intensive methods and optimize their implementations. In this section,
you use CPU time profiles to identify a CPU intensive method in the server.
Identifying CPU time usage
The root frame of the flame graph lists the total CPU time used by the
application over the collection interval of 10 seconds:
In this example, the service used 2.37 s . When the system runs on a single
core, a CPU time usage of 2.37 seconds corresponds to 23.7% utilization of that
core. For more information, see
Types of profiling available .
Modifying the application
Step 1: Which function is CPU time intensive?
One way you can identify code that might need to be optimized is to view
the table of functions and identify greedy functions:
To view the table, click
list
Focus function list .
Sort the table by Total . The column labeled
Total shows the CPU time usage of a function and its children.
In this example, GetMatchCount is the first
shakesapp/server.go function that is listed.
That function used 1.7s of the total CPU time,
or 72% of the applications total CPU time.
This function is known to be handling the gRPC requests.
The flame graph shows that the shakesapp/server.go
function GetMatchCount
calls MatchString , which in turn is spending most of its
time calling Compile :
Step 2: How can you use what you've learned?
Rely on your language expertise. MatchString
is a regular-expression method. You know that regular-expression processing
is very flexible, but not necessarily the most efficient solution for every
problem.
Rely on your application expertise. The client is generating a word
or phrase, and the server is searching for this phrase.
Search the implementation of the
shakesapp/server.go method GetMatchCount
for uses of MatchString , and then determine
if a simpler, more efficient function could replace that call.
Step 3: How can you change the application?
In the file shakesapp/server.go , the
existing code contains one call to MatchString :
isMatch, err := regexp.MatchString(query, line)
if err != nil {
return resp, err
}
if isMatch {
resp.MatchCount++
}
One option is to replace the MatchString logic with
equivalent logic that uses strings.Contains :
if strings.Contains(line, query) {
resp.MatchCount++
}
Be sure to remove the import statement for the regexp
package.
Evaluating the change
To evaluate the change, do the following:
Run the application with the application version set to 2 :
go run . - version 2 - num_rounds 40
A later section shows that with the optimization, the time it takes to
execute a single round is much less than that of the unmodified application.
To ensure that the application executes long enough to collect and
upload profiles, the number of rounds is increased.
Wait for the application to complete, and then view the profile data for
this version of the application:
Click NOW to load the most recent profile data. For more information,
see Range of time .
In the Version menu, select 2 .
For one example, the flame graph is as shown:
In this figure, the root frame shows a value of 7.8 s . As a result of
changing the string-match function, the CPU time used by the application
increased from 2.37 seconds to 7.8 seconds, or the application went from using
23.7% of a CPU core to using 78% of a CPU core.
The frame width is a proportional measure of the CPU time usage. In this
example, the width of the frame for GetMatchCount indicates that function
uses about 49% of all CPU time used by the application.
In the original flame graph,
this same frame was about 72% of the width of the graph.
To view the exact CPU time usage, you can use the frame tooltip or you can use
the Focus function list :
The output in the Cloud Shell shows that the
modified version is completing about 5.8 requests per second:
$ go run . -version 2 -num_rounds 40
2020/08/27 18:21:40 Simulating client requests, round 1
2020/08/27 18:21:40 Stackdriver Profiler Go Agent version: 20200618
2020/08/27 18:21:40 profiler has started
2020/08/27 18:21:40 creating a new profile via profiler service
2020/08/27 18:21:44 Simulated 20 requests in 3.67s, rate of 5.449591 reqs / sec
2020/08/27 18:21:44 Simulating client requests, round 2
2020/08/27 18:21:47 Simulated 20 requests in 3.72s, rate of 5.376344 reqs / sec
2020/08/27 18:21:47 Simulating client requests, round 3
2020/08/27 18:21:51 Simulated 20 requests in 3.58s, rate of 5.586592 reqs / sec
...
2020/08/27 18:23:51 Simulating client requests, round 39
2020/08/27 18:23:54 Simulated 20 requests in 3.46s, rate of 5.780347 reqs / sec
2020/08/27 18:23:54 Simulating client requests, round 40
2020/08/27 18:23:58 Simulated 20 requests in 3.4s, rate of 5.882353 reqs / sec
The small change to the application had two different effects:
The number of requests per second increased from less than 1 per second to
5.8 per second.
The CPU time per request, computed by dividing the CPU utilization by the
the number of requests per second, decreased to 13.4% from 23.7%.
Note that the CPU time per request decreased even though the CPU time usage
increased from 2.37 seconds, which corresponds to 23.7% utilization of a
single CPU core, to 7.8 seconds, or 78% of a CPU core.
Using allocated heap profiles to improve resource usage
This section illustrates how you can use the heap and allocated heap profiles
to identify an allocation-intensive method in the application:
Heap profiles show the amount of memory allocated
in the program's heap at the instant the profile is collected.
Allocated heap profiles show the total amount of memory that was allocated
in the program's heap during the interval in which the profile was
collected. By dividing these values by 10 seconds, the
profile collection interval, you can interpret these as allocation rates.
Enabling heap profile collection
Run the application with the application version set to 3 and enable
the collection of heap and allocated heap profiles.
go run . - version 3 - num_rounds 40 - heap - heap_alloc
Wait for the application to complete, and then view the profile data for
this version of the application:
Click NOW to load the most recent profile data.
In the Version menu, select 3 .
In the Profiler type menu, select Allocated heap .
For one example, the flame graph is as shown:
Identifying the heap allocation rate
The root frame displays the total amount of heap that was allocated during the
10 seconds when a profile was collected, averaged over all profiles.
In this example, the root frame shows that, on average, 1.535 GiB of
memory was allocated.
Modifying the application
Step 1: Is it worth minimizing the rate of heap allocation?
The CPU time usage of the Go background garbage collection function,
runtime.gcBgMarkWorker.* , can be used to determine if it's
worth the effort to optimize an application to reduce garbage collection
costs:
Skip optimization if the CPU time usage is less than 5%.
Optimize if the CPU time usage is at least 25%.
For this example, the CPU time usage of
the background garbage collector is 16.8%. This value is high enough that
it's worth attempting to optimize shakesapp/server.go :
Step 2: Which function allocates a lot of memory?
The file shakesapp/server.go contains two functions that might
be targets for optimization:
GetMatchCount and readFiles . To determine
the rate of memory allocation for these functions, set the
Profile type to Allocated heap , and then use the
list
Focus function list .
In this example, the total heap allocation for readFiles.func1
during the 10 second profile collection is, on average, 1.045 GiB or 68% of
the total allocated memory. The self heap allocation during the 10 second
profile collection is 255.4 MiB:
In this example, the Go method makeSlice allocated 798.7 MiB
during the 10 second profile collection, on average.
The simplest way to reduce these allocations
is to reduce calls to makeSlice . The
function readFiles calls
makeSlice through a library method.
The result of this analysis suggests that it might be possible to reduce
the rate of heap allocations by optimizing readFiles .
Step 3: How can you change the application?
One option is to modify the application to read the files one time and
then to re-use that content. For example, you could make the following
changes:
Define a global variable files to store the results of the
initial file read:
var files []string
Modify readFiles to return early when files
is defined:
func readFiles(ctx context.Context, bucketName, prefix string) ([]string, error) {
// return if defined
if files != nil {
return files, nil
}
// Existing
type resp struct {
s string
err error
}
...
// Save the result in the variable files
files = make([]string, len(paths))
for i := 0; i
}
Evaluating the change
To evaluate the change, do the following:
Run the application with the application version set to 4 :
go run . - version 4 - num_rounds 60 - heap - heap_alloc
Wait for the application to complete, and then view the profile data for
this version of the application:
Click NOW to load the most recent profile data.
In the Version menu, select 4 .
In the Profiler type menu, select Allocated heap .
To quantify the effect of changing readFiles on the heap allocation rate,
compare the allocated heap profiles for version 4 to those collected for 3:
The root frame's tooltip shows that with version 4, the average amount of
memory allocated during profile collection decreased by 1.301 GiB, as
compared to version 3. The tooltip for readFiles.func1 shows a decrease
of 1.045 GiB:
To quantify the effect on garbage collection, configure a comparison of CPU
time profiles. In the following screenshot, a filter is applied to show the
the stacks for the Go garbage collector
runtime.gcBgMarkWorker.* . The screenshot shows that the
CPU usage for garbage collection is reduced to 4.97% from 16.8%.
To determine if there is an impact of the change on the number of requests
per second handled by the application, view the output in the
Cloud Shell. In this example, version 4 completes up to 15 requests per
second, which is substantially higher than the 5.8 requests per second of
version 3:
$ go run . -version 4 -num_rounds 60 -heap -heap_alloc
2020/08/27 21:51:42 Simulating client requests, round 1
2020/08/27 21:51:42 Stackdriver Profiler Go Agent version: 20200618
2020/08/27 21:51:42 profiler has started
2020/08/27 21:51:42 creating a new profile via profiler service
2020/08/27 21:51:44 Simulated 20 requests in 1.47s, rate of 13.605442 reqs / sec
2020/08/27 21:51:44 Simulating client requests, round 2
2020/08/27 21:51:45 Simulated 20 requests in 1.3s, rate of 15.384615 reqs / sec
2020/08/27 21:51:45 Simulating client requests, round 3
2020/08/27 21:51:46 Simulated 20 requests in 1.31s, rate of 15.267176 reqs / sec
...
The increase in queries per second served by the application might be due to
less time being spent on garbage collection.
You can get a more complete understanding of the effect of the modification
to readFiles by viewing the heap profiles. A comparison of heap profiles
for version 4 to that of version 3 shows that the heap usage decreased
to 18.47 MiB from 70.95 MiB:
Summary
In this quickstart, CPU time and allocated heap profiles were used
to identify potential optimizations to an application. The goals were to
maximize the number of requests per second and to eliminate unnecessary
allocations.
By using CPU time profiles, a CPU intensive function was identified.
After applying a simple change, the server's request rate increased
to 5.8 per second, up from about 1 per second.
By using allocated heap profiles, the shakesapp/server.go
function readFiles was identified as having a high allocation rate.
After optimizing readFiles , the server's request rate increased to
15 requests per second and the average
amount of memory allocated during the 10 second profile collection
decreased by 1.301 GiB.
What's next
For information on how profiles are collected and sent to your
Google Cloud project, see
Profile collection .
Read our resources about DevOps and explore our
research program .
For information on running the Cloud Profiler agent, see:
Profiling Go applications
Profiling Java applications
Profiling Node.js applications
Profiling Python applications
Profiling applications running outside Google Cloud
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
