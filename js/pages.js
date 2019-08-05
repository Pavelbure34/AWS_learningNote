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
        `<h2>Business Case of AWS</h2>
        <section>
            <h4>Why cloud infrastructure?</h4>
            <ol>
                <li>saving infrastructures for on-premise environment.</li>
                <li>benefit from scalable economies of AWS</li>
                <li>agile and flexible for meeting customer requests</li>
                <li>easy deployment and global distribution in a second.</li>
            </ol>
        </section>
        <section>
            <h4>How to estimate the cost?</h4>
            Go for AWS simple monthly cost and see!
        </section>
        <section>
            <h4>Total cost of Ownership(TCO)</h4>
            go https://www.awscocalculator.com
            when we say about server cost, we include both hardware and software costs.
        </section>
        <section>
            <h4>Amazon Inspector</h4>
            It is very cheap and available service
            helpig you to see how to maximize security while lowering the costs.
        </section>
        <section>
            <h4>AWS Compliance Program</h4>
            It helps you comply to different and various compliant regulations and services.
            so that you can be certified.
            <div>
                <h5 class="centerText">Compliant</h5>
                <ul>
                    <li>SOC1</li>
                    <li>etc...</li>
                </ul>
            </div>
            <div>
                <h5 class="centerText">Compliance-Enabling</h5>
                <ul>
                    <li>CJIS</li>
                    <li>Cloud Security Alliance(CSA)</li>
                    <li>FERPA</li>
                    <li>HIPAA</li>
                    <li>etc..</li>
                </ul>
            </div>
        </section>`,
    day14:
        `<h2>AWS architecture and compliance</h2>
        <section>
            <h3 class="centerText">What is being an arhcitect using AWS services?</h3>
            It means you make use of available AWS services for your architecture<br>
            in order to carry out the intented functions such as running a web application servers
            or running a service. 
        </section>
        <section>
            <h3 class="centerText">What is a good architecture?</h3>
            Three factors in general make so called good architecture.
            <blockquote>
                <ol>
                    <li>security:IAM,CloudTrail,security group,threat evalution and solution plan</li>
                    <li>cost optimization: cutting unnecessary cost,efficiency evaluation,perfect-management service</li>
                    <li>functional efficiency: dynamic resource allocation,fast recovery and appeasement from temporary break downs or errors.</li>
                    <li>easy management</li>
                    <li> sturdiness</li>
                </ol>
            </blockquote>
        </section>`,
    day15:
        `<h2>IAM, Organisations, CloudTrail, shared responsbility model</h2>
        <section>
            AWS has the shared responsibility model with customers.<br>
            <img
                src="image/day15/sharedRespon.png"
                width="700"
                height="400"
                alt="responbility"
            >
            <ul>
                <li>customer is responsible for the contents.</li>
                <li>SSL, clientSide encryptions, or anything outside the hardware security.</li>
                <li>Access and authoirty of other users.</li>
                <li>it varies depending on services.
                    <ul>
                        <li>In perfectly managed services, AWS takes more responbility.</li>
                        <li>Abstract service, AWS takes more also like S3.<br>
                            Ex)S3, Glacier,DynamoDB,Lambda,SQS,SES
                        </li>
                        <li>for infrastructure service, customer takes more such OS, update of OS.<br>
                            EX)EC2
                        </li>
                        <li>For container Service,it takes for more than infrascture.<br>
                            You are responsible for security here.<br>
                            Ex)Elastic Beanstalk, RDR, EMR
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">IAM</h3>
            <blockquote>
                It helps manage users or groups, policies and roles and control
                accesses, authorities over AWS services and resources.
            </blockquote>   
            Most importantly, it is FREEE and global.
            <ul>
                <caption>Users</caption>
                <li>non-AWS account user who has access resources in your account.</li>
                <li>name, credentials</li>
                <li>has access keys for maximum 2 for each</li>
                <li>password policies:
                    minimum length, specific characters, customization by IAM users
                </li>
                <li>When signing as IAM user, you are given with URL.</li>
                <li>Users can be organized into groups with specific policies or roles.<br>
                    and they cannot be nested.
                </li>
            </ul>
            <ul>
                <caption>Roles</caption>
                <li>based policies, define permissions</li>
                <li>can be given to roles, applications, services and even other companies.</li>
                <li>or another account</li>
                <li>can be used to give permission temporarily using<br>
                    Cognito, OAUTH(Facebook, Google),LADP
                </li>
            </ul>
            <ul>
                <caption>Policies</caption>
                <li>a JSON type statement telling WHO gets access</li>
                <li>on WHICH resources about WHICH action possible.</li>
                <li>basis for Roles.</li>
                <li>User-based
                    -attachable to user, group, role.                        
                </li>
                <li>Resource-based
                    -can only be given to S3, Glacier, SNS, SQS, Key management.
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">AWS Organisations</h3>
            <blockquote>
                It helps manage users, groups, policies, roles
                among multiple accounts
                in the large organisations.
            </blockquote>
            
        </section>
        <section>
            <h3 class="centerText">AWS CloudTrail</h3>
            <blockquote>
                It tracks all the activities in AWS cloud.
            </blockquote>
            It is very important for number of reasons.
            <ul>
                <li>AWS management console, CLI, SDK all use AWS APIs.</li>
                <li>AWS can log calls to AWS services from APIs</li>
                <li>Logs are stored in S3 bucket and can be used for alert security in SNS.</li>
            </ul>
        </section>
        <section>
            <h4>Useful tips</h4>
            <ul>
                <li>LOCK your freakin root account with MFA and freaking long password and delete root key pair. </li>
                <li>Use admin IAM user unless you have to change credit card information then root.</li>
                <li>Use groups for managing IAM users controlling access and authority of services and resources. </li>
                <li>Never give big authorities to any IAM users except admin. </li>
                <li>Use Roles when giving permissions. </li>
                <li>Always monitor the activtities with CloudTrails. </li>
                <li>Always turn on MFA(Multi Factor Authentication) </li>
                <li>Configure good and strong password for IAM users. </li>
                <li>Rotate the credentials.</li>
                <li>Remove unnecessary credentials(remove IAM users when gone)! </li>
                <li>Use AWS defined policies for MFA! </li>
            </ul>
        </section>`,
    day16:
        ` <h4>MFA</h4>
        If your root account is compromised, it is the most dangerous problem.<br>
        So it is always good to activate MFA for your root account and only
        use it for necessities. A good application for that is Authy.`,
    day17:
        `<h2>Elastic Compute Cloud(EC2) Recap</h2>
        <section>
            <ul>
                <caption>Navigation</caption>
                <li><a href="#1">EC2 Purchasing Options</a></li>
                <li><a href="#2">EC2 Instance Types</a></li>
                <li><a href="#3">EC2 Fleet</a></li>
                <li><a href="#4">Amazon Machine Image(AMI)</a></li>
                <li><a href="#5">EC2 instance states</a></li>
                <li><a href="#6">EC2 Life Cycle</a></li>
                <li><a href="#7">EC2 Cluster Networking</a></li>
                <li><a href="#8">EC2 Storage Options</a></li>
                <li><a href="#9">EC2 Remote Access</a></li>
            </ul>
        </section>
         <section id="1">
            <h3 class="centerText">EC2 Purchasing Options</h3>
            <ul>
                <li>on-demand Instances
                     :You pay only for what you actually used.
                </li>
                <li>Spot Instances
                     :Request for unused instances which is best for batch type process in big data.
                </li>
                <li>Reserved Instances
                     :purchase instances always available from one to three year term with discount.
                </li>
                <li>Scheduled Instances
                     :you pay for instances always available for specific recurring schedule
                     for yearly term.
                 </li>
                 <li>Dedicated(tenant) Instances
                     :you pay for the tenant instances by hour 
                </li>
                <li>Dedicated Hosts
                     :You pay for the physical host fully available for you.
                 </li>
            </ul>
         </section>
         <section id="2">
             <h3 class="centerText">EC2 Instance Types</h3>
             Linux or Windows server available!
             <ul>
                 <li>General Purposes
                     <div class="indented">
                         Ex)T2, M3, M4.<br>
                         It is good for backend servers.
                     </div>
                 </li>
                 <li>Compute Oriented
                     <div class="indented">
                         Ex)C3, C4.<br>
                         It is good for web servers, batch process.
                     </div>
                 </li>
                 <li>Memory Optimized
                     <div class="indented">
                         Ex)X1, R3, R4.<br>
                         It is good for fast data processing.
                     </div>
                 </li>
                 <li>GPU/Accelerated Computing
                     <div class="indented">
                         Ex)G2, G3.<br>
                         It is great for AI, Machine Learning, graphic video encoding.
                     </div>
                 </li>
                 <li>Storage Optimized
                     <div class="indented">
                         Ex)I3,I1, D2.<br>
                         It is great for anything that requires a large data set.
                     </div>
                 </li>
                 <li>
                     Bare Metal Instances
                     <div class="indented">
                         ex)i3,m5.metal, r5.metal, z1d.metal<br>
                         instances which OS is directly running on and non-virtualized.<br>
                         They are good for specialize workloads requiring
                          direct access to metal structure.
                     </div>
                 </li>
                 <li>
                     Burstabe Performance Instances
                     <div class="indented">
                         ex)T2,T3<br>
                         
                     </div>
                 </li>
             </ul>
         </section>
         <section id="3">
             <h3 class="centerText">EC2 Fleet</h3>
             <blockquote>
                 It helps you launch a group(fleet) of instances.
                 good for mix of on-demand and spot instances or whatever.
             </blockquote>
             <ul>
                 <li>unlimited number of instances type per fleet</li>
                 <li>on-demand and spot purchasing options.</li>
                 <li>only available through API/SDK or AWS CLI</li>
                 <li>multiple availability zones</li>
                 <li>separate EC2 fleet for each region</li>
                 <li>No additional chage for using EC2</li>
             </ul>
         </section>
         <section id="4">
             <h3 class="centerText">Amazon Machine Image(AMI)</h3>
             <blockquote>
                 It provides essential information for EC2 instances to be launched.
             </blockquote>
             <ul>
                 <li>AWS marketplace for trial versions and give-aways.</li>
                 <li>Launch permissions for launching instances</li>
             </ul>
         </section>
         <section id="5">
             <h3 class="centerText">EC2 instance states</h3>
             <img
                 src="image/day17/instaceState.png"
                 width="600"
                 height="300"
                 alt="states"
             >
             <ul>
                 <li>Start:self-explantory</li>
                 <li>Stop(EBS backed only):
                     <ul>
                         <li>instances shut down for no charges</li>
                         <li>charge for EBS storage</li>
                     </ul>
                 </li>
                 <li>Stop-Hibernate(EBS backed only):
                     <ul>
                         <li>Suspend-to-disk</li>
                         <li>Saves RAM to EBS</li>
                     </ul>
                 </li>
                 <li>Reboot:self-explantory</li>
                 <li>Terminate:self-explantory</li>
             </ul>
         </section>
         <section id="6">
             <h3 class="centerText">EC2 Life Cycle</h3>
             <img
                 src="image/day17/lifecycle.png"
                 width="500"
                 height="300"
                 alt="another states"
             >
             <ul>
                 <li>Start:self-explantory</li>
                 <li>Stop(EBS backed only):
                     <ul>
                         <li>instances shut down for no charges</li>
                         <li>charge for EBS storage</li>
                     </ul>
                 </li>
                 <li>Stop-Hibernate(EBS backed only):
                     <ul>
                         <li>Suspend-to-disk</li>
                         <li>Saves RAM to EBS</li>
                     </ul>
                 </li>
                 <li>Reboot:self-explantory</li>
                 <li>Terminate:self-explantory</li>
             </ul>
         </section>
         <section id="7">
             <h3 class="centerText">EC2 Cluster Networking</h3>
             If I need a cluster of EC2 instances connected to each other
             with high speed networking,
             <div class="indented">
                 <h4>Enhanced networking</h4>
                 <ul>
                     <li>single root I/O virtualozation</li>
                     <li>provide higher performance with no extra changes</li>
                     <li>supported in R4, X1, M4, C4, C3, I2, G3, and D2.</li>
                 </ul>
             </div>
             <div class="indented">
                 <h4>EBS Optimized instances</h4>
                 <ul>
                     <li>designed to deliver provisioned IOPS.</li>
                 </ul>
             </div>
             <div class="indented">
                 <h4>Placement groups</h4>
                 <ul>
                     <li>low network latency</li>
                     <li>Available for instances supporting enhanced networking.</li>
                     <li>can&rsquo;t span multple AZ.</li>
                     <li>can span peered VPC but won&rsquo;t get full bandwidth.</li>
                     <li>can&rsquo;t merge placement groups.</li>
                 </ul>
             </div>    
         </section>
         <section id="8">
             <h3 class="centerText">EC2 Storage Options</h3>
             <div class="indented">
                 <h4>Elastic Block Storage(EBS)</h4>
                 <ul>
                     <li>data not lost when instances deleted</li>
                     <li>replicated within AZ</li>
                     <li>billed for its storage.</li>
                 </ul>
                 <ul>
                     <caption>Storage Options</caption>
                     <li>General Purpose SSD(gp2): default choice</li>
                     <li>Provisioned IOPS SSD(io1):IO intensive SQL database.</li>
                     <li>Cold HDD:lowest cost.</li>
                     <li>Optimised HDD:lost cost and
                          frequently accessed workload with large data.</li>
                     <li>Snapshots:back-ups to S3</li>
                     <li>Encryptions:AWS Key Management Service(KMS), or my own.</li>
                 </ul>
             </div>  
             <div class="indented">
                 <h4>EC2 instance storage</h4>
                 <ul>
                     <li>phsiscally attached to the instances</li>
                     <li>data lost when instances deleted.</li>
                     <li>data not lost when instances rebooted</li>
                     <li>cannot detach</li>
                 </ul>
             </div>    
         </section>
         <section id="9">
             <h3 class="centerText">EC2 Remote Access</h3>
             <ul>
                 <li>it requires AWS access keys.</li>
                 <li>requires Access in Security group inbound.</li>
                 <li>Linux SSH.</li>
             </ul>
         </section>`,
    day18:
        ` <h2>Elastic Container Service</h2>
        <section>
             <h4>What is container?</h4>
             <blockquote>
                 Container wraps up your code and everything required so that
                 your application is runnable in any environment.
             </blockquote>
             Docker is the famous for container service but AWS also have container service.<br>
             <img
                 src="image/day18/AWSdocker.png"
                 width="800"
                 height="150"
                 alt="docker"
             >
             <ol>
                 <li>write your code in Code Commit similar to GIT.</li>
                 <li>make use of Docker CLI for container framework</li>
                 <li>Register your container with ECS Container Registry</li>
                 <li>Upload your container with ECS</li>
                 <li>Upload to EC2 instances if you want!</li>
             </ol>
        </section>
        <section>
             <h3 class="centerText">Amazon ECS Container Registry</h3>
             <ul>
                 <li>Fully managed Service with encryption at rest in in transit</li>
                 <li>Simply integration with Elastic Container Service(ECS)</li>
                 <li>Access controlled by IAM</li>
             </ul>
        </section>
        <section>
         <h3 class="centerText">Amazon Elastic Container Service(ECS)</h3>
             <img
                 src="image/day18/ECS.png"
                 width="900"
                 height="300"
                 alt="ECS"
             >
             <div class="clearB"></div>
             <img
                 src="image/day18/taskDef.png"
                 width="250"
                 height="450"
                 style="float:left"
                 alt="example"
             >
             <div class="floatL">
                 <ul>
                     <caption>Task Definition: define your application</caption>
                     <li>it is in JSON file</li>
                     <li>it contains essential information for your application<br>
                         such as launch type, AMI or Docker images, ports, IAM roles, security.
                     </li>
                     <li>multiple containers possible.</li>
                     <li>also how much RAM and memory<br>
                             to use when running the container application</li>
                 </ul>
                 <ul>
                     <caption>Properties</caption>
                     <li>family:task def name.</li>
                     <li>networkMode:
                         <ul>
                             <li>none:no external connection</li>
                             <li>bridge:Docker&rsquo;s built in vritual network</li>
                             <li>awsvpc:networking with VPC(required for Fargate)</li>
                             <li>host: bypassing Docker&rsquo;s virtual network
                                 and directly to EC2 instance.
                             </li>
                         </ul>
                     </li>
                 </ul>
             </div>
             <div class="clearB"></div>
         </section>
         <section>
             <ul>
                 <li><emR>Task</emR>
                     <div class="indented">
                         instantiation of a task definition within the cluster.
                     </div>
                 </li>
                 <li><emR>Task Scheduler</emR>
                     <div class="indented">
                         places task on the instances with various options.
                     </div>
                 </li>
                 <li><emR>Cluster</emR>
                     <div class="indented">
                         a logial group of resources running tasks
                         and AWS Fargate is a serverless serice doing it for you.
                     </div>
                 </li>
                 <li><emR>Container Agent</emR>
                     <div class="indented">
                         It runs on each instances and respond to the request(start-stop).
                     </div>
                 </li>
             </ul>
             <ul>
                 <caption>Deployment Options</caption>
                 <li>EC2 instance</li>
                 <li>Elastic BeanStalk(Faultless available server-based service)</li>
                 <li>AWS Fargate(Serverless faultless service)</li>
             </ul>
         </section>`,
    day19:
        `<h2>Elastic File Service(EFS)</h2>
        <section>
            <h4>Why and What is EFS?</h4>
            <blockquote>
                It is a simple scalable file storage for EC2 instances.
            </blockquote>
            <img
                src="image/day19/EFS.png"
                width="500"
                height="450"
                alt="EFS"
            >
            <ul>
                <li>multiple instances access</li>
                <li>Network attached Stroage(NAS)</li>
                <li>fully Managed and dynamic growth</li>
                <li>pay for storage</li>
                <li>amazing recovery solution for multple region replication</li>
            </ul>
            <ul>
                <caption>However....</caption>
                <li>Not available for all regions.</li>
                <li>Cross region incompatible.</li>
                <li>Complicated to provision.</li>
            </ul>
        </section>
        <section>
            <h4>Security Features</h4>
            <ul>
                <li>IAM for user permission and access controls.</li>
                <li>EC2 and EFSsecurity group for inbound rules.</li>
                <li>NACL for traffic flow</li>
                <li>Linux read-only permissions(chown, chmod)</li>
            </ul>
        </section>
        <section>   
            <h3 class="centerText">How to connect!</h3>
            <div class="indented">
                <h4>Mount Targets</h4>
                <ul>
                    <li>VPC NFS(Network File System) end-point</li>
                    <li>has IP address and its DNS names(use DNS).</li>
                    <li>mountable for multiple EC2 instances.</li>
                    <li>can be in different subnet but different AZ.</li>
                </ul>
            </div>
            <div>
                <h4>Access from EC2 to EFS</h4>
                <ul>
                    <li>NFS client, standard for Linux distribution, required.</li>
                    <li>Use DNS anme for File System.</li>
                    <li>Mount EFS for linux mount command similar to EBS or instance store.</li>
                </ul>
            </div>
        </section>
        `,
    day20:
        `<h2>Amazon Simple Storage Service(S3) Recap</h2>
        <blockquote>
            very secure object based bucket storage with unlimited volume.
        </blockquote>
        <emR>IT IS A WEB STORE NOT A FILE SYSTEM!</emR>
        <section>
          <h4>Security Features</h4>
          <ul>
              <li>IAM for permission over resourcess and access control.</li>
              <li>Access Control List(ACL)</li>
              <li>Bucket Policies</li>
          </ul>
        </section>
        <section>
          <h3 class="centerText">Storage Class</h3>
          <div class="clearB"></div>
          <img
              src="image/day20/storageClass.png"
              width="400"
              height="750"
              class="floatL"
              alt="storageClass"
          >
          <div class="floatL">
              <div class="indented">
                  <h4>standard</h4>
                  <ul>
                      <li>high durability</li>
                      <li>SSL encryption and in transit and rest</li>
                      <li>Life cycle management.</li>
                  </ul>
              </div>
              <div class="indented">
                  <h4>standard-one zone IA</h4>
                  <ul>
                      <li>high durability(Single AZ)</li>
                      <li>Per GB retrieval fee</li>
                      <li>Cheaper storage price than Standard IA.</li>
                  </ul>
              </div>
              <div class="indented">
                  <h4>standard Infrequent Access(IA)</h4>
                  <ul>
                      <li>Lower storage price per GB.</li>
                      <li>GB per storage fee.</li>
                  </ul>
              </div>
              <div class="indented">
                  <h4>Reduced Redunduncy Storage(RRS)</h4>
                  <ul>
                      <li>Retired an dreplaced with IA</li>
                  </ul>
              </div>
              <div class="indented">
                  <h4>Glacier</h4>
                  <ul>
                      <li>for even more infrequent access</li>
                      <li>perfect fo archive data</li>
                      <li>expensive query service</li>
                      <li>cheap storage price.</li>
                  </ul>
              </div>
          </div>
          <div class="clearB"></div>
        </section>
        <section>
          <h3 class="centerText">Life cycle Method Management</h3>
          <ul>
              <li>Objects after expiration time can move to different class.<br>
                  Ex)standard->IA->Glacier->delete
              </li>
              <li>Objects after expiration time can be deleted!.</li>
          </ul>
        </section>
        <section>
          <h3 class="centerText">Versioning Feature</h3>
          <ul>
              <li>you can recover objects when it is deleted.</li>
          </ul>
        </section>
        `,
    day21:
        ` <h2>AWS Database Recap</h2>
        <section>
            <h3 class="centerText">RDS</h3>
            <ul>
                <li>SQL type DB</li>
                <li>support security and backup solutions.
                    <ul>
                        <li>Multiple Availabiltiy Zones(AZ)</li>
                        <li>automated or user-initiated snapshots</li>
                        <li>automated Backup to S3</li>
                        <li>Encryption of DB and snaphots, user-password for access.</li>
                    </ul>
                </li>
                <li>When having too many requests, have read-only replica and sync with master.</li>
                <li>support number of different SQL engines</li>
                <li>Vertical expansion and cannot accommodate sudden volatile requests.</li>
                <li>Does database tasks for you.</li>
            </ul>
        </section>  
        <section>
            <h3 class="centerText">AWS Aurora</h3>
            <blockquote>
                Amazon-made Enterprise version of RDS.
            </blockquote>
            <ul>
                <li>Fully commercial db services</li>
                <li>highly faster than mySQL and etc</li>
                <li>Provide a cluster of instances with single end point</li>
                <li>Vertically scalable better than RDS</li>
                <li>provide serverless version
                    <ul>
                        <li>payed by seconds and shut down when not needed</li>
                        <li>perfect for intermitten, infrequently used datas</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">DynamoDB</h3>
            <ul>
                <li>NoSQL based database</li>
                <li>Perfectly managed service</li>
                <li>Serverless DB</li>
                <li>Properties<br>
                    <img
                        src="image/day21/dynamo.png"
                        width="900"
                        height="100"
                        alt="dynamo"
                    >
                    <ul>
                        <li>Tables:ex) Game</li>
                        <li>Attributes:ex) PlayerName Level Class</li>
                        <li>Items:Game table consisting of players</li>
                        <li>Partition Keys or Sort Key:defined for fast access to items</li>
                    </ul>
                </li>
                <li>Needs to set up
                    <ul>
                        <li>Provisioned:specify the number of read-write demands, capacity
                            <ul>
                                <li>can autoscale this</li>
                                <li>good for predictable, consistent traffic and demands</li>
                            </ul>
                        </li>
                        <li>on-demand:unlimited number of demands and pay for what you use.
                            <ul>
                                <li>good for unpredictable and unstable demands and requests.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Amazon Neptune</h3>
            <blockquote>
                database designed for navigation in the relationships(mind map)<br>
                ex) relationship between departments in the big companies.
            </blockquote>
            <ul>
                <li>in graph structures
                    <ul>
                        <li>nodes:data entities</li>
                        <li>edges:relationships</li>
                        <li>properties:represent and store data</li>
                    </ul>
                </li>
                <li>uses graph Query Languages(SPARQL, Gremlin)</li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Amazon RedShift</h3>
            <blockquote>
                perfectly managed Pitabyte unit of database
            </blockquote>
            <ul>
                <li>based on POSTgreSQL</li>
                <li>designed for OLAP and BI(business intelligence) applications</li>
                <li>cluster of nodes, which leader node and one or more compute nodes</li>
                <li>need to set up size and type of nodes.</li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Amazon ElastiCache</h3>
            <blockquote>
                fully managed, in-memory data store service.
            </blockquote>
            <ul>
                <li>low latency(fast) data access for popular contents</li>
                <li>Redis or MemCached Engine</li>
            </ul>
            <ul>
                <img
                    src="image/day21/ElasticCache.png"
                    width="350"
                    height="250"
                    alt="example"
                >
                <li>EC2 instances will run queries in ElasticCache first</li>
                <li>if not, go to the master DynamoDB instance.</li>
                <li>AWS Lambda will sync between ElasticCache and DynamoDB for the popular contents</li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">Amazon DocumentDB</h3>
            <blockquote>
                NOSQL based datababase compatible with MongoDB
            </blockquote>
            <ul>
                <li>launch the instances in clusters of 16(1 main and 15 replicas)</li>
                <li>Great availabilities</li>
                <li>continuous backup to S3 and 35 days of point in time recovery</li>
                <li>Replicate 6 copies across 3 AZs</li>
            </ul>
        </section>`,
    day22:
        ` <h2>AWS VPC Recap</h2>
        <section>
            <ul>
                <caption>Navigation</caption>
                <li><a href="#1">VPC and internet connection</a></li>
                <li><a href="#2">Security Features</a></li>
                <li><a href="#3">Subnets</a></li>
                <li><a href="#4">NATS</a></li>
                <li><a href="#5">Routing Table</a></li>
            </ul>
        </section>
        <section>
            <h3 class="centerText">AWS cloud environment</h3>
            There are multiple edge locations, regions
             and availability zones within that regions.<br>
            and the number differs depending on the region.
        </section>
        <section id="1">
             <h4>What is VPC?</h4>
             <blockquote>
                 Our own Virtual cloud space.
             </blockquote>
             <ul>
                 <li>Single VPC has bt default two availability zones and more</li>
                 <li>Each availability zones can hold multiple subnets</li>
                 <li>each subnet can contains our EC2 or database intances.</li>
                 <li>it can connect to internet with <emR>internet Gateway</emR>.<br>
                     or you can connec to <emR>Virtual Private gateway</emR> for private connection
                     backed up by physical connection in Amazon.
                 </li>
                 <li>support routing tables for each subnet and for VPC also.</li>
             </ul>
             <section>
                 <h4>For internet connection</h4>
                 <ul>
                     <caption>you need</caption>
                     <li>Internet Gateway for VPC</li>
                     <li>public IP address in EC2</li>
                     <li>Route defined in the route table from subnet to Internet Gateway</li>
                 </ul>
             </section>
         </section>
         <section id="2">
             <h3 class="centerText">Security Features</h3>
             <div class="clearB"></div>
             <img
                 src="image/day22/VPCsecurity.png"
                 width="400"
                 height="450"
                 class="floatL"
                 alt="security"
             >
             <div class="floatL">
                 <div class="indented">
                     <h4>VPC Security Group</h4>
                     <blockquote>
                         Firewall in instance level
                     </blockquote>
                     <ul>
                         <li>By the default,nobody gets in.</li>
                         <li>You can set up allowed access for inbound rule.</li>
                         <li>outbound traffic goes out automoatically by default.</li>
                         <li>you can include single or multiple instances witin one securiy group.</li>
                     </ul>
                 </div>
                 <div class="indented">
                     <h4>Network Access Control List(NACL)</h4>
                     <blockquote>
                         Firewall at the subnet level.
                     </blockquote>
                     <ul>
                         <li>By default, nobody gets in or gets out.</li>
                         <li>have to specify inbound and outbound rules.</li>
                     </ul>
                 </div>
                 <div class="indented">
                     <h4>Flow Logs</h4>
                     <blockquote>
                         captures log from CloudWatch
                     </blockquote>
                 </div>
             </div>
             <div class="clearB"></div>
         </section>
         <section id="3">
             <h3 class="centerText">Subnets</h3>
             <img
                 src="image/day22/subnetedVPC.png"
                 width="800"
                 height="350"
                 alt="subnetted VPC"
             ><br>
             Availability zone has single or multiple subnets.
             <div class="indented">
                 <h4>Subnet addressing</h4>
                 There are IPv4 and IPv6 but VPC uses IPv4 more.<br>
                 However, all IPv6 addresses are public.<br>
                 Based on fundamentals of networking, class A,B,C types are
                 range of private IP addresses.<br>
                 You define subnet mask for subnets. the biggest for AWS VPC is /16.
             </div>
             <div class="indented">
                 <h4>Public and Private subnets</h4>
                 <div class="indented">
                     <h3>Public</h3>
                     Public Subnets with access to Internet Gateway is public.
                 </div>
                 <div class="indented">
                     <h3>Private</h3>
                     Subnet made private and only local routing and without Internet gateway.<br>
                     It is always good to connect with NAT gateway or NAT, which connected to Internet gateway,<br>
                     instance will connect to private subnet privately.
                 </div>
             </div>
             <div class="indented">
                 <h4>Connecting to VPC</h4>
                 Internet gateway for public internet access or
                 Virtual Private Network gateway for private fast access based on AWS backbone.
             </div>
         </section>
         <section id="4">
             <h3 class="centerText">NAT</h3>
             <blockquote>
                Network Address Translation
             </blockquote>
             <ul>
                 <li>It allows internet connection for private subnets.</li>
                 <li>instances in private subnet can communicat with public one by default.</li>
                 <li>public one has NAT and routes to private subnets.</li>
             </ul>
         </section>
         <section id="5">
             <h3 class="centerText">Routing Tables</h3>
             <blockquote>
                 Table defining routes for navigating within the VPC.
             </blockquote>
             <div class="clearB"></div>
             <img
                 src="image/day22/routeTable.png"
                 width="400"
                 height="450"
                 class="floatL"
                 alt="route table"
             >
             <ul class="floatL">
                 <li>It is always better to make routing table for each subnet.</li>
                 <li>Main one is automatically created when VPC is made.</li>
                 <li>the IP address of VPC itself is always included by default</li>
                 <li>and it allows communication among subnets within the VPC.</li>
             </ul>
             <div class="clearB"></div>
         </section>`,
    day23:
        ` <h2>AWS WAF,Shield, Firewall Service Recap</h2>
        How do we protect our infrastructure against common cyber attacks?<br>
        <img
            src="image/day23/example.png"
            width="750"
            height="280"
            alt="usage example"
        >
        <section>
            <h3 class="centerText">AWS WAF</h3>
            <blockquote>
                Web Application Firewall
            </blockquote>
            <ul>
                <li>targeted and customizable web security rules(body, headers.etc).</li>
                <li>also provide AWS managed rules aginst common threats</li>
                <li>deployable on EC2, App Load Balancer, CloudFront, API gateway</li>
            </ul>
            <div class="indented">
                <h4>interaction with AWS Lambda for automation</h4>
                <img
                    src="image/day23/example1.png"
                    width="800"
                    height="500"
                    alt="example2"
                >
                <ul>
                    <li>AWS Lambda allows automated alert and response to attacks.</li>
                </ul>
            </div>
        </section>
        <section>
            <h3 class="centerText">AWS Shield</h3>
            <div class="indented">
                <h4>Standard</h4>
                <ul>
                    <li>defense against DDoS</li>
                    <li>free and defualt</li>
                    <li>included in CloudFront and Route53</li>
                    <li>active network monitoring</li>
                </ul>
            </div>
            <div class="indented">
                <h4>Advanced</h4>
                <ul>
                    <li>defense against more attacks</li>
                    <li>not free.</li>
                </ul>
            </div>
        </section>
        <section>
            <h3 class="centerText">AWS Firewall Service</h3>
            <blockquote>
                central fireware service managing WAF rules across multiple accounts or resource.
            </blockquote>
        </section>
        <section>
            <h3 class="centerText">Defense Against DDoS and penetrating test</h3>
            <div class="indented">
                <h4>Defense Against DDoS</h4>
                <blockquote>
                    DDoS attack is Distributed Denial of Service.
                </blockquote>
                <ul>
                    <li>flooding requests to your service</li>
                    <li>and making your resources unavilable.</li>
                </ul>
                <ul>
                    <caption>How to fight</caption>
                    <li>reduce the attackable surface using NACLs</li>
                    <li>detect abnormal or normal traffics.</li>
                    <li>deploy WAF.</li>
                    <li>plan for scale.</li>
                </ul>
            </div>
            <div class="indented">
                <h4>Penetrating Test</h4>
                <blockquote>
                    It helps you find vulnerable spots on your infrastructure.
                </blockquote>
                <ul>
                    <li>permission required to do this</li>
                    <li>takes up to 2 business days</li>
                    <li>only available for certain services.</li>
                </ul>
            </div>  
        </section>`,
    day24:
        ``,
    day25:
        ``,
    day26:
        ``,
    day27:
        ``,
    day28:
        ``,
    day29:
        ``,
    day30:
        ``,
    day31:
        ``,
}