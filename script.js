const questions = [                 //questions je globalna premenna/konstanta const, ktorej hodnota je (obsahuje) pole (Array) = nazov: questions, typ:array, obsah:objekty
    {
        question: "Which is the largest animal in the world?",  //prvy prvok pola questions je [0] cize objekt; vo vnutri objektu je question key, kt. ma priradeny typ hodnoty string, cize question je nazov vlastnosti (Vlastnosť objektu je jeden key:value pár)
        answers: [                                          //answers je key (názov vlastnosti objektu) a zaroven typ hodnoty tohoto key je pole (obsahuje) pole
            {text: "Shark", correct: false},                //prvky pola su objekty; {..} cely zapis - jeden riadok je objekt kde text je key a "Shark" value, correct je key a false value
            {text: "Blue whale", correct: true},            // true/false tymto priamo urcujem typ hodnoty; typ = boolean uz to ma logiku
            {text: "Elephant", correct: false},             //JS vie o tom, ze correct ma literal typu boolean uz v tomto momente ked ten objekt vytvaras cize v samotnej definicii objektu
            {text: "Giraffe", correct: false}               //true alebo false bez úvodzoviek je v JavaScripte literál typu boolean; Keby si napísala "true" alebo "false" → bol by to string
        ]
    },
     {
        question: "Which is the smallest country in the world?",  //question je key teda názov vlastnosti objektu; Táto vlastnosť je tvorená dvojicou key : value. Typ hodnoty je string
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
const answerButtons = document.getElementById("answer-buttons");     //
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;           //globalna premenna je typu number(ja som priradila hodnotu a JS si odvodil z hodnoty 0, ze to bude typ number; let pretoze tieto hodnoty sa budú meniť počas behu kvízu (posunie sa index, score sa bude zvyšovať); 0 - toto číslo reprezentuje pozíciu v poli, ktorú chceme zobraziť
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;           //začneme od prvej otázky (index 0 v poli questions)
    score = 0;                          //vymaže predchádzajúce skóre, aby sa kvíz začal od nuly
    nextButton.innerHTML = "Next";      //nextButton je premenná, ktorá odkazuje na tlačidlo Next (HTML element <button>); <button id="next-btn">Tu je text</button>, priradenimn innerHTML = všetko, čo je vo vnútri HTML tagu / meníme text, ktorý sa zobrazuje na tlačidle, takze ked sa spusti kviz, tlacidlo bude vzdy zobrazovat "Next"
    showQuestion();
}

function showQuestion(){                                    
    resetState();                                           //prvá vec, ktorá sa stane, je vyčistenie obrazovky:Skryje sa tlačidlo Next -používateľ nemôže kliknúť skôr, než odpovie;Odstránia sa všetky predchádzajúce tlačidlá odpovedí -div pre odpovede je prázdny, pripravený na nové tlačidlá.
    let currentQuestion = questions[currentQuestionIndex];  //currentQuestion neobsahuje pole, neobsahuje text ale obsahuje cely OBJEKT otazky; Deklarujem lokálnu premennú currentQuestion ktorej som priradila hodnotu = globalnu premennu questions (kt.obsahuje pole a v poli su objekty), hranaté zátvorky znamenajú index access do poľa; JS to cele cita: Zober premennú questions, keďže je to pole, choď do neho pomocou indexu, ktorý je uložený v premennej currentQuestionIndex,(cize questions[0])index 0 → vyberie prvý objekt a tento objekt sa uloží do lokálnej premennej currentQuestion; 
    let questionNo = currentQuestionIndex + 1;              //questionNo je čitateľné číslo otázky pre používateľa, zatiaľ čo currentQuestionIndex je interný index poľa; currentQuestionIndex udáva index aktuálnej otázky v poli questions; + 1 My chceme, aby sa používateľovi zobrazovalo čitateľné číslo otázky 1,2,3 a nie 0,1,2;Ak currentQuestionIndex = 0, tak questionNo = 1, Ak currentQuestionIndex = 1, tak questionNo = 2
    questionElement.innerHTML = questionNo + ". " + currentQuestion.            //.innerHTML vlastnosť elementu HTML, ktorá určuje, čo je vo vnútri tagu <h2>; V premennej currentQuestion je objekt, z tohto objektu vyber vlastnosť s názvom question a vráť jej hodnotu.
    question;                                                                   // Výsledok currentQuestion.question je hodnota kľúča question, a táto hodnota je typu string; cize je to text otazky

    currentQuestion.answers.forEach(answer => {                                 //currentQuestion.answers je pole odpovedí (array/pole objektov),forEach potrebuje funkciu, ktorú zavolá pre každý prvok poľa v tomto pripade pre kazdy objekt v poli; Do zátvoriek () odovzdávaš callback funkciu (argument), ktorá povie, čo robiť s každým prvkom 
        const button = document.createElement("button");                        //→ v pamäti: <button></button>; Deklarujem lokálnu premennú button a priraďujem jej hodnotu – nový HTML element <button> vytvorený v pamäti pomocou document.createElement. Tento element zatiaľ nie je vložený do stránky, iba existuje v JavaScripte ako objekt.Vysledok je: v premennej button máme nový tlačidlový element <button></button>
        button.innerHTML = answer.text;                                         //→ v pamäti:napr. <button>Shark</button>; button.innerHTML = vlastnosť elementu, ktorá určuje obsah medzi otváracím a zatváracím tagom; answer.text = hodnota textu odpovede (napr. "Shark"), z objektu, ktorý forEach práve spracováva,naprv. <button>Shark</button>; Vysledok je: tlacidlo uz obsahuje text odpovede
        button.classList.add("btn");                                            //→ v pamäti: prida sa trieda <button class="btn">Shark</button>; Pridávam CSS triedu btn do tlačidla, aby sa štýlovo zhodovalo s definovaným CSS. 
        answerButtons.appendChild(button);                                      //→ vlozi sa do divu:<div id="answer-buttons"><button class="btn">Shark</button></div>; appendChild je metóda HTML elementu, pomocou ktorej sa vlozi element do ineho elementu, povolani sa stane sucastou DOM a bude viditelny na stranke; appendChild(button) = vloží tlačidlo do divu → teraz sa tlačidlo zobrazí na stránke
        if(answer.correct){                                                     //Ak je answer.correct pravda (true) = if(answer.correct) kontroluje, či je táto hodnota true;Ak by answer.correct bolo false, tento blok sa preskočí a nič sa do dataset nepridá.
            button.dataset.correct = answer.correct;                            //tak vezmi túto hodnotu a ulož ju do dataset tlačidla pod názov correct; vezmi hodnotu answer.correct a ulož ju pod (vymyslený)názov: correct do dataset; answer je objekt z pola answers a pomocu bodky sa dostavame k jeho vlastnosti .correct ktora ma hodnotu boolean = true alebo false;dataset je vlastnost HTML elementu - kt. uklada hodnoty ako stringy,preto sa boolean true ulozi ako "true"; answer.correct je boolean, teda hodnota, ktorá môže byť len true alebo false;answer.correct = false (boolean) → uloží sa do dataset.correct → "false" (string);answer.correct = true (boolean) → uloží sa do dataset.correct → "true" (string)
        }                                                                       //answer.correct = boolean (true/false); button.dataset.correct = uloží sa ako string ("true"/"false")
        button.addEventListener("click", selectAnswer);                         //Tu hovorime: Sleduj tento element - Keď naň niekto klikne, spusti funkciu selectAnswer;Funkcia selectAnswer sa nevolá hneď, iba sa posiela ako argument do addEventListener
                                                                                //Keď používateľ klikne, JavaScript automaticky vytvorí objekt udalosti, ktorý obsahuje všetky informácie o tejto udalosti (čo sa kliklo, kde, kedy, atď.);Tento objekt sa odosiela ako argument do tvojej funkcie selectAnswer
    })
}

function resetState(){                                          //resetState() – funkcia, ktorá pripraví obrazovku pre novú otázku;resetState() sa nespustí znovu sama, ani po ukončení showQuestion() - funkcia sa spustí vždy len vtedy, keď ju niekto explicitne zavolá.
    nextButton.style.display = "none";                          //Skryje tlačidlo Next;  nextButton → premenná, ktorá odkazuje na HTML tlačidlo Next (<button id="next-btn">Next</button>);.style → vlastnosť, ktorá ti umožňuje meniť CSS štýl priamo cez JavaScript;.display → konkrétna CSS vlastnosť, ktorá určuje, či a ako sa element zobrazuje.
    while(answerButtons.firstChild){                            //while znamená opakuj kód dovtedy, kým je podmienka pravdivá(Podmienka tu je answerButtons.firstChild → dokedy div obsahuje nejaké dieťa.);Vymaže všetky predchádzajúce tlačidlá odpovedí v div-e answerButtons: cyklus while sa opakuje dokym je v div-e nejaký prvok,.firstChild → odkazuje na prvý element, ktorý je aktuálne vnútri toho divu:Ak div obsahuje tlačidlá, firstChild bude prvé tlačidlo, Ak div je prázdny, firstChild je null → while sa ukončí.
        answerButtons.removeChild(answerButtons.firstChild);    //removeChild() vymaže element, ktorý jej dáš ako argument(Vždy odstraňuje prvé dieťa, pretože po každom odstránení sa ostatné elementy posunú "hore" v poradí);Odstráni prvý prvok;Výsledok: div s odpoveďami je prázdny a tlačidlo Next je skryté, pripravené na zobrazenie novej otázky; Prvý element vo vnútri answerButtons sa vymaže, potom while cyklus znova skontroluje firstChild,takto sa vymažú všetky predchádzajúce tlačidlá odpovedí.
    }                                                           //while sa automaticky ukončí, keď už nie je žiadne dieťa
}                                                               //Výsledok: div s odpoveďami je prázdny, tlačidlo Next je skryté.

function selectAnswer(e){                                       //e = ten event objekt, ktorý JavaScript vytvoril pri kliknutí; spusti sa to ked pouzivatel klikne na tlacidlo odpovede
    const selectedBtn = e.target;                               //e.target je element, ktorý spôsobil udalosť (tu: tlačidlo, na ktoré si klikla);target je vlastnosť objektu udalosti (event), ktorá ukazuje na element, ktorý spôsobil danú udalosť.
    const isCorrect = selectedBtn.dataset.correct === "true";   //kontroluje, či tlačidlo bolo správna odpoveď; isCorrect = kontrola, či tlačidlo má dataset.correct === "true"; isCorrect = boolean, true ak selectedBtn.dataset.correct === string "true", inak false
    if(isCorrect){                                              //ak je spravne 
        selectedBtn.classList.add("correct");                   //pridá triedu correct (zafarbí tlačidlo)
        score++;                                                //zvýši score++ (pripočíta bod)
    }else{
        selectedBtn.classList.add("incorrect");                 //ak nesprávne: pridá triedu incorrect
    }                                                           //array.from(answerButtons.children) vezme všetky tlačidlá odpovedí (aj tie nesprávne) a spraví z nich "skutočné pole", aby sme mohli použiť forEach
    Array.from(answerButtons.children).forEach(button => {      //Vezmi kolekciu HTML elementov (tlacidla odpovedi) a premeň ju na normálne pole = vysledok [button, button, button, button]; Prejdi ich jedno po druhom
        if(button.dataset.correct === "true"){                  //Ak má tlačidlo data-correct="true" (porovnávam STRING)
            button.classList.add("correct");                    //zvýrazni ho ako správne teda pridaj triedu correct; Ak je tlačidlo správna odpoveď → zafarb ho.
        }                                                       
        button.disabled = true;                                 //Bez ohľadu na to → zablokuj ho; disabled je boolean vlastnosť HTML tlačidla; VŠETKY tlačidlá:zablokuj (disabled = true: zapnem ju), aby sa už nedali kliknúť (nastavujem BOOLEAN pre vlastnost disabled)
    });
    nextButton.style.display = "block";
}

function showScore(){                   //Funkcia, ktorá sa spustí, keď sa dokončia všetky otázky.
    resetState();                       // vymaže všetky tlačidlá odpovedí
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`; //(You scored X out of Y!)
    nextButton.innerHTML = "Play Again";    //Zmeň text tlačidla Next → Play Again
    nextButton.style.display = "block";     //Zobraz tlačidlo Next
}

function handleNextButton(){            //Volá sa, keď používateľ klikne na tlačidlo Next.
    currentQuestionIndex++;             // posuň index otázky o 1
    if(currentQuestionIndex < questions.length){ //ak je aktuálny index otázky menší ako počet otázok v poli questions, tak zobraz ďalšiu otázku.
        showQuestion();     // ak sú ďalšie otázky, zobraz ďalšiu
    }else{
        showScore();        // ak sme na konci, ukáž skóre
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); //startQuiz() na konci = spustenie kvízu po načítaní stránky; Bez toho by sa otázky a odpovede nezobrazili







////choď do poľa questions a vyber prvok s indexom currentQuestionIndex; let currentQuestion je lokalna premenna; kt. obsahuje questions globálnu konštantu; najdi v scope premennu questions - zisti jej typ (array) - hranate zatvorky na array = index access - vyber prvok na pozicii currentQuestionIndex cize 0; Z poľa questions vyber prvok na pozícii, ktorú určuje číslo uložené v currentQuestionIndex, a ulož ho do premennej currentQuestion.

