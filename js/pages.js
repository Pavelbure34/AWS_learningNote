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
        ''           
}