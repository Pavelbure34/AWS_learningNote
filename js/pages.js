const pages={
    orientation:
        '<h2 class="leftText">OT.Why we should study AWS!</h2>\
        <div>\
            <span class="emphRed">AWS cloud</span>\
             is <span class="emphBlue">a global infrastructure</span>\
              that provides\
              <span class="emphBlue">all the essential IT resources and services</span>\
               to any developers. \
        </div>',
    day01:
        '<h2 class="leftText">day01.Intro to Storage Services</h2>\
        <div>\
            <ul>\
                <h3 class="centerText">Storage options for AWS services</h3>\
                <li><span class="emphRed">Simple Storage Service(S3)</span>\
                    = a <span class="emphBlue">storage</span>\
                     designed to\
                     <span class="emphBlue">store or access to any type of data</span>.\
                     <ul>\
                         <caption>Properties</caption>\
                         <li>Uses <span class="emphBlue">Serverless Server</span></li>\
                         <li>create <span class="emphBlue">Bucket</span> and update it</li>\
                         <li><span class="emphBlue">Theoretically unlimited</span> in size.</li>\
                     </ul>\
                </li>\
                <li><span class="emphRed">Glacier</span>\
                    <ul>\
                        <caption>Properties</caption>\
                        <li>The <span class="emphBlue">cheapest option</span> of storage</li>\
                        <li>Uses <span class="emphBlue">Serverless Server</span></li>\
                        <li>suitable for\
                            <span class="emphBlue">long-term archive data</span>.</li>\
                        <li>allow \
                            <span class="emphBlue">migration from S3 storage</span>\
                            with <span class="emphBlue">life cycle rules</span>.\
                        </li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Elastic Block Store(EBS)</span>\
                    <ul>\
                        <caption>Properties</caption>\
                        <li>very <span class="emphBlue">unaccessible and\
                            low light block</span> storage</li>\
                        <li><span class="emphBlue">\
                            specifically built for attachment</span>\
                             to <span class="emphBlue">Amazon AC2</span> servers</li>\
                        <li>Similar to attaching harddrive to your computer over time.</li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Elastic File System(EFS)</span>\
                    <ul>\
                        <caption>Properties</caption>\
                        <li><span class="emphBlue">network attached</span> storage system</li>\
                        <li>specifically built for\
                             <span class="emphBlue">attachment to Amazon AC2 servers</span></li>\
                        <li>Allows\
                             <span class="emphBlue">multiple server</span>\
                              to\
                              <span class="emphBlue">access to its data sources</span>.\
                        </li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Storage Gateway</span>\
                    <ul>\
                        <caption>Properties</caption>\
                        <li><span class="emphBlue">hybrid storage</span>\
                             between\
                              <span class="emphBlue">onpremise environment and AWS cloud</span></li>\
                        <li>low light performance storing\
                             <span class="emphBlue">low freq. data on cloud</span> and\
                             <span class="emphBlue">high freq. data on onpremise</span>\
                              environment.\
                        </li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Snowball</span>\
                    <ul>\
                        <caption>Properties</caption>\
                        <li><span class="emphBlue">portable pitabyte</span>\
                             scale of storage</li>\
                        <li>used for\
                            <span class="emphBlue">\
                                migrating, enlarging on onpremis\
                                environment over to AWS cloud\
                            </span>.</li>\
                        <li>download data on snowball and send it AWS cloud\
                            which would update data for you.\
                        </li>\
                    </ul>\
                </li>\
            </ul>\
        </div>\
        <div>\
            <h3 class="centerText">Storage Example</h3>\
            <div id="imgs"></div>\
            <div>\
                <h4 class="leftText">General</h4>\
                <ul>\
                    <li>Like adding hard drive to computer,we can add storage to each server.</li>\
                    <li>EFS is mounted to each server and connect to EFS share folder.<br>\
                        So that different server can gain access to each storage.\
                    </li>\
                    <li>\
                        End point of VPC allows storage of itself into 3S bucket and into\
                        Glacier for long term archive.\
                    </li>\
                </ul>\
            </div>\
            <div>\
                <h4 class="leftText">Hybrid</h4>\
                <ul>\
                    <li>Best for\
                        <span class="emphRed">disaster recovery solution</span></li>\
                    <li>prvides\
                         <span class="emphBlue">high speed access to data and durability of S3 storages</span>\
                    </li>\
                    <li>AWS <span class="emphBlue">storage gateway</span>\
                         ensures\
                         <span class="emphBlue">sync between data source and AWS storage</span>.</li>\
                </ul>\
            </div>\
        </div>',
    day02:
        '<h2 class="leftText">day02.Actual Storage Practice</h2>\
        <section>\
            <h3 class="centerText">Let&rsquo;s create S3 storage and store anything!</h3>\
            <ul>\
                <caption>What we are going to do...</caption>\
                <li>Set up cloud environment</li>\
                <li>create S3 bucket</li>\
                <li>upload anything there</li>\
                <li>download file from there</li>\
                <li>Empty the bucket and delete it</li>\
            </ul>\
        </section>\
        <div class="indented">\
            <h4 class="leftText">1.Set up cloud environment</h4>\
            <section id="imgs1"></section>\
            When you get into your account,find\
                <span class="emphBlue">Service</span> option on top header.<br>\
            Go to the storage type you want to tinker with.\
        </div>\
        <div class="indented">\
            <h4 class="leftText">2.create S3 bucket</h4>\
            <section id="imgs2"></section> \
            After clicking <span class="emphBlue">Create Bucket</span>, you are ready to play with S3 bucket!<br>\
            However, <span class="emphRed">bucket name has to be unique but can be anything!</span><br>\
            For this time, since we only make private basic bucket, don&rsquo;t change any setting.<br>\
            Just keep click next!\
        </div>\
        <div class="indented">\
            <h4 class="leftText">3.upload anything there</h4>\
            <section id="imgs3"></section>\
            Once you create a bucket, it is time to fill it!just click on it first!<br>\
            It is basically dumpster. It can be video,file,..anything!<br>\
            You can use <span class="emphBlue">add files</span> option but\
            easiest option is <span class="emphBlue">drag and drop</span>.\
            Since we are just tinkering with basic default S3 storage,<br>\
            click <span class="emphBlue">next and upload</span>.\
        </div>\
        <div class="indented">\
            <h4 class="leftText">4.download file from there</h4>\
            <section id="imgs4"></section>\
            Since you have uploaded, you can download it!<br>\
            if you click the URL in the file description, it will show error.<br>\
            The reason is that we set up as <span class="emphBlue">private object</span>!<br>\
            So if you want to <span class="emphBlue">access it via object URL</span>,\
             set it up as <span class="emphBlue">public and enable website hosting in S3</span>!\
        </div>\
        <div class="indented">\
            <h4 class="leftText">5.Empty the bucket and delete it</h4>\
            <section id="imgs5"></section>\
            Now it is time to delete our bucket!<br>\
            <span class="emphBlue">Choose the folder</span>\
             and <span class="emphBlue">click action and find delete</span>. It will empty the bucket.<br>\
            Go out to the <span class="emphBlue">top menu of S3 service.Choose the bucket. and click delete</span>.<br>\
            Congratulations! Now you have deleted the bucket completely.\
        </div>',
    day03:
        '<h2 class="leftText">day03.Intro to Database</h2>\
        <section>\
            <h3 class="centerText">Types of AWS database</h3>\
            <ul>\
                <li><span class="emphRed">Relational Database Service(RDB)</span>\
                    <ul>\
                        <li><span class="emphBlue">SQL type</span> database.</li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Dynamo Database</span>\
                    <ul>\
                        <li><span class="emphBlue">No-SQL type</span> database.</li>\
                        <li><span class="emphBlue">Serverless</span>, high speed, low lightency</li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Redshift</span>\
                    <ul>\
                        <li><span class="emphBlue">fast</span> pitabyte scale database.</li>\
                        <li>Perfect for <span class="emphBlue">big data storage</span></li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Elasticache</span>\
                    <ul>\
                        <li><span class="emphBlue">in-memory data store or cache in cloud</span></li>\
                        <li>allows you to <span class="emphBlue">retrieve</span>\
                             fast well managed <span class="emphBlue">in-memory cache</span></li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Database Migration Service</span>\
                    <ul>\
                        <li>helps you <span class="emphBlue">migration of data securely</span></li>\
                        <li>even <span class="emphBlue">between</span>\
                             two <span class="emphBlue">completely different</span> databases!</li>\
                    </ul>\
                </li>\
                <li><span class="emphRed">Neptune</span>\
                    <ul>\
                        <li>fast reliable fully managed <span class="emphRed">graph</span> database.</li>\
                        <li>perfect building <span class="emphBlue">relationship among data</span></li>\
                    </ul>\
                </li>\
            </ul>\
        </section>\
        <section>\
            <h3 class="centerText">Database service example I</h3>\
            <div id="img1"></div>\
            <ul>\
                <caption>How it is done!</caption>\
                <li>From corporate data base to RDS,\
                        <span class="emphBlue"> Database Migration Service</span>\
                     helps <span class="emphBlue">connnected and provide workflow</span>.\
                </li>\
                <li><span class="emphBlue">Elastic Cache</span> provides fast,\
                    <span class="emphBlue">light data retrieval and update</span> to\
                     RDS\
                    and significantly <span class="emphBlue">lighten load of RDS</span>.\
                </li>\
                <li><span class="emphBlue">VPC</span>\
                     allows <span class="emphBlue">afe workflow</span>.</li>\
            </ul>\
        </section>',
    day04:
        `<h2 class="centerText">day04.Actual Database Practice</h2>
        <section>
            <div id="img1"></div>
            <ol>
                <caption>What we will do here</caption>
                <li>we will <span class="emphBlue">create SQL database in VPC</span></li>
                <li>And get <span class="emphBlue">access to it remotely</span></li>
                <li>Do <span class="emphBlue">all the operations!</span></li>
            </ol>
        </section>
        <section>
            <h3 class="centerText">1.Create SQL db in VPC</h3>
            <div id="imgs1"></div>
            <ol>
                <li>If you haven&rsquo;t created one,create it.</li>
                <li>Select database type.
                    <ul>
                        <li>Since we only practice it, find free tier.</li>
                    </ul>
                </li>
                <li>
                    For now,check Instance class. Choose db.t2.micro.
                </li>
                <li><span class="emphBlue">Name of the database</span>
                    has to be <span class="emphRed">unique</span>.</li>
                <li>Don&rsquo;t bother changing advanced settings for now!</li>
            </ol>
        </section>
        <section>
            <h3 class="centerText">2.remote access to SQL db in VPC</h3>
            <div id="imgs2"></div>
            <ol>
                <li>Now db created,check for <span class="emphRed">end point</span>.
                    <ul>
                        <li>it is going to be the
                            <span class="emphBlue">access point to this</span>.</li>
                    </ul>
                </li>
                <li>
                    Open MySQL workBench for access to your DB.
                </li>
                <li>
                    For <span class="emphBlue">creating SQL server</span>,
                    use <span class="emphBlue">end point of your RDS</span>
                    as <span class="emphRed">host name</span>.
                </li>
                <li>For <span class="emphBlue">master user for local MYSQL</span>,
                    use <span class="emphBlue">the same name of master user for RD and password</span>
                    for <span class="emphRed">remote connection</span>.</li>
            </ol>
        </section>`,
    day05:
        `<h2>Intro to Computing and Network Services</h2>
        <section>
            <h3 class="cetnerText">AWS Compute Services</h3>
            <ul>
                <li><emR>Elastic Compute Cloud</emR>
                    <div class="indented">
                        This is a virtual computer that is elastic and
                        perfectly customizable.
                    </div>
                </li>
                <li><emR>EC2 Auto Scaling</emR>
                    <div class="indented">
                        This automatically auto-scales capacity of EC2 instances.<br>
                        up or down.
                    </div>
                </li>
                <li><emR>Amazon Lightsail</emR>
                    <div class="indented">
                        Perfect for launching a virtual web server application<br>
                        for AWS will get you everything.
                    </div>
                </li>
                <li><emR>Elastic Container Service(ECS)</emR>
                    <div class="indented">
                        Highly effective container service(like docker containers).
                    </div>
                    <li><emR>AWS Lambda</emR>
                        <div class="indented">
                            Serverless computing service.
                            It lets you run code with ease<br>
                            for you don't have to manage server and application<br>
                            while testing your code.Upload the code and AWS will
                            do everything.
                        </div>
                    </li>
                </li>
            </ul>
            <section>
                <h4>Examples of Web Server</h4>
                <img
                    src="./image/day05/webServerExample.png"
                    witdh="700"
                    height="400"
                    alt="MultiAZ"
                >
                <ul>
                    <li><emR>EC2 auto-scaling and its group</emR>
                        will increase or decrease the EC2 instances according
                        to the demand dynamically.
                    </li>
                    <li>
                        <emR>Elastic Load Balancer</emR>(<emB>ELB</emB>) will
                        distribute the traffice and check health of each instances.
                    </li>
                </ul>
            </section>
        </section>
        <section>
            <h3 class="cetnerText">AWS Network and Content Delivery Services</h3>
            <ul>
                <li><emR>Amazon CloudFront</emR>
                    <div class="indented">
                        global content delivery network among
                        edge location. effective for its low lightency.
                    </div>
                </li>
                <li><emR>Virtual Private Cloud(VPC)</emR>
                    <div class="indented">
                        logical private space for launching your server or application.<br>
                        it can  fight d-dos attack.
                    </div>
                </li>
                <li><emR>Amazon Direct Connect(DX)</emR>
                    <div class="indented">
                        high speed and effective private connect
                        that does not internet connection.
                    </div>
                </li>
                <li><emR>Elastic Load Balancer(ELB)</emR>
                    <div class="indented">
                        distributing incoming traffic among other instances.
                    </div>
                </li>
                <li><emR>Amazon Route53</emR>
                    <div class="indented">
                        handle traffic, domain name service.
                    </div>
                </li>
                <li><emR>Amazon API gateway</emR>
                    <div class="indented">
                        provides secure application programming interfaces<br>
                        serverless servers.Perfect management service.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h4>Examples</h4>
            <div>
                <img
                    src="./image/day05/MultiAZ.png"
                    witdh="700"
                    height="400"
                    alt="WebServerExample"
                >
                <ul>
                    <li>Using <emB>two separate availability zone</emB>(default for one VPC)
                        ensures high
                        <emR>availability</emR> even when one of them is out of service.
                    </li>
                    <li>
                        Using Auto-scaling and ELB ensures high availability.
                    </li>
                </ul>
            </div>
            <div>
                <img
                    src="./image/day05/directConnect_cloudFront.png"
                    witdh="700"
                    height="400"
                    alt="directConnect_cloudFrontExample"
                >
                <ul>
                    <li>cloudFront ensures distribution of large images and vidoes
                        across the edge locations.
                    </li>
                    <li>
                        When requested, CloudFront will deliver it fast.
                        When changing, CloudFront will accept the request from client.
                    </li>
                    <li>
                        Route53 will give its DNS name so making web forwarding easy.
                    </li>
                    <li>
                        Corporate Data center will need Direct Connet(DX) for fast
                        internetles private connection.
                    </li>
                </ul>
            </div>
        </section>`,
    day06:
        `<h2>Intro to Management System</h2>
        <section>
            <h3 class="centerText">Management Services</h3>
            <ul>
                <li><emR>Amazon CloudFormation</emR>
                    <div class="indented">
                        text files to define my infrastructure.
                        as code and manage with the same version control tool.
                    </div>
                </li>
                <li><emR>Amazon Service Catalog</emR>
                    <div class="indented">
                        It allows enterprise catalog resources deployable in the cloud.
                        It helps define what is allowed clearly.
                    </div>
                </li>
                <li><emR>Amazon CloudWatch</emR>
                    <div class="indented">
                        It monitors services on cloud resources and applications.
                        and can Trigger scaling operations with auto-scaling and elastic balancer.
                    </div>
                </li>
                <li><emR>Amazon System Manager</emR>
                    <div class="indented">
                        It provides unified user interface.
                        and shows operational data in multiple AWS services
                        for automating tasks in cloud resources.
                    </div>
                </li>
                <li><emR>Amazon CloudTrail</emR>
                    <div class="indented">
                        It Monitors and logs AWS activities.
                        good for simplified analysis and security of activity.
                    </div>
                </li>
                <li><emR>Amazon Config</emR>
                    <div class="indented">
                        It assists, orders, evaluates AWS resources.
                        It is good for security analysis, operation trouble shooting.
                    </div>
                </li>
                <li><emR>Amazon Opswork</emR>
                    <div class="indented">
                        Managed instances of "shift n puppet".
                        It automates deployment of AWS resources.
                    </div>
                </li>
                <li><emR>Amazon Trusted Advisor</emR>
                    <div class="indented">
                        It advises you how to achieve opitmization
                        including cost, availability, and security.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h4>Example</h4>
            <blockquote>
                Let's make an simple architecture that telling us when billing exceeds
                the limit.
                <ul>
                    <caption>we will be using</caption>
                    <li>SNS topic</li>
                    <li>AWS cloudWatch Alarm</li>
                    <li>Billing and Cost Management</li>
                </ul>
            </blockquote>
            <ol>
                <li>click dashboard</li>
                <li>click preference</li>
                <li>check billing alerts</li>
                <li>enable billing alarm</li>
                <li>go to cloudwatch in service</li>
                <li>create an alarm
                    <ul>
                        <li>name the alarm</li>
                        <li>Choose the metric.
                            <ul>
                                <li>For billing, choose the region US.EAST(N.Virginia)</li>
                            </ul>
                        </li>
                        <li>Do the rest of them.</li>
                    </ul>
                </li>
                <li>go to Simple Notification Service</li>
                <li>Check the topic you have created during alarm creation</li>
                <li>You are all set. Keep it since it is always good to set up billing alarm.</li>
            </ol>
        </section>`,
    day07:
        `<h2>Intro to Application Service</h2>
        <section>
            <h3 class="centerText">Application Integration Services</h3>
            <ul>
                <li><emR>Step Functions</emR>
                    <div class="indented">
                        It helps coordinate
                        components of distrubuted resources of micro-services
                        using visual work-flow. best for new businesses<br>
                        -define step by step of application deployment.<br>
                        -then make it automate it.
                    </div>
                </li>
                <li><emR>Amazon Simple WorkFlow Service</emR>
                    <div class="indented">
                        It works similar to Step functions.
                    </div>
                </li>
                <li><emR>Amazon Simple Notification Service</emR><emB>(SNS)</emB>
                    <div class="indented">
                        creating topic, subscribing to that topic to receive the message.<br>
                        It also supports push notifiation for mobile devices.
                    </div>
                </li>
                <li><emR>Amazon Simple Queue Service</emR><emB>(SQS)</emB>
                    <div class="indented">
                        It builds up messages
                        in the queue in the processing server
                        so that it meets the demand.
                    </div>
                </li>
            </ul>
            <div>
                <h4>Example</h4>
                <img
                    src="./image/day07/example1.png"
                    width="600"
                    height="400"
                    alt="example"
                >
                <ul>
                    <li>Messages keep incoming to SQS instance</li>
                    <li>EC2 application for message handling under the auto scaling group will change its volume
                        according to size of incoming messages.
                    </li>
                    <li>handled message will be deleted from the Queue.</li>
                    <li>When too many messages enter the queue</li>
                    <li>CloudWatch connected to SQS will notify the auto scaling to expand more EC2 instances.</li>
                    <li>so that EC2 instances can handle messages in demand and keep deleting handled ones.</li>
                    <li>and you get notification messages from SNS</li>
                </ul>
            </div>
        </section>
        <section>
            <h3 class="centerText">Customer Engagement Services</h3>
            <ul>
                <li><emR>Amazon Connect</emR>
                    <div class="indented">
                        As self-service contact service,
                        it provides drag and drop graphical interface for
                        users
                        making customer experience smooth and better.
                    </div>
                </li>
                <li><emR>Amazon Pinpoint</emR>
                    <div class="indented">
                        It allows push messages, emails, notificaiton 
                        to the targeted marketing campaigns as well as
                        direct messages such as confirm order messages.
                    </div>
                </li>
                <li><emR>Amazon Simple Email Service</emR>(SES)
                    <div class="indented">
                        cloud based service sending emails.
                    </div>
                </li>
            </ul>
        </section>`,
    day08:
        `<h2>Intro to Analytics and Machine Learning</h2>
        <section>
            <h3 class="centerText">Analytics Services</h3>
            <ul>
                <li><emR>Amazon EMR</emR>
                    <div class="indented">
                        Hadoop Framework that is integrable with Apache,
                        Spark, etc.Data can be analyzed into S3, DynamoDB.
                    </div>
                </li>
                <li><emR>Amazon Athena</emR>
                    <div class="indented">
                        It allows you to Data store in S3 bucket with standard SQL statment.
                    </div>
                </li>
                <li><emR>Amazon Elastic Search</emR>
                    <div class="indented">
                        fully managed services. Elastic dot cuase for elastic framework.<br>
                        high speed query among AWS resources.
                    </div>  
                </li>
                <li><emR>Amazon Kinesis</emR>
                    <div class="indented">
                        collect process and analyze real time streaming data.
                    </div>
                </li>
                <li><emR>Amazon QuickSight</emR>
                    <div class="indented">
                        fully managed business intelligent reporting tool.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Machine Learning Service</h3>
            <ul>
                <li><emR>DeepLens</emR>
                    <div class="indented">
                        deep learning video camera. Advanced Vision system application.
                    </div>
                </li>
                <li><emR>SageMaker</emR>
                    <div class="indented">
                        build and launnch my own Machine learning model 
                    </div>
                </li>
                <li><emR>Amazon Rekognition</emR>
                    <div class="indented">
                        deep learning based analysis of video and images
                    </div>
                </li>
                <li><emR>Amazon Lex</emR>
                    <div class="indented">
                        machine learning for conversational chatbot.
                    </div>
                </li>
                <li><emR>Amazon Polly</emR>
                    <div class="indented">
                        takes natural sound for speech
                    </div>
                </li>
                <li><emR>Amazon Comprehend</emR>
                    <div class="indented">
                        used for analysis of text for inside relationships.<br>
                        customer analysis and advanced searhcing documents.
                    </div>
                </li>
                <li><emR>Amazon Translate</emR>
                    <div class="indented">
                        It accurately translate texts into different languages.
                    </div>
                </li>
                <li><emR>Amazon Transcribe</emR>
                    <div class="indented">
                        It is voice recognition and store text in the S3 and
                        return the transcribed texts.
                    </div>
                </li>
            </ul>
            <div>
                <h4>Let&rsquo;s try Amazon Rekognition</h4>
                <ol>
                    <li>go to Rekognition Service</li>
                    <li>Try Demo</li>
                    <li>and see what it can do.</li>
                </ol>
            </div>
        </section>`,
    day09:
        `<h2>Intro to Security, Identity, and Compliance.</h2>
        <section>  
            <h3 class="centerText">Related Services</h3>
            <ul>
                <li><emR>AWS Artifact</emR>
                    <div class="indented">
                        It gives online access to AWS security,Compliance, and access documents.
                    </div>
                </li>
                <li><emR>AWS Certificate Manager</emR>
                    <div class="indented">
                        It issues SSL certificate for HTTP comunication within my website.<br>
                        It is integrable with Route53 and CloudFront.<br>
                        Certificates given with this is free.
                    </div>
                </li>
                <li><emR>Amazon Cloud Directory</emR>
                    <div class="indented">
                        cloud-based directory service providing hierachies of datas
                    </div>
                </li>
                <li><emR>AWS Directory Service</emR>
                    <div class="indented">
                        fully management microsoft active directory service in AWS cloud.
                    </div>
                </li>
                <li><emR>AWS Cloud HSM</emR>
                    <div class="indented">
                        dedicated hardware security module in AWS cloud.<br>
                        It allows to have corporate and regular
                        tree compliances as well as lower cost with own HMS.
                    </div>
                </li>
                <li><emR>Amazon Cognito</emR>
                    <div class="indented">
                        It provides sign-in and sign-out functions to
                        mobile or web applications.<br>
                        It can be used with Facebook or Google login.
                    </div>  
                </li>
                <li><emR>AWS Identity Access Management(IAM)</emR>
                    <div class="indented">
                        Manage user or group of users access and accesses.
                    </div>
                </li>
                <li><emR>AWS Organizations</emR>
                    <div class="indented">  
                        policy based management over large number of resources.
                        best for large scale of organization.
                    </div>
                </li>
                <li><emR>Amazon Inspector</emR>
                    <div class="indented">
                        It is automated security assessment service
                        that detects vulnerability and spots for improvement.
                    </div>
                </li>
                <li><emR>AWS Key Management Service(KMS)</emR>
                    <div class="indented">
                        It provide easy services of keys management for
                        encryped data.<br>
                        It also provides Hardware security module and  integrable well with  
                        S3 Redshift and ABS
                    </div>
                </li>
                <li><emR>AWS Shield</emR>
                    <div class="indented">
                        It provide protection against D-dos attack.<br>
                        standard version is implemented automatically.
                    </div>
                </li>
                <li><emR>Web Application Firewall(WAF)</emR>
                    <div class="indented">
                        Additional firewall against SQL injection, cross site conflicting.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h4>Let&rsquo;s try Identity Access Management(IAM)!</h4>
            <ul>
                <caption><emR>Warning</emR></caption>
                <li>DON&rsquo;T USE ROOT ACCOUNT WHEN WORKING WITH MANY PEOPLE
                    WITH DIFFERENT ROLE.
                </li>
                <li>
                    DELETE ROOT USER KEY PAIR!
                </li>
            </ul>
            <ol>
                <li>Go to IAM service.</li>
                <li>click for users</li>
                <li>click for create user</li>
                <li>write the user name and allow AWS management console access</li>
                <li>get the sign in url and log in.</li>
                <li>in order to set up the root user credential, log out and 
                    log in as root.
                </li>
                <li>
                    go to security credential and do it!
                </li>
            </ol>
        </section>`,
    day10:
        `<h2>Intro to Developer,Media, Mobile, Migration, Business, IoT</h2>
        <section>
            <h3 class="centerText">AWS Developers Tool</h3>
            <ul>
                <li><emR>AWS Cloud9</emR>
                    <div class="indented">
                        Integrated running environment that 
                        are used extensively for developer associate pathway
                    </div>
                </li>
                <li><emR>AWS CodeStar</emR>
                    <div class="indented">
                        It makes easy to develop and deploy application
                        by managing entire CICD pipeline for developers.
                    </div>
                </li>
                <li><emR>X-Ray</emR>
                    <div class="indented">
                        It analyzes, debugs the application.
                    </div>
                </li>
                <li><emR>AWS CodeCommit</emR>
                    <div class="indented">
                        Like Git repostory in AWS environment
                    </div>
                </li>
                <li><emR>AWS PipeLine</emR>
                    <div class="indented">
                        Continuous integeration and continuous Delivery(CICD)
                        service
                        that builds, tests, deploys my code everytime change occurs.
                    </div>
                </li>
                <li><emR>AWS CodeBuild</emR>
                    <div class="indented">  
                        It compiles my source code and runs, produces software packages
                        ready to be deployed.
                    </div>
                </li>
                <li><emR>AWS CodeDeploy</emR>
                    <div class="indented">
                        It automates software deployment in variety computing system in AWS.<br>
                        It cane be applied to EC2, Lambda, and on premises.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">AWS Media Services</h3>
            <ul>
                <li><emR>Elemental MediaConvert</emR>
                    <div class="indented">
                        File based vidoe coding service
                        converting vidoe format. 
                    </div>
                </li>
                <li><emR>Elemental MediaPackage</emR>
                    <div class="indented">
                        video content delivery over internet
                        while protecting from piracy.
                    </div>
                </li>
                <li><emR>Elemental MediaTailor</emR>
                    <div class="indented">
                        It inserts individual targeted advertisement into video streams.
                    </div>
                </li>
                <li><emR>Elemental MediaLive</emR>
                    <div class="indented">
                        Broadcast grade live video streaming service
                        for TV and internet connected device.
                    </div>
                </li>
                <li><emR>Elemental MediaStore</emR>
                    <div class="indented">
                        Storage service in AWS cloud optimized for media.
                    </div>
                </li>
                <li><emR>Kinesis Video Streams</emR>
                    <div class="indented">
                        streams video to the connected devices through AWS cloud<br>
                        for analytics, machine learning , and other processing applications.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Mobile Services</h3>
            <ul>
                <li><emR>AWS Mobile Hub</emR>
                    <div class="indented">
                        It configures AWS services for mobile application.
                    </div>
                </li>
                <li><emR>AWS device Farm</emR>
                    <div class="indented">
                        App testing service for Android, iOS and web application
                        allowing tests on various devices in AWS cloud.
                    </div>
                </li>
                <li><emR>AWS appSync</emR>
                    <div class="indented">
                        graphQL backend for web and mobile applications
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Migration Service</h3>
            <ul>
                <li><emR>AWS Application Discovery Service</emR>
                    <div class="indented">
                        gathers info about enterprise's on-premises environment.
                    </div>
                </li>
                <li><emR>AWS Database Migration Service</emR>
                    <div class="indented">
                        orhcestrates database migration from one to other type also.
                    </div>
                </li>
                <li><emR>AWS Server Migration Service.</emR>
                    <div class="indented">
                        can automate migration thousands workload to AWS clouds.
                    </div>
                </li>
                <li><emR>AWS SnowBall</emR>
                    <div class="indented">
                        portable pitabyte scale data storage. 
                    </div>  
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Business Productivity and Desktop streaming Application</h3>
            <ul>
                <li><emR>Amazon Chime</emR>
                    <div class="indented">
                        ONline meeting service in AWS cloud.
                        video chat, conference, sharing contetns...
                        inside and outside the organization
                    </div>
                </li>
                <li><emR>Amazon WorkDocs</emR>
                    <div class="indented">
                        secured fully managed file collaboration, managment service
                        supporting 35 types of document including wordDoc and pdf. 
                    </div>
                </li>
                <li><emR>Amazon Work Mail</emR>
                    <div class="indented">
                        secured managed business email and calendar service.
                    </div>
                </li>
                <li><emR>Amazon Workspaces</emR>
                    <div class="indented">
                        fully managed, secure cloud based desktop service.
                        provision, streaming Microsoft desktop Windows.
                    </div>
                </li>
                <li><emR>Amazon AppStream 2.0</emR>
                    <div class="indented">
                        fully managed, secured streaming service streaming
                        desktop Application from AWS to HTML5 web browser<br>
                        good for users who want access from anywhere.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Internet of Things(IoT)</h3>
            <ul>
                <li><emR>AWS IoT</emR>
                    <div class="indented">
                        Managed Cloud platform for embedded devices such as Raspberry Pie
                        allowing those devices securely intereact with AWS cloud. 
                    </div>
                </li>
                <li><emR>Amazon FreeRTOS</emR>
                    <div class="indented">
                        Operational System for micro controllers
                        allowing low cost, low powered devices for connetion to AWS IoT
                    </div>
                </li>
                <li><emR>AWS Greengrass</emR>
                    <div class="indented">
                        software allowing you to run local AWS lambda functions,
                        messaging, database sync, mahcine learning application to<br>
                        AWS IoT devices.
                        It extends AWS services to the devices.
                    </div>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">AWS Game Development</h3>
            <ul>
                <li><emR>Amazon Gamelift</emR>
                    <div class="indented">
                        It deploys, scales, manages game server in AWS cloud.
                    </div>  
                </li>
                <li><emR>Amazon Lumberyard</emR>
                    <div class="indented">
                        Game development environment and platform for AAA games
                        in AWS cloud. 
                    </div>
                </li>
            </ul>
        </section>`,
    day11:
        `<h2>Intro to AWS CLI</h2>
        <section>
        In order to use AWS CLI,
        you need security key pairs.
        </section>
        <section>
            <h3 class="centerText">Let&rsquo;s make AWS resources with CLI in cloud9!</h3>      
            <blockquote>
                <h4>We will do</h4>
                <ol>
                    <li>Create Clout9 environment</li>
                    <li>Create S3 bucket with CLI</li>
                    <li>Delete/upload an object</li>
                    <li>Delete the bucket</li>
                </ol>
            </blockquote>
            <ol>
                <li>search Cloud9 in the service.
                    <ol>
                        <li>create a new namespace</li>
                        <li>go for default settings for now.</li>
                        <li>Wait for it til it is done.</li>
                    </ol>
                </li>
                <div class="indented">
                    <img
                        src="./image/day11/cloud9.png"
                        width="700"
                        height="400"
                        alt="cloud9"
                    >
                    <ol class="indented">
                        <caption>Interfaces</caption>
                        <li>file system: shows the file structures. provide drag and drop features.</li>
                        <li>tab: shows the details for tiles.</li>
                        <li>bash: linux CLI</li>
                        <li>top navigation: self-explanatory</li>
                    </ol>
                </div>
                <li>check for versions of installed APIs with <emB>aws --version</emB>
                    in the bash</li>
                <li>write <emB>aws s3 mb s3://<emR>bucketname</emR></emB> for making s3 bucket
                    in the bash</li>
                <li>upload a local file in <emB>file -> Upload Local file</emB></li>
                <li>upload file with <emB>aws s3 cp <emR>fileName</emR>
                    s3://<emR>bucketName</emR></emB></li>
                <li>delete file in the bucket with
                    <emB>aws s3 rm s3://<emR>bucketname</emR>/<emR>fileName</emR></emB></li>
                <li>delete the bucket with
                    <emB>aws s3 rb s3://<emR>bucketname</emR></emB>
                </li>
                <li>see more command for https://aws.amazon.com/cli</li>
                <li>for S3, it is better to use s3api then s3
                    since the former has extensive features.</li>
                <li>and make sure you delete cloud9 namespace for not gettng bill</li>
            </ol>
        </section>`,
    day12:
        `<h2>Intro to Elastic BeanStalk</h2>
        <section>
            <h3 class="centerText">What is Elastic BeanStalk?</h3>
            <blockquote>
                As one of the deployment service.
                <ul>
                    <li>It provides easy deployment of your application in AWS cloud.
                        <ul>
                            <caption>various platforms supported</caption>
                            <li>docker containers</li>
                            <li>node.js, Java, .net, PHP, Ruby, PYthon, Go</li>
                            <li>Apache, etc...</li>
                        </ul>
                    </li>
                    <li>It Perfecly manages service(just write your own code)
                        <ul>
                            <caption>automating</caption>
                            <li>Elastic Load Balancing(EBL)</li>
                            <li>Auto Scaling</li>
                            <li>CloudWatch(Health Monitoring)</li>
                        </ul>
                    </li>
                    <li>It provides highly available fault-tolerant architecture.</li>
                    <li>It provides different deployment options.
                    <ul>
                        <li>all at once</li>
                        <li>Rolling(a batch at a time):for example,two instances at a time</li>
                        <li>rolling with additional batch:for example,two instances at a time</li>
                        <li>immutable(two envrionments temp):double up the capacity for no down time.</li>
                        <li>blue-green(two envrionments):using two environments such as dev and test ones.</li>
                    </ul>
                    </li>
                </ul>
            </blockquote>
        </section>
        <section>
            <h4>How it is processed</h4>
            <img
                src="./image/day12/beanStalkProcess.png"
                width="600"
                height="300"
                alt="procedures"
            >
            <ol>
                <li>you first code and create the application</li>
                <li>upload the version</li>
                <li>launch and manage the application</li>
                <li>within the loop, any update will be applied easily.</li>
            </ol>
        </section>
        <section>
            <h4>What is highly-available fault-tolerant architecture?</h4>
            <img
                src="./image/day12/fault_tolerant.png"
                width="700"
                height="400"
                alt="architecture"
            >
            <ul>
                <li>auto-scaling, load balancer ensures the maximized availability.</li>
                <li>it does it all for you.</li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Let&rsquo;s deploy an example Node.Js server with BeansStalk!</h3>
            <ol>
                <li>go to Elastic BeanStalk in services.</li>
                <li>choose Node.js for now as application type.</li>
                <li>click for more configuration in order to set up highly available environment.</li>
                <li>click high availability(change the set up if you want)</li>
                <li>create the app.</li>
                <li>wait for the app to be created.</li>
                <li>check for Load Balancer and EC2 instance created by BeanStalk.</li>
                <li>If there is good job!</li>
                <li>delete Beanstalk one to not to get billing notice.</li>
            </ol>
        </section>`,
    day13:
        ``,
    day14:
        ``,
    day15:
        ``
}