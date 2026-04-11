---
title: "Python Client for Google Cloud Pub / Sub \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
  title: "Python Client for Google Cloud Pub / Sub \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Python Client for Google Cloud Pub / Sub
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
2.27.3
2.26.1
2.25.2
2.23.1
2.22.0
2.21.5
2.20.3
2.19.8
2.18.4
2.17.1
2.16.1
2.15.2
2.14.1
2.13.12
2.12.1
2.11.1
2.10.0
2.9.0
2.8.0
2.7.1
2.6.1
2.5.0
2.4.2
2.3.0
2.2.0
2.1.0
2.0.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.1
1.2.0
1.1.0
1.0.2
0.45.0
0.44.0
0.43.0
Google Cloud Pub / Sub is a fully-managed real-time messaging service that
allows you to send and receive messages between independent applications. You
can leverage Cloud Pub/Sub’s flexibility to decouple systems and components
hosted on Google Cloud Platform or elsewhere on the Internet. By building on
the same technology Google uses, Cloud Pub / Sub is designed to provide “at
least once” delivery at low latency with on-demand scalability to 1 million
messages per second (and beyond).
Publisher applications can send messages to a topic and other applications
can subscribe to that topic to receive the messages. By decoupling senders and
receivers, Google Cloud Pub/Sub allows developers to communicate between
independently written applications.
Product Documentation
Client Library Documentation
Quick Start
In order to use this library, you first need to go through the following steps:
Select or create a Cloud Platform project.
Enable billing for your project.
Enable the Google Cloud Pub / Sub API.
Setup Authentication.
Installation
Install this library in a virtualenv using pip. virtualenv is a tool to
create isolated Python environments. The basic problem it addresses is one of
dependencies and versions, and indirectly permissions.
With virtualenv , it’s possible to install this library without needing system
install permissions, and without clashing with the installed system
dependencies.
Supported Python Versions
Python >= 3.9
Deprecated Python Versions
Python < 3.9
The last version of this library compatible with Python 3.7 and 3.8 is google-cloud-pubsub==2.34.0.
The last version of this library compatible with Python 2.7 is google-cloud-pubsub==1.7.0.
Mac/Linux
pip install virtualenv
virtualenv <your-env>
source <your-env>/bin/activate
<your-env>/bin/pip install google-cloud-pubsub
Windows
pip install virtualenv
virtualenv <your-env>
<your-env>\Scripts\activate
<your-env>\Scripts\pip.exe install google-cloud-pubsub
Example Usage
Publishing
To publish data to Cloud Pub/Sub you must create a topic, and then publish
messages to it
import os
from google.cloud import pubsub_v1
publisher = pubsub_v1. PublisherClient ()
topic_name = 'projects/{project_id}/topics/{topic}'.format(
project_id=os.getenv('GOOGLE_CLOUD_PROJECT'),
topic='MY_TOPIC_NAME', # Set this to something appropriate.
)
publisher.create_topic(name=topic_name)
future = publish er. publish (topic_name, b'My first message!', spam='eggs')
future.result()
To learn more, consult the publishing documentation .
Subscribing
To subscribe to data in Cloud Pub/Sub, you create a subscription based on
the topic, and subscribe to that, passing a callback function.
import os
from google.cloud import pubsub_v1
topic_name = 'projects/{project_id}/topics/{topic}'.format(
project_id=os.getenv('GOOGLE_CLOUD_PROJECT'),
topic='MY_TOPIC_NAME', # Set this to something appropriate.
)
subscription_name = 'projects/{project_id}/subscriptions/{sub}'.format(
project_id=os.getenv('GOOGLE_CLOUD_PROJECT'),
sub='MY_SUBSCRIPTION_NAME', # Set this to something appropriate.
)
def callback(message):
print(message. data )
message. ack ()
with pubsub_v1. SubscriberClient () as subscriber:
subscriber.create_subscription(
name=subscription_name, topic=topic_name)
future = subscriber.subscribe(subscription_name, callback)
The future returned by the call to subscriber.subscribe can be used to
block the current thread until a given condition obtains:
try:
future.result()
except KeyboardInterrupt:
future.cancel()
It is also possible to pull messages in a synchronous (blocking) fashion. To
learn more about subscribing, consult the subscriber documentation .
Authentication
It is possible to specify the authentication method to use with the Pub/Sub
clients. This can be done by providing an explicit Credentials instance. Support
for various authentication methods is available from the google-auth library.
For example, to use JSON Web Tokens, provide a google.auth.jwt.Credentials instance:
import json
from google.auth import jwt
service_account_info = json.load(open("service-account-info.json"))
audience = "https://pubsub.googleapis.com/google.pubsub.v1.Subscriber"
credentials = jwt.Credentials.from_service_account_info(
service_account_info, audience=audience
)
subscriber = pubsub_v1.SubscriberClient(credentials=credentials)
# The same for the publisher, except that the "audience" claim needs to be adjusted
publisher_audience = "https://pubsub.googleapis.com/google.pubsub.v1.Publisher"
credentials_pub = credentials.with_claims(audience=publisher_audience)
publisher = pubsub_v1.PublisherClient(credentials=credentials_pub)
Versioning
This library follows Semantic Versioning .
It is currently in major version one (1.y.z), which means that the public API should be considered stable.
Contributing
Contributions to this library are always welcome and highly encouraged.
See the CONTRIBUTING doc for more information on how to get started.
Community
The best place to ask questions is via Stackoverflow: https://stackoverflow.com/questions/tagged/google-cloud-pubsub
License
Apache 2.0 - See the LICENSE for more information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
