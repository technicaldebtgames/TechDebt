import React, {useState} from 'react';

import DesertTrees from '../images/DesertTrees.svg';
import AngryFace from '../images/angry_face.svg';
import MonkeyPaw from '../images/MonkeyPaw.svg';

import './MainBody.css';

const MainBody = (props) => {

    const [expandProjects, setExpandProjects] = useState(false);
    const [expandArt, setExpandArt] = useState(false);
    const [expandWriting, setExpandWriting] = useState(false);

    return (
        <div className='MainBody'>
            <h1 onClick={() => setExpandProjects(!expandProjects)}>Projects {expandProjects ? '▲' : '▼'}</h1>
            <h2 className={expandProjects ? '' : 'hide'}><a href='https://thevarietyshow.netlify.app/'>The Dan and Liz Variety Show</a></h2>
            <h2 className={expandProjects ? '' : 'hide'}><a href='https://stylex.netlify.app/'>STYLEX</a></h2>
            <h2 className={expandProjects ? '' : 'hide'}><a href='https://video-essays.netlify.app/'>Video Essay Transcripts</a></h2>
            <h1 onClick={() => setExpandArt(!expandArt)}>Art {expandArt ? '▲' : '▼'}</h1>
            <img className={expandArt ? 'art' : 'hide'} src={AngryFace} alt='Angry Face'/>
            <img className={expandArt ? 'art' : 'hide'} src={MonkeyPaw} alt='Monkey Paw'/>
            <img className={expandArt ? 'art' : 'hide'} src={DesertTrees} alt='Desert Trees'/>
            <h1 onClick={() => setExpandWriting(!expandWriting)}>Writing {expandWriting ? '▲' : '▼'}</h1>
            <article className={expandWriting ? 'writing' : 'hide'}>
                <h3>The Modern Free Tool Environment</h3>
                <p>The modern world is awash with free tools that you can use to create any type of content that you can imagine. From software developers to writers to musicians, there are tons of software options at your disposal. To a new content creator, however, it can also be quite... intimidating.</p>
                <p>Since there is a mountain of software available for FREE, you should check out the best, first. Don't shy away from the options available to you these days. It might look like a bit of climb, but the view at the top of Free Software Mountain is amazing! I'm going to give you a brief history of free software, and then move on to a review of the best of the best. These are all software titles I have used in a professional setting, so this is first-hand experience speaking.</p>
                <h4>A Bit of History</h4>
                <p>Let's look into how we ended up in this wild world of no-pay content creation tools.</p>
                <p>In the earlier days of commercial computing, free software started to take shape. These were the 80s and 90s. A steady stream of hype had been building surrounding personal computers. They were going to usher in a golden age for the world - probably related to pets, somehow. Terms such as "freeware" and "shareware" were being passed around, and to this day, the terms remain a bit... nebulous. Does "free" mean "free to use" or "free to distribute" or "free to change" or... what, exactly?</p>
                <p>Well, in those days, freeware meant software that was "free to use". In general, freeware was installed via floppy or compact disk, but you didn't have access to its source code.</p>
                <p>Shareware was a slight spin-off from the original concept of freeware. Shareware was (and still is) freeware whose primary marketing strategy was (and is!) encouraging its users to "share" the software with their friends, co-workers, and peers. If you do any advanced research on topics like "freeware" and "shareware", you'll find a lot of articles and discussions. All will mention the inconsistent use of these terms. These general definitions are pretty safe to work with, though, so let's keep going!</p>
                <p>Freeware and shareware stand in slight contrast to "open-source software". Open-source software (OSS) provides the source code of the program to you - hence the name "open-source". You'll find open-source software that will also provide compiled versions for download. These are ready to run, as is. You can still find the source code, of course, but as a separate set of files that you can download. The important difference with open-source software is that its source code is available to download and edit as you see fit.</p>
                <p>You might think that there isn't much of a market to be had when it comes to free software. It can't make much money, right? While some free and open-source software developers operate solely to produce high-quality tools for use by anyone free-of-cost, others actually DO turn a profit! One method that some organizations have used is through direct support of their product. They may provide the current version of the software as-is, but offer their services to customize the software to a client's specifications. They are the experts when it comes to this software, after all! This customization may include adding new features, prioritizing bug fixes, porting the software to another platform, or consulting on proper use of the software.</p>
                <p>As we go forward throughout free software's history, another type of free software arrives: ad-supported software. This was (and still is) software that you can use, free of charge, and whose development is paid for by the display of embedded ads. In order for this type of software to take off, internet connectivity and analytics needed to improve. Once companies were able to embed analytics tools into their software, they could charge for advertisements seen by their users. If you've ever played a free-to-play mobile game, chances are very good that you've had ads presented to you. The company who produced the game made a few pennies out of that interaction. Still other companies offer a version of the software (for a fee, of course) that has the advertisements removed. This software sales method is perfect for companies who want to capture their "power user" market.</p>
                <p>The most modern forms of free software available today are often known as "freemium" software. This term is a play on the words "free" and "premium". These types of software usually include a "free to use" license meant for small organizations and solo creators. Other license "tiers" are then made available to larger organizations. Some great examples of this type of free software exist, ranging anywhere from 3D game engines to online marketing tools.</p>
                <p>Still to this day, each type of free software listed above are in use. Some free software stands heads-and-shoulders above others at this point, though. Keep reading to see a tailored list of the must-have options available for a wide range of industries and interests!</p>
                <h4>Software and Web Development</h4>
                <p>Oh boy... where do we start when it comes to free software available for the software engineering and web development world? It's an industry full of people who make software... This is THE ground-zero for free software development.</p>
                <p>My personal favorite free software when it comes to writing code is VS Code, but there are so many available that it's hard to pick one. Depending on your needs, you might find some of them more useful than the rest. VS Code is great for me as I have spent a lot of time working with C# and JavaScript. In reality, all open-source or free IDEs and code editors have most (if not all) of the options you have come to expect. Most of the popular options are popular because they can do it all.</p>
                <p>Another great option for an IDE is IntelliJ IDEA. I've used this one when working in Java, in particular when working with Spring projects. The Maven build support is great when it comes to developing larger projects. Managing your dependencies is the key selling point, here.</p>
                <p>Having built a lot of React single page apps, I've found Netlify to be invaluable when hosting anything static. So, front-end sites that call APIs are a great choice for this site's free hosting option. Netlify is a great example of "freemium" content. You can host any (reasonable) number of sites for free, as long as they are using static assets and don't handle server functionality. You can check out their price plans, which includes a great example of a "full support" freemium enterprise option. There isn't a price listed for this level of support, because it would be custom-tailored to your organization's needs. This support tier comes with an industry-standard 99.99% uptime SLA. This means that they guarantee 99.99% uptime of their services.</p>
                <p>Heroku is a great option for anyone interesting in building actual back-end infrastructure. This should be your first stop when it comes to testing out your project's server functionality. They have a similar freemium model to Netlify. Starting with a free tier for hobbyists and personal projects, they go all the way up to an enterprise option with custom pricing. Heroku uses something they call "dynos" in a lot of their pricing. Dynos are Linux containers that hold and run your server operations. One downfall of the free version of this service is that if your server isn't used for a while, it will likely have its dyno shut down. Once you call its endpoints again, Heroku assigns a dyno again, and your server will be up and running. This usually ends up as an occasional thirty-to-sixty second pause in your server calls, usually once every week or two. There are some ways you can get around this issue... but I won't go into those here! You can Google for those solutions!</p>
                <p>GitHub is the go-to remote-VCS (version control system). In conjunction with git, you have all the tools necessary to either keep your own projects organized. Use it to keep track of branches and workloads across teams of any size and scale. These VCS tools are invaluable to a developer. If you're doing any development, you're going to use a VCS of some type, and GitHub is a leader in this space.</p>
                <p>Git is a required tool, here. I struggle to think of a category of development that wouldn't use git. If you don't use it, you're wrong. That is all that needs said about git. Use it. Period.</p>
                <p>It's easy enough to send HTTP requests to your server endpoints - but it's as smooth as butter when you use a service like Postman. Postman allows you to customize messages you send to endpoints. You get the response back in an easy-to-read format that speeds up your testing and troubleshooting times. The ability to store your authorization information is the icing on top of the cake, here. Use this tool to speed up your development and testing between front-end and back-end.</p>
                <h4>Project Management</h4>
                <p>I had to include an entire category for two exceptional (and, of course, free) tools, built to smooth out your project creation processes. These two tools could fall under so many other categories that I had to throw them under "project management" because, at their heart, that's what these tools are for. They each do the same thing, but they're both worth mentioning. These are what are often called "Kanban boards". The Toyota corporation developed this type of process planning board in the 40s to streamline their production processes.</p>
                <p>First up is my favorite - HacknPlan. This is a project management tool made for game development. It comes with certain categories tailored for game dev - art assets, design, programming, marketing, etc. You create tasks in one column, and as the tasks progress through their completion, you move them along other columns. Planning, production, testing, completion. You can even tie one or more tasks to one or more other tasks, creating dependencies. This shows you what tasks you need to complete before others. Since I've done a lot of hobbyist game development in the past, I am very used to this tool, and use it by default - even for everyday tasks!</p>
                <p>The next tool is one I would recommend to quite literally everyone - Trello. This has everything that anyone could need in a PM tool. You can customize your Kanban board as needed, in any way, creating customized workflows. It's great for personal organization or to organize processes across teams!</p>
                <p>While these two might not seem amazing at first glance, I can't stress to you enough how much more productive and organized tools like these can make you. There are a whole host of other free versions out there as well. Give it a good Google to see what other options might have custom tools for your specific field or project requirements. (Although, I am pretty sure Trello will be able to handle it!)</p>
                <h4>Design</h4>
                <p>"Design" is a broad term. You can design anything, after all. But there are a few tools I have found very useful that I would like to share.</p>
                <p>The first is for a more modern (and at this point, traditional) designer. Figma is a great tool that you can use to create exceptional vector graphics and prototypes of processes, all in one editor. You can group related items together to allow changes to cascade across them. This saves you a ton of time and effort. You can also create mockups of processes, noting fields that need completed before moving on to the next step in the process. It's optimized for website and app development, but there are a whole host of potential uses for Figma. Teams can work on graphic design, fonts, product blueprints, marketing campaigns - the applications are endless!</p>
                <p>My next choice of tool is one custom-made for anyone who wants to design static flowcharts. Diagram Designer is an excellent tool with a wide variety of standard vector graphics that you can use to create flowcharts. Flowcharts describe information flow through a system - but don't let that fool you into thinking this tool has limited uses! Everything is information flowing through systems! Users navigating a site? Designing a marketing workflow? Creating a decision tree for important decisions in your organization? Creating a series of electrical circuits controlled by a Raspberry Pi? This tool might have the look and feel of something straight out of the 90s, but I promise you that in this case simplicity is best. I've used this to diagram out both front-end and back-end workflows for projects I have worked on. It provides easy-to-understand graphics for describing systems that all team members can comprehend.</p>
                <h4>Writing</h4>
                <p>Depending on what you are writing, you will have a variety of needs you would like to meet. The needs of a technical writer writing documentation about a system's functions are different than the needs of a travel blogger. One universal need I have found is the need for simple and powerful writing. Brevity, conciseness, active voice - these are all qualities that every piece of writing benefits from. Enter Hemingway Editor. This tool transformed my writing. I first used this tool when I was writing responses to hundreds of support tickets a week. The ability to write clearly, using the least number of words while conveying the most information... It's invaluable for someone trying to give complicated explanations to people unfamiliar with a product. Since I started using this tool years ago, I have seen a dramatic increase in my writing ability. No more run-on sentences. No more passive voice. No more paragraphs that require a master's degree to decipher. Brevity is the soul of wit, and in this case, wit means "understanding". When people can follow your words, the more they will want to read, and the more they will understand. If you write anything at all, you can get BIG returns from Hemingway Editor.</p>
                <p>There are a large number of editors and other tools out there when it comes to writing, but I am a purist in this area. I write most of my drafts in Notepad. This lets me ignore formatting and other extra features so that I can focus on the content itself. There are a large number of text editors out there, from Microsoft Office 365 to Notepad++ to Atom to *shudder* vim. Once I have my draft written finished, I plug it into Hemingway Editor to make sure I am not making obvious mistakes with phrasing and spelling. Sometimes it prompts me with an issue, but I ignore it - it's a tool to improve your writing, not a dictator to force you to commit to a style that feels unnatural.</p>
                <h4>Visual Art</h4>
                <p>The visual arts have a direct relationship with design in general. I have placed free visual design tools related to visual art creation in their own section, right here. And the first is...</p>
                <p>...related to web development.</p>
                <p>*sigh*</p>
                <p>Favicon.io's Favicon Generator is an exceptional time-saving tool. Do you have a great icon that you made in XYZ-Something-or-Other Software, but you now need to have a 512px by 512px icon, and a 192px by 192px icon, and a 64px by 64px icon, and a 32px by 32px icon, and a... Well, you get the picture. To have an icon represented well across every device, you find yourself spending two hours making simple mistakes in your editing software. You NEVER have to make the same thing at all these different resolutions! You do this once a year, tops! Where's the canvas resize tool again? Wait, do I need a PNG for this resolution, or...? Well, that's what Favicon Generator is for. Upload your high-res graphic, and out pops the common resolutions you would want to include in an app's manifest. Don't sleep on this tool. It will save you time and effort.</p>
                <p>Next up is a tool that is near and dear to my heart - Inkscape. I love love LOVE making SVG graphics. If you're reading this on my portfolio, go ahead and look at the art section for proof. Inkscape is a premier, all-free, vector graphics creation tool. If you need to create scalable graphics for websites, t-shirt printing, pamphlet designs to send off to a printer, master files for branding and logos, or any other reason... this tool will be able to do it for you. Which leads into the next free tool...</p>
                <p>GIMP, the GNU Image Manipulation Program, is an open-source image editor to rival the likes of Adobe Photoshop. It doesn't have all the bells and whistles as Photoshop does - Adobe is the PREMIER (get it?!) leader in that world, and you can't beat them at everything. But given the price point, GIMP is impossible to beat. It lacks a bit of functionality when it comes to vector graphics - that's why I use Inkscape, after all. But given the vibrant history and community surrounding GIMP, if it doesn't have a tool built in already, you can find it online. (Especially brushes!)</p>
                <p>Pencil2d is an excellent tool if you are into pixel art and animation. It has the features you need for producing these types of assets, boiled down to a simple and easy-to-use interface. Don't let this description fool you - they nailed this on the head for pixel art and animation. If this is the type of visual art you are working on, this is a tool you need to check out ASAP. It has what you need, it does it well, and it's easy to use. Use it.</p>
                <p>I'm torn on where I should put this, but given the results you get from it, I decided the Visual Art section was best. Blender is an amazing 3D modeling and rendering tool. I have used it to create models for 3D game prototypes, as well as artwork used in traditional 2D visuals. I can't stress this enough - if you need to do any 3D modeling whatsoever, this is the tool for you. There are so many resources available to you when you use this software, it will blow your mind. There are tutorials everywhere on exactly how to do anything you want to do in Blender. Use it. It's good. It's close to perfect.</p>
                <h4>Game Development</h4>
                <p>Blender could have entered into the list here, and so could HacknPlan, and so could pencil2d... but I have made a case for them in their other categories. Here, I will go over tools I've used only for working with game prototypes.</p>
                <p>Unity is my favorite in this list. Don't get me wrong - Unity has its own issues and considerations. But, if we take a step back from the constant "red team blue team" of the game engine fan clubs, Unity has a lot going for it. It has an extraordinary list of features for a free piece of software. It has capabilities that plenty of industry-leading game titles have used. Hearthstone's made with Unity. And Cuphead. Hollow Knight. Return of the Obra Dinn. Risk of Rain 2. Ori and the Blind Forest (and its sequel). Kerbal Space Program. Kentucky Route Zero. You'll notice a large list of indie titles here. That isn't to say it's not up to the task of huge-budget titles. But if costs are important to you or your organization, Unity can get you to the finish line and with a quality project to show for it, on any budget. It's great for prototyping, as well. You can burn through ideas in your spare time much faster and with lower compile times than Unreal Engine. It also has a vibrant tutorial community online, so if you want to do something in Unity, there is a current, well-thought-out tutorial a few clicks away.</p>
                <p>We mentioned Unreal Engine above, and yes, it is also top-tier. Your use case may vary and change the value of either product, but Unreal has industry-leading features that differentiate it from Unity. First thing's first, when it comes to free 3D game engines, the performance on the high end of Unreal is hard to beat, let alone match. It can make the most beautiful fully-lighted and effected scenes that you will ever see. There is a reason this has been an industry leader for so long. And if Unreal's use of C++ intimidates you, have no fear! There is a wonderful visual scripting method in the form of what it calls "blueprints". While I am a programmer by nature and experience, I can't fault Unreal here - it has a fully-featured visual scripting solution that you can get a lot out of if you are not a software developer. And, if you ARE a developer working with a team of artists, blueprints give your non-technical team members a chance to shine and push their capabilities. This saves you time, as you don't have to create new tools for them most of the time. Let them work with blueprints, connecting nodes to allow for advanced design and art creation, saving your programming skills for higher-impact efforts.</p>
                <p>Godot is a wonderful open-source solution to game engines. While Unity and Unreal are technically free to use, once you get into the realm of "actually getting paid for games", they can start to incur costs through their licenses. But Godot is free via MIT license. The MIT license is a VERY permissive license. If you make a game with Godot, you won't owe anyone a cent. Period. And while I don't care as much for Godot's 3D engine performance, I have to say that it is a very powerful 2D game engine. It works through an organizational concept known as "nodes", which are an analog to Unity's GameObjects. It's easy to understand and use, it's powerful, and it is 100% free and open-source. This is an excellent choice for an indie developer to work with, especially if you build your own functionality into it.</p>
                <h4>Audio Production</h4>
                <p>I have to give my main tip-of-the-hat to Cakewalk when it comes to audio work. It is a completely free-to-use digital audio workstation. If you need to score a video, or make a soundtrack for your game, or create an album, Cakewalk can make it happen. It has the usual expectations of default plugins for a DAW - and, might I add, its reverb tool is one of the best I have ever used. It sounds so good. SO GOOD. If you need some audio software, please start here.</p>
                <p>Audacity is a wonderful and long-running piece of software that is ideal for recording and editing audio directly. I use this for recording podcast episodes, voice-overs, Foley effects, and any general sound capture that I need. This is a piece of software that has been around for longer than I have worked with audio. It's a staple of the free-software-lover's toolbelt. Never sleep on Audacity. It's stable. It's simple. It's fast. It's versatile. It's what you want when working with direct audio waveform manipulation.</p>
                <p>Bosca Ceoil is a free synth tool/pattern creator. It has a wonderful and diverse bank of midi-like synth effects that you will find a use for at some point. Its interface is a little janky, I can't lie - it takes a little bit of time to get used to. Clicking can mean different things in different contexts. There are definitely improvements that the developers could make here with regards to user experience. But, given that one caveat, everything else about this free tool is wonderful. It's like having a full 80s synthesizer within a couple of mouse clicks. If you have to make a game or video at any point and you are in charge of a soundtrack, you will find something here in Bosca Ceoil that captivates you.</p>
                <p>VoiceMeeter is a tool I have been using while streaming to route audio through Windows 10. OBS was giving me some issues with audio duplication, and fighting with ASIO4ALL wasn't within my level of patience. VoiceMeeter is a wonderful alternative with a nice, clean, and understandable interface that will let you route your mic input and desktop output right to where you need it.</p>
                <p>And, to close it out, when all else is lost... there's ASIO4ALL. It does what it does. If you have XLR mics and do any amount of recording into a digital audio workstation through any type of hardware, you will use this at some point. It's the most utilitarian of the utilitarian tools available to you in the audio world. Get used to it, because it won't be going anywhere for the next century... or five.</p>
                <h4>Video Production & Streaming</h4>
                <p>When it comes to streaming, OBS is the premier open-source solution you should be using. It has support. It has guides you can actually find. It even has a wide range of very useful and powerful audio filters and tools. Its noise filter, for instance, is really, really good, especially for as easy as it is to use. If you want to do any streaming, or even video capture with decent real-time screen fades and overlay effects, this is a tool you should be using. It's very high quality, and it will be able to do everything you want it to do. For the more complicated video production stuff, though...</p>
                <p>Enter DaVinci Resolve. While I have a much larger range of experience when it comes to audio production, and while I am relatively new to video production, this tool has been... I mean, it's a powerful and fully-featured video editing software title. I haven't been able to find anything that it CAN'T do. Its audio tools are top-of-the-line. Like OBS, it has some audio noise filter functionality that is really, REALLY good. Unlike OBS, if there are video editing or visual filters you want to use, this should be able to do it. This piece of software takes Final Cut to task. If you're making video content of any nature, please, by all means, start with Resolve.</p>
                <h4>Outro</h4>
                <p>I can't lie - these aren't the only free software titles I have used over the years. They aren't even the only ones I use at present time. However, these are the best that I have run into in their respective areas.</p>
                <p>If you use any of these, you might notice some quirky behavior. Some of these free products have been in development for decades. GIMP, Inkscape, and Audacity have been around longer than some of you reading this have been alive. Their development history can carry some baggage. In comparison to newer products, such as Figma or OBS, they may show some strange behavior. I could write an entire article on the WHY of that, but I'd like to hold off for now. Please keep in mind that these products are top-of-the-line freeware, created by teams of dedicated individuals making an attempt at providing content creators the high quality tools. They're provided free of charge! These developers are the unsung heroes of the modern content creation era.</p>
                <p>If you're looking to get started in any of the areas mentioned above, these software titles should be your first downloads. You'll usually find a series of intuitive, easy-to-use, and/or very powerful tools, all at no cost, that can get you professional results with for absolutely no cost to you. Spend some time getting to know your tools. If you're making anything, you're a craftsperson. Take some pride in your ability to use these tools, because they are the things you use to make things no one else has seen or heard before.</p>
            </article>
            
        
        </div>
    );

};

export default MainBody;