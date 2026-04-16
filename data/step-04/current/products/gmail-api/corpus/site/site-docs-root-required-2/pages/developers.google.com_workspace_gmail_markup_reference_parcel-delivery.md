---
title: "Parcel Delivery \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/overview
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery
  title: "Parcel Delivery \_|\_ Gmail \_|\_ Google for Developers"
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
Parcel Delivery
Stay organized with collections
Save and categorize content based on your preferences.
Use this template to describe package delivery status.
Use cases
Basic Parcel Delivery
Minimal example for a parcel delivery
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "ParcelDelivery" ,
"deliveryAddress" : {
"@type" : "PostalAddress" ,
"name" : "Pickup Corner" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"addressCountry" : "US" ,
"postalCode" : "94107"
},
"expectedArrivalUntil" : "2027-03-12T12:00:00-08:00" ,
"carrier" : {
"@type" : "Organization" ,
"name" : "FedEx"
},
"itemShipped" : {
"@type" : "Product" ,
"name" : "Google Chromecast"
},
"partOfOrder" : {
"@type" : "Order" ,
"orderNumber" : "176057" ,
"merchant" : {
"@type" : "Organization" ,
"name" : "Bob Dole"
}
}
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/ParcelDelivery" >
< div itemprop = "deliveryAddress" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "name" content = "Pickup Corner" / >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "addressCountry" content = "US" / >
< meta itemprop = "postalCode" content = "94107" / >
< / div >
< meta itemprop = "expectedArrivalUntil" content = "2027-03-12T12:00:00-08:00" / >
< div itemprop = "carrier" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "FedEx" / >
< / div >
< div itemprop = "itemShipped" itemscope itemtype = "http://schema.org/Product" >
< meta itemprop = "name" content = "Google Chromecast" / >
< / div >
< div itemprop = "partOfOrder" itemscope itemtype = "http://schema.org/Order" >
< meta itemprop = "orderNumber" content = "176057" / >
< div itemprop = "merchant" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "Bob Dole" / >
< / div >
< / div >
< / div >
Parcel Delivery With Shipping Information
Example parcel delivery with detailing shipping information
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "ParcelDelivery" ,
"deliveryAddress" : {
"@type" : "PostalAddress" ,
"name" : "John Frank" ,
"streetAddress" : "24 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"addressCountry" : "US" ,
"postalCode" : "94107"
},
"originAddress" : {
"@type" : "PostalAddress" ,
"name" : "John Frank" ,
"streetAddress" : "25 Willie Mays Plaza" ,
"addressLocality" : "San Francisco" ,
"addressRegion" : "CA" ,
"addressCountry" : "US" ,
"postalCode" : "94107"
},
"expectedArrivalFrom" : "2027-03-10T12:00:00-08:00" ,
"expectedArrivalUntil" : "2027-03-12T12:00:00-08:00" ,
"carrier" : {
"@type" : "Organization" ,
"name" : "FedEx" ,
"url" : "http://fedex.com/"
},
"itemShipped" : {
"@type" : "Product" ,
"name" : "iPod Mini" ,
"url" : "http://apple.com/ipad32gb" ,
"image" : "http://apple.com/images/ipad32gb.jpg" ,
"sku" : "B00DR0PDNE" ,
"description" : "iPod Mini 32Gb White" ,
"brand" : {
"@type" : "Brand" ,
"name" : "Apple"
},
"color" : "white"
},
"trackingNumber" : "3453291231" ,
"trackingUrl" : "http://fedex.com/track/3453291231" ,
"potentialAction" : {
"@type" : "TrackAction" ,
"url" : "http://fedex.com/track/3453291231"
},
"hasDeliveryMethod" : {
"@type" : "ParcelService" ,
"name" : "http://schema.org/ParcelService"
},
"partOfOrder" : {
"@type" : "Order" ,
"orderNumber" : "176057" ,
"merchant" : {
"@type" : "Organization" ,
"name" : "Bob Dole" ,
"sameAs" : "http://www.freebase.com/m/0fhkx"
},
"orderStatus" : "http://schema.org/OrderInTransit"
}
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/ParcelDelivery" >
< div itemprop = "deliveryAddress" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "name" content = "John Frank" / >
< meta itemprop = "streetAddress" content = "24 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "addressCountry" content = "US" / >
< meta itemprop = "postalCode" content = "94107" / >
< / div >
< div itemprop = "originAddress" itemscope itemtype = "http://schema.org/PostalAddress" >
< meta itemprop = "name" content = "John Frank" / >
< meta itemprop = "streetAddress" content = "25 Willie Mays Plaza" / >
< meta itemprop = "addressLocality" content = "San Francisco" / >
< meta itemprop = "addressRegion" content = "CA" / >
< meta itemprop = "addressCountry" content = "US" / >
< meta itemprop = "postalCode" content = "94107" / >
< / div >
< meta itemprop = "expectedArrivalFrom" content = "2027-03-10T12:00:00-08:00" / >
< meta itemprop = "expectedArrivalUntil" content = "2027-03-12T12:00:00-08:00" / >
< div itemprop = "carrier" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "FedEx" / >
< link itemprop = "url" href = "http://fedex.com/" / >
< / div >
< div itemprop = "itemShipped" itemscope itemtype = "http://schema.org/Product" >
< meta itemprop = "name" content = "iPod Mini" / >
< link itemprop = "url" href = "http://apple.com/ipad32gb" / >
< link itemprop = "image" href = "http://apple.com/images/ipad32gb.jpg" / >
< meta itemprop = "sku" content = "B00DR0PDNE" / >
< meta itemprop = "description" content = "iPod Mini 32Gb White" / >
< div itemprop = "brand" itemscope itemtype = "http://schema.org/Brand" >
< meta itemprop = "name" content = "Apple" / >
< / div >
< meta itemprop = "color" content = "white" / >
< / div >
< meta itemprop = "trackingNumber" content = "3453291231" / >
< link itemprop = "trackingUrl" href = "http://fedex.com/track/3453291231" / >
< div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/TrackAction" >
< link itemprop = "url" href = "http://fedex.com/track/3453291231" / >
< / div >
< div itemprop = "hasDeliveryMethod" itemscope itemtype = "http://schema.org/ParcelService" >
< meta itemprop = "name" content = "http://schema.org/ParcelService" / >
< / div >
< div itemprop = "partOfOrder" itemscope itemtype = "http://schema.org/Order" >
< meta itemprop = "orderNumber" content = "176057" / >
< div itemprop = "merchant" itemscope itemtype = "http://schema.org/Organization" >
< meta itemprop = "name" content = "Bob Dole" / >
< link itemprop = "sameAs" href = "http://www.freebase.com/m/0fhkx" / >
< / div >
< link itemprop = "orderStatus" href = "http://schema.org/OrderInTransit" / >
< / div >
< / div >
Test your markup
You can validate your markup using the Email Markup Tester Tool . Paste in your markup code and click the Validate button to scan the content and receive a report on any errors present.
Specification
The following table lists all available properties for this type:
Property
Type
Description
deliveryAddress
PostalAddress
( required ) Destination address.
deliveryAddress. name
Text
Name of the PostalAddress.
deliveryAddress. streetAddress
Text
( required ) The street address. For example, 1600 Amphitheatre Pkwy.
deliveryAddress. addressLocality
Text
( required ) The locality. For example, Mountain View.
deliveryAddress. addressRegion
Text
( required ) The region. For example, CA.
deliveryAddress. addressCountry
Text or Country
( required ) The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
deliveryAddress. postalCode
Text
( required ) The postal code. For example, 94043.
originAddress
PostalAddress
Shipper's address.
originAddress. name
Text
Name of the PostalAddress.
originAddress. streetAddress
Text
The street address. For example, 1600 Amphitheatre Pkwy.
originAddress. addressLocality
Text
The locality. For example, Mountain View.
originAddress. addressRegion
Text
The region. For example, CA.
originAddress. addressCountry
Text or Country
The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
originAddress. postalCode
Text
The postal code. For example, 94043.
expectedArrivalFrom
DateTime
The earliest date the package is expected to arrive.
expectedArrivalUntil
DateTime
( required ) The latest date the package is expected to arrive.
carrier
Organization
( required ) The party responsible for the parcel delivery. Also accepts a string (e.g. "FedEx").
carrier. name
Text
( required ) Name of the Organization.
carrier. url
URL
URL of the Organization.
itemShipped
Product or Reservation
( required ) Products included in this shipment. To represent quantity, either repeat a Product appropriately or do not use this attribute and use partOfOrder instead to express what Products are included. Also accepts an array of objects.
itemShipped. name
Text
( required ) Name of the Product.
itemShipped. url
URL
( recommended for confirmation cards/Search Answers ) URL of the Product, typically the product landing page on the merchant's website.
itemShipped. image
URL
( recommended for confirmation cards/Search Answers ) URL of an image of the Product, typically an image on the merchant's website.
itemShipped. sku
Text
( recommended for confirmation cards/Search Answers ) The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
itemShipped. description
Text
A short description of the Product.
itemShipped. brand
Brand
The brand associated with the Product.
itemShipped.brand. name
Text
Name of the Brand.
itemShipped. color
Text
The color of the product.
trackingNumber
Text
( recommended for confirmation cards/Search Answers ) Shipper tracking number.
trackingUrl
URL
( recommended for confirmation cards/Search Answers ) Webpage where the package can be tracked.
hasDeliveryMethod
DeliveryMethod
Method used for delivery.
deliveryStatus
DeliveryEvent
New entry added as the package passes through each leg of its journey (from shipment to final delivery). Especially useful for pickup-style deliveries (e.g. in-store, from a locker).
partOfOrder
Order
( required ) Details of the Order being shipped. When details about Products included in the shipment cannot be expressed by itemShipped (e.g. quantity shipped), use this Order to express Products instead.
partOfOrder. orderNumber
Text
( required ) The merchant-specific identifier for the transaction.
partOfOrder. merchant
Organization or Person
( required ) The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Bob Dole").
partOfOrder.merchant. name
Text
( required ) Name of the Organization.
partOfOrder.merchant. sameAs
URL
The Freebase URL for the merchant.
partOfOrder. orderStatus
OrderStatus
( recommended for confirmation cards/Search Answers ) The current status of the order.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
