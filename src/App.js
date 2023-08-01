import { useEffect, useState } from "react";

export default function App() {
  const [valueInput, setValueInput] = useState(1);
  const [valueInputCur, setValueInputCur] = useState("EUR");
  const [valueOutput, setValueOutput] = useState();
  const [valueOutputCur, setValueOutputCur] = useState("USD");

  useEffect(
    function () {
      const controller = new AbortController();
      async function currencyConverter() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${valueInput}&from=${valueInputCur}&to=${valueOutputCur}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          // setValueOutput(Object.values(data.rates));
          setValueOutput(data.rates[valueOutputCur]);
        } catch (err) {
          if (err.name !== "AbortError") console.error(err.message);
        }
      }
      if (valueInputCur === valueOutputCur) return setValueOutput(valueInput);

      currencyConverter();

      return function () {
        controller.abort();
      };
    },
    [valueInput, valueInputCur, valueOutputCur]
  );

  return (
    <div className="app">
      <img src="../img/money.png" alt="Exchange Rate Logo" />
      <h1>Currency Converter</h1>
      <div className="currency--input">
        <select
          value={valueInputCur}
          onChange={(e) => setValueInputCur(e.target.value)}
        >
          <option selected>EUR</option>
          <option>USD</option>
          <option>CAD</option>
          <option>MXN</option>
        </select>
        <input
          type="number"
          value={valueInput}
          onChange={(e) => setValueInput(Number(e.target.value))}
        />
      </div>
      <div className="currency--display">
        <h2>
          {valueInput} {valueInputCur} = {valueOutput} {valueOutputCur}
        </h2>
      </div>
      <div className="currency--input">
        <select
          value={valueOutputCur}
          onChange={(e) => setValueOutputCur(e.target.value)}
        >
          <option>EUR</option>
          <option selected>USD</option>
          <option>CAD</option>
          <option>MXN</option>
        </select>
        <input type="number" value={valueOutput} />
      </div>
    </div>
  );
}
