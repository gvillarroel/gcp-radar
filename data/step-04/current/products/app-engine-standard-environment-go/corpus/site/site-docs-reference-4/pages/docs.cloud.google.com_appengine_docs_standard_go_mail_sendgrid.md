---
title: "Sending messages with third-party services \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/go/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid
  title: "Sending messages with third-party services \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Sending messages with third-party services
Stay organized with collections
Save and categorize content based on your preferences.
App Engine apps can use third-party companies to send email, SMS messages,
or make and receive phone calls. For example, you might send email to confirm
business transactions, confirm the creation of user accounts, or send marketing
communications.
This page lists some examples of companies that provide communication services
and client libraries for App Engine apps.
Note: The services offered by these third-party companies are not covered by
the App Engine Service Level Agreement .
Mailgun
Mailgun provides
both RESTful APIs and client libraries for sending email, along with a free
quota for all users. See the monthly pricing calculator on
the sign up page
for pricing on additional messages and volume discounts.
Learn more about Mailgun:
Mailgun developer documentation
Mailgun client libraries
Mailjet
Mailjet
is a global email service that offers a free quota for App Engine users.
To take advantage of this offer, click the following link to
Create a Mailjet account .
Learn more about Mailjet:
Mailjet developer documentation
Mailjet client libraries
SendGrid
You can use SendGrid
to power your emails on App Engine. SendGrid can improve your
deliverability and provide transparency into what actually happens to those
emails your app sends. You can see statistics on opens, clicks, unsubscribes,
spam reports and more with the SendGrid interface or its API.
App Engine customers can take advantage of a free quota by signing up
for the SendGrid Email API plan
through the Google Cloud console. Note that
Google is compensated for customers who sign up for a paid account.
Learn more about SendGrid:
SendGrid developer documentation
SendGrid client libraries
SMS and Voice Services via Twilio
You can use Twilio to embed voice, VoIP, and messaging into applications. The
Twilio platform consists of the Twilio Markup Language (TwiML) ,
a RESTful API ,
and VoIP SDKs for web browsers, Android, and iOS.
Learn more about Twilio:
Twilio developer documentation
Twilio client libraries
Adding client libraries and third-party API keys to your app
To make client libraries available in your App Engine development
and deployment environments, specify the library as a dependency.
For example, to specify dependencies for the Node.js runtime,
see here .
Most third party services use API keys to authenticate your app. You generate
the keys on the third-party's site. To use the third-party API keys in your app:
Store the API keys in the Secret Manager and
fetch the key securely at
instance start time.
Encrypt the key with Cloud Key Management Service , store
the encrypted key in an environment variable, and
decrypt it programmatically at instance start time.
For non-production environments, you can store the key itself in an
environment variable. Note that anyone with access to your app.yaml file
can also access your key.
To learn about the advantages of each
approach, see Choosing a secret management
solution
To store the key, or encrypted key value in an environment variable:
Add the key or encrypted key value to the environment variables section in
your app's app.yaml file.
For example:
env_variables:
EMAIL_API_KEY: key-from-third-party OR encrypted-key
If you are using the Node.js runtime, add the key to the configuration variables in your app's environment variables section in your app's app.standard.yaml file.
In your app's code, retrieve the key or encrypted key from your environment
variables.
For example, if you are using the Python runtime:
EMAIL_API_KEY = os.environ['EMAIL_API_KEY']
Pass the key as required by the third party's API. Ensure you
decrypt the key if you encrypted it previously.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
