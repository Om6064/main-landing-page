import { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  // Change tab and reset all answer visibility
  const changeTab = (tab) => {
    setActiveTab(tab);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer3(false);
  };

  // FAQ content by category
  const faqContent = {
    general: [
      {
        question: "What Is Frenk AI?",
        answer: "Frenk AI is an artificial intelligence tool that helps automate tasks.",
      },
      {
        question: "How does Frenk AI work?",
        answer: "Frenk AI uses machine learning to understand data and provide smart suggestions.",
      },
      {
        question: "Is Frenk AI free to use?",
        answer: "Yes, Frenk AI has a free plan with basic features. Premium plans offer more options.",
      },
    ],
    build: [
      {
        question: "How to build a workflow?",
        answer: "Use the drag-and-drop builder to create automated workflows.",
      },
      {
        question: "Can I integrate my own tools?",
        answer: "Yes, Frenk AI supports integrations with multiple third-party tools.",
      },
      {
        question: "Is coding required to build?",
        answer: "No, building with Frenk AI requires no coding skills.",
      },
    ],
    promote: [
      {
        question: "Can Frenk AI help with marketing?",
        answer: "Yes, it provides automated marketing recommendations.",
      },
      {
        question: "Does it support social platforms?",
        answer: "It can post and track performance across platforms.",
      },
      {
        question: "Are analytics available?",
        answer: "Yes, built-in analytics are included.",
      },
    ],
  };
  const content = faqContent[activeTab];

  return (
    <section className="bg-color p-5">
      <div className="container">
        <h2 className="text-center fs-1">FAQ</h2>
        <p className="mb-5 pb-3 text-center fs-4">Your Question Answer Here</p>

        <div className="row">

          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <ul className="list-unstyled text-center text-md-start">
              <li className={`mt-3 pointer ${activeTab === "general" ? "fw-bold" : ""}`} onClick={() => changeTab("general")}>General</li>
              <li className={`mt-3 pointer ${activeTab === "build" ? "fw-bold" : ""}`} onClick={() => changeTab("build")}>Build</li>
              <li className={`mt-3 pointer ${activeTab === "promote" ? "fw-bold" : ""}`} onClick={() => changeTab("promote")}>Promote</li>
            </ul>
          </div>


          <div className="col-12 col-md-9">
            <div className="d-flex align-items-center mb-4">
              <i className="fa-solid fa-bars fs-2 text" />
              <span className="ms-3 fs-3 text-capitalize">{activeTab} Questions</span>
            </div>


            <div className="d-flex justify-content-between align-items-center mt-4 fs-5 pointer" onClick={() => setShowAnswer1(!showAnswer1)}>
              <p className="m-0">{content[0].question}</p>
              <i className="fa-solid fa-caret-down" />
            </div>
            {showAnswer1 ? (
              <p style={{ fontSize: "16px", color: "gray" }} className="mt-2">
                {content[0].answer}
              </p>
            ) : null}


            <div className="d-flex justify-content-between align-items-center mt-4 fs-5 pointer" onClick={() => setShowAnswer2(!showAnswer2)}>
              <p className="m-0">{content[1].question}</p>
              <i className="fa-solid fa-caret-down" />
            </div>
            {showAnswer2 ? (
              <p style={{ fontSize: "16px", color: "gray" }} className="mt-2">
                {content[1].answer}
              </p>
            ) : null}


            <div className="d-flex justify-content-between align-items-center mt-4 fs-5 pointer" onClick={() => setShowAnswer3(!showAnswer3)}>
              <p className="m-0">{content[2].question}</p>
              <i className="fa-solid fa-caret-down" />
            </div>
            {showAnswer3 ? (
              <p style={{ fontSize: "16px", color: "gray" }} className="mt-2">
                {content[2].answer}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
