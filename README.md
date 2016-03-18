# 1_Online-Learning-App
Designed to leverage evolving devops and microservices practices and continuously evolve an app according to it's clients needs. 

Microservices, organised into decoupled bounded contexts will track analytics and deliver engaging content via text, Html5/Mobile Canvas, 
CSS3 and SVG.
Content will be constructed and self-organised by the client device by connecting to  API endpoints which efficiently transfer JSON 
blueprints.

Phase 1. Client UI

The APIs, where possible, will be agnostic of the client platform to simplify the delivery of up-dated content. This is reasonably 
straight forward for the learning material content. It is more of a technical challenge do this for the UI itself. For a webapp target, 
React + Redux made it simple to convert pure JSON into a UI layout with changeable functional elements and look and feel. This allows for 
swapping in other emerging State-Action-Model frameworks if the need arises. The challenge will be a universal JSON schema which also 
works for native (non-CSS) mobile platforms. 
Using a Redux + Immutable client architecture will also allow efficient user feedback from embedded analytics which detect the user's 
progress. This seems to be the perfect autonomous mirror for syncing to the serverside content APIs and analytics.

Phase 2. Content API's and Analytics

It will have a JVM based serverside DDD architecture to handle analytics. I plan to compose this using Akka to control CQRS and 
Event-Sourcing and using Debisish Gosh's book 'Functional and Reactive Domain Modeling' as a guide.

Phase 3. Tying it all together with Persistence.

MongoDB with Apache Spark for analytics processing will complete the back end persistence.

Feedback appreciated! 
