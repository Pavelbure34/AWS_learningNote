const pages = {
    day01:
        '<h2>AWS?</h2>\
        Amazon Web Service since 2006 has been offering the best cloud computing services.\
        <section>\
            It offers\
            <ul>\
                <li>Storage</li>\
                <li>Database</li>\
                <li>Web Hosting</li>\
                <li>Routing</li>\
                <li>Etc...</li>\
            </ul>\
        </section>\
        <section>\
            ASW has...\
            <ul>\
                <li>Edge Location:higher vantage point above region</li>\
                <li>Region:based on actual geographical location.</li>\
                <li>Available Area:cluster for data usage area within the region.\
                    <ul>\
                        <li>Minimum 2 available areas per region</li>\
                    </ul>\
                </li>\
            </ul>\
        </section>',
    day02:
        '<h2>EC2, VPC, and Storage Services</h2>'+
        '<ul>\
            <caption>Brief Overview...</caption>\
            <li>EC2 = Elastic Compute Cloud</li>\
            <li>VPC = Virtual Private Cloud</li>\
        </ul>'+
        '<section>\
            <h3 class="centerText">Elastic Compute Cloud(EC2)</h3>\
            <blockquote>\
                a virtual server that completely controls the computing power\
                elastically.\
            </blockquote>\
            It is good for..\
            <ul>\
                <li>You only pay for what you actually use</li>\
                <li>It controls the instances.</li>\
                <li>You get full control over the instances.</li>\
            </ul>\
            <section>\
                <h4>How to use?</h4>\
                <ol>\
                    <li>Choose the region where you want to allocate your EC2 instance.</li>\
                    <li>Choose AMI(Amazon Machine Image) for your EC2.Premade or new or stored snapshots\
                        <ul>\
                            <caption>Things to consider when choosing AMI</caption>\
                            <li>region, OS, architecture(32 or 64 bit),\
                                    initial authority, root device storage.</li>\
                        </ul>\
                    </li>\
                    <li>Set up Network, IP address, security group, storage volume, tag, key pair</li>\
                </ol>\
                <ul>\
                    <caption>EC2 instances</caption>\
                    <li>supports many types of instances from the single AMI</li>\
                    <li>Choose your instances based on your need.\
                        <ul>\
                            <caption>Things to consider</caption>\
                            <li>number of cores</li>\
                            <li>Size of memory</li>\
                            <li>Size of storage and type.</li>\
                            <li>Network capacity</li>\
                            <li>CPU technology</li>\
                        </ul>\
                        <ul>\
                            <caption>Types of instances</caption>\
                            <li>Average(T2,M4,M3):good for low traffic web application,\
                                and small to mid sized database\
                            </li>\
                            <li>Computing Optimized(C4,C3):good for high functional web server and\
                                video encoding\
                            </li>\
                            <li>Memory Optimized(X1e,X1,R4):\
                                high functional database and distributive memory caching\
                            </li>\
                            <li>Storage Optimized(H1,I3,D2):\
                                good for data-warehousing and data dealing application\
                            </li>\
                            <li>Accelerated Computing(P3,P@,G3,F1):\
                                good for 3D virtualization and machine learning.\
                            </li>\
                        </ul>\
                    </li>\
                    <li>Take metadata of your instance for better controls.<br>\
                        http://169.254.169.254.latest/meta-data/\
                    </li>\
                    <li>Set up user specific data for writing codes\
                            when AMI instance boots up.</li>\
                    <ul>'+
                        '<caption>Purchase Option</caption>\
                        <li>On-demand instance: you pay for what you use</li>\
                        <li>Reserve instance:pay for year based contract\
                                and use it whenever you want.<br>\
                                good for efficient use of consistent amount of data.'+ 
                        '</li>\
                        <li>spot instance:auction for unused instances</li>\
                        <li>exclusive instance:it can be in different region</li>\
                        <li>tenant host:only you use that host.</li>\
                    </ul>\
                    <li>You can use Amazon Market Place for your AMI.</li>\
                </ul>\
            </section>'+
            '<section>\
                <h3 class="centerText">Virtual Private Cloud(networking)</h3>\
                <blockquote>\
                    Very similar to on-premise network environment!<br>\
                    Completely excluded private network with full control.\
                </blockquote>\
                <ul>\
                    <li>subnets within the same VPC communicate to each other by default.</li>\
                    <li>You must devide available areas into subnets.\
                        <ul>\
                            <li>private subnet:subnet not accessible from outside<br>\
                                Requires NAT gateway or instance for internet access.<br>\
                                Usually for database and backend server.\
                            </li>\
                            <li>public subnet: subnet accessible from outside.<br>\
                                Requires internet gateway for being public.<br>\
                                Usually for web server.\
                            </li>\
                            <li>At least two private and two public subnets within the VPC.<br>\
                                but more networks for private ones.\
                            </li>\
                        </ul>\
                    </li>\
                    <li>You must set up security in VPC.\
                        <ul>\
                            <li>Security Group(=== firewall in older times)\
                                <ul>\
                                    <li>by default,it blocks all the access.</li>\
                                    <li>we can set up to only accept what we want to gain access to.</li>\
                                    <li>Its property is that the access got through gets out with no problem.</li>\
                                </ul>\
                            </li>'+
                            '<li>NACL(Network Access Control List)\
                                <ul>\
                                    <li>inbound and outbound rule have to be specific.</li>\
                                    <li>Its property is the opposite from security group.</li>\
                                </ul>\
                            </li>\
                            <li>key pair group(if root one, delete it) for access to CLI environment</li>\
                            <li>instance arb. (basically 3 layers of security)</li>\
                        </ul>\
                    </li>\
                </ul>\
            </section>'+
            '<section>\
                <h3 class="centerText">Storage Services</h3>\
                <article>\
                    <h4>Amazon Simple Storage Service(S3)</h4>\
                    <blockquote>\
                        Thd sturdiest, simplest, and oldest service in AWS.\
                    </blockquote>\
                    <ul>\
                        <li>Based on bucket system</li>\
                        <li>S3 glaciers are for archives.</li>\
                        <li>allows versioning features.</li>\
                        <li>dynamically growing</li>\
                        <li>based on the file types, you can\
                                use different kinds of S3 for efficient storaging.</li>\
                        <li>S3 stores the data as objects. and only 100 buckets per user allowed by default.</li>\
                        <ul>\
                            <caption>good for...</caption>\
                            <li>back-up solutions</li>\
                            <li>application file hosting</li>\
                            <li>Media hosting(Vidoes)</li>\
                            <li>Software transanction</li>\
                            <li>AMI and snapshots storage</li>\
                            <li>static web hosting.</li>\
                        </ul>\
                        <ul>\
                            <caption>security for bucket...</caption>\
                            <li>ACL,IAM(roles and policies)</li>\
                        </ul>\
                    </ul>\
                </article>'+
                '<article>\
                    <h4>Elastic Block Storage(EBS)</h4>\
                    <blockquote>\
                        Consistent, short-delay, permanent block-based storages.\
                    </blockquote>\
                    <ul>\
                        <li>Its snapshots can be stored in the S3.</li>\
                        <li>It works like USB to EC2 instance.</li>\
                        <li>SSD type\
                            <ul>\
                                <li>fast Input/output</li>\
                                <li>Lower I/O frame per second yet good for frequent I/O</li>\
                            </ul>\
                        </li>\
                        <li>HDD type\
                            <ul>\
                                <li>good at massive scale of streaming</li>\
                                <li>Higher I/O frame per second.</li>\
                            </ul>\
                        </li>\
                        <li>can be encrypted.</li>\
                        <li>When to use EBS\
                            <ul>\
                                <li>requires fast and long-term access to data.</li>\
                            </ul>\
                        </li>\
                        <li>pay for storage fee.</li>\
                        <li>Examples\
                            <ul>\
                                <li>booting of OS</li>\
                                <li>supplementary volumes.</li>\
                                <li>database</li>\
                                <li>application</li>\
                            </ul>\
                        </li>\
                    </ul>\
                </article>\
            </section>'+
        '</section>',
    day03:
        '<h2>AWS security, and IAM</h2>'+
        '<section>\
            <h3 class="centerText">AWS philosophy over security</h3>\
            <blockqoute>\
                User and Amazon joint security.\
            </blockqoute>\
            User takes charge of internal security within the cloud while<br>\
            Amazon takes charge of availability and security of cloud itself.\
            <ul>\
                <li>you can use perfect-managment model which AWS takes care of important securities</li>\
                <li>However you stil have to set up roles and policies.</li>\
            </ul>\
        </section>'+
        '<section>\
            <ul>\
                <li>SSL end point:with HTTPS protocol,it secures safe transanctions.</li>\
                <li>security Group(=== firewall): it controls the access to instance level.</li>\
                <li>VPC control:using private and public subnets, it controls the access.</li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">Identity Acess Management(IAM)</h3>\
            <blockquote>\
                IAM creates users or user groups and help manage access to resources.\
            </blockquote>\
            It is always better to set up group in large organization.\
            <ul>\
                <caption>Because...</caption>\
                <li>people move from deparment to department.</li>\
                <li>So just moving people from group to group</li>\
            </ul>\
            IAM manages policies\
            <ul>\
                <li>in JSON format</li>\
                <li>assigned to user, group, or role.</li>\
                <li>it has no authentication.</li>\
                <li>Version, ID, Statement, Effect, Principal, Actions, Resources\
                    <ul>\
                        <li>statement:details of the policies</li>\
                        <li>effect:allow or deny</li>\
                        <li>principal: who?</li>\
                        <li>actions:what to allow or deny?</li>\
                        <li>resources: target resources</li>\
                    </ul>\
                </li>\
            </ul>\
            and roles\
            <ul>\
                <li>it uses policies</li>\
                <li>IAM user, application, and service gets the role.</li>\
                <li>can be given to another AWS account.</li>\
            </ul>\
            when you give security pass to trusty users temporarily,\
            AWS Security Token Service(STS)\
            <ul>\
                <li>temporary access for trusted user.</li>\
            </ul>\
            Good examples.\
            <ul>\
                <li>DELETE ROOT KEY PAIR</li>\
                <li>Manage access to service of users by role in groups.</li>\
                <li>get rid of unncessary authentication.</li>\
                <li>monitor the infrastucture with cloud trail.</li>\
            </ul>\
        </section>',
    day04:
        '<h2>AWS database service</h2>\
        In AWS, you have to decide before choosing the database.\
        size of data, volume of data, frequency of query, and access to data, and\
        life cycle of database, and...\
        <ul>'+
            '<li>go for SQL based db?\
                <ul>\
                    <caption>if so...</caption>\
                    <li>strongly built schema, and query statements</li>\
                    <li>row and column structure</li>\
                    <li>vertical expansion and limited in number of calls it can take.</li>\
                </ul>\
            </li>\
            <li>go for noSQL based db?\
                <ul>\
                    <caption>if so...</caption>\
                    <li>No schema</li>\
                    <li>key-pair structure.</li>\
                    <li>Horizontal expansion and unlimited number of calls it can take</li>\
                </ul>\
            </li>\
        </ul>'+
        '<section>\
            <h3 class="centerText">1.Amazon Relational Database Service(RDS)</h3>\
            <blockquote>\
                SQL based database.\
            </blockquote>\
            <ul>\
                <caption>Why RDS?</caption>\
                <li>Simple and fast distribution</li>\
                <li>Normal database management</li>\
                <li>compatible with Application</li>\
                <li>Cost-effective and strong security</li>\
                <li>can migrate to Amazon aurora.</li>\
            </ul>\
            <ul>\
                <caption>RDS back-up</caption>\
                <li>manual snapshot to S3</li>\
                <li>automatic backup which lasts for 35 days.</li>\
                <li>duplication in different region for disaster recoery solution</li>\
            </ul>\
            <ul>\
                <caption>security</caption>\
                <li>make id and password for RDS</li>\
                <li>Include with security group</li>\
                <li>Make Data Encryption on DB transanction.</li>\
            </ul>\
            <ul>\
                <caption>multiple AZ standby</caption>\
                <li>Make standby database sync with master database.</li>\
                <li>When master database is out of service, standby step in</li>\
                <li>New one created to replace master one and sync with standby.</li>\
            </ul>\
            <ul>\
                <caption>Good Practices</caption>\
                <li>'+
                    '<ul>\
                        <li>monitors memory and CPU usages.</li>\
                        <li>enable AZ distribution and automatic back-up.</li>\
                        <li>limit up to 30 seconds when client requests query.</li>\
                    </ul>\
                </li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">2.Amazon DynamoDB Service</h3>\
            <blockquote>\
                noSQL based database service.\
            </blockquote>\
            <ul>\
                <li>unlimited amount of datas can be stored and used</li>\
                <li>Perfectly managed service.</li>\
                <li>accommodate on-demand payment</li>\
                <li>easily increase the requested volume</li>\
                <li>choose partition key and sorting key for indexing.</li>\
                <li>available commands:query and scan</li>\
            </ul>\
        </section>\
        <section>\
            <h4>Database instance.</h4>\
            You can dispatch your database instance into the private subnet.<br>\
            It is the basic buildingb block of database in AWS.\
        </section>',
    day05:
        '<h2>Elasticity and Managment tools</h2>'+
        '<ul>\
            <caption>Preview</caption>\
            <li>auto-scaling</li>\
            <li>Elastic Load Balancing</li>\
            <li>Amazon CloudWatch</li>\
        </ul>'+
        '<section>\
            <h3 class="centerText">auto-scaling</h3>\
            <blockquote>\
                It helps control EC2 volume automatically.\
            </blockquote>\
            <ul>\
                <li>It controls the number of target instances according to\
                    number of requests and access.\
                </li>\
                <li>Perfect for application with fluctuating access.</li>\
                <li>can use it without extra payment.</li>\
                <li>rwquires some set-ups'+
                    '<ul>\
                        <li>initial setting:minumum and starting number of instances</li>\
                        <li>auto scaling group:target group\
                            <ul>\
                                <li>minimum number of instances:<br>\
                                    number of instances within the group never\
                                    goes below this level.\
                                </li>\
                                <li>desired number of instances:<br>\
                                    number of instances within the group\
                                    stays this level normally.\
                                </li>\
                                <li>maximum number of instances:<br>\
                                    number of instances within the group never\
                                    goes beyond this level.\
                                </li>\
                            </ul>'+
                        '</li>\
                        <li>expansion/ plan:how instances are going to fluctuate.\
                            <ul>\
                                <caption>launch configuration</caption>\
                                <li>it is a template for auto-scaling</li>\
                                <li>used when launching Instances.</li>\
                                <li>set up the basic EC2 set-ups.</li>\
                            </ul>\
                        </li>\
                        <li>life cycle of auto scaling.</li>\
                        <li>limitation on auto scaling:maximum number of instances.</li>\
                    </ul>\
                </li>\
            </ul>'+
            '<ul>\
                <caption>Why auto-scaling</caption>\
                <li>improved resistance against flaws and errors:<br>\
                    deletes the disfunctional instances and finds the substitute.\
                </li>\
                <li>improved availability:<br>\
                    service fluctuates to adapt to different range of traffic.</li>\
                <li>improved efficiency on maintenance cost:<br>\
                    using appropriate number of instances depending on traffic,\
                    you can efficiently manage the cost. \
                </li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">Elastic Load Balancing</h3>\
            <blockquote>\
                <ul>\
                    <caption>Similar to Router in older times</caption>\
                    <li>distributes the traffic to multiple instances.</li>\
                    <li>Monitors abmornal EC2 instances.</li>\
                    <li>Supports HTTP,HTTPS,SSL,TCP protocols.</li>\
                </ul>\
            </blockquote>\
            <div>\
                <h4>How does it work?</h4>'+
                '<ol>\
                    <li>Register instances to ELB</li>\
                    <li>for HTTP/HTTPS, Application Load Balancer(ALB)\
                        <ol>\
                            <caption>Based on 7 layer protocol,</caption>\
                            <li>Make sure to activate multiple available areas.</li>\
                            <li>register instances within the subject group.</li>\
                            <li>route traffic to the subject group with HTTP/HTTPS protocols.</li>\
                        </ol>\
                        <ul>\
                            <li>use it when required elastic managment.</li>\
                        </ul>\
                    </li>\
                    <li>for TCP, Network Load Balancer(NLB)\
                        <ol>\
                            <caption>Based on 4 layer protocol</caption>\
                            <li>register instances into the subject group.</li>\
                            <li>Route from TCP layer.</li>\
                        </ol>\
                        <ul>\
                            <li>use it when required static IP and good functionality</li>\
                        </ul>\
                    </li>\
                </ol>'+
            '</div>\
        </section>'+
        '<section>\
            <h3 class="centerText">Amazon CloudWatch</h3>\
            <blockquote>\
                monitors management efficiency, visibility of overall patterns of request.\
            </blockquote>\
            It helps you...\
            <ul>\
                <li>see statistically analyzed graphical data\
                    <ul>\
                        <li>using CPU Percentage</li>\
                        <li>etc..</li>\
                    </ul>\
                </li>\
                <li>set up solution settings</li>\
                <li>catch up with the current status</li>\
                <li>set up automated solution under certain conditions</li>\
                <li>Can set up alarm notification services.\
                    <ul>\
                        <caption>with this,dynamic expansion and reduction is do-able.</caption>\
                        <li>you can set up policies\
                            when auto-scaling changes the number of instances\
                        </li>\
                    </ul>\
                </li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">AWS Trusted Advisor</h3>\
            <blockquote>\
                engine for recommendation from best example case.\
            </blockquote>\
            <ul>\
                <caption>it gives advice on </caption>\
                <li>cost optimization\
                    <ul>\
                        <caption>how?</caption>\
                        <li>optimize the reserved instances</li>\
                        <li>check for infrequently used EC2 instances</li>\
                        <li>check for infrequently used EBS storage.</li>\
                        <li>check for unConnected elastic IP address</li>\
                        <li>check for set-ups for infrequently used RDS and ELB</li>\
                    </ul>\
                </li>\
                <li>Security\
                    <ul>\
                        <caption>how?</caption>\
                        <li>check security group</li>\
                        <li>see usage of IAM service(for free)</li>\
                        <li>do MFA(multi-factor authorization) of Root account</li>\
                        <li>authority of S3 buckets</li>\
                        <li>secure access to Amazon RDS</li>\
                    </ul>\
                </li>\
                <li>error-resistance\
                    <ul>\
                        <caption>how?</caption>\
                        <li>do regular EBS snapshots</li>\
                        <li>optimize ELB</li>\
                        <li>manage resources in auto scaling group</li>\
                        <li>multiple AZ to Amazon RDS db</li>\
                        <li>register server name on Amazon Route53</li>\
                        <li>check for load balancer who is active on connection draining.</li>\
                    </ul>\
                </li>\
                <li>functional improvement\
                    <ul>\
                        <caption>how?</caption>\
                        <li>if certain instance used more frequently than others,\
                            you can notification\
                        </li>\
                        <li>\
                            Check for instances whose used perfentage is beyond 80% limit.\
                        </li>\
                        <li>\
                            Check for EBS magnetic volume for efficient use.\
                        </li>\
                        <li>\
                            optimize data flow from EC2 instance to EBS.\
                        </li>\
                        <li>\
                            check Amazon cloudFront which uses legitimate domain for DNS setting.\
                        </li>\
                    </ul>\
                </li>\
            </ul>'+
            '<ul>\
                <li>Red: you must do something</li>\
                <li>Yellow: recommed to do something</li>\
                <li>green: fine</li>\
            </ul>\
        </section>',
    day06:
        '<h2>what is good AWS architecting?</h2>\
        AWS architecting is a construction of environment that\
        functions based on the purpose of application using AWS resources.<br>\
        Amazon had a problem securing availability and efficiency in web services.\
        <ul>\
            <caption>What makes a good architecting?</caption>\
            <li>security:IAM,CloudTrail,security group,threat evalution and solution plan</li>\
            <li>cost optimization:\
                cutting unnecessary cost,efficiency evaluation,perfect-management service\
            </li>\
            <li>functional efficiency:\
                dynamic resource allocation,fast recovery and appeasement\
                from temporary break downs or errors.\
            </li>\
            <li>easy management</li>\
            <li>sturdiness</li>\
        </ul>',
    day07:
        '<h2>amazon S3 recap</h2>'+
        'We will start from the very beginning but,by the end of the course,<br>\
        you will be able to recognize and build a complicated architecture.'+
        '<section>\
            <h3 class="centerText">Amazon Simple Storage Service(S3)</h3>\
            As we have learned in the technical essentials,\
            <ul>\
                <caption>We can use it for</caption>\
                <li>Hosting a static websites:like my own blog</li>\
                <li>store and distribute a media:MP4 or JPG</li>\
                <li>storage for massive scale of data analysis: due to its horizontal expansion<br>\
                    ex)click-stream, financial transanction,media transcoding analysis.\
                </li>\
                <li>back-up solution:the most common usage.<br>\
                    ex)storage for snapshots of EC2 or DB instances.\
                </li>\
                <li>data frequently read, updated, requested by many users, and with fluctuating users.</li>\
            </ul>\
            <ul>\
                <caption>Access Control</caption>\
                <li>public or private bucket</li>\
                <li>selectively open bucket.\
                    <ul>\
                        <li>possible with S3 access policies</li>\
                    </ul>\
                </li>\
            </ul>\
            <ul>'+
                '<caption>ETC...</caption>\
                <li>it helps you recover from data reset from Versioning features.</li>\
                <li>With CORS,you can define how your S3 interact with other sources:access, actions</li>\
                <li>you can use S3 Transfer Acceleration for better uploading.\
                    <ul>\
                        <caption>By using Amazon Cloudfront</caption>\
                        <li>you can have secure uploading.</li>\
                        <li>you use it when\
                            <ol>\
                                <li>you have customers from everywhere uploading to central buckets</li>\
                                <li>you have regular gigabyte or terabyte size of uploading</li>\
                                <li>you cannot make advantage of bandwidth when uploading via intenret.</li>\
                            </ol>\
                        </li>\
                    </ul>\
                </li>\
                <li>You can transfer your large scale of data with\
                    <ul>\
                        <li>S3 snowball:petabyte scale of data transfer</li>\
                        <li>S3 mobile-snowball:exabyte scale of data. Actual trailer truck gets to you.</li>\
                    </ul>\
                </li>\
                <li>You only pay for...\
                    <ul>\
                        <li>by gigabyte unit</li>\
                        <li>by requests, get, post</li>\
                    </ul>\
                </li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">Amazon S3 Glacier</h3>\
            It is designed for\
            <ul>\
                <li>archives</li>\
                <li>data you don&rsquo;t really find frequently</li>\
            </ul>\
            It is characterized by\
            <ul>\
                <li>Very Very Cheap storage price</li>\
                <li>yet expensive query price</li>\
            </ul>\
        </section>\
        <section>\
            <h4>Amazon S3 can have life cycle method.</h4>\
            You can set up automated policies that transfer infrequently used data to IA, ONA, glacier, then delete.\
        </section>',
    day08:
        '<h2>what to consider when choosing region</h2>\
        <ol>\
            <li>How close to my client</li>\
            <li>Any laws considering the information and governance obligation?</li>\
            <li>does that region support the service I seek?</li>\
            <li>different costs depending on the region.</li>\
        </ol>',
    day09:
        '<h2>EC2, EBS, and EFS recap</h2>'+
        'Well you need an application for users to use.\
        <section>'+
            '<h3 class="centerText">Amazon Elastic Computing Cloud(EC2)</h3>\
            This helps you ...\
            <ul>\
                <li>Hosting Web Server</li>\
                <li>Hosting database</li>\
                <li>authentication</li>\
                <li>everything that server can deal with</li>\
            </ul>\
            It is useful because...\
            <ul>\
                <li>you can make mistake and recover fast</li>\
                <li>fast duplication</li>\
                <li>so experiment it!</li>\
            </ul>\
            it needs Amazon Machine Image(AMI) for essential information like OS.'+
            '<ul>\
                <li>premade AMI</li>\
                <li>markets(proven!)</li>\
                <li>customzied AMI(not proven)</li>\
                <li>stored AMI(snapshots)</li>\
            </ul>\
            you can run EC2 instance with user data.\
            <ul>\
                <caption>types of instances</caption>\
                <li>T series: effetive for web servers which user access and requests fluctuate.</li>\
                <li>M series: effective for average use(ex. server, computing...)</li>\
                <li>C series: computing intensive. effecfive for machine learning, high functional web server, and scientific\ modeling</li>\
                <li>X series: effective for database</li>\
                <li>R series: optimized for memory intensive application such as large scale database</li>\
                <li>P series: highly functional in GPU. effective for deep learning and machine learning</li>\
                <li>F series: good for genome research</li>\
            </ul>\
            time for payment for EC2 service...\
            <ul>\
                <li>on-demand instance: you pay for what you actually use</li>\
                <li>reserved instance: you pay for year based fee.</li>\
                <li>spot instance: auctioned from unused EC2 instances. Notified two minutes before it is sent away. can be very\ cheap</li>\
            </ul>\
            <ul>\
                <caption>Exclusive option</caption>\
                <li>exlusive instance:physically separate from other user&rsquo;s instances.</li>\
                <li>exlusive host:you reserve for the entire host in the amazon infrastructur.</li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">Elastic Block Storage(EBS)</h3>\
            <blockquote>\
                <ul>\
                    <caption>EBS helps</caption>\
                    <li>EC2 instance data is ephemeral.</li>\
                    <li>you have data even after EC2 instance is turned off or terminated</li>\
                    <li>application server needs block storage.</li>\
                    <li>data storage has to have back-ups</li>\
                </ul>\
            </blockquote>\
        </section>\
        <section>\
            <h3 class="centerText">Elastic File system(EFS)</h3>\
            When multiple instances share the same storage...<br>\
            and it has to locate in the same region.\
            <ul>\
                <li>expandable</li>\
            </ul>\
        </section>',
    day10:
        '<h2>Database recap</h2>\
        You need highly available, expandable, separate database for better architecture.'+
        '<section>\
            <ul>\
                <caption>Things to consider before archtecting</caption>\
                <li>expandability</li>\
                <li>total storage requirement</li>\
                <li>instance type and volume</li>\
                <li>sturdiness and resistance</li>\
                <li>SQL or noSQL?</li>\
                <li>non-managerial type or perfect-managerial type?</li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">SQL type db</h3>\
            <blockquote>\
                Amazon RDS, Redshift, Amazon Aurora\
            </blockquote>\
            <ul>\
                <caption>appropriate for</caption>\
                <li>complicated database</li>\
                <li>database table joint</li>\
                <li>server based db</li>\
            </ul>\
            <ul>\
                <caption>its security</caption>\
                <li>who got the access? db security group and master-password pair.</li>\
                <li>encryption in data transacntions(SSL), and instance, snapshots.</li>\
                <li>Event Alarm</li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">non-SQL type db</h3>\
            <blockquote>\
                Amazon DynamoDB, ElastiCache, Amazon Neptune\
            </blockquote>\
            <ul>\
                <caption>appropriate for</caption>\
                <li>serverless architecture</li>\
                <li>perfect-managerial model</li>\
                <li>simple and vast pool of data</li>\
                <li>no need for complicated data joint.</li>\
            </ul>\
            It makes you duplicate its db instance into three regions for backup.<br>\
            Game server uses Dynamo DB widely.Originally made for managing cart system in Amazon.\
            <ul>'+
                '<li>Eventually consistent read\
                    <ul>\
                        <li>repeat the call so return the latest data.</li>\
                    </ul>\
                </li>\
                <li>Strongly consistent read\
                    <ul>\
                        <li>always return the latest data.</li>\
                    </ul>\
                </li>\
            </ul>\
            <ul>\
                <caption>its security</caption>\
                <li>very detailed access to table and subject</li>\
                <li>encrypion in data transactions(SSL/TLS/HTTPS)</li>\
            </ul>\
        </section>'+
        '<section>\
            <h3 class="centerText">database migration into AWS</h3>\
            <section>\
                <h4>AWS Data Migration Service</h4>\
                <ul>\
                    <li>helps migration from EC2, RDS, and on-premise database.</li>\
                    <li>continuous and instant migration.</li>\
                    <li>when migration is difficult due to slow connection and large database, use Snowball Edge.</li>\
                    <li>use Schema Conversion Tool for better migration of schema based database.</li>\
                </ul>\
            </section>\
        </section>',
    day11:
        '<h2>VPC recap1</h2>\
        VPC provides\
        <ul>\
        <li>separate Logical spaces for workload separations</li>\
        <li>private cloud network</li>\
        </ul>'+
        '<section>\
            <ul>\
                <li>by standard, it is always better to use at least two or more VPCs.</li>\
                <li>Multiple VPCs Pattern\
                    <ul>\
                        <li>good for single team or organization</li>\
                        <li>good for limited team which has authority over access\
                            for maintenance for standard state.</li>\
                    </ul>\
                </li>\
                <li>Multiple User Pattern\
                    <ul>\
                        <li>good for large organization with multiple IT teams\
                            and potential start-ups\
                        </li>\
                        <li>can only hold for 5 VPCs in one region by default.</li>\
                        <li>divide available region into subnets</li>\
                        <li>R</li>\
                    </ul>\
                </li>\
            </ul>\
        </section>'+
        '<section>\
        <h4>Networking in VPC</h4>\
            <div>\
                <h3>Routing Table</h3>\
                <blockquote>\
                    routing table for VPC resources.\
                </blockquote>\
                <ul>\
                    <li>don&rsquo;t use the default routing table.</li>\
                    <li>Make routing tables for all subnets</li>\
                </ul>\
            </div>\
            <div>\
                <h3>Internet Gateway</h3>\
                <blockquote>\
                    internet access for the VPC.\
                </blockquote>\
                <ul>\
                    <li>connect to public subnet for making it public.</li>\
                </ul>\
            </div>'+
            '<div>\
                <h3>NAT Gateway</h3>\
                <blockquote>\
                    internet access for the private subnets.\
                </blockquote>\
                <ul>\
                    <li>connect to private subnet for granting it internet access.</li>\
                </ul>\
            </div>\
            <div>\
                <h3>Elastic Network Interface</h3>\
                <blockquote>\
                    virtual network interface.\
                </blockquote>\
                <ul>\
                    <li>.</li>\
                </ul>\
            </div>\
            <div>\
                <h3>Elastic IP address</h3>\
                <blockquote>\
                    static publc IP address within IPv4 for dynamic cloud computing.\
                </blockquote>\
                <ul>\
                    <li>can be attached to instance or network interface.</li>\
                    <li>only 5s are allowed per region by default</li>\
                    <li>allows retransmission and reconnection from changed traffic</li>\
                </ul>\
            </div>\
        </section>'+
        '<section>\
            <h4>Security in VPC</h4>\
            <div>\
                    <h3>Security Group</h3>\
                    <blockquote>\
                        firewall for instances.\
                    </blockquote>\
                    <ul>\
                        <li>by default nobody gets in.</li>\
                        <li>you can set up the allowed access</li>\
                        <li>allowed request and following response automatically pass through it.</li>\
                        <li>better to create separate security group for app,web,db instances.</li>\
                    </ul>\
                    <ul>\
                        <caption>Recommended Practice</caption>\
                        <li>chain diagram:web tier -> app tier -> db tier chain of securty acceptance</li>\
                    </ul>\
            </div>\
            <div>\
                <h3>Network Access Control List(NACL)</h3>\
                <blockquote>\
                    subnet level of firewall\
                </blockquote>\
                <ul>\
                    <li>By defaut nobody gets in nobody gets out</li>\
                    <li>inbound and outbound traffic has to be specific</li>\
                    <li>allows retransmission and reconnection from changed traffic</li>\
                </ul>\
            </div>\
        </section>',
    day12:
        '<h2>VPC recap for availability</h2>'+
        '<section>\
            <div>\
                <h3>Amazon Direct Connect(DX)</h3>\
                <blockquote>\
                    allows effective internetless connection.\
                </blockquote>\
                <ul>\
                    <li>good for hybrid cloud environment</li>\
                    <li>good for regular streaming of large data between on-premise environment</li>\
                </ul>\
            </div>\
            <div>\
                <h3>Virtual Private Network(VPN)</h3>\
                <blockquote>\
                    allows connection with other private network.\
                </blockquote>\
                <ul>\
                    <li>allows connection with other private network.</li>\
                    <li>does not require internet</li>\
                </ul>\
            </div>\
            <div>\
                <h3>VPC Peering</h3>\
                <blockquote>\
                    allows connection with other VPCs.\
                </blockquote>\
                <ul>\
                    <li>good for separate work spaces with each own VPCs</li>\
                    <li>available with VPC from other account</li>\
                    <li>Same IP address cannot be used with peering.</li>\
                    <li>maintained within the Amazon backbone. Super effective connection</li>\
                    <li>only connect essential VPCs</li>\
                </ul>\
            </div>\
            <div>\
                <h3>VPC End Point</h3>\
                <blockquote>\
                    Without exiting AWS,it allows EC2 instances to outer services privately.\
                </blockquote>\
                <ul>\
                    <li>No need for VPN,NAT,internet</li>\
                    <li>has to be in the same region</li>\
                    <li>highly available, repeatable, and horizontally expandable</li>\
                </ul>\
                <div>\
                    <div class="clearB"></div>\
                    <ul class="floatL">\
                        <caption>Interface type</caption>\
                        <li>Amazon CloudWatch Logs</li>\
                        <li>Amazon Code Builder</li>\
                        <li>Amazon EC2 API</li>\
                        <li>ELB API</li>\
                        <li>...</li>\
                    </ul>'+
                    '<ul class="floatL">\
                        <caption>gateway type</caption>\
                        <li>Amazon S3</li>\
                        <li>Amazon DynamoDB</li>\
                    </ul>\
                    <div class="clearB"></div>\
                </div>\
            </div>\
        </section>'+
        '<section>\
            <div>\
                <h3>Elastic Load Balancing</h3>\
                <ul>\
                    <caption>Why should we use ELB?</caption>\
                    <li>supports high availability by distributing traffic</li>\
                    <li>monitors the abnormal instances</li>\
                    <li>Works as security</li>\
                </ul>\
            </div>\
            <div>\
                <h3>Connection Draining</h3>\
                <blockquote>\
                    a method not to let users experience any changes in service\
                    while deleting the instances.\
                </blockquote>\
            </div>\
        </section>'+
        '<section>\
            <div>\
                <h3>Amazon Route 53</h3>\
                <blockquote>\
                    A DNS(Domain Name Service).\
                </blockquote>\
                <ul>\
                    <li>you can buy Domain name</li>\
                    <li>supports multiple routing options.</li>\
                    <li>manage your Domains</li>\
                    <li>It monitors DNS status.</li>\
                </ul>\
            </div>\
        </section>',
    day13:
        '',
    day14:
        '',
    day15:
        ''
}

const quiz = {
    day01:
        '<section>\
            <ol>\
                <caption><button id="check">Check</button><button id="clear">Clear</button></caption>\
                <li>What is the area physically seprated within the area as the cluster for data center group?<br>\
                    <input type="text" id="qq1">\
                </li>\
                <li>There are more regions than edge location.<br>\
                    <input type="radio" name="answer" id="true">True\
                    <input type="radio" name="answer" id="false">False\
                </li>\
            </ol>\
        </section>'
}