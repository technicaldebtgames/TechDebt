import React from 'react';

const BrokenGamification = (props) => {

    return (
        <article>
            <h3>How I Ruined My Boss's Attempt At Gamification</h3>
            <p className='dropcap'>Gamification is... <i>tricky.</i></p>
            <p>I love games, in general, and in all their forms. Chess. Videogames. Sports. Card games. Logic puzzles. Just absolutely love 'em!</p>
            <h4>Games All The Way Down</h4>
            <p className='dropcap'>Once upon a time, I graduated college with a degree in <b>economics</b> - a field that's all about that sweet, <i>sweet</i> <b>cost benefit analysis.</b> I loved studying the field. It's right there, smack-dab in the middle of my wheelhouse. Being able to analyze options and actions to see their positive and negative output is important not only in playing games, but also in <b>designing</b> them. <i>(It also makes me insufferable when it comes to talking about policy, but that's a story for another time, perhaps.)</i></p>
            <p>One of the core requirements that all students of economics go through is, at the very least, an introductory course on <a href='https://www.britannica.com/science/game-theory'>game theory</a>. Now, game theory isn't about playing games, really - you could call it "<a href='https://plato.stanford.edu/entries/decision-theory/'>decision theory</a>, but with multiple actors". It's about navigating a maze of options and discovering an <a href='https://www.investopedia.com/terms/n/nash-equilibrium.asp'>equilibrium</a>, or... finding that an equilibrium <i>isn't</i> possible.</p>
            <p>So, I studied game theory, like a good student. In game theory, you look at multiple actors, the "games" they are playing, and their "<a href='https://xplaind.com/953905/payoff-matrix'>payoff matrices</a>". You start to see how, many times, the results of "the game" are predictable. Humans are creatures of habit and least resistance - they go where the <i>greatest</i> payoff is for the <i>least</i> effort. We all like to think we are the outlier, but in reality... we aren't.</p>
            <p>(Well, unless you're an outlier, I guess. But, uhh, anyway...)</p>
            <p>The thing about <i>academic</i> game theory is that your payouts are generally well-known. You don't have to try and guess at what they might be, because you focus on the theory and the math that solve these games, instead. You're not concerned about whether the values at some location on the matrix are accurate or not - you just <i>assume</i> that they are.</p>
            <p>My opinion of <a href='https://en.wikipedia.org/wiki/Gamification'>gamification</a> in the workplace is... <i>low.</i></p>
            <h4>There's Already A Game</h4>
            <p className='dropcap'>It isn't that gamification can't improve things. It can! It <i>absolutely</i> can! Gamification can improve things... in very specific, narrow applications.</p>
            <p>The overall problem I find with gamification in the workplace is that it is an abstract game layered on top of another abstract game - a game that we call "employment". Attempts at gamification are games we are forcing people to play, on top of a game that <b>they are already playing!</b> The math gets... <i>weird</i>. It becomes much harder to predict outcomes. You're dealing with "<a href='https://en.wikipedia.org/wiki/Higher-order_function'>higher order functions</a>", and those start to get tangled up together. Once these higher order functions start to enter into the mix, <i>determining values in payoff matrices becomes a hell of a lot harder</i>. And if you can't easily determine how the game pays out to its players, well... You're just rolling the dice with your time spent building and implementing the game. It might all be wasted effort in the end if it isn't developed properly.</p>
            <p><a href='https://en.wikipedia.org/wiki/Abstraction'>Abstractions</a> can be useful. By training, personal interests, and prior employment, I am a programmer. Programmers deal primarily in various types of abstractions. They take a set of <a href='https://en.wikipedia.org/wiki/Business_rule'>business rules</a>, and turn them into sets and systems of <b>logical operations</b> - some of which don't necessarily look much like those business rules. The additional abstraction is usually meant to be an efficiency increase of some type - otherwise, <i>you wouldn't need programmers!</i> You would just have the business rules, and operate by <i>those</i> instead!</p>
            <p><b>To argue the need for gamification is to argue that the abstract game "employment" isn't functioning</b>, or that you don't have the ability to change payoffs in the employment game. It's to argue that you need to correct the employment game with another abstract layer. It's declaring your intent to "fix the incentives" of employment - to "<i>fix the payoff matrix</i>".</p>
            <p>I've heard it argued as "increasing productivity", but the truth is that <b>if your employment system is functioning, you should be able to increase productivity based on that alone.</b> If your employment system is correct - i.e., if you are paying the correct wage and are able to find the right people for the jobs you need done - you will be in some "equilibrium", hovering around your theoretical "<a href='https://en.wikipedia.org/wiki/Marginal_utility'>marginal effectiveness</a>" of your employment system. The traditional theory is that higher wages and benefits equal higher output (up to a point), for a number of reasons. You attract better employees. Your employees are happier. Your employees will want to leave your organization less, which saves you on hiring costs. People will hear about the better working conditions at your company and give you a better hiring pool. And wages and benefits are only <i>one</i> factor that goes into the equation of employment and productivity! Organizational structures, information flow between groups within a company, the societal culture you exist within with regards to "work ethic" - <b>you could look at so many different factors, your head would spin.</b></p>
            <h4>The Time And Simplicity Trap</h4>
            <p className='dropcap'>And this is the part that gets tricky, you see. It becomes so difficult to try to figure out the existing "game" of employment and the incentives that go into it that we develop an intense desire to <b>simplify</b> it. And not only is it <i>difficult to figure out</i>, it also <i>takes a while for changes to have any measurable effect</i>. You won't see any changes from a changed pay scale until you've hired a bunch of new people and they've been around for a while. How do you know you're making the right changes? "Wouldn't it be great if we could just create a simple set of incentives that we could implement <i>right now</i>?" we say to ourselves. "Well, I read about gamification a while back... <i>Let's give that a try!</i>"</p>
            <p>Make no mistake about it, this is a <b>heavy</b> topic. Entire libraries exist about this kind of stuff. Political campaigns spending hundreds of millions of dollars live and die on the <i>opinions</i> surrounding theories about employment and incentive structures. Philosophers have discussed incentives, meaning, value, and equity for thousands of years.</p>
            <p>This article is really only a blog post, of course. More noise in a sea of noise surrounding these topics. I will focus in on one very particular part of it all, gamification in the workplace, and I'll only be able to scratch the surface of that particular topic. To go any deeper would require a lot of graph paper, a good bit of calculus and linear algebra, and a thesis defense. And at the end of it all, <i>I would just have some academic theory to talk about</i>, not a <b>real-world use case.</b></p>
            <h4>So, About That Real-World Use Case...</h4>
            <p className='dropcap'>Some years ago, I was working for a company that had software for a reasonably-sized user base. One of the things I was <b>very</b> enthusiastic about was creating help documentation for users.</p>
            <p>I often ended up with quite a few tickets every day that went, "<i>How do I do THING with the software?</i>" Answering this type of question wasn't my primary responsibility, but it was one of many, and <b>it often took a lot of time to respond to those tickets when I ran into them</b>. I had to open up the software, load up some test data, re-read the question because it was written a bit vague and using colloquialisms I wasn't familiar with, click through a bunch of pages or screens, type in a lot of words, write all of these steps down while making sure I didn't miss anything in the process... You get the picture. I was supporting the software, but I wasn't a <a href='https://en.wikipedia.org/wiki/Power_user'>power user</a>, after all. I was a software developer.</p>
            <p>Because of these tickets, I started writing a <a href='https://en.wikipedia.org/wiki/Wiki'>wiki-style</a> "help center" of documents. These documents had steps that people could take to resolve errors or issues that they ran into. They had easy-to-follow, step-by-step instructions on how to do certain activities that weren't intuitive.</p>
            <p>So, each time I got a ticket with a new question that could be resolved directly by the user, I would write up the help document, and send them the link. I would include common phrases or statements in the searchable text of the document so that when users wanted to find a document, it would usually be the first one in the list of results. I spent a lot of time refining and editing these documents based on feedback from the users who I sent them to. The feedback was constructive and positive.</p>
            <h4>Finding Equilibrium</h4>
            <p className='dropcap'>For a while, it created a bit of an extra workload, but after a month or so it started to <b>pay off</b> for me. <i>Less</i> of these tickets were entering the queue. The ones that did make it through were <i>quickly</i> answered. I not only became a power user from exploring the software more, but I was being bathed in the words that our users used in their day-to-day workflows. I knew a lot more about the industry they were in at that point.</p>
            <p>I was <i>naturally incentivized</i> to do this activity. It <i>saved me a lot of time</i> in the long run. Instead of writing the same answer over and over for users, and instead of them having to go through the whole support help desk process, <b>they could just find the answer themselves</b>. They'd find the answer quickly and they'd be happier for it. They even got to see their questions impacting the generation of these help documents in real time, with updates pushed out to them by the end of the day (or sooner). They felt like they were a part of improving the user experience of the software due to their questions.</p>
            <p>Our game's <i>payoff matrix</i> had sent us to the place where <i>we were all benefiting each other</i>. We were "<b>in equilibrium and maximizing our utility</b>", to use basic economic terms.</p>
            <p>I had a very high rating from users which to this day I am still very proud of (from a little help desk survey app system). It meant I was on to something with the way I approached the support work on the user's end. I felt accomplished knowing that users were being helped by my actions, and were happy with my performance. They felt like they were being supported in their work, and they felt like their questions were helping both themselves and their colleagues.</p>
            <p>Win-win situations are the <b>ultimate</b> moves in game theory. It's where you always end up, assuming that one exists, and <i>assuming that there is a path available to get there together</i>.</p>
            <p>Anyway, back to gamification. That's what this post is about.</p>
            <h4>Shall We Play A Game?</h4>
            <p className='dropcap'>At some point, someone introduced a gamification strategy to the organization. There were a number of issues with the approach taken. I don't fault anyone for this. "Making a game" is as abstract and herculean a task as <i>any</i> that a human could engage in. The simplest view when it comes to gamification is something like... "<i>Add points to things, people will compete, productivity will increase</i>." That seems easy, doesn't it? Add points and profit from the game. <b>Isn't that a win-win?</b></p>
            <p>The problem in this particular case was two-fold:</p>
            <p>First, the points didn't count towards anything tangible - you just had a score total displayed every month or so. It wasn't really a big deal. No one was getting performance reviews because they didn't hit some target number (<i>thankfully</i>). It was just a point system layered on top of the things that you completed in your daily workflow. It didn't mean anything at all, in the long run. There were little badges. It was a <i>cute distraction</i>.</p>
            <p>And yet, it was a distraction...</p>
            <p>The problem with assigning points to people is that it implies an awful lot of things. It implies value. It implies worth. It implies productivity. It implies competition and winners and losers. <b>People wouldn't assign points to things if those points didn't mean anything, would they?</b> It's one of the reasons so many organizations try to inhibit employees discussing their pay rates and salaries with each other - if person A is doing the same job as person B, and they're both getting comparable results, but they're being paid differently... what does that MEAN? <b>Salaries are "points" in the abstraction called the "employment game".</b> Sure, they're points that have spending power in the real world, and that gives them real world meaning and consequences... but they're <i>still points</i>. They still have <b>OTHER</b> meaning based on their assignment. In some cases it means <i>preferential treatment</i>. In other cases it means <i>seniority</i>. In others, it means one of the parties was simply a <i>better negotiator</i>.</p>
            <p><b>Points ALWAYS have other meaning when they're shown to people.</b> <a href='https://en.wikipedia.org/wiki/Goodhart%27s_law'>Goodhart's law</a> applies to every metric - point systems included.</p>
            <h4>Estimating Efforts: Pareto Strikes Back</h4>
            <p className='dropcap'>Back to our point system: one issue was the value placed on making and updating documentation. In general - <i>and in an awful lot of organizations</i> - it's hard to get people to work on creating and updating proper documentation. It takes a lot of time to do, and the documentation is out of date the moment you change the system it describes. You're building another system that you have to maintain in parallel with the primary system that it is meant to describe. What could be a better way to create an incentive to get documentation done than to gamify the process a bit, right? Add points, people will compete, productivity will increase. And since documentation isn't done often, let's make them worth a lot! That will <i>really</i> incentivize people to get them done!</p>
            <p>Well... I was writing a <b>LOT</b> of documentation compared to everyone else. The scoring worked out in such a way that I had an order of magnitude more than anyone else when it came to points, every single month. <b>I was already engaged in a user documentation process that rewarded me appropriately, so the points didn't matter.</b> It became a running gag that no one had to beat my score to win, they just had to beat a <i>tenth</i> of my score. The scoring system neglected to take my (<i>outlier</i>) time spent writing user documentation into account.</p>
            <p>And this is a funny side effect of most systems of inputs and outputs, something known as the <a href='https://en.wikipedia.org/wiki/Pareto_principle'>Pareto Principle</a>, or the 80/20 rule. The Pareto Principle states that <b>roughly 80% of effects come from 20% of causes in a system</b>. Now, this is not perfectly true in all cases, of course - there is no exact ratio of specific inputs and outputs that <i>always</i> works out like this in every system. It's meant to illustrate that there are often causes that vastly overpower others, and are responsible for the large majority of results when measuring outputs.</p>
            <p>In this case, in one <i>very particular</i> place that most people didn't interact with, an awful lot of documentation was being created. This one very particular place happened to be my user help documentation portal. I was creating lots of documentation as a natural part of my daily activities. This was completely unrelated to any point system or pressure from outside of my everyday workload. It completely <i>overwhelmed</i> the game's point system.</p>
            <p>So, lesson one about gamification: <b>if you're going to make a game out of something, make sure that the points are being tallied in a way that makes sense</b>. It sounds like common sense, but it's not. Some people are doing certain activities far more often than anyone else in the organization, and applying points to these activities is probably meaningless. Instead of giving points to those activities in general, you should <i>get a bit more specific</i> about their calculation.</p>
            <p>Perhaps they could have only totaled the points towards architecture or other high-level documentation - or only documents tagged with certain category labels - instead of including individual and unplanned efforts like mine. That could have brought the point system back to some realistic calculation - my crazy document generation, my outlier, would have been disregarded. Would that have been fair? Well... I think in the spirit of the game, yes, it would have been. Of course, had the point system been more specifically applied, you could probably disregard my outlier, which leads me to...</p>
            <p>The second problem this gamification attempt had was one of <i>breadth</i>.</p>
            <h4>It's Not You, It's Models</h4>
            <p className='dropcap'>There are game designers that work in AAA game companies with budgets into the hundreds of millions of dollars per title who can only <i>somewhat</i> effectively "balance" a game properly. <b>The game still requires months or years of real-world use in order to see how the players are actually incentivized and whether there are errors in assigning points.</b> This isn't a failure on their part, either - the human brain can only take into account so much information. <i>The brain can only ever make a model of reality</i>. Reality can <i>always</i> break the model.</p>
            <p>The second problem with this example boils down to the total <i>variety of actions</i> that produced the point totals. There was only ever <b>ONE</b> point total tallied up.</p>
            <p>A software developer working on one very difficult feature implementation over the course of multiple sprints was having their points totaled up against a business analyst writing multiple user stories each week. A tier I tech support person was having their points totaled up against a product development team manager.</p>
            <p>How do you assign point values that are supposed to be compared to each other, <b>when the actions that create those values are so drastically different in nature?</b> How many user-facing support documents equal one large data migration? How many low-level document edits equal a user story generated from examining support tickets? How many QA tests equal a custom report developed for the CEO's business meeting with a new client?</p>
            <p>This to me was the biggest issue with the gamification effort. How is anyone supposed to make a coherent point system out of these <b>vastly</b> different activities?</p>
            <h4>The Points Don't Matter</h4>
            <p className='dropcap'>One method that could have been attempted would have been to <a href='https://en.wikipedia.org/wiki/Normalization_(statistics)'>normalize</a> the points given based on - probably man-hours spent to complete each taske. But that is a <b>LOT</b> of work you would have to do. That's a <b>LOT</b> of data you'd have to capture and parse. Take <i>every single ticket</i> in Jira and extract the actual man-hours needed to complete them? And all while <i>assuming</i> that the man hours spent were accurate when either estimated or counted, when the ticket was marked complete?</p>
            <p>What about the activities that would never even enter a project management tool? I never created tickets for the documentation I created - <i>I just did it</i>, because I was <i>incentivized to do it</i>. Many other activities are exactly like that, completely missing from tracking systems and project management tools and Kanban boards.</p>
            <p>And let's say you somehow <b>DO</b> magically normalize all of the points to actual hours spent, or some similar metric... <b>Now, all you really have are points that stand for hours!</b> Why even make points in the first place, when you could simply look at the hours everyone spent doing things!?</p>
            <p>The breadth of the attempt at assigning points to every different activity was the largest issue in the gamification effort. It's like that show <i>Whose Line Is It Anyway?</i> - the points don't matter. In this case, the points didn't matter because they were describing a huge variety of actions that have <i>no inherent comparability between them</i>.</p>
            <h4>The True Price Of The Game</h4>
            <p className='dropcap'>I don't mean for this article to be a big complaint about gamification, but I do want it to describe common issues that a naïve implementation will have. And, unfortunately, in most organizations, you'll end up with a naïve implementation. Pretty much every first iteration of a game system is going to be naïve in some way. This is because <b>making good games is actually much more expensive than most people realize</b>. Even experienced game designers get this wrong. <i>Constantly.</i></p>
            <p>Unless you have an accurate and fairly granular measure of all of the activity in your organization that you want to gamify, <i>there isn't going to be a quantifiable way of setting point values</i>. Full stop. You're going to make a lot of <i>guesses</i> and you're going to have to <i>iterate</i>. <b>Gamification can only work if you are able to devote one or more people to a complete full time effort at developing the system.</b> Gamification won't give you the results you think it will if you try to take a mid-level business analyst and have them do it in their spare time, along with their other responsibilities.</p>
            <p>I don't want to only talk down on gamification. I can see a use for it in <b>very limited and specific applications</b>. A sales team composed of people with very similar levels of experience and ability are all on equal footing in their daily requirements and outputs. This is an application that a little gamification can help with, assuming the employment game has been played correctly and those incentives are all properly managed. It could encourage some competition and likely increase output due to the extra bit of incentive the game could provide. The application is small enough to be able to know who the actors are, their daily workflows, and the pool of activity that they engage in. Maybe the gamification can be built around <i>cold call totals</i>? Everyone could likely agree upon how many cold calls lead to how many sales, roughly, so <b>assigning points to cold calls actually has meaning to them</b>.</p>
            <p>But I can't help but think that this is all a moot point, anyway, <i>right</i>? Results are already quantifiable in that team, aren't they? If Susan makes 100 cold calls and gets 5 sales, and John makes 200 cold calls and gets 5 sales, do you need to gamify <i>cold calls</i>? The thing you are ultimately trying to make are <b>sales</b>, right? <i>Aren't sales the points that you are already measuring?</i> Isn't there already a game being played, that game that I mentioned at the start - employment? Susan is twice as effective as John when you look at cold call totals... <i>but maybe her calls take twice as long to complete</i>. Per hour, maybe they're equals, <i>and each salesperson has optimized to the types of work they do best</i>. John makes twice as many calls and bails out earlier on ones he feels aren't going anywhere. Susan sticks with them anyway and reaps the reward of that extra effort. Or maybe they spend equal time, and Susan is just <i>twice as effective</i> at cold calling. Or maybe Susan actually takes 4 times as long with these calls, and is only <i>half as effective</i> when you normalize sales based on cold call time.</p>
            <p>Look... the details between those two salespersons don't matter with regards to gamifying their work. The entire point is that <b>the values that they need to pay attention to already exist</b>. Those values are how many sales they make in any given time period. <b>They are professionals getting paid to make sales.</b> They know what their numbers mean and they know how to compare those values. They know if one of them is slacking. <i>The social pressure to perform is already there</i>.</p>
            <p>Will gamifying their work squeeze out another 10% efficiency? 5%? 1%? And if it <i>does</i> increase efficiency, <b>is the time and cost spent gamifying worth it?</b> And if the time and cost ends up being worth it, <b>will they enjoy it?</b> And if they don't enjoy it, <i>will they find another company that doesn't try to manipulate them into performing better with arbitrary point systems?</i></p>
            <p>You know what I bet would get an extra 10% efficiency out of them, assuming they're not <i>already</i> at max capacity? <b>I bet if you offer them another 5% on their commission they'll perform better.</b> Those are points they can calculate easily. Those are points that directly map to their actions and results. Those are points that offer <i>real incentives</i> to achieve them.</p>
            <p>One area I could see gamification helping the most is in <i>training people to perform activities they aren’t comfortable with</i>. This makes a lot of sense to me.</p>
            <p>Perhaps you’ve introduced a new technology or methodology in a group’s workflow — maybe this group of salespersons only ever did lead generation over the phone, but now you have a new method that only goes through email. There are probably members of the team that aren’t as comfortable with that method as with calling — and it shows, <b>because the new email lead generation system is going unused</b>. Applying some type of game to the use of that new system can give <i>just the right amount</i> of push to get people to use it. The more they use it, the more comfortable they become, and the more comfortable they are, the more they use it. You’re using the gamification to encourage a bit of a positive feedback loop, to help kickstart the adoption of your new tool.</p>
            <p>That application makes a lot of sense, doesn’t it? That’s not a game that’s a stand in for another metric — <b>that’s a game with a purpose.</b></p>
            <h4>Focus On The Real Game</h4>
            <p className='dropcap'><b>There's a game already being played, and it's called "employment".</b> It's an <i>abstraction</i> built around profit motives and the need to pay for things like food and shelter in the modern economy. <i>It's a well-known game</i> that has been played for thousands of years, so <i>everyone understands the strategies involved</i>. The points can be used to purchase whatever reward you want, too! You don't need to create a new company intranet portal with user authorization. Functionality doesn't need built to use those points to buy an extra day of remote work, or 2 hours of PTO, or tickets to the local cinema, or a gym membership, or a Slack emote. You don't need to invest a developer's time, and a business analyst's time, and HR's time to create it. <b>It's already there.</b></p>
            <p>Why make another game? Focus on optimizing the one that everyone is already playing.</p>
            <p>(<a href='https://medium.com/@danbrioli/how-i-ruined-my-bosss-attempt-at-gamification-729261677cbc'>Find this on Medium.</a>)</p>
        </article>
    );

};

export default BrokenGamification;