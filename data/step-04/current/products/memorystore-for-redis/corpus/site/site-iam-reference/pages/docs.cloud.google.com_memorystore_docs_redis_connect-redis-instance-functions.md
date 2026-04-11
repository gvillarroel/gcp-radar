---
title: "Connect to a Redis instance from Cloud Run functions \_|\_ Memorystore for\
  \ Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions
  title: "Connect to a Redis instance from Cloud Run functions \_|\_ Memorystore for\
    \ Redis \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Connect to a Redis instance from Cloud Run functions
Stay organized with collections
Save and categorize content based on your preferences.
You can connect to a Redis instance from Cloud Run functions by using
Direct VPC egress .
Important : We recommend that you use Direct VPC
egress because it offers lower latency, higher throughput, and lower
costs by eliminating the need for managed connector instances.
You can also
connect to a Redis instance from Cloud Run
by using Serverless VPC Access . To use a Serverless VPC Access connector, see VPC with connectors .
Setup
If you have already installed the Google Cloud CLI and have created a Redis
instance, you can skip these steps.
Install the gcloud CLI and initialize:
gcloud init
Follow the Quickstart Guide
to create a Redis instance. Take note of the zone, IP address, and port of
the Redis instance.
Prepare VPC network egress for configuration
To connect to your Redis instance, your Cloud Run function
must have access to the Redis instance's authorized VPC network.
To find the name of this network, run the following command:
gcloud redis instances describe INSTANCE_ID --region REGION --format "value(authorizedNetwork)"
Make a note of the network name.
Sample function
This sample function establishes a connection to a Redis instance from
Cloud Run functions.
Clone the repository for your desired programming language and navigate
to the folder that contains the sample code:
Go
git clone https : //github.com/GoogleCloudPlatform/golang-samples
cd golang - samples / functions / memorystore / redis
Node.js
git clone https : //github.com/GoogleCloudPlatform/nodejs-docs-samples
cd nodejs - docs - samples / functions / memorystore / redis
Python
git clone https : // github . com / GoogleCloudPlatform / python - docs - samples
cd python - docs - samples / functions / memorystore / redis
The sample code increments a Redis counter every time the function is triggered:
Go
This function uses the
github.com/gomodule/redigo/redis
client.
// Package visitcount provides a Cloud Function that connects
// to a managed Redis instance.
package visitcount
import (
"errors"
"fmt"
"log"
"net/http"
"os"
"github.com/GoogleCloudPlatform/functions-framework-go/functions"
"github.com/gomodule/redigo/redis"
)
var redisPool * redis . Pool
func init () {
// Register the HTTP handler with the Functions Framework
functions . HTTP ( "VisitCount" , visitCount )
}
// initializeRedis initializes and returns a connection pool
func initializeRedis () ( * redis . Pool , error ) {
redisHost := os . Getenv ( "REDISHOST" )
if redisHost == "" {
return nil , errors . New ( "REDISHOST must be set" )
}
redisPort := os . Getenv ( "REDISPORT" )
if redisPort == "" {
return nil , errors . New ( "REDISPORT must be set" )
}
redisAddr := fmt . Sprintf ( "%s:%s" , redisHost , redisPort )
const maxConnections = 10
return & redis . Pool {
MaxIdle : maxConnections ,
Dial : func () ( redis . Conn , error ) {
c , err := redis . Dial ( "tcp" , redisAddr )
if err != nil {
return nil , fmt . Errorf ( "redis.Dial: %w" , err )
}
return c , err
},
}, nil
}
// visitCount increments the visit count on the Redis instance
// and prints the current count in the HTTP response.
func visitCount ( w http . ResponseWriter , r * http . Request ) {
// Initialize connection pool on first invocation
if redisPool == nil {
// Pre-declare err to avoid shadowing redisPool
var err error
redisPool , err = initializeRedis ()
if err != nil {
log . Printf ( "initializeRedis: %v" , err )
http . Error ( w , "Error initializing connection pool" , http . StatusInternalServerError )
return
}
}
conn := redisPool . Get ()
defer conn . Close ()
counter , err := redis . Int ( conn . Do ( "INCR" , "visits" ))
if err != nil {
log . Printf ( "redis.Int: %v" , err )
http . Error ( w , "Error incrementing visit count" , http . StatusInternalServerError )
return
}
fmt . Fprintf ( w , "Visit count: %d" , counter )
}
Node.js
This function uses the redis
module.
const functions = require ( '@google-cloud/functions-framework' );
const redis = require ( 'redis' );
const REDISHOST = process . env . REDISHOST || 'localhost' ;
const REDISPORT = process . env . REDISPORT || 6379 ;
const redisClient = redis . createClient ({
socket : {
host : REDISHOST ,
port : REDISPORT ,
},
});
redisClient . on ( 'error' , err = > console . error ( 'ERR:REDIS:' , err ));
redisClient . connect ();
functions . http ( 'visitCount' , async ( req , res ) = > {
try {
const response = await redisClient . incr ( 'visits' );
res . writeHead ( 200 , { 'Content-Type' : 'text/plain' });
res . end ( `Visit count: ${ response } ` );
} catch ( err ) {
console . log ( err );
res . status ( 500 ). send ( err . message );
}
});
Python
This function uses the
redis-py package.
import os
import functions_framework
import redis
redis_host = os . environ . get ( "REDISHOST" , "localhost" )
redis_port = int ( os . environ . get ( "REDISPORT" , 6379 ))
redis_client = redis . StrictRedis ( host = redis_host , port = redis_port )
@functions_framework . http
def visit_count ( request ):
value = redis_client . incr ( "visits" , 1 )
return f "Visit count: { value } "
Deploying the sample to Cloud Run functions
To deploy the function:
Copy the Dockerfile into the source directory:
cp ../../../memorystore/redis/cloud_run_deployment/Dockerfile .
Build a container image using Cloud Build by running the following
command:
gcloud artifacts repositories create --location REPO_REGION --repository-format=docker REPO_ID
gcloud builds submit --pack image= REPO_REGION -docker.pkg.dev/ PROJECT_ID / REPO_ID /visit-counter:v1,builder=gcr.io/buildpacks/builder:latest,env=GOOGLE_FUNCTION_SIGNATURE_TYPE=http,env=GOOGLE_FUNCTION_TARGET=VisitCount
Deploy the container to Cloud Run by running the following
command:
gcloud run deploy \
--image REPO_REGION -docker.pkg.dev/ PROJECT_ID / REPO_ID /visit-counter:v1 \
--allow-unauthenticated \
--region REGION \
--network NETWORK \
--subnet SUBNET \
--set-env-vars REDISHOST= REDIS_IP ,REDISPORT= REDIS_PORT
where:
REPO_REGION is the region of the repository.
REPO_ID is the repository name containing the
application image.
PROJECT_ID is your Google Cloud project's ID.
REGION is the region where your Redis instance
is located.
NETWORK is the name of the authorized
VPC network that your Redis instance is attached to.
SUBNET is the name of your subnet. The subnet must
be /26 or larger. Direct VPC egress supports
RFC 1918 ,
RFC 6598 ,
and Class E IPv4 ranges.
REDIS_IP and REDIS_PORT
are the IP address and port number of your Redis instance.
After the function deployment finishes, retrieve your function's URL:
gcloud run services describe visit-count \
--region = REGION
You can see the counter increase every time you trigger the function by sending
a GET request to its URL.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
