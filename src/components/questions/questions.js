import QuestionsArray from "./questions-data";
import Minus from "../../utils/images/minus-btn.png";
import Plus from "../../utils/images/plus-btn.png";
import { useState } from "react";

const Questions = () => {
  const [questions, setQuestions] = useState(QuestionsArray);

  const questionHandler = (e) => {
    e.preventDefault();
    const updatedQuestions = questions.map((question) =>
      question.id === +e.target.id
        ? { ...question, open: !question.open }
        :  question 
    );
    
    setQuestions(updatedQuestions);
  };
  return (
    <section className="mt-8 mb-24">
      <h1 className="text-gray-900 font-bold text-4.5xl px-2 lg:text-5.5xl text-center">
        Frequently asked questions
      </h1>
      <p className="text-gray-500 font-medium text-base lg:text-xl text-center mt-1 mb-4">
        Everything you need to know about the product and billing.
      </p>
      <div className="mt-6 mb-4 w-max-128 m-auto">
        {questions.map((question) => {
          return (
            <div className="border-b-1 border-gray-200" key={question.id}>
              <div className="flex justify-between py-5">
                <p className="text-gray-800 font-medium text-xl">
                  {question.question}
                </p>
                {question.open ? (
                  <button onClick={questionHandler}>
                    <img
                      src={Minus}
                      alt="minus-btn"
                      className="h-6"
                      id={question.id}
                    ></img>
                  </button>
                ) : (
                  <button onClick={questionHandler}>
                    <img
                      src={Plus}
                      alt="plus-btn"
                      className="h-6"
                      id={question.id}
                    ></img>
                  </button>
                )}
              </div>
              {question.open && (
                <div className="mb-6 ease-in-out duration-1000 delay-1000">
                  <p className="text-gray-500 text-base font-medium px-2 py-2">
                    {question.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
