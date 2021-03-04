const qBank = [
    {
      question:
      "How many soccer players should be on the field at the same time?",
      answers: ["11", "18", "22", "26"],
      correct: "11",
      questionId: "099099"
    },
    {
      question:
      "Which team was the 2014-2015 NBA Champions?",
      answers: ["Houston Rockets", "Atlanta Hawks", "Golden State Warriors", "Cleveland Cavaliers"],
      correct: "Golden State Warriors",
      questionId: "093909"
    },
    {
      question:
      "What national team won the 2016 edition of UEFA European Championship?",
      answers: ["Portugal", "France", "Germany", "England"],
      correct: "Portugal",
      questionId: "009039"
    },
    {
      question:
      "How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?",
      answers: ["13", "7", "15", "18"],
      correct: "13",
      questionId: "090089"
    },
    {
      question:
      "How many soccer players should be on the field at the same time?",
      answers: ["11", "18", "22", "26"],
      correct: "11",
      questionId: "099099"
    },
    {
      question:
      "Which team was the 2014-2015 NBA Champions?",
      answers: ["Houston Rockets", "Atlanta Hawks", "Golden State Warriors", "Cleveland Cavaliers"],
      correct: "Golden State Warriors",
      questionId: "093909"
    },
    {
      question:
      "What national team won the 2016 edition of UEFA European Championship?",
      answers: ["Portugal", "France", "Germany", "England"],
      correct: "Portugal",
      questionId: "009039"
    },
    {
      question:
      "How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?",
      answers: ["13", "7", "15", "18"],
      correct: "13",
      questionId: "090089"
    },
    {
      question:
      "How many soccer players should be on the field at the same time?",
      answers: ["11", "18", "22", "26"],
      correct: "11",
      questionId: "099099"
    },
    {
      question:
      "Which team was the 2014-2015 NBA Champions?",
      answers: ["Houston Rockets", "Atlanta Hawks", "Golden State Warriors", "Cleveland Cavaliers"],
      correct: "Golden State Warriors",
      questionId: "093909"
    },
    {
      question:
      "What national team won the 2016 edition of UEFA European Championship?",
      answers: ["Portugal", "France", "Germany", "England"],
      correct: "Portugal",
      questionId: "009039"
    },
    {
      question:
      "How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?",
      answers: ["13", "7", "15", "18"],
      correct: "13",
      questionId: "090089"
    },
  
  
  ];
  
  export default (n = 8) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));