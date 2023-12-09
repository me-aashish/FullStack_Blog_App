# Full Stack Blog MicroService App 

## Made using NodesJS, ExpressJS, ReactJS

#### Here, I have used two methods for inter-service communication:
- Synchronus Communication
    - Quite easy to implement and easy to understand as well but has quite of some major down sides
- Asynchronus Communication
    - Complex to understand and implement but has huge advantages over Sync Comms
    - For this, I'll build "Event Bus" or "Event Broker" from scratch
- Query Service
    - Query service is used for reducing the cascading network requests in fetching the blogs and then their respective comments
    - Query service will put all the data as requested in a single request.