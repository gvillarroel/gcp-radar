---
title: "Connect to a Redis instance from a Google Kubernetes Engine cluster \_|\_\
  \ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gke
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gke
  title: "Connect to a Redis instance from a Google Kubernetes Engine cluster \_|\_\
    \ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
Connect to a Redis instance from a Google Kubernetes Engine cluster
Stay organized with collections
Save and categorize content based on your preferences.
Note: To connect to a Redis instance that uses the private services access connect mode you must have
VPC-native/IP aliasing enabled on your GKE cluster. To use
GKE to connect to a Redis instance that uses the direct peering connect mode ,
use the workaround in step 3 of preparing your GKE cluster .
To verify if your cluster uses IP aliasing, use gcloud container clusters describe .
You can only connect to your Redis instance from Google Kubernetes Engine clusters
that use the same authorized network as the Redis instance.
Setup
If you have already installed the Google Cloud CLI and have created a Redis
instance, you can skip these steps.
Install the gcloud CLI and initialize:
gcloud init
Follow the Quickstart Guide
to create a Redis instance. Take note of the zone, IP address, and port of
the Redis instance.
Preparing your GKE cluster
If you have not created a GKE cluster, create one using the
following commands for the Google Cloud CLI:
Designate the project for this sample application in gcloud .
gcloud config set project PROJECT_ID
Set the Compute Engine zone configuration variable in gcloud .
gcloud config set compute/zone ZONE
Create a GKE cluster called visitcount-cluster .
gcloud container clusters create visitcount-cluster --num-nodes=3 --enable-ip-alias
If you didn't create the cluster using gcloud , then use the following command to retrieve the cluster credentials:
gcloud container clusters get-credentials CLUSTER_NAME --zone CLUSTER_ZONE --project PROJECT_ID
CLUSTER_NAME is the name of your GKE cluster.
CLUSTER_ZONE is the zone your cluster is in.
PROJECT_ID is the project where your cluster and your Redis instances exist.
If your cluster is version 1.8 or higher and has IP aliases enabled, skip this step. If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance.
Run these commands, replacing RESERVED_IP_RANGE with the reserved IP range of your instance:
git clone https://github.com/bowei/k8s-custom-iptables.git
cd k8s-custom-iptables/
TARGETS="RESERVED_IP_RANGE" ./install.sh
cd ..
If you don't know the reserved IP range of your instance, then find out either by using the console (advanced options) or the following command:
gcloud redis instances describe INSTANCE_ID -- region = REGION
For more information about IP aliases, including how to create a cluster with this setting enabled, see the IP aliases documentation .
Sample application
This sample HTTP server application establishes a connection to a Redis instance
from a Google Kubernetes Engine cluster.
Clone the repository for your chosen programming language and navigate
to the folder that contains the sample code:
Go
git clone https : //github.com/GoogleCloudPlatform/golang-samples
cd golang - samples / memorystore / redis
Java
git clone https : //github.com/GoogleCloudPlatform/java-docs-samples
cd java - docs - samples / memorystore / redis
Node.js
git clone https : //github.com/GoogleCloudPlatform/nodejs-docs-samples
cd nodejs - docs - samples / memorystore / redis
Python
git clone https : // github . com / GoogleCloudPlatform / python - docs - samples
cd python - docs - samples / memorystore / redis
This sample application increments a Redis counter every time the / endpoint
is accessed.
Go
This application uses the
github.com/gomodule/redigo/redis
client. Install it by running the following command:
go get github . com / gomodule / redigo / redis @ latest
Example application:
// Package main is a basic app that connects to a managed Redis instance.
package main
import (
"fmt"
"log"
"net/http"
"os"
"github.com/gomodule/redigo/redis"
)
var redisPool * redis . Pool
func incrementHandler ( w http . ResponseWriter , r * http . Request ) {
conn := redisPool . Get ()
defer conn . Close ()
counter , err := redis . Int ( conn . Do ( "INCR" , "visits" ))
if err != nil {
http . Error ( w , "Error incrementing visitor counter" , http . StatusInternalServerError )
return
}
fmt . Fprintf ( w , "Visitor number: %d" , counter )
}
func main () {
redisHost := os . Getenv ( "REDISHOST" )
redisPort := os . Getenv ( "REDISPORT" )
redisAddr := fmt . Sprintf ( "%s:%s" , redisHost , redisPort )
const maxConnections = 10
redisPool = & redis . Pool {
MaxIdle : maxConnections ,
Dial : func () ( redis . Conn , error ) { return redis . Dial ( "tcp" , redisAddr ) },
}
http . HandleFunc ( "/" , incrementHandler )
port := os . Getenv ( "PORT" )
if port == "" {
port = "8080"
}
log . Printf ( "Listening on port %s" , port )
if err := http . ListenAndServe ( ":" + port , nil ); err != nil {
log . Fatal ( err )
}
}
Java
This application is Jetty 3.1 servlet-based.
It uses the Jedis library:
<dependency>
<groupId>redis.clients</groupId>
<artifactId>jedis</artifactId>
<version>5.1.0</version>
</dependency>
The AppServletContextListener class is used to create a long-lived
Redis connection pool:
package com.example.redis ;
import java.io.IOException ;
import java.util.Properties ;
import javax.servlet.ServletContextEvent ;
import javax.servlet.ServletContextListener ;
import javax.servlet.annotation.WebListener ;
import redis.clients.jedis.JedisPool ;
import redis.clients.jedis.JedisPoolConfig ;
@WebListener
public class AppServletContextListener implements ServletContextListener {
private Properties config = new Properties ();
private JedisPool createJedisPool () throws IOException {
String host ;
Integer port ;
config . load (
Thread . currentThread ()
. getContextClassLoader ()
. getResourceAsStream ( "application.properties" ));
host = config . getProperty ( "redis.host" );
port = Integer . valueOf ( config . getProperty ( "redis.port" , "6379" ));
JedisPoolConfig poolConfig = new JedisPoolConfig ();
// Default : 8, consider how many concurrent connections into Redis you will need under load
poolConfig . setMaxTotal ( 128 );
return new JedisPool ( poolConfig , host , port );
}
@Override
public void contextDestroyed ( ServletContextEvent event ) {
JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" );
if ( jedisPool != null ) {
jedisPool . destroy ();
event . getServletContext (). setAttribute ( "jedisPool" , null );
}
}
// Run this before web application is started
@Override
public void contextInitialized ( ServletContextEvent event ) {
JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" );
if ( jedisPool == null ) {
try {
jedisPool = createJedisPool ();
event . getServletContext (). setAttribute ( "jedisPool" , jedisPool );
} catch ( IOException e ) {
// handle exception
}
}
}
}
The VisitCounterServlet class is a web servlet that increments
a Redis counter:
package com.example.redis ;
import java.io.IOException ;
import java.net.SocketException ;
import javax.servlet.annotation.WebServlet ;
import javax.servlet.http.HttpServlet ;
import javax.servlet.http.HttpServletRequest ;
import javax.servlet.http.HttpServletResponse ;
import redis.clients.jedis.Jedis ;
import redis.clients.jedis.JedisPool ;
@WebServlet ( name = "Track visits" , value = "" )
public class VisitCounterServlet extends HttpServlet {
@Override
public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException {
try {
JedisPool jedisPool = ( JedisPool ) req . getServletContext (). getAttribute ( "jedisPool" );
if ( jedisPool == null ) {
throw new SocketException ( "Error connecting to Jedis pool" );
}
Long visits ;
try ( Jedis jedis = jedisPool . getResource ()) {
visits = jedis . incr ( "visits" );
}
resp . setStatus ( HttpServletResponse . SC_OK );
resp . getWriter (). println ( "Visitor counter: " + String . valueOf ( visits ));
} catch ( Exception e ) {
resp . sendError ( HttpServletResponse . SC_INTERNAL_SERVER_ERROR , e . getMessage ());
}
}
}
Node.js
This application uses the redis
module. This is a sample package.json file:
{
"name" : "memorystore-redis" ,
"description" : "An example of using Memorystore(Redis) with Node.js" ,
"version" : "0.0.1" ,
"private" : true ,
"license" : "Apache Version 2.0" ,
"author" : "Google Inc." ,
"engines" : {
"node" : ">=16.0.0"
},
"dependencies" : {
"redis" : "^4.0.0"
}
}
Sample application code:
'use strict' ;
const http = require ( 'http' );
const redis = require ( 'redis' );
const REDISHOST = process . env . REDISHOST || 'localhost' ;
const REDISPORT = process . env . REDISPORT || 6379 ;
const client = redis . createClient ({
url : `redis:// ${ REDISHOST } : ${ REDISPORT } ` ,
});
client . on ( 'error' , err = > console . error ( 'ERR:REDIS:' , err ));
client
. connect ()
. then (() = > {
console . log ( 'Connected to Redis' );
http
. createServer ( async ( req , res ) = > {
try {
const reply = await client . incr ( 'visits' );
res . writeHead ( 200 , { 'Content-Type' : 'text/plain' });
res . end ( `Visitor number: ${ reply } \n` );
} catch ( err ) {
console . error ( err );
res . statusCode = 500 ;
res . end ( err . message );
}
})
. listen ( 8080 , () = > {
console . log ( 'Server listening on port 8080' );
});
})
. catch ( err = > {
console . error ( 'Failed to connect to Redis:' , err );
throw err ;
});
Python
This application uses Flask
for web serving and the redis-py
package to communicate with the Redis instance.
Flask == 3.0.3
gunicorn == 23.0.0
redis == 6.0.0
Werkzeug == 3.0.3
Sample application code:
import logging
import os
from flask import Flask
import redis
app = Flask ( __name__ )
redis_host = os . environ . get ( "REDISHOST" , "localhost" )
redis_port = int ( os . environ . get ( "REDISPORT" , 6379 ))
redis_client = redis . StrictRedis ( host = redis_host , port = redis_port )
@app . route ( "/" )
def index ():
value = redis_client . incr ( "counter" , 1 )
return f "Visitor number: { value } "
@app . errorhandler ( 500 )
def server_error ( e ):
logging . exception ( "An error occurred during a request." )
return (
"""
An internal error occurred: <pre>{}</pre>
See logs for full stacktrace.
""" . format (
e
),
500 ,
)
if __name__ == "__main__" :
# This is used when running locally. Gunicorn is used to run the
# application on Google App Engine and Cloud Run.
# See entrypoint in app.yaml or Dockerfile.
app . run ( host = "127.0.0.1" , port = 8080 , debug = True )
Building the container image
Build and push the container image with Cloud Build to Container Registry:
cp gke_deployment/Dockerfile .
gcloud artifacts repositories create --location REPO_REGION --repository-format=docker REPO_ID
gcloud builds submit --tag REPO_REGION -docker.pkg.dev/ PROJECT_ID / REPO_ID /visit-counter:v1
Deploying your application to Google Kubernetes Engine
To avoid hard-coding the Redis instance IP, you can create a redishost ConfigMap :
export REDISHOST_IP= REDISHOST_IP
kubectl create configmap redishost --from-literal=REDISHOST=${REDISHOST_IP}
Verify that the configuration using the following command:
kubectl get configmaps redishost -o yaml
Update gke_deployment/visit-counter.yaml , replacing <REPO_REGION> , <PROJECT_ID> , and <REPO_ID> with the values from your container image created in Building the container image . This file contains the configuration for the deployment and service.
apiVersion : apps / v1
kind : Deployment
metadata :
name : visit - counter
labels :
app : visit - counter
spec :
replicas : 1
selector :
matchLabels :
app : visit - counter
template :
metadata :
labels :
app : visit - counter
spec :
containers :
- name : visit - counter
image : "<REPO_REGION>-docker.pkg.dev/<PROJECT_ID>/<REPO_ID>/visit-counter:v1"
env :
- name : REDISHOST
valueFrom :
configMapKeyRef :
name : redishost
key : REDISHOST
ports :
- name : http
containerPort : 8080
---
apiVersion : v1
kind : Service
metadata :
name : visit - counter
spec :
type : LoadBalancer
selector :
app : visit - counter
ports :
- port : 80
targetPort : 8080
protocol : TCP
Apply the configuration to your cluster:
kubectl apply -f gke_deployment/visit-counter.yaml
Determine the external IP address for this sample app by running the following command:
kubectl get service visit-counter
Verify that your app hosted at the external IP by using your browser, or send a GET request using curl or
your browser:
curl http:// EXTERNAL_IP
Removing the IP tables entry for the Redis instance
If you followed step three of the section of this walkthrough of
Preparing your GKE cluster ,
then you installed the reserved IP range of your Redis instance to your
GKE instance's IP tables. If you want to remove this Redis
IP range entry from the IP tables of your GKE instance, run
the following command from the k8s-custom-iptables/ directory:
./uninstall.sh
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
