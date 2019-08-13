const lab = {
    day01:
        `<h2>3 tier HA/FT VPC Lab</h2>
        <section>
            <div class="clearB"></div>
            <img
                src="image/lab/day01/exampleArchitecture.png"
                width="475"
                height="300"
                class="floatL"
                alt="lab architecture"
            >
            <blockquote class="floatL">
                <ol>
                    <caption>this lab, we will</caption>
                    <li>Create 3 tier VPC with public and private subnets, NAT instace, end point to S3</li>
                    <li>Secure VPC resources with Security Groups</li>
                    <li>Monitor VPC with VPC Flow Logs</li>
                    <li>Add elastic Network interface to another instances</li>
                    <li>Higher availability with Multi AZs</li>
                    <li>Create Application ELB and Auto Scaling Group</li>
                    <li>Launch Multi AZ Aurora Cluster set up</li>
                    <li>Launch cloud9 and launch Bastion Host connnected to RDS aurora instance</li>
                    <li>Create NACLs</li>
                    <li>clean up</li>
                </ol>
            </blockquote>
            <div class="clearB"></div>
        </section>
        <section>
            <h4>1. Create 3 tier VPC with public and private subnets, NAT instace, end point to S3</h4>
            <ol>
                <li>Create VPC</li>
                <li>Create Subnets</li>
                <li>Create Route Table for subnets</li>
            </ol>
        </section>
        <section>
            <h4>2. Secure VPC resources with Security Groups</h4>
            <ul>
                <caption>We have made Security group for</caption>
                <li>WebServer under ELB</li>
                <li>Database WebServer </li>
                <li>ELB</li>
                <li>NAT instance and Bastion instance</li>
            </ul>
        </section>
        <section>
            <h4>3.Monitor VPC with VPC Flow Logs</h4>
            <ul>
                <caption>To do so</caption>
                <li>capture information of in-out IP traffic from network interface in VPC</li>
                <li>create IAM role for VPC flow logs to access CloudWatch</li>
                <li>create cloudWatch Log Group to receive Log stream</li>
                <li>Create VPC flow log to capture IP traffic and send a stream to log group</li>
            </ul>
        </section>
        <section>
            <h4>4.Add elastic Network interface to another instances</h4>
            <ul>
                <caption>To do so</caption>
                <li>Change ENI not terminated on termination of EC2 which it is attached to</li>
                <li>Terminate NAT instace and see if ENI still there</li>
                <li>Create a new instancea and disable auto-assign ip<br>
                    because we use ENI from previous instance and already has public IP.
                </li>
                <li>When new EC2 instance is created, name it NAT instance!</li>
            </ul>
        </section>
        <section>
            <h4>5.Higher availability with Multi AZs</h4>
            <ul>
                <caption>To do so</caption>
               <li>Make the subnet just like you did before</li>
               <li>but name them with B at the end</li>
               <li>and set up the route table we made</li>
            </ul>
        </section>
        <section>
            <h4>6.Create Application ELB and Auto Scaling Group</h4>
            <ul>
                <caption>To do so</caption>
                <li>Go to Elastic Load Balancer in EC2 service</li>
                <li>click to create a ELB and choose Application Load Balancer</li>
                <li>Usually we put HTTTPS and link it with SSL we create but not this time</li>
                <li>choose ELB and WEBserver SG as security group</li>
                <li>set up Target group</li>
                <li>Go to AutoScaling and click Launch Configuration for Auto scaling</li>
                <li>After creating launch configuartion, create auto scaling group based on it</li>
                <li>set up step scaling policies for increasing and decreasing policies</li>
            </ul>
        </section>
        <section>
            <h4>7.Launch Multi AZ Aurora Cluster set up</h4>
            <ul>
               <caption>To do so</caption>
               <li>go to RDS</li>
               <li>click create subnet group</li>
               <li>add database private subnet into matching subnet</li>
               <li>create database</li>
            </ul>
        </section>
        <section>
            <h4>8.Launch cloud9 and launch Bastion Host connnected to RDS aurora instance</h4>
            <ul>
                <caption>To do so</caption>
                <li>go to  Cloud9 Service</li>
                <li>Launch cloud9 EC2 instance in lab VPC and its public subnet</li>
                <li>Add DBweb SG for cloud9 instances.</li>
                <li>go to cloud9 and upload mySQL_shell downloaded from mySQL website.</li>
                <li>connect to RDS aurora instance with end point within the cloud9</li>
                <li>now cloud9 works like bastion host for RDS.</li>
            </ul>
        </section>
        <section>
            <h4>9.Create NACLs</h4>
            <ul>
                <caption>To do so</caption>
                <li>go to Subnet within VPC service and click NACL for each subnet</li>
                <li>and go to Network ACL in security</li>
                <li>create new NACLs for your subnets just like route tables</li>
                <li>Test your NACLs by accessing through Bastion host or ELB</li>
            </ul>
        </section>
        <section>
            <h4>10.clean up</h4>
            <ul>
                <caption>To do so</caption>
                <li>delete auto scaling group</li>
                <li>delete instances</li>
                <li>delete ENI</li>
                <li>delete elastic IP</li>
                <li>delete cloud9 unit</li>
                <li>delete DB cluster</li>
                <li>delete VPC flow logs from VPC</li>
                <li>delete cloudwatch log group.</li>
                <li>delete ALB group</li>
            </ul>
        </section>`,
    day02:
        ``,
    day03:
        ``,
    day04:
        ``
}