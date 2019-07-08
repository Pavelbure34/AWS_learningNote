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