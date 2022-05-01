// Remove command prefix
PennController.ResetPrefix(null);

Header()
    .log( "sona_id", GetURLParameter("id"));

PennController.PreloadZip("https://vicgom14.dreamhosters.com/experiment_media/Daoxin/homophone/high.zip");
PennController.PreloadZip("https://www.ling.upenn.edu/~daoxinli/homophone/images.zip");
PennController.PreloadZip("https://www.ling.upenn.edu/~daoxinli/homophone/audios.zip");
PennController.CheckPreloaded();

DebugOff()

Sequence("audio_check", "init", "instructions-verb", "pre-verb", "verb", "post-verb", "instructions-practice", "practice", "instructions-learn",  randomize("learning"), "instructions-test", "reminder_1_1", randomize("testing_1_1"), "reminder_2_1", randomize("testing_2_1"), "reminder_3_1", randomize("testing_3_1"), "reminder_4_1", randomize("testing_4_1"), "reminder_5_1", randomize("testing_5_1"),"reminder_6_1", randomize("testing_6_1"), "reminder_7_1", randomize("testing_7_1"), "reminder_8_1", randomize("testing_8_1"),"reminder_1_2", randomize("testing_1_2"), "reminder_2_2", randomize("testing_2_2"), "reminder_3_2", randomize("testing_3_2"), "reminder_4_2", randomize("testing_4_2"), "reminder_5_2", randomize("testing_5_2"),"reminder_6_2", randomize("testing_6_2"), "reminder_7_2", randomize("testing_7_2"), "reminder_8_2", randomize("testing_8_2"),"upload", "send", "final")
//sepWith("async", randomize("learning"))

InitiateRecorder("https://vicgom14.dreamhosters.com/experiment_media/Daoxin/homophone/myphp.php").label("init");
//UploadRecordings("async", "noblock")

//audio check
newTrial("audio_check",
    newHtml("child_audio_check.htm")
        .print()
    ,
    newAudio("audio", "audio_test_edit.mp3")
        .center()
        .print()
    ,
    newCanvas("space", 10, 10)
        .print()
    ,
    newTextInput("audio_response")
        .center()
        .css("font-size", "1.1em")
        .print()
        .log()
    ,
    newCanvas("space2", 10, 10)
        .print()
    ,
    getAudio("audio")
        .wait()
    ,
    newText("feedback")
    ,
    newButton("check_response", "Continue")
        .center()
        .settings.css("font-family", "Noto Serif")
        .css("font-size", "1.25em")
        .callback(
            getTextInput("audio_response")
                .test.text("3241")
                .failure(getText("feedback").text("Sorry, those are not the correct numbers. Please listen to the audio again and type in the numbers you hear with NO spaces between them.").print() ))
        .print()
        .wait(getTextInput("audio_response").test.text("3241"))
).setOption("hideProgressBar",true);


// Instructions at the beginning
newTrial("instructions-verb",
    defaultText
        .center()
        .print()
    ,
    newAudio("audio1", "instruct1.mp3")
        .play()
    ,
    newText("instructions-1", "<p>Welcome to this language-learning study!</p>")
    ,
    newText("instructions-2", "<p>In this study, you are going to learn the basics of a new language, which we call <b>Tulka</b>.</p>")
    ,
    getAudio("audio1")
        .wait("first")
    ,
    newButton("continue1", "Continue")
        .center()
        .print()
        .wait()
    ,
    clear()
    ,
    newAudio("audio2", "instruct2.mp3")
        .play()
    ,
    newText("instructions-3", "<p>You are going to learn Tulka by watching a man and a woman communicating using this language. (They are experts in Tulka.) In these videos, the man will give instructions to the woman in Tulka, and the woman will carry out the action. For each video, your job is to listen to the speech, watch the woman carry out the action, and then repeat out aloud in Tulka what you heard the man say. In this way, you will learn the meanings of some words and how to pronounce them. </p>")
    ,
    getAudio("audio2")
        .wait("first")
    ,
    newButton("continue2", "Continue")
        .center()
        .print()
        .wait()
    ,
    clear()
    ,
    newAudio("audio3", "instruct3.mp3")
        .play()
    ,
    newText("instructions-4", "<p>To keep things simple, the man will only ask the woman to do two different kinds of actions. She will be asked either to pick up something or to turn something over. In Tulka, the word for <b>picking up something</b> is pronounced <b>'dax'</b>. And the word for <b>turning something over</b> is pronounced <b>'zep'</b>. Knowing the names for these two actions should help you learn the various names for objects in Tulka. There is also a word for <b>'great job!'</b> in Tulka, which is pronounced <b>'timo'</b>.</p>")
    ,
    newText("instructions-5", "<p>So it's very important that you memorize the names for these two actions before we begin the study. Let's practice that first. Remember <b>'dax'</b> means <b>'lifting'</b> and <b>'zep'</b> means <b>'turning'</b>.</p>")
    ,
    getAudio("audio3")
        .wait("first")
    ,
    newButton("continue3", "Continue")
        .center()
        .print()
        .wait()
)

// Instructions for the practice trial
newTrial("instructions-practice",
    defaultText
        .center()
        .print()
    ,
    newAudio("audio", "instruct4.mp3")
        .play()
    ,
    newText("instructions-1", "<p>Great job! Now you will learn the names for objects in Tulka. In this part, you will learn these words by watching videos of a man and a woman communicating in Tulka. In each video, the woman will have two photographs in front of her. And the man will tell the woman to pick up or turn over one of the photos.</p>")
    ,
    newText("instructions-2", "<p>Your job is to listen to the speech, watch the woman carry out the action, and then repeat out aloud in Tulka what you heard the man say. In this way, you will learn the meanings of some words and how to pronounce them in Tulka.</p>")
    ,
    newText("instructions-3", "<p>Let's start with a practice trial. We'll do this practice trial in English just so that you get a sense of what the trials will be like.</p>")
    ,
    newText("instructions-4", "<p>When you are ready to begin, click 'continue'.</p>")
    ,
    getAudio("audio")
        .wait("first")
    ,
    newButton("continue", "Continue")
        .center()
        .print()
        .wait()
)

// Instructions for the learning phase
newTrial("instructions-learn",
    defaultText
        .center()
        .print()
    ,
    newAudio("audio", "instruct5.mp3")
        .play()
    ,
    newText("instructions-1", "<p>Terrific! Let’s now do the trials in Tulka. There will be 32 videos in this part. Please pay attention to the pictures and what the man says, because you will be tested on the meanings of the words at the end of this study.</p>")
    ,
    getAudio("audio")
        .wait("first")
    ,
    newButton("continue", "Continue")
        .center()
        .print()
        .wait()
)

// Instructions for the testing phase
newTrial("instructions-test",
    defaultText
        .center()
        .print()
    ,
    newAudio("audio", "instruct6.mp3")
        .play()
    ,
    newText("instructions-1", "<p>Great job! Now you are ready for the last part of the study.</p>")
    ,
    newText("instructions-2", "<p>In this part, we want to know what you learned about the meanings of certain words in Tulka. For each test, you will hear the word, and then be asked a series of questions about the meaning of that word. This will be done by showing you pictures.</p>")
    ,
    newText("instructions-3", "<p>When you are ready to begin, click 'continue'.</p>")
    ,
    getAudio("audio")
        .wait("first")
    ,
    newButton("continue", "Continue")
        .center()
        .print()
        .wait()
)

newTrial("pre-verb",
    newVar("verb-performance").global().set(true)
)
//Learning the verbs
Template("verb.csv", row=>
  newTrial("verb",
    newText("question", "<p>"+row.sentence+" Click on the answer.</p>")
        .center()
        .print()
    ,
    newAudio("audio", row.audio+".mp3")
        .play()
    ,
    newText("guess1", row.guess1)
        .center()
        .print()
    ,
    newText("guess2", row.guess2)
        .center()
        .print()
    ,
    newSelector("choice")
        .add(getText("guess1") , getText("guess2"))
        .shuffle()
        .frame("solid 2px purple")
        .wait()
        .log()
    ,
    getAudio("audio")
        .wait("first")
    ,
    newButton("check_response", "Continue")
        .center()
        .print()
        .wait(
            getSelector("choice")
                .test.selected( getText(row.correct) )
                .failure( 
                    getVar("verb-performance").set(false)
                    ,
                    newText("Sorry, this is not the correct answer. Please select again.").center().print() 
                )
        )
  )
)

newTrial("post-verb",
    getVar("verb-performance").global().test.is(true).failure( jump("pre-verb") )
)

newTrial("practice",
    newVideo("video", "practice.mp4")
        .size("60vw", "auto")
        .center()
        .disable(0.01)
        .print()
    ,
     newTimer("preview", 2000)
        .start()
        .wait()
    ,
    getVideo("video")
        .pause()
        .once()
        .play()
        .wait()
    ,
    newText("instruction", "After watching the video, please press 'record', repeat aloud the instruction you heard ('lift the key'), press 'stop' and then continue.")
        .center()
        .print()
    ,
    newMediaRecorder("recorder", "audio")
        .center()
        .print()
        .wait()
    ,
    newButton("continue", "Continue")
        .center()
        .print()
        .wait()
)

// Learning trials
Template("learning.csv", row =>
    newTrial("learning",
        newVideo("video1", row.video1+".mp4")
            .size("60vw", "auto")
            .center()
            .disable(0.01)
            .print()
        ,
        newTimer("preview1", 2000)
            .start()
            .wait()
        ,
        getVideo("video1")
            .pause()
            .once()
            .play()
            .wait()
        ,
        newMediaRecorder("recorder1", "audio")
            .center()
            .print()
            .wait()
        ,
        newButton("continue1", "Continue")
            .center()
            .print()
            .wait()
        ,
        clear()
        ,
        newVideo("video2", row.video2+".mp4")
            .size("60vw", "auto")
            .center()
            .disable(0.01)
            .print()
        ,
        newTimer("preview2", 2000)
            .start()
            .wait()
        ,
        getVideo("video2")
            .pause()
            .once()
            .play()
            .wait()
        ,
        newMediaRecorder("recorder2", "audio")
            .center()
            .print()
            .wait()
        ,
        newButton("continue2", "Continue")
            .center()
            .print()
            .wait()
        ,
        clear()
        ,
        newVideo("video3", row.video3+".mp4")
            .size("60vw", "auto")
            .center()
            .disable(0.01)
            .print()
        ,
        newTimer("preview3", 2000)
            .start()
            .wait()
        ,
        getVideo("video3")
            .pause()
            .once()
            .play()
            .wait()
        ,
        newMediaRecorder("recorder3", "audio")
            .center()
            .print()
            .wait()
        ,
        newButton("continue3", "Continue")
            .center()
            .print()
            .wait()
        ,
        clear()
        ,
        newVideo("video4", row.video4+".mp4")
            .size("60vw", "auto")
            .center()
            .disable(0.01)
            .print()
        ,
        newTimer("preview4", 2000)
            .start()
            .wait()
        ,
        getVideo("video4")
            .pause()
            .once()
            .play()
            .wait()
        ,
        newMediaRecorder("recorder4", "audio")
            .center()
            .print()
            .wait()
        ,
        newButton("continue4", "Continue")
            .center()
            .print()
            .wait()
    )
    .log("phase", row.phase)
    .log("word", row.word)
    .log("video1", row.video1)
    .log("video2", row.video2)
    .log("video3", row.video3)
    .log("video4", row.video4)
    )


// Reminder
Template("reminder.csv", row =>
    newTrial("reminder_"+row.block,
        newText("sentence", "Reminder: This was called a <b>"+row.label+"</b>.")
            .center()
            .print()
        ,
        newAudio("audio", row.label+".mp3")
           .play()
        ,
        newImage("image", row.image+".png")
           .size(200,200)
           .center()
           .print()
        ,
        getAudio("audio")
            .wait("first")
        ,
        newButton("continue", "Continue")
            .center()
            .print()
            .wait()     
    )
    .log("phase", row.phase)
    .log("trial", row.trial)
    .log("word", row.word)
    .log("label", row.label)
    .log("meaning", row.meaning)
    .log("image", row.image)
    .log("block", row.block)
)

// Testing trials
Template("testing.csv", row =>
    newTrial("testing_"+row.block,
        newText("question", "How about this? Is this also a <b>"+row.label+"</b>? Click on the answer.")
            .center()
            .print()
        ,
        newAudio("audio", row.label+".mp3")
           .play()
        ,
        newImage("image", row.image+".png")
           .size(200,200)
           .center()
           .print()
        ,
        newText("yes", "Yes")
            .center()
            .print()
        ,
        newText("no", "No")
            .center()
            .print()
        ,
        newSelector("choice")
            .add(getText("yes") , getText("no"))
            .frame("solid 2px purple")
            .wait()
            .log()
        ,
        getAudio("audio")
            .wait("first")
        ,
        newButton("continue1", "Continue")
            .center()
            .print()
            .wait()
        ,
        newText("rating", "<p></p><p>How confident are you?</p>")
            .center()
            .print()
        ,
        newScale("scale", 5)
            .before(newText("0", "not confident at all") )    
            .after(newText("1", "completely confident") )  
            .center()  
            .print()
            .wait()
            .log()
        ,
        newButton("continue2", "Continue")
            .center()
            .print()
            .wait()
    )
    .log("phase", row.phase)
    .log("trial", row.trial)
    .log("word", row.word)
    .log("label", row.label)
    .log("meaning", row.meaning)
    .log("image", row.image)
    .log("block", row.block)
    .log("type", row.type)
)

UploadRecordings("upload")

// Send results manually
SendResults("send")

newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
    .center()
    .print()
,
newText("<p><a href='https://upenn.sona-systems.com/webstudy_credit.aspx?experiment_id=970&credit_token=ba37509acb9e4017bb86ae2c6b5fb357&survey_code="+ GetURLParameter("id")+"' target='_blank'>Click here to confirm your participation on SONA.</a></p> <p>This is a necessary step in order for you to receive credit!</p>")
.center()
.print()
,
newButton("void")
  .wait()
).setOption("hideProgressBar",true);
