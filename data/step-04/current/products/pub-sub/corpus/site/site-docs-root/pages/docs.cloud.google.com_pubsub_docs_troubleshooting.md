---
title: "General troubleshooting \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/troubleshooting
  title: "General troubleshooting \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
General troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
Learn about troubleshooting steps that you might find helpful if you run
into problems using Pub/Sub.
Cannot create a topic
Verify that you have the necessary
permissions .
To create a Pub/Sub topic, you need
the Pub/Sub Editor ( roles/pubsub.editor ) Identity and Access Management
role on the project. If you don't have this role, contact your administrator.
For more troubleshooting information regarding topics, see the following pages:
Troubleshooting topics
Troubleshooting import topics
Troubleshooting permissions issues
Cannot create a subscription
Check that you have done the following:
Verify that you have the necessary
permissions .
To create a Pub/Sub subscription, you need
the Pub/Sub Editor
(roles/pubsub.editor) IAM role on the project.
If you don't have this role, contact your administrator.
Specified a name for the subscription.
Specified the name of an existing topic to which you want to attach the subscription.
If creating a push subscription, specified https:// in lower
case (not http:// or HTTPS:// ) as the protocol for your receiving URL
in the pushEndpoint field.
For more troubleshooting information about subscriptions,
see the following pages:
Troubleshooting pull ,
push ,
BigQuery ,
or Cloud Storage
Troubleshooting subscriptions with Single Message Transforms
Troubleshooting permissions issues
Troubleshoot permission issues
Pub/Sub permissions control which users and service accounts can
perform actions on your Pub/Sub resources. When permissions are
misconfigured, it can lead to permission denied errors and disrupt message flow.
Audit logs provide a detailed record of all permission changes,
allowing you to identify the source of these issues.
To troubleshoot Pub/Sub permission issues with audit logs:
Get the required permissions to view Logs Explorer .
For more information, see Before you begin .
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
Select an existing Google Cloud project, folder, or organization.
Here is a list of filters that you can use to find relevant logs:
resource.type="pubsub_topic" OR resource.type="pubsub_subscription" :
Use this query as a starting point when you're troubleshooting any issue
that might involve changes to topic or subscription configurations,
or access control. You can combine it with other filters to further
refine your search.
protoPayload.methodName="google.iam.v1.SetIamPolicy" : Use this query
when you suspect that an issue is caused by incorrect or missing
permissions. It helps you track who made changes to the IAM policy and
what those changes were. This can be useful for troubleshooting issues
like users unable to publish to topics or subscribe to subscriptions,
applications denied access to Pub/Sub resources, or
unexpected changes in access control.
protoPayload.status.code=7 : Use this query when you encounter errors
explicitly related to permissions. This helps you pinpoint which actions
are failing and who is attempting them. You can combine this query with
the previous ones to identify the specific resource and IAM policy
change that might be causing the permission denial.
Analyze the logs to determine factors such as the timestamp of the event,
the principal who made the change, and the type of changes that were made.
Based on the information gathered from the audit logs, you can take
corrective actions.
Troubleshoot Terraform permission issues
When you use Pub/Sub with Terraform, explicitly grant the required
roles in your Terraform code. For example, for publishing, your
application's service account needs the roles/pubsub.publisher role. If
this role is not explicitly defined in your Terraform code, a future
terraform apply could remove it. This often happens during unrelated updates,
causing a reliable application to suddenly fail with PERMISSION_DENIED errors.
Explicitly defining the role in your code prevents these accidental regressions.
Subscription got deleted
Pub/Sub subscriptions can be deleted in two primary ways:
A user or service account with sufficient permissions intentionally deletes
the subscription.
A subscription is automatically deleted after a period of inactivity,
which is 31 days by default. For more information about the subscription
expiration policy, see Expiration period .
To troubleshoot a deleted subscription, perform the following steps:
In the Google Cloud console, go to the Pub/Sub subscriptions
page and verify that the subscription is no longer listed.
For more information on how to list subscriptions,
see List a subscription .
Check the audit logs. Navigate to Logs Explorer .
Use the filter
protoPayload.methodName="google.pubsub.v1.Subscriber.DeleteSubscription"
to find deleted subscriptions. Examine the logs to determine if someone deleted the
subscription or it was deleted due to inactivity.
InternalExpireInactiveSubscription indicates a subscription was
deleted due to inactivity.
For more information on how to use audit logs for troubleshooting, see
Troubleshoot Pub/Sub issues with audit logs .
403 (Forbidden) error
A 403 error typically means you don't have the correct permissions to
perform an action. For example, you might get a 403 User not authorized error
when trying to publish to a topic or pull from a subscription.
If you get this error, do the following:
Make sure you've enabled the Pub/Sub API in the
Google Cloud console.
Make sure that the principal making the request has the
required permissions on the relevant
Pub/Sub API resources,
especially if you are using Pub/Sub API for cross-project communication.
If you're using Dataflow, make sure that both
{PROJECT_NUMBER}@cloudservices.gserviceaccount.com
and the Compute Engine Service account
{PROJECT_NUMBER}-compute@developer.gserviceaccount.com
have the required permissions on the relevant
Pub/Sub API resource.
For more information, see
Dataflow Security and Permissions .
If you're using App Engine, check your project's
Permissions page to see if an
App Engine Service Account is
listed as a Pub/Sub Editor. If it is not, add your App
Engine Service Account as a Pub/Sub Editor. Normally, the
App Engine Service Account is of
the form
<project-id>@appspot.gserviceaccount.com .
You can use audit logs to troubleshoot permission issues .
Other common error codes
For a list of other common error codes related to the Pub/Sub API
and their descriptions, see Error Codes .
Using excessive administrative operations
If you find that you're using up too much of your
quota for administrative operations ,
you might need to refactor your code. As an illustration, consider
this pseudo-code. In this example, an administrative operation ( GET )
is being used to check for the presence of a subscription before it
attempts to consume its resources. Both GET and CREATE are administrator operations:
if !GetSubscription my-sub {
CreateSubscription my-sub
}
Consume from subscription my-sub
A more efficient pattern is to try to consume messages from the subscription
(assuming that you can be reasonably sure of the subscription's name).
In this optimistic approach, you only get or create the subscription if
there is an error. Consider this example:
try {
Consume from subscription my-sub
} catch NotFoundError {
CreateSubscription my-sub
Consume from subscription my-sub
}
You can use the following code samples to implement this pattern in the
language of your choice:
Go
The following sample uses the major version of the Go Pub/Sub client library (v2). If you are still using the v1 library, see
the migration guide to v2 .
To see a list of v1 code samples, see
the deprecated code samples .
Before trying this sample, follow the Go setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Go API reference documentation .
import (
"context"
"errors"
"fmt"
"io"
"time"
"cloud.google.com/go/pubsub/v2"
"cloud.google.com/go/pubsub/v2/apiv1/pubsubpb"
"google.golang.org/grpc/codes"
"google.golang.org/grpc/status"
)
// optimisticSubscribe shows the recommended pattern for optimistically
// assuming a subscription exists prior to receiving messages.
func optimisticSubscribe ( w io . Writer , projectID , topic , subscriptionName string ) error {
// projectID := "my-project-id"
// topic := "projects/my-project-id/topics/my-topic"
// subscription := "projects/my-project/subscriptions/my-sub"
ctx := context . Background ()
client , err := pubsub . NewClient ( ctx , projectID )
if err != nil {
return fmt . Errorf ( "pubsub.NewClient: %w" , err )
}
defer client . Close ()
// client.Subscriber can be passed a subscription ID (e.g. "my-sub") or
// a fully qualified name (e.g. "projects/my-project/subscriptions/my-sub").
// If a subscription ID is provided, the project ID from the client is used.
sub := client . Subscriber ( subscriptionName )
// Receive messages for 10 seconds, which simplifies testing.
// Comment this out in production, since `Receive` should
// be used as a long running operation.
ctx , cancel := context . WithTimeout ( ctx , 10 * time . Second )
defer cancel ()
// Instead of checking if the subscription exists, optimistically try to
// receive from the subscription assuming it exists.
err = sub . Receive ( ctx , func ( _ context . Context , msg * pubsub . Message ) {
fmt . Fprintf ( w , "Got from existing subscription: %q\n" , string ( msg . Data ))
msg . Ack ()
})
if err != nil {
if st , ok := status . FromError ( err ); ok {
if st . Code () == codes . NotFound {
// If the subscription does not exist, then create the subscription.
subscription , err := client . SubscriptionAdminClient . CreateSubscription ( ctx , & pubsubpb . Subscription {
Name : subscriptionName ,
Topic : topic ,
})
if err != nil {
return err
}
fmt . Fprintf ( w , "Created subscription: %q\n" , subscriptionName )
// client.Subscriber can be passed a subscription ID (e.g. "my-sub") or
// a fully qualified name (e.g. "projects/my-project/subscriptions/my-sub").
// If a subscription ID is provided, the project ID from the client is used.
sub = client . Subscriber ( subscription . GetName ())
err = sub . Receive ( ctx , func ( ctx context . Context , msg * pubsub . Message ) {
fmt . Fprintf ( w , "Got from new subscription: %q\n" , string ( msg . Data ))
msg . Ack ()
})
if err != nil && ! errors . Is ( err , context . Canceled ) {
return err
}
}
}
}
return nil
}
Java
Before trying this sample, follow the Java setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Java API reference documentation .
import com.google.api.gax.rpc. NotFoundException ;
import com.google.cloud.pubsub.v1. AckReplyConsumer ;
import com.google.cloud.pubsub.v1. MessageReceiver ;
import com.google.cloud.pubsub.v1. Subscriber ;
import com.google.cloud.pubsub.v1. SubscriptionAdminClient ;
import com.google.common.util.concurrent.MoreExecutors ;
import com.google.pubsub.v1. ProjectSubscriptionName ;
import com.google.pubsub.v1. PubsubMessage ;
import com.google.pubsub.v1. PushConfig ;
import com.google.pubsub.v1. Subscription ;
import com.google.pubsub.v1. TopicName ;
import java.io.IOException ;
import java.util.concurrent.TimeUnit ;
import java.util.concurrent.TimeoutException ;
public class OptimisticSubscribeExample {
public static void main ( String ... args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String subscriptionId = "your-subscription-id" ;
String topicId = "your-topic-id" ;
optimisticSubscribeExample ( projectId , subscriptionId , topicId );
}
public static void optimisticSubscribeExample (
String projectId , String subscriptionId , String topicId ) throws IOException {
ProjectSubscriptionName subscriptionName =
ProjectSubscriptionName . of ( projectId , subscriptionId );
// Instantiate an asynchronous message receiver.
MessageReceiver receiver =
( PubsubMessage message , AckReplyConsumer consumer ) - > {
// Handle incoming message, then ack the received message.
System . out . println ( "Id: " + message . getMessageId ());
System . out . println ( "Data: " + message . getData (). toStringUtf8 ());
consumer . ack ();
};
Subscriber subscriber = null ;
try {
subscriber = Subscriber . newBuilder ( subscriptionName , receiver ). build ();
// Listen for resource NOT_FOUND errors and rebuild the subscriber and restart subscribing
// when the current subscriber encounters these errors.
subscriber . addListener (
new Subscriber . Listener () {
public void failed ( Subscriber . State from , Throwable failure ) {
System . out . println ( failure . getStackTrace ());
if ( failure instanceof NotFoundException ) {
try ( SubscriptionAdminClient subscriptionAdminClient =
SubscriptionAdminClient . create ()) {
TopicName topicName = TopicName . of ( projectId , topicId );
// Create a pull subscription with default acknowledgement deadline of 10 seconds.
// The client library will automatically extend acknowledgement deadlines.
Subscription subscription =
subscriptionAdminClient . createSubscription (
subscriptionName , topicName , PushConfig . getDefaultInstance (), 10 );
System . out . println ( "Created pull subscription: " + subscription . getName ());
optimisticSubscribeExample ( projectId , subscriptionId , topicId );
} catch ( IOException err ) {
System . out . println ( "Failed to create pull subscription: " + err . getMessage ());
}
}
}
},
MoreExecutors . directExecutor ());
subscriber . startAsync (). awaitRunning ();
System . out . printf ( "Listening for messages on %s:\n" , subscriptionName . toString ());
subscriber . awaitTerminated ( 30 , TimeUnit . SECONDS );
} catch ( IllegalStateException e ) {
// Prevent an exception from being thrown if it is the expected NotFoundException
if ( ! ( subscriber . failureCause () instanceof NotFoundException )) {
throw e ;
}
} catch ( TimeoutException e ) {
subscriber . stopAsync ();
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment these variables before running the sample .
*/
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID' ;
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// const timeout = 60 ;
// Imports the Google Cloud client library
const { PubSub } = require ( '@google-cloud/pubsub' );
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
function optimisticSubscribe ( subscriptionNameOrId , topicNameOrId , timeout ) {
// Try using an existing subscription
let subscription = pubSubClient . subscription ( subscriptionNameOrId );
// Create an event handler to handle messages
let messageCount = 0 ;
const messageHandler = message = > {
console . log ( ` Received message $ { message . id }: ` );
console . log ( ` \ tData : $ { message . data } ` );
console . log ( ` \ tAttributes : $ { message . attributes } ` );
messageCount += 1 ;
// "Ack" ( acknowledge receipt of ) the message
message . ack ();
};
// Set an error handler so that we 're notified if the subscription doesn' t
// already exist .
subscription . on ( 'error' , async e = > {
// Resource Not Found
if ( e . code === 5 ) {
console . log ( 'Subscription not found, creating it' );
await pubSubClient . createSubscription (
topicNameOrId ,
subscriptionNameOrId ,
);
// Refresh our subscriber object and re - attach the message handler .
subscription = pubSubClient . subscription ( subscriptionNameOrId );
subscription . on ( 'message' , messageHandler );
}
});
// Listen for new messages until timeout is hit ; this will attempt to
// open the actual subscriber streams . If it fails , the error handler
// above will be called .
subscription . on ( 'message' , messageHandler );
// Wait a while for the subscription to run . ( Part of the sample only . )
setTimeout (() = > {
subscription . removeListener ( 'message' , messageHandler );
console . log ( ` $ { messageCount } message ( s ) received . ` );
}, timeout * 1000 );
}
Node.ts
Before trying this sample, follow the Node.js setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Node.js API reference documentation .
/**
* TODO ( developer ): Uncomment these variables before running the sample .
*/
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID' ;
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID' ;
// const timeout = 60 ;
// Imports the Google Cloud client library
import { PubSub , Message , StatusError } from '@google-cloud/pubsub' ;
// Creates a client ; cache this for further use
const pubSubClient = new PubSub ();
function optimisticSubscribe (
subscriptionNameOrId : string ,
topicNameOrId : string ,
timeout : number ,
) {
// Try using an existing subscription
let subscription = pubSubClient . subscription ( subscriptionNameOrId );
// Create an event handler to handle messages
let messageCount = 0 ;
const messageHandler = ( message : Message ) = > {
console . log ( ` Received message $ { message . id }: ` );
console . log ( ` \ tData : $ { message . data } ` );
console . log ( ` \ tAttributes : $ { message . attributes } ` );
messageCount += 1 ;
// "Ack" ( acknowledge receipt of ) the message
message . ack ();
};
// Set an error handler so that we 're notified if the subscription doesn' t
// already exist .
subscription . on ( 'error' , async ( e : StatusError ) = > {
// Resource Not Found
if ( e . code === 5 ) {
console . log ( 'Subscription not found, creating it' );
await pubSubClient . createSubscription (
topicNameOrId ,
subscriptionNameOrId ,
);
// Refresh our subscriber object and re - attach the message handler .
subscription = pubSubClient . subscription ( subscriptionNameOrId );
subscription . on ( 'message' , messageHandler );
}
});
// Listen for new messages until timeout is hit ; this will attempt to
// open the actual subscriber streams . If it fails , the error handler
// above will be called .
subscription . on ( 'message' , messageHandler );
// Wait a while for the subscription to run . ( Part of the sample only . )
setTimeout (() = > {
subscription . removeListener ( 'message' , messageHandler );
console . log ( `$ { messageCount } message ( s ) received . ` );
}, timeout * 1000 );
}
Python
Before trying this sample, follow the Python setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub Python API reference documentation .
from google.api_core.exceptions import NotFound
from google.cloud import pubsub_v1
from concurrent.futures import TimeoutError
# TODO(developer)
# project_id = "your-project-id"
# subscription_id = "your-subscription-id"
# Number of seconds the subscriber should listen for messages
# timeout = 5.0
# topic_id = "your-topic-id"
# Create a subscriber client.
subscriber = pubsub_v1 . SubscriberClient ()
# The `subscription_path` method creates a fully qualified identifier
# in the form `projects/{project_id}/subscriptions/{subscription_id}`
subscription_path = subscriber . subscription_path ( project_id , subscription_id )
# Define callback to be called when a message is received.
def callback ( message : pubsub_v1 . subscriber . message . Message ) - > None :
# Ack message after processing it.
message . ack ()
# Wrap subscriber in a 'with' block to automatically call close() when done.
with subscriber :
try :
# Optimistically subscribe to messages on the subscription.
streaming_pull_future = subscribe r . subscribe (
subscription_path , callback = callback
)
streaming_pull_future . result ( timeout = timeout )
except TimeoutError :
print ( "Successfully subscribed until the timeout passed." )
streaming_pull_future . cancel () # Trigger the shutdown.
streaming_pull_future . result () # Block until the shutdown is complete.
except NotFound :
print ( f "Subscription { subscription_path } not found, creating it." )
try :
# If the subscription does not exist, then create it.
publisher = pubsub_v1 . PublisherClient ()
topic_path = publisher . topic_path ( project_id , topic_id )
subscription = subscriber . create_subscription (
request = { "name" : subscription_path , "topic" : topic_path }
)
if subscription :
print ( f "Subscription { subscription . name } created" )
else :
raise ValueError ( "Subscription creation failed." )
# Subscribe on the created subscription.
try :
streaming_pull_future = subscribe r . subscribe (
subscription . name , callback = callback
)
streaming_pull_future . result ( timeout = timeout )
except TimeoutError :
streaming_pull_future . cancel () # Trigger the shutdown.
streaming_pull_future . result () # Block until the shutdown is complete.
except Exception as e :
print (
f "Exception occurred when creating subscription and subscribing to it: { e } "
)
except Exception as e :
print ( f "Exception occurred when attempting optimistic subscribe: { e } " )
C++
Before trying this sample, follow the C++ setup instructions in
Quickstart: Using Client Libraries .
For more information, see the Pub/Sub C++ API reference documentation .
auto process_response = []( gc :: StatusOr<pubsub :: PullResponse > response ) {
if ( response ) {
std :: cout << "Received message " << response - > message << " \n " ;
std :: move ( response - > handler ). ack ();
return gc :: Status ();
}
if ( response . status (). code () == gc :: StatusCode :: kUnavailable &&
response . status (). message () == "no messages returned" ) {
std :: cout << "No messages returned from Pull() \n " ;
return gc :: Status ();
}
return response . status ();
};
// Instead of checking if the subscription exists, optimistically try to
// consume from the subscription.
auto status = process_response ( subscriber . Pull ());
if ( status . ok ()) return ;
if ( status . code () != gc :: StatusCode :: kNotFound ) throw std :: move ( status );
// Since the subscription does not exist, create the subscription.
pubsub_admin :: SubscriptionAdminClient subscription_admin_client (
pubsub_admin :: MakeSubscriptionAdminConnection ());
google :: pubsub :: v1 :: Subscription request ;
request . set_name (
pubsub :: Subscription ( project_id , subscription_id ). FullName ());
request . set_topic (
pubsub :: Topic ( project_id , std :: move ( topic_id )). FullName ());
auto sub = subscription_admin_client . CreateSubscription ( request );
if ( ! sub ) throw std :: move ( sub ). status ();
// Consume from the new subscription.
status = process_response ( subscriber . Pull ());
if ( ! status . ok ()) throw std :: move ( status );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
