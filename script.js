const questions = [                 //questions je premenna/konstanta const, ktorej hodnota je (obsahuje) pole (Array)
    {
        question: "Which is the largest animal in the world?",  //prvy prvok pola questions je [0] cize objekt; vo vnutri objektu je question key, kt. ma priradenu hodnotu string, cize question je nazov vlastnosti (Vlastnosť objektu je jeden key:value pár)
        answers: [                                          //answers je key (názov vlastnosti objektu) a zaroven hodnota toho key je pole (obsahuje) pole
            {text: "Shark", correct: false},                //prvky pola su objekty; {..} cely zapis - jeden riadok je objekt kde text je key a "Shark" value, correct je key a false value
            {text: "Blue whale", correct: true},            // true/false tymto priamo urcujem typ hodnoty; typ = boolean uz to ma logiku
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
     {
        question: "Which is the smallest country in the world?",  
        answers: [                                          
            {text: "Vatican City", correct: true},                
            {text: "Bhutan", correct: false},           
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false}
        ]
    },
     {
        question: "Which is the largest desert in the world?",  
        answers: [                                          
            {text: "Kalahari", correct: false},                
            {text: "Gobi", correct: false},            
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
        ]
    },
     {
        question: "Which is the smallest continent in the world?",  
        answers: [                                          
            {text: "Asia", correct: false},                
            {text: "Australia", correct: true},            
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    },
      {
        question: "Which is the coldest inhabited place in the world?",  
        answers: [                                          
            {text: "Oymyakon, Yakutia, Russia", correct: true},                
            {text: "Reykjavik, Iceland", correct: false},            
            {text: "Helsinki, Finland", correct: false},
            {text: "Norilsk, Russia", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question");        //questionElement = konštanta; hodnota = odkaz na HTML element (<h2 id="question">...</h2>)
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;           //let pretoze tieto hodnoty sa budú meniť počas behu kvízu (posunie sa index, score sa bude zvyšovať); 0 - toto číslo reprezentuje pozíciu v poli, ktorú chceme zobraziť
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;           //začneme od prvej otázky (index 0 v poli questions)
    score = 0;                          //vymaže predchádzajúce skóre, aby sa kvíz začal od nuly
    nextButton.innerHTML = "Next";      //nextButton je premenná, ktorá odkazuje na tlačidlo Next (HTML element <button>); <button id="next-btn">Tu je text</button>, priradenimn innerHTML = všetko, čo je vo vnútri HTML tagu / meníme text, ktorý sa zobrazuje na tlačidle, takze ked sa spusti kviz, tlacidlo bude vzdy zobrazovat "Next"
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHtml = questionNo + ". " + currentQuestion.
    question;
}