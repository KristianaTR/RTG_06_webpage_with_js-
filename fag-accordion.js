



const getEntryQuestion = function (question){
    const questionElement = document.createElement("div");
    questionElement.className = "question chevron right question_interactive";
    questionElement.innerHTML = question;

    return questionElement;
};

const getEntryAnswer = function(answer){
    const answerElement = document.createElement("div");
    answerElement.className = "answer answer-hidden";
    answerElement.innerHTML = answer;

    return answerElement;

};

function openAnswer(entryAnswer){
    /*const isVisible = entryAnswer.className.includes(visible);

    //if is visible -> hide the answer
    if (isVisible) {
        entryAnswer.className = `answer ${hidden}`;
    }

    //if not visible -> show the answer
    if (!isVisible) {
        entryAnswer.className = `answer ${visible}`;
    }*/

    entryAnswer.classList.toggle("answer-hidden");
};

function hideOtherQuestions (currentAnswer) {
    const answers = document.querySelectorAll("#faq .question_container");
    console.log(answers);
    answers.forEach(function(questionContainer){
        const question = questionContainer.querySelector(".question");
        console.log(question);
        const answer = questionContainer.querySelector(".answer");
        

        if (currentAnswer === answer){
            return;
        }

        answer.classList.add("answer-hidden");
        question.classList.remove("bottom");
        question.classList.add("right");
    });
};


const faqList = function addQandAnsw () {
    const faqData = [
        {
            question: `What Is a Healthy Lifestyle?`,
            answer: `You know the obvious behaviors that describe someone who is healthy and takes care of themselves. A healthy person doesn't smoke, tries to maintain a healthy weight, eats healthy foods with plenty of fruits, vegetables and fiber and, of course, exercises on a regular basis.`,
        },
        {
            question: `Does a healthy lifestyle make a difference?`,
            answer: `As it turns out, healthy habits make a big difference. A mega-analysis of 15 international studies that included over 500,000 participants found that over half of premature deaths were due to unhealthy lifestyle factors such as poor diet, inactivity, obesity, excessive alcohol intake, and smoking.`,
        },
        {
            question: `What Are 10 Tips for a Healthy Lifestyle?`,
            answer: `Here are 10 tips for a healthy lifestyle: <br>
            <ul>
                <li>eat a balanced diet,</li>
                <li>stay well hydrated,</li>
                <li>exercise regularly,</li>
                <li>get enough good sleep,</li>
                <li>limit your alcohol intake,</li>
                <li>do not smoke,</li>
                <li>protect yourself from the sun,</li>
                <li>wash your hands,</li>
                <li>manage your stress,</li>
                <li>practice safe sex.</li>
            </ul>`,
        },
        {
            question: `How To Motivate Yourself?`,
            answer: `Self motivation makes people confident and courageous to fight widespread delusions. A healthy lifestyle is a prerequisite for healthy motivation - the one where adventurous living means going your own way in search of meaningful challenges. Only when you know your reasons why - can you shape your life choices. Only highly motivated people can overcome all the challenges of remaining passive or destructive like many others.`,
        },
        {
            question: `How do I start living a healthy lifestyle?`,
            answer: `Deciding to make a change in your life is never easy. Breaking old habits and creating healthy ones can be challenging and even discouraging at times. However, it’s not impossible. After deciding you want to make a change, the next step is to believe you can actually do it and come up with a plan.`,
        },
        {
            question: `Where can I find more information?`,
            answer: `Explore healthy lifestyle here  <a class="button" href="https://www.euro.who.int/en/health-topics/disease-prevention/nutrition/a-healthy-lifestyle">explore</a> `,
        },
    ];

    

    const faqElement = document.getElementById("faq");
    faqElement.innerHTML = "";

    const faqContainer = document.createElement("div");
    faqContainer.id = "faq-container";

    const visible = "answer-visible";
    const hidden = "answer-hidden";

    function handleChevronMove (entryQuestion){
        entryQuestion.classList.toggle("right");

        entryQuestion.classList.toggle("bottom");

    }

   

    faqData.forEach(function(faqEntry){
        
        const {question, answer} = faqEntry;

        const entryContainer = document.createElement("div");
        entryContainer.className = "question_container";

        const entryAnswer = getEntryAnswer(answer);

        const entryQuestion = getEntryQuestion(question);

        entryQuestion.onclick = function(){
            openAnswer(entryAnswer);
            handleChevronMove (entryQuestion);
            hideOtherQuestions(entryAnswer);
        };

        
        //Add Question and answer elements to container
        entryContainer.append(entryQuestion);
        entryContainer.append(entryAnswer);

        faqContainer.append(entryContainer);
    });

    faqElement.append(faqContainer);
};

faqList ();