var shia = (function(){

    var body;

    var see = function(){
    	document.getElementsByTagName("BODY")[0].innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DvVUBZy_MHE?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    };

    var quote = function(){
        return quotes[Math.floor(Math.random()*quotes.length)];
    };

    var quotes = [
        "Respected, I almost want to be revered, that's what I'm chasing.",
        "I hated golf when we first started, but a big part of the training process was falling in love with this sport, so I went on tour with the UCLA Team.",
        "They're very, uh, you know, I don't come from the suburbs and a jolly, Disney type of lifestyle. I come from something totally different. And they're cool and bare minimum so it's not always a money issue for me.",
        "When I first met Josh, I walked into a Disney screening room ... and he's sitting there talking to all these executives, like he's holding court, ... I say 'You've got to be kidding me. Josh, are you even old enough to have chest hair' And he says 'No, but you should see my back.' He's a funny little kid who would talk you out of your shoes and sell them back to you.",
        "I didn't know my dad for a long time. My dad was on drugs and my dad was at the VA Hospital, my dad was off in his own world selling drugs or using them or there would be crack heads in the house or whatever it would be.",
        "I turned down twelve films last year... Huge money films, but I had no respect for the writer or the work.",
        "No, I was an unknown when I walked in that room. He didn't know who I was from a fly on the wall.",
        "I grew up around a lot of aggressive guys. My parents used to take me to AA meetings when I was very young. So I know aggression, I know insanity.",
        "I understand why marriages break up over golf. I can't even talk about my own handicap because it's too upsetting.",
        "So it's kind of nervous to be in this situation, but at the same time you look at all those actors and the work that they've done, I've been in bigger films than all of them and still kept my integrity and still kept my respect.",
        "My neighborhood was rough, but I live a great life now. I don't fight that much now. I don't look for it anyway, but if someone hits your mother, whether you're a star, an accountant, or an astronaut or anything... I mean it's your mother, so I lost my mind.",
        "People classify me as a laughy-daffy Disney kid, ... Even Stevens.",
        "I just wish the crowd I was associated with was more passionate about what they were doing and less consumed with the commerce of the art form.",
        "And yeah, my handicap was down to a 10 when we were at the thick of it. I trained for six or seven months, golfing every day for six hours, seven days a week, with eight trainers. It was intense.",
        "I'd love to go to school and have a normal life, but I don't see any professor at Yale being able to teach me more than Steven Spielberg.",
        "It's kind of a self-help book for the 'hood', if there is such a thing,",
        "I drink protein shakes nonstop - three or four a day - and I run a lot, so you get rid of the bad carbs and keep the rest so you have the energy to make it through.",
        "Clubs are so lame. Nobody even dances at these clubs. They stand around and get drunk and they schmooze. There is no enjoyment factor.",
        "I used to dirt bike a lot. I can't do that anymore. Can't eat a whole lot of chocolate anymore, either. I can't be in 'Indiana Jones' and be a fatso!",
        "Director Bill Paxton told me to watch 'The Legend of Bagger Vance,' ... I go watch it, and I come back and he goes, 'We are not making 'Bagger Vance.'",
        "We did this two-week boot camp before we filmed the movie. I got to know everybody in the group and we became friends. We got really tight throughout those two weeks.",
        "I was the only white kid in my neighborhood for most of my youth even in high school, so reverse racism was just as apparent as racism.",
        "I'm very picky and I'm in a situation where it's a big crossover.",
        "Francis was never supposed to win. It was David versus two Goliaths, ... Francis couldn't even walk on the course unless he was carrying something that belonged to someone else who was employing him. So at night he would run on the course and count steps and measure yardage for the holes. If he played on any other course, he wouldn't have beaten Harry Vardon.",
        "I want my audience to know me for my work, not because of who I'm dating or what drugs I'm on or what club I went to.",
        "And if you're a golfer and you watch a golf film and Matt Damon swing, and it's not great, then you're not going to believe in the golf story, you're not going to believe in the rest of the film. That's the whole movie, so if that swing looks like crap, the movie's crap.",
        "There's only so far you can take a relationship before you got to get into things that are too serious or over the top. I'm 20 years old. I was in a relationship with a girl I love for three years. Where do you go after three years? Then you've got to start thinking about other things, and I'm too young to think about those things.",
        "I've spent more on my Dodger tickets that I did on my car.",
        "I'm not an Adonis, that's for damn sure. I've never really thought of myself that way, and it doesn't matter to me. My favorite actors aren't Adonises. Dustin Hoffman is a flawed-looking man; he's amazing to me. Tom Hanks is flawed-looking; people love him. Same with Gene Hackman.",
        "I've been in fights, but that doesn't make me cool or like a tough guy or more interesting actor, I'm not proud of it.",
        "I turned down a scholarship to Yale. The problem with college is that there's a tendency to mistake preparation for productivity. You can prepare all you want, but if you never roll the dice you'll never be successful.",
        "A lot of people like to think that golf is a lazy man's sport, ... Or it's a rich man's sport, or it's a sport that they can't be involved in. But they don't know Francis' story, which is why the movie was made in the first place To bring back this amazing tale so that people could be educated about how interesting it was. When golf used to be a rich man's sport, if you were poor you could not step foot on a course. Francis was a caddy. He grew up across the street from the course, looked up to Harry Vardon (played by Stephen Dillane in the film), this five-time British Open champion but he was never allowed to play.",
        "People think that their vote counts. They go to college, and everything gets mixed up. People stop caring, ... They raise the gas prices, but what the Everyman makes and welfare never seem to keep up. The HMO system is so ridiculous. I'm slightly educated. No one wants to hear what Hilary Duff thinks of the economy.",
        "And I'm not a personality; otherwise I'd be coming out with an album, performing on MTV. All that stuff is possible and I can do that tomorrow. I just have no need.",
        "Look, you're on the set for six months, with someone who's rooting to be attracted to you, and you're rooting to be attracted to them. I never understood the separation of work and life in that situation. But the time I spent with Megan was our own thing.",
        "You never really meet a human being until you live with them or know them for awhile, so this is my clown and they understand that and so these interviews don't bother them.",
        "Now my dad is with me, traveling with me and a big part of this whole thing is I like to mix it up a little bit, you know. Who gets to take their father on a private jet across the country and stay in first class hotels? So we're enjoying it, but I'd stop if it's not possible.",
        "I think every young actor in Los Angeles went up for that role. It was between Frankie Muniz and me, and he pulled out, so I got the role.",
        "I don't have to live this lavish lifestyle.",
        "No, I come for a hippy lifestyle, it's very open; my parents are both hippies.",
        "I think there's a form of honesty, because I used to be very honest with the press, and then it backfired on me, and I understood it.",
        "I trained more than anybody ever in a golf film ever made - my swing is pretty hot.",
        "But this is a little different. This is the adult acting. This is a different crowd. It's more work and more good work. That's it. People will have their opinion regardless.",
        "I like the dark, mysterious, maybe even gothic type girls. They have to have a good personality too! I'm very picky!",
        "When you look at golf films before us they're all - garbage or satire. A lot of sports films tend to vilify the opposition. Where the opposition becomes this big angry monster, so big you can't beat him.",
    ];

    return {
        quote : quote,
        see: see
    }

})();