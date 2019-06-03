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
        '',
    day04:
        '',
    day05:
        '',
    day06:
        ''           
}