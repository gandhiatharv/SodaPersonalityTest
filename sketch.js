const questions = [
    "Do you prefer a sweeter taste in your beverages?",
    "Are you drawn to classic and timeless brands?",
    "Do you prefer a bolder flavor profile in your drinks?",
    "Are you more likely to choose a beverage based on its advertising campaigns?",
    "Do you enjoy a slightly citrusy taste in your soda?",
    "Are you influenced by the opinions of others when selecting a drink?",
    "Do you prefer a smoother and milder taste in your carbonated drinks?",
    "Are you attracted to a more modern and trendy brand image?",
    "Do you prefer a drink with a lighter and crisper taste?",
  ];
  
  let currentQuestionIndex = 0;
  let userAnswers = [];
  


  function showQuestion() {


      
    const questionElement = document.createElement('h3');
    questionElement.textContent = questions[currentQuestionIndex];
    document.body.appendChild(questionElement);

    

    
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    //container.style.height = '100vh'; // Adjust this value to fit your requirements
    
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.addEventListener('click', () => {
      answerQuestion(true);
    });
    container.appendChild(yesButton);
    
    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.addEventListener('click', () => {
      answerQuestion(false);
    });
    container.appendChild(noButton);
    
    document.body.appendChild(container);
  }
  
  function answerQuestion(answer) {
    userAnswers.push(answer);
    currentQuestionIndex++;
  
    const questionElement = document.querySelector('h3');
    questionElement.remove();
  
    const yesButton = document.querySelector('button');
    yesButton.remove();
  
    const noButton = document.querySelector('button');
    noButton.remove();
  
    if (currentQuestionIndex >= questions.length) {
      showResult();
    } else {
      showQuestion();
    }
  }
  
  function showResult() {
    const cokeScore = userAnswers.filter(answer => answer).length;
    const pepsiScore = userAnswers.filter(answer => !answer).length;
  
    let result = '';
    if (cokeScore > pepsiScore) {
      result = " ";
      aree=["Looks like you've got a Coca-Cola personality, full of energy and zest!",
      "You're rocking that Coca-Cola vibe, always ready to add a spark to any situation!",
      "Congratulations on being a true Coca-Cola enthusiast, bringing happiness and refreshment wherever you go!",
      "You've got that Coca-Cola charisma, making every moment more vibrant and exciting!",
      "You're the real thing, just like Coca-Cola - bold, confident, and unforgettable!",
      "Embrace your Coca-Cola spirit and keep fizzing with enthusiasm and positivity!",
      "With your Coca-Cola personality, you're sure to bring a taste of happiness to everyone around you!",
      "You've got that Coca-Cola charm, making connections and spreading joy like no one else!",
      "Cheers to your Coca-Cola character, always adding a splash of fun to life's adventures!",
      "You embody the Coca-Cola spirit, refreshing the world with your unique perspective!"]
      var areeIndex = Math.floor(Math.random() * aree.length);

      swal({ confirmButtonColor: '#CD853F', background:'#FF6B6B',    title: `The Results Are In!`, text: aree[areeIndex], imageUrl: "https://us.coca-cola.com/store/media/catalog/product/1/6/16181_squeeze-ko-can-maria-2.png?quality=80&fit=bounds&height=750&width=700&canvas=700:750", imageSize: "306x220", confirmButtonText: "Gotcha!", },    function(isConfirm) {
        if (isConfirm) {
          window.location.href = 'https://codeprojects.org/projects/weblab/v9a6BjU60C6WeCvxkvHa9tx51mOM9pJy4glyddWIvII';
        }});
    } else if (pepsiScore > cokeScore) {
      arre = ["Congratulations on having a Pepsi personality, always cool, calm, and collected!",
      "You've got that Pepsi edge, bringing a refreshing and unique perspective to any situation!",
      "Embrace your Pepsi persona, where a laid-back attitude meets undeniable style!",
      "You're rocking that Pepsi spirit, effortlessly standing out from the crowd!",
      "With your Pepsi charm, you bring a smooth and refreshing vibe to every interaction!",
      "Embodying the Pepsi ethos, you're all about embracing individuality and breaking boundaries!",
      "You've got that Pepsi allure, captivating others with your magnetic and cool demeanor!",
      "Cheers to your Pepsi character, always leaving a lasting impression with your calm and confident presence!",
      "You're the epitome of Pepsi, effortlessly radiating a sense of tranquility and coolness wherever you go!",
      "With your Pepsi personality, you're like a breath of fresh air, bringing a soothing and captivating energy to those around you!"
      ]
      var arreIndex = Math.floor(Math.random() * arre.length);

      result = " ";
      swal({ confirmButtonColor: '#CD853F', background:'#FF6B6B',    title: `The Results Are In!`, text: arre[arreIndex], imageUrl: "https://www.pepsico.com/images/default-source/products-brands/pepsi_12oz.png?sfvrsn=46c9ae09_0", imageSize: "306x220", confirmButtonText: "Gotcha!", },    function(isConfirm) {
        if (isConfirm) {
          window.location.href = 'https://codeprojects.org/projects/weblab/v9a6BjU60C6WeCvxkvHa9tx51mOM9pJy4glyddWIvII';
        }});
    } else {
      result = "You have an equal correlation to both Coca-Cola and Pepsi!";
    }
  
    const resultElement = document.createElement('h3');
    resultElement.textContent = result;
    document.body.appendChild(resultElement);
  }
  
  showQuestion();
  