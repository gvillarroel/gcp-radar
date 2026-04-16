---
title: "Invoice \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/invoice
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/overview
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/invoice
  title: "Invoice \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Invoice
Stay organized with collections
Save and categorize content based on your preferences.
Use this type to embed information about an Invoice for payment.
Use cases
The following use cases show common examples of how the Invoice schema is
used. Use these examples to ensure that your markup is properly structured.
Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
Invoice for automatic payment
This is an example of markup using the Invoice type, in this case with
automatic payment specified.
JSON-LD
< scrip t t ype='applica t io n /ld+jso n ' >
{
"@context" : "http://schema.org" ,
"@type" : "Invoice" ,
"accountId" : "123-456-789" ,
"minimumPaymentDue" : {
"@type" : "PriceSpecification" ,
"price" : "$70.00"
},
"paymentDue" : "2015-11-22T08:00:00+00:00" ,
"paymentStatus" : "PaymentAutomaticallyApplied" ,
"provider" : {
"@type" : "Organization" ,
"name" : "Mountain View Utilities"
},
"totalPaymentDue" : {
"@type" : "PriceSpecification" ,
"price" : "$70.00"
}
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/Invoice" >
< span itemprop = "accountId" > 123 - 456 - 789 < / span >
< div itemprop = "minimumPaymentDue" itemscope itemtype = "http://schema.org/PriceSpecification" >
< span itemprop = "price" > $ 70.00 < / span >
< / div >
< span itemprop = "paymentDue" > 2015 - 11 - 22 T08 : 00 : 00 + 00 : 00 < / span >
< span itemprop = "paymentStatus" > PaymentAutomaticallyApplied < / span >
< div itemprop = "provider" itemscope itemtype = "http://schema.org/Organization" >
< span itemprop = "name" > Mountain View Utilities < / span >
< / div >
< div itemprop = "totalPaymentDue" itemscope itemtype = "http://schema.org/PriceSpecification" >
< span itemprop = "price" > $ 70.00 < / span >
< / div >
< / div >
Test your markup
You can validate your markup using the Email Markup Tester Tool . Paste in your markup code and click the Validate button to scan the content and receive a report on any errors present.
Specification
Review the details of your email to see if any of these additional properties
apply to your invoice. By marking up these additional properties you allow
Google to display a richer description of the invoice.
Invoice
Type name: Invoice
Extends Intangible
Name
Type
Description
accountId
Text
The identifier for the account the payment will be applied to.
billingPeriod
Duration
The time interval used to compute the invoice.
broker
Organization or Person
An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
category
PhysicalActivityCategory , Text or Thing
A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
confirmationNumber
Text
A number that confirms the given order or payment has been received.
customer
Organization or Person
Party placing the order or paying the invoice.
minimumPaymentDue
PriceSpecification
The minimum payment required at this time.
paymentDue
DateTime
The date that payment is due.
paymentMethod
PaymentMethod
The name of the credit card or other method of payment for the order.
paymentMethodId
Text
An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
paymentStatus
Text
The status of payment; whether the invoice has been paid or not.
provider
Organization or Person
The organization providing the reservation.
referencesOrder
Order
The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
scheduledPaymentDate
Date
The date the invoice is scheduled to be paid.
totalPaymentDue
PriceSpecification
The total amount due.
Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future. Learn More .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-12 UTC."],[],[]]
