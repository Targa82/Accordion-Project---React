import React, { useState, useEffect } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section>
          {question.map((q) => (
            <Question key={q.id} {...q} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
