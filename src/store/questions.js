export default {
  state: {
    questions: [
      {
        title: "Select your gender",
        options: [
          {
            text: "Male",
            urlImg:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/man-health-worker_1f468-200d-2695-fe0f.png",
          },
          {
            text: "Female",
            urlImg:
              "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/pregnant-woman_1f930.png",
          },
        ],
      },
      {
        title: "Motivation",
        description: "Do you agree with the statement below?",
        statement: {
          text: "Sometimes I need a friendly push to keep moving forward. I can stop if I feel tired.",
          color: "#8e96ea",
        },
        options: [
          {
            text: "Yes",
          },
          {
            text: "No",
          },
        ],
      },
      {
        img: "https://selfgrowthplan.com/static/book-1-c700479daac5af16d24f8284eba55608.png",
        title: "Does this book seem interesting to you?",
        options: [
          {
            text: "Yes",
          },
          {
            text: "No",
          },
        ],
      },
      {
        title: "Set up your goal!",
        mode:true,
        options: [
          {
            urlImg:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/smiling-face-with-sunglasses_1f60e.png",
            text: "Become the best version of yourself"
          },
          {
            urlImg:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/trophy_1f3c6.png",
            text:"Achieve more in less time"
          },
        ],
      },
      {
        title: "Who inspires you the most?",
        mode:true,
        multiple: true,
        options: [
          {
            urlImg:"https://storage.googleapis.com/books-us.appspot.com/influencer%201.png",
            text: "Steve Jobs",
            multiple: true
          },
          {
            urlImg:"https://storage.googleapis.com/books-us.appspot.com/influencer%201-1.png",
            text:"Elon Musk",
            multiple: true
          },
          {
            urlImg:"https://storage.googleapis.com/books-us.appspot.com/influencer%201-2.png",
            text:"Warren Buffet",
            multiple: true
          },
          {
            urlImg:"https://storage.googleapis.com/books-us.appspot.com/influencer%201-3.png",
            text:"Oprah Winfrey",
            multiple: true
          },
        ],
      },
      {
        title: "What is your age?",
        mode: true,
        options: [
          {
            answerTitle: "20s",
            description: "18—29 years",
          },
          {
            answerTitle: "30s",
            description: "30—39 years",
          },
          {
            answerTitle: "40s",
            description: "40—49 years",
          },
          {
            answerTitle: "50+",
          },
        ],
      },
      {
        title: "Set your goal on timing",
        description: "Pick the amount of time you will spend on self-development daily",
        mode: true,
        options: [
          {
            urlImg: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/victory-hand_270c.png",
            answerTitle: "Easy",
            description: "5 min/day",
          },
          {
            urlImg: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/ok-hand-sign_1f44c.png",
            answerTitle: "Common",
            description: "10 min/day",
          },
          {
            urlImg: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/raised-fist_270a.png",
            answerTitle: "Serious",
            description: "15 min/day",
          },
          {
            urlImg: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flexed-biceps_1f4aa.png",
            answerTitle: "Intensive",
            description: "20 min/day"
          },
        ],
      },
    ],
    currentQuestion: 0,
  },
  mutations:{
    setCurrentQuestion(state, currentQuestion){
      state.currentQuestion = currentQuestion
    }
  },
  actions:{},
  getters:{ 
    questions: s => s.questions,
    currentQuestion: s => s.currentQuestion
  }
};
