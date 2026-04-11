---
title: "Connect to a Redis instance from an App Engine standard environment application\
  \ \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard
  title: "Connect to a Redis instance from an App Engine standard environment application\
    \ \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
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
Connect to a Redis instance from an App Engine standard environment application
Stay organized with collections
Save and categorize content based on your preferences.
You can connect to a Redis instance from the App Engine standard environment
by using Serverless VPC Access .
Setup
If you have already installed the Google Cloud CLI and have created a Redis
instance, you can skip these steps.
Install the gcloud CLI and initialize:
gcloud init
Follow the Quickstart Guide
to create a Redis instance. Take note of the zone, IP address, and port of
the Redis instance.
Configuring Serverless VPC Access
To connect from your App Engine app to your Redis instance's
authorized VPC network, you must set up Serverless VPC Access.
Find your Redis instance's authorized network by running the command:
gcloud redis instances describe [ INSTANCE_ID ] --region [REGION]
Follow the instructions at
Creating a connector
to create a Serverless VPC Access connector. Make sure you
create the connector in the same region as your app, and make sure the connector
is attached to the Redis instance's authorized VPC network. Remember the name of
the connector.
Sample application
This sample HTTP server application establishes a connection to a Redis
instance from an App Engine standard environment app.
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
Preparing the application for deployment
To access the Redis instance, the App Engine app must be configured
to use your Serverless VPC Access connector, and you must
provide your Redis instance's connection details.
If you don't already have one, create an
App Engine application .
Update the app's configuration to specify your
Serverless VPC Access connector and the IP address and port
of your Redis instance:
Go
Update the gae_standard_deployment/app.yaml file:
runtime : go125
# Update with Redis instance details
env_variables :
REDISHOST : '<REDIS_IP>'
REDISPORT : '6379'
# Update with Serverless VPC Access connector details
vpc_access_connector :
name : 'projects/<PROJECT_ID>/locations/<REGION>/connectors/<CONNECTOR_NAME>'
See app.yaml Configuration File
for more details.
Java
Note: This sample uses the Java 8 runtime. To learn how to migrate to
the Java 11 runtime, see
Migrating your App Engine app from Java 8 to Java 11 .
Update the gae_standard_deployment/appengine-web.xml file to specify
your Serverless VPC Access connector:
<appengine-web-app xmlns="http://appengine.google.com/ns/1.0">
<runtime>java8</runtime>
<threadsafe>true</threadsafe>
<vpc-access-connector>
<name>projects/[PROJECT_ID]/locations/[REGION]/connectors/[CONNECTOR_NAME]</name>
</vpc-access-connector>
</appengine-web-app>
And update the src/main/resources/application.properties file with
your Redis instance's IP address and port:
redis . host = REDIS_HOST_IP
redis . port = 6379
For more information about configuring your app, see
appengine-web.xml Reference .
Node.js
Update the gae_standard_deployment/app.yaml file:
runtime : nodejs10
# Update with Redis instance details
env_variables :
REDISHOST : '<REDIS_IP>'
REDISPORT : '6379'
# Update with Serverless VPC Access connector details
vpc_access_connector :
name : 'projects/<PROJECT_ID>/locations/<REGION>/connectors/<CONNECTOR_NAME>'
See app.yaml Configuration File
for more details.
Python
Update the gae_standard_deployment/app.yaml file:
runtime : python37
entrypoint : gunicorn -b :$PORT main:app
# Update with Redis instance details
env_variables :
REDISHOST : '<REDIS_IP>'
REDISPORT : '6379'
# Update with Serverless VPC Access connector details
vpc_access_connector :
name : 'projects/<PROJECT_ID>/locations/<REGION>/connectors/<CONNECTOR_NAME>'
See app.yaml Configuration File
for more details.
Deploying the application to the App Engine standard environment
To deploy the application:
Copy necessary configuration files into the source directory:
Go
Copy the app.yaml and go.mod files into the source directory:
cp gae_standard_deployment / { app . yaml , go . mod } .
Java
Copy the appengine-web.xml file into the source directory:
mkdir - p src / main / webapp / WEB - INF
cp gae_standard_deployment / appengine - web . xml src / main / webapp / WEB - INF /
Node.js
Copy the app.yaml file into the source directory:
cp gae_standard_deployment / app . yaml .
Python
Copy the app.yaml file into the source directory:
cp gae_standard_deployment / app . yaml .
Run the deploy command:
Go
gcloud app deploy
Java
mvn package appengine : stage
gcloud app deploy target / appengine - staging / app . yaml
Node.js
gcloud app deploy
Python
gcloud app deploy
After the deployment is complete, the command will output the URL where you can
visit your app. If you visit this URL, you will see the count on your Redis
instance increase each time the page is loaded.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
